import DestinationCard from '../components/DestinationCard'
import Navbar from '../components/Navbar'
import { destinations } from '../data/destinations'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="app">
      <Navbar />

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

          <Link className="find-button" to="/plan">
            Find trips <span>→</span>
          </Link>
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
            <DestinationCard
              key={destination.id}
              city={destination.city}
              state={destination.state}
              description={destination.description}
              image={destination.image}
              tags={destination.tags}
            />
        ))}
      </div>
    </section>

    </div>
  )
}

export default HomePage