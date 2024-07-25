import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";

interface IFormInput {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // Replace with your login logic
    console.log("Form data:", data);
    // Simulate API call
    alert(`Logged in as ${data.email}`);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center justify-center w-[182.5px] h-[40px] mb-10'>
        {/* Replace with actual logo */}
        <img
          src='devlinks-logo.png'
          alt='Logo'
          className='w-full h-full object-contain'
        />
      </div>
      <div className='bg-white rounded-lg p-8 w-[311px] sm:w-[476px] sm:h-[482px] h-[644px] flex flex-col items-center'>
        <div className='w-full text-left'>
          <h1 className='text-4xl  font-bold mb-2'>Login</h1>
          <p className='text-gray text-base mb-6'>
            Add your details below to get back into the app
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
          <div className='mb-6'>
            <label
              className={`block mb-2 font-semibold  text-xs ${
                errors.email ? "text-errorRed" : "text-gray"
              }`}
            >
              Email address
            </label>
            <div
              className={`flex items-center border ${
                errors.email
                  ? "border-errorRed placeholder:text-right"
                  : "border-lightGray"
              } focus-within:border-purpleHover focus-within:shadow-outline-primary rounded px-3 py-2`}
            >
              <FaEnvelope className='text-gray mr-2' />
              <input
                {...register("email", {
                  required: "Can’t be empty",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Can’t be empty",
                  },
                })}
                type='email'
                placeholder={
                  errors.email ? errors.email.message : "e.g. alex@email.com"
                }
                className='flex-1 outline-none'
              />
            </div>
            {/* {errors.email && (
              <span className='text-red-500 text-sm'>
                {errors.email.message}
              </span>
            )} */}
          </div>
          <div className='mb-6'>
            <label
              className={`block mb-2 font-semibold text-xs ${
                errors.password ? "text-errorRed" : "text-gray"
              }`}
            >
              Password
            </label>
            <div
              className={`flex items-center border ${
                errors.email
                  ? "border-errorRed placeholder:text-right"
                  : "border-lightGray"
              } focus-within:border-purpleHover focus-within:shadow-outline-primary rounded px-3 py-2`}
            >
              <FaLock className='text-gray mr-2' />
              <input
                {...register("password", { required: "Please check again" })}
                type='password'
                placeholder={
                  errors.password
                    ? errors.password.message
                    : "Enter your password"
                }
                className='flex-1 outline-none'
              />
            </div>
            {/* {errors.password && (
              <span className='text-red-500 text-sm'>
                {errors.password.message}
              </span>
            )} */}
          </div>
          <button
            type='submit'
            className='w-full bg-primary text-white rounded-lg py-2 mb-4 focus:bg-secondary focus:shadow-outline-primary'
          >
            <Link href='/LinksPage'>Login</Link>
          </button>
          <div className='text-center text-gray'>
            <span>
              Don&apos;t have an account?{" "}
              <Link
                href='/create-account'
                className='text-primary block md:inline'
              >
                Create Account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
