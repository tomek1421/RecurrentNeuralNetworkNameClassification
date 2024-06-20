import people from '../images/people.png'

import { Link, Element, scroller } from 'react-scroll';

export default function Hero() {

    return (
        <div className="page" >
            <div className="hero-header" >
                <h1>Check your ethnicity</h1>
                <h4>Using Recurrent neural network</h4>
            </div>
            <div className="hero-content">
                <img class="people-img" src={people}  alt="people"/>
                <Link to="section1" smooth={true} duration={700}>
                    <button>begin</button>
                </Link>
            </div>
            <Link to="hero" smooth={true} duration={700} >
                <div className="up" >up</div>
            </Link>
        </div>
    )
}