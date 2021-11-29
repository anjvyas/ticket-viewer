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
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setData(json.tickets);
        // there is another page of results to display
        if (json.meta && json.meta.has_more) {
          setHasMore(true);
          setNext(json.meta.after_cursor);
          setPrev(json.meta.before_cursor);
        } else {
          setHasMore(false);
        }
      });
  }, [currPag]);

  // Our call to the API was successful, hooray!
  if (data) {
    return (
      <div className="TicketList">
        <div className="container mt-4">
          <h1 className="text-center">Ticket Viewer</h1>

          <h5>View ticket details</h5>
          <form action={"/view/" + viewID} class="row g-3">
            <div class="col-auto">
              <input
                class="form-control"
                id="inputID"
                placeholder="Enter the ticket's ID here"
                value={viewID}
                onChange={(e) => setViewID(e.target.value)}
              />
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3">
                View details
              </button>
            </div>
          </form>

          <table className="table mt-4">
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
              {data.map((ticket) => (
                <tr>
                  <th scope="row">{ticket.id}</th>
                  <td>{new Date(ticket.created_at).toLocaleString()}</td>
                  <td>{ticket.subject}</td>
                  <td>{ticket.status}</td>
                  <td>
                    {ticket.tags.map((tag) => (
                      <span className="mx-1 badge bg-dark">{tag}</span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <nav aria-label="...">
            <ul className="pagination mt-5">
              <li
                onClick={() => setCurrPag("/prev/" + prev)}
                className="page-item"
              >
                <button class="bg-primary text-light page-link">
                  Previous
                </button>
              </li>
              {hasMore && (
                <li
                  onClick={() => setCurrPag("/next/" + next)}
                  className="page-item"
                >
                  <button class="bg-primary text-light page-link">Next</button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    );
  } else {
    // Something went wrong
    return (
      <div className="TicketList">
        <div className="container mt-4">
          <h1 className="text-center">Ticket Viewer</h1>

          <h3 className="mt-4">Oops! We're unable to access the API</h3>
          <h6>
            The API may be unavailable at this time or you may have specified
            credentials incorrectly
          </h6>
          <h6>
            {" "}
            Check to see if your credentials are specified correctly in the
            environment:
          </h6>
          <ol>
            <li>Your access token</li>
            <li>Your subdomain name</li>
            <li>Your username</li>
          </ol>
          <a href="https://github.com/anjvyas/ticket-viewer">
            You can look at the project's README for more guidance on how to set
            up your environment correctly
          </a>
        </div>
      </div>
    );
  }
}

export default TicketList;
