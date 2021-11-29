import React from "react";
import { useParams } from "react-router-dom";

function TicketDetails() {
  const ticket_id = useParams().id;
  const [ticketData, setTicketData] = React.useState([]);

  function back() {
    window.location.pathname = "/";
  }

  React.useEffect(() => {
    fetch("/tickets/view/" + ticket_id)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setTicketData(json);
      });
  }, [ticket_id]);

  if (ticketData.id) {
    return (
      <div className="TicketDetails">
        <div className="container mt-4">
          <h1 className="text-center">Ticket {ticket_id} Details</h1>

          <table className="table mt-5">
            <thead>
              <tr>
                <th scope="col">Attribute</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Status</th>
                <td>{ticketData.status}</td>
              </tr>
              <tr>
                <th scope="row">Date created</th>
                <td>{new Date(ticketData.created_at).toLocaleString()}</td>
              </tr>
              <tr>
                <th scope="row">Subject</th>
                <td>{ticketData.subject}</td>
              </tr>
              <tr>
                <th scope="row">Description</th>
                <td>{ticketData.description}</td>
              </tr>
              <tr>
                <th scope="row">Requester ID</th>
                <td>{ticketData.requester_id}</td>
              </tr>
              <tr>
                <th scope="row">Assignee ID</th>
                <td>{ticketData.assignee_id}</td>
              </tr>
              <tr>
                <th scope="row">Tags</th>
                <td>
                  {ticketData.tags &&
                    ticketData.tags.map((tag) => (
                      <span className="mx-1 badge bg-dark">{tag}</span>
                    ))}
                </td>
              </tr>
            </tbody>
          </table>

          <button onClick={() => back()} className="btn btn-primary">
            Back
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="TicketDetails">
        <div className="container mt-4">
          <h1 className="text-center">
            Oops! No such ticket exists in your system or we are having trouble
            connecting to the API
          </h1>
          <h4 className="text-center">
            Go to the main page to try another ID or get more tips!
          </h4>
          <button onClick={() => back()} className="btn btn-primary">
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default TicketDetails;
