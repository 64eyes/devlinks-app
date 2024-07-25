import { useForm, SubmitHandler } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

const CreateAccountPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log("Form data:", data);
    // Simulate API call
    alert(`Account created for ${data.email}`);
    // Redirect to login page or dashboard
    router.push("/login");
  };

  return (
    <div className='flex flex-col items-center min-h-screen bg-background pt-16'>
      <div className='flex items-center justify-center w-[182.5px] h-[40px] mb-10'>
        {/* Replace with actual logo */}
        <img
          src='devlinks-logo.png'
          alt='Logo'
          className='w-full h-full object-contain'
        />
      </div>
      <div className='bg-white rounded-lg p-8 w-[311px] sm:w-[476px] sm:h-[618px] h-auto flex flex-col items-center'>
        <div className='w-full text-left'>
          <h1 className='text-3xl font-bold mb-2'>Create Account</h1>
          <p className='text-gray text-base mb-6'>
            Let’s get you started sharing your links!
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
          <div className='mb-6'>
            <label
              className={`block mb-2 font-semibold ${
                errors.email ? "text-errorRed" : "text-gray"
              }`}
            >
              Email
            </label>
            <div
              className={`flex items-center border rounded px-3 py-2 ${
                errors.email ? "border-errorRed" : "border-lightGray"
              } focus-within:border-primary focus-within:shadow-outline-primary`}
            >
              <FaEnvelope className='text-gray mr-2' />
              <input
                {...register("email", {
                  required: "Can’t be empty",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                type='email'
                placeholder={
                  errors.email ? errors.email.message : "e.g. alex@email.com"
                }
                className={`flex-1 outline-none`}
              />
            </div>
          </div>
          <div className='mb-6'>
            <label
              className={`block mb-2 font-semibold ${
                errors.password ? "text-errorRed" : "text-gray"
              }`}
            >
              Create Password
            </label>
            <div
              className={`flex items-center border rounded px-3 py-2 ${
                errors.password ? "border-errorRed" : "border-lightGray"
              } focus-within:border-primary focus-within:shadow-outline-primary`}
            >
              <FaLock className='text-gray mr-2' />
              <input
                {...register("password", {
                  required: "Please enter a password",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                type='password'
                placeholder={
                  errors.password
                    ? errors.password.message
                    : "At least 8 characters"
                }
                className={`flex-1 outline-none`}
              />
            </div>
          </div>
          <div className='mb-6'>
            <label
              className={`block mb-2 font-semibold ${
                errors.confirmPassword ? "text-errorRed" : "text-gray"
              }`}
            >
              Confirm Password
            </label>
            <div
              className={`flex items-center border rounded px-3 py-2 ${
                errors.confirmPassword ? "border-errorRed" : "border-lightGray"
              } focus-within:border-primary focus-within:shadow-outline-primary`}
            >
              <FaLock className='text-gray mr-2' />
              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                type='password'
                placeholder={
                  errors.confirmPassword
                    ? errors.confirmPassword.message
                    : "At least 8 characters"
                }
                className={`flex-1 outline-none`}
              />
            </div>
          </div>
          <p className='text-gray text-left mb-4'>
            Password must contain at least 8 characters.
          </p>
          <button
            type='submit'
            className='w-full bg-primary text-white rounded py-2 mb-4 focus:bg-secondary focus:shadow-outline-primary focus:outline-none'
          >
            Create New Account
          </button>
          <div className='text-center text-gray'>
            <span>
              Already have an account?{" "}
              <Link href='/' className='text-primary block md:inline'>
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
