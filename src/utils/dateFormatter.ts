import moment from "moment";

export const getPrettyDate = (date: string): string => {
    return moment(date).format('dddd D MMM YYYY, H:mm');
}