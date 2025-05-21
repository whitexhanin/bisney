import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import * as styles from "./nav.css";
import { useQuery } from '@tanstack/react-query';
import { getUser } from "@/utils/getUser";

/*
    nav.css.ts에 아래 스타일을 추가하세요. (UI/UX 대폭 개선)
    -------------------------------------------------
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
    // -------------------------------------------------
    // 이유:
    // 1. 네비게이션 버튼을 명확한 아이콘+텍스트로, 터치 영역 확대
    // 2. 프로필 메뉴는 하단에서 위로 자연스럽게 뜨도록 개선
    // 3. 모바일에서 닉네임 숨김, 메뉴 접근성/시인성 강화
    // 4. 전체적으로 여백, 정렬, 컬러, 그림자 등 UI/UX 현대화
*/

export const Nav = () => {
    const location = useLocation();
    const mydataquery = useQuery({ queryKey: ['user'], queryFn: getUser });
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    // 모바일에서 프로필 메뉴 토글
    const handleProfileClick = (e: React.MouseEvent) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            setProfileMenuOpen((prev) => !prev);
        }
    };

    // 모바일에서 바깥 클릭 시 메뉴 닫기
    const handleNavBlur = (e: React.FocusEvent) => {
        // if (window.innerWidth <= 768) {
        //     setProfileMenuOpen(false);
        // }
    };

    // 아이콘 경로
    const icons = {
        home: {
            on: "/public/nav/on/home.png",
            off: "/public/nav/off/home.png"
        },
        search: {
            on: "/public/nav/on/search.png",
            off: "/public/nav/off/search.png"
        },
        download: {
            on: "/public/nav/on/down.png",
            off: "/public/nav/off/down.png"
        }
    };

    // 현재 경로
    const path = location.pathname;

    return (
        <nav className={styles.nav} tabIndex={-1} onBlur={handleNavBlur}>
            {/* 홈 */}
            <Link
                to="/home"
                className={`${styles.navBtn} ${path === "/home" ? "active" : ""}`}
                aria-label="홈"
            >
                <img
                    src={path === "/home" ? icons.home.on : icons.home.off}
                    alt=""
                    className={styles.navIcon}
                />
                홈
            </Link>
            {/* 검색 */}
            <Link
                to="/search"
                className={`${styles.navBtn} ${path === "/search" ? "active" : ""}`}
                aria-label="검색"
            >
                <img
                    src={path === "/search" ? icons.search.on : icons.search.off}
                    alt=""
                    className={styles.navIcon}
                />
                검색
            </Link>
            {/* 다운로드 */}
            <Link
                to="/download"
                className={`${styles.navBtn} ${path === "/download" ? "active" : ""}`}
                aria-label="다운로드"
            >
                <img
                    src={path === "/download" ? icons.download.on : icons.download.off}
                    alt=""
                    className={styles.navIcon}
                />
                다운로드
            </Link>
            {/* 프로필 */}
            <div
                className={styles.profileWrap}
                tabIndex={0}
                onClick={handleProfileClick}
                aria-haspopup="true"
                aria-expanded={profileMenuOpen}
                style={{ outline: "none" }}
            >
                <img
                    src={mydataquery.data?.image}
                    alt="프로필 이미지"
                    className={styles.profileAvatar}
                    width={36}
                    height={36}
                />
                <span className={styles.profileName}>
                    {mydataquery.data?.nickname ?? "프로필"}
                </span>
                <ul
                    className={`${styles.profileMenu} ${profileMenuOpen ? styles.profileMenuOpen : ""}`}
                    tabIndex={-1}
                >
                    <li>
                        <Link to="/home" className={styles.profileMenuItem}>프로필 추가</Link>
                    </li>
                    <li>                      
                        <Link to="/profile-modifylist" className={styles.profileMenuItem}>프로필 수정</Link>
                    </li>
                    <li>
                        <button
                            type="button"
                            className={styles.profileMenuItem}
                            // TODO: 로그아웃 핸들러 연결 필요
                        >
                            로그아웃
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};