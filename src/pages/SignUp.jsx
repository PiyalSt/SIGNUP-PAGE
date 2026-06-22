import React from "react";
import bgImg from "../assets/bgImg.png";
import { Button, TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <section>
      <div className="w-full h-screen flex">
        <div className="w-6/12 h-full flex items-center justify-center">
          <div className="min-w-120 p-10">
            <h2 className="font-poppins font-medium text-4xl text-black">
              Get Started Now
            </h2>
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
                  type="text"
                  variant="outlined"
                  label="Enter your name"
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
                  type="text"
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
                  type="text"
                  variant="outlined"
                  label="Password"
                />
              </div>
              <p className="flex items-center gap-2">
                <input
                  className="accent-primary/90 w-4 h-4"
                  type="checkbox"
                  id="check"
                />
                <label htmlFor="check">I agree to the terms & policy</label>
              </p>
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
                Signup
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
                Don’t have an account?{" "}
                <Link to={"/login"}>
                  <span className="hover:text-primary cursor-pointer underline duration-300">
                    {" "}
                    Sign Up
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <div className="w-full h-full">
            <img
              className="w-full h-screen object-cover"
              src={bgImg}
              alt="Backgroun-Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
