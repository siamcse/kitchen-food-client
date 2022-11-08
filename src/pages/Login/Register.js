import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-base-200 text-gray-900">
                <h1 className="text-2xl font-bold text-center">Registration</h1>
                <form  className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block text-gray-800">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block text-gray-800">Email</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-700 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-800">Password</label>
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