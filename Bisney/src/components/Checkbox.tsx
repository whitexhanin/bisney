import { ChangeEventHandler, createContext, useCallback, useState } from "react";

type Props   = {
    children : string,
    name : string,
    id : string    
}




const Checkbox = ({children , name , id} : Props)  => {
    
    const [step1checkarr, setstep1checkarr] = useState<string[]>([]);
    const onChangeIscheckbox : ChangeEventHandler<HTMLInputElement> = useCallback((e ) => {
        
        if(e.target.checked == true){
            setstep1checkarr(prev  =>[...prev , e.target.id]);
        }else{
            console.log(e.target.id);
            setstep1checkarr((prev)=>prev.filter( (p) => p !== e.target.id))            
            // setisCheckedAll(false)
        }
        
    },[step1checkarr]);

    return (
        <div>
            <input type="checkbox" name={name} id={id} onChange={onChangeIscheckbox}/>
            <label htmlFor={id}>
                {children}
            </label>
        </div>
    )
}


export default Checkbox;