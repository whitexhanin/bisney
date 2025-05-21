import { style } from "@vanilla-extract/css";

export const avatar = style({
    
})
export const wrap = style({
    padding:'10px',
})
export const useritem = style({
    position: 'relative',
    display:'flex',
    width: '100px',
    height:'100px',
    color:'#ffffff',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: '100%',
    transition: 'all .2s ease-in-out 0s',
    backgroundSize:'100%',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    selectors: {
        '&:hover': {
            filter: 'brightness(.85)',
            color:'#ffffff',
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
export const layoutwrap = style({
    display:'flex',
    flexFlow:'column',
    gap:'10px',
})
export const labelname = style({
    fontSize:'15px',
    fontWeight:'bold',
})
export const inputname = style({
    fontSize:'15px',
    height:'20px'
})

// 재생 및 설정 섹션 스타일
export const settingsSection = style({
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
})

export const settingsTitle = style({
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#333',
})

export const settingsItem = style({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '12px',
})

export const settingsLabel = style({
    fontSize: '14px',
    color: '#666',
})

export const deleteButton = style({
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    ':hover': {
        backgroundColor: '#ff0000',
    }
})

// 토글 스위치 스타일
export const switchWrapper = style({
    position: 'relative',
    display: 'inline-block',
    width: '50px',
    height: '24px',
})

export const slider = style({
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#ccc',
    transition: '.4s',
    borderRadius: '24px',
    selectors: {
        '&:before': {
            position: 'absolute',
            content: '""',
            height: '16px',
            width: '16px',
            left: '4px',
            bottom: '4px',
            backgroundColor: 'white',
            transition: '.4s',
            borderRadius: '50%',
        },
        'input:checked + &': {
            backgroundColor: '#02d6e8',
        },
        'input:checked + &:before': {
            transform: 'translateX(26px)',
        },
        'input:focus + &': {
            boxShadow: '0 0 1px #02d6e8',
        }
    }
})