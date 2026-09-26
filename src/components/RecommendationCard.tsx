import type { ScoredDestination } from '../utils/recommendDestinations'

type RecommendationCardProps = {
  result: ScoredDestination
  rank: number
}

function RecommendationCard({
  result,
  rank,
}: RecommendationCardProps) {
  const { destination, reasons } = result

  return (
    <article className="recommendation-card">
      <div className="recommendation-image-wrapper">
        <img
          className="recommendation-image"
          src={destination.image}
          alt={`${destination.city}, ${destination.state}`}
        />

        {rank === 1 && (
          <span className="top-match-badge">
            Top match
          </span>
        )}
      </div>

      <div className="recommendation-content">
        <div className="recommendation-heading">
          <div>
            <p className="recommendation-rank">
              #{rank} FOR YOU
            </p>

            <h2>{destination.city}</h2>
            <p className="recommendation-state">
              {destination.state}
            </p>
            <p>
                About {Math.round(result.distanceMiles).toLocaleString()} miles away
            </p>
          </div>
        </div>

        <p className="recommendation-description">
          {destination.description}
        </p>

        <div className="recommendation-tags">
          {destination.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="match-reasons">
          <h3>Why it matches</h3>

          {reasons.map((reason) => (
            <p key={reason}>
              <span>✓</span>
              {reason}
            </p>
          ))}
        </div>

        <button
          className="explore-destination-button"
          type="button"
        >
          Explore {destination.city} <span>→</span>
        </button>
      </div>
    </article>
  )
}

export default RecommendationCard