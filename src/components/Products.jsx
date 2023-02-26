import {
    Box,
    Container,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';
import { coffes } from '../database/data'



export default function ProductSimple() {
    return (
        <Container p={2}>
            {coffes.map((coffes, i) => (
                <Container key={i}>
                    <Box

                        role={'group'}
                        p={6}
                        maxW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}>
                        <Box
                        >
                            <Image
                                rounded={'lg'}
                                height={230}
                                width={282}
                                objectFit={'cover'}
                                src={coffes.image}
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>
                            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                Brand
                            </Text>
                            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                {coffes.name}
                            </Heading>
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={800} fontSize={'xl'}>
                                    {coffes.price}
                                </Text>
                                <Text textDecoration={'line-through'} color={'gray.600'}>
                                    {coffes.id}
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>

                </Container>
            ))}

        </Container>


    );
}

