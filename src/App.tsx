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
            <Route path="/1" element={<NothingHere />} />
            <Route path="/2" element={<NothingHere />} />
            <Route path="/3" element={<NothingHere />} />
            <Route path="/5" element={<NothingHere />} />
            <Route path="/6" element={<NothingHere />} />
            <Route path="/7" element={<NothingHere />} />
            <Route path="/8" element={<NothingHere />} />
            <Route path="/9" element={<NothingHere />} />
            <Route path="/10" element={<NothingHere />} />
            <Route path="*" element={<h1>Hello there</h1>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
