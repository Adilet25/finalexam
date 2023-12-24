import ProfileNavbar from "../ProfileLayout/navbar/ProfileNavbar";

const ProfileLayout = ({ children }) => {
  return (
    <div>
      <ProfileNavbar />
      {children}
    </div>
  );
};

export default ProfileLayout;
