import { ABOpeningHours, ABWeekOpeningHours } from "../types/ABOpeningHours";

export const ABFunctionDateWithinOpeningHours = (date: Date, openingHours: ABWeekOpeningHours): boolean => {

    const currentMinute = date.getHours() * 60 + date.getMinutes();
    const currentDay = date.getDay();

    let todayHours: ABOpeningHours[];

    switch (currentDay) {
        case 0:
            todayHours = openingHours.sunday;
            break;
        case 1:
            todayHours = openingHours.monday;
            break;
        case 2:
            todayHours = openingHours.tuesday;
            break;
        case 3:
            todayHours = openingHours.wednesday;
            break;
        case 4:
            todayHours = openingHours.thursday;
            break;
        case 5:
            todayHours = openingHours.friday;
            break;
        case 6:
        default:
            console.log("Error. Weekday not found.");
            todayHours = openingHours.saturday;
            break;
    }

    const found = todayHours.find(hourRange => currentMinute >= hourRange.opening && currentMinute < hourRange.closing);
    return (found != undefined)
}