import { useDispatch, useSelector } from "react-redux";
import { alpha, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, InputBase } from "@mui/material";

import { theme } from "common/theme";
import { getFilter } from "redux/contacts/contactsSelectors";
import { changeFilter } from "redux/contacts/contactsActions";

const SearchContactByName = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchContactInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

export default function ContactsFilter({ showAddContactBtn }) {
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("md"));
  const contactsFilterValue = useSelector(getFilter);
  const searchContactInputIsFilled = contactsFilterValue !== "";
  const dispatch = useDispatch();

  const onSearchContactFocus = () => {
    if (!isMobileScreen) return;

    showAddContactBtn(false);
  };

  const onSearchContactBlur = (e) => {
    if (!isMobileScreen || e.target.value.trim() !== "") return;

    showAddContactBtn(true);
    if (e.target.value.trim() === "") e.target.value = "";
  };

  const onFilterChange = (e) => {
    dispatch(changeFilter(e.target.value.trim()));
  };
  const onClearBtnClick = () => {
    dispatch(changeFilter(""));
    showAddContactBtn(true);
  };

  return (
    <SearchContactByName>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchContactInput
        placeholder="Search contact"
        inputProps={{ "aria-label": "Search contact by name" }}
        value={contactsFilterValue}
        onChange={onFilterChange}
        onFocus={onSearchContactFocus}
        onBlur={onSearchContactBlur}
      />
      {searchContactInputIsFilled && (
        <IconButton aria-label="clear" onClick={onClearBtnClick}>
          <ClearIcon />
        </IconButton>
      )}
    </SearchContactByName>
  );
}
