import Navbar from '../components/Navbar'
import { destinations } from '../data/destinations'
import { recommendDestinations } from '../utils/recommendDestinations'
import type { TripPreferences } from '../types/trip'
import RecommendationCard from '../components/RecommendationCard'
import { useEffect } from 'react'

function DestinationResultsPage() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
  }, [])

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
    <div className="destination-results-page">
        <Navbar />

        <main className="destination-results-main">
        <header className="destination-results-header">
            <p className="results-eyebrow">
            YOUR TRIP MATCHES
            </p>

            <h1>Your next trip starts here.</h1>

            <p>
            Based on your travel style, weather preferences,
            and the kind of trip you're looking for.
            </p>
        </header>

        <div className="recommendation-grid">
            {recommendations.slice(0, 6).map((result, index) => (
            <RecommendationCard
                key={result.destination.id}
                result={result}
                rank={index + 1}
            />
            ))}
        </div>
        </main>
    </div>
  )
}

export default DestinationResultsPage