import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
        <div className={classes.nav__container}>
            <h4>Validation Form</h4>
            <ul className={classes.nav__menu}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar;