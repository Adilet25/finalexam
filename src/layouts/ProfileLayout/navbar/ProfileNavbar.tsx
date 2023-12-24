import { useNavigate } from "react-router-dom";
import "../../../styles/ProfileLayout.scss";
type Props = {};

const ProfileNavbar = (_props: Props) => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="profileBlock_Navigation">
        <button onClick={() => navigate("/MyProfile")}>Личный кабинет</button>

        <button onClick={() => navigate("/MyProfile/otclick")}>Отклики</button>
        <button onClick={() => navigate("/MyProfile/subs")}>Подписки</button>
      </div>
    </div>
  );
};

export default ProfileNavbar;
