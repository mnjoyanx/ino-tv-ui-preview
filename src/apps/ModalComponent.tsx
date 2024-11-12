import { FC, useState } from "react";
import { Modal } from "ino-ui-tv";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const ModalComponent: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSecondModalOpen = () => setIsSecondModalOpen(true);
  const handleSecondModalClose = () => setIsSecondModalOpen(false);

  const propsData = [
    {
      name: "`isOpen`",
      type: "boolean",
      description: "Indicates if the modal is currently open.",
    },
    {
      name: "`onClose`",
      type: "function",
      description: "Callback function triggered when the modal is closed.",
    },
    {
      name: "`title`",
      type: "string",
      description: "The title displayed at the top of the modal.",
    },
    {
      name: "`children`",
      type: "ReactNode",
      description: "The content displayed inside the modal.",
    },
    {
      name: "`okBtnText`",
      type: "string",
      description: "Text for the OK button.",
    },
    {
      name: "`cancelBtnText`",
      type: "string",
      description: "Text for the Cancel button.",
    },
  ];

  const codeString = `  import { useState } from "react";
  import { Modal } from "ino-ui-tv";

  const [isOpen, setIsOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  
  const handleSecondModalOpen = () => setIsSecondModalOpen(true);
  const handleSecondModalClose = () => setIsSecondModalOpen(false);

  <Modal
    isOpen={isOpen}
    onClose={handleClose}
    title="First Modal"
    okBtnText="Open Second Modal"
    cancelBtnText="Cancel"
    onOk={handleSecondModalOpen}
  >
    <p className="p-4 text-gray-700">This is the first modal content.</p>
  </Modal>

  <Modal
    isOpen={isSecondModalOpen}
    onClose={handleSecondModalClose}
    title="Second Modal"
    okBtnText="OK"
    cancelBtnText="Cancel"
  >
    <p className="p-4 text-gray-700">This is the second modal content.</p>
  </Modal>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Modal Component Example
      </h2>
      <p className="mb-6 text-gray-600">
        This component demonstrates how to use a modal.
      </p>

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="bg-amber-100 rounded-lg p-4">
            <button
              onClick={handleOpen}
              className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 p-2 rounded"
            >
              Open Modal
            </button>
            <Modal
              isOpen={isOpen}
              onClose={handleClose}
              title="First Modal"
              okBtnText="Open Second Modal"
              cancelBtnText="Cancel"
              onOk={handleSecondModalOpen}
            >
              <p className="p-4 text-gray-700">
                This is the first modal content.
              </p>
            </Modal>
            <Modal
              isOpen={isSecondModalOpen}
              onClose={handleSecondModalClose}
              title="Second Modal"
              okBtnText="OK"
              cancelBtnText="Cancel"
              showCloseIcon={false}
              size="full"
            >
              <p className="p-4 text-gray-700">
                This is the second modal content.
              </p>
            </Modal>
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="relative bg-gray-900 p-4 rounded-lg mt-6">
            <button
              onClick={handleCopy}
              className="absolute top-12 right-12 p-1 bg-white rounded hover:bg-gray-300"
            >
              <Copy className="w-5 h-5" />
            </button>
            <SyntaxHighlighter
              language="jsx"
              style={vscDarkPlus}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </TabsContent>
      </Tabs>

      <Table className="mt-6 border border-gray-200 rounded-lg shadow-md">
        <TableCaption className="text-gray-500">Modal Props</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-blue-200 font-semibold text-gray-700">
              Prop/Callback
            </TableHead>
            <TableHead className="bg-blue-200 font-semibold text-gray-700">
              Type
            </TableHead>
            <TableHead className="bg-blue-200 font-semibold text-gray-700">
              Description
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {propsData.map((prop) => (
            <TableRow
              key={prop.name}
              className="hover:bg-gray-50"
            >
              <TableCell className="p-4 border-b">{prop.name}</TableCell>
              <TableCell className="p-4 border-b">{prop.type}</TableCell>
              <TableCell className="p-4 border-b">{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ModalComponent;
