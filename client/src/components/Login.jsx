import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast"
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("i am here");

  const onSubmit = async (data) =>{
    const userInfo = {
     
      email : data.email,
      password :  data.password,
      
    }
  await axios.post("http://localhost:5001/user/login",userInfo)
  .then((res) => {
    console.log(res.data)
    if(res.data){
      toast.success("login successfully")
    }
    localStorage.setItem("users" , JSON.stringify(res.data) )
    window.location.reload()
  }).catch((err)=>{
    console.log(err)
    toast.error("error: " + err)
  })
   
  }
  return (
    <div className="dark:text-black">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
       
          <h3 className="font-bold text-lg text-pink-500">Login</h3>
          <div className="mt-4 space-y-2">
            <span>Email :-</span>
            <br />
            <input
              type="email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-pink-500">This field is required*</span>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Password :-</span>
            <br />
            <input
              type="password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              placeholder="Enter your Password"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span className="text-pink-500">This field is required*</span>}
          </div>
          <div className="flex justify-between mt-3">
            <button
              className="bg-pink-500 text-white p-1 
                rounded-md px-3 py-1 hover:bg-pink-700 duration-300
                "
            >
              Login
            </button>
            <div>
              <p>
                not registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 
                    cursor-pointer underline hover:text-blue-700
                    "
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </div>
            </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
