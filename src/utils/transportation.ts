export type DistanceCategory =
  | 'nearby'
  | 'regional'
  | 'long-distance'

export function getDistanceCategory(
  distanceMiles: number
): DistanceCategory {
  if (distanceMiles <= 100) {
    return 'nearby'
  }

  if (distanceMiles <= 500) {
    return 'regional'
  }

  return 'long-distance'
}

export type TransportationAssessment = {
  distanceCategory: DistanceCategory
  needsRouteCheck: boolean
  needsFlightCheck: boolean
}

export function assessTransportation(
  distanceMiles: number
): TransportationAssessment {
  const distanceCategory = getDistanceCategory(distanceMiles)

  return {
    distanceCategory,
    needsRouteCheck: true,
    needsFlightCheck: distanceCategory === 'long-distance',
  }
}