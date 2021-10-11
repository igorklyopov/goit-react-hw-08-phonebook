import { Box, Typography } from "@mui/material";
import noContactsGif from "../images/travolta.gif";

export default function NoContactsView({ message }) {
  return (
    <Box sx={{ ml: "auto", mr: "auto", textAlign: "center" }}>
      <Typography component="p" variant="h6" align="center">
        {message}
      </Typography>
      <img
        src={noContactsGif}
        alt="no contacts yet"
        style={{ maxWidth: "300px" }}
      />
    </Box>
  );
}
