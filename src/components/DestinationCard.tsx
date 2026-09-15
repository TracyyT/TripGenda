import type { Destination } from '../types/destination'

type DestinationCardProps = Omit<Destination, 'id'>

function DestinationCard({
  city,
  state,
  description,
  image,
  tags,
}: DestinationCardProps) {
  return (
    <article className="destination-card">
      <div className="destination-photo">
        <img
          src={image}
          alt={`${city}, ${state}`}
        />

        <button
          className="save-button"
          type="button"
          aria-label={`Save ${city}`}
        >
          ♡
        </button>
      </div>

      <div className="destination-info">
        <p className="destination-state">{state}</p>

        <h3>{city}</h3>

        <p className="destination-description">
          {description}
        </p>

        <div className="destination-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default DestinationCard