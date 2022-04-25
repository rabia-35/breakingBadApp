import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchCharacters, pageIncrement } from '../../redux/character/characterSlice'
import {Container, Button} from "react-bootstrap"
import Masonry from 'react-masonry-css'
import { Link } from "react-router-dom";


function Home() {
  const items=useSelector(state=>state.character.items)
  const isLoading=useSelector(state=>state.character.isLoading)
  const error=useSelector(state=>state.character.error)
  const page=useSelector(state=>state.character.page)
  const dispatch=useDispatch();

  useEffect(() => {
   dispatch(fetchCharacters())
  }, [dispatch])  

  const handleClick=async()=>{
    await dispatch(pageIncrement())
    await dispatch(fetchCharacters(page))
  }

/** Display of loading and error states on the page -start-*/
  if(isLoading){
    return(
      <div className="spinner-border text-light" role="status" style={{padding:"5%", marginLeft:"45%"}}>
        <span className="visually-hidden ">Loading...</span>
      </div>
    )} 

    if(error){
      return <div className='text-light ms-5'>Error:{error}</div>
    }
   /** Display of loading and error states on the page -end-*/


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
        {
          items.length!==62 && (
            <Button variant='light' className='char-btn' onClick={handleClick} >Load More ({page-2})</Button>
          )
        }
      </Container>
       
  )
}

export default Home