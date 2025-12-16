import React, {useContext} from 'react'
import ComponentC from './ComponentC'
import { UserContext, ChannelContext } from '../../App'

function ComponentB() 
{

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>
            <strong>Fetch Context with using useContext</strong> <br></br>
            {user} - {channel}
            <ComponentC />
            
        </div>
    )
}

export default ComponentB