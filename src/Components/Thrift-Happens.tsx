import type { ClothingProduct, Fit, ClothingCategory, ClothingSize } from "../data/data";
import CheckoutContainer from "./CheckoutContainer";
import ItemsContainer from "./ItemsContainer";
import { useState } from "react";


export interface ClothesData{
    data: ClothingProduct[];
}


export interface ItemsContainerProps {
    data: ClothingProduct[];
    clothingProduct: ClothingProduct[];
    handleChangeQuantity: (id: number, delta: number) => void
    handleAddToCheckout: (checkoutData: SelectedItem) => void;
}

export interface SelectedItem{
      id: number;
      name: string;
      image: string;
      fit: Fit;
      category: ClothingCategory;
      color: string;
      size: ClothingSize;
      itemQuantity: number;
      price: number;
      total: number;
}

export interface CheckoutContainerProps extends SelectedItem {
    handleEmptyCart: () => void;
}


//----------------------------------- App function

export default function ThriftHappens({data}: ClothesData) {

    const[clothingProduct, setClothingProduct] = useState<ClothingProduct[]>(
        data.map((clothingProduct: ClothingProduct) =>({
            id: clothingProduct.id,
            name: clothingProduct.name,
            image: clothingProduct.image,
            fit: clothingProduct.fit,
            category: clothingProduct.category,
            color: clothingProduct.color,
            description: clothingProduct.description,
            size: clothingProduct.size,
            price: clothingProduct.price,
            quantity: clothingProduct.quantity,
            itemQuantity: clothingProduct.itemQuantity,
        })),
    );

    const [checkoutItems, setCheckoutItems] = useState<SelectedItem[]>([]);


    //Handlers

    function handleChangeQuantity(id: number, delta: number){
        setClothingProduct((prevData) => {
           return prevData.map((info) => 
            info.id === id 
           ? {...info, quantity: Math.max(info.quantity + delta)}
           : info,);
        });
    }

    function handleAddToCheckout(selectedItem: SelectedItem){
        setCheckoutItems((previousItems) => {
            return[...previousItems, {...selectedItem}];
        })
    }

    function handleEmptyCart(){
        setCheckoutItems([]);
    }

    function handleRemoveOneFromCart(id: number){
        setCheckoutItems((prevItems) => {return prevItems.filter((item) => item.id !== id)});
    


    return <div>
        <ItemsContainer data={data}
        clothingProduct={clothingProduct}
        handleAddToCheckout={handleAddToCheckout}
        handleChangeQuantity={handleChangeQuantity}
        handleAddToCheckout={handleAddToCheckout} />

        <CheckoutContainer data={checkoutItems}
        handleEmptyCart={handleEmptyCart}
        handleRemoveOneFromCart={handleRemoveOneFromCart} />

    </div>
}
}