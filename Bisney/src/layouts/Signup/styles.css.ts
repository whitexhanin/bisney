import {style} from '@vanilla-extract/css';


export const logo = style({     
    width : '180px',
    height:'100px',   
    
})
export const img = style({
    get selectors() {
        return {
            [`${logo} &`]: {
                width : '100%'
            }
        }
    }
})

export const container = style({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width:'100vw',
    height:'100vh',    
    backgroundImage : 'radial-gradient(circle at 20% 95%, #056877, #051828 96%)'
    
})

