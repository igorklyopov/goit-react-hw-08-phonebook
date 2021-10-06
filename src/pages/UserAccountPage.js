import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

import { getUserName } from "redux/auth/authSelectors";
import gifImg from "../images/smile.gif";
// import gifImg from "../images/phonebook-logo.png";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "140px",
          height: "140px",
          marginLeft: "auto",
          marginRight: "auto",
          overflow: "hidden",
          borderRadius: "50%",
        }}
      >
        <img src={gifImg} alt="smile" style={{ borderRadius: "50%" }} />
      </div>
    </>
  );
}
