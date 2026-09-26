import type { Coordinates } from '../types/location'

const EARTH_RADIUS_MILES = 3958.8

function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180)
}

export function calculateDistanceMiles(
  origin: Coordinates,
  destination: Coordinates
): number {
  const latitudeDifference = degreesToRadians(
    destination.latitude - origin.latitude
  )

  const longitudeDifference = degreesToRadians(
    destination.longitude - origin.longitude
  )

  const originLatitude = degreesToRadians(origin.latitude)
  const destinationLatitude = degreesToRadians(
    destination.latitude
  )

  const a =
    Math.sin(latitudeDifference / 2) ** 2 +
    Math.cos(originLatitude) *
      Math.cos(destinationLatitude) *
      Math.sin(longitudeDifference / 2) ** 2

  const c = 2 * Math.atan2(
    Math.sqrt(a),
    Math.sqrt(1 - a)
  )

  return EARTH_RADIUS_MILES * c
}