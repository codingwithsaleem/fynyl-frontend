// import Hearder from "@/components/layouts/Hearder";
import Hearder from "@/components/layouts/Hearder";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
        className="min-h-screen relative font-montserrat"
        style={{
          backgroundImage: "url('/images/home/bghero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Hearder />
      </div>
      
      {/* Main Content with proper padding to account for fixed header */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default layout;
