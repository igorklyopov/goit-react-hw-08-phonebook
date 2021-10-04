import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

import { getUserName } from "redux/auth/authSelectors";

export default function UserAccountPage() {
  const userName = useSelector(getUserName);

  return (
    <>
      <Avatar alt="" sx={{ bgcolor: "background.light", mt: "250px" }}>
        {userName?.at()}
      </Avatar>
      <h1 className="visuallyHidden">User account</h1>
      <h2>{userName}</h2>
      <p>Hello {userName}! This is your personal account!</p>
    </>
  );
}
