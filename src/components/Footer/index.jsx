import styles from './footer.module.css'
import { Row, Col } from "antd";
import '../../App.css';

export default function Footer({ customerservice }) {
  return (
    <footer>
      <div className={styles.footerAbove}>
        <div className={styles.container}>
          <Row gutter={[50,50]}>
            <Col
                sm={{span:24}}
                lg={{span:16}}
            >
            <h5 className={styles.footerDescription}>
                {customerservice}
                
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