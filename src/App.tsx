import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="/">
          {/* <span className="logo-mark">✦</span> */}
          TripGenda
        </a>

        <nav className="nav-links">
          <a href="#explore">Explore</a>
          <a href="#trips">My Trips</a>
          <a href="#saved">Saved</a>
        </nav>

        <button className="profile-button" type="button">
          T
        </button>
      </header>

    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">FIND YOUR NEXT</p>

        <h1>Where should we go next?</h1>

        <p className="hero-subtitle">
          Tell us a little about your trip. We'll find places that fit.
        </p>

        <div className="trip-starter">
          <button className="trip-field" type="button">
            <span className="field-label">FROM</span>
            <span className="field-value">City or ZIP</span>
          </button>

          <div className="field-divider" />

          <button className="trip-field" type="button">
            <span className="field-label">WHEN</span>
            <span className="field-value">Add dates</span>
          </button>

          <div className="field-divider" />

          <button className="trip-field" type="button">
            <span className="field-label">TRIP VIBE</span>
            <span className="field-value">Pick your vibe</span>
          </button>

          <button className="find-button" type="button">
            Find trips <span>→</span>
          </button>
        </div>

        <div className="vibe-list">
          <button type="button">☀ Beach</button>
          <button type="button">⛰ Mountains</button>
          <button type="button">🍜 Food</button>
          <button type="button">🌲 Nature</button>
          <button type="button">🏙 City</button>
          <button type="button">✦ Surprise me</button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default App