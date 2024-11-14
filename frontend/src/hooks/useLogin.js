import { set } from "mongoose";
import React from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/AuthContext";

// Desc: Custom hook for login
const useLogin = () => {
  const [loading, setLoading] = React.useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ userName, password }) => {
    if (!handleInputErrors({ userName, password })) return;
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("authUser", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

function handleInputErrors({ fullName, userName }) {
  if (!userName || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
