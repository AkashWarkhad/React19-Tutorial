// This is the lengthy process to consume the context without useContext

import React from 'react'
import { UserContext, ChannelContext} from '../../App'

function ComponentC() 
{
  return (
    <div>
        <strong>Fetch Context without useContext!!</strong>
        <UserContext.Consumer>
            {
                user => 
                {
                    return (
                    <ChannelContext.Consumer>
                    {
                        channel => {
                            return <p>We using {user} hook refered by {channel}</p>
                        }
                    }
                    </ChannelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC