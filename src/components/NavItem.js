import { styled } from "@mui/system";

const StyledNavItem = styled("li")(() => ({
  "&:not(:last-child)": {
    marginRight: "10px",
  },
}));

export default function NavItem({ children }) {
  return <StyledNavItem>{children}</StyledNavItem>;
}
