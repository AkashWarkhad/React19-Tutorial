export const DefaultPropsPattern = ({id = "defaultId", name = "Guest", message = "Deafault Message!"}) => 
{
    return(
        <h4>
            Room {id}: {name} {message}.
        </h4>
    );
}