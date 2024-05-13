import styles from '../styles/PostDetail.module.css';

import profileImg from '../image/profile.jpeg';
import postPic from '../image/postPic.jpeg';

function PostDetailPage() {
    return (
        <div className={styles.test}>
            <div className={styles.body}>
                <div id="post">
                    <div className={styles.title}>
                        <p><b>제목1</b></p>
                    </div>
                    <div className={styles.postHeader}>
                        <div className={styles.writerInfo}>
                            <div className={styles.writerImg}>
                                <img src={profileImg} className={styles.writerImg}/>
                            </div>
                            <div className={styles.writerName}>
                                <p><b>더미 작성자 1</b></p>
                            </div>
                            <div className={styles.writeTime}>
                                <p>2024-04-12 00:00:00</p>
                            </div>
                        </div>
                        <div>
                            <button id="post-modify-btn" className={styles.btn}>수정</button>
                            <button id="post-delete-btn" className={styles.btn}>삭제</button>
                        </div>
                    </div>
                    <hr className={styles.inbodyHr} />
                    <div className={styles.postBody}>
                        <img className={styles.postImg} src={postPic} />
                        <div className={styles.postContent}>
                            <p>Biei, Sapporro
                                <br />
                                Leica, AF-C1
                            </p>
                        </div>
                        <div className={styles.postInfo}>
                            <div className={styles.info}>
                                <p><b>123<br />조회수</b></p>
                            </div>
                            <div className={styles.info}>
                                <p><b>123<br />댓글</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={styles.inbodyHr} />
                {/* <!-- 댓글 입력 창 --> */}
                <div className={styles.commentWrite}>
                    <div>
                        <input id="comment-input" type="text" placeholder="댓글을 남겨주세요!" />
                    </div>
                    <hr className={styles.inbodyHr} />
                    <div className={styles.btnArea}>
                        <button id="comment-btn" className={`${styles.commentBtn} ${styles.btnInactive}`}>댓글 등록</button>
                        <button id="comment-modify-btn" className={`${styles.signinBtn} ${styles.btnInactive} ${styles.displayNone}`}>댓글 수정</button>
                    </div>
                </div>
                {/* <!-- 댓글 목록 --> */}
                <div id="comment-list" className={styles.commentList}>
                </div>
            </div>
        </div>
    );
}

export default PostDetailPage;