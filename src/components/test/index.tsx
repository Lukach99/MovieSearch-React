import"./index.scss"

import { useState, useCallback, useEffect, useMemo  } from "react"
import InfoDataHttp from "../../http/info.http"
import ItemCard from "../ItemCard"

const DATA_LINK = "https://api.themoviedb.org/3/movie/popular?api_key=7ee9b5cbd717c8acad4d685d09606c25&language=en-US&page=1"

const Test = () => { 
    const [data, setData] = useState<object[]>([])
    const [counter, setCounter] = useState(0)

    const infoDataHttp = useMemo(() =>  new InfoDataHttp(),[] )

    const fetchData = useCallback(
      async () => {
        const data = await infoDataHttp.getMedia("movie", "popular")
        console.log(data)
        setData(data)
      },
      [],
    )

    useEffect(() => { 
        fetchData()
     },[fetchData])
    

   /*  const handleCounter = () => {
        setCounter(counter + 1)
        fetchData()
    } */

    

    return <section className="item-list">
        {/* <button onClick={handleCounter}>counter</button> */}
        {/* <p>{counter}</p> */}
        {data.map(({title,name, poster_path,id}: any) => <ItemCard key={id} id={id} name={title || name} type={title ? "movie" : "tv"} imgSrc={poster_path}></ItemCard>)}
        
    </section>
 }


export default Test