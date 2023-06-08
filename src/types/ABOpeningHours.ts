
export interface ABOpeningHours {
  opening: number
  closing: number
}

export interface ABWeekOpeningHours {
  monday: ABOpeningHours[]
  tuesday: ABOpeningHours[]
  wednesday: ABOpeningHours[]
  thursday: ABOpeningHours[]
  friday: ABOpeningHours[]
  saturday: ABOpeningHours[]
  sunday: ABOpeningHours[]
}
