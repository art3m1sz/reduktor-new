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
      p={"52px"}
    >
      <Flex
        w="full"
        h="full"
        p="52px"
        bg="rgba(255, 255, 255, 0.1)"
        borderRadius="16px"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        backdropFilter="blur(2px)" 
        border="1px solid rgba(255, 255, 255, 0.1)"
      >
        {/* Add content here */}
      </Flex>
    </Flex>
  );
}
