import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Basket from "./pages/Basket"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/:category"  element={<Home/>} />
        <Route path="/product-detail/:id"  element={<Detail/>} />
        <Route path="/basket"  element={<Basket/>} />
      </Routes>
    </Router>
  )
}

export default App
