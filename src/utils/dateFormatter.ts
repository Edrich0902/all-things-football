import moment from "moment";

export const getPrettyDate = (date: string): string => {
    return moment(date).format('dddd D MMM YYYY, H:mm');
}

export const getCurrentSeasonYear = (): string => {
    const currentMonth = moment().month();
    let currentYear = moment().year();
    //season starts after August - if month less than 8 use previous year
    if (currentMonth < 8) currentYear --;
    return currentYear.toString();
}

export const getAgeFromDate = (date: string): string => moment().diff(date, 'years').toString();