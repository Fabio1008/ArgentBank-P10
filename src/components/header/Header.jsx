import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setToken, setUser } from "../../store/actions/userActions";
import Logo from "../logo/Logo";
import "./Header.scss";
import { useState } from "react";

export default function Header() {
  const isLogged = useSelector((state) => state.user.isLogin);
  const userName = useSelector((state) => state.user.dataUser.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setLogin(false));
    dispatch(setToken(null));
    dispatch(setUser(""));
    navigate("/");
  };

  let logOption = null;

  if (!isLogged) {
    logOption = (
      <Link to="/login" className="main-nav-item">
        <i className="fa fa-user-circle"></i> Sign In
      </Link>
    );
  } else {
    logOption = (
      <>
        <Link to="/userLogin" className="main-nav-item">
          <div className="main-nav-name-fa-wrapper">
            <span className="main-nav-name">{userName}</span>
            <i className="fa fa-user-circle"></i>
          </div>
        </Link>

        <Link to="/">
          <button className="main-nav-item btn-logout" onClick={logout}>
            <i className="fa fa-sign-out"></i>
            Logout
          </button>
        </Link>
      </>
    );
  }

  return (
    <header>
      <nav className="main-nav">
        <Logo />
        <div className="main-nav-right">{logOption}</div>
      </nav>
    </header>
  );
}
