import { style } from "@vanilla-extract/css";

export const wrap = style({
    padding:'10px',
})
export const userlist = style({
    display:'flex',
    listStyle:'none',
    gap:'15px',
    padding:'0',
})
// hover 시 after에 스타일을 넣기 위해 :after와 :hover:after를 분리하여 작성
// 이유 1: vanilla-extract는 중첩된 ':after'를 지원하지 않으므로, 별도 작성 필요
// 이유 2: 코드가 더 명확하고 유지보수에 용이함

export const useritem = style({
    position: 'relative',
    width: '100px',
    borderRadius: '100%',
    transition: 'all .2s ease-in-out 0s',
    backgroundSize:'100%',
    selectors: {
        '&:hover': {
            filter: 'brightness(.85)',
        },
        '&:after': {
            // 기본적으로 after는 보이지 않음
            content: '',
            display: 'none',
            position: 'absolute',
            top: '0',
            right: '0',
            width: '100px',
            height: '100px',
            borderRadius: '5px',
            background: 'url("/public/icon/pencil.png") center no-repeat',
            backgroundSize: '40px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            zIndex: '-1',
        },
        '&:hover:after': {
            // hover 시 after를 보이게 함
            display: 'block',
        }
    }
})
export const userName = style({   
    display:'flex' ,
    paddingTop:'100px',
    color:'#000',
    fontWeight:'bold',    
    justifyContent:'center',
})
export const link = style({
    display:'flex',
    width:'100px',
    height:'30px',
    color:'#040714',
    background:'#02d6e8;',
    borderRadius: '4px',
    transition: 'all .2s ease-in-out 0s',
    justifyContent: 'center',
    fontWeight:'bold',
    ':hover':{
        filter: 'brightness(.85)',
    }    

})
