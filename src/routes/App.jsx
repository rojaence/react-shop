import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "@styles/global.scss";
import Layout from "@containers/Layout";
import Login from "@containers/Login";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import RecoverySent from "@pages/RecoverySent";
import RecoveryPassword from "@pages/RecoveryPassword";
import NewPassword from "@pages/NewPassword";
import Checkout from "@pages/Checkout";
import UserAccount from "@pages/UserAccount";

import ProductState from "@context/products/ProductState";

import { Toaster } from "react-hot-toast";

const App = () => {
  const commonToastStyle = {
    borderRadius: "8px",
    color: "var(--white)",
  };

  const appToastOptions = {
    success: {
      style: {
        ...commonToastStyle,
        background: "var(--success-color)",
      },
    },
    warning: {
      style: {
        ...commonToastStyle,
        background: "var(--warning-color)",
      },
    },
    error: {
      style: {
        ...commonToastStyle,
        background: "var(--error-color)",
      },
    },
  };

  const UserDashboard = () => {
    return (
      <Fragment>
        <h2>Dashboard del usuario</h2>
        <Outlet/>
      </Fragment>
    )
  }

  const UserOrders = () => {
    return (
      <div>
        <h3>Órdenes del usuario</h3>
        <ul>
          <li>My order 1</li>
          <li>My order 2</li>
          <li>My order 3</li>
        </ul>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <ProductState>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}>
              <Route path=":productCategory" element={<Home />} />
            </Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account">
              <Route index element={<UserAccount/>}/>
              <Route path="orders" element={<UserOrders/>}/>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/recovery-password" element={<RecoveryPassword />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/recovery-sent" element={<RecoverySent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Toaster position="bottom-left" toastOptions={appToastOptions} />
      </ProductState>
    </BrowserRouter>
  );
};

export default App;
