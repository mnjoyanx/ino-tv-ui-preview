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
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const KeyboardPage: React.FC = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

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

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Keyboard Component" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-4 p-4 bg-amber-100 rounded-lg">
            <div className="flex gap-4">
              <button
                onClick={() => setIsKeyboardOpen(true)}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
              >
                Open Keyboard
              </button>
              {inputValue && (
                <div className="flex items-center">
                  <span>Current Value: {inputValue}</span>
                </div>
              )}
            </div>

            <InoKeyboard
              isOpen={isKeyboardOpen}
              onClose={() => setIsKeyboardOpen(false)}
              onChange={(value) => setInputValue(value)}
              variant="netflix"
              initialValue={inputValue}
            />
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
              {codeString}
            </SyntaxHighlighter>
          </div>
        </TabsContent>
      </Tabs>

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
              <TableCell className="p-4 border-b">{prop.description}</TableCell>
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
    </PageContentWrapper>
  );
};

export default KeyboardPage;
