
import styles from './signup.module.css'
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
        <div>

            <div className={styles.logcontainer}>
                <header className={styles.logheader}>
                    <h1 className={styles.logheaderTitle}>註冊介面</h1><br />
                </header>
                <div className={styles.containerForm}>
                    <form className={styles.form} action="#" id="form2">
                        <h2 className={styles.formTitle}>註冊</h2>
                        <input className={styles.input} type="email" placeholder="Email" /><br />
                        <input className={styles.input} type="password" placeholder="密碼" /><br />
                        <input className={styles.input} type="password2" placeholder="確認密碼" /><br />
                        <button className={styles.btn}>註 冊</button>
                    </form>
                </div>
                <Link to='/:login'><button className={styles.signupbtn}>我要登錄</button></Link>
            </div>

        </div>
    );
}