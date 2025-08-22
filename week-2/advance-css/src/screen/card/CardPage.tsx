import { createGlobalStyle } from "styled-components";
import Card from "../../ui/atom/card/Card";
import { Button } from "../../ui/atom/button/Button.styles";
import { Input } from "../../ui/atom/input/Input.styles";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #000;
  }
`;

function CardPage() {
  return (
    <>
      <GlobalStyle />
      <Card>
        <h1>Card</h1>
        <p>Card Description</p>
        <Input />
        <Button>Click me</Button>
      </Card>
    </>
  );
}

export default CardPage;
