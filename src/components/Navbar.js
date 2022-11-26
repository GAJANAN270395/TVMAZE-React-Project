import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <nav className='navbar__nav'>
                <h3 className='nav__brand'>
                    <Link to='/home'>
                        <i className='fas fa-video'></i> TVmaze
                    </Link>
                </h3>
                <ul className='nav__links'>
                    <li className='links__link'>
                        <Link to='/home' >Home</Link>
                    </li>
                    <li className='links__link'>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
  )
}

export default Navbar