import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}

function ParentComponent(){
  //passing prop to a childcomponent
  return <ChildComponent text ="Hello" number={2}/>
}

function ChildComponent(props){
  return <div>
    {props.text}{props.number}
  </div>
}

export default BlogPost;
