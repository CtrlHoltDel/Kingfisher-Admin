import { format } from "date-fns";

const Recent = ({ notes, tendencies }) => {
  const createDiv = (name, date, content, by) => {
    return (
      <div className="recent-item">
        <div className="recent-info">
          <p>{name}</p>
          <p className="recent-date">
            {format(new Date(date), `dd/MM/yyyy a`)}
          </p>
          <p className="recent-created-by">{by ? by : "Unknown"}</p>
        </div>
        <p className="recent-content">{content}</p>
      </div>
    );
  };

  return (
    <div className="recents">
      <div className="recent-cont">
        {notes.map(({ player_name, n_created_at, note, n_created_by }) => {
          return createDiv(player_name, n_created_at, note, n_created_by);
        })}
      </div>

      <div className="recent-cont tendencies">
        {tendencies.map(
          ({ player_name, t_created_at, tendency, t_created_by }) => {
            return createDiv(player_name, t_created_at, tendency, t_created_by);
          }
        )}
      </div>
    </div>
  );
};

export default Recent;
