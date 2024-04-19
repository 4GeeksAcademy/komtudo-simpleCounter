//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";

function SimpleCounter(props) {

        return (
                <div className="bigCounter">
                        <div className="calendar"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-hour-2" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 12l3 -2" />
                                <path d="M12 7v5" />
                        </svg></div>
                        <div className="timeValor5">{props.digitFive % 10}</div>
                        <div className="timeValor4">{props.digitFour % 10}</div>
                        <div className="timeValor3">{props.digitThree % 10}</div>
                        <div className="timeValor2">{props.digitTwo % 10}</div>
                        <div className="timeValor1">{props.digitOne % 10}</div>

                </div>
        )
}

SimpleCounter.propTypes = {

        digitFive: PropTypes.number,
        digitFour: PropTypes.number,
        digitThree: PropTypes.number,
        digitTwo: PropTypes.number,
        digitOne: PropTypes.number,
};

let counter = 0;

setInterval(function () {
        const five = Math.floor(counter / 10000);
        const four = Math.floor(counter / 1000);
        const three = Math.floor(counter / 100);
        const two = Math.floor(counter / 10);
        const one = Math.floor(counter / 1);
        //render your react application
        counter++;
        ReactDOM.render(
                <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} />,
                document.querySelector("#app")
        );
}, 1000);




