import React from 'react'
import {
    Avatar,
    Box,
    Flex,
    Button,
    Menu,
    MenuButton,
    useColorModeValue,
    Stack,
    useColorMode,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import Coffe from './coffee-cup.png'

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Box mr={1}>

                        <a href="/">
                            <Avatar src={Coffe} />
                        </a>

                    </Box>
                    <Box>

                        <a href="/" target="_blank">About</a>

                    </Box>
                    <Box p={1}>

                        <a href="https://github.com/" target="_blank">Products</a>

                    </Box>
                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={4}>
                            <Button ml={2} onClick={toggleColorMode}>
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >

                                </MenuButton>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>

    )
}

