import logo from '../../../src/assets/logo.svg'
const NavBar = () => {
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                </div>
                <img className='w-2/6' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#eb1933] text-xl text-white">Sign in</a>
            </div>
        </div>
    );
};

export default NavBar;