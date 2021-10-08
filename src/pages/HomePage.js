import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box component="section" sx={{ pt: "70px" }}>
      <Container>
        <h1 className="visuallyHidden">Phonebook home page</h1>
        <Typography
          component="p"
          variant="h6"
          align="center"
          sx={{ p: "20px" }}
        >
          Welcome to the Phonebook👋! Now you won't forget your contacts! Please
          register or log in to access your contact list!
        </Typography>
      </Container>
    </Box>
  );
}
