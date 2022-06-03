import"./index.scss"

import { useState, useCallback, useEffect, useMemo, useRef  } from "react"
import InfoDataHttp from "../../http/info.http"
import ItemCard from "../ItemCard"

/* const DATA_LINK = "https://api.themoviedb.org/3/movie/popular?api_key=7ee9b5cbd717c8acad4d685d09606c25&language=en-US&page=1" */

const Test = () => { 
    const [data, setData] = useState<object[]>([])

    const move:any = useRef(0)
    const carousel:any = useRef(null)

    const ref : any = useRef()

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
    

     

    const moveLeft = () => {
      console.log(move.current)
      if(move.current < 0){
        move.current += carousel.current?.clientWidth
        ref.current.style.left = `${move.current}px`
      }
      
      
     
    }

    const moveRight = () => {
      console.log(move.current - carousel.current?.clientWidth)
      console.log(0 - ref.current?.clientWidth)
      if((move.current - carousel.current?.clientWidth - 100) > (0 - ref.current?.clientWidth) ){
        move.current -= carousel.current?.clientWidth
        ref.current.style.left = `${move.current}px`
        console.log(move.current)
      }
      
     
    }

    return <section className="item-list">
        <div>
          <button onClick={moveLeft}>Left</button>
          <button onClick={moveRight}>Right</button>
        </div>
        <div className="carousel">
        <div ref={carousel} className="carousel-wrapper">
        <div ref={ref} className="item-list-carousel">
          {data.map(({title,name, poster_path,id}: any) => <ItemCard key={id} id={id} name={title || name} type={title ? "movie" : "tv"} imgSrc={poster_path}></ItemCard>)}
        </div>
        </div>
        
        </div>
        
        
        
    </section>
 }


export default Test