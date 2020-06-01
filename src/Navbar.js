import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBNavbarBrand, MDBBtn
} from "mdbreact";

import { connect } from 'react-redux'
import { Logout } from './redux/action'

class Navbar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    onBtnLogout = () => {
        localStorage.removeItem('user_id')
        this.props.Logout()
    }

    render() {
        return (
            <MDBNavbar color="indigo" dark expand="md">
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        {/* <MDBNavItem active>
                            <MDBNavLink to="#!">Dashboard</MDBNavLink>
                        </MDBNavItem> */}
                        
                        <MDBNavbarBrand style={{paddingLeft: 13}}>
                            <strong className="white-text">Dashboard</strong>
                        </MDBNavbarBrand>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        {/* <MDBNavItem >



                            <MDBNavLink to="#!">{`Hi! ${this.props.name}`}</MDBNavLink>
                        </MDBNavItem> */}
                        <MDBNavbarBrand style={{marginTop: 10}} >
                            <strong className="white-text">{`Selamat Datang, ${this.props.name}!`}</strong>
                        </MDBNavbarBrand>
            
                        <MDBNavItem >
                            <MDBNavLink to="/" onClick={this.onBtnLogout}>
                                <MDBBtn  size="sm" rounded color="danger"  style={{fontSize: 13, fontWeight: 900}}>Logout</MDBBtn>
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

const mapStatetoProps = ({ auth }) => {
    return {
        name: auth.name
    }
}

export default connect(mapStatetoProps, { Logout })(Navbar);