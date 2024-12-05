export default function Property({id, name, rating, price}){
    return (
        <div className="Property">
            <ul>
                <h1>{name}</h1>
                <h2>{rating}⭐</h2>
                <h3>${price}</h3>
            </ul>
        </div>
       
    )
}