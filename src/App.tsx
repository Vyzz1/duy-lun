import "./App.css";
import { AppleCardsCarouselDemo } from "./components/shared/apple-card";
import BirthdayHeading from "./components/shared/birthday-heading";
import BirthdayMessage from "./components/shared/brithday-message";
import ScrollImage from "./components/shared/scroll-images";

function App() {
  return (
    <main className="min-h-screen antialiased  bg-gradient-to-r from-pink-300 to-sky-400">
      <BirthdayHeading />
      {/* <ContainerImage /> */}

      <BirthdayMessage />
      {/* <ScrollImage /> */}
      {/* <VideoHero /> */}
      {/* <BirthdaySection /> */}
      <AppleCardsCarouselDemo />
    </main>
  );
}

export default App;
