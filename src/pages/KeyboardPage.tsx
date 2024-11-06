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
  const [isDefaultKeyboardOpen] = useState(true);
  const [isNetflixKeyboardOpen] = useState(true);
  const [isCustomKeyboardOpen] = useState(true);
  const [defaultInputValue, setDefaultInputValue] = useState("");
  const [netflixInputValue, setNetflixInputValue] = useState("");
  const [customInputValue, setCustomInputValue] = useState("");

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
    // [
    //   {
    //     label: (
    //       <svg
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         width={24}
    //         height={24}
    //       >
    //         <path
    //           d="M8 17V12H5.6302C4.71068 12 4.27858 10.8635 4.96584 10.2526L10.6713 5.18109C11.429 4.50752 12.571 4.50752 13.3287 5.18109L19.0342 10.2526C19.7214 10.8635 19.2893 12 18.3698 12H16V17C16 18.1046 15.1046 19 14 19H10C8.89543 19 8 18.1046 8 17Z"
    //           stroke="#fff"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         />
    //       </svg>
    //     ),
    //     value: "shift",
    //   },
    // ],
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
              {defaultInputValue && (
                <div className="flex items-center">
                  <span>Current Value: {defaultInputValue}</span>
                </div>
              )}
              <div className="h-[45vh] relative">
                <InoKeyboard
                  isOpen={isDefaultKeyboardOpen}
                  onClose={() => {}}
                  onChange={(value) => setDefaultInputValue(value)}
                  variant="default"
                  infinite={true}
                />
              </div>
            </div>

            {/* Netflix Keyboard */}
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-semibold">Netflix Keyboard</h3>
              {netflixInputValue && (
                <div className="flex items-center">
                  <span>Current Value: {netflixInputValue}</span>
                </div>
              )}
              <div className="h-[55vh] relative overflow-hidden rounded-lg">
                <InoKeyboard
                  isOpen={isNetflixKeyboardOpen}
                  onClose={() => {}}
                  onChange={(value) => setNetflixInputValue(value)}
                  variant="netflix"
                />
              </div>
            </div>

            {/* Custom Keyboard */}
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-semibold">Custom Keyboard</h3>
              {customInputValue && (
                <div className="flex items-center">
                  <span>Current Value: {customInputValue}</span>
                </div>
              )}
              <div className="h-[28vh] relative">
                <InoKeyboard
                  isOpen={isCustomKeyboardOpen}
                  onClose={() => {}}
                  onChange={(value) => setCustomInputValue(value)}
                  customLayout={customLayout}
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
