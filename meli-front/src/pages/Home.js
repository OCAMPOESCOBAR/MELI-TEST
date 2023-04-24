import Box from "@mui/material/Box";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import "./pages.scss";

export const Home = () => {
  const navigate = useNavigate();

  const [search] = useOutletContext();

  useEffect(() => {
    if (search !== ":query") {
      navigate("/items");
    }
  }, [search]);

  return (
    <Box className="home-content">
      <img
        style={{ width: "100%", height: "auto" }}
        src="https://media.licdn.com/dms/image/C4E22AQG_Xwbw5gz-PA/feedshare-shrink_800/0/1659393014123?e=1684368000&v=beta&t=DdI3t8cr_jjXsPZdfTs7DxbtkBcC_IjRajAYbp6wTCM"
        alt="welcome"
      />
    </Box>
  );
};
