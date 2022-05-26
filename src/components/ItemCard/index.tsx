import { Link } from "react-router-dom"
import "./index.scss"

const ItemCard = ({name, imgSrc, id}:Props) => { 
    return <article className="item-card">
        <div className="img-container">
            <img src={`https://image.tmdb.org/t/p/w500/${imgSrc}`} alt=""  />
        </div>
        <Link to={`info/${id}`}><h3>{name}</h3> </Link> 
        
    
    </article>
 }

type Props={
    id:string
    name:string,
    imgSrc:string
}

 export default ItemCard