import React from "react";
// import "./App.css";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/home").then((res) => {return res.json(); }).then((json) => setData(json))
  }, []);

  return (
    <div className="App">
      <div className="container mt-4">
        <h1 className="text-center">Ticket Viewer</h1>
        <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Ticket ID</th>
            <th scope="col">Date Created</th>
            <th scope="col">Subject</th>
            <th scope="col">Status</th>
            <th scope="col">Tags</th>
          </tr>
        </thead>
        <tbody>
            {data.map(ticket => (
            <tr>
              <th scope="row">{ticket.id}</th>
              <td>{ticket.created_at}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.status}</td>
              <td>
                {ticket.tags.map(tag => (
                  <span className="mx-1 badge bg-dark">{tag}</span>
                ))}
              </td>
            </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;