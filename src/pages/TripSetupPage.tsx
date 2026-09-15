import { useState } from 'react'
import Navbar from '../components/Navbar'

function TripSetupPage() {
  const [origin, setOrigin] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [travelTolerance, setTravelTolerance] = useState('')
  const [transportBudget, setTransportBudget] = useState('')
  const [transportPreference, setTransportPreference] = useState('')
  const [temperaturePreference, setTemperaturePreference] = useState('')
  const [weatherPreferences, setWeatherPreferences] = useState<string[]>([])
  const [tripVibes, setTripVibes] = useState<string[]>([])
  const [activityLevel, setActivityLevel] = useState('')
  

  const hasValidDates =
    startDate !== '' &&
    endDate !== '' &&
    endDate >= startDate

  const canContinue =
    origin.trim() !== '' &&
    hasValidDates &&
    travelTolerance !== '' &&
    transportBudget !== '' &&
    transportPreference !== '' &&
    temperaturePreference !== '' &&
    tripVibes.length > 0 &&
    activityLevel != ''

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

        <div className="setup-section">
            <div className="setup-question">
                <h2>How far are you willing to go?</h2>
                <p>We'll use this to narrow down realistic destinations.</p>
            </div>

            <div className="option-grid">
                <button
                className={`option-card ${
                    travelTolerance === 'short' ? 'selected' : ''
                }`}
                type="button"
                onClick={() => setTravelTolerance('short')}
                >
                <span className="option-icon">🚗</span>
                <strong>Keep it close</strong>
                <span>About 2 hours</span>
                </button>

                <button
                className={`option-card ${
                    travelTolerance === 'medium' ? 'selected' : ''
                }`}
                type="button"
                onClick={() => setTravelTolerance('medium')}
                >
                <span className="option-icon">🛣</span>
                <strong>A little farther</strong>
                <span>Up to about 6 hours</span>
                </button>

                <button
                className={`option-card ${
                    travelTolerance === 'long' ? 'selected' : ''
                }`}
                type="button"
                onClick={() => setTravelTolerance('long')}
                >
                <span className="option-icon">✈</span>
                <strong>Make a trip of it</strong>
                <span>Up to about 10 hours</span>
                </button>

                <button
                className={`option-card ${
                    travelTolerance === 'anywhere' ? 'selected' : ''
                }`}
                type="button"
                onClick={() => setTravelTolerance('anywhere')}
                >
                <span className="option-icon">🌎</span>
                <strong>Anywhere</strong>
                <span>I'm open to flying</span>
                </button>
            </div>
        </div>

        <div className="setup-section">
            <div className="setup-question">
                <h2>What's your transportation budget?</h2>
                <p>Per person, for getting to and from the destination.</p>
            </div>

            <div className="budget-options">
                {[
                { value: '100', label: 'Under $100' },
                { value: '250', label: '$100–250' },
                { value: '500', label: '$250–500' },
                { value: '500+', label: '$500+' },
                { value: 'flexible', label: 'Flexible' },
                ].map((budget) => (
                <button
                    className={`budget-option ${
                    transportBudget === budget.value ? 'selected' : ''
                    }`}
                    type="button"
                    key={budget.value}
                    onClick={() => setTransportBudget(budget.value)}
                >
                    {budget.label}
                </button>
                ))}
            </div>
        </div>

        <div className="setup-section">
            <div className="setup-question">
                <h2>Any transportation dealbreakers?</h2>
                <p>We'll avoid recommending trips that don't fit how you want to travel.</p>
            </div>

            <div className="transport-options">
                <button
                className={`transport-option ${
                    transportPreference === 'no-flights' ? 'selected' : ''
                }`}
                type="button"
                onClick={() => setTransportPreference('no-flights')}
                >
                <span>🚗</span>

                <div>
                    <strong>No flights</strong>
                    <p>I'd rather stay on the ground.</p>
                </div>
                </button>

                <button
                className={`transport-option ${
                    transportPreference === 'no-long-drives' ? 'selected' : ''
                }`}
                type="button"
                onClick={() => setTransportPreference('no-long-drives')}
                >
                <span>✈️</span>

                <div>
                    <strong>No long drives</strong>
                    <p>I'd rather fly if it's far.</p>
                </div>
                </button>

                <button
                className={`transport-option ${
                    transportPreference === 'either' ? 'selected' : ''
                }`}
                type="button"
                onClick={() => setTransportPreference('either')}
                >
                <span>✦</span>

                <div>
                    <strong>Either is fine</strong>
                    <p>Whatever makes the most sense.</p>
                </div>
                </button>
            </div>
        </div>

        <div className="setup-section">
            <div className="setup-question">
                <h2>What's your ideal weather?</h2>
                <p>Pick the temperature you'd be happiest traveling in.</p>
            </div>

            <div className="temperature-options">
                {[
                    { value: 'cool', label: 'Cool', detail: 'Below 60°F', icon: '🧥' },
                    { value: 'mild', label: 'Mild', detail: '60–72°F', icon: '🌤️' },
                    { value: 'warm', label: 'Warm', detail: '73–84°F', icon: '☀️' },
                    { value: 'hot', label: 'Hot', detail: '85°F+', icon: '🌴' },
                    { value: 'any', label: 'Any', detail: 'No preference', icon: '✦' },
                ].map((temperature) => (
                <button
                    className={`temperature-option ${
                    temperaturePreference === temperature.value ? 'selected' : ''
                    }`}
                    type="button"
                    key={temperature.value}
                    onClick={() => setTemperaturePreference(temperature.value)}
                >
                    <span>{temperature.icon}</span>
                    <strong>{temperature.label}</strong>
                    <small>{temperature.detail}</small>
                </button>
                ))}
            </div>

            <div className="weather-condition-question">
                <p>Anything you especially want?</p>

                <div className="weather-condition-options">
                    {[
                    { value: 'sunny', label: 'Sunny', icon: '☀️' },
                    { value: 'snowy', label: 'Snowy', icon: '❄️' },
                    { value: 'rain-ok', label: "Rain's okay", icon: '🌧️' },
                    { value: 'dont-care', label: "Don't care", icon: '✦' },
                    ].map((weather) => (
                    <button
                        className={`weather-condition ${
                        weatherPreferences.includes(weather.value) ? 'selected' : ''
                        }`}
                        type="button"
                        key={weather.value}
                        onClick={() => {
                            if (weather.value === 'dont-care') {
                                setWeatherPreferences(['dont-care'])
                                return
                            }

                            const withoutDontCare = weatherPreferences.filter(
                                (preference) => preference !== 'dont-care'
                            )

                            if (weatherPreferences.includes(weather.value)) {
                                setWeatherPreferences(
                                withoutDontCare.filter(
                                    (preference) => preference !== weather.value
                                )
                                )
                            } else {
                                setWeatherPreferences([
                                ...withoutDontCare,
                                weather.value,
                                ])
                            }
                            }}
                    >
                        <span>{weather.icon}</span>
                        {weather.label}
                    </button>
                    ))}
                </div>
            </div>

            <div className="setup-section">
            <div className="setup-question">
                <h2>What's the vibe?</h2>
                <p>Pick as many as you want. We'll look for places that match.</p>
            </div>

            <div className="vibe-options">
                {[
                { value: 'beach', label: 'Beach', icon: '☀️' },
                { value: 'mountains', label: 'Mountains', icon: '⛰️' },
                { value: 'city', label: 'City', icon: '🏙️' },
                { value: 'nature', label: 'Nature', icon: '🌲' },
                { value: 'food', label: 'Food', icon: '🍜' },
                { value: 'relaxing', label: 'Relaxing', icon: '🌿' },
                { value: 'adventure', label: 'Adventure', icon: '🥾' },
                { value: 'quick-getaway', label: 'Quick getaway', icon: '🚙' },
                ].map((vibe) => (
                <button
                    className={`vibe-option ${
                    tripVibes.includes(vibe.value) ? 'selected' : ''
                    }`}
                    type="button"
                    key={vibe.value}
                    onClick={() => {
                    if (tripVibes.includes(vibe.value)) {
                        setTripVibes(
                        tripVibes.filter(
                            (selectedVibe) => selectedVibe !== vibe.value
                        )
                        )
                    } else {
                        setTripVibes([
                        ...tripVibes,
                        vibe.value,
                        ])
                    }
                    }}
                >
                    <span>{vibe.icon}</span>
                    <strong>{vibe.label}</strong>
                </button>
                ))}
            </div>
            </div>

            <div className="setup-section">
            <div className="setup-question">
                <h2>What's your travel pace?</h2>
                <p>How packed do you want your days to feel?</p>
            </div>

            <div className="activity-options">
                {[
                {
                    value: 'relaxed',
                    label: 'Relaxed',
                    detail: 'Slow mornings and plenty of free time.',
                    icon: '🌿',
                },
                {
                    value: 'balanced',
                    label: 'Balanced',
                    detail: 'A good mix of plans and breathing room.',
                    icon: '☀️',
                },
                {
                    value: 'active',
                    label: 'Active',
                    detail: 'Pack the day and see as much as possible.',
                    icon: '⚡',
                },
                {
                    value: 'any',
                    label: 'Any',
                    detail: "I'm flexible with the pace.",
                    icon: '✦',
                },
                ].map((level) => (
                <button
                    className={`activity-option ${
                    activityLevel === level.value ? 'selected' : ''
                    }`}
                    type="button"
                    key={level.value}
                    onClick={() => setActivityLevel(level.value)}
                >
                    <span>{level.icon}</span>

                    <div>
                    <strong>{level.label}</strong>
                    <p>{level.detail}</p>
                    </div>
                </button>
                ))}
            </div>
            </div>

        </div>        

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