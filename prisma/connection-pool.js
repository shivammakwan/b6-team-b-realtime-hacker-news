import { PrismaClient } from "@prisma/client";

//==============for Dev Env =====
const prisma = new PrismaClient();

//=============== for Production Env ==============
// if (process.env.NODE_ENV === "production") {
//     prisma = new PrismaClient();
// } else {
//     if (!global.prisma) {
//         global.prisma = new PrismaClient();
//     }
//     prisma = global.prisma;
// }
//==================================================
export default prisma;
