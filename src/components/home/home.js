import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchCharacters } from '../../redux/character/characterSlice'
function Home() {
  const items=useSelector(state=>state.character.items)
  console.log(items)
  const dispatch=useDispatch();
  useEffect(() => {
   dispatch(fetchCharacters())
  }, [dispatch])
  
  return (
    <div>Home</div>
  )
}

export default Home