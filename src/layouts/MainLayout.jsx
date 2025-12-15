import React from "react";
import { Toaster } from "src/components/ui/sonner";

const MainLayout = ({ children }) => (
  <>
    <main>{children}</main>
    <Toaster />
  </>
);

export default MainLayout;
