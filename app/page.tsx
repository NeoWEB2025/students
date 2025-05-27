'use client'
import Image from "next/image";
import Header from "./components/pagination/Header";
import Dashboard from "./components/pagination/Dashboard";
import { useEffect, useState } from "react";
import "@/public/style/style.css"

export default function Home() { 
  const [counter, setCounter] = useState<number>(0);
  const handleClick = () => {
    setCounter(counter + 1)
  }
    return (
      <>
        <Header></Header>
        <Dashboard></Dashboard>
      </>
    );
}
