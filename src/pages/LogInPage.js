import styles from '../styles/LogIn.module.css';

function LogInPage() {
    return (
        <form id="form" class={styles.body}>
            <div class={styles.input}>
                <p class={styles.title}>로그인</p>
                <div>
                    <p class={styles.text}>이메일</p>
                    <input type="email" placeholder="이메일을 입력하세요" required />
                    <p class={styles.text}>비밀번호</p>
                    <input type="password" placeholder="비밀번호를 입력하세요" required />
                    <p class={styles.helper}></p>
                </div>
            </div>
            <div class={styles.button}>
                <button id="login-btn" type="submit" class={`${styles.loginBtn} ${styles.btnInactive}`}>로그인</button><br />
                <a class={styles.signIn} href="/signin" display="block">회원가입</a>
            </div>
        </form>
    );
}

export default LogInPage;