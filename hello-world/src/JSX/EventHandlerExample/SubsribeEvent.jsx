import { BaseActionBtn } from "./BaseActionBtn";

export const SubscribeEvent = () => 
{
    const handleSubsribe =() => 
    {
        alert("Thanks for Subscribing🎆!");
    }

    return (
        <div>
            <h4>Subsribe to the NewsLetter</h4>
            <BaseActionBtn text="Subscribe" onClick={ handleSubsribe }/>
        </div>
    );
}