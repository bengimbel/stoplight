const Light = ({ isActive, color }) => (
  <div style={{padding: "0.5rem 0"}}>
    <div style={{width: "3rem", height: "3rem", borderRadius: "50%", background: isActive ? color : "#3c241f" }}></div>
  </div>
  )

export default Light