import SideBar from "./SideBar"

const MainContainer = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      { children }
    </div>
    
  )
}

export default MainContainer
