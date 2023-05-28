
import styles from './signin.module.css'
import { Link } from 'react-router-dom';

export default function Signin() {
    return (
        <div>

            <div className={styles.logcontainer}>
                <header className={styles.logheader}>
                    <h1 className={styles.logheaderTitle}>登入介面</h1><br />
                </header>
                <div className={styles.containerForm}>
                    <form className={styles.form} action="#" id="form2">
                        <h2 className={styles.formTitle}>登 錄</h2>
                        <input className={styles.input} type="email" placeholder="Email" /><br />
                        <input className={styles.input} type="password" placeholder="密碼" /><br />
                        <button className={styles.btn}>登 錄</button>
                    </form>
                </div>
                <Link to='/signup'><button className={styles.signupbtn}>我要註冊</button></Link>
            </div>

        </div>
    );
}