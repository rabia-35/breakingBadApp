import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchCharacters } from '../../redux/character/characterSlice'
import {Container} from "react-bootstrap"
import Masonry from 'react-masonry-css'
import { Link } from "react-router-dom";

function Home() {
  const items=useSelector(state=>state.character.items)
  const isLoading=useSelector(state=>state.character.isLoading)
  const error=useSelector(state=>state.character.error)


  const dispatch=useDispatch();
  useEffect(() => {
   dispatch(fetchCharacters())
  }, [dispatch])

  if(isLoading){
    return(
      <div className="spinner-border text-light" role="status" style={{padding:"5%", marginLeft:"45%"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    )} 

    if(error){
      return <div>Error:{error}</div>
    }
   
  return (
      <Container >
         <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
         
        {
          items.map(item=>(
            <div key={item.char_id} >
               <Link to={`/:${item.char_id}`}>
                  <img  alt={item.name} src={item.img} className="char-img" />
                  <h4>{item.name}</h4>
              </Link>
           </div>
          ))
        }
      </Masonry>

      </Container>
       
  )
}

export default Home