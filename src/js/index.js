//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";

function Simplecounter (props) {

        return (
         <div className="bigCounter">
            <div className="calendar"><i class="fa-regular fa-clock"></i></div>
            <div className="timeValor4">5</div>
            <div className="timeValor4">4</div>
            <div className="timeValor3">3</div>
            <div className="timeValor2">2</div>
            <div className="timeValor1">1</div>

         </div>
        );

}

//render your react application
ReactDOM.render(<Simplecounter />, document.querySelector("#app"));
