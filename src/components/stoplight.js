import { useState, useEffect, useCallback } from "react";
import Light from "./light";

const StopLight = ({configuration}) => {
  const [lightList, setLightList] = useState([])
  const [activeLight, setActiveLight] = useState(null)
  
  const handleTimer = useCallback(() => {
  const obj = configuration.sequence.find(item => item.colors.includes(activeLight))
    return obj?.duration

  }, [activeLight, configuration.sequence])

  useEffect(() => {
    const interval = setInterval(() => {
      const names = Object.values(lightList).map(item => item?.color)
      const index = (names.indexOf(activeLight) + 1) % names.length;
      return setActiveLight(names[index])
    }, handleTimer())
    return () => {
      clearInterval(interval);
    };
  }, [activeLight, handleTimer, lightList]);

  const isActive = light => light === activeLight
  
  useEffect(() => {
    if (lightList.length === 0) {
      const list = Object.values(configuration.lights).sort((a, b) => a.position - b.position)
      setLightList(list)
    }

  }, [configuration.lights, lightList])

  return (
    <div style={{width: "5rem", height: "auto", background: "#000000" }}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        {lightList.length > 0 && Array.isArray(lightList) && Object.values(lightList).map(item => (
          <Light key={item.color} isActive={isActive(item.color)} name={item.color} />)
        )}
      </div>
    </div>
  )
}
export default StopLight

