import DisplayCountries from "./DisplayCountries";

export default function HowItWorks() {

    return (
        <div className="page" >
            <div className="page-top" >
                <h2>How It Works</h2>
                <p>
                RNNs are a type of neural network that excel at processing sequential data, making them ideal for analyzing names. By learning from a vast dataset of last names and their associated ethnicities, our RNN can predict the ethnicity of new names with impressive accuracy.
                </p>
            </div>
            <div className="page-bottom">
                <DisplayCountries />
            </div>
        </div>
    )
}