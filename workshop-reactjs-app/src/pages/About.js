import Navigation from "../components/Navigation"
import Logo from "../components/Logo"
import Countries from "../components/Countries"

function About() {
  return (
    <div>
        <Logo />
        <Navigation />
        <Countries />
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</p>
    </div>
  );
}

export default About;
