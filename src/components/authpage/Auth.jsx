

const Auth = ({ setLogin}) => {

    //handle LOgin
    const handleLogin = () => {
        setLogin(true);
    }
  return (
    <div className="container mt-5">
        <h1>Welcome. Login to your Account</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero officiis adipisci odit fuga enim illo nulla quos, eius porro deserunt necessitatibus possimus laudantium cumque velit illum nesciunt eveniet ad consequuntur.
        </p>

        <div>
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
    </div>
  )
}

export default Auth