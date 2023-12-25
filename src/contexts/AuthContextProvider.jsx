import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "http://26.78.236.231:2000/";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [tokenuser, setTokenUser] = useState("");
  const [error, setError] = useState("");
  const [loginStatus, setLoginStatus] = useState(Boolean(true));
  const [userActive, setUserActive] = useState(false);

  const navigate = useNavigate();

  async function register(formData) {
    try {
      const response = await fetch(`${API}auth/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(formData);
        getUser();
        navigate("/login");
      } else {
        const errorData = await response.json();
        console.log(errorData);
        console.log(JSON.stringify(formData));
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }

  async function login(formData) {
    try {
      const response = await fetch(`${API}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setUserActive(!userActive);
        setTokenUser(JSON.stringify(data));
        setLoginStatus(true);
        navigate("/");
      } else {
        console.log("Login failed:", response.status);
        setLoginStatus(false);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }
  const logout = () => {
    setTokenUser("");
    setUser("");
    setUserActive(!userActive);
  };

  async function refreshAccessToken() {
    let tokentemp = JSON.parse(tokenuser);
    let refreshToken = tokentemp.refreshToken;
    console.log("refreshing");

    try {
      const response = await fetch(`${API}auth/refresh-accessToken`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${refreshToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setTokenUser(
        JSON.stringify({
          accessToken: data.accessToken,
          refreshToken: refreshToken,
        })
      );
      console.log("success!");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      return null;
    }
  }
  async function getUser() {
    let tokentemp = JSON.parse(tokenuser);
    let accessToken = tokentemp.accessToken;
    try {
      const response = await fetch(`${API}users/myProfile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const userData = await response.json();
      console.log("User info:", userData); // Вывод информации о пользователе в консоль
      setUser(userData); // Возвращает данные о пользователе (может быть использовано для обработки в вызывающей функции)
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      refreshAccessToken();
      return null; // В случае ошибки возвращает null или другое значение по умолчанию
    }
  }
  async function updateEmployer(formData) {
    let tokentemp = JSON.parse(tokenuser);
    let accessToken = tokentemp.accessToken;
    try {
      const response = await fetch(`${API}employers/edit`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(formData);
        getUser();
        const updatedUser = await response.json();
        console.log("Updated user:", updatedUser);
      } else {
        const errorData = await response.json();
        console.log(errorData);
        console.log(JSON.stringify(formData));
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }
  async function updateEmployee(formData) {
    let tokentemp = JSON.parse(tokenuser);
    let accessToken = tokentemp.accessToken;
    try {
      const response = await fetch(`${API}employees/edit`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(formData);
        getUser();
        const updatedUser = await response.json();
        console.log("Updated user:", updatedUser);
      } else {
        const errorData = await response.json();
        console.log(errorData);
        console.log(JSON.stringify(formData));
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }
  return (
    <authContext.Provider
      value={{
        user,
        error,
        userActive,
        tokenuser,
        loginStatus,
        refreshAccessToken,
        updateEmployee,
        updateEmployer,
        getUser,
        register,
        login,
        logout,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
