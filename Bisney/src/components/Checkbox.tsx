import { ChangeEventHandler, createContext, useCallback, useState } from "react";

type Props   = {
    children : React.ReactNode,
    name : string,
    id : string  ,
    // props : any ,
    sendDataToParent: ChangeEventHandler<HTMLInputElement>
}




const Checkbox : React.FC<Props> = ({children , name , id , sendDataToParent} : Props)  => {   

    const sendData = (e : any) => {        
       sendDataToParent(e)
    }

    return (
        <div>
            <input type="checkbox" name={name} id={id} onChange={sendData}/>
            <label htmlFor={id}>
                {children}
            </label>
        </div>
    )
}


export default Checkbox;