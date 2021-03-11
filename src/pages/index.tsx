import React from "react";
import ArrowCount from "@/components/ArrowCount";
import { Container, Content } from "@/styles/pages/Home";
import MoneyCount from "@/components/MoneyCount";
import { GetServerSideProps } from "next";

export default function Home({arrowData,moneyData}) {
  return (
    <Container>
      <h1>Grimoire</h1>
      <h2>Um lugar com ferramentas para o seu RPG</h2>
      <Content>
        <ArrowCount initialData={arrowData}/>
        <MoneyCount initialData={moneyData}/>
      </Content>
    </Container>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { arrowData = false, moneyData = false } = req.cookies;

  return {
    props: {
      arrowData: arrowData,
      moneyData: moneyData,
    }
  }
};