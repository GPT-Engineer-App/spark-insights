import { Box, Button, Container, Flex, Heading, Icon, Image, Stack, Text, VStack, Link, Spacer } from "@chakra-ui/react";
import { FaRocket, FaBullseye, FaPlus, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" p="4" borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.xl" d="flex" alignItems="center">
          <Heading as="h1" size="md" letterSpacing={"tighter"}>
            MyBrand
          </Heading>
          <Spacer />
          <Stack direction="row" spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">About</Link>
          </Stack>
        </Container>
      </Flex>

      {/* Hero Section */}
      <Container maxW="container.xl" p="8">
        <VStack spacing={8} align="center" justify="center" height="60vh">
          <Heading as="h2" size="2xl" textAlign="center">
            Elevate Your Business with Our Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center">
            We provide innovative solutions to boost your business growth and productivity.
          </Text>
          <Button rightIcon={<FaPlus />} colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
      </Container>

      {/* Features Section */}
      <Box py="12" bg="gray.50">
        <Container maxW="container.xl">
          <Heading as="h3" size="lg" mb="6" textAlign="center">
            Why Choose Us?
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={10} justify="center">
            <Feature icon={FaRocket} title="Fast Performance" description="Experience lightning-fast performance and speed." />
            <Feature icon={FaBullseye} title="Targeted Solutions" description="Get solutions that are tailored to your specific needs." />
            <Feature icon={FaPlus} title="Continuous Growth" description="Grow your business continuously with our support." />
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="gray.100" py="6">
        <Container maxW="container.xl" d="flex" justifyContent="space-between" alignItems="center">
          <Text>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</Text>
          <Stack direction="row" spacing={4}>
            <Icon as={FaTwitter} w={5} h={5} />
            <Icon as={FaFacebookF} w={5} h={5} />
            <Icon as={FaLinkedinIn} w={5} h={5} />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <VStack spacing={4} align="center">
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

export default Index;
