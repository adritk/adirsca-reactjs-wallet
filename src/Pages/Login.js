import React, { Component } from 'react';
// import {MDBBtn, MDBInput} from 'mdbreact'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux'
import {  Login } from '../redux/action'
import Swal from 'sweetalert2'

class LoginPage extends Component {
    state = {
        redirect: false,
        name: ''
    }


   

    loginUser = () => {
        let username = this.username.value;
        let password = this.password.value;
        this.props.Login(username,password)
        if(username === '' || password === ''){
            Swal.fire({
                popup: 'swal2-show',
                text: 'Please Fill In This Form',
                backdrop: 'swal2-backdrop-show',
                icon: 'warning'
              })
        }else{
            Axios.get(`https://my-json-server.typicode.com/adritk/walletjson/users?username=${username}&password=${password}`, {
                username,
                password
            })
            .then((res) => {
                if(res.data.length === 0){
                    Swal.fire({
                        popup: 'swal2-show',
                        text: 'username or password invalid',
                        backdrop: 'swal2-backdrop-show',
                        icon: 'error'
                      })
                }else{
                    localStorage.setItem('user_id', res.data[0].id)
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.props.Login(res.data[0])
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
    render() {
        console.log(this.props.name)
        if (this.props.name === 'Exy') {
            return <Redirect to="/dashboard" />
        }
        else if (this.props.name === 'Wartono') {
            return <Redirect to="/dashboard" /> 
        }
        return (
            <div class="d-flex justify-content-center"     style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)', backgroundColor: 'skyblue'
            }}>

                <MDBCol md="12">
                    <p className="h4 text-center mb-4">Sign in</p>
                    <label htmlFor="defaultFormLoginEmailEx" className="black-text">
                        Username
        </label>
                    <input type="email" id="defaultFormLoginEmailEx" className="form-control" ref={(username) => this.username = username} />
                    <br />
                    <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
                        Password
        </label>
                    <input type="password" id="defaultFormLoginPasswordEx" className="form-control" ref={(password) => this.password = password} />
                    <div className="text-center mt-4">
                        <MDBBtn color="primary" onClick={this.loginUser}>Login</MDBBtn>
                    </div>
                </MDBCol>
            </div>
        );
    }
}

const mapStatetoProps = ({auth}) => {
    return {
        username: auth.username,
        name: auth.name,
        saldo: auth.saldo
    }
}

export default connect(mapStatetoProps, { Login })(LoginPage)

// export default Login;