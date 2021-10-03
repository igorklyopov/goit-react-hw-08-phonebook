import { styled } from "@mui/system";

const StyledNavList = styled("ul")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 0,
}));

export default function NavList({ children, ...props }) {
  return <StyledNavList {...props}>{children}</StyledNavList>;
}
