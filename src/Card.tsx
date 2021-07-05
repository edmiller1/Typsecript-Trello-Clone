import React from "react";
import { CardContainer } from "./styles";

interface CardProps {
  text: string;
  id: string;
}

export const Card: React.FC<CardProps> = ({ text }) => {
  return <CardContainer>{text}</CardContainer>;
};
