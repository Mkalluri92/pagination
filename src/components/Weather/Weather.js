import React from 'react';
import Button from '../Button/Button';

const Weather = (props) => {
    return (
       <React.Fragment>
           <h1>Weather Report</h1>
           <input type="text" placeholder="Enter the city name" onChange={props.cityName}/>
           <Button buttonClicked={props.buttonClick}/>
       </React.Fragment>
    )
}

export default Weather;