import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("i am here");

  const onSubmit = (data) => console.log("this is your form data ->", data);
  return (
    <div className=" w-11/12 h-screen flex   justify-center items-center">
      <div className="modal-box  ">
        <form 
        onSubmit={handleSubmit(onSubmit)}
        method="dialog">
          {/* if there is a button in form, it will close the modal */}

          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
  
        <h3 className="font-bold text-lg text-pink-500">Signup</h3>
        <div className="mt-4 space-y-2">
          <span>Name :-</span>
          <br />
          <input
            type="text"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
           <br />
           {errors.name && <span className="text-pink-500">This field is required*</span>}
        </div>
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
           {errors.email && <span className="text-pink-500">This field is required*</span>}
        </div>
        <div className="mt-4 space-y-2">
          <span>Confirm Password :-</span>
          <br />
          <input
            type="password"
            className="w-80 px-3 py-1 border rounded-md outline-none"
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
            <p  >
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
