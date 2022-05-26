import"./index.scss"

import { useState, useCallback, useEffect, useMemo  } from "react"
import InfoData from "../../http/info.http"
import ItemCard from "../ItemCard"

const DATA_LINK = "https://api.themoviedb.org/3/movie/popular?api_key=7ee9b5cbd717c8acad4d685d09606c25&language=en-US&page=1"

const Test = () => { 
    const [data, setData] = useState<object[]>([])

    const infoData = useMemo(() =>  new InfoData(),[] )

    const fetchData = useCallback(
      async () => {
        const data = await infoData.getMovies(DATA_LINK)
        console.log(data)
        setData(data)
      },
      [setData, infoData],
    )

    useEffect(() => { 
        fetchData()
     },[fetchData])
    

   

    

    return <section className="item-list">
        {data.map(({title, poster_path,id}: any) => <ItemCard key={id} id={id} name={title} imgSrc={poster_path}></ItemCard>)}
        
    </section>
 }


export default Test