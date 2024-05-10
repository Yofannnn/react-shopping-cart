/* eslint-disable react/no-unknown-property */
import AuthLayout from "../layout/auth-layout";
import '../../assets/login.css'

export default function Login() {
  document.title = "login";
  return (
    <>
      <AuthLayout title={"Login"} type={"login"}>
        <div className="flex-column-form-login">
          <label htmlFor="email">Email </label>
        </div>
        <div className="inputForm">
          <input
            type="email"
            className="input"
            placeholder="Enter your Email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="flex-column-form-login">
          <label htmlFor="password">Password </label>
        </div>
        <div className="inputForm">
          <input
            type="password"
            className="input"
            placeholder="Enter your Password"
            id="password"
            name="password"
          />
        </div>
        <div className="flex-row-form-login">
          <div className="d-flex">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember" className="ms-1">
              Remember me{" "}
            </label>
          </div>
          <a href="" className="text-decoration-none">
            Forgot password?
          </a>
        </div>
      </AuthLayout>
    </>
  );
}
