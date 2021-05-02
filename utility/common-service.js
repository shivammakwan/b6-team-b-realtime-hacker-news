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
    if (!res.ok) throw new Error(`Something went wrong. Please try again.`);
    return await res.json();
};
export { date_Format, fetcher };
