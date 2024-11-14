import BlogCard from "./BlogCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //Handle fetching of posts from the database
  const handlePosts = async () => {
    // Get all posts
    const getPosts = "https://blogserver-rj4u.onrender.com/api/posts";

    try {
      const response = await fetch(getPosts);
      // console.log("res", response);
      const postData = await response.json();
      // console.log("postData", postData);  // For debugging purposes

      if (response.ok) {
        setLoading(false);
      }

      setBlogs(postData.data);
    } catch (error) {
      console.log("🚀 ~ handlePosts ~ error:", error);
    }
  };

  useEffect(() => {
    handlePosts();
  }, []);

  //Handle getting single post
  const getSinglePost = (postID) => {
    //Navigate to single post
    navigate(`/blog/${postID}`);
  };

  return (
    <div className=" mt-3">
      <h1 className="justify-content-center d-flex">Blogs</h1>

      {loading && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: translucent background
            zIndex: 1050, // Ensure it overlays other content
          }}
        >
          <Spinner animation="grow" />
        </div>
      )}

      <div className="mt-3">
        {/* <BlogCard /> */}
        <div className="d-flex flex-wrap justify-content-center">
          {blogs.map((post) => (
            <BlogCard
              key={post._id}
              title={post.title}
              body={post.body}
              imgUrl={post.postImg}
              link={post.link}
              func={() => getSinglePost(post._id)}
            />
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Blog;
