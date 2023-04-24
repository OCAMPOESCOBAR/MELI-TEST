import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import "./search-input.scss";
import { useTranslation } from "react-i18next";

export const SearchInput = ({ setSearch, setInputValue, inputValue }) => {
  const { t } = useTranslation();
  const onClickSearch = () => setSearch(inputValue);

  return (
    <Search>
      <InputBase
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={t("placeholder")}
        className="input-search"
      />
      <Box className="icon-wrapper" onClick={onClickSearch}>
        <SearchIcon htmlColor="gray" />
      </Box>
    </Search>
  );
};

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  marginLeft: 0,
  width: "100%",
}));
