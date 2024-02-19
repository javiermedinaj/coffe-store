import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import { coffes } from "../database/data";

export default function ProductSimple() {
  return (
    <>
      <Flex
      justifyContent = "center"
      py={12}
      bg={useColorModeValue("gray.50", "gray.900")}
      >
        <Heading
          fontSize={"4xl"}
          fontWeight={600}
          color={useColorModeValue("gray.800", "white")}
        >
          Products
        </Heading>
      </Flex>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {coffes.map((coffee, i) => (
          <Box
            key={i}
            role={"group"}
            p={6}
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
            <Stack pt={10} align={"center"}>
              
              <Heading fontSize={"2xl"} p={2} fontFamily={"body"} fontWeight={500}>
                {coffee.title}
              </Heading>
             
            </Stack>
          </Box>
        ))}
      </Flex>
    </>
  );
}
