import { DefaultPropsPattern } from "./DefaultPropsPattern";

// export const SpreadPropsPattern = (props) => 
// {
//     return(
//         <>
//             <h5>Used Spread Props Pattern to pass the data in DefaultPropsPattern method</h5>
//             <DefaultPropsPattern
//                 // id = {props.id}
//                 // name = {props.name}
//                 // message = {props.message}
//                 {...props}   // By Mappind data 1 by on we can use this spread pattern
//             />
//         </>
//     );
// }


// What if I wants some data from the Props which I want to print extra then use below 
// But in the ...rest the id will not be populated

export const SpreadPropsPattern = ({id, ...rest}) => 
{
    return(
        <>
            <h5>{id} Users Details</h5>
            <DefaultPropsPattern
                // id = {props.id}
                // name = {props.name}
                // message = {props.message}
                {...rest}   // By Mappind data 1 by on we can use this spread pattern
            />
        </>
    );
}