import { style } from "@vanilla-extract/css";

export const h2 = style({
    textAlign:'center'
})
export const  itemcontainer = style({
    display:'flex',
    justifyContent:'center',
    width:'100%',
})
export const itemlist = style({
    display:'flex',
    flexWrap:'wrap',
    gap: '10px',    
    width:'90%'
})

export const item = style({
    
    height:'auto',   
    aspectRatio: 'auto 500 / 735',
})
