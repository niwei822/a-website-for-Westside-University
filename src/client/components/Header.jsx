import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <div>WestSide University</div>
        <div className='link-wrap'>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'links')}>Home</NavLink>
          <NavLink to='/about' className={({ isActive }) => (isActive ? 'active-link' : 'links' )}>About</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
