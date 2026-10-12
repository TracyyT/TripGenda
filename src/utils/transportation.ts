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