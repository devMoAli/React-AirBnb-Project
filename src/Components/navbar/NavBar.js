import navLogo from "../images/airbnb-logo.png";

const NavBar = () => {
  return (
    <nav className={"navImg"}>
      <figure>
        <img src={navLogo} alt={"airbnb clone"} />
      </figure>
    </nav>
  );
};
export default NavBar;
