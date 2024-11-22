import React, { useState } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoKeyboard } from "ino-ui-tv";
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
import { ArrowBigUp, ArrowRight, ArrowLeft, Copy, Delete } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { EnterIcon } from "@radix-ui/react-icons";

const KeyboardPage: React.FC = () => {
  const [defaultInputValue, setDefaultInputValue] = useState("");
  const [netflixInputValue, setNetflixInputValue] = useState("");
  const [numericInputValue, setNumericInputValue] = useState("");
  const [customInputValue, setCustomInputValue] = useState("");

  // Keyboard visibility states
  const [isDefaultKeyboardOpen] = useState(true);
  const [isNetflixKeyboardOpen] = useState(true);
  const [isNumericKeyboardOpen] = useState(true);
  const [isCustomKeyboardOpen] = useState(true);

  const propsData = [
    {
      name: "`isOpen`",
      type: "boolean",
      description: "Controls the visibility of the keyboard",
      required: true,
      defaultValue: "false",
    },
    {
      name: "`onClose`",
      type: "function",
      description: "Callback function when keyboard is closed",
      required: true,
      defaultValue: "() => void",
    },
    {
      name: "`onChange`",
      type: "function",
      description: "Callback function when input value changes",
      required: true,
      defaultValue: "(value: string) => void",
    },
    {
      name: "`variant`",
      type: "'netflix' | 'default'",
      description: "Visual style variant of the keyboard",
      required: false,
      defaultValue: "'default'",
    },
    {
      name: "`initialValue`",
      type: "string",
      description: "Initial value for the keyboard input",
      required: false,
      defaultValue: "''",
    },
  ];

  const codeString = `import { InoKeyboard } from "ino-ui-tv";

const MyComponent = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <button onClick={() => setIsKeyboardOpen(true)}>
        Open Keyboard
      </button>
      
      <InoKeyboard
        isOpen={isKeyboardOpen}
        onClose={() => setIsKeyboardOpen(false)}
        onChange={(value) => setInputValue(value)}
        variant="netflix"
        initialValue={inputValue}
      />
    </>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    alert("Code copied to clipboard!");
  };

  // Custom keyboard layout example
  const customLayout = [
    [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
    ],
    [
      { label: "a", value: "a" },
      { label: "b", value: "b" },
      { label: "c", value: "c" },
      { label: "d", value: "d" },
    ],
  ];

  const customLayout2 = [
    [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "7", value: "7" },
      { label: "8", value: "8" },
      { label: "9", value: "9" },
    ],
    [
      { label: "a", value: "a" },
      { label: "b", value: "b" },
      { label: "c", value: "c" },
      { label: "d", value: "d" },
      { label: "e", value: "e" },
      { label: "f", value: "f" },
      { label: "g", value: "g" },
      { label: "h", value: "h" },
      { label: "i", value: "i" },
    ],
    [
      { label: "j", value: "j" },
      { label: "k", value: "k" },
      { label: "l", value: "l" },
      { label: "m", value: "m" },
      { label: "n", value: "n" },
      { label: "o", value: "o" },
      { label: "p", value: "p" },
      { label: "q", value: "q" },
      { label: "r", value: "r" },
    ],
    [
      { label: "s", value: "s" },
      { label: "t", value: "t" },
      { label: "u", value: "u" },
      { label: "v", value: "v" },
      { label: "w", value: "w" },
      { label: "x", value: "x" },
      { label: "y", value: "y" },
      { label: "z", value: "z" },
      { label: ".", value: "." },
    ],
    [
      { label: <ArrowBigUp />, value: "shift" },
      { label: "space", value: "space" },
      { label: <Delete />, value: "backspace" },
      { label: <EnterIcon />, value: "enter" },
      { label: "clear", value: "clear" },
      { label: <ArrowLeft />, value: "left" },
      { label: <ArrowRight />, value: "right" },
    ],
  ];

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Keyboard Component" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8 p-4 bg-amber-100 rounded-lg">
            {/* Default Keyboard */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Default Keyboard</h3>
              <p className="text-sm text-gray-600">
                Current Value: {defaultInputValue}
              </p>
              <div className="h-[45vh] relative">
                <InoKeyboard
                  isOpen={isDefaultKeyboardOpen}
                  onClose={() => {}}
                  onChange={setDefaultInputValue}
                  variant="default"
                  infinite={true}
                />
              </div>
            </div>

            {/* Netflix Keyboard */}
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-semibold">Netflix Keyboard</h3>
              <p className="text-sm text-gray-600">
                Current Value: {netflixInputValue}
              </p>
              <div className="h-[45vh] relative">
                <InoKeyboard
                  isOpen={isNetflixKeyboardOpen}
                  onClose={() => {}}
                  onChange={setNetflixInputValue}
                  variant="netflix"
                />
              </div>
            </div>

            {/* Numeric Keyboard */}
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-semibold">Numeric Keyboard</h3>
              <p className="text-sm text-gray-600">
                Current Value: {numericInputValue}
              </p>
              <div className="h-[45vh] relative">
                <InoKeyboard
                  isOpen={isNumericKeyboardOpen}
                  onClose={() => {}}
                  onChange={setNumericInputValue}
                  variant="numeric"
                />
              </div>
            </div>

            {/* Custom Keyboard */}
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-semibold">Custom Keyboard</h3>
              <p className="text-sm text-gray-600">
                Current Value: {customInputValue}
              </p>
              <div className="h-[45vh] relative">
                <InoKeyboard
                  isOpen={isCustomKeyboardOpen}
                  onClose={() => {}}
                  onChange={setCustomInputValue}
                  customLayout={customLayout2}
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="relative bg-gray-900 p-4 rounded-lg mt-6">
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 p-1 bg-white rounded hover:bg-gray-300"
            >
              <Copy className="w-5 h-5" />
            </button>
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
            >
              {`// Custom keyboard layout
const customLayout = ${JSON.stringify(customLayout, null, 2)}

// Custom keyboard implementation
<InoKeyboard
  isOpen={isOpen}
  onClose={onClose}
  onChange={onChange}
  customLayout={customLayout}
/>`}
            </SyntaxHighlighter>
          </div>
        </TabsContent>

        <TabsContent value="props">
          <Table className="mt-8">
            <TableCaption>Keyboard Component Props</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-blue-200 font-semibold text-gray-700">
                  Prop
                </TableHead>
                <TableHead className="bg-blue-200 font-semibold text-gray-700">
                  Type
                </TableHead>
                <TableHead className="bg-blue-200 font-semibold text-gray-700">
                  Description
                </TableHead>
                <TableHead className="bg-blue-200 font-semibold text-gray-700">
                  Required
                </TableHead>
                <TableHead className="bg-blue-200 font-semibold text-gray-700">
                  Default
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
                  <TableCell className="p-4 border-b">
                    {prop.description}
                  </TableCell>
                  <TableCell className="p-4 border-b">
                    {prop.required ? "Yes" : "No"}
                  </TableCell>
                  <TableCell className="p-4 border-b">
                    {prop.defaultValue}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </PageContentWrapper>
  );
};

export default KeyboardPage;
