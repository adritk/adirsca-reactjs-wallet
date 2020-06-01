import React, { Component } from 'react';
import Axios from 'axios';
import Navbar from '../Navbar'
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer,MDBBtn } from 'mdbreact';

class Dashboard extends Component {
    state = {
        data: [],
        saldo: ''
    }

    componentDidMount() {
        var usercart = localStorage.getItem('user_id')
        console.log(usercart)
        Axios.get(`https://my-json-server.typicode.com/adritk/walletjson/wallet?user_id=${usercart}`)
            .then((res) => {
                console.log(res.data)
                this.setState({ data: res.data[0].history_wallet, saldo: res.data[0].saldo_akhir })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderWallet = () => {
        let { data } = this.state
        return data.map((val, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{val.tanggal}</td>
                    <td>{val.tipe}</td>
                    <td>Rp. {val.nominal.toLocaleString()}</td>
                    <td>{val.keterangan}</td>
                </tr>


            )
        })
    }

    render() {
        console.log(this.state.saldo)
        return (

            <div className="backgroundTable">
                <Navbar />
                <MDBContainer>
                <MDBBtn disabled size='md' rounded  color="success" style={{fontSize: 16, fontWeight: 900, float: 'right'}}>Saldo Anda Rp. {this.state.saldo.toLocaleString()}</MDBBtn>
                    <MDBTable>
                        <MDBTableHead>
                            <tr>
                                <th>No</th>
                                <th>Tanggal</th>
                                <th>Tipe</th>
                                <th>Nominal</th>
                                <th>Keterangan</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {this.renderWallet()}
                       
                        </MDBTableBody>
                    </MDBTable>
                </MDBContainer>
            </div>
        );
    }
}

export default Dashboard;