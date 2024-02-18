import {
    Box,
    Container,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
} from '@chakra-ui/react';
import { coffes } from '../database/data';

// Definimos el número máximo de productos a mostrar
const MAX_PRODUCTS = 5;

export default function ProductSimple() {
    // Usamos slice para obtener solo los primeros MAX_PRODUCTS elementos
    const limitedCoffes = coffes.slice(0, MAX_PRODUCTS);

    return (
        <>
        
            <Flex flexWrap="wrap" justifyContent="center">
                {limitedCoffes.map((coffee, i) => (
                    <Box
                        key={i}
                        role={'group'}
                        m={6}
                        pt={6}
                        maxW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}
                        mb={6}
                    >
                        <Box>
                            <Image
                                rounded={'lg'}
                                height={230}
                                width={'100%'}
                                objectFit={'cover'}
                                src={coffee.image}
                            />
                        </Box>
                        <Stack pt={4} pb={4} align={'center'}>
                           
                            <Heading fontSize={'2xl'} fontFamily={'body'} mt={2} mb={2} fontWeight={500}>
                                {coffee.title}
                            </Heading>
                           
                        </Stack>
                    </Box>
                ))}
            </Flex>
        </>
        
    );
}
