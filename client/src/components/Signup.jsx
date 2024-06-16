import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Signup = () => {
  const location = useLocation() ;
  const Navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("i am here");

  const onSubmit = async (data) =>{
    const userInfo = {
      fullname : data.fullname,
      email : data.email,
      password :  data.password,
      confirmPassword : data.confirmPassword,
    }
  await axios.post("http://localhost:5001/user/signup",userInfo)
  .then((res) => {
    console.log(res.data)
    if(res.data){
      toast.success("signup successfully");
      Navigate(from , {replace:true})
     }
    localStorage.setItem("users" , JSON.stringify(res.data) )
    window.location.reload() ;
  }).catch((err)=>{
    console.log(err)
    toast.error("error: " + err)
  })
   
  }
  return (
    <div className=" w-11/12 h-screen flex   justify-center items-center">
      <div className="modal-box  ">
        <form 
        onSubmit={handleSubmit(onSubmit)}
        method="dialog">
          {/* if there is a button in form, it will close the modal */}

          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
          >
            ✕
          </Link>
  
        <h3 className="font-bold text-lg text-pink-500">Signup</h3>
        <div className="mt-4 space-y-2">
          <span>Name :-</span>
          <br />
          <input
            type="text"
            className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
            placeholder="Enter your name"
            {...register("fullname", { required: true })}
          />
           <br />
           {errors.fullname && <span className="text-pink-500">This field is required*</span>}
        </div>
        <div className="mt-4 space-y-2">
          <span>Email :-</span>
          <br />
          <input
            type="email"
            className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
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
            className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
            placeholder="Enter your Password"
            {...register("password", { required: true })}
          />
           <br />
           {errors.email && <span className="text-pink-500">This field is required*</span>}
        </div>
        <div className="mt-4 space-y-2">
          <span>Confirm Password :-</span>
          <br />
          <input
            type="password"
            className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
            placeholder="Enter your Password"
            {...register("password", { required: true })}
          />
           <br />
           {errors.email && <span className="text-pink-500">This field is required*</span>}
          
        </div>
        <div className="flex justify-between mt-3">
          <button
            className="bg-pink-500 text-white p-1 
                rounded-md px-3 py-1 hover:bg-pink-700 duration-300
                "
          >
            Signup
          </button>
          </div>
          <div >
            <p className="dark:text-black" >
              already registered?{" "}
              <button
                className="text-blue-500 
                    cursor-pointer underline hover:text-blue-700
                    "
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>{" "}
              <Login/>
            </p>
          </div>
          </form>
        </div>
      </div>
     
  );
};

export default Signup;
