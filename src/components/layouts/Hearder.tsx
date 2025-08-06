"use client";

import React from "react";
import { BiMenu } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../Container";

const Hearder = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/how-it-works", label: "How it Works" },
    { href: "/about-us", label: "About Us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const isActive = (href: string) => pathname === href;
  return (
    <Container>
      <header className="relative z-10">
        <div className=" mx-auto py-6">
          <div className="bg-[#ffffff] rounded-2xl px-8 py-4 flex items-center justify-between shadow-sm">
            <div className="text-2xl font-bold text-[#8898f0]">
              <Link href="/">fynyl.</Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group text-[#383838] transition-all duration-300 ease-in-out"
                >
                  <span
                    className={`transition-all duration-300 ${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-[#89DDF1] via-[#8F8DEB] to-[#6977C5] bg-clip-text text-transparent"
                        : "group-hover:bg-gradient-to-r group-hover:from-[#89DDF1] group-hover:via-[#8F8DEB] group-hover:to-[#6977C5] group-hover:bg-clip-text group-hover:text-transparent"
                    }`}
                  >
                    {item.label}
                  </span>
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#89DDF1] via-[#8F8DEB] to-[#6977C5] transition-all duration-300 ease-in-out ${
                      isActive(item.href)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button
                  variant="myCustomButton1"
                  className="hidden md:block rounded-full px-6 py-2 text-white font-medium"
                >
                  Log In
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <BiMenu className="h-6 w-6 text-[#383838]" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="text-2xl font-bold text-[#8898f0] mb-8">
                      fynyl.
                    </div>

                    <nav className="flex flex-col space-y-6">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="relative group text-lg transition-all duration-300 ease-in-out"
                        >
                          <span
                            className={`transition-all duration-300 ${
                              isActive(item.href)
                                ? "bg-gradient-to-r from-[#89DDF1] via-[#8F8DEB] to-[#6977C5] bg-clip-text text-transparent"
                                : "text-[#383838] group-hover:bg-gradient-to-r group-hover:from-[#89DDF1] group-hover:via-[#8F8DEB] group-hover:to-[#6977C5] group-hover:bg-clip-text group-hover:text-transparent"
                            }`}
                          >
                            {item.label}
                          </span>
                          {/* Animated underline for mobile */}
                          <span
                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#89DDF1] via-[#8F8DEB] to-[#6977C5] transition-all duration-300 ease-in-out ${
                              isActive(item.href)
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                            }`}
                          />
                        </Link>
                      ))}
                    </nav>

                    <div className="pt-6 border-t">
                      <Button
                        variant="myCustomButton1"
                        className="w-full rounded-full px-6 py-3 text-white font-medium"
                      >
                        Log In
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Hearder;
