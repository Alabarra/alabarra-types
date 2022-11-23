
export type ABOpeningHours = {
    opening: number;
    closing: number;
}

export type ABWeekOpeningHours = {
    monday: ABOpeningHours[],
    tuesday: ABOpeningHours[],
    wednesday: ABOpeningHours[]
    thursday: ABOpeningHours[],
    friday: ABOpeningHours[],
    saturday: ABOpeningHours[],
    sunday: ABOpeningHours[]
}