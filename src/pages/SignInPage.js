import styles from '../styles/SignIn.module.css';

function SignInPage() {
    return (
        <>
            <form className={styles.body} onsubmit="return checkForm()">
                <div className={styles.input}>
                    <p className={styles.title}>회원가입</p>
                    <div>
                        <p className={styles.text}>프로필 사진</p>
                        <p id="profile-helper" className={styles.helper}>* 프로필 사진을 추가해주세요.</p>
                        <div className={styles.center}>
                            <div className={styles.profileDiv}>
                                <div className={styles.profileDefault}>+</div>
                                <img className={styles.profileImg} />
                            </div>
                            <input id="profile-img-btn" type="file" accept="image/*" className={styles.displayNone}/>
                        </div>
                        <p className={styles.text}>이메일*</p>
                        <input id="email-input" type="email" placeholder="이메일을 입력하세요" />
                        <p id="email-helper" className={styles.helper}>* 이메일을 입력해주세요.</p>
                        <p className={styles.text}>비밀번호*</p>
                        <input id="password-input" type="password" placeholder="비밀번호를 입력하세요" />
                        <p id="password-helper" className={styles.helper}>* 비밀번호를 입력해주세요.</p>
                        <p className={styles.text}>비밀번호 확인*</p>
                        <input id="passwordCheck-input" type="password" placeholder="비밀번호를 입력하세요" />
                        <p id="passwordCheck-helper" className={styles.helper}>* 비밀번호를 한번 더 입력해주세요.</p>
                        <p className={styles.text}>닉네임*</p>
                        <input id="nickname-input" type="text" placeholder="닉네임을 입력하세요" />
                        <p id="nickname-helper" className={styles.helper}>* 닉네임을 입력해주세요.</p>
                    </div>
                </div>
                <div className={styles.button}>
                    <button id="signin-btn" className={`${styles.signinBtn} ${styles.btnInactive}`}>회원가입</button><br />
                    <a className={styles.logIn} href="/login">로그인하러 가기</a>
                </div>
            </form>
        </>
    );
}

export default SignInPage;