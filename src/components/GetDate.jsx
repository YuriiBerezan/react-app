import React,{useState,useEffect} from 'react'
import FormFilter from './Forms/FormFilter';

export default function GetDate() {
    const [date, setDate] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("https://venbest-test.herokuapp.com/")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setDate(result);
          },
  
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    return (<FormFilter date={date}/>)
}
