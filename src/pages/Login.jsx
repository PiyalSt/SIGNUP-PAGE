import React, { useState } from "react";
import bgImg from "../assets/bgImg.png";
import { Button, IconButton, TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { FacebookAuthProvider } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showType, setShowType] = useState(false);

  const handleLogin = async () => {
    if (!email) {
      toast.error("Please enter email address");
      setEmailError(true);
      return;
    }

    if (!password) {
      toast.error("Please enter password");
      setPasswordError(true);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successfully");

      setEmail("");
      setPassword("");

      setInterval(() => {
        navigate("/loading");
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const signInFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      navigate('/loading')
    } catch (error) {
      toast.error(error.code);
    }
  };

  const signInGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, googleProvider);
      navigate('/loading')
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section>
      <div className="w-full h-screen flex">
        <div className="w-6/12">
          <div className="w-full h-full">
            <img
              className="w-full h-screen object-cover"
              src={bgImg}
              alt="Backgroun-Image"
            />
          </div>
        </div>
        <div className="w-6/12 h-full flex items-center justify-center">
          <div className="min-w-120 p-10">
            <div>
              <h2 className="font-poppins font-medium text-4xl text-black">
                Welcome back!
              </h2>
              <p className="font-poppins font-medium text-lg">
                Enter your Credentials to access your account
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-16">
              <div>
                <ToastContainer autoClose={3000} position="top-left" />
                <TextField
                  sx={{
                    width: "100%",
                    // Label color
                    "& .MuiInputLabel-root": {
                      color: "#3A5B22",
                    },
                    // Focused label color
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#3A5B22",
                    },
                    // Border color
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3A5B22",
                    },

                    // Hover border color
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3A5B22",
                    },

                    // Focus border color (blue -> green)
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#3A5B22",
                      },
                  }}
                  type="email"
                  variant="outlined"
                  label="Email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                  }}
                  error={emailError}
                />
              </div>
              <div className="relative">
                <TextField
                  sx={{
                    width: "100%",
                    // Label color
                    "& .MuiInputLabel-root": {
                      color: "#3A5B22",
                    },
                    // Focused label color
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#3A5B22",
                    },
                    // Border color
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3A5B22",
                    },

                    // Hover border color
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3A5B22",
                    },

                    // Focus border color (blue -> green)
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#3A5B22",
                      },
                  }}
                  type={showType ? "text" : "password"}
                  variant="outlined"
                  label="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(false);
                  }}
                  error={passwordError}
                />
                {showType ? (
                  <div
                    onClick={() => setShowType(!showType)}
                    className="absolute top-2 right-2"
                  >
                    <IconButton>
                      <FaRegEye className="text-2xl" />
                    </IconButton>
                  </div>
                ) : (
                  <div
                    onClick={() => setShowType(!showType)}
                    className="absolute top-2 right-2"
                  >
                    <IconButton>
                      <FaRegEyeSlash className="text-2xl" />
                    </IconButton>
                  </div>
                )}
              </div>
              <div className="flex justify-between">
                <p className="flex items-center gap-2">
                  <input
                    className="accent-primary/90 w-4 h-4"
                    type="checkbox"
                    id="check"
                  />
                  <label
                    htmlFor="check"
                    className="font-poppins font-normal cursor-pointer"
                  >
                    Remember for 30 days
                  </label>
                </p>

                <p className="font-poppins font-normal cursor-pointer">
                  forgot password
                </p>
              </div>
            </div>
            <div className="mt-10">
              <Button
                onClick={handleLogin}
                sx={{
                  width: "100%",
                  bgcolor: "#3A5B22",
                  color: "white",
                  padding: "12px 0",
                }}
              >
                Login
              </Button>
            </div>
            <div className="mt-12">
              <div className="flex gap-4">
                <div 
                onClick={signInGoogle}
                className="min-w-50 flex items-center gap-3 border-2 border-gray-400/60 py-2 px-4 rounded-sm cursor-pointer hover:border-primary/70 duration-300 ease-in">
                  <FcGoogle className="text-2xl" />
                  <p>Sign in with Google</p>
                </div>
                <div
                  onClick={signInFacebook}
                  className="min-w-50 flex items-center gap-3 border-2 border-gray-400/60 py-2 px-4 rounded-sm cursor-pointer hover:border-primary/70 duration-300 ease-in"
                >
                  <FaFacebook className="text-2xl text-blue-500" />
                  <p>Sign in with Facebook</p>
                </div>
              </div>
              <p className="mt-6 text-center font-poppins font-medium text-sm">
                Have an account?{" "}
                <Link to={"/"}>
                  <span className="hover:text-primary cursor-pointer underline duration-300">
                    {" "}
                    Sign Up
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
