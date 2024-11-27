import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Layout/Header";
// importaciones de paginas
import { FormScripts } from "./Components/pages/FormScripts";
import { ListScripts } from "./Components/pages/ListScripts";
import { Search } from "./Components/pages/Search";

function App() {
  return (
    <>
      <Router>
        <div className="grid grid-cols-5 gap-2 h-screens">
          <div className=" col-span-1 p-4">
            <Header />
          </div>
          <div className="col-span-2 ml-[2%] w-[180%]">
            <Routes>
              <Route path="/" element={<FormScripts />} />
              <Route path="/listscripts" element={<ListScripts />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
