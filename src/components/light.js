const ACTIVE_COLORS = {
  red: "#e5320c",
  yellow: "#e5de0c",
  green: "#0ce51e"
}
const INACTIVE_COLORS = {
  red: "#631605",
  yellow: "#737105",
  green: "#175e02"
}

const Light = ({ isActive, name }) => (
  <div style={{padding: "0.5rem 0"}}>
    <div style={{width: "3rem", height: "3rem", borderRadius: "50%", background: isActive ? ACTIVE_COLORS[name] : INACTIVE_COLORS[name] }}></div>
  </div>
  )

export default Light