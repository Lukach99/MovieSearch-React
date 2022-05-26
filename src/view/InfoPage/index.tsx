import "./index.scss"

import { useParams } from "react-router-dom";
import InfoData from "../../http/info.http";
import { useCallback, useEffect, useMemo, useState } from "react";

const InfoPage = () => { 
    const { id } = useParams();
    const [data, setData] = useState<any>({})
    console.log(id)

    const infoHttp = useMemo(() => new InfoData, []) 

    const fetchInfo = useCallback(
        async (id:string | undefined) => { 
            const infoData = await infoHttp.getMovieInfo(id)
            setData(infoData)
         },[infoHttp])

    useEffect(() => {
      fetchInfo(id)
    
      }
    , [fetchInfo, id]);
    
console.log(data);

    return <section className="info"> 
    <article className="info-data">
        <h1>{data.title}</h1>
        <div className="info-data__img">
            <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />
        </div>
        
    </article>
    
    
    </section>
 }

 export default InfoPage