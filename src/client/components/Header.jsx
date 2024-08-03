import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <div>WestSide University</div>
        <div className='link-wrap'>
          <Link to='/' className='links'>Home</Link>
          <Link to='/about' className='links'>About</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
