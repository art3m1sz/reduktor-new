import { Avatar } from "@/components/ui/avatar";
import { Flex, IconButton } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

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
            p={"52px"}>
            <Flex
                w="full"
                h="full"
                p="24px"
                bg="rgba(255, 255, 255, 0.1)"
                borderRadius="16px"
                boxShadow="0 4px 30px rgba(31, 38, 135, 0.37)"
                backdropFilter="blur(1px)"
                border="1px solid rgba(255, 255, 255, 0.18)"
                gap={"24px"}>
                <Flex
                    w="130px" // Slightly larger than the avatar for styling
                    h="130px"
                    justifyContent="center"
                    alignItems="center"
                    bg="rgba(0, 0, 0, 0.45)"
                    borderRadius="50%" // Circular container
                    backdropFilter="blur(5px)" // Blur effect
                    boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)" // Subtle shadow for depth
                >
                    <Avatar w="120px" h="120px" src="/avatar.jpg" />
                </Flex>
                <Flex
                    w={"fit-content"}
                    h={"fit-content"}
                    gap={"12px"}
                    p={"12px"}
                    bg="rgba(0, 0, 0, 0.45)"
                    backdropFilter="blur(5px)"
                    boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
                    rounded={"28px"}>
                    <IconButton
                        size={"sm"}
                        rounded={"full"}
                        variant={"outline"}
                        border={"1px solid white"}>
                        <FiGithub></FiGithub>
                    </IconButton>
                    <IconButton
                        size={"sm"} 
                        rounded={"full"}
                        variant={"outline"}
                        border={"1px solid white"}>
                        <FaInstagram></FaInstagram>
                    </IconButton>
                    <IconButton
                        size={"sm"} 
                        rounded={"full"}
                        variant={"outline"}
                        border={"1px solid white"}>
                        <FiGithub></FiGithub>
                    </IconButton>
                </Flex>
            </Flex>
        </Flex>
    );
}
