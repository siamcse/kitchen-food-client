import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/UseTitle';

const Login = () => {
    const { signIn, popupSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Login')

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                fetch('https://kitchen-food-server-siamcse.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success('Login Successfully.')
                        localStorage.setItem('kitchen-token', data.token);
                        navigate(from, { replace: true });
                    })

            })
            .catch(e => console.error(e))
    }
    const googleSignIn = () => {
        popupSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                fetch('https://kitchen-food-server-siamcse.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast.success('Login Successfully.')
                        localStorage.setItem('kitchen-token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(e => console.error(e))
    }
    return (
        <div className='flex items-center justify-center my-12'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-200 text-gray-900">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-800">Username or Email</label>
                        <input type="text" name="email" id="email" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-800">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 focus:border-violet-400" />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <Link to='' rel="noopener noreferrer">Forgot Password?</Link>
                        </div>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-md text-white btn-secondary">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">

                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={googleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                    <Link to='/register' rel="noopener noreferrer" href="#" className="underline dark:text-gray-700">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;