import styles from '../styles/Board.module.css';

import profileImg from '../image/profile.jpeg';

function BoardPage() {
    return (
        <div className={styles.test1}>
            <section className={styles.body}>
                <div className={styles.title}>
                    <p>안녕하세요.<br />아무 말 대잔치 <b>게시판</b> 입니다.</p>
                </div>
                <div className={styles.test}>
                    <button id="write-btn" className={`${styles.writeBtn} ${styles.btnInactive}`}>게시글 작성</button>
                </div>
                <div id="post-list">
                    <article className={styles.postBox} onclick="window.location.href='/postDetail?postId='">
                        <div className={styles.postDetail}>
                            <div className={styles.postTitle}>제목</div>
                            <div className={styles.postInfo}>
                                <p>좋아요 0 댓글 0 조회수 0</p>
                                <p>2024-05-13 00:00:00</p>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.postWriter}>
                            <img src={profileImg} />
                            <p className={styles.writerName}>더미 작성자1</p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default BoardPage;