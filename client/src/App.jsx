import { Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage/HomePage"
import VacancyPage from "./page/VacancyPage/VacancyPage"



function App() {
  

  return (
    <>
    <Routes>
      <Route path={'/'} element ={<HomePage/>}/>
      <Route path={'/vacancy/:id'} element ={<VacancyPage/>}/>
   </Routes>
   
    </>
  )
}

export default App
