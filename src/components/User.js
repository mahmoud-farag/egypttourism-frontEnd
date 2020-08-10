import React, { Component } from 'react';
import {  Container, Table } from 'reactstrap';
class User extends Component {
  render() {
    return (
  <div className="userBackground" >
      <Container className="themed-container userEdit" >
      
      <Table dark className="userEditTable">
      <thead>
        <tr>
          <th>الإسم الكامل :</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">البريد الإلكتروني :</th>
          <td></td>
          
        </tr>
        <tr >
          <th scope="row" >كلمة المرور :</th>
          <td></td>
          
        </tr>
        
      </tbody>
    </Table>
    </Container>
  </div>
);
}
}

export default User;