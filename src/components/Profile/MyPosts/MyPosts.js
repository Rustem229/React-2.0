import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import AudioClick from "./../../../AudioClick/AudioClick";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../Redux/profile-reducer";

const MyPosts = (props) => {
  // debugger;

  let changedPosts = [...props.posts].reverse();

  let postElement = changedPosts.map((p) => (
    <div className={c.posti}>
      <Post message={p.message} avatar={p.avatar} likesCount={p.likesCount} />
    </div>
  ));

  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={c.postsBlock}>
      <span className={c.heading}> My posts </span>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          name=""
          id=""
          cols="30"
          rows="3"
          value={props.newPostText}
        />
        <br />
        <button onClick={onAddPost}>Add post</button>
      </div>
      {postElement}
    </div>
  );
};

export default MyPosts;
