import {useEffect} from 'react'

function useDocumentTitleHook(count) 
{
  useEffect(()=> 
      {
          document.title = "Title " + count
      }, [count])
}

export default useDocumentTitleHook