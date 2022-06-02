import "./index.scss"

import { Link, useParams } from "react-router-dom";
import InfoDataHttp from "../../http/info.http";
import { useCallback, useEffect, useMemo, useState } from "react";

const InfoPage = () => { 
    const { type, id } = useParams();
    const [data, setData] = useState<any>({})
    console.log({typeMed: type, idn:id})
    
    

    const infoDataHttp = useMemo(() => new InfoDataHttp, []) 

    const fetchInfo = useCallback(
        async (type:string | undefined, id:string | undefined) => { 
            const infoData = await infoDataHttp.getMediaInfo(type,id)
            setData(infoData)
         },[infoDataHttp])

    useEffect(() => {
      fetchInfo(type, id)
    
      }
    , [fetchInfo, id, type]);
    
console.log(data);

    return <section className="info"> 
    <article className="info-data">
        <Link to="/">go back</Link>
        <h1>{data.title || data.name}</h1>
        <div className="info-data__img">
            <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />
        </div>
        
    </article>
    
    
    </section>
 }

 export default InfoPage