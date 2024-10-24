import {style} from '@vanilla-extract/css';

export const boxcontainer = style({
    display:'flex',
    flexDirection:'column',
    gap:'25px',
    width:'100%',
    maxWidth:'580px',
    maxHeight:'620px',
    background:'#fff',   
    padding : '56px 72px' ,
    boxSizing : 'border-box',
    borderRadius:'24px',
    '@media':{
        'screen and (max-width:800px)': {
            padding:'20px',
            borderRadius:'0px', 
        }
    }
})

export const title = style({
    fontSize:'28px',
    fontWeight : '600',
    marginBottom:'0'
})

export const inputContainer = style({
    position: 'relative',
    width: '100%',
    height: '60px',
    backgroundColor: 'rgb(233, 235, 240)',
});

export const inputStyle = style({
    width:'100%',
    height:'100%',
    padding: '20px 16px 0',
    color: '#252526',
    fontSize: '16px',    
    background:'transparent',
    boxSizing:'border-box',
    selectors: {
        '&:active': {
            outline: 'none'
        }
    }
});

export const labelStyle = style({
    position: 'absolute',
    top:'18px',
    left:'16px',
    fontSize:'16px',
    color:'#5f6166',
    transition:'font-size 0.1s ease-in-out'
});

export const activeLabelStyle = style({
    selectors: {
        [`${inputContainer} ${inputStyle}:focus + &`]: {
            top:'6px',
            fontSize:'12px'
        }        
    },
});

export const hasLabelStyle = style({    
        top:'6px',
        fontSize:'12px'              
});

export const nextButton = style({
    display:'block',
    width:'100%',
    height:'52px',    
    background:'#000',
    borderRadius:'26px',
    color:'#fff',
    fontSize:'16px',
    textAlign:'center',
    selectors : {
        [`&.disabled`] : {
            background:'#ccced3',
        }
    }

})

export const  checkboxlist = style ({
    display:'flex',
    flexDirection:'column',
    gap:'5px',
})

export const txt = style({
    display:'block',
    whiteSpace:'nowrap',
    marginBottom:'10px',
    fontSize:'14px',
    color: '#252526',  
    '@media':{
        'screen and (max-width:800px)': {
            whiteSpace:'normal',
        }
    }  
})

export const showpassword = style({
    position:'absolute',
    top:0,
    right:0,
    padding:0,
    width:'50px',
    height:'60px' ,
    background:'transparent',
    textAlign:'center'
})

export const message = style({
    marginTop:'5px',
    fontSize:'12px'  ,
    color:'#5f6166',
    selectors : {
        [`&.red`] : {
            color:'red',
        }
    }
})

export const bar = style({
    position:'relative',
    margin:'20px 0',
    width:'187px',
    height:'6px',
    borderRadius:'3px',
    backgroundColor:'#ccced3',
    overflow:'hidden',    
})

export const value = style({
    selectors : {
        [` ${bar} &`] : {
            position:'absolute',
            top:0,
            left:0,
            background:'#d40909',            
            height:'100%',
        }
    }
})

export const emailtit = style({
    fontSize:'16px',
    color:'#252526',    

})

export const emailadd = style({
    fontSize:'14px',
    color:'#252526',
    fontWeight:'bold',

})



