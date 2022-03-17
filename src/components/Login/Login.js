import React from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { login, logout, showPassword } from "./../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import c from "./Login.module.css";
import { changeTitle } from "../../hoc/changeTitle";

const Login = (props) => {
  let isVisible = props.passwordVisible ? "text" : "password";
  changeTitle("Login");

  const visiblePassword = () => {
    props.showPassword();
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={""}>
      <Formik
        initialValues={{
          login: "",
          password: "",
          remember: false,
        }}
        onSubmit={(data) => {
          const { login, password } = data;
          props.login(login, password);
        }}
      >
        {() => (
          <Form className={c.form}>
            <div className={c.fieldContainer}>
              <h1 className={c.h1}>Login</h1>
              <Field className={c.field} name="login" placeholder="email" />
            </div>
            <div className={c.fieldContainer}>
              <Field
                className={c.field}
                type={isVisible}
                name="password"
                placeholder="password"
              />
              <img
                className={c.eye}
                src="/assets/img/eye.png"
                width="40px"
                alt=""
                onClick={visiblePassword}
              />
              <div>
                <button className={c.button} type="submit">
                  Submit
                </button>
              </div>
              <div className={c.prompt}>
                email: slehder5657@gmail.com, password: FidelioHasolMan
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  passwordVisible: state.auth.passwordVisible,
});
export default connect(mapStateToProps, { login, logout, showPassword })(Login);
