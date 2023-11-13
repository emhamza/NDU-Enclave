import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const HomeDesktopPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img className="h-10 w-10" src="images/img_search.svg" alt="search" />
      ),
      label: <></>,
    },
    { label: "search" },
    {
      icon: (
        <Img
          className="h-10 w-10"
          src="images/img_trendingup.svg"
          alt="trendingup"
        />
      ),
      label: <></>,
    },
    { label: "trending" },
  ];

  return (
    <>
      <div className="bg-gray-900 flex sm:flex-col md:flex-col flex-row font-lexenddeca gap-[53px] items-start mx-auto md:pr-10 sm:pr-5 pr-[155px] w-full">
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[95px] border border-green-300 border-solid flex h-screen md:hidden justify-start overflow-auto top-[0]"
        >
          <Text
            className="bg-green-300 flex h-[66px] items-center justify-center md:ml-[0] mt-[98px] mx-3.5 sm:px-5 rounded-[50%] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-[66px]"
            size="txtLexendDecaRegular32"
          >
            S
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                paddingLeft: "28px",
                color: "#ffffff",
                fontSize: "16px",
              },
            }}
            className="flex flex-col items-center justify-start mb-[153px] mt-[41px] sm:pr-5 pr-[29px] w-[70%]"
          >
            <div className="flex flex-col gap-[1.67px] items-center justify-start w-full">
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </div>
            <div className="flex flex-col items-center justify-start mt-[164px] w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-10 w-10"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                }
              >
                <Text>create</Text>
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
        <div className="flex flex-1 flex-col gap-9 justify-start w-full">
          <div className="flex flex-col items-center justify-start ml-10 md:ml-[0] w-[7%] md:w-full">
            <div className="bg-green-300 h-1 w-[33%]"></div>
            <Text
              className="mt-1 text-white-A700 text-xl"
              size="txtLexendDecaRegular20"
            >
              Latest
            </Text>
          </div>
          <div className="flex flex-col gap-[33px] items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-3 justify-start w-full">
                <div className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-full">
                  <div className="flex flex-col items-end justify-start">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-right text-white-A700"
                      size="txtLexendDecaSemiBold32"
                    >
                      <>
                        27
                        <br />
                        MAY
                      </>
                    </Text>
                    <Text
                      className="mt-1 rotate-[90deg] text-base text-white-A700"
                      size="txtLexendDecaLight16"
                    >
                      @samurai2099
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[15px] items-center justify-start">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-green-300"
                      size="txtDMSerifDisplayRegular32"
                    >
                      15 Disadvantages Of Freedom And How You Can Workaround It.
                    </Text>
                    <Text
                      className="text-white-A700 text-xl w-[99%] sm:w-full"
                      size="txtLexendDecaRegular20"
                    >
                      <span className="text-white-A700 font-lexenddeca text-left font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum{" "}
                      </span>
                      <span className="text-green-300 font-lexenddeca text-left font-thin">
                        ...read more
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[90px] w-[27%] md:w-full">
                  <Button className="cursor-pointer font-medium leading-[normal] min-w-[116px] text-[13px] text-center">
                    #meditation
                  </Button>
                  <Button className="cursor-pointer font-medium leading-[normal] min-w-[128px] text-[13px] text-center">
                    #mentalpeace
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col relative w-[99%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[17px] items-start justify-between mx-auto w-full">
                <div className="flex flex-col items-end justify-start md:mt-0 mt-[7px]">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-right text-white-A700"
                    size="txtLexendDecaSemiBold32"
                  >
                    <>
                      24
                      <br />
                      MAY
                    </>
                  </Text>
                  <Text
                    className="mt-[3px] rotate-[90deg] text-base text-white-A700"
                    size="txtLexendDecaLight16"
                  >
                    @capitalism
                  </Text>
                </div>
                <div className="flex flex-col gap-[19px] items-start justify-start">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-green-300"
                    size="txtDMSerifDisplayRegular32"
                  >
                    The Death Of Freedom.
                  </Text>
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtLexendDecaRegular20"
                  >
                    <span className="text-white-A700 font-lexenddeca text-left font-normal">
                      Diam quis enim lobortis scelerisque fermentum dui. Fames
                      ac turpis egestas maecenas pharetra convallis posuere
                      morbi. Amet risus nullam eget felis. Neque laoreet
                      suspendisse interdum consectetur libero id. Fringilla urna
                      porttitor rhoncus dolor. Pulvinar sapien et ligula
                      ullamcorper malesuada proin. Massa eget egestas purus
                      viverra accumsan in nisl. Quam adipiscing vitae proin
                      sagittis nisl.{" "}
                    </span>
                    <span className="text-green-300 font-lexenddeca text-left font-thin">
                      ...read more
                    </span>
                  </Text>
                </div>
              </div>
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[116px] ml-[90px] mt-[-15px] text-[13px] text-center z-[1]">
                #anarchy
              </Button>
              <Button className="cursor-pointer font-medium leading-[normal] min-w-[116px] ml-[222px] mt-[-15px] text-[13px] text-center z-[1]">
                #silence
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDesktopPage;
