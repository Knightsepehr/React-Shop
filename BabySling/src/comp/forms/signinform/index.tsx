import React, { useState } from 'react';
import YellowButton from '../../buttons/yellowbutton';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle sign in logic here
  };

  return (
    <form className="container flex justify-center flex-col items-center gap-3 min-w-max" onSubmit={handleSignIn}>
      <span className="flex gap-6 justify-end items-center  min-w-max ">
        <label htmlFor="email" className="text-left w-16 ">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="signin-email"
          className="border border-gray-300 py-2 w-64 px-2 text-xs"
          placeholder="your@email.com"
          value={email}
          onChange={handleEmailChange}
        />
      </span>
      <span className="flex gap-6 justify-end items-center min-w-max ">
        <label htmlFor="password" className="text-left w-16">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="signin-password"
          className="border border-gray-300 py-2 w-64 text-xs"
          value={password}
          onChange={handlePasswordChange}
        />
      </span>
      <YellowButton text='Sign In' onClick={handleSignIn}/>
      <a href="#FORGOTPASS" className="underline text-blue-500 text-sm">
        Forgot Your Password ?
      </a>
      <span className="flex items-center gap-3">
        <p className="text-xs font-bold">NO ACCOUNT ?</p>
        <a href="#REGISTER" className="underline text-blue-500 text-xs">
          Create new !
        </a>
      </span>
    </form>
  );
};

export default SignInForm;
