import logo from "../assets/static/Svg/logo.svg";

export default function navbar() {
  return (
    <header className="nav">
      <div>
        <a href="/">
          <img src={logo} alt="website logo" />
        </a>
      </div>

      <nav className="nav__menu">
        <div className="nav__left">
          <ul>
            <li>
              <a href="/">Buy Crypto</a>{" "}
            </li>
            <li>
              <a href="/">Buy Crypto</a>{" "}
            </li>
            <li>
              <a href="/">Buy Crypto</a>{" "}
            </li>
            <li>
              <a href="/">Buy Crypto</a>{" "}
            </li>
            <li>
              <a href="/">Buy Crypto</a>{" "}
            </li>
            <li>
              <a href="/">Buy Crypto</a>{" "}
            </li>
            <li>
              <a href="/">Buy Crypto</a>{" "}
            </li>
            <li>
              <a href="/">Buy Crypto</a>{" "}
            </li>
          </ul>
        </div>
        <div className="nav__right"></div>
      </nav>
    </header>
  );
}
