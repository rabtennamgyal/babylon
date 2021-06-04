import {Link} from 'react-router-dom'

const Navbar = ({openNav, openModal}) => {
    return (
        <nav className='navbar'>
            <div className='one'>
                <ul>
                    <Link to='/'><li><i id='logo' className="fas fa-chess-rook"></i></li></Link>
                    <Link to='/'><li className='link'>Home</li></Link>
                    <Link to='/Invest'><li className='link'>Investing</li></Link>
                    <Link to='/Bank'><li className='link'>Banking</li></Link>
                    <Link to='/Education'><li className='link'>Education</li></Link>
                    <h1>Babylon</h1>
                </ul>
            </div>

            <div className='two'>
                <ul>
                    <Link to='/LogIn'>
                        <button id='login'>
                            Log In
                        </button>
                    </Link>

                    <Link to='/SignUp'>
                        <button onClick={openModal} id='signup'>
                            Sign Up
                        </button>
                    </Link>
                </ul>
            </div>

            <div className='burger'>
                <i onClick={openNav} className="fas fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar