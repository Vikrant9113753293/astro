import React from 'react';
import Popup from 'reactjs-popup';
import { Box, Button, Heading, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';

const Contact = ({ isOpen, onClose }) => {
  return (
    <Popup trigger=
                {<button> Consult Now </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Welcome to Astro
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
  );
};

export default Contact;
