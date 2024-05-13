import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import backButton from '../image/backBtn.svg';
import profileImg from '../image/profile.jpeg';

function Navbar() {
    const navigate = useNavigate();
    const [ showDropdown, setShowDropdown ] = useState(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    return (
        <div className={styles.navbar}>
            <div className={styles.navContent}>
                <div onClick={() => navigate(-1)} className={styles.backButton}>
                    <img src={backButton} className={styles.backBtnImage} />
                </div>
                <div className={styles.titleText}>
                    아무 말 대잔치
                </div>
                <div className={styles.profileBtn}>
                    <img onClick={toggleDropdown} src={profileImg} className={styles.profileImage}></img>
                    {showDropdown && (
                        <div className={styles.dropDown}>
                            <button onClick={() => navigate('/profileEdit')} className={styles.dropDownBox}>회원정보 수정</button>
                            <button onClick={() => navigate('/passwordEdit')} className={styles.dropDownBox}>비밀번호 수정</button>
                            {/* 로그아웃 처리 해줘야함 */}
                            <button onClick={() => navigate('/login')} className={styles.dropDownBox}>로그아웃</button>
                        </div>
                    )}
                </div>
            </div>
            <hr className={styles.hr}/>
        </div>
    );
}

export default Navbar;