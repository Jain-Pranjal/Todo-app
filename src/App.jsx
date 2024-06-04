import { BrowserRouter,Route,Routes } from "react-router-dom"
import Loginregister from "./pages/Loginregister"
import Notes from "./pages/Notes"
function App() {

  return (
  <>
     <div id="app" data-theme="dark">
            <div id="container">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/login" element={<Loginregister />} />
    </Routes>
    </BrowserRouter>
    </div>
  </div>
  </>
  )
}

export default App


// here we only showing the route path for the notes and login page