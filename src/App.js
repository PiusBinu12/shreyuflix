import React, { useState, useEffect } from "react";
import ShreyuflixIntro from "./components/ShreyuflixIntro";
import "./App.css";

const App = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const openEp = (ep) => setSelectedEpisode(ep);

  const season1 = [
    {
      title: "Ep 1: Fell for you",
      image: `${process.env.PUBLIC_URL}/images/episodes/fellforher.jpg`,
      description: "The post that got me hooked onto you and Chest Pain(I love). I swear I can't name one other song from this bum but he cooked tho.",
    },
    {
      title: "Ep 2: Lenskart cold pic",
      image: `${process.env.PUBLIC_URL}/images/episodes/lenskart.jpg`,
      description: "All these frames but I only got eyes for you gang."
    },
    {
      title: "Ep 3: First Date (Didn't kiss😔)",
      image: `${process.env.PUBLIC_URL}/images/episodes/firstdate.jpg`
    },
  ];

  const season2 = [
    {
      title: "Ep 1: So Long dist",
      image: `${process.env.PUBLIC_URL}/images/episodes/create.jpg`,
    },
    {
      title: "Ep 2: Stalking huzz",
      image: `${process.env.PUBLIC_URL}/images/episodes/skrr.jpg`,
    },
    {
      title: "Ep 3: RAHH",
      image: `${process.env.PUBLIC_URL}/images/episodes/raah.jpg`,
    },
  ];

  const season3 = [
    {
      title: "Ep 1: First day",
      image: `${process.env.PUBLIC_URL}/images/episodes/firstday.jpg`,
      description: "We didn’t need words, just the sound of rain and the warmth of your hand.",
    },
    {
      title: "Ep 2: Second date scenes😬",
      image: `${process.env.PUBLIC_URL}/images/episodes/secondate.jpg`,
      description: "That one selfie where your eyes were half open and you still looked like my safe space.",
    },
    {
      title: "Ep 3: Bob's magic",
      image: `${process.env.PUBLIC_URL}/images/episodes/bobs2.jpg`,
      description: "You understood me when I barely understood myself. Those nights changed everything.",
    },
    {
      title: "Ep 4: Siblings or dating ah💀",
      image: `${process.env.PUBLIC_URL}/images/episodes/sod.jpg`,
      description: "Same nose",
    },
    {
      title: "Ep 5: Gopalan security😘",
      image: `${process.env.PUBLIC_URL}/images/episodes/gobalan.jpg`,
      description: "All those complaints but i secured the deal",
    },
    {
      title: "Ep 6: Third date?",
      image: `${process.env.PUBLIC_URL}/images/episodes/allmegng.jpg`,
      description: "I asked YOU out FIRST dont beleive anyone else!",
    },
    {
      title: "Ep 7: Passed tf out",
      image: `${process.env.PUBLIC_URL}/images/episodes/passed.jpg`,
      description: "I js took your breath away didnt I😝",
    },
  ];

  const Just_Her3 = [
    {
      title: "Bhes jii",
      image: `${process.env.PUBLIC_URL}/images/episodes/beef.jpg`,
    },
    {
      title: "Goddess",
      image: `${process.env.PUBLIC_URL}/images/episodes/holy.jpg`,
    },
    {
      title: "I took this one",
      image: `${process.env.PUBLIC_URL}/images/episodes/took.jpg`,
    },
    {
      title: "Cutest manager itw",
      image: `${process.env.PUBLIC_URL}/images/episodes/manager.jpg`,
    },
    {
      title: "Goated hinge pull",
      image: `${process.env.PUBLIC_URL}/images/episodes/dig.jpg`,
    },
    {
      title: "Trynna pull my mom",
      image: `${process.env.PUBLIC_URL}/images/episodes/hehe.jpg`,
    },
  ];




  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setShowIntro(false);
    }, 5000); // fallback after 5s

    return () => clearTimeout(fallbackTimer);
  }, []);

  if (showIntro) {
    return <ShreyuflixIntro onFinish={() => setShowIntro(false)} />;
  }



  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <h2 className="logo">SHREYFLIX</h2>
        <nav className="nav-links">
          <span>Home</span>
          <span>Series</span>
          <span>Moments</span>
          <span>Playlists</span>
        </nav>
      </header>

      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/episodes/bobsis.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="hero-title">Happy Birthday, Shreya ❤️</h1>
        <p className="hero-subtitle">The audience can't get enough of this Shii.</p>
      </div>

      {/* Top Picks */}
      <section className="carousel">
        <h2>Top Picks for Shreya</h2>
        <div className="carousel-row">
          <div className="card">
            <img
              src={`${process.env.PUBLIC_URL}/images/shows/bobsmiling.jpg`}
              alt="Pius x Shreya"
            />
            <div className="card-overlay">
              <p>Pius x Shreya</p>
            </div>
          </div>

          <div className="card">
            <img
              src={`${process.env.PUBLIC_URL}/images/shows/jaanu.jpg`}
              alt="Ok Jaanu"
            />
          </div>
          <div className="card">
            <img
              src={`${process.env.PUBLIC_URL}/images/shows/tsurr.jpg`}
              alt="The Summer I Turned Pretty"
            />
          </div>
          <div className="card">
            <img
              src={`${process.env.PUBLIC_URL}/images/shows/frr.jpg`}
              alt="Friends"
            />
          </div>
          <div className="card">
            <img
              src={`${process.env.PUBLIC_URL}/images/shows/theoff.jpg`}
              alt="The Office"
            />
          </div>
          <div className="card">
            <img
              src={`${process.env.PUBLIC_URL}/images/shows/aot.jpg`}
              alt="Attack on Titan"
            />
          </div>
          <div className="card">
            <img
              src={`${process.env.PUBLIC_URL}/images/shows/kan.jpg`}
              alt="O Kadhal Kanmani"
            />
          </div>
          <div className="card">
            <img
              src={`${process.env.PUBLIC_URL}/images/shows/bang.jpg`}
              alt="Big Bang Theory"
            />
          </div>
        </div>
      </section>

      {/* Season 1 */}
      <section className="carousel">
        <h2>Season 1: The "Prime"</h2>
        <div className="carousel-row">
          {season1.map((ep, index) => (
            <div
              className="card episode"
              key={index}
              onClick={() => openEp(ep)}
            >
              <img src={ep.image} alt={ep.title} />
              <div className="card-overlay">
                <p>{ep.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Season 2 */}
      <section className="carousel">
        <h2>Season 2: The Great Separation (Summer Holidays)</h2>
        <div className="carousel-row">
          {season2.map((ep, index) => (
            <div
              className="card episode"
              key={index}
              onClick={() => openEp(ep)}
            >
              <img src={ep.image} alt={ep.title} />
              <div className="card-overlay">
                <p>{ep.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Season 3 with Modals */}
      <section className="carousel">
        <h2>Season 3: Shii Chutti TV Returns</h2>
        <div className="carousel-row">
          {season3.map((ep, index) => (
            <div
              className="card episode"
              key={index}
              onClick={() => openEp(ep)}
            >
              <img src={ep.image} alt={ep.title} />
              <div className="card-overlay">
                <p>{ep.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Just Her Episodes */}
      <section className="carousel">
        <h2>JUST HER</h2>
        <div className="carousel-row">
          {Just_Her3.map((ep, index) => (
            <div
              className={`card episode ${index === 4 ? 'shift-up' : ''}`}
              key={index}
              onClick={() => openEp(ep)}
            >
              <img src={ep.image} alt={ep.title} />
              <div className="card-overlay">
                <p>{ep.title}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      <section className="gf-day">
        <h2>Happy Girlfriend’s Day 💐</h2>
        <div className="love-note">
          <p>
            My bad — this is very last minute (timestamp: 11:45 PM) 'cause I got this idea just 30 minutes ago.
            Just a little extra.. but then again, it’s never extra with you kvjbhdfv.
            This one’s just for you gangyso I’d rather you not post this lol.
            I would’ve done this a long time ago if I could,
            but I knew you’d hate it and probably me too
            if it wasn’t special enough😭.
            We’re not stargazing or even with each other right now,
            but I hope this is special enough.

            I loveee you, Shreya.
            And I’ve loved you for a long time now actually hehe. Cwazyy(You prolly knew lol but still).
            Didn’t wanna make it about me,
            so I held it back on your birthday.
            I'd obviously be on cloud nine if you felt the same way or atleast similar way but you know 
            It’d be really cool (and mature lol) if you took your sweet time. 

            I won’t say it again unless you feel the same.
            But I’ll say it once more.

            I love you. Louu type shi 33
            I have said it once when I was drunk you knoww. Crazy I felt so bad and deleted it later then. I'm sorry 
            this isn't on text but it is just text at the end of the day lol. This way you can take your time thinking
            also. If I threw it in your face tomorrow I'm afraid you might make some weird faces at me. 

            Also you can open the site from time to time.
            I’ma keep adding more fat lines of code,
            trying to make the site more you and more me.

            Signing out, gangy ji.
            Byebyee
            Ummaa.
          </p>
        </div>
      </section>

      {/* Modal */}
      {selectedEpisode && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedEpisode(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedEpisode.image} alt={selectedEpisode.title} />
            <h3>{selectedEpisode.title}</h3>
            <p>{selectedEpisode.description}</p>
            <button onClick={() => setSelectedEpisode(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>Yours truly gang | Started on July 16th, 2025 - 5:30 PM</p>
      </footer>
    </div>
  );
};

export default App;
