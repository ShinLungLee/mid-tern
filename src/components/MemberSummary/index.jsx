import { theme } from "antd";
import { MemberIcon } from "./Icons.jsx";
import styles from "./member.module.css"

export default function MemberSummary() {
  const { token: { colorTextBase }} = theme.useToken();
  return (
    <nav  className={styles.memberSummary}>
      <MemberIcon size={36} color={colorTextBase} />
      <p className={styles.MemberText}> 會員 </p>
    </nav>
  );
}