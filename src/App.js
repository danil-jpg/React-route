import { PageOne, PageTwo } from "./components/Page1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageOne />}></Route>
        <Route path="two" element={<PageTwo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
