import { getBackup } from "../api";
import Button from "../components/Button";

const Config = ({ token }) => {
  const fetchBackup = async () => {
    const response = await getBackup(token);
    console.log(response);
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
