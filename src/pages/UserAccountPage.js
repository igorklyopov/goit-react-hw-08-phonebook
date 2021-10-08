import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Container } from "@mui/material";

import { getUserName } from "redux/auth/authSelectors";
import smileGif from "../images/smile.gif";

export default function UserAccountPage() {
  const userName = useSelector(getUserName);

  return (
    <Box component="section" sx={{ flexGrow: 1, paddingTop: "70px" }}>
      <Container>
        <Box
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
          <img src={smileGif} alt="smile" style={{ borderRadius: "50%" }} />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <h1 className="visuallyHidden">User account</h1>
          <h2>{userName}</h2>
          <p>Hello {userName}! This is your personal account!</p>
        </Box>
      </Container>
    </Box>
  );
}
