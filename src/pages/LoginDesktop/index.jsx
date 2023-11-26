import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

const LoginDesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex sm:flex-col md:flex-col flex-row font-lexenddeca sm:gap-10 md:gap-10 gap-[126px] items-start mx-auto md:pr-10 sm:pr-5 pr-[137px] w-full">
        <Sidebar className="!sticky !w-[417px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
          <div className="h-[720px] mr-1 relative w-full">
            <Img
              className="h-[720px] m-auto object-cover w-full"
              src="images/img_pawelczerwinsk.png"
              alt="pawelczerwinsk"
            />
            <div className="absolute bg-gray-900_47 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[166px] md:px-10 sm:px-5 w-full">
              <Text
                className="mb-[76px] mt-[106px] rotate-[90deg] md:text-5xl text-[64px] text-white-A700"
                size="txtLexendDecaBold64"
              >
                Login
              </Text>
            </div>
          </div>
          <Line className="bg-green-300 h-[720px] md:ml-[0] ml-[413px] w-1" />
        </Sidebar>
        <div className="flex flex-1 flex-col gap-[34px] items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
              size="txtDMSerifDisplayRegular48"
            >
              Welcome
            </Text>
            <Text
              className="mt-0.5 text-2xl md:text-[22px] text-gray-500 sm:text-xl"
              size="txtLexendDecaLight24"
            >
              Let’s log you in quickly
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[22px] items-start justify-start w-full">
              <Input
                name="forminput"
                placeholder="Enter your email"
                className="font-light leading-[normal] p-0 placeholder:text-gray-500 text-base text-left w-full"
                wrapClassName="border border-green-300 border-solid w-full"
                type="email"
              ></Input>
              <Input
                name="forminput_One"
                placeholder="Enter your password"
                className="font-light leading-[normal] p-0 placeholder:text-gray-500 text-base text-left w-full"
                wrapClassName="border border-green-300 border-solid w-full"
                type="password"
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[95%] md:w-full">
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[180px] text-center text-xl"
                  shape="square"
                  size="sm"
                  variant="fill"
                >
                  LOGIN
                </Button>
                <Text
                  className="text-white-A700 text-xl"
                  size="txtLexendDecaRegular20"
                >
                  <span className="text-white-A700 font-lexenddeca text-left font-normal">
                    don’t have an account
                  </span>
                  <span className="text-green-300 font-lexenddeca text-left font-normal">
                    <>
                      ?<br />
                      sign-up
                    </>
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginDesktopPage;
