import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

import { getUserName } from "redux/auth/authSelectors";
import Footer from "components/Footer";
import Header from "components/Header";

export default function UserAccountPage() {
  const userName = useSelector(getUserName);

  return (
    <>
      <Header />
      <main>
        <Avatar alt="" sx={{ bgcolor: "background.light", mt: "250px" }}>
          {userName?.at()}
        </Avatar>
        <h2>{userName}</h2>
        <p>Hello {userName}! This is your personal account!</p>
      </main>
      <Footer />
    </>
  );
}
