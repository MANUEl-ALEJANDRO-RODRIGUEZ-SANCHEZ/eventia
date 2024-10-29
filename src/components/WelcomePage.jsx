import Carousel from "./CarouselWelcomePage";
import CallToAction from "./CallToAction";
import EventInfo from "./EventInfo";
import About from "./About";
import Contact from "./Contact";

function WelcomePage() {
  return (
    <>
        <Carousel />
        <CallToAction />
        <EventInfo />
        <About />
        <Contact />
    </>
  )
}

export default WelcomePage;