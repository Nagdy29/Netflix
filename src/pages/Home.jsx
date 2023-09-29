import React from "react";
import { Main } from "../Main";
import { Row } from "../compontens/Row";
import request from "../Request";

export const Home = () => {
  return (
    <div>
      <Main />
      <Row tittle="Up coming " FeatchURl={request.requestUpcoming} />
      <Row tittle=" Popular " FeatchURl={request.requestPopular} />
      <Row tittle=" Trending " FeatchURl={request.requestTrending} />
      <Row tittle=" TopRated " FeatchURl={request.requestTopRated} />
      <Row tittle=" tHorror " FeatchURl={request.requestHorror} />
    </div>
  );
};
