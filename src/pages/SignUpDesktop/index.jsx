import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

const SignUpDesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-lexenddeca items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[417px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="h-[720px] mr-1 relative w-full">
              <Img
                className="h-[720px] m-auto object-cover w-full"
                src="images/img_pawelczerwinsk.png"
                alt="pawelczerwinsk"
              />
              <div className="absolute bg-gray-900_47 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[166px] md:px-10 sm:px-5 w-full">
                <Text
                  className="mb-[50px] mt-[53px] rotate-[90deg] md:text-5xl text-[64px] text-white-A700"
                  size="txtLexendDecaBold64"
                >
                  Sign Up
                </Text>
              </div>
            </div>
            <Line className="bg-green-300 h-[720px] md:ml-[0] ml-[413px] w-1" />
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[41px] items-start justify-start md:mt-0 mt-[78px] w-full">
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
                Let’s sign you up quickly
              </Text>
            </div>
            <div className="h-[388px] relative w-full">
              <div className="absolute flex flex-col gap-[22px] h-full inset-[0] items-start justify-center m-auto w-full">
                <Input
                  name="forminput"
                  placeholder="Enter your name"
                  className="font-light leading-[normal] p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-green-300 border-solid w-full"
                  type="text"
                ></Input>
                <Input
                  name="forminput_One"
                  placeholder="Enter your email"
                  className="font-light leading-[normal] p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-green-300 border-solid w-full"
                  type="email"
                ></Input>
                <Input
                  name="forminput_Two"
                  placeholder="Enter password"
                  className="font-light leading-[normal] p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-green-300 border-solid w-full"
                  type="password"
                ></Input>
                <Input
                  name="forminput_Three"
                  placeholder="Confirm password"
                  className="font-light leading-[normal] p-0 placeholder:text-gray-500 text-base text-left w-full"
                  wrapClassName="border border-green-300 border-solid w-full"
                  type="password"
                  size="xs"
                ></Input>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[180px] text-center text-xl"
                  shape="square"
                  size="sm"
                  variant="fill"
                >
                  SUBMIT
                </Button>
              </div>
              <Text
                className="absolute bottom-[1%] right-[0] text-white-A700 text-xl"
                size="txtLexendDecaRegular20"
              >
                <span className="text-white-A700 font-lexenddeca text-left font-normal">
                  <>
                    already have an account? <br />
                  </>
                </span>
                <span className="text-green-300 font-lexenddeca text-left font-normal">
                  log-in
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpDesktopPage;
