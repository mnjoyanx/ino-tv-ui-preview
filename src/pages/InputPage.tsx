import React, { useState } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoInput, InoKeyboard } from "ino-ui-tv";
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
import { toast } from "sonner";

const InputPage: React.FC = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [keyboardInputValue, setKeyboardInputValue] = useState("");
  const [activeInput, setActiveInput] = useState<1 | 2 | 3>(1);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const propsData = [
    {
      name: "`value`",
      type: "string",
      description: "Current value of the input",
      required: true,
      defaultValue: "''",
    },
    {
      name: "`onChange`",
      type: "(value: string) => void",
      description: "Callback function when input value changes",
      required: true,
      defaultValue: "undefined",
    },
    {
      name: "`placeholder`",
      type: "string",
      description: "Placeholder text when input is empty",
      required: false,
      defaultValue: "''",
    },
    {
      name: "`isActive`",
      type: "boolean",
      description: "Whether the input is currently active/focused",
      required: true,
      defaultValue: "false",
    },
    {
      name: "`showCursor`",
      type: "boolean",
      description: "Whether to show the cursor in the input",
      required: false,
      defaultValue: "true",
    },
    {
      name: "`onOk`",
      type: "() => void",
      description: "Callback when OK/Enter is pressed",
      required: false,
      defaultValue: "undefined",
    },
    {
      name: "`onBack`",
      type: "() => void",
      description: "Callback when Back is pressed",
      required: false,
      defaultValue: "undefined",
    },
    {
      name: "`onFocus`",
      type: "() => void",
      description: "Callback when input receives focus",
      required: false,
      defaultValue: "undefined",
    },
    {
      name: "`onLeft`",
      type: "() => void",
      description: "Callback when left arrow is pressed",
      required: false,
      defaultValue: "undefined",
    },
    {
      name: "`onRight`",
      type: "() => void",
      description: "Callback when right arrow is pressed",
      required: false,
      defaultValue: "undefined",
    },
  ];

  const codeString = `import { InoInput, InoKeyboard } from "ino-ui-tv";

const MyComponent = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [keyboardInputValue, setKeyboardInputValue] = useState("");
  const [activeInput, setActiveInput] = useState<1 | 2 | 3>(1);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  return (
    <div className="space-y-4">
      <InoInput
        value={inputValue1}
        onChange={setInputValue1}
        placeholder="Input without cursor..."
        showCursor={false}
        isActive={activeInput === 1}
        onOk={() => console.log("OK pressed")}
        onDown={() => setActiveInput(2)}
      />

      <InoInput
        value={inputValue2}
        onChange={setInputValue2}
        placeholder="Input with cursor..."
        showCursor={true}
        isActive={activeInput === 2}
        onOk={() => console.log("OK pressed")}
        onUp={() => setActiveInput(1)}
      />

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Input with Keyboard</h3>
        <p className="text-sm text-gray-600">
          Current value: {keyboardInputValue}
        </p>
        <div className="max-w-md">
          <InoInput
            value={keyboardInputValue}
            onChange={setKeyboardInputValue}
            placeholder="Press OK to open keyboard..."
            showCursor={true}
            isActive={activeInput === 3}
            onOk={() => setIsKeyboardOpen(true)}
            onUp={() => setActiveInput(2)}
          />
        </div>
        <div className="h-[45vh] relative">
          {isKeyboardOpen && (
            <InoKeyboard
              isOpen={isKeyboardOpen}
              onClose={() => setIsKeyboardOpen(false)}
              onChange={(value) => setKeyboardInputValue(value)}
              variant="default"
              infinite={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    toast("Code copied to clipboard!");
  };

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Input Component" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8 p-4 bg-amber-100 rounded-lg">
            <div className="space-y-4">
              <p className="text-sm text-gray-600 mb-4">
                Use ↑↓ keys to navigate between inputs
              </p>

              {/* Input without cursor */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Input without cursor</h3>
                <p className="text-sm text-gray-600">
                  Current value: {inputValue1}
                </p>
                <div className="max-w-md">
                  <InoInput
                    value={inputValue1}
                    onChange={setInputValue1}
                    placeholder="Input without cursor..."
                    showCursor={false}
                    isActive={activeInput === 1 && !isKeyboardOpen}
                    onOk={() => setIsKeyboardOpen(true)}
                    onDown={() => setActiveInput(2)}
                  />
                </div>
              </div>

              {/* Input with cursor */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Input with cursor</h3>
                <p className="text-sm text-gray-600">
                  Current value: {inputValue2}
                </p>
                <div className="max-w-md">
                  <InoInput
                    value={inputValue2}
                    onChange={setInputValue2}
                    placeholder="Input with cursor..."
                    showCursor={activeInput === 2}
                    isActive={activeInput === 2 && !isKeyboardOpen}
                    onOk={() => setIsKeyboardOpen(true)}
                    onUp={() => setActiveInput(1)}
                    onDown={() => setActiveInput(3)}
                  />
                </div>
              </div>

              {/* New Keyboard Input Example */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Input with Keyboard</h3>
                <p className="text-sm text-gray-600">
                  Current value: {keyboardInputValue}
                </p>
                <div className="max-w-md">
                  <InoInput
                    value={keyboardInputValue}
                    placeholder="Press OK to open keyboard..."
                    showCursor={activeInput === 3}
                    isActive={activeInput === 3}
                    onOk={() => setIsKeyboardOpen(true)}
                    onUp={() => setActiveInput(2)}
                  />
                </div>
                <div className="h-[45vh] relative">
                  {isKeyboardOpen && (
                    <InoKeyboard
                      isOpen={isKeyboardOpen}
                      onClose={() => setIsKeyboardOpen(false)}
                      onChange={(value) => {
                        switch (activeInput) {
                          case 1:
                            setInputValue1((val) => val + value);
                            break;
                          case 2:
                            setInputValue2((val) => val + value);
                            break;
                          case 3:
                            setKeyboardInputValue((val) => val + value);
                            break;
                          default:
                            break;
                        }
                      }}
                      variant="default"
                      infinite={true}
                    />
                  )}
                </div>
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
              {codeString}
            </SyntaxHighlighter>
          </div>
        </TabsContent>

        <TabsContent value="props">
          <Table className="mt-8">
            <TableCaption>Input Component Props</TableCaption>
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

export default InputPage;
