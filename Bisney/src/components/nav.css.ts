import { style } from "@vanilla-extract/css";

export const nav = style({
    position:'fixed',
    bottom:'70px',
    left:'0',
    width:'100dvw',
    height:'70px',
    backgroundColor:'#fff',
    zIndex:'1',
    display:'flex',
    gap:'10px',
})
const  base = style({
    width:'100%',
    height:'100%',
    textIndent : '-9999px',    
    backgroundSize: '40px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
})
export const home = style([base, {
    selectors : {
        [`&.on`] : {
            backgroundImage:'url("/public/nav/on/home.png")',
        },
        [`&.off`] : {
            backgroundImage:'url("/public/nav/off/home.png")',
        }
    }
}])
export const search = style([base, {
    selectors : {
        [`&.on`] : {
            backgroundImage:'url("/public/nav/on/search.png")',
        },
        [`&.off`] : {
            backgroundImage:'url("/public/nav/off/search.png")',
        }
    }
}])
export const download = style([base, {
    selectors : {
        [`&.on`] : {
            backgroundImage:'url("/public/nav/on/down.png")',
        },
        [`&.off`] : {
            backgroundImage:'url("/public/nav/off/down.png")',
        }
    }
}])
export const profile = style([base, {
   
}])


