// components/Navbar.js
"use client";
import Link from "next/link";

import { ModeToggle } from "./theme-btn";
import { useSession, signIn, signOut } from "next-auth/react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <nav className="p-4 border-b sticky top-0 backdrop-blur bg-background/50">
        {/* <nav className="bg-gray-800 p-4 border-b sticky top-0"> */}
        <div className="container mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <div className="text-2xl font-bold">DailyBlogs</div>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="px-2 hover:font-semibold hover:scale-105"
              passHref
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-2 hover:font-semibold hover:scale-105"
              passHref
            >
              About
            </Link>
            <Link
              href="/blog"
              className="px-2 hover:font-semibold hover:scale-105"
              passHref
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-2 hover:font-semibold hover:scale-105"
              passHref
            >
              Contact
            </Link>
            <div className="flex space-x-4">
              <Link href="/" passHref>
                <button
                  onClick={() => signOut()}
                  className="bg-white-600  text-center py-2 px-2 rounded-lg shadow-md hover:backdrop-blur hover:bg-background/50 transition duration-200"
                >
                  Sign Out
                </button>
              </Link>
              <ModeToggle />
            </div>
          </div>

          <div className="md:hidden">
            <Sheet>
              {" "}
              <span className="mx-4">
                <ModeToggle />
              </span>
              <SheetTrigger>
                <button className=" focus:outline-none">☰</button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold my-4">DailyBlogs</SheetTitle>
                  <SheetDescription>
                    <div className=" flex flex-col gap-6 ">
                      <Link
                        href="/"
                        className=" px-2 hover:font-semibold hover:scale-105"
                        passHref
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className=" px-2 hover:font-semibold hover:scale-105"
                        passHref
                      >
                        About
                      </Link>
                      <Link
                        href="/blog"
                        className=" px-2 hover:font-semibold hover:scale-105"
                        passHref
                      >
                        Blog
                      </Link>
                      <Link
                        href="/contact"
                        className=" px-2 hover:font-semibold hover:scale-105"
                        passHref
                      >
                        Contact
                      </Link>
                      <div className="space-x-4">
                        <Link href="/" passHref>
                          <button
                            onClick={() => signOut()}
                            className=" bg-white-600 text-green-600 text-center py-2 px-2 rounded-lg shadow-md hover:backdrop-blur hover:bg-background/50 transition duration-200"
                          >
                            Sign Out
                          </button>
                        </Link>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="p-4 border-b sticky top-0 backdrop-blur bg-background/50">
      {/* <nav className="bg-gray-800 p-4 border-b sticky top-0"> */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-2xl font-bold">DailyBlogs</div>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/"
            className="px-2 hover:font-semibold hover:scale-105"
            passHref
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-2 hover:font-semibold hover:scale-105"
            passHref
          >
            About
          </Link>
          <Link
            href="/"
            className="px-2 hover:font-semibold hover:scale-105"
            passHref
          >
            <button
              onClick={() => signIn()}
              className="bg-white-600  text-center py-2 px-2 rounded-lg shadow-md hover:backdrop-blur hover:bg-background/50 transition duration-200"
            >
              Blog
            </button>
          </Link>
          <Link
            href="/contact"
            className="px-2 hover:font-semibold hover:scale-105"
            passHref
          >
            Contact
          </Link>
          <div className="flex space-x-4">
            <Link href="/" passHref>
              <button
                onClick={() => signIn()}
                className="bg-white-600  text-center py-2 px-2 rounded-lg shadow-md hover:backdrop-blur hover:bg-background/50 transition duration-200"
              >
                Sign In
              </button>
            </Link>
            <Link href="/" passHref>
              <button
                onClick={() => signIn()}
                className="bg-white-600  py-2 items-center px-2 rounded-lg shadow-md hover:backdrop-blur hover:bg-background/50 transition duration-200"
              >
                Sign Up
              </button>
            </Link>
            <ModeToggle />
          </div>
        </div>

        <div className="md:hidden">
          <Sheet>
            {" "}
            <span className="mx-4">
              <ModeToggle />
            </span>
            <SheetTrigger>
              <button className=" focus:outline-none">☰</button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">DailyBlogs</SheetTitle>
                <SheetDescription>
                  <div className=" flex flex-col gap-6 ">
                    <Link
                      href="/"
                      className=" px-2 hover:font-semibold hover:scale-105"
                      passHref
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className=" px-2 hover:font-semibold hover:scale-105"
                      passHref
                    >
                      About
                    </Link>
                    <Link
                      href="/"
                      className=" px-2 hover:font-semibold hover:scale-105"
                      passHref
                    >
                      <button
                        onClick={() => signIn()}
                        className="bg-white-600  text-center py-2 px-2 rounded-lg shadow-md hover:backdrop-blur hover:bg-background/50 transition duration-200"
                      >
                        Blog
                      </button>
                    </Link>
                    <Link
                      href="/contact"
                      className=" px-2 hover:font-semibold hover:scale-105"
                      passHref
                    >
                      Contact
                    </Link>
                    <div className="space-x-4">
                      <Link href="/" passHref>
                        <button
                          onClick={() => signIn()}
                          className=" bg-white-600 text-green-600 text-center py-2 px-2 rounded-lg shadow-md hover:backdrop-blur hover:bg-background/50 transition duration-200"
                        >
                          Sign In
                        </button>
                      </Link>
                      <Link href="/" passHref>
                        <button
                          onClick={() => signIn()}
                          className="bg-white-600 text-red-600 py-2 my-2 items-center px-2 rounded-lg shadow-md hover:backdrop-blur hover:bg-background/50 transition duration-200"
                        >
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
