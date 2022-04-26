import React from 'react'
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux"
import {Container, Row, Col} from "react-bootstrap"

function Detail() {
  let { char_id } = useParams(); // Getting id from URL with useParams
  char_id=char_id.match(/[0-9]+/gi).join("") //Converting the drawn id to number
  
  const items=useSelector(state=>state.character.items)
  const item=items.filter(item=> item.char_id===Number(char_id)) //Finding the character that matches the id from the URL
 
  return (
    <Container>
     <Row className="justify-content-md-center">
       <Col  >
          <img  className="detail-img" alt='characterImage' src={item[0].img} />
       </Col>
       <Col >
         <h5>{item[0].name} </h5>
         <p > Birthday :  {item[0].birthday}</p>
         <p> Nickname :  {item[0].nickname}</p>
         <p> Portrayed : {item[0].portrayed}</p>
         <p> Status : {item[0].status}</p>
       </Col>
     </Row>
    </Container>
  )
}

export default Detail