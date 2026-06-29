import destinations from "../../data/destinations";
import DestinationCard from "./DestinationsCard";
import "./destinations.css";

function Destinations() {
  return (
    <section
      id="destinations"
      className="destinations-section"
    >
      <div className="section-header">

        <span>
          Explore Places
        </span>

        <h2>
          Featured Destinations
        </h2>

        <p>
          Discover the most beautiful places
          on the Arunachal Explorer Circuit.
        </p>

      </div>

      <div className="destinations-grid">

        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            name={destination.name}
            description={destination.description}
            image={destination.image}
          />
        ))}

      </div>
    </section>
  );
}

export default Destinations;