import React from "react";
// import "./App.css";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/home").then((res) => {return res.json(); }).then((json) => setData(json))
  }, []);

  return (
    <div className="App">
      <h1>Ticket Viewer</h1>
      <ul>
        {data.map(ticket => (
          <li>{ticket.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;