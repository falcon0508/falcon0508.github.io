import { useState } from "react";

const focusAreas = [
  {
    title: "Software engineering",
    description:
      "I like building reliable features with thoughtful structure, clean interfaces, and practical tradeoffs.",
  },
  {
    title: "Machine learning",
    description:
      "I enjoy turning messy data into models, experiments, and tools that help people make better decisions.",
  },
  {
    title: "Research support",
    description:
      "My internship experience taught me how to work with researchers, debug systems, and keep projects moving.",
  },
];

const interests = [
  {
    category: "Running",
    images: [
      "/hobbies/running-1.jpg",
      "/hobbies/running-2.jpg",
      "/hobbies/running-3.jpg",
    ],
    items: [
      "Running regularly since 2019.",
      "Longest distance: Half-Marathon",
      "Favorite route: Lake Mendota Lakeshore path",
    ],
  },
  {
    category: "Food",
    images: ["/hobbies/food-1.jpg", "/hobbies/food-2.jpg", "/hobbies/food-3.jpg"],
    items: [
      "Favorite food: Soto ayam/daging",
      "Favorite cuisines: Indonesian, Indian, Japanese, Mexican",
    ],
  },
  {
    category: "Favorite Games",
    images: ["/hobbies/game-1.jpeg", "/hobbies/game-2.jpg", "/hobbies/game-3.jpg"],
    items: [
      "Super Smash Bros. Ultimate",
      "Kirby Super Star Ultra",
      "Mobile Legends: Bang Bang",
    ],
  },
];

function About() {
  const [activeInterestIndex, setActiveInterestIndex] = useState(0);
  const [activeImageIndexes, setActiveImageIndexes] = useState(() =>
    Object.fromEntries(interests.map((group) => [group.category, 0])),
  );

  const activeInterest = interests[activeInterestIndex];
  const activeImageIndex = activeImageIndexes[activeInterest.category] ?? 0;

  const shiftInterest = (direction) => {
    setActiveInterestIndex((current) => (current + direction + interests.length) % interests.length);
  };

  const shiftImage = (direction) => {
    setActiveImageIndexes((current) => {
      const nextIndex =
        (activeImageIndex + direction + activeInterest.images.length) % activeInterest.images.length;

      return {
        ...current,
        [activeInterest.category]: nextIndex,
      };
    });
  };

  return (
    <section className="page page--split">
      <div className="page-intro">
        <p className="eyebrow">About</p>
        <h1>Engineer, philomath, foodie, and gamer</h1>
      </div>

      <div className="content-stack">
        <article className="panel">
          <h2>What I bring</h2>
          <p>
            I enjoy solving problems that need both strong engineering habits
            and analytical thinking. That includes user-facing apps, research
            tooling, data workflows, and machine learning systems.
          </p>
          <p>
            I am currently looking for software engineering and data
            engineering opportunities where I can keep learning while shipping
            useful work.
          </p>
        </article>

        <div className="card-grid card-grid--three">
          {focusAreas.map((item) => (
            <article className="panel panel--tinted" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <article className="panel panel--interest">
          <div className="panel-header">
            <div>
              <p className="eyebrow eyebrow--compact">Hobbies and interests</p>
              <h2>What I enjoy outside of work</h2>
            </div>
          </div>

          <div className="interest-spotlight">
            <div className="interest-spotlight-header">
              <button
                type="button"
                className="interest-nav-button interest-nav-button--ghost"
                onClick={() => shiftInterest(-1)}
                aria-label="Previous hobby"
              >
                &lt;
              </button>

              <div className="interest-spotlight-title">
                <h3>{activeInterest.category}</h3>
              </div>

              <button
                type="button"
                className="interest-nav-button interest-nav-button--ghost"
                onClick={() => shiftInterest(1)}
                aria-label="Next hobby"
              >
                &gt;
              </button>
            </div>

            <div className="interest-carousel">
              <img
                className="interest-carousel-image"
                src={activeInterest.images[activeImageIndex]}
                alt={`${activeInterest.category} image ${activeImageIndex + 1}`}
              />

              <div className="interest-carousel-controls">
                <button
                  type="button"
                  className="interest-nav-button"
                  onClick={() => shiftImage(-1)}
                  aria-label={`Previous ${activeInterest.category} image`}
                >
                  &lt;
                </button>

                <span className="interest-carousel-counter">
                  {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                  {String(activeInterest.images.length).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  className="interest-nav-button"
                  onClick={() => shiftImage(1)}
                  aria-label={`Next ${activeInterest.category} image`}
                >
                  &gt;
                </button>
              </div>
            </div>

            <ul className="interest-list interest-list--spotlight">
              {activeInterest.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="interest-pills">
            {interests.map((group, index) => (
              <button
                key={group.category}
                type="button"
                className={`interest-pill${index === activeInterestIndex ? " is-active" : ""}`}
                onClick={() => setActiveInterestIndex(index)}
              >
                {group.category}
              </button>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
