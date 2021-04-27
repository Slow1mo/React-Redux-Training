import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Header.propTypes = {
  title: PropTypes.string, //.string.isRequired if needs to be required
};

export default Header;
