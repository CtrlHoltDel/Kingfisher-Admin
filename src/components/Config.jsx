import { getBackup } from "../api";
import Button from "../components/Button";

const Config = ({ token }) => {
  const fetchBackup = async () => {
    const { key } = await getBackup(token);
    window.open(`${process.env.REACT_APP_TLD}/backup/${key}`);
  };

  return (
    <div className="config">
      <div className="config-setting">
        <p>Download Backup</p>
        <Button action={fetchBackup} type={"download"} />
      </div>
    </div>
  );
};

export default Config;
