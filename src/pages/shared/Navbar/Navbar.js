import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('kitchen-token');
            })
            .catch(e => console.error(e))
    }

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {user?.email ?
            <>
                <li><Link to='/addservices'>Add Service</Link></li>
                <li><Link to='/myreviews'>My Reviews</Link></li>
                <li><button className='btn btn-ghost md:hidden block' onClick={handleLogOut}>Log Out</button></li>
            </>
            :
            <li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-base-100 lg:max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>

                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                        <img src="kitchen-food.png" alt="" />
                    </div>
                    Kitchen Food
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <div className='flex flex-col md:flex-row md:gap-1 items-center'>
                        {
                            user.photoURL ?
                                <img className='w-12 rounded-full' src={user.photoURL} alt="" title={user?.displayName} />
                                :
                                <FaUserAlt className='text-4xl border-2 p-1 rounded-full' title={user?.displayName}></FaUserAlt>
                        }
                        <p><button className='btn btn-ghost hidden md:block' onClick={handleLogOut}>Log Out</button></p>
                    </div>
                        :
                        <Link to='/register' className="btn btn-secondary ">Register</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;