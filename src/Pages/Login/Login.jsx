import React from "react";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="w-full m-4 max-w-md mx-auto p-4 rounded-md shadow sm:p-8 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Login to your account
      </h2>
      <p className="text-sm text-center text-gray-400 dark:text-gray-600">
        Don't have account?
        <a
          href="#"
          rel="noopener noreferrer"
          className="focus:underline hover:underline"
        >
          Sign up here
        </a>
      </p>
      {/* Social Login */}
      <SocialLogin />
      <div className="flex items-center w-full my-4">
        <hr className="w-full text-gray-400 dark:text-gray-600" />
        <p className="px-3 text-gray-400 dark:text-gray-600">OR</p>
        <hr className="w-full text-gray-400 dark:text-gray-600" />
      </div>
      <form noValidate="" action="" className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-400 dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
            />
          </div>
        </div>
        <button
          type="button"
          className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
