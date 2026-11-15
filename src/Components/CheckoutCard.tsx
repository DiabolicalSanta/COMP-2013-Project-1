import type { SelectedItem} from "./Thrift-Happens";

export interface CheckoutCardProps extends SelectedItem{
    handleRemoveOneFromCart: (id: number) => void;
}


export default function CheckoutCard({id, image, name, fit, color, category, size, itemQuantity, price, total, handleRemoveOneFromCart}: CheckoutCardProps){
    return (<div className="CheckoutCard">
        <img src={image} alt="" height="50px" width="50"/>
            <br/>
            <h2>{name}</h2>
            <p>Fit: {fit}</p>
            <p>Color: {color}</p>
            <p>Catagory: {category}</p>
            <p>Size: {size}</p>
            <br/>
            <p>Quantity: {itemQuantity}</p>
            <p>Price: {price.toFixed(2)}</p>
            <h4>Total: {total}</h4>
            <button onClick={() => handleRemoveOneFromCart(id)}>Delete</button>
    </div>);
}