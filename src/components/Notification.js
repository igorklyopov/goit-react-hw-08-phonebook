import { Typography } from "@mui/material";

export default function Notification({ message }) {
  return <Typography sx={{ padding: "5px" }}>{message}</Typography>;
}
