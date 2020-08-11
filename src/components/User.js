import React from 'react';
import {  Container, Table,  Button, Row, Col } from 'reactstrap';
function User () {
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

        <tr >
          <th scope="row" >
          <Row>
        <Col xs="2">
        <Button color="danger">تسجيل الخروج</Button>{' '}
        </Col>
        
      </Row>
          </th>
          
          
        </tr>

        
        
      </tbody>
      
    </Table>
   
    
    </Container>
  </div>
);

}

export default User;