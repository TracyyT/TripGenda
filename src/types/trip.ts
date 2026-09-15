export type TravelTolerance =
  | 'short'
  | 'medium'
  | 'long'
  | 'anywhere'

export type TransportBudget =
  | '100'
  | '250'
  | '500'
  | '500+'
  | 'flexible'

export type TransportPreference =
  | 'no-flights'
  | 'no-long-drives'
  | 'either'

export type TemperaturePreference =
  | 'cool'
  | 'mild'
  | 'warm'
  | 'hot'
  | 'any'

export type WeatherPreference =
  | 'sunny'
  | 'snowy'
  | 'rain-ok'
  | 'dont-care'

export type TripVibe =
  | 'beach'
  | 'mountains'
  | 'city'
  | 'nature'
  | 'food'
  | 'relaxing'
  | 'adventure'
  | 'quick-getaway'

export type ActivityLevel =
  | 'relaxed'
  | 'balanced'
  | 'active'
  | 'any'

export type TripPreferences = {
  origin: string

  startDate: string
  endDate: string
  tripLength: number

  travelTolerance: TravelTolerance
  transportBudget: TransportBudget
  transportPreference: TransportPreference

  temperaturePreference: TemperaturePreference
  weatherPreferences: WeatherPreference[]

  tripVibes: TripVibe[]
  activityLevel: ActivityLevel
}