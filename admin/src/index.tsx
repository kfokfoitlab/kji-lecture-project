import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import styled from "@emotion/styled";
import GenericLayout from "./layouts/GenericLayout";

const StyledMaterialDesignContent = styled(MaterialDesignContent)`
  & * {
    color: #fff !important;
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider
        Components={{
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      />
      <GenericLayout>
        <App />
      </GenericLayout>
    </BrowserRouter>
  </React.StrictMode>,
);
