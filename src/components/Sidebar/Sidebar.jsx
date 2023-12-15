import { Avatar, Box, Flex, Image, Tooltip, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Huitz Bolaños" src="/profilepic.png" />,
      text: "Profile",
    },
  ];
  return (
    <Box
      h={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex
        direction={"column"}
        gap={10}
        w={"full"}
        h={"full"}
        alignItems={"center"}
      >
        <Link to={"/"} cursor={"pointer"} pl={2}>
          <Box display={{ base: "none", md: "block" }}>
            <InstagramLogo />
          </Box>
          <Box
            display={{ base: "block", md: "none" }}
            borderRadius={6}
            _hover={{ bg: "whiteAlpha.400" }}
          >
            <InstagramMobileLogo />
          </Box>
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"} w={"full"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link to={item.link || null}>
                <Flex
                  gap={4}
                  alignItems={"center"}
                  _hover={{ bg: "whiteAlpha.400" }}
                  borderRadius={6}
                  h={10}
                  w={"full"}
                  justifyContent={{ base: "center", md: "flex-start" }}
                  p={2}
                >
                  {item.icon}
                  <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
                </Flex>
              </Link>
            </Tooltip>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
