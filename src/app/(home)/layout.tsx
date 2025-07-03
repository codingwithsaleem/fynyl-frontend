// import Hearder from "@/components/layouts/Hearder";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <Hearder /> */}
      {children}
    </div>
  );
};

export default layout;
