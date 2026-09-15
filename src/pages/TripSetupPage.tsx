import { useState } from 'react'
import Navbar from '../components/Navbar'

function TripSetupPage() {
  const [origin, setOrigin] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const hasValidDates =
    startDate !== '' &&
    endDate !== '' &&
    endDate >= startDate

  const canContinue =
    origin.trim() !== '' &&
    hasValidDates

    const tripLength = hasValidDates
    ? Math.floor(
        (new Date(`${endDate}T00:00:00`).getTime() -
            new Date(`${startDate}T00:00:00`).getTime()) /
            (1000 * 60 * 60 * 24)
        ) + 1
    : 0

  return (
    <div className="app">
      <Navbar />

      <main className="trip-setup-page">
        <div className="trip-setup-header">
          <p className="section-label">PLAN YOUR TRIP</p>

          <h1>Let's start with the basics.</h1>

          <p>
            Tell us where you're starting and when you want to go.
          </p>
        </div>

        <div className="trip-setup-card">
          <div className="setup-field">
            <label htmlFor="origin">Where are you starting from?</label>

            <p className="setup-hint">
              Enter a city or ZIP code.
            </p>

            <input
              id="origin"
              type="text"
              placeholder="e.g. College Station, TX"
              value={origin}
              onChange={(event) => setOrigin(event.target.value)}
            />
          </div>

          <div className="date-fields">
            <div className="setup-field">
              <label htmlFor="start-date">Start date</label>

              <input
                id="start-date"
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
              />
            </div>

            <div className="setup-field">
              <label htmlFor="end-date">End date</label>

              <input
                id="end-date"
                type="date"
                value={endDate}
                min={startDate}
                onChange={(event) => setEndDate(event.target.value)}
              />
            </div>
          </div>

        {hasValidDates && (
        <p className="trip-length">
            {tripLength}-day trip ✦
        </p>
        )}

        <button
            className="continue-button"
            type="button"
            disabled={!canContinue}
            >
            Continue <span>→</span>
        </button>
        </div>
      </main>
    </div>
  )
}

export default TripSetupPage