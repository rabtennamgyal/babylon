import { Link } from "react-router-dom"

const NavMobile = () => {
    return (
        <div className='navMobile'>
            <div className='closeBtn' >
                <p>&times;</p>
            </div>
            <ul>
                <Link to='/Men'><li >Investing</li></Link>
                <Link to='/Women'><li>Banking</li></Link>
                <Link to='/About'><li >Education</li></Link>
            </ul>
        </div>
    )
}

export default NavMobile