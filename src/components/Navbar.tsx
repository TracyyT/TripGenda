function Navbar() {
  return (
    <header className="navbar">
      <a className="logo" href="/">
        <span className="logo-mark">✦</span>
        TripGenda
      </a>

      <nav className="nav-links">
        <a href="#explore">Explore</a>
        <a href="#trips">My Trips</a>
        <a href="#saved">Saved</a>
      </nav>

      <button className="profile-button" type="button">
        T
      </button>
    </header>
  )
}

export default Navbar