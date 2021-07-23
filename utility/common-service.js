import fetch from "unfetch";

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const get_nth_suffix = (date) => {
    switch (date) {
        case 1:
        case 21:
        case 31:
            return "st";
        case 2:
        case 22:
            return "nd";
        case 3:
        case 23:
            return "rd";
        default:
            return "th";
    }
};
const date_Format = (val) => val.getDate() + get_nth_suffix(val.getDate()) + " " + monthNames[val.getMonth()] + " " + val.getFullYear();

const fetcher = async (path) => {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Error while fetching records.`);
    return await res.json();
};
const temp_user = () => "user_" + Math.random(6).toString(36).substr(2).substr(0, 6);
export { date_Format, fetcher, temp_user };
