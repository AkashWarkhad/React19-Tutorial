import React, {useState} from 'react'
import RunOnceUseEffectWithFunction from './RunOnceUseEffectWithFunction';

function CleanupUsingUseEffectWithFunction() 
{
    const [display, setDisplay] = useState(true);
  return (
    <div>
        <p>Here we cleaning up the event listners using useEffect </p>
        <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
        {display && <RunOnceUseEffectWithFunction/>}
    </div>
  )
}

export default CleanupUsingUseEffectWithFunction