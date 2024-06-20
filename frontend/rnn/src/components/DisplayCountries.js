import china from '../images/flags/china.png';
import england from '../images/flags/england.png';
import france from '../images/flags/france.png';
import germany from '../images/flags/germany.png';
import greece from '../images/flags/greece.png';
import italy from '../images/flags/italy.png';
import japan from '../images/flags/japan.png';
import netherlands from '../images/flags/netherlands.png';
import poland from '../images/flags/poland.png';
import russia from '../images/flags/russia.png';
import saudiarabia from '../images/flags/saudiarabia.png';
import spain from '../images/flags/spain.png';


export default function DisplayCountries() {
    const countries1 = [
        saudiarabia,
        china,
        netherlands,
        england,
        france,
        germany
      ];

    const countries2 = [
        greece,
        italy,
        japan,
        poland,
        russia,
        spain
    ];

    return (
        <div className="page-bottom-content" >
            <div className="countries-box" >
                <div className="countries-box-header" >
                    <h2>Countries Our Model Can Predict:</h2>
                </div>
                <div className="countries-table" >
                {
                    countries1.map(country => {
                        return (
                            <div className="country" >
                                <img 
                                    src={country}
                                    style={{ height: '4rem' }}
                                />
                            </div>
                        )
                    })
                }
                </div>
                <div className="countries-table countries-table-second" >
                {
                    countries2.map(country => {
                        return (
                            <div className="country" >
                                <img 
                                    src={country}
                                    style={{ height: '4rem' }}
                                />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}