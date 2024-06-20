import React from 'react';

import profile from '../images/profile2.png'
import arrow from '../images/arrow.png'

import china from '../images/flags/china.png';
import czechrepublic from '../images/flags/czechrepublic.png';
import england from '../images/flags/england.png';
import france from '../images/flags/france.png';
import germany from '../images/flags/germany.png';
import greece from '../images/flags/greece.png';
import ireland from '../images/flags/ireland.png';
import italy from '../images/flags/italy.png';
import japan from '../images/flags/japan.png';
import netherlands from '../images/flags/netherlands.png';
import poland from '../images/flags/poland.png';
import portugal from '../images/flags/portugal.png';
import russia from '../images/flags/russia.png';
import saudiarabia from '../images/flags/saudiarabia.png';
import scotland from '../images/flags/scotland.png';
import southkorea from '../images/flags/southkorea.png';
import spain from '../images/flags/spain.png';
import vietnam from '../images/flags/vietnam.png';

import axios from 'axios'

function getCountry(result) {
    switch(result) {
        case "Arabic":
            return "saudiarabia";
        case "Chinese":
            return "china";
        case "Czech":
            return "czechrepublic";
        case "Dutch":
            return "netherlands";
        case "English":
            return "england";
        case "French":
            return "france";
        case "German":
            return "germany";
        case "Greek":
            return "greece";
        case "Irish":
            return "ireland";
        case "Italian":
            return "italy";
        case "Japanese":
            return "japan";
        case "Korean":
            return "korea";
        case "Polish":
            return "poland";
        case "Portuguese":
            return "portugal";
        case "Russian":
            return "russia";
        case "Scottish":
            return "scotland";
        case "Spanish":
            return "spain";
        case "Vietnamese":
            return "vietnam";
        default:
            console.log('No match');
            return null;
    }
}

const countryFlags = {
    saudiarabia,
    china,
    netherlands,
    england,
    france,
    germany,
    greece,
    italy,
    japan,
    poland,
    russia,
    spain
};

export default function Model() {

    const [name, setName] = React.useState("");

    const [result, setResult] = React.useState("");

    const [isLoading, setIsLoading] = React.useState(false);

    const country = getCountry(result);
    console.log(country)
    const flagSrc = country ? countryFlags[country] : null;

    function handleChange(event) {
        const { value } = event.target
        setName(value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setResult("");
        setIsLoading(true);
        setTimeout(() => {
            axios.post('http://localhost:5000/name', { name: name })
            .then(res => {
                setResult(res.data.result);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
        }, 1000)
    }

    return (
        <form onSubmit={handleSubmit} >
            <div className="page center" >
                <div className="center">
                    <h2 id="h2">Model</h2>
                    <p id="p1" >Unleash the power of our RNN model</p>
                    <div className="name-tag" >
                        <div>
                            <img id="profile" src={profile} alt="profile" />
                        </div>
                        <div className="grid">
                            <div className="item-1 item" >Name Tag</div>
                            <div className="item-2 item" >
                                <div className="arrow" >
                                    <img className="arrow-img" src={arrow} alt="arrow" />
                                </div>
                                <input 
                                    type="text"
                                    placeholder="last name"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                    spellcheck="false"
                                />
                            </div>
                            <div className="item-3 item" >
                                {
                                    result === "" ? 
                                        isLoading ? <div className="loader"></div> : <div className="loader-no-animation"></div> :
                                        result
                                }
                            </div>
                            <div className="item-4 item" >
                                {
                                    result === "" ? 
                                    isLoading ? <div className="loader"></div> : <div className="loader-no-animation"></div> :
                                    <img id="profile-country-image" src={flagSrc} alt="country" />
                                }
                            </div>
                            <div className="item-5 item" >0.29</div>
                            <div className="item-6 item" >71%</div>
                        </div>
                    </div>
                </div>
                <button id="check" >CHECK</button>
            </div>
        </form>
    )
}