import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "http://26.78.236.231:2000/";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  async function register(formData, navigate) {
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
        // navigate("/login");
      } else {
        const errorData = await response.json();
        console.log(errorData);
        console.log(JSON.stringify(formData));
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }

  // async function login(formData, navigate, username) {
  //   try {
  //     let res = await axios.post(`${API}auth/login`, formData);
  //     localStorage.setItem("tokens", JSON.stringify(res.data));
  //     localStorage.setItem("username", JSON.stringify(username));
  //     navigate("/");
  //     console.log(`${username}`);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //   }
  // }
  // async function login(formData, navigate) {
  //   try {
  //     const response = await fetch(`${API}auth/login`, {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       localStorage.setItem("tokens", JSON.stringify(data));
  //       navigate("/");
  //       console.log(`${username}`);
  //     } else {
  //       const errorData = await response.json();
  //       console.log(errorData);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
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
        localStorage.setItem("tokens", JSON.stringify(data));
        console.log("succes!");
        navigate("/");
      } else {
        console.log("Login failed:", response.status);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
    navigate("/");
  };

  // const checkAuth = async () => {
  //   // console.log('WORKED');
  //   let token = JSON.parse(localStorage.getItem("token"));

  //   try {
  //     const Authorization = `Bearer ${token.access}`;

  //     let res = await axios.post(
  //       `${API}auth/refresh-accessToken`,
  //       { refresh: token.refresh },
  //       { headers: { Authorization } }
  //     );

  //     // console.log(res);

  //     localStorage.setItem(
  //       "token",
  //       JSON.stringify({
  //         refresh: token.refresh,
  //         access: res.data.access,
  //       })
  //     );

  //     let username = localStorage.getItem("username");
  //     setUser(username);
  //   } catch (e) {
  //     console.log(e);
  //     logout();
  //   }
  // };
  const checkAuth = async () => {
    let token = JSON.parse(localStorage.getItem("token"));

    try {
      const Authorization = `Bearer ${token.access}`;

      const response = await fetch(`${API}api/token/refresh/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: Authorization,
        },
        body: JSON.stringify({ refresh: token.refresh }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem(
          "token",
          JSON.stringify({
            refresh: token.refresh,
            access: data.access,
          })
        );

        let username = localStorage.getItem("username");
        setUser(username);
        console.log("succesdwd!");
      } else {
        console.log("Token refresh failed:", response.status);
        // logout();
      }
    } catch (error) {
      console.error("Error:", error);
      // logout();
    }
  };

  return (
    <authContext.Provider
      value={{
        user,
        error,

        register,
        login,
        logout,
        checkAuth,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
