import { ColourModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import DashBoard from "./scenes/DashBoard";
import Team from "./scenes/Team";
import Invoice from "./scenes/Invoice";
import Contacts from "./scenes/Contacts";
import Form from "./scenes/Form";
import Calendar from "./scenes/Calendar";
import FAQ from "./scenes/FAQ";
import Bar from "./scenes/Bar";
import Pie from "./scenes/Pie";
import Line from "./scenes/Line";
import Geography from "./scenes/Geography";

function App() {
  const [theme, colourMode] = useMode();

  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />

            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoice />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={ <FAQ/> }/>
              <Route path="/bar" element={ <Bar/> }/>
              <Route path="/pie" element={ <Pie/> }/>
              <Route path="/line" element={ <Line/> }/>
              <Route path="/geography" element={ <Geography/> }/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;
