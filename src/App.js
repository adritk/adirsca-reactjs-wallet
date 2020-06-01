import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import LoginPage from './Pages/Login';
import {Login} from './redux/action';
import {connect} from 'react-redux'
import Axios from 'axios'
import NotFound from './NotFound'

class App extends Component {

  // componentDidMount() {
  //   var user_id = localStorage.getItem('user_id');
  //   if(user_id){
  //     Axios.get(`http://localhost:5000/users?user_id=${user_id}`)
  //     .then((res) => {
  //       this.props.Login(res.data[0])
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //   }
  // }

  render() { 
    if(this.props.username === 'exy') {      
      return ( 
          <div className="App">
              <Switch>
              <Route path="/" component={LoginPage} exact/>
              <Route path="/dashboard" component={Dashboard} />
              </Switch>
          </div>
       );
    } else if(this.props.username === 'wartono') {
      return ( 
        <div className="App">
            <Switch>
            <Route path="/" component={LoginPage} exact/>
            <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </div>
     );
    } 
    else {
      return ( 
        <div className="App">
            <Switch>
            <Route path="/" component={LoginPage} exact/>
            <Route path="*" component={NotFound} />
            </Switch>
        </div>
     );
    }
  }
}

const mapStatetoProps = ({auth}) => {
  return {
    username: auth.username
  }
}
 
export default connect(mapStatetoProps, {Login})(App);
// export default App;