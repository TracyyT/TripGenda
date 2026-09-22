import Navbar from '../components/Navbar'
import { destinations } from '../data/destinations'
import { recommendDestinations } from '../utils/recommendDestinations'
import type { TripPreferences } from '../types/trip'

function DestinationResultsPage() {
  const savedPreferences = localStorage.getItem(
    'tripgenda-trip-preferences'
  )

  const preferences: TripPreferences | null = savedPreferences
    ? JSON.parse(savedPreferences)
    : null

  if (!preferences) {
    return (
      <div>
        <Navbar />

        <main>
          <h1>No trip preferences found.</h1>
          <p>Start planning a trip to see your recommendations.</p>
        </main>
      </div>
    )
  }

  const recommendations = recommendDestinations(
    destinations,
    preferences
  )

  return (
    <div>
      <Navbar />

      <main>
        <h1>Your next trip starts here.</h1>
        <p>
          We found destinations that match your trip preferences.
        </p>

        <div>
          {recommendations.map((result, index) => (
            <div key={result.destination.id}>
              <h2>
                #{index + 1} {result.destination.city},{' '}
                {result.destination.state}
              </h2>

              <p>Match score: {result.score}</p>

              {result.reasons.map((reason) => (
                <p key={reason}>{reason}</p>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default DestinationResultsPage