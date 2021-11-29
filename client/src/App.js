import React from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import TicketList from "./TicketList";
import TicketDetails from "./TicketDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TicketList />} />
        <Route path="/view/:id" element={<TicketDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;