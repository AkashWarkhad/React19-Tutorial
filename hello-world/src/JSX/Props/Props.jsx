// export const PropsInMethod = (props) => 
// {
//     return(
//         <div>
//             <h3>Title : {props.title}</h3>
//             <p> - Price : ${props.price}</p>
//             <p> - In Stock : {props.inStock ? "Yes": "No"} </p>
//             <p> - Categories : {props.categories.join(", ")}</p>
//         </div>
//     );
// }

// Another Prop passing
export const PropsInMethod = ({title, price, inStock, categories}) => 
{
    return(
        <div>
            <h3>Title : {title}</h3>
            <p> - Price : ${price}</p>
            <p> - In Stock : {inStock ? "Yes": "No"} </p>
            <p> - Categories : {categories.join(", ")}</p>
        </div>
    );
}