import Button from "./Button";
import Form from "./Form";

const Header = () => {
  const onClick = (e) => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>Block Explorer</h1>
      <Form />
      <Button color="green" text="Search" onClick={onClick} />
    </header>
  );
};

export default Header;
