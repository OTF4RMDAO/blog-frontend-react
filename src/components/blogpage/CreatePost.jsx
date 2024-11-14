import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import Spinner from 'react-bootstrap/Spinner';


const CreatePost = () => {
  //Creating states for all the inputs elements
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [postImageUrl, setPostImg] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  //Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true)
    
    const formData = {
      title,
      content,
      category,
      tags,
      postImageUrl,
    }

    console.log(formData);

    fetch(' https://blogserver-rj4u.onrender.com/api/create-post', {
      method: 'POST',   // Assuming you're creating a new post
       headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)  // Convert the form data into JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);  // Handle success - this data is the response from the server
        alert('Post created successfully!');
        setSubmitting(false)
        setShowSuccess(true);

        // Hide success message after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
    })
    .catch(error => {
        console.error('Error:', error);  // Handle errors
        alert('There was an error creating the post.');
        setSubmitting(false)
    });

    //Clear form data
    setTitle("");
    setContent("");
    setCategory("");
    setTags("");
    setPostImg("");


  };

  return (
    <div className="container mt-3">
      <Row className="justify-content-center mt-3">
        <Col xs="auto">
          <h3>Create New Post</h3>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter post title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category (e.g., Technology)"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter tags, separated by commas"
            value={tags}
            onChange={(e) => setTags(e.target.value.split(","))}
            name="tags"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPostImg">
          <Form.Label>Post Image URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            name="postImg"
            value={postImageUrl}
            onChange={(e) => setPostImg(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBody">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Enter post content"
            name="body"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>

        {showSuccess && (
        <div className="position-fixed top-50 start-50 translate-middle bg-warning">
          <Card style={{ width: '18rem', padding: '20px' }} className="text-center">
            <h5>Post Created Successfully!</h5>
            <p>🎈🎉 Congratulations! 🎉🎈</p>
            <p>Your post has been created successfully.</p>
          </Card>
        </div>
      )}

        {submitting  ? <Spinner animation="border" variant="primary" /> : <Button variant="primary" type="submit">
          Submit
        </Button>}

        
      </Form>
    </div>
  );
};

export default CreatePost;
