import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../../context/BlogContextProvider";
import { toastInfoNotify } from "../../helpers/toastNotify";

const DetailsCard = ({ cardDetail }) => {
  const { content, title, email, imgUrl } = cardDetail;
  const { currentUser } = useContext(AuthContext);
  const { deleteBlog } = useContext(BlogContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete = (id) => {
    deleteBlog(id);
    toastInfoNotify("Blog deleted successfully");
    navigate("/");
  }
