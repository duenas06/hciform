import { Heading, Flex, Button, Stack, HStack,} from "@chakra-ui/react";
import Head from "next/head";
import Colors from "../src/Constants/Colors";
import useWindowSize from "../src/CustomHooks/UseWindows";
import React, {useContext, useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  useToast
} from "@chakra-ui/react"

export default function Home() {
  const getWindowSize = useWindowSize();
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [Mname, setMname] = useState('');
  const [Mnumber, setMnumber] = useState('');
  const [Email, setEmail] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    // clearing the values
    setFname("");
    setLname("");
    setMname("");
    setMnumber("");
    setEmail("");
  }
  async function submit()
  {
    if(
      Fname === "" ||
      Lname === "" ||
      Mname === "" ||
      Mnumber === "" ||
      Email === ""){
        toast({
          title: "Empty text field found!",
          description: "Please fill out all the required text fields",
          status: "error",
          duration: 2500,
          isClosable: true,
          position: "bottom-right",
        });
      }
      else {
        onOpen()

        setFname("");
        setLname("");
        setMname("");
        setMnumber("");
        setEmail("");
      }
  }
  return (
    <>
      <Head>
        <title>Index</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex {...styleProps.indexWrapper} >

        <Flex flexDirection={getWindowSize.width < 960 ? "column" : "row"}>
        
        </Flex>
        <Flex
          w={
            getWindowSize.width < 960
              ? getWindowSize.width * 0.7
              : getWindowSize.width * 0.35}
          h={
            getWindowSize.height < 760
              ? getWindowSize.height * 1.432
              : getWindowSize.height * 1}
          {...styleProps.formCardContainer}
        >
          <HStack>
            <Heading>HUMAN</Heading>
            <Heading>COMPUTER </Heading>
            <Heading>INTERACTION</Heading>
          </HStack>

          <FormControl mt= "18vh" id="first-name" isRequired>
            <FormLabel >First name</FormLabel>
            <Input value= {Fname} onChange={(e) => setFname(e.target.value)} placeholder="First name" />
          </FormControl>
          <FormControl  mt= "2vh" id="last-name" isRequired>
            <FormLabel>Last name</FormLabel>
            <Input value= {Lname} onChange={(e) => setLname(e.target.value)} placeholder="Last name" />
          </FormControl>
          
          <FormControl mt= "2vh" id="middle-name" isRequired>
            <FormLabel>Middle name</FormLabel>
            <Input value= {Mname} onChange={(e) => setMname(e.target.value)} placeholder="Middle name" />
          </FormControl>

          <FormControl mt= "2vh" id="mobile-number" isRequired>
            <FormLabel>Mobile Number</FormLabel>
            <Input value= {Mnumber} onChange={(e) => setMnumber(e.target.value)} placeholder="Mobile Number" />
          </FormControl>

          <FormControl mt= "2vh" id="email-address" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input value= {Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" type = "email"/>
          </FormControl>
          <HStack mt= "5vh" justifyContent = "center" width="100%">
          <Button
            variant="solid"
            backgroundColor={Colors.green}
            color={Colors.white}
            colorScheme="cyan"
            mr={5}
            width = "25vh"
            onClick={submit}
          >
            SUBMIT
          </Button>

          <Button
            variant="solid"
            backgroundColor={Colors.green}
            color={Colors.white}
            colorScheme="cyan"
            width = "25vh"
            onClick ={handleSubmit}
          >
            CLEAR ALL
          </Button>
          </HStack>
        </Flex>
          
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Personal Information</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
              <Text>First Name: {Fname}</Text>
              <Text>Last Name: {Lname}</Text>
              <Text>Middle name: {Mname}</Text>
              <Text>Mobile Number: {Mnumber}</Text>
              <Text>Email Address: {Email}</Text>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={1} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

      </Flex>
    </>
  );
}

const styleProps = {
  indexWrapper: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.white,
    bgColor: Colors.black,
  },
  formCardContainer: {
    flexDirection: "column",
    bgColor: Colors.grey,
    alignItems: "left",
    justifyContent: "center",
    borderRadius: "lg",
    shadow: "lg",
    padding: "5vh",
  },
};