import React,{useState} from "react";
import {Col,Row,Card,CardText,CardBody,Button} from  'reactstrap';
import "./UserCard.css";
import UserDis from "./UserDis";

const UserCard = ({ username, name, city,street }) => {

const [show,setShow]=useState(false)

const showDetails=()=>{
  if(show==true)
  {
    setShow(false);
  }
  else{
    setShow(true);
  }
}

          
  
    return (

      
    

  
        <div className='card'>
           
            <div className='card_info'>
             
              <Card
  style={{
    width: '60rem',
    height: '10rem'
  }}
>
 
  <CardBody>
  <Row>
                    <Col md={2}>
                    <h6>{name}</h6>
                    </Col>

                    <Col md={2}>
                      <h4>contact</h4>
                      <strong>
                      {username}
                      </strong>
                      
                    </Col>

                    <Col md={2}>
                      <h4>city</h4>
                      <strong>
                      {city}
                      </strong>
                      </Col>

                      <Col md={4}>
                      <h4>street</h4>
                      <strong>
                      {street}
                      </strong>
                      
                    </Col>

                    <Col  md={2}>

                    <Button color="danger"  onClick={showDetails}>
                            show
                     </Button>
                    
                    
                        <div>
                        {show ? (<UserDis/>) : null}
                     </div>
                  
                   
                    </Col>
                    

                </Row>
    
  
  </CardBody>
</Card>
               
                
            
            </div>
        </div>
    );
};

export default UserCard;