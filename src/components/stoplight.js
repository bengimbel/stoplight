import { useState, useEffect, useCallback } from "react";
import Light from "./light";

const StopLight = ({ configuration }) => {
  const [lightList, setLightList] = useState([])
  const [activeLight, setActiveLight] = useState(null)

  const handleTimer = useCallback(() => {
  const obj = configuration.sequence?.find(item => item?.colors?.includes(activeLight))

  return obj?.duration ?? 0

  }, [activeLight, configuration.sequence])

  useEffect(() => {
    const interval = setInterval(() => {
      const names = Object.values(lightList).map(item => item?.name)
      const index = (names.indexOf(activeLight) + 1) % names.length

      return setActiveLight(names[index])
    }, handleTimer())
    return () => {
      clearInterval(interval);
    };
  }, [activeLight, handleTimer, lightList]);

  const handleListChange = useCallback(() => {
    const list = Object.entries(configuration.lights).sort(([,vala], [,valb]) => vala.position - valb.position).reduce((acc, [key, val]) => [...acc, {...val, name: key}], [])
    setLightList(list)
  }, [configuration.lights])

  useEffect(() => {
    handleListChange()
  }, [configuration, handleListChange])
  
  const isArray = arg => arg.length > 0 && Array.isArray(arg)
  return (
    <div style={{width: "5rem", height: "auto", background: "#000000" }}>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        {isArray(lightList) && Object.values(lightList).map(item => (
          <Light key={item.name} isActive={item.name === activeLight} color={item.color} />)
        )}
      </div>
    </div>
  )
}
export default StopLight

