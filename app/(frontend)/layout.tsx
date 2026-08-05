import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>I am front only Pages Layout </h1>
      {children}
    </div>
  );
}

export default Layout;
