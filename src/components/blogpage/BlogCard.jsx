import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCard({ _id, imgUrl, body, title, link, func}) {
  return (
    <Card style={{ width: '400px', height: '400px', margin: '20px', position: 'relative' }} onClick={func}>
      <Card.Img style={{ height: '250px', objectFit: 'cover', padding: '1px' }}  variant="top" className='' src={imgUrl || "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTDeoNrTnVapVT5UmKgbJJWu5qfi6dXStYDWZTCfCFNX9VG2Xz6pT30ZN4yu1G_3C5WpEY7rXx3YLLCrIg"} />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text style={{ marginBottom: '10px'}}>
            {body && body.slice(0, 50) + "..."}
        </Card.Text>
        <Button 
        variant="primary"
        href={link}
        style={{
          position: "absolute",
          marginTop: '10px',
          bottom: "15px",
          width: "20%"
        }}>Read</Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;