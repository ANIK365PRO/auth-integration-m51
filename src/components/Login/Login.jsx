import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';

const Login = () => {
  // const userInfo = use(AuthProvider);
  const { signInUser, googleSignIn } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleSignIn = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const passWord = e.target.password.value;

    console.log(email, passWord);

    // sign in user
    signInUser(email, passWord)
      .then(result => {
        console.log(result.user);
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleLoginWithGoogle = () => {
    googleSignIn()
      .then(result => {
        console.log(result);
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

        {/* Google */}
        <button
          onClick={handleLoginWithGoogle}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
