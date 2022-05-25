import "./index.scss"

const ItemCard = ({name, imgSrc}:Props) => { 
    return <article className="item-card">
        <img src={`https://image.tmdb.org/t/p/w500/${imgSrc}`} alt=""  />
        <h3>{name}</h3>
    
    </article>
 }

type Props={
    name:string,
    imgSrc:string
}

 export default ItemCard