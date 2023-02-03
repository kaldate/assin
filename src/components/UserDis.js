import React from "react";
import {Col,Row,Card,CardText,CardBody,Button} from  'reactstrap';


const UserDis = ({catchPhrase,username, name, city,street,zipcode, phone,cname,email }) => {
    return (
        <div className='card'>
           
            <div className='card_info'>
             
              <Card
  style={{
    width: '60rem',
    height: '30rem'
  }}
>
 
  <CardBody>
    <h4>Description</h4>
    <h5>{catchPhrase}</h5>

    <Row>
    <Col md={8}>
     <h4>contact</h4>
         <h6>
          {username}
      </h6>   
         </Col>
    <Col md={2}>
          <h4>name</h4>
              <h6>
               {name}
            </h6>
         </Col>
    </Row>


        <Row>
        <Col md={8}>
                      <h4>Email</h4>
                      <h6>
                      {email}
                      </h6>
                      
                    </Col>

                    <Col md={2}>
                      <h4>city</h4>
                      <h6>
                      {city}
                      </h6>
                      </Col>
        </Row>

        <Row>
            
        <Col md={8}>
                      <h4>street</h4>
                      <h6>
                      {street}
                      </h6>
                      </Col>

                      <Col md={4}>
                      <h4>zipcode</h4>
                      <h6>
                      {zipcode}
                      </h6>
                      </Col>
        </Row>
  <Row>
               
                      <Col md={8}>
                      <h4>city</h4>
                      <h6>
                      {cname}
                      </h6>
                      </Col>

                      <Col md={4}>
                      <h4>phone</h4>
                      <h6>
                      {phone}
                      </h6>
                      
                    </Col>
                    

                </Row>
    
  
  </CardBody>
</Card>
               
                
            
            </div>
        </div>
    );
};

export default UserDis;