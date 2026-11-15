import CheckoutCard from "./CheckoutCard";
import type { SelectedItem } from "./Thrift-Happens";

interface CheckoutContainerProps{
    checkoutData: SelectedItem[];
    handleEmptyCart: () => void;
    handleRemoveOneFromCart: (id: number) => void;
}


export default function CheckoutContainer({checkoutData, handleEmptyCart, handleRemoveOneFromCart}: CheckoutContainerProps){
    return (
    <div>
        <div className="CheckoutContainer">
            {checkoutData.map((item) => (
                <CheckoutCard key={item.id} {...item} handleRemoveOneFromCart={handleRemoveOneFromCart}/>
            ))}

        </div>
        <div>
            <h2>{checkoutData.length > 0 ? `Total: 
         ${checkoutData.reduce((acc, item) => acc + item.price, 0).toFixed(2)}` 
         : `Cart Is Empty`}
         </h2>
         <button onClick={() => handleEmptyCart()}>Empty Cart</button>
        </div>

    </div>
    




    );
}