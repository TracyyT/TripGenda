import Navbar from '../components/Navbar'

function TripSetupPage() {
  return (
    <div className="app">
      <Navbar />

      <main className="trip-setup-page">
        <p className="section-label">PLAN YOUR TRIP</p>

        <h1>Let's find somewhere you'll actually want to go.</h1>

        <p>
          Tell TripGenda what kind of trip you're looking for.
        </p>
      </main>
    </div>
  )
}

export default TripSetupPage