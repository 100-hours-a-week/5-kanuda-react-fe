import styles from '../styles/LogIn.module.css';

function LogInPage() {
    return (
        <form id="form" className={styles.body}>
            <div className={styles.input}>
                <p className={styles.title}>로그인</p>
                <div>
                    <p className={styles.text}>이메일</p>
                    <input type="email" placeholder="이메일을 입력하세요" required />
                    <p className={styles.text}>비밀번호</p>
                    <input type="password" placeholder="비밀번호를 입력하세요" required />
                    <p className={styles.helper}></p>
                </div>
            </div>
            <div className={styles.button}>
                <button id="login-btn" type="submit" className={`${styles.loginBtn} ${styles.btnInactive}`}>로그인</button><br />
                <a className={styles.signIn} href="/signin" display="block">회원가입</a>
            </div>
        </form>
    );
}

export default LogInPage;