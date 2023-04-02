const Header = (props) => {
  const { username, cartAmount } = props;
  return (
    <header
      style={{
        display: "flex",
        backgroundColor: "#ececec",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1>Shopping cart</h1>
      <div>
        <span>Hello {username}</span>
        {"Cart".toUpperCase()} {cartAmount}
      </div>
    </header>
  );
};
export default Header;
