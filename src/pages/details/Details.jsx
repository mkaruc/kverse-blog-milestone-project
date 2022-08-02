import React, { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContextProvider";
import { useParams } from "react-router-dom";
import DetailCard from "../../components/detailcard/DetailCard";
import Navbar from "../../components/navbar/Navbar";

const Details = () => {
  const { id } = useParams();
  const { cardList } = useContext(BlogContext);

  const [cardDetail] = cardList.filter((card) => card.id === id)

  return (
    <div>
      <Navbar/>
      <DetailCard cardDetail={cardDetail} />
    </div>
  );
};

export default Details;