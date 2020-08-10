import React from 'react';

const details = (props) => {
    let day = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getYear();
    let time = new Date().getTime();
    return (
        <React.Fragment>
            <h3>City Name is {props.city}</h3>
    <h2>Date {day}-{month+1}-{year}</h2>
            <h2>Time {time}</h2>
            <h2>Temperature is {props.temperature}</h2>
        </React.Fragment>
    )
}

export default details;