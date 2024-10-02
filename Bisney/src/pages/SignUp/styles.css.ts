import {style} from '@vanilla-extract/css';


export const logo = style({     
    width : '180px',
    height:'100px',
    backgroundColor: '#000'

    
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

