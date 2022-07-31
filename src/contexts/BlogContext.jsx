import { getDatabase, onValue, push, query, ref, remove, set, update } from "firebase/database";
import { createContext, useState } from "react";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/toastNotify";

export const BlogContext=createContext();
const BlogContextProvider=(props)=>{
    const [isLoading,setIsLoading]=useState();
    const [blogList,setBlogList]=useState();
    const addNewBlog=(props)=>{
        const db=getDatabase();
        const user = ref(db,"contact");
        const newUser=push(user);
        set(newUser,{
            title: props.title,
            imgUrl: props.imgUrl,
            content: props.content,
            email: props.email,
        });
    };
const getBlogs=()=>{
    try {
        setIsLoading(true);
        const db=getDatabase();
        const user=ref(db,"contact");

        onValue(query(user),(snapshot)=>{
            const cards=snapshot.val();
            const cardsArray= [];
            for(let id in cards){
                cardsArray.push({id,...cards[id]});
            }
        
        setBlogList(cardsArray);
        setIsLoading(false)
        });
    } catch (error) {
        toastErrorNotify(error.message);
    }
};
 const updateBlog=(props)=>{
    try {
        const db=getDatabase();
        const postData={
            title: props.title,
            imgUrl: props.imgUrl,
            content: props.content,
            id: props.id,
            email: props.email, 
        }
        const updates = {}
        updates["/contact/" + props.id ] = postData;
        console.log(postData);
        return update(ref(db), updates)
    } 
    catch (err) {
        toastErrorNotify(err.message);
  }}

  const deleteBlog = (id) => {
    const db = getDatabase();
    remove(ref(db,"contact/" + id));
  }
  return (
    <BlogContext.Provider value={{deleteBlog, updateBlog, addNewBlog, getBlogs, isLoading, blogList }}>
      {props.children}
    </BlogContext.Provider>
  );
 }
 export default BlogContextProvider;
