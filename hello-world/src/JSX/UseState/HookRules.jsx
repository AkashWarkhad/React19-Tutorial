import { useState } from "react"

export const HookRules = ({isPremium}) =>
{
    const [credits, setCredits] = useState(500);

    if(!isPremium)
    {
        return <div>You don't have any credits. Pls add credit first.</div>
    }
    return (
        <div>
            <p>You have {credits} credits.</p>
            <button onClick={()=>{setCredits(0)}}>Spend all credits.</button>
        </div>
    );
}