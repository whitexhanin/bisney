import {style , globalStyle} from '@vanilla-extract/css';

export const checkbox = style({
    display:'flex',
    alignItems:'flex-start',
    color: '#252526',    
    fontSize:'14px',       
})

export const inputStyle = style({
    marginTop:'5px'
})

globalStyle(`${checkbox} button `,{
    padding:'0 5px',
})

globalStyle(`${checkbox} label `,{
    whiteSpace:'nowrap',
})