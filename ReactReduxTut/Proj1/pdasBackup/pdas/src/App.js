import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Presonal Digital Assistants</p>
          <p className="subtitle">Primary subtitle</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa created by Amazon and helps you buy things online"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana created by Microsoft and helps you search on things online"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri1"
                image={SiriImage}
                description="Siri created by Apple and since then, there was no much updates happen to it!"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
