import './App.css';
import './styles/hero.css';
import './styles/howItWorks.css'
import './styles/model.css';
import './styles/footer.css';

import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Model from './components/Model';
import Footer from './components/Footer';

import { Link, Element, scroller } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Element name="hero" >
        <Hero />
      </Element>
      <Element name="section1" >
        <HowItWorks />
      </Element>
    </div>
  );
}

export default App;
