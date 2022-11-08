import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const {signUp} = useContext(AuthContext);

    const handleSubmit=event=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        signUp(email,password)
        .then(result=>{
            const user = result.user;
        })
        .catch(e=>console.error(e))

    }
    return (
        <div className='flex items-center justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-200 text-gray-900">
                <h1 className="text-2xl font-bold text-center">Registration</h1>
                <form onSubmit={handleSubmit}  className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-800">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-800">Email</label>
                        <input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-800">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 focus:border-violet-400" />
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