import styles from '../styles/ProfileEdit.module.css';

function PasswordEditPage() {
    return (
        <div className={styles.test1}>
            <form className={styles.body} onsubmit="return checkForm()">
                <div className={styles.title}>
                    <p>비밀번호 수정</p>
                </div>
                <div className={styles.title2}>
                    <p><b>비밀번호</b></p>
                </div>
                <div className={styles.center}>
                    <input id="password-input" type="password" className={styles.inputBox} placeholder="비밀번호를 입력하세요" required />
                    <p id="password-helper" className={styles.helperText}></p>
                </div>
                <div className={styles.title2}>
                    <p><b>비밀번호 확인</b></p>
                </div>
                <div className={styles.center}>
                    <input id="passwordCheck-input" type="password" className={styles.inputBox} placeholder="비밀번호를 한번 더 입력하세요" required />
                    <p id="passwordCheck-helper" className={styles.helperText}></p>
                </div>
                <div className={styles.center}>
                    <button id="modify-btn" className={styles.modifyBtn}>수정하기</button>
                </div>
            </form>
        </div>
    );
}

export default PasswordEditPage;