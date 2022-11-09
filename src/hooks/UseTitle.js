import { useEffect } from "react"

const useTitle= title=>{
    useEffect(()=>{
        document.title = `${title}-Kitchen Food`;
    },[title])
}

export default useTitle;