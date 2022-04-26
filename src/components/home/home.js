import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchCharacters, pageIncrement } from '../../redux/character/characterSlice'
import {Container, Button} from "react-bootstrap"
import Masonry from 'react-masonry-css'
import { Link } from "react-router-dom";


function Home() {
  const items=useSelector(state=>state.character.items)
  const status=useSelector(state=>state.character.status)
  const error=useSelector(state=>state.character.error)
  const page=useSelector(state=>state.character.page)
  const hasNextPage=useSelector(state=>state.character.hasNextPage)
  const dispatch=useDispatch();

//Let fetchCharacters run when the page is refreshed
  useEffect(() => {
    if(status=== "idle"){
   dispatch(fetchCharacters())
    }
  }, [dispatch, status]) 


//When the Load More button is pressed, fetchCharacters parameter is sent and pageIncrements runs
  const handleClick=async()=>{
    await dispatch(pageIncrement())
    await dispatch(fetchCharacters(page))
  }
 

/** Display of error states on the page -start-*/

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
               <Link to={`/char/${item.char_id}`}>
                  <img  alt={item.name} src={item.img} className="char-img" />
                  <h4>{item.name}</h4>
              </Link>
           </div>
          ))
        }
      </Masonry>
        {
          status==="loading" && (
            <div className="spinner-border " role="status" style={{padding:"3%", marginLeft:"45%"}}>
        <span className="visually-hidden ">Loading...</span>
      </div>
          )
        }
        {
          hasNextPage && status==="succeeded" && (
            <Button variant='light' className='char-btn' onClick={handleClick} >Load More ({page-1})</Button>
          )
        }
        {
          !hasNextPage && (
            <div className=' mt-2' style={{marginLeft:"40%"}} >
              There is nothing to be shown
            </div>
          )
        }
      </Container>
       
  )
}

export default Home