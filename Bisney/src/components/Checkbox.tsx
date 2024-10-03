import { useContext } from "react"
import { CheckboxContext } from "./CheckboxContext";


type Props = {
    children : string,
    disabled : boolean,
    checked : boolean,
    onChange : any
}
const Checkbox = ({children,disabled,checked,onChange , value} : Props ) => {
    const context = useContext(CheckboxContext);

    if(!context){
        return (
            <label>
                <input 
                    type="checkbox" 
                    disabled={disabled}
                    checked={checked}
                    onChange = {({target : {checked}})=>{onChange(checked)}}

                />
                {children}
            </label>
        )
    }
    const {isDisabled,isChecked,toggleValue} = context;

    return(
        <label>
            <input 
                type="checkbox" 
                disabled={isDisabled(disabled)} 
                checked={isChecked(value)} 
                onChange={({target : {checked}})=>{toggleValue({checked,value})}} 
            />
            {children}
        </label>
    )
}

export default Checkbox;