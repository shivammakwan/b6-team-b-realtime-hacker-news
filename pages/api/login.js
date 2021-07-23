import { Magic, ErrorCode } from "@magic-sdk/admin";
import prisma from "../../prisma/connection-pool";
import { temp_user } from "../../utility/common-service";

const Response = require("../../utility/CustomResponse/Response");
const MESSAGES = require("../../utility/CustomResponse/ResponseMessages");
const CODES = require("../../utility/CustomResponse/ResponseCode");
const STATUS = { SUCCESS: "success", ERROR: "error" };

// Initiating Magic instance for server-side methods
const magic = new Magic(process.env.MAGIC_SECRET_KEY);

export default async function login(req, res) {
    try {
        console.log("Controller => Login Request to Server ");
        if (!req.headers["authorization"]) {
            console.log("header params is required. ");
            res.status(400).json(new Response(MESSAGES.INCOMPLETE_REQUEST, CODES.BAD_REQUEST, STATUS.ERROR));
        } else {
            const didToken = req.headers.authorization.substr(7);
            await magic.token.validate(didToken);
            console.log("req " + req.body["email"]);
            const checkUserExist = await prisma.user.findMany({
                where: {
                    email: req.body["email"],
                },
            });
            console.log("user exists " + checkUserExist.length);
            if (checkUserExist.length > 0) {
              console.log("Updating Auth table");
                const authuser = await prisma.auth.create({
                    data: { userId: checkUserExist[0].id, token: req.headers["authorization"].substr(8) },
                });
                console.log("created auth id " + authuser.id);
            } else {
              console.log("Creating entry for new");
                const temporary_user = temp_user();
                const newuser = await prisma.user.create({
                    data: {
                        username: temporary_user,
                        password: "",
                        email: req.body["email"],
                        firstname: "",
                        lastname: "",
                        role: "user",
                        isActive: true,
                        isVerified: true,
                    },
                });
                console.log("new user created successfully " + JSON.stringify(newuser));
                const authuser = await prisma.auth.create({
                  data: { userId: newuser.id, token: req.headers["authorization"].substr(8) },
              });
              console.log("created auth id for new user " + authuser.id);
            }
            res.status(200).json(new Response(MESSAGES.VALID_USER, CODES.SUCCESS, STATUS.SUCCESS));
        }
    } catch (error) {
        console.log("Login Controller Error : ");
        if (error.message.includes(ErrorCode.TokenExpired)) {
            console.log("Session Expired. ");
            res.status(401).json(new Response(MESSAGES.EXPIRED, CODES.UNAUTHORIZED, STATUS.ERROR));
        } else if (error.message.includes(ErrorCode.MalformedTokenError)) {
            console.log("Token Modified. Request Not Accepted. ");
            res.status(406).json(new Response(MESSAGES.TOKEN_MOD, CODES.NOT_ACCEPTABLE, STATUS.ERROR));
        } else {
            console.log("Internal Server Error. " + error.message);
            res.status(500).json(MESSAGES.SERVER_ERR, CODES.INTERNAL_SERVER_ERROR, STATUS.ERROR);
        }
    }
}
