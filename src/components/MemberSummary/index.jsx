import { theme } from "antd";
import { Link } from 'react-router-dom';
import { MemberIcon } from "./Icons.jsx";
import styles from "./member.module.css"

export default function MemberSummary() {
  const { token: { colorTextBase }} = theme.useToken();
  return (
    <nav  className={styles.memberSummary}>
      <Link to='/:login'>
      <MemberIcon size={36} color="rgb(242, 33, 242)" />
        <p className={styles.MemberText}> 會員 </p>
      </Link>
    </nav>
  );
}