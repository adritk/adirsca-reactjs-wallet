import React, { Component } from 'react'
import '../src/notfound.css'
import {Link} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

export default class NotFound extends Component {
    render() {
        return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>Silahkan Login Dahulu</h2>
                </div>
                <div>
                    <Link to="/">
                    <MDBBtn size='md' rounded  color="success">Go To Login</MDBBtn>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}
