import { useReducer } from "react";

const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const CLEAR_CART = "CLEAR_CART";

const initialState = 
{
    items: [],
    totalAmount: 0,
    totalItems: 0,
}

const reducer = (state, action)=> 
{
    // action.type : To describe what happned
    // action.payload : To carray extra data , such as product to add or remove
    console.log("Action Dispathched: ", action);
    switch(action.type)
    {
        case ADD_ITEM:
        {
            const existingItemIndex = state.items.findIndex(x=> x.id === action.payload.id);

            let updatedItems;
            if(existingItemIndex >= 0)
            {
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1
                };
            }
            else {
                updatedItems = [
                    ...state.items,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ]
            }

            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedItems.reduce((totalAmt, item) => totalAmt + item.price * item.quantity, 0),
                totalItems : updatedItems.reduce((totalItem, item) => totalItem + item.quantity, 0)
            };
        }

        case REMOVE_ITEM:
        {
            const remeaningItems = state.items.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                items : remeaningItems,
                totalAmount: remeaningItems.reduce((accumlator, currItem) => accumlator + currItem.price * currItem.quantity, 0),
                totalItems: remeaningItems.reduce((accumlator, currItem) => accumlator + currItem.quantity, 0)
            }
        }

        case UPDATE_QUANTITY: 
        {
            if(action.payload.quantity === 0)
            {
                return reducer(state, {
                    type:REMOVE_ITEM,
                    payload : {
                        id: action.payload.id
                    }
                });
            }

            const updatedItems = state.items.map((item) => item.id === action.payload.id ? {
                ...item,
                quantity: action.payload.quantity
            } : item);

            return{
                ...state,
                items : updatedItems,
                totalAmount: updatedItems.reduce((accumlator, currItem) => accumlator + currItem.price * currItem.quantity, 0),
                totalItems: updatedItems.reduce((accumlator, currItem) => accumlator + currItem.quantity, 0)
            }
        }

        case CLEAR_CART:
        {
            return initialState;
        }

        default:
            return state;
    }
}

export const ShoppingCartWithReducer = () => 
{
    const [state, dispatch] = useReducer(reducer, initialState);

    const products = 
    [
        {id: 1, name: "React Course", price: 50.00 },
        {id: 2, name: "Dotnet Course", price: 80.00 },
        {id: 3, name: "JavaScript Course", price: 30.00 }
    ]

    return (
        <div>
            <h2>Products</h2>
            {
                products.map(prd => {
                    return <div key={prd.id}>
                        <h3>
                            {prd.name} - {prd.price}
                        </h3>
                        
                        <button onClick={()=> {
                            dispatch({
                                type:ADD_ITEM,
                                payload: prd
                            })
                        }}> Add to cart
                        </button>
                    </div>
                })
            }

            <div>
                <h2>Shopping cart</h2>
                {
                    state.items?.length === 0 
                        ? (<p>Your cart is empty</p>) 
                        : (
                            <div>
                                {
                                    state.items.map((x) => 
                                    {
                                        return (<div key = {x.id}>
                                            <p> 
                                                {x.name} - $${x.price.toFixed(2)} X {x.quantity}
                                            </p>
                                            
                                            <button onClick={()=> {dispatch({
                                                type: UPDATE_QUANTITY,
                                                payload: {
                                                    id: x.id,
                                                    quantity: x.quantity - 1
                                                }
                                            })}}><b>-</b>
                                            </button>

                                            <button onClick={()=> {dispatch({
                                                type: UPDATE_QUANTITY,
                                                payload: {
                                                    id: x.id,
                                                    quantity: x.quantity + 1
                                                }
                                            })}}><b>+</b>
                                            </button>

                                            <button onClick={()=> {dispatch({
                                                type: REMOVE_ITEM,
                                                payload: {x}
                                            })}}>Remove
                                            </button>

                                        </div>)
                                    })
                                }

                                <h3>Total Amount: {state.totalAmount}</h3>
                                <h3>Total Items: {state.totalItems}</h3>

                                { state.items?.length > 0 && (
                                    <button onClick = {() => dispatch({ type:CLEAR_CART})}>Clear Cart
                                    </button>)
                                }
                            </div>
                        )
                }
            </div>
        </div>
    )
}