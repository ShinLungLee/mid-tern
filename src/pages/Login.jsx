import Header from "../components/Header"
import Footer from "../components/Footer"
import Signin from "../components/SignIn"


function Login() {
  return (
    <div className="main-layout">
      <Header 
        logo="Concis" 
        />       
      <div className="layout-content container"><Signin/></div>
      <Footer 
        customerservice="客服專線 02-0000-1234   服務時間 1000-1900 copyright ------------" />
    </div>
  );
}

export default Login;