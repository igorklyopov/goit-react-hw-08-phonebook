import { Typography } from "@mui/material";

export default function Notification({ message, textColor, textFontSize }) {
  return (
    <Typography
      sx={{ padding: "5px", color: textColor, fontSize: textFontSize }}
    >
      {message}
    </Typography>
  );
}
