import "./journey.css";

const itinerary = [
  {
    day: 1,
    route: "Silapathar → Pasighat → Yingkiong",
    stay: "Night Stay: Yingkiong",
  },
  {
    day: 2,
    route: "Yingkiong → Scenic Siang Valley → Aalo",
    stay: "Night Stay: Aalo",
  },
  {
    day: 3,
    route: "Aalo → Mountain Routes → Daporijo",
    stay: "Night Stay: Daporijo",
  },
  {
    day: 4,
    route: "Daporijo → Basar → Likabali → Silapathar",
    stay: "Journey Ends",
  },
];

function Journey() {
  return (
    <section id="journey" className="journey">

      <div className="journey-header">
        <span>4 Days • 3 Nights</span>

        <h2>Arunachal Explorer Circuit</h2>

        <p>
          Explore the hidden beauty of Arunachal Pradesh through
          mountains, rivers, tribal villages and breathtaking roads.
        </p>
      </div>

      <div className="timeline">

        {itinerary.map((item) => (
          <div key={item.day} className="timeline-card">

            <div className="day-badge">
              Day {item.day}
            </div>

            <h3>{item.route}</h3>

            <p>{item.stay}</p>

            <button className="journey-btn">
              View Details
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Journey;