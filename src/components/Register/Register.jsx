// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
// import { auth } from '../../firebase.init';

const Register = () => {
  // const userInfo = use(AuthContext);
  const { createUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    //***{ create user}***//

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then(result => {
    //     console.log(result);
    //     console.log(result.user);
    //   })
    //   .catch(error => {
    //     console.error(error.message);
    //   });

    //***{reusable create user}***//
    createUser(email, password)
      .then(result => {
        console.log(result.user);
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="card w-full max-w-sm mx-auto shrink-0 shadow-2xl mt-16 bg-base-100">
      <h1 className="text-5xl font-bold text-center">Register now!</h1>
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
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

          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <p>
          Already have an account. Please{' '}
          <Link to="/login" className="text-blue-500 underline font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
