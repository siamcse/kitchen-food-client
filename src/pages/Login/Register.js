import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/UseTitle';

const Register = () => {
    const { signUp, profileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useTitle('Register');

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        signUp(email, password)
            .then(result => {
                const user = result.user;
                profileUpdate(name, photoURL)
                    .then(() => {})
                    .catch(e => console.error(e))
                toast.success('Registration Successful.')
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
                        localStorage.setItem('kitchen-token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(e => console.error(e))

    }
    return (
        <div className='flex items-center justify-center my-12'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-200 text-gray-900">
                <h1 className="text-2xl font-bold text-center">Registration</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-gray-800">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="url" className="block text-gray-800">PhotoURL</label>
                        <input type="text" name="photoURL" id="photoURL" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md border-gray-700 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-800">Email</label>
                        <input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 focus:border-violet-400" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-800">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 focus:border-violet-400" required />
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-md text-white bg-cyan-600 hover:bg-cyan-700">Sign up</button>
                </form>

                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to='/login' rel="noopener noreferrer" href="#" className="underline text-gray-800"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;