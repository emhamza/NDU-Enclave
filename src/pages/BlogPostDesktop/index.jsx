import React from "react";

import { Text } from "components";

const BlogPostDesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col items-center justify-end mx-auto pt-[61px] md:px-10 sm:px-5 px-[61px] w-full">
        <div className="flex flex-col items-center justify-end max-w-[876px] mx-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-green-300 w-[97%] sm:w-full"
                size="txtDMSerifDisplayRegular40"
              >
                15 Disadvantages Of Freedom And How You Can Workaround It.
              </Text>
              <div className="flex flex-col font-lexenddeca items-start justify-start mt-3.5">
                <Text
                  className="text-gray-500 text-xl"
                  size="txtLexendDecaExtraLight20"
                >
                  written by @samurai2099
                </Text>
                <Text
                  className="text-gray-500 text-xl"
                  size="txtLexendDecaExtraLight20"
                >
                  on 27 may 2022
                </Text>
              </div>
              <Text
                className="mt-[29px] text-white-A700 text-xl"
                size="txtLexendDecaRegular20"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Luctus venenatis lectus magna fringilla urna. Aliquet
                  porttitor lacus luctus accumsan tortor posuere ac ut. Eleifend
                  quam adipiscing vitae proin sagittis nisl rhoncus. Faucibus
                  ornare suspendisse sed nisi lacus sed viverra tellus. Urna
                  molestie at elementum eu facilisis sed odio morbi. Eget mi
                  proin sed libero enim. Quis varius quam quisque id diam vel
                  quam. Duis at tellus at urna condimentum mattis pellentesque.
                  Nulla facilisi cras fermentum odio eu feugiat pretium nibh.
                  <br />
                  <br />
                  Ut tellus elementum sagittis vitae et leo. Cursus in hac
                  habitasse platea dictumst quisque sagittis purus. Odio
                  facilisis mauris sit amet. Quis vel eros donec ac odio. Orci a
                  scelerisque purus semper. Amet justo donec enim diam vulputate
                  ut pharetra. Arcu odio ut sem nulla pharetra diam sit amet
                  nisl. Sapien eget mi proin sed libero enim. Nunc sed blandit
                  libero volutpat sed cras ornare arcu dui. Neque viverra justo
                  nec ultrices dui sapien eget mi.
                  <br />
                  <br />
                  Cras semper auctor neque vitae tempus quam pellentesque nec
                  nam. Vitae tortor condimentum lacinia quis vel eros donec ac.
                  Consectetur adipiscing elit pellentesque habitant morbi. Enim
                  tortor at auctor urna nunc id cursus metus. Elit sed vulputate
                  mi sit. Quis viverra nibh cras pulvinar mattis nunc sed. In
                  aliquam sem fringilla ut morbi tincidunt. Orci a scelerisque
                  purus semper. Dignissim sodales ut eu sem integer vitae justo.{" "}
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostDesktopPage;
