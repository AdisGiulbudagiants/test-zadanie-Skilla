import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./components/screens/MainPage"
import NothingHere from "./components/screens/NothingHere"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="*" element={<NothingHere />} />
            <Route path="*" element={<NothingHere />} />
            <Route path="*" element={<NothingHere />} />
            <Route path="*" element={<NothingHere />} />
            <Route path="*" element={<NothingHere />} />
            <Route path="*" element={<NothingHere />} />
            <Route path="*" element={<NothingHere />} />
            <Route path="*" element={<NothingHere />} />
            <Route path="*" element={<NothingHere />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
