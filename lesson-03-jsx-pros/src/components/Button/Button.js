import "./Button.css";
const Button = (props) => {
  const { children } = props;
  return <button className="btn">{props.children}</button>;
};

export default Button;
