import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api", {
  //     method: 'GET',
  //     withCredentials: true,
  //     credentials: 'include',
  //     headers: {
  //       'Authorization': "gc",
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <h1>Hi {process.env.REACT_APP_USERNAME}!</h1>
    </div>
  );
}

export default App;