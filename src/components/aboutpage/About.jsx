
const About = ({ setLogin}) => {
  //Handle LogOut
  const handleLogout = () => {
      setLogin(false)
  }

return (
  <div className='container mt-5'>
      <h1>Welcome to About Page</h1>
      <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero officiis adipisci odit fuga enim illo nulla quos, eius porro deserunt necessitatibus possimus laudantium cumque velit illum nesciunt eveniet ad consequuntur.
      </p>

      <div>
          <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
      </div>
  </div>
)
}

export default About