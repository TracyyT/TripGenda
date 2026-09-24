export type GeocodedLocation = {
  latitude: number
  longitude: number
  displayName: string
}

type NominatimResult = {
  lat: string
  lon: string
  display_name: string
}

export async function geocodeLocation(
  query: string
): Promise<GeocodedLocation | null> {
  const params = new URLSearchParams({
    q: query,
    format: 'jsonv2',
    limit: '1',
    countrycodes: 'us',
  })

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?${params}`
  )

  if (!response.ok) {
    throw new Error('Unable to geocode location')
  }

  const results: NominatimResult[] = await response.json()

  if (results.length === 0) {
    return null
  }

  const result = results[0]

  return {
    latitude: Number(result.lat),
    longitude: Number(result.lon),
    displayName: result.display_name,
  }
}