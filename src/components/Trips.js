import React from 'react';
import { BsTrash } from "react-icons/bs";
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Badge, Form, Label, Input  } from 'reactstrap';
  function Trips () {
  
    return (
  <div className="tripsBackground">
    <Container >
    <Row xs="3" >
      <div className="tripsCard">
      <Card  >
        <CardBody>
        <Form>
        <Label for="exampleFile" className="labelColor">إختر صورة</Label>
        <Input type="file" name="file" id="exampleFile" />

        <Label for="exampleText" className="labelColor">اسم الرحلة</Label>
        <Input type="text" name="text" id="exampletext" placeholder="ادخل اسم الرحلة" />

        <Label for="exampleText"  className="labelColor">وصف الرحلة</Label>
        <Input type="textarea" name="text" id="exampleText" />
       
        <Label for="exampleDate" className="labelColor">تاريخ الرحلة</Label>
        <Input type="date" name="date"  id="exampleDate"  placeholder="date placeholder"  />
       
        <Label for="exampleNumber" className="labelColor">سعر الرحلة</Label>
        <Input type="number"  name="number"  id="exampleNumber" placeholder="ادخل سعر الرحلة" />
       
        <Col xs="6"> <Button color="primary">إنشر</Button>{' '}</Col>
        </Form>
        </CardBody>
      </Card>
    </div>


    <div className="tripsCard">
      <Card >
      <Col xs="2"><Button  color="danger"><BsTrash /></Button> </Col>
        <CardImg top width="100%" src="/assets/318x180.svg" alt=" صورة الرحلة" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardText className="text-primary">date</CardText>
          <Badge color="primary">price</Badge>
         <Col xs="6"> <Button color="warning">احجز</Button>{' '}</Col>
         
        </CardBody>
        
      </Card>
      
    </div>

    
    </Row>
    </Container>
    <div className="tripsLayout"></div>
     </div>
);

}

export default Trips;