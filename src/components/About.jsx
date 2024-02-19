
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react"
import { CiCoffeeCup } from "react-icons/ci";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";
import Blog from '../assets/blog2.jpg'
const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function About() {
  return (
    <Container maxW={"8xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={10}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            About us
          </Text>
          <Heading>Coffee Store</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
          We specialize in crafting exceptional coffee, providing unique and memorable experiences for every customer.
            

          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={MdOutlineCoffeeMaker} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Coffe for you"}
            />
            <Feature
              icon={<Icon as={CiCoffeeCup} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Enjoy in our cozy establishment"}
            />
            <Feature
              icon={
                <Icon as={GiCoffeeCup} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Savor in the comfort of your home"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              Blog
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
