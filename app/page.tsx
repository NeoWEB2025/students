'use client'
import Header from "@/app/components/Header";
import Dashboard from "@/app/components/menu/DashboardView";
import Students from "@/app/components/menu/StudentsView"
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
        <Students></Students>
      </>
    );
}
