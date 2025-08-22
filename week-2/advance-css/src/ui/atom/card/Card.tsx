import { Card as CardContainer } from "./Card.styles";

function Card({ children }: { children: React.ReactNode }) {
  return <CardContainer>{children}</CardContainer>;
}

export default Card;
