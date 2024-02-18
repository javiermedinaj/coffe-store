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

export default function ProductSimple() {
    return (
        <>
            <Flex flexWrap="wrap" justifyContent="space-between">
                {coffes.map((coffee, i) => (
                    <Box
                        key={i}
                        role={'group'}
                        p={6}
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
                        <Stack pt={10} align={'center'}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                Brand
                            </Text>
                            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                {coffee.title}
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={800} fontSize={'xl'}>
                                    {/* Aquí puedes mostrar el precio */}
                                    {/* {coffee.price} */}
                                </Text>
                                <Text textDecoration={'line-through'} color={'gray.600'}>
                                    {/* Aquí puedes mostrar el ID */}
                                    {coffee.id}
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                ))}
            </Flex>
        
        </>
    
    );
}
