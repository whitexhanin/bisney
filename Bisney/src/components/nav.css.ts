import { style , globalStyle } from "@vanilla-extract/css";

// export const nav = style({
//     position:'fixed',
//     bottom:'0',
//     left:'0',
//     width:'100dvw',
//     height:'70px',
//     backgroundColor:'#fff',
//     zIndex:'1',
//     display:'flex',
//     gap:'10px',
// })
// const  base = style({
//     width:'100%',
//     height:'100%',
//     textIndent : '-9999px',    
//     backgroundSize: '40px',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
// })
// export const home = style([base, {
//     selectors : {
//         [`&.on`] : {
//             backgroundImage:'url("/public/nav/on/home.png")',
//         },
//         [`&.off`] : {
//             backgroundImage:'url("/public/nav/off/home.png")',
//         }
//     }
// }])
// export const search = style([base, {
//     selectors : {
//         [`&.on`] : {
//             backgroundImage:'url("/public/nav/on/search.png")',
//         },
//         [`&.off`] : {
//             backgroundImage:'url("/public/nav/off/search.png")',
//         }
//     }
// }])
// export const download = style([base, {
//     selectors : {
//         [`&.on`] : {
//             backgroundImage:'url("/public/nav/on/down.png")',
//         },
//         [`&.off`] : {
//             backgroundImage:'url("/public/nav/off/down.png")',
//         }
//     }
// }])

// export const profileMenu = style({
//     display:'none',
//     position:'absolute',
//     top:'-100%',
//     left:'0',
//     width:'100%',
//     color:'#fff',
//     background:'#000',       
// })
// export const profile = style([base, {
//     position:'relative',
//     display:'flex',
//     alignItems:'center',
//     justifyContent:'flex-end',
//     textIndent:'0',
//     color:'#000',
//     fontWeight:'bold',
//     gap:'5px',  
//     ':hover': {
//         color:'#fff',
//         background:'#000',   
//     },      
// }])

// globalStyle(`${profileMenu} a`,{
//     color:'#fff',
// })



// globalStyle(`${profile}:hover .${profileMenu}`, { 
//     display: 'block', 
// });





//    // nav.css.ts에 아래 스타일을 추가하세요. (UI/UX 강화)
//     //-------------------------------------------------
//     // 프로필 아바타(이미지)
//     export const profileAvatar = style({
//         borderRadius: "50%",
//         width: "40px",
//         height: "40px",
//         objectFit: "cover",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//         background: "#eee",
//         marginRight: "8px",
//     });
//     // 프로필 닉네임
//     export const profileName = style({
//         fontWeight: "bold",
//         fontSize: "15px",
//         color: "#222",
//         marginRight: "8px",
//         '@media': {
//             'screen and (max-width: 768px)': {
//                 display: "none",
//             }
//         }
//     });
//     // 프로필 메뉴 오픈 시
//     export const profileMenuOpen = style({
//         display: "block !important",
//         position: "absolute",
//         top: "60px",
//         right: "0",
//         minWidth: "140px",
//         background: "#222",
//         color: "#fff",
//         borderRadius: "8px",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//         zIndex: 10,
//         padding: "8px 0",
//         '@media': {
//             'screen and (max-width: 768px)': {
//                 top: "50px",
//                 right: "0",
//                 left: "auto",
//             }
//         }
//     });
//     // 로그아웃 버튼
//     export const logoutBtn = style({
//         width: "100%",
//         background: "none",
//         border: "none",
//         color: "#fff",
//         textAlign: "left",
//         padding: "10px 16px",
//         fontSize: "15px",
//         cursor: "pointer",
//         ':hover': {
//             background: "#444",
//         }
//     });
//     // -------------------------------------------------
//     // 이유:
//     // 1. 프로필 이미지와 닉네임이 명확하게 보이도록 함
//     // 2. 모바일에서 닉네임 숨김, 메뉴 오픈 시 시각적 구분 강화
//     // 3. 로그아웃 버튼 등 메뉴 항목의 접근성과 터치 영역 확대




// 네비게이션 바
export const nav = style({
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100vw',
    height: '70px',
    background: 'rgba(255,255,255,0.98)',
    borderTop: '1px solid #e5e5e5',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    boxShadow: '0 -2px 8px rgba(0,0,0,0.04)',
    '@media': {
        'screen and (max-width: 768px)': {
            height: '60px',
        }
    }
});
// 네비게이션 버튼(아이콘)
export const navBtn = style({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: '#888',
    fontSize: '12px',
    fontWeight: 500,
    height: '100%',
    transition: 'color .2s',
    position: 'relative',
    ':hover': {
        color: '#02d6e8',
    },
    selectors: {
        '&.active': {
            color: '#02d6e8',
        }
    }
});
// 아이콘 이미지
export const navIcon = style({
    width: '28px',
    height: '28px',
    marginBottom: '2px',
    display: 'block',
    objectFit: 'contain',
    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.04))'
});
// 프로필 컨테이너
export const profileWrap = style({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
    cursor: 'pointer',
    userSelect: 'none'
});
// 프로필 아바타
export const profileAvatar = style({
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    objectFit: "cover",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    background: "#eee",
    border: "2px solid #02d6e8",
    marginRight: "8px",
    transition: "border .2s"
});
// 프로필 닉네임
export const profileName = style({
    fontWeight: "bold",
    fontSize: "14px",
    color: "#222",
    maxWidth: "80px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    '@media': {
        'screen and (max-width: 768px)': {
            display: "none",
        }
    }
});
// 프로필 메뉴
export const profileMenu = style({
    display: 'none',
    position: 'absolute',
    bottom: '60px',
    right: '0',
    minWidth: '150px',
    background: '#222',
    color: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
    zIndex: 200,
    padding: '8px 0',
    animation: 'fadeIn .2s',
    '@media': {
        'screen and (max-width: 768px)': {
            bottom: '50px',
            right: '0',
            left: 'auto',
        }
    }
});
// 메뉴 오픈 시
export const profileMenuOpen = style({
    display: "block !important"
});
// 메뉴 항목
export const profileMenuItem = style({
    width: "100%",
    background: "none",
    border: "none",
    color: "#fff",
    textAlign: "left",
    padding: "12px 20px",
    fontSize: "15px",
    cursor: "pointer",
    transition: "background .15s",
    textDecoration: "none",
    display: "block",
    ':hover': {
        background: "#333",
    }
});