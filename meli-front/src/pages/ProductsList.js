import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useProducts } from "../api/hooks/useProducts";
import { Skeleton } from "@mui/material";
import { occurrences } from "../utils/helpers";
import shipping from "../assets/img/shipping.png";
import "./pages.scss";
import { useEffect } from "react";
import { Error } from "../components/Errors/Error";

export const ProductsList = () => {
  const [search, setSearch, inputValue] = useOutletContext();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useProducts({ search });

  useEffect(() => {
    if (inputValue) {
      setSearch(inputValue);
    }
  }, []);

  const ocurrences =
    (data?.categories?.length && occurrences(data.categories)) ?? "";
  const breadcrumb =
    data?.items?.find((i) => i.category_id === ocurrences)?.title ?? "";

  const onToDetail = (item) => {
    navigate(`/items/${item.id}`);
    setSearch(":query");
  };

  const Title = ({ item }) => (
    <div className="d-flex align-items-center">
      <span className="fnt-16 mr-1">
        {`$ ${parseInt(item?.price?.amount).toLocaleString()}`}
      </span>
      <img src={shipping} alt="" width={15} height={15} />
    </div>
  );

  if (isError && error?.status) {
    return (
      <Box>
        <Breadcrumb item="" defaultKeyOne="home" />
        <Box className="card-content">
          <Error statusCode={error?.status} />
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <Breadcrumb item={breadcrumb} defaultKeyOne="home" />
      <Box className="card-content">
        <Stack spacing={2}>
          {!isLoading && data?.items?.length > 0
            ? data?.items?.map((item, idx) => (
                <div key={`${item.id}-${idx}`}>
                  <Card
                    onClick={() => onToDetail(item)}
                    className="cursor-pointer"
                  >
                    <CardHeader
                      className="card-header"
                      avatar={
                        <Avatar
                          variant="square"
                          alt="item"
                          src={item.picture?.replace("http", "https")}
                          sx={{ width: 90, height: 90 }}
                        />
                      }
                      action={
                        <span className="text-capitalize">
                          {item?.address?.toLowerCase()}
                        </span>
                      }
                      title={<Title item={item} />}
                      subheader={<span className="fnt-16">{item?.title}</span>}
                    />
                  </Card>
                </div>
              ))
            : Array.from(new Array(4), (val, index) => index + 1).map((i) => (
                <Skeleton variant="rounded" height={122} animation="wave" />
              ))}
        </Stack>
      </Box>
    </Box>
  );
};
