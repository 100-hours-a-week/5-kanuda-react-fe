import styles from '../styles/ProfileEdit.module.css';

import profileImg from '../image/profile.jpeg';

function ProfileEditPage() {
    return (
        <div className={styles.test1}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <p>회원정보수정</p>
                </div>
                <div className={styles.title2}>
                    <p><b>프로필사진*</b></p>
                </div>
                <div className={styles.center}>
                    <div className={styles.profileImg}>
                        <img src={profileImg} className={styles.img}/>
                        <div>
                            <button className={styles.changeBtn}>변경</button>
                        </div>
                    </div>
                </div>
                <div className={styles.title2}>
                    <p><b>이메일</b></p>
                </div>
                <div>
                    <p>dohun.hyun@gmail.com</p>
                </div>
                <div className={styles.title2}>
                    <p><b>닉네임</b></p>
                </div>
                <div className={styles.center}>
                    <input id="nickname-input" type="text" className={styles.inputBox} value="카누다" />
                    <p id="nickname-helper" className={styles.helperText}></p>
                </div>
                <div className={styles.center}>
                    <button id="modify-btn" className={styles.modifyBtn}>수정하기</button>
                </div>
                <div className={`${styles.center} ${styles.withdrawal}`}>
                    <button id="withdrawal-btn" className={styles.withdrawalBtn}>회원 탈퇴</button>
                </div>
                <div className={styles.center}>
                    <button id="toast-msg" className={styles.modifyDoneBtn}>수정완료</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileEditPage;