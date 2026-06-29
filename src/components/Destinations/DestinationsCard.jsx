function DestinationCard({
  name,
  description,
  image,
}) {
  return (
    <div className="destination-card">

      <img
        src={image}
        alt={name}
        className="destination-image"
      />

      <div className="destination-content">

        <h3>{name}</h3>

        <p>{description}</p>

        <button>
          View Details
        </button>

      </div>

    </div>
  );
}

export default DestinationCard;