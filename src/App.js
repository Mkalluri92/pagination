import React, { Component } from 'react';
import Weather from './components/Weather/Weather';
import Details from './components/Details/Details';

class App extends Component {
  state = {
    city: '',
    temperature :'10',
    showDetails: false
  }

  onEnterText = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  onClickButton = (event) => {
    this.setState({
      showDetails: true
    })
  }


  render () {

    
    let showWeatherReport = null;
    if (this.state.showDetails) {
       showWeatherReport = <Details city={this.state.city} 
                            temperature={this.state.temperature}/>
    }   
    return (
      <React.Fragment>
        <Weather cityName={this.onEnterText} buttonClick={this.onClickButton}/>
        {showWeatherReport}
      </React.Fragment>
    )
  }
}

export default App;