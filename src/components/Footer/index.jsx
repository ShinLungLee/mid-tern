import styles from './footer.module.css'
import { Row, Col } from "antd";
import '../../App.css';

export default function Footer({ customerservice, copyright }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerAbove}>
        <div className="container">
          <Row gutter={[100,100]}>
            <Col
                 sm={{span:24}}
                lg={{span:16}}
            >
            <h5 className={styles.footerDescription}>
                {customerservice}<br></br>
                {copyright}
            </h5>
            </Col>

            <Col
              sm={{span:24}}
              lg={{span:8}}
            >
            <ul className={styles.footerList}>
              <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-facebook-f"></i></a></li>
              <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-instagram"></i></a></li>
              <li className={styles.footerItem}><a href="" className={styles.footerLink}><i className="fab fa-twitter"></i></a></li>
            </ul>
            </Col>
           
          </Row>
        </div>
      </div>
    </footer>
  );
}