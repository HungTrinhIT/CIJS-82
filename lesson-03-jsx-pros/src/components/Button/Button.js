import "./Button.css";
const Button = (props) => {
  const { children } = props;
  return <button className="btn">+{children}</button>;
};

export default Button;
