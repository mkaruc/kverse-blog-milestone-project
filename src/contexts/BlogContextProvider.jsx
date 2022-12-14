import { getDatabase, onValue, push, query, ref, remove, set, update, onChildChanged } from "firebase/database";
import React, { createContext, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [isLoading, setisLoading] = useState();
  const [cardList, setcardList] = useState();

  const addNewBlog = (props) => {
    const db = getDatabase();
    const userRef = ref(db, "users");
    const newUserRef = push(userRef);
    set(newUserRef, {
      title: props.title,
      imgUrl: props.imgUrl,
      content: props.content,
      email: props.email ,
      likes: props.likes
    });
  };
//add commment



//add like

const likeBlog = (props) => {
  try {
    const db = getDatabase();
    const postLike = {
      title: props.title,
      imgUrl:props.imgUrl,
      content:props.content,
      id:props.id,
      email:props.email,
      likes: props.likes
    }
    const updatelikes = {}
    updatelikes["/users/" + props.id + "/likes"] = postLike;
    console.log(postLike);
    return push(ref(db), updatelikes)
  } catch (err) {
    // alert(err.message);
  }
}
const updateBlog = (props) => {
  try {
    const db = getDatabase();
    const postData = {
      title: props.title,
      imgUrl:props.imgUrl,
      content:props.content,
      id:props.id,
      email:props.email,
      likes: props.likes
    }
    const updates = {}
    updates["/users/" + props.id ] = postData;
    console.log(postData);
    return update(ref(db), updates)
  } catch (err) {
    alert(err.message);
  }
}


  const getBlogs = () => {
   try{
      setisLoading(true);
      const db = getDatabase();
      const userRef = ref(db, "users");

      onValue(query(userRef), (snapshot) => {
        const cards = snapshot.val();
        const cardsArray = [];
        for (let id in cards) {
          cardsArray.push({ id, ...cards[id] });
        }
        setcardList(cardsArray);
        setisLoading(false);
      });
      // return { cardList };
    }catch(err){
        alert(err.message)
    }
  };

  
  const deleteBlog = (id) => {
    const db = getDatabase();
    remove(ref(db,"users/" + id));
    console.log("blog deleted");
  }

  return (
    <BlogContext.Provider value={{likeBlog,deleteBlog, updateBlog, addNewBlog, getBlogs, isLoading, cardList }}>
      {props.children}
    </BlogContext.Provider>
  );
};


export default BlogContextProvider;