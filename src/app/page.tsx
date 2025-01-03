import { Flex } from "@chakra-ui/react";

export default function Index() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundImage="url('/bg.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex
        w="100%"
        h="100%"
        p="52px"
        bg="rgba(255, 255, 255, 0.1)" // Semi-transparent white background
        borderRadius="16px" // Rounded corners for a modern look
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)" // Subtle shadow for depth
        backdropFilter="blur(10px)" // Glass effect through background blur
        border="1px solid rgba(255, 255, 255, 0.3)" // Transparent border for the glass look
      >
        {/* Add content here */}
      </Flex>
    </Flex>
  );
}
