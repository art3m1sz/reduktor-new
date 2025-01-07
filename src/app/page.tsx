import { Avatar } from "@/components/ui/avatar";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { FaFigma, FaInstagram, FaLaravel } from "react-icons/fa";
import { FaHtml5, FaJava, FaReact } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiPhpFill, RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui, SiNextdotjs, SiPostman } from "react-icons/si";
import { TbSql } from "react-icons/tb";

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
            position={"relative"}>
            <Flex
                w={"487px"}
                h={"542px"}
                backgroundImage="url('/leaf1.png')"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                position={"absolute"}
                right={"-30px"}
                bottom={"5px"}
                zIndex={99}></Flex>
            <Flex
                w="full"
                h="full"
                p="24px"
                bg="rgba(11, 143, 204, 0.3)"
                borderRadius="16px"
                boxShadow="0 4px 30px rgba(31, 38, 135, 0.37)"
                backdropFilter="blur(1px)"
                border="1px solid rgba(255, 255, 255, 0.18)"
                gap={"18px"}>
                <Flex w={"full"} h={"full"} direction={"column"} gap={"18px"}>
                    <Flex w={"full"} h={"156px"} gap={"24px"}>
                        <Flex w={"fit-content"} h={"full"}>
                            <Flex
                                w="156px"
                                h="156px"
                                justifyContent="center"
                                alignItems="center"
                                bg="rgba(0, 0, 0, 0.45)"
                                borderRadius="50%"
                                backdropFilter="blur(5px)"
                                boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)">
                                <Avatar w="140px" h="140px" src="/avatar.jpg" />
                            </Flex>
                        </Flex>

                        <Flex
                            w={"full"}
                            h={"full"}
                            direction={"column"}
                            gap={"8px"}>
                            <Flex
                                w={"full"}
                                h={"full"}
                                direction={"column"}
                                gap={"2px"}
                                bg="rgba(0, 0, 0, 0.45)"
                                backdropFilter="blur(5px)"
                                boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
                                rounded={"20px"}
                                p={"12px"}>
                                <Text fontSize={"20px"} fontWeight={"bold"}>
                                    I Gusti Ngurah Arya Phalguna Abhimantra
                                    Putra
                                </Text>
                                <Text fontSize={"16px"} fontWeight={"semibold"}>
                                    Frontend Developer, UI/UX Designer, Project
                                    Manager
                                </Text>
                                <Text
                                    fontSize={"12px"}
                                    fontWeight={"extralight"}>
                                    Denpasar, Bali
                                </Text>
                            </Flex>
                            <Flex
                                w={"fit-content"}
                                h={"fit-content"}
                                gap={"12px"}
                                px={"12px"}
                                py={"8px"}
                                bg="rgba(0, 0, 0, 0.45)"
                                backdropFilter="blur(5px)"
                                boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
                                rounded={"28px"}>
                                <IconButton
                                    size={"xs"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <FiGithub></FiGithub>
                                </IconButton>
                                <IconButton
                                    size={"xs"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <FaInstagram></FaInstagram>
                                </IconButton>
                                <IconButton
                                    size={"xs"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <FiGithub></FiGithub>
                                </IconButton>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex position={"relative"} w={"full"} h={"90%"} gap={"18px"}>
                        <Flex
                            w={"full"}
                            h={"90%"}
                            bg="rgba(0, 0, 0, 0.45)"
                            backdropFilter="blur(5px)"
                            boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
                            rounded={"20px"}
                            p={"12px"}
                            direction={"column"}
                            gap={"8px"}>
                            <Flex>
                                <Text fontSize={"20px"} fontWeight={"semibold"}>
                                    Tech Stack
                                </Text>
                            </Flex>
                            <Flex wrap={"wrap"} gap={"14px"}>
                                <IconButton
                                    size={"xl"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <FaHtml5></FaHtml5>
                                </IconButton>
                                <IconButton
                                    size={"xl"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <IoLogoCss3></IoLogoCss3>
                                </IconButton>
                                <IconButton
                                    size={"xl"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <IoLogoJavascript></IoLogoJavascript>
                                </IconButton>
                                <IconButton
                                    size={"xl"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <RiTailwindCssFill></RiTailwindCssFill>
                                </IconButton>
                                <IconButton
                                    size={"xl"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <TbSql></TbSql>
                                </IconButton>
                                <IconButton
                                    size={"xl"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <FaJava></FaJava>
                                </IconButton>
                                <IconButton
                                    size={"xl"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <RiPhpFill></RiPhpFill>
                                </IconButton>
                                <IconButton
                                    size={"xl"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <FaLaravel></FaLaravel>
                                </IconButton>
                                <IconButton
                                    size={"xl"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <FaReact></FaReact>
                                </IconButton>
                                <IconButton
                                    size={"xl"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <SiNextdotjs></SiNextdotjs>
                                </IconButton>
                                <IconButton
                                    size={"xl"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <SiChakraui></SiChakraui>
                                </IconButton>
                                <IconButton
                                    size={"xl"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <FaFigma></FaFigma>
                                </IconButton>
                                <IconButton
                                    size={"xl"}
                                    rounded={"full"}
                                    variant={"outline"}
                                    border={"1px solid white"}>
                                    <SiPostman></SiPostman>
                                </IconButton>
                            </Flex>
                        </Flex>
                        <Flex
                        w={"30%"}
                        h={"110%"}
                        bg="rgba(0, 0, 0, 0.45)"
                        backdropFilter="blur(5px)"
                        boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
                        rounded={"20px"}
                        p={"12px"}
                        mt={"-42px"}
                        direction={"column"}
                        gap={"8px"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        >
                            <Text fontWeight={"semibold"} fontStyle={"italic"}>The only true wisdom is in knowing you know nothing.</Text>
                            <Text fontWeight={"semibold"} fontStyle={"italic"}>- Socrates</Text>
                        </Flex>
                    </Flex>

                    <Flex
                        w={"full"}
                        h={"30%"}
                        bg="rgba(0, 0, 0, 0.45)"
                        backdropFilter="blur(5px)"
                        boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
                        rounded={"20px"}
                        p={"12px"}
                        direction={"column"}
                        gap={"8px"}></Flex>
                </Flex>

                <Flex
                    w={"70%"}
                    h={"full"}
                    bg="rgba(0, 0, 0, 0.45)"
                    backdropFilter="blur(5px)"
                    boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
                    rounded={"20px"}></Flex>
            </Flex>
        </Flex>
    );
}
