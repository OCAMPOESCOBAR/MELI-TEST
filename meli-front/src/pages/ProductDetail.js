import { Button, Card, CardContent, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useDetails } from "../api/hooks/useDetail";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { Error } from "../components/Errors/Error";
import "./pages.scss";

export const ProductDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useDetails(id);
  const [search] = useOutletContext();
  const breadcrumb = data?.item?.title ?? "";

  useEffect(() => {
    if (search !== ":query") {
      navigate("/items");
    }
  }, [search]);

  if (isError && error?.status) {
    return (
      <Box>
        <Breadcrumb item="" defaultKeyOne="products" />
        <Box className="card-content">
          <Error statusCode={error?.status} />
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <Breadcrumb item={breadcrumb} defaultKeyOne="products" />
      <Box className="card-content">
        <Card>
          <CardContent>
            <Box className="d-flex">
              <Box className="max-w-850px mr-3">
                <Box className="text-align-center">
                  {!isLoading ? (
                    <img
                      src={data?.item?.picture?.replace("http", "https")}
                      alt=""
                    />
                  ) : (
                    <Skeleton
                      animation="wave"
                      variant="square"
                      width={500}
                      height={500}
                    />
                  )}
                </Box>
                <Box>
                  {!isLoading ? (
                    <span className="fnt-16 fw-bold">{t("description")}</span>
                  ) : (
                    <Skeleton
                      animation="wave"
                      height={20}
                      width="80%"
                      style={{ marginBottom: 6, marginTop: 6 }}
                    />
                  )}
                  {!isLoading ? (
                    <p className="fnt-14 line-height-21">
                      {data?.item?.description}
                    </p>
                  ) : (
                    <Skeleton
                      animation="wave"
                      height={100}
                      width="80%"
                      style={{ marginBottom: 6, marginTop: 6 }}
                    />
                  )}
                </Box>
              </Box>
              {!isLoading ? (
                <Box className="d-flex flex-column">
                  <small>
                    {data?.item?.condition === "new" ? t("new") : t("used")} -{" "}
                    {t("soldQuantity", { count: data?.item?.sold_quantity })}
                  </small>
                  <h2 className="fnt-18">{data?.item?.title}</h2>
                  <h2>{`$ ${parseInt(
                    data?.item?.price?.amount
                  ).toLocaleString()}`}</h2>
                  <Button variant="contained" fullWidth color="primary">
                    {t("buy")}
                  </Button>
                </Box>
              ) : (
                <Skeleton
                  animation="wave"
                  variant="square"
                  width={200}
                  height={200}
                />
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
