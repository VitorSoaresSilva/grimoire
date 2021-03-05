import React from "react";
import ArrowCount from "@/components/ArrowCount";
import { Container, Content } from "@/styles/pages/Home";
import MoneyCount from "@/components/MoneyCount";

export default function Home() {
  return (
    <Container>
      <h1>Grimoire</h1>
      <h2>Um lugar com ferramentas para o seu RPG</h2>
      <Content>
        <ArrowCount/>
        <MoneyCount/>
      </Content>
    </Container>
  )
}
