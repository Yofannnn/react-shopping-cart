import AuthLayout from "../layout/auth-layout";
import '../../assets/login.css'

export default function Register() {
  document.title = "register";
  return (
    <>
      <AuthLayout title={"Register"} type={"register"}>
        <div className="flex-column-form-login">
          <label htmlFor="fname">First Name</label>
        </div>
        <div className="inputForm">
          <input
            type="text"
            className="input"
            placeholder="Enter your First Name"
            id="fname"
            name="fname"
            required
          />
        </div>
        <div className="flex-column-form-login">
          <label htmlFor="lname">Last Name</label>
        </div>
        <div className="inputForm">
          <input
            type="text"
            className="input"
            placeholder="Enter your Last Name"
            id="lname"
            name="lname"
          />
        </div>
        <div className="flex-column-form-login">
          <label htmlFor="birthday">Birthday </label>
        </div>
        <div className="inputForm">
          <input type="date" className="input" id="birthday" name="birthday" required />
        </div>
        <div className="flex-column-form-login">
          <label htmlFor="gender">Gender </label>
        </div>
        <select name="gender" id="gender" className="select-gender">
          <option value="undefined" disabled selected hidden>
            Choose Your Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <optgroup label="other">
            <option value="nice">v10 twin turbo</option>
            <option value="nice">inline 6 supercharger</option>
            <option value="nice">v12 naturally aspirated</option>
            <option value="nice">rotary 4 rotor</option>
            <option value="nice">helicopter</option>
          </optgroup>
        </select>
        <div className="flex-column-form-login">
          <label htmlFor="phone">Telp </label>
        </div>
        <div className="inputForm">
          <input
            type="tel"
            className="input"
            placeholder="Enter your Phone Number"
            id="phone"
            name="phone"
            required
          />
        </div>
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
            required
          />
        </div>
        <div className="flex-row-form-login">
          <div className="d-flex">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember" className="ms-1">
              Remember me{" "}
            </label>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
