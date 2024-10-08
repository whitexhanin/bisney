import { ChangeEventHandler, createContext, useCallback, useState } from "react";
import {checkbox , inputStyle} from '@/components/checkbox.css';

type Props   = {
    children : React.ReactNode,
    name : string,
    id : string  ,
    // props : any ,
    sendDataToParent: ChangeEventHandler<HTMLInputElement>,
    checked? : boolean
}




const Checkbox : React.FC<Props> = ({children , name , id , sendDataToParent , checked} : Props)  => {   

    const sendData = (e : any) => {        
       sendDataToParent(e)
    }
    console.log(checked)

    if(checked){
        return (
            <div className={checkbox}>
                <input type="checkbox" className={inputStyle} name={name} id={id} onChange={sendData} checked={checked}/>
                <label htmlFor={id}>
                    {children}
                </label>
        </div>
        )
    }

    return (
        <div className={checkbox}>
            <input type="checkbox" className={inputStyle} name={name} id={id} onChange={sendData}/>
            <label htmlFor={id}>
                {children}
            </label>
        </div>
    )
}

export default Checkbox;