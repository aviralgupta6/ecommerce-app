import "./sign-in-or-up.style.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInOrUpPage = (props) => {
  return (
    <div className="signinorup">
      <SignIn history={props.history} />
      <SignUp />
    </div>
  );
};

export default SignInOrUpPage;
