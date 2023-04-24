import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./breadcrumb.scss";
import { useTranslation } from "react-i18next";

export const Breadcrumb = ({ defaultKeyOne, item }) => {
  const { t } = useTranslation();

  const breadcrumbs = [
    <Typography key="1" color="inherit">
      {t(defaultKeyOne)}
    </Typography>,
    <Typography key="2" color="text.primary">
      {item}
    </Typography>,
  ];

  return (
    <Box className="breadcrumb-content">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};
