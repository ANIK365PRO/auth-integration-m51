import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';

const Login = () => {
  // const userInfo = use(AuthProvider);
  const { signInUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleSignIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const passWord = e.target.password.value;

    console.log(email, passWord);

    // sign in user
    signInUser(email, passWord)
      .then(result => {
        console.log(result.user);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="card w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-16 bg-base-100">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>
          New to this site. Please{' '}
          <Link to="/register" className="text-blue-500 underline font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
