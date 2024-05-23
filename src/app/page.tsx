"use client"
import { getAdvice } from "@/api/AdviceApi";
import { useEffect, useState } from "react";
import { AdvicesTypes } from "@/types/AdvicesTypes";
import AdviceCard from "@/components/AdviceCard/AdviceCard";


const Home: React.FC = () => {

  const [advice, setAdvice] = useState<AdvicesTypes>({
    id: 0,
    advice: "",
  })

  const setData = async () => {
    setAdvice(await getAdvice());
  };


  useEffect(() => {
    setData();
  }, [])

  return (
    <main className="flex h-screen justify-center align-middle items-center bg-[#202632] .manrope" >
      <AdviceCard
        idNumber={advice.id}
        advice={advice.advice}
        onClick={setData}
      />
    </main>
  );
}

export default Home;
