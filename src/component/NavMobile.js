import { Link } from "react-router-dom"

const NavMobile = ({closeNav}) => {
    return (
        <div className='navMobile'>
            <div className='closeBtn' >
                <Link to='/'><li><i onClick={closeNav} id='logo' className="fas fa-chess-rook"></i></li></Link>
                <p onClick={closeNav}>&times;</p>
            </div>

            <div className='list'>
                <ul>
                    <Link to='/Invest'><li onClick={closeNav}>Investing</li></Link>
                    <Link to='/Bank'><li onClick={closeNav}>Banking</li></Link>
                    <Link to='/Education'><li onClick={closeNav}>Education</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default NavMobile