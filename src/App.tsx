import './App.css'
const destinations = [
  {
    id: 1,
    city: 'San Diego',
    state: 'California',
    description: 'Beaches, good food, and easygoing days.',
    image:
      'https://images.unsplash.com/photo-1538964173425-93884d739596',
    tags: ['Beach', 'Food', 'Relaxed'],
  },
  {
    id: 2,
    city: 'Seattle',
    state: 'Washington',
    description: 'Coffee, city views, and nearby nature.',
    image:
      'https://images.unsplash.com/photo-1502175353174-a7a70e73b362',
    tags: ['City', 'Nature', 'Food'],
  },
{
    id: 3,
    city: 'New York',
    state: 'New York',
    description: 'Food, neighborhoods, shopping, and nonstop energy.',
    image:
      'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80',
    tags: ['City', 'Food', 'Shopping'],
  },
  {
    id: 4,
    city: 'Sedona',
    state: 'Arizona',
    description: 'Red rocks, scenic trails, and desert sunsets.',
    image:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35',
    tags: ['Nature', 'Adventure', 'Relaxed'],
  },
]
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

    <section className="discover" id="explore">
      <div className="section-heading">
        <div>
          <p className="section-label">EXPLORE BY VIBE</p>
          <h2>Find your kind of trip.</h2>
        </div>

        <p className="section-description">
          Not sure where to go? Start with a feeling.
        </p>
      </div>

      <div className="discover-grid">
        <article className="discover-card">
          <div className="discover-image beach-image">
            <span>Beach</span>
          </div>

          <div className="discover-card-content">
            <h3>Beach days</h3>
            <p>Warm weather, coastal towns, and slow afternoons.</p>
          </div>
        </article>

        <article className="discover-card">
          <div className="discover-image mountain-image">
            <span>Mountains</span>
          </div>

          <div className="discover-card-content">
            <h3>Mountain escapes</h3>
            <p>Fresh air, scenic drives, hikes, and big views.</p>
          </div>
        </article>

        <article className="discover-card">
          <div className="discover-image city-image">
            <span>City</span>
          </div>

          <div className="discover-card-content">
            <h3>City breaks</h3>
            <p>Good food, busy streets, shopping, and late nights.</p>
          </div>
        </article>
      </div>
    </section>

    <section className="destinations">
      <div className="section-heading">
        <div>
          <p className="section-label">PLACES WORTH A LOOK</p>
          <h2>Maybe your next trip is here.</h2>
        </div>

        <button className="see-more-button" type="button">
          See more <span>→</span>
        </button>
      </div>

      <div className="destination-grid">
        {destinations.map((destination) => (
          <article className="destination-card" key={destination.id}>
            <div className="destination-photo">
              <img
                src={destination.image}
                alt={`${destination.city}, ${destination.state}`}
              />

              <button
                className="save-button"
                type="button"
                aria-label={`Save ${destination.city}`}
              >
                ♡
              </button>
            </div>

            <div className="destination-info">
              <p className="destination-state">{destination.state}</p>

              <h3>{destination.city}</h3>

              <p className="destination-description">
                {destination.description}
              </p>

              <div className="destination-tags">
                {destination.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    </div>
  )
}

export default App