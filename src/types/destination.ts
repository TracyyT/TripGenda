import type {
  ActivityLevel,
  TemperaturePreference,
  TripVibe,
} from './trip'
import type { Coordinates } from './location'

export type Destination = {
  id: number

  city: string
  state: string
  description: string
  image: string
  tags: string[]

  coordinates: Coordinates

  temperature: Exclude<TemperaturePreference, 'any'>
  vibes: TripVibe[]
  activityLevels: Exclude<ActivityLevel, 'any'>[]

  idealTripLength: {
    min: number
    max: number
  }
}