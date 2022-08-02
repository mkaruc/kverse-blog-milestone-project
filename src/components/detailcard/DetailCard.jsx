import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../../contexts/BlogContextProvider";
import { toastInfoNotify } from "../../helpers/toastNotify";

const DetailCard = ({ cardDetail }) => {
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

  return (
    <div>
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default DetailCard