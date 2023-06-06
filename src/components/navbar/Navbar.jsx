import "./navbar.scss"
const Navbar = () => {
return(
<div className="navbar">
    <div className="navContainer">
        <span className="logo">blauting app</span>
        <div className="navItems">
<button className="navbarButtton">Register</button>
<button className="navbarButtton">Login</button>
        </div>
    </div>
</div>

)

}
export default Navbar