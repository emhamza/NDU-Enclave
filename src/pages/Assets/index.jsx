import React from "react";

import { Img, Text } from "components";

const AssetsPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-lexenddeca gap-8 items-start justify-center mx-auto p-[119px] md:px-10 sm:px-5 w-full">
        <div className="bg-green-300 flex flex-row gap-[118px] items-start justify-start mt-11 p-3 md:px-5 w-[31%] md:w-full">
          <Text
            className="ml-[13px] mt-2 text-base text-black-900"
            size="txtLexendDecaRegular16"
          >
            <>
              SUCCESS
              <br />
              You can Log-in now.
            </>
          </Text>
          <Img
            className="h-10 mt-[11px] w-10"
            src="images/img_notification.svg"
            alt="notification"
          />
        </div>
        <div className="bg-red-A200 flex flex-row gap-[27px] items-start justify-start mb-[550px] p-3 md:px-5 w-[31%] md:w-full">
          <Text
            className="ml-[13px] mt-2 text-base text-black-900"
            size="txtLexendDecaRegular16"
          >
            <>
              FAILED
              <br />
              Sign-up failed. Please try again.
            </>
          </Text>
          <Img
            className="h-10 mt-[11px] w-10"
            src="images/img_notification.svg"
            alt="notification_One"
          />
        </div>
      </div>
    </>
  );
};

export default AssetsPage;
