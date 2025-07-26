// import Hearder from "@/components/layouts/Hearder";
import Hearder from "@/components/layouts/Hearder";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
        className="min-h-screen relative overflow-hidden font-montserrat"
        style={{
          backgroundImage: "url('/images/home/bghero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <Hearder />
     <div className="flex flex-col items-center justify-center">
      {children}
     </div>
    </div>
  );
};

export default layout;
