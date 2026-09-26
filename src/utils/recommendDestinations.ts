import type { Destination } from '../types/destination'
import type { TripPreferences } from '../types/trip'
import { calculateDistanceMiles } from './distance'

export type ScoredDestination = {
  destination: Destination
  score: number
  reasons: string[]
  distanceMiles: number
}

export function scoreDestination(
  destination: Destination,
  preferences: TripPreferences
): ScoredDestination {
  let score = 0
  const reasons: string[] = []

  const distanceMiles = calculateDistanceMiles(
    preferences.originLocation,
    destination.coordinates
  )

  // Temperature match
  if (
    preferences.temperaturePreference !== 'any' &&
    destination.temperature === preferences.temperaturePreference
  ) {
    score += 3
    reasons.push('Matches your preferred temperature')
  }

  // Trip vibe matches
  const matchingVibes = preferences.tripVibes.filter((vibe) =>
    destination.vibes.includes(vibe)
  )

  score += matchingVibes.length * 2

  if (matchingVibes.length > 0) {
    const formattedVibes = matchingVibes
        .map((vibe) =>
        vibe
            .split('-')
            .map(
            (word) =>
                word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join(' ')
        )
        .join(' + ')

    reasons.push(`${formattedVibes} match your trip vibe`)
    }

  // Activity level match
  if (
    preferences.activityLevel !== 'any' &&
    destination.activityLevels.includes(preferences.activityLevel)
  ) {
    score += 1
    reasons.push('Fits your preferred travel pace')
  }

  if (
    preferences.tripLength >= destination.idealTripLength.min &&
    preferences.tripLength <= destination.idealTripLength.max
    ) {
    score += 2

    reasons.push(
        `${preferences.tripLength} days is a good fit for this destination`
    )
    }

  return {
    destination,
    score,
    reasons,
    distanceMiles,
  }
}

export function recommendDestinations(
  destinations: Destination[],
  preferences: TripPreferences
): ScoredDestination[] {
  return destinations
    .map((destination) =>
      scoreDestination(destination, preferences)
    )
    .sort((a, b) => b.score - a.score)
}