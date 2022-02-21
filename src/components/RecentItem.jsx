import { format } from "date-fns";

const RecentItem = ({ name, date, content, by }) => {
  return (
    <div className="recent-item">
      <div className="recent-info">
        <p>{name}</p>
        <p className="recent-date">
          {format(new Date(date), `dd/MM/yyyy hh:mm`)}
        </p>
        <p className="recent-created-by">{by ? by : "Unknown"}</p>
      </div>
      <p className="recent-content">{content}</p>
    </div>
  );
};

export default RecentItem;
