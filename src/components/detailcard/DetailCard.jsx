import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../../contexts/BlogContextProvider";
import { toastInfoNotify } from "../../helpers/toastNotify";
import DefaultImage from '../../assets/placeholder.png'
import Commentbox from "../comment/CommentBox";
import Icons from "../icons/Icons";

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
                <img src={imgUrl || DefaultImage} alt="" />
            </div>
            <div>
                <div>
                    <div>
                      <h2>{title}</h2>
                    </div>
                    <div>
                      <p>{content}</p>
                    </div>
                </div>
                {/* <div>
                  <Icons/>
                </div> */}
                <div>
                  {email}
                </div>
            </div>
            {currentUser.email === email ? (
              <div>
                <button onClick={() => navigate(`/updateblog/${id}`)}>Update</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </div>
              ) : null}
        </div>
    </div>
  )
}
export default DetailCard