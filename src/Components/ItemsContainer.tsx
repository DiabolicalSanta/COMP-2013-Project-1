import type { ItemsContainerProps } from "./Thrift-Happens"
import ItemCard from "./ItemCard";



export default function ItemsContainer({data, clothingProduct, handleAddToCheckout, handleChangeQuantity}: ItemsContainerProps){

    return <div className="ItemsContainer">
        {data.map((ClothingProduct) => {
            const details = clothingProduct.find(
                (information) => information.id === ClothingProduct.id);
                
                if (!details) return null;

                return (<ItemCard key={ClothingProduct.id} {...ClothingProduct}
                        clothingProduct={details}
                        handleChangeQuantity={(delta: number) =>
                            handleChangeQuantity(clothingProduct.id, delta)}
                        
                            handleAddToCheckout={handleAddToCheckout}
                        />);
        })}





    </div>


}