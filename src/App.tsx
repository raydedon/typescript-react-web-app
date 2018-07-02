import * as React from 'react';
import './App.css';
import MyClass from './MyClass';
import Profile from './MyFuncComp';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
          <MyClass isMarried={true}/>
	      <Profile designation="JAVA DEV" yearsOfExperience={10} companyNames={['TW', 'Amazon', 'Facebook']}/>
      </div>
    );
  }
}

export default App;
