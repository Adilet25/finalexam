import ProfileLayout from "../layouts/ProfileLayout/ProfileLayout.jsx";
import ProfileRoutes from "../ProfileRoutes.jsx";
import { BrowserRouter } from "react-router-dom";

// import profileImg from "../assets/pngtree-user-profile-button-for-web-and-mobile-design-vector-png-image_41767880.jpg";

const MyProfilePage = () => {
  return (
    <div>
      <ProfileLayout>
        <ProfileRoutes />
      </ProfileLayout>
    </div>
  );
};

export default MyProfilePage;
