import { Typography } from "@mui/material";

export default function Notification({ message, ...styles }) {
  return <Typography sx={{ padding: "5px", ...styles }}>{message}</Typography>;
}
