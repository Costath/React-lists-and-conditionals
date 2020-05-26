import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  state = {
      textSize: 0,
      letters: ''
  }
  

  updateTextSize = (event) => {
    const textSize = event.target.value.length;
    const letters = event.target.value;

    this.setState({
        textSize: textSize ,
        letters: letters
    });
  }

  deleteLetter = (index) => {
    let lettersArray = this.state.letters.split('');
    lettersArray.splice(index, 1);
    lettersArray = lettersArray.join('');

    this.setState({
        textSize: this.state.textSize - 1,
        letters: lettersArray
    });
  }

  render() {
    let letters = null;

    if (this.state.letters) {
      const lettersArray = this.state.letters.split('');

      letters = (
        <div>
          {lettersArray.map((letter, index) => {
            return <CharComponent 
                    letter={letter} 
                    key={index}
                    click={() => this.deleteLetter(index)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Assignment 2 - Lists &amp; Conditionals</h1>
        </header>
        <input type='text' value={this.state.letters} onChange={this.updateTextSize} />
        <p>input length: {this.state.textSize}</p>
        <ValidationComponent length={this.state.textSize} />
        {letters}
      </div>
    );
  }
}

export default App;
