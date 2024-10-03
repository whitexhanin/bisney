import { CheckboxContext } from "./CheckboxContext";

export const CheckboxGroup = ({
    label,
    children,
    disabled : groupDisabled,
    values,
    onChange
}) => {
    const isDisabled = (disabled) => { disabled || groupDisabled}
    const isChecked = (value) => {values.includes(value)}
    const toggleValue = ({checked , value}) => {
        if(checked){
            onChange(values.concat(value))
        }else {
            onChange(value.filter((v)=>{v !== value}))
        }
    }
    return (
        <>
            {/* <fieldest>
                <length>
                    {label}
                </length> */}
                <CheckboxContext.Provider value={{ isDisabled, isChecked,toggleValue}}>
                    {children}
                </CheckboxContext.Provider>
            {/* </fieldest> */}
        </>
    )
}