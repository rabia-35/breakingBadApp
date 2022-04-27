import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {fetchQuotes} from "../../../redux/quotes/quotesSlice";
import {Container} from "react-bootstrap"
import Loading from '../../isLoading';
import Error from "../../error"

function Quotes() {
const items=useSelector(state=>state.quotes.items)
const status=useSelector(state=>state.quotes.status)
const error=useSelector(state=>state.quotes.error)
const dispatch=useDispatch();

//Let fetchQuotes run when the page is refreshed
useEffect(() => {
    if(status==="idle"){
    dispatch(fetchQuotes())
        }
    }, [dispatch, status])
// error and loading status of the page
    if(status==="loading"){
        return <Loading />
    }
    if(error){
        return <Error msj={error} />
      }
  return (
    <Container>{
        items &&(
            items.map(quote=>(
                <div className='quote' key={quote.quote_id}>
                    <q>{quote.quote}</q>
                    <h5>{quote.author}</h5>
                </div>
            ))
        )
        }</Container>
  )
}

export default Quotes