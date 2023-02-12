import MyComponent from "./shared/DataCard";
import "./Header.css";

interface IHeader {
  text: string;
  bgColor: string;
  textColor: string;
}

function Header({ text, bgColor, textColor }: IHeader) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header className="header" style={headerStyles}>
      <div className="header-container">
        <img
          className="header-logo"
          src="../logo.svg"
          alt="Monsters"
          width="200"
          height="200"
        ></img>
        <h1 className="header-title">{text}</h1>
        <MyComponent />
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Monsters",
  bgColor: "white",
  textColor: "black",
};

export default Header;
