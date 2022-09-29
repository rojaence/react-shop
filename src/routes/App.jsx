import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@styles/global.scss";
import Layout from "@containers/Layout";
import Login from "@containers/Login";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import RecoverySent from "@pages/RecoverySent";
import RecoveryPassword from "@pages/RecoveryPassword";
import NewPassword from "@pages/NewPassword";
import CustomerOrder from "@pages/CustomerOrder";

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

  return (
    <BrowserRouter>
      <ProductState>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/:productCategory" element={<Home />} />
            <Route exaxt path="/my-order" element={<CustomerOrder/>}/>
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/recovery-password"
              element={<RecoveryPassword />}
            />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route path="*" element={<NotFound />} />
            <Route exact path="/recovery-sent" element={<RecoverySent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>

        <Toaster position="bottom-left" toastOptions={appToastOptions} />
      </ProductState>
    </BrowserRouter>
  );
};

export default App;
