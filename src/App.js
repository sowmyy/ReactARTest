import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ModelViewer from 'react-model-viewer';
const modelPath = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';
// import coke from '../assets/coke.gltf';

class App extends Component {
  render() {
    const modelPath = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2> */}
          <model-viewer src={modelPath} camera-controls auto-rotate ar></model-viewer>
        </div>
      </div>
    );
  }
}

export default App;
