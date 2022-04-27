import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap"
import axios from 'axios';
import Loading from '../../isLoading';

function Detail() {
  const [char, setChar]=useState(null)
  const [loading, setLoading]=useState(true)
  let { char_id } = useParams(); // Getting id from URL with useParams
  useEffect( ()=>{
     axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`).then(res=>res.data).then(data=>setChar(data)).finally(()=> setLoading(false))
  },[char_id])
 console.log(char)
  return (
    <Container>
     {
       loading &&(
          <Loading />
       )
     }
     {
       char && (
        <Row className="justify-content-md-center">
            <Col  >
            <img  className="detail-img" alt='characterImage' src={char[0].img} />
            </Col>
            <Col >
              <h5>{char[0].name} </h5>
              <p > Birthday :  {char[0].birthday}</p>
              <p> Nickname :  {char[0].nickname}</p>
              <p> Portrayed : {char[0].portrayed}</p>
              <p> Status : {char[0].status}</p>
            </Col>
        </Row>
       )
     }
    
    </Container>
  )
}

export default Detail