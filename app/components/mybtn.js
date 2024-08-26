'use client'
import { useState } from "react";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio, Input, Textarea } from "@nextui-org/react";
export default function MyButton({ children, reload }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [name, setName] = useState("")

    const handleAdd = async () => {
        const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: title, content: content, name: name }),
        });
        const result = await response.json();
        reload()

    }

    return (
        <>
            <Button onPress={onOpen} >
                {children}
            </Button>
            <Modal
                isOpen={isOpen}
                placement={"center"}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <Input label="Topic" onChange={(e) => setTitle(e.target.value)} />
                            </ModalHeader>
                            <ModalBody>
                                <Textarea label="Write your content here..." onChange={(e) => setContent(e.target.value)} />
                            </ModalBody>
                            <ModalBody>
                                <Input label="Name" onChange={(e) => setName(e.target.value)} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose} onClick={handleAdd}>
                                    Add
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}