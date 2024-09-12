import React from "react";
import Style from "../../css/LoginForm.module.css"
import logoGoogle from "../../assets/img/logoGoogle.svg"

export default function LoginForm() {
  return (
    <>
      <section className={Style.container}>
        <div className={Style.textSection}>
          <h2>Welcome back</h2>
          <p>Welcome back! Please enter your details</p>
        </div>

        {/* Form */}
        <section className={Style.FormSection}>
          <label for="email">Email</label>
          <input type="email" placeholder="Enter your email" id="email" />
          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <a href="/">Forgot password</a>
        </section>

        {/* Botoes de login e sign */}
        <div className={Style.btnSection}>
          <button className={Style.btnLogin}>Login</button>
          <button className={Style.btnLoginGoogle}><img src={logoGoogle} alt="Logo do google" width={20}/>Login with Google</button>
          <p>
            Don't have an account? <a href="/">Sign up for free</a>
          </p>
        </div>
      </section>
    </>
  );
}
