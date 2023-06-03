import React, { useState } from 'react';
import { Box, Heading, Text, VStack, Skeleton, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import Carousel from "./Carousel";
import Navbar from "./navbar";
import Contact from './card';

const sections = [
  {
    title: "Astrology for Clarity",
    description: "Get insights and guidance through astrology.",
  },
  {
    title: "Section 1",
    description: "This is the first section of the homepage.",
  },
  {
    title: "Section 2",
    description: "This is the second section of the homepage.",
  },
  {
    title: "Section 3",
    description: "This is the third section of the homepage.",
  },
];

function HomePage() {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleConsultClick = () => {
    setShowContactModal(true);
    console.log(showContactModal)
  };

  const handleCloseModal = () => {
    setShowContactModal(false);
    console.log(showContactModal)
  };
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };


  return (
    <VStack spacing={6} align="center" p={6} style={{
      backgroundImage: `url("https://img.freepik.com/free-photo/numerology-collage-concept_23-2150061748.jpg?w=996&t=st=1685797996~exp=1685798596~hmac=270128f6f39f1971596c110e24b3cf826df0976ecdc234c8c603289bacd016d0")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      padding: "4px",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      color: "white"
    }}>
      <Navbar />
      <Box p={4} bg="orange.200" textAlign="center">
        <Heading size="lg">{sections[0].title}</Heading>
        <Text mt={2}>{sections[0].description}</Text>
        <Button mt={4} colorScheme="teal" onClick={handleConsultClick}>
        <Contact />
        </Button>
        
       
      </Box>
      <Box p={5} bg="orange.200" textAlign="center">
        <Carousel />
      </Box>
      {sections.slice(1).map((section, index) => (
        <Box key={index} p={4} bg="gray.100" borderWidth={1} borderRadius="md" boxShadow="md">
          <Skeleton>
            <Heading size="lg">{section.title}</Heading>
            <Text mt={2}>{section.description}</Text>
          </Skeleton>
        </Box>
      ))}
    </VStack>
  );
}

export default HomePage;
