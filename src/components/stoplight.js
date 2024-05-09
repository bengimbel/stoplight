import { useState, useEffect, useCallback } from "react";
import Light from "./light";

const GREEN = "green"
const RED = "red"
const YELLOW = "yellow"
const colorList = [GREEN, YELLOW, RED];

const StopLight = () => {
  const [activeLight, setActiveLight] = useState(colorList[0])

  const handleTimer = useCallback(() => {
    switch(activeLight) {
      case RED:
        return 2000
      case YELLOW:
        return 1000
      case GREEN:
        return 5000
      default:
        return 5000
    } 
  }, [activeLight])

  useEffect(() => {
    const interval = setInterval(() => {
      const index = (colorList.indexOf(activeLight) + 1) % colorList.length;
      return setActiveLight(colorList[index])
    }, handleTimer())
    return () => {
      clearInterval(interval);
    };
  }, [activeLight, handleTimer]);

  const isActive = light => light === activeLight

  return (
    <div style={{width: "5rem", height: "auto", background: "#000000" }}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Light isActive={isActive(RED)} name={RED}/>
        <Light isActive={isActive(YELLOW)} name={YELLOW}/>
        <Light isActive={isActive(GREEN)} name={GREEN}/>
      </div>
    </div>
  )
}
export default StopLight

