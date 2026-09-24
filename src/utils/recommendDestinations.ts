import type { Destination } from '../types/destination'
import type { TripPreferences } from '../types/trip'

export type ScoredDestination = {
  destination: Destination
  score: number
  reasons: string[]
}

export function scoreDestination(
  destination: Destination,
  preferences: TripPreferences
): ScoredDestination {
  let score = 0
  const reasons: string[] = []

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

  return {
    destination,
    score,
    reasons,
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