import React from "react";
import { Box, Heading, Text, Flex, Image, Input, Button, Grid, Link, Icon } from "@chakra-ui/react";
import { FaSearch, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navbar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            Banco de Séries
          </Heading>
        </Flex>
        <Box>
          <Link href="/series-tracker" mr={4}>
            Minhas Séries
          </Link>
        </Box>

        <Box>
          <Input placeholder="Buscar série..." mr={4} borderRadius="full" bg="white" />
          <Button leftIcon={<FaSearch />} colorScheme="blue" borderRadius="full">
            Buscar
          </Button>
        </Box>
      </Flex>

      {/* Hero */}
      <Box textAlign="center" py={20} px={6} bgImage="https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXJ8ZW58MHx8fHwxNzEwNDc1ODYxfDA&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" color="white">
        <Heading as="h2" size="2xl" mt={6} mb={6}>
          Descubra novas séries para assistir
        </Heading>
        <Text fontSize="xl">Explore nossa coleção de séries de TV de todos os gêneros e encontre sua próxima obsessão.</Text>
      </Box>

      {/* Featured Series */}
      <Box p={10}>
        <Heading as="h2" size="xl" mb={8}>
          Séries em Destaque
        </Heading>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1485115905815-74a5c9fda2f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMGJhZCUyMHBvc3RlcnxlbnwwfHx8fDE3MTA0NzU4NjF8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              Breaking Bad
            </Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1564509143629-ddaeb2dad661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1lJTIwb2YlMjB0aHJvbmVzJTIwcG9zdGVyfGVufDB8fHx8MTcxMDQ3NTg2Mnww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              Game of Thrones
            </Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHJhbmdlciUyMHRoaW5ncyUyMHBvc3RlcnxlbnwwfHx8fDE3MTA0NzU4NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              Stranger Things
            </Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aGUlMjBvZmZpY2UlMjBwb3N0ZXJ8ZW58MHx8fHwxNzEwNDc1ODYyfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Text mt={2} fontSize="lg" fontWeight="bold">
              The Office
            </Text>
          </Box>
        </Grid>
      </Box>

      {/* Footer */}
      <Box bg="gray.100" py={10} px={10}>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Heading as="h3" size="lg">
              Banco de Séries
            </Heading>
            <Text mt={4}>Descubra e acompanhe suas séries favoritas.</Text>
          </Box>
          <Box>
            <Link href="#" mr={4}>
              <Icon as={FaInstagram} w={6} h={6} />
            </Link>
            <Link href="#" mr={4}>
              <Icon as={FaFacebook} w={6} h={6} />
            </Link>
            <Link href="#">
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
