import React from "react";
import ArrowCount from "@/components/ArrowCount";
import { Container, Content } from "@/styles/pages/Home";
import MoneyCount from "@/components/MoneyCount";
import { GetServerSideProps } from "next";

export default function Home({arrowCount,money}) {
  return (
    <Container>
      <h1>Grimoire</h1>
      <h2>Um lugar com ferramentas para o seu RPG</h2>
      <Content>
        <ArrowCount initialArrowCount={arrowCount}/>
        <MoneyCount initialMoney={money}/>
      </Content>
    </Container>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { arrowCount, money = false } = req.cookies;

  return {
    props: {
      arrowCount: Number(arrowCount),
      money: money,
    }
  }
};