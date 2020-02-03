
import React,{ Component }  from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


function App() {
  return (
    <div className="container">
      <Header />
      <switch>
        <Route exact path='/' component={Fatty} />
        <Route  path='/about' component={About} />
      </switch>
      <Footer/>
    </div>
  );
}
class Header extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
    <div className = "header">header</div>
    )
  }
}

class Fatty extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
    <div className = "fatty">fatty</div>
    )
  }
}

class About extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
    <div className = "about">about</div>
    )
  }
}

class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
    <div className = "footer">footer</div>
    )
  }
}
export default App;
