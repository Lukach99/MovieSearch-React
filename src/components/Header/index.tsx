import "./index.scss"

const Header = () => {
    return <header className="header">
        <h1>MovieSearch</h1>

        <div className="search-bar">
            <input type="search" name="" id="" placeholder="Search"/>
        </div>
        
        <nav className="navbar">
            <a href="#">Movies</a>
            <a href="#">TV Shows</a>
            <a href="#">User</a>
        </nav>
    </header>
}

export default Header