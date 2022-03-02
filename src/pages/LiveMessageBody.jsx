import { format } from "date-fns";

const LiveMessageBody = ({ type, player, body, date, user }) => {
  console.log(type);

  return (
    <>
      <div className="live-message" key={date}>
        <div className="main-message">
          <p className="live-message-user">{user}</p>
          <div className="live-message-body">
            {type === "lookup" && <p>Looked up {player}</p>}
            {type.slice(0, 3) === "add" && type !== "add-player" && (
              <p>
                Added a {type.slice(4) === "notes" ? "note" : "tendency"} to
                {player}
              </p>
            )}
            {type.slice(0, 3) === "del" && (
              <p>
                deleted {type.slice(4) === "t" ? "tendency" : "note"} id: {body}
              </p>
            )}
            {type === "connection" && <p>{player} logged in</p>}
            {type === "disconnect" && <p>{player} logged out</p>}
            {type === "add-player" && <p> added {player}</p>}
            {type === "patch-type" && (
              <p>
                Updated {player} type to {body}
              </p>
            )}
          </div>
        </div>
        <div className="extra-info">
          <p>
            {body ? `Body : ${body} ||` : ""}{" "}
            {`Date: ${format(new Date(date), `dd/MM/yyyy HH:mm`)}`}
          </p>
        </div>
      </div>
    </>
  );
};

export default LiveMessageBody;
