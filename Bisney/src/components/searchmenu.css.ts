import { globalStyle, style } from "@vanilla-extract/css";

export const menu = style({
    display:'flex',
    padding:'0 10px',
    gap:'5px',
}) 

globalStyle(`${menu} a[href]`,{    
    color:'#090909',
    padding:'5px',
    border:'1px solid #000999',
    borderRadius:'5px',
})

