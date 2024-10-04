import { CheckboxContext } from "./CheckboxContext";
import { ChangeEventHandler, createContext, useCallback, useEffect, useState } from 'react';


export const CheckboxGroup = ({
    label,
    children,
    disabled : groupDisabled,
    values,
    onChange
}) => {
    const [step1checkall , setstep1checkall] = useState(false);    
    const [checkboxAlllength , _1] = useState(3);
    const [misMatch , setmisMatch] = useState(false);    
    const [isCheckedAll , setisCheckedAll] = useState(false);
    

    const onChangeIscheckbox : ChangeEventHandler<HTMLInputElement> = useCallback((e ) => {
        
        if(e.target.checked == true){
            setstep1checkarr(prev  =>[...prev , e.target.id]);
        }else{
            console.log(e.target.id);
            setstep1checkarr((prev)=>prev.filter( (p) => p !== e.target.id))            
            // setisCheckedAll(false)
        }
        
    },[step1checkarr]);

    console.log(step1checkarr);

    useEffect(() => {

            if(checkboxAlllength == step1checkarr.length){
                setmisMatch(true);
                setisCheckedAll(true);
            }else {
                setmisMatch(false);
                setisCheckedAll(false);
            }
        },[step1checkarr]
    )

    const onChangeCheckboxAll : ChangeEventHandler<HTMLInputElement>  = useCallback((e)=>{

        let checkboxs  = document.querySelectorAll("input[name=signupstep1]");

        if(e.target.checked == true){
            setstep1checkarr([]);
            checkboxs.forEach((c)=>{
                const checkbox = c as HTMLInputElement;               
                checkbox.checked = true;

                setstep1checkarr((prev)=> [...prev , c.id])
            })
            
        }else {
            checkboxs.forEach((c)=>{
                const checkbox = c as HTMLInputElement;               
                checkbox.checked = false;
                setstep1checkarr([]);
            })
        }

    },[])
    return (
        <>
            {/* <fieldest>
                <length>
                    {label}
                </length> */}
                <CheckboxContext.Provider value={{ setstep1checkarr, isChecked,toggleValue}}>
                    {children}
                </CheckboxContext.Provider>
            {/* </fieldest> */}
        </>
    )
}