import {useState, useEffect} from "react";
import Quote from "./Quote";

export default function QuoteList() {
    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        async function getData() {
            const response = await fetch("https://dummyjson.com/quotes")
            const data = await response.json()
            setQuotes(data.quotes)
            setLoading(false)
        }
        getData()
    }, [])
    return (
        <>
            <h1>Quotes</h1>
            {loading ? <p>Loading...</p> : 
                quotes.map((quote)=>{
                    return <Quote key={quote.id} {...quote}/>
                })
            }
        </>
    )
}