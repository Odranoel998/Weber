import { HashRouter as Router, Routes } from "react-router-dom";
import { Header } from "./Components/Layout/Header";
// importaciones de paginas
// import { Dashboard } from "./pages/Dashboard";
// import { MyCalendar } from "./pages/Calendar";
// import { Employees } from "./pages/Employees";
// import { ReportsPage } from "./pages/Reports";

function App() {
  return (
    <>
      <Router>
        <div className="grid grid-cols-5 gap-2 h-screens ">
          <div className=" col-span-1 p-4">
            <Header />
          </div>
          <div className="col-span-2 ml-[2%] w-[180%]">
            <Routes>
              {/* <Route path="/" element={<Dashboard />} />
              <Route path="/Calendar" element={<MyCalendar />} />
              <Route path="/Employees" element={<Employees />} />
              <Route path="/Reports" element={<ReportsPage />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;