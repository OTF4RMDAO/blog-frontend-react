import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const SinglePost = () => {
    const { id } = useParams() // Get the id from the URL
    
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState([]);

    const fetchSingle = async () => {
        // Get all posts
        const getPosts = `https://blogserver-rj4u.onrender.com/api/post/${id}`;
        
        try {
            const response = await fetch(getPosts);
            const postData = await response.json();
            console.log("��� ~ postData ~ postData:", postData) // For debugging purposes
    
            if (response.ok) {
              setLoading(false);
            };
            
            setBlog(postData.data);


        } catch (error) {
            console.log("🚀 ~ handlePosts ~ error:", error)  
        }
      }
    
      useEffect(() => {
        fetchSingle();
      }, []);
    
  return (
    <>
       
        <div>
            <img src={blog.postImg} alt={blog.title} />

            <div>
                
            </div>
        </div>


    </>
  )
}

export default SinglePost