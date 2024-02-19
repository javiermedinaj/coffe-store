import {
  Box,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  Flex,
  Button
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import { coffes } from "../database/data";

const MAX_PRODUCTS = 4;

export default function ProductSimple() {
  const limitedCoffes = coffes.slice(0, MAX_PRODUCTS);

  return (
    <>
      <Flex
        justifyContent = "center"
        py={12}
        
        align={"center"}
        mb={6}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        >
          Our Products
        </Heading>
      </Flex>
      <Flex flexWrap="wrap" justifyContent="center">
        {limitedCoffes.map((coffee, i) => (
          <Box
            key={i}
            role={"group"}
            m={6}
            pt={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
            mb={6}
          >
            <Box>
              <Image
                rounded={"lg"}
                height={230}
                width={"100%"}
                objectFit={"cover"}
                src={coffee.image}
              />
            </Box>
            <Stack pt={4} pb={4} align={"center"}>
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                mt={2}
                mb={2}
                fontWeight={500}
              >
                {coffee.title}
              </Heading>
            </Stack>
          </Box>
        ))}
      </Flex>
      <Flex justifyContent="center"
      p={6}
      >
       
        <Link to="/products">
          <Button colorScheme="teal" variant="outline">
            See all products
          </Button>
        </Link>
      </Flex>
    </>
  );
}
