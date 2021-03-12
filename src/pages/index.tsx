import React from "react";
import ArrowCount from "@/components/ArrowCount";
import { Container, Content } from "@/styles/pages/Home";
import MoneyCount from "@/components/MoneyCount";
import SpellsSlot from "@/components/SpellsSlot";
import { GetServerSideProps } from "next";
import Initiative from "@/components/Initiative";

export default function Home({arrowData,moneyData,spellsData,initiativeData}) {
  return (
    <Container>
      <h1>Grimoire</h1>
      <h2>Um lugar com ferramentas para o seu RPG</h2>
      <Content>
        <ArrowCount initialData={arrowData}/>
        <MoneyCount initialData={moneyData}/>
        <SpellsSlot initialData={spellsData}/>
        <Initiative initialData={initiativeData}/>
      </Content>
    </Container>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { arrowData = false, moneyData = false, spellsData = false,initiativeData = false } = req.cookies;

  return {
    props: {
      arrowData: arrowData,
      moneyData: moneyData,
      spellsData: spellsData,
      initiativeData: initiativeData,
    }
  }
};