import Logo from "/Images/Frame 2 1.png";
import  styles from "./Navbar.module.css";
const Navbar = () => {
    console.log(styles);
  return (
    <>
      <nav className={`${styles.navigation} container`}>
        <div className="logo">
          <img src={Logo}></img>
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
