import RecentItem from "../components/RecentItem";

const Recent = ({ notes, tendencies }) => {
  return (
    <div className="recents">
      <div className="recent-cont">
        {notes.map(({ player_name, n_created_at, note, n_created_by }) => {
          return (
            <RecentItem
              key={n_created_at}
              name={player_name}
              date={n_created_at}
              content={note}
              by={n_created_by}
            />
          );
        })}
      </div>

      <div className="recent-cont tendencies">
        {tendencies.map(
          ({ player_name, t_created_at, tendency, t_created_by }) => {
            return (
              <RecentItem
                key={t_created_at}
                name={player_name}
                date={t_created_at}
                content={tendency}
                by={t_created_by}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Recent;
