import { globalStyle, style } from "@vanilla-extract/css";



export const h2 = style({
    fontSize:'30px',
    fontWeight:'bold',
    color:'#fff',
    padding: '20px',
    textAlign: 'center',
})

export const Link = style({
    display:'block',
    textAlign:'center',
    width : '275px',
    height:'60px',
    lineHeight : '60px',
    background:'#02d6e8',
    borderRadius:'4px',
    fontSize:'18px',
    color:'#02172a',
    selectors : {
        ['&:hover'] : {
            filter:'brightness(.85)',
            textDecoration: 'none',
            color:'#02172a',
        }
    }
})

export const main = style({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
})

globalStyle(`${main} p` , {
    color:'#fff',
})

