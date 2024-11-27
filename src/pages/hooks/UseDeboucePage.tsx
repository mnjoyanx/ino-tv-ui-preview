import React, { useState } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";
import { useDebounce } from "ino-ui-tv";

const UseDeboucePage: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, {
    delay: 500,
  });

  const codeString = `import { useDebounce } from "ino-ui-tv";

const MyComponent = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  // debouncedValue will update 500ms after the last value change
  console.log(debouncedValue);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type something..."
    />
  );
};`;

  return (
    <PageContentWrapper>
      <PageIntroHeader title="useDebounce Hook" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8 p-4 bg-amber-100 rounded-lg">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Demo</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type something..."
                  className="p-2 border rounded"
                />
                <p className="text-sm text-gray-600">
                  Input value: {inputValue}
                </p>
                <p className="text-sm text-gray-600">
                  Debounced value (500ms): {debouncedValue}
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="relative bg-gray-900 p-4 rounded-lg mt-6">
            <button
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast("Code copied to clipboard!");
              }}
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

        <TabsContent value="api">
          <div className="space-y-4 mt-4">
            <h3 className="text-xl font-semibold">Parameters</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <code>value: T</code> - The value to debounce
              </li>
              <li>
                <code>delay: number</code> - The delay in milliseconds
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Returns</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <code>debouncedValue: T</code>
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </PageContentWrapper>
  );
};

export default UseDeboucePage;
