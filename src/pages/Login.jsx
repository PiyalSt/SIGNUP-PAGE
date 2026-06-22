import React from "react";
import bgImg from "../assets/bgImg.png";
import { Button, TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
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
                />
              </div>
              <div>
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
                  type="password"
                  variant="outlined"
                  label="Password"
                />
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
                <div className="min-w-50 flex items-center gap-3 border-2 border-gray-400/60 py-2 px-4 rounded-sm cursor-pointer hover:border-primary/70 duration-300 ease-in">
                  <FcGoogle className="text-2xl" />
                  <p>Sign in with Google</p>
                </div>
                <div className="min-w-50 flex items-center gap-3 border-2 border-gray-400/60 py-2 px-4 rounded-sm cursor-pointer hover:border-primary/70 duration-300 ease-in">
                  <FaApple className="text-2xl" />
                  <p>Sign in with Google</p>
                </div>
              </div>
              <p className="mt-6 text-center font-poppins font-medium text-sm">
                Have an account?{" "}
                <Link to={"/"}>
                  <span className="hover:text-primary cursor-pointer underline duration-300">
                    {" "}
                    Sign In
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
