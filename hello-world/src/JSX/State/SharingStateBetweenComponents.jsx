import { useState } from "react";

export const SharingStateBetweenComponent = () => 
{
    const [cartItem, setCartItem] = useState({
        reactCourse: 0,
        dotnetCourse: 0
    });

    const prices = 
    {
        reactCourse: 50.00,
        dotnetCourse: 80.00
    }

    const handleAddReactCourse = () => {
        if(cartItem.reactCourse < 5){
            setCartItem(
            {
                ...cartItem,
                reactCourse: cartItem.reactCourse + 1
            });
        }
    }

    const handleAddDotnetCourse = () => {
        if(cartItem.dotnetCourse < 5)
        {
            setCartItem(
            {
                ...cartItem,
                dotnetCourse: cartItem.dotnetCourse + 1
            });
        }
    }

    const ClearCart = () => {
        setCartItem(
        {
            reactCourse: 0,
            dotnetCourse: 0
        })
    }

    return (
        <div>
            <h3>Shopping Cart Components :</h3>
            <ProductCart 
                name = "React Course"
                price = { prices.reactCourse }
                quantity= { cartItem.reactCourse }
                addQuantity= { handleAddReactCourse }
            />

            <ProductCart 
                name = "Dotnet Course"
                price = { prices.dotnetCourse }
                quantity= { cartItem.dotnetCourse }
                addQuantity= { handleAddDotnetCourse }
            />

            <CartSummary 
                cartItems= { cartItem }
                prices= { prices }
            />

            <button onClick={ClearCart}>Clear Cart!</button>
        </div>
    );
}

export const ProductCart = ({name, price, quantity, addQuantity}) =>
{   
    return (
        <div>
            <h4>{name}</h4>
            <p>${price}</p>
            <p>Quantity : {quantity}</p>
            <button onClick={addQuantity}>Add to cart</button>
        </div>
    );
}

export const CartSummary = ({cartItems, prices}) =>
{
    const totalItems = cartItems.reactCourse + cartItems.dotnetCourse;
    const totalPrice = cartItems.reactCourse * prices.reactCourse 
                        + cartItems.dotnetCourse * prices.dotnetCourse;
    return (
        <div>
            <h4>Cart Sumary</h4>
            <p>Total Items : { totalItems }</p>
            <p>Total Price : ${ totalPrice }</p>
        </div>
    );
}