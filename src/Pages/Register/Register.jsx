import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, setUser } = useAuth();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("password must be 6 characters ");
    }
    setError("");

    createUser(email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("User has been created successfully");
        navigate("/");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="w-full m-4 max-w-md mx-auto p-4 rounded-md shadow sm:p-8 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Sign up to your account
      </h2>
      <p className="text-sm text-center text-gray-400 dark:text-gray-600">
        Already have account?
        <Link
          to="/login"
          href="#"
          rel="noopener noreferrer"
          className="focus:underline hover:underline text-primary"
        >
          Login here
        </Link>
      </p>
      {/* Social Login */}
      <SocialLogin />
      <div className="flex items-center w-full my-4">
        <hr className="w-full text-gray-400 dark:text-gray-600" />
        <p className="px-3 text-gray-400 dark:text-gray-600">OR</p>
        <hr className="w-full text-gray-400 dark:text-gray-600" />
      </div>
      <form
        onSubmit={handleRegister}
        noValidate=""
        action=""
        className="space-y-8"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="imageURL" className="block text-sm">
              PhotoURL
            </label>
            <input
              type="text"
              name="photoURL"
              id="name"
              placeholder="Photo URL"
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
            />
          </div>
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
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
            />
          </div>
          {error && <small className="text-red-800">{error}</small>}
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
