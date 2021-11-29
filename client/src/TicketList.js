import React from "react";
// import "./App.css";

function TicketList() {
  const [data, setData] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(false); 
  const [currPag, setCurrPag] = React.useState(""); 
  const [prev, setPrev] = React.useState("");
  const [next, setNext] = React.useState("");

  const [viewID, setViewID] = React.useState("");

  React.useEffect(() => {
    fetch("/tickets" + currPag)
      .then((res) => {return res.json(); })
      .then((json) => {
        setData(json.tickets);
        // there is another page of results to display
        if(json.meta.has_more) {
          setHasMore(true)
          setNext(json.meta.after_cursor)
          setPrev(json.meta.before_cursor)
        } else {
          setHasMore(false)
        }
      })
  }, [currPag]);

  return (
    <div className="App">
      <div className="container mt-4">
        <h1 className="text-center">Ticket Viewer</h1>

        <h5>View ticket details</h5>
        <form action={"/view/"+viewID} class="row g-3">
          <div class="col-auto">
            <input class="form-control" id="inputID" placeholder="Enter the ticket's ID here"
              value={viewID}
              onChange={(e) => setViewID(e.target.value)}
            />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">View details</button>
          </div>
        </form>

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

      
            <nav aria-label="...">
            <ul className="pagination">
            <li onClick={() => setCurrPag("/prev/"+prev)} className="page-item"><button class="bg-primary text-light page-link">Previous</button></li>
            {hasMore &&
              <li onClick={() => setCurrPag("/next/"+next)} className="page-item"><button class="bg-primary text-light page-link">Next</button></li>
            }
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default TicketList;