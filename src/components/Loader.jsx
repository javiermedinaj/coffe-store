import React, { useEffect, useState } from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
import gsap from "gsap";
import { coffes } from "../database/data";

const Loader = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.set(".item", { y: 500 });
    gsap.set(".loader-imgs", { x: 200 });

    const tl = gsap.timeline({ delay: 1.4 });

    tl.to(".item", {
      y: 0,
      duration: 1.5,
      stagger: 0.03,
      ease: "power3.inOut",
    })
      .to(
        ".loader-imgs",
        {
          x: 0,
          duration: 3.7,
          ease: "power3.inOut",
        },
        "-=2.5"
      )

      .to(
        ".loader",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.5"
      );
  }, []);

  return (
    <Flex
      className="container"
      bgGradient="linear(red.100 0%, gray.100 25%, orange.100 50%)"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Flex
        as="main"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={2} 
        px={4}
        gap={4} 
      >
        <Text
          color="black"
          fontSize={isMobile ? "3xl" : "5xl"}
          >
            Your best coffee
        </Text>
        <Box className="loader">
          <Flex className="loader-imgs" direction="row">
            {coffes.map((coffee, i) => (
              <Box key={i} className="item">
                <Image
                  src={coffee.image}
                  alt={`Coffee ${i + 1}`}
                  w="100%" 
                  h="100%" 
                  objectFit="cover" 
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Loader;
