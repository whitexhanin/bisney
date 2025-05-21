import { Link, useNavigate, useParams } from "react-router-dom";
import * as styles from "./style.css";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserList } from "@/utils/getUserList";
import { getUser } from "@/utils/getUser";
import { Back } from "@/components/Back";

const ProfileModify = () => {

    const params = useParams().id;

    const query = useQuery({ queryKey: ['userlist'] , queryFn: getUserList} );
    const mydataquery = useQuery({ queryKey: ['user'], queryFn:getUser})
    console.log(query.data);    
    console.log(params)
    
    //수정 할 정보 가져오기
    // const [userlist, setUserList] = useState([]);

    // const fetchList = async () => await fetch('/api/userlist')
    // .then((response)=> response.json())
    // .then(data => setUserList(data));

    

    // const mydata = query.data?.find(user => user.nickname == params);
    



    // useEffect((()=>{
    //     fetchList();
    // }),[])
    

    return (
        <>            
            <div className={styles.wrap}>
                <Back />
                <h2>프로필 수정</h2>
                <div className={styles.layoutwrap}>
                    <label className={styles.labelname} htmlFor="name">이름</label>
                    <input
                        className={styles.inputname}
                        type="text"
                        id="name"                        
                        value={mydataquery.data?.nickname ?? ""}
                        readOnly
                    />
                    <Link to="/setavatar" className={styles.useritem} style={{backgroundImage: `url(${mydataquery.data.image})`}}>아바타 수정</Link>                   
                </div>            
                <div className={styles.settingsSection}>
                    <h3 className={styles.settingsTitle}>재생 및 설정</h3>
                    <div className={styles.settingsItem}>                        
                        <label className={styles.settingsLabel} htmlFor="autoplaySwitch">      
                            자동재생            
                        </label>
                        <label className={styles.switchWrapper}>
                            <input type="checkbox" name="autoplay" id="autoplaySwitch" />
                            <span className={styles.slider}></span>
                        </label>
                    </div>                
                    <div className={styles.settingsItem}>
                        <label className={styles.settingsLabel} htmlFor="language">      
                            앱언어      
                        </label>                        
                    </div>                
                </div>
                <button className={styles.deleteButton}>프로필 삭제</button>
            </div>
        </>
    )
}

export default ProfileModify;