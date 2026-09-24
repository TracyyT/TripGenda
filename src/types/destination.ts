import type {
  ActivityLevel,
  TemperaturePreference,
  TripVibe,
} from './trip'

export type Destination = {
  id: number

  city: string
  state: string
  description: string
  image: string
  tags: string[]

  coordinates?: {
    latitude: number
    longitude: number
  }

  temperature: Exclude<TemperaturePreference, 'any'>
  vibes: TripVibe[]
  activityLevels: Exclude<ActivityLevel, 'any'>[]

  idealTripLength: {
    min: number
    max: number
  }
}