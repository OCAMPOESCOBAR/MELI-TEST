import { Card, CardContent, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import notFound from "../../assets/img/not-found.png";
import "./error.scss";

export const Error = ({ statusCode }) => {
  const { t } = useTranslation();
  if (statusCode === 404) {
    return (
      <Card className="error-content">
        <CardContent className="d-flex">
          <Box>
            <img src={notFound} alt="" width={100} height={80} />
          </Box>
          <Box>
            <h3>{t("notFound.title")}</h3>
            <ul>
              <li>{t("notFound.msgOne")}</li>
              <li>{t("notFound.msgTwo")}</li>
            </ul>
          </Box>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className="error-content">
        <CardContent className="d-flex">
          <Box>
            <img src={notFound} alt="" width={100} height={80} />
          </Box>
          <Box>
            <h3>{t("error")}</h3>
          </Box>
        </CardContent>
      </Card>
    );
  }
};
