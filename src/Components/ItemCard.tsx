import type { ClothingProduct } from "../data/data";
import type { SelectedItem,  } from "./Thrift-Happens";


export interface ItemCardProps extends ClothingProduct {

    clothingProduct: ClothingProduct
    handleChangeQuantity: (delta: number) => void
    handleAddToCheckout: (selectedItem: SelectedItem) => void

}


export default function ItemCard({image, name, clothingProduct, handleAddToCheckout, handleChangeQuantity}: ItemCardProps){

    return (
        <div className="ItemCard">
            <img src={image} alt="" height="150px" width="150"/>
            <br/>
            <h2>{name}</h2>
            <p>Fit: {clothingProduct.fit}</p>
            <p>Color: {clothingProduct.color}</p>
            <p>Catagory: {clothingProduct.category}</p>
            <p>Size: {clothingProduct.size}</p>
            <p>Description: {clothingProduct.description}</p>
            <br/>
            <p>Quantity: {clothingProduct.quantity}</p>
            <p>Price: {clothingProduct.price}</p>
            <button onClick={() => handleChangeQuantity(-1)}>+</button>
            <p>Item Quantity: {clothingProduct.itemQuantity}</p>
            <button onClick={() => handleChangeQuantity(+1)}>-</button>
            <button onClick={() => handleAddToCheckout}>Add To Cart</button>
        </div>
    )
}