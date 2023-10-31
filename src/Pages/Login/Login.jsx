import { Link} from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
// import { useContext } from 'react';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAuth from '../../hooks/useAuth';
// import axios from 'axios';

const Login = () => {
    const {signInUser} = useAuth();
    // const {signInUser} = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            const loggedInUser = result.user;
            
            // const user = {email};
            // axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            // .then(res => {
            //   if(res.data.success){
            //     navigate(location?.state ? location.state : '/');
            //     console.log(res.data);
            //   }
            // })

            console.log(loggedInUser);
        })
        .catch(error => {
            console.log(error);
        })
    }


  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img}alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div>
                <h2 className="text-3xl font-bold text-center">Login</h2>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center mb-4">New to here?<Link className='ml-2 text-orange-500 font-bold' to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
