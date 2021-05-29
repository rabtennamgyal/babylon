import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='one'>
                <ul>
                    <Link to='/'><li><i id='logo' class="fas fa-chess-rook"></i></li></Link>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/Invest'><li>Investing</li></Link>
                    <Link to='/Bank'><li>Banking</li></Link>
                    <Link to='/Education'><li>Education</li></Link>
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
        </nav>
    )
}

export default Navbar