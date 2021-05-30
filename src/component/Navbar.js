import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='one'>
                <ul>
                    <Link to='/'><li><i id='logo' class="fas fa-chess-rook"></i></li></Link>
                    <Link to='/'><li class='link'>Home</li></Link>
                    <Link to='/Invest'><li class='link'>Investing</li></Link>
                    <Link to='/Bank'><li class='link'>Banking</li></Link>
                    <Link to='/Education'><li class='link'>Education</li></Link>
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
                        <button id='signup'>
                            Sign Up
                        </button>
                    </Link>
                </ul>
            </div>

            <div className='burger'>
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar