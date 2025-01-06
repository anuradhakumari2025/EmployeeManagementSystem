import { useState } from 'react';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForm = (event) => {
    event.preventDefault();
    const user = handleLogin(email, password);
    if (user && user.name) {
      localStorage.setItem("loggedInUser", user.name);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className='flex justify-center items-center w-full h-screen'>
        <div className='w-[25%] border-2 rounded-3xl border-emerald-500 px-6 py-8'>
          <h1 className='text-white font-semibold text-3xl text-center'>Log In</h1>
          <div className='flex mt-4 justify-center items-center w-full border-emerald-400'>
            <form onSubmit={(event) => { handleForm(event) }}>
              <input
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
                required className='my-4 text-white border-2 border-emerald-500 bg-transparent outline-none w-full rounded-xl py-2 px-4' type='email' placeholder='Enter your email' />
              <input
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
                required className='my-4 outline-none bg-transparent border-2 border-emerald-500 w-full rounded-xl py-2 text-white px-4' type='password' placeholder='Enter your password' />
              <button className='rounded-2xl px-4 py-2 w-[40%] mx-auto my-4 text-white bg-emerald-600 block hover:bg-emerald-700'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;