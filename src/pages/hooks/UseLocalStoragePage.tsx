import React from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";
import { useLocalStorage } from "ino-ui-tv";

const UseLocalStoragePage: React.FC = () => {
  const [count, setCount] = useLocalStorage("demo-count", 0);

  const codeString = `import { useLocalStorage } from "ino-ui-tv";

const MyComponent = () => {
  const [value, setValue] = useLocalStorage('my-key', 'default value');

  return (
    <div>
      <p>Stored value: {value}</p>
      <button onClick={() => setValue('new value')}>
        Update Value
      </button>
    </div>
  );
};`;

  return (
    <PageContentWrapper>
      <PageIntroHeader title="useLocalStorage Hook" />

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
              <p className="text-sm text-gray-600">
                This counter persists across page reloads
              </p>
              <div className="flex items-center gap-4">
                <p>Count: {count}</p>
                <button
                  onClick={() => setCount((prev) => prev + 1)}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Increment
                </button>
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
                <code>key: string</code> - The localStorage key to store the
                value under
              </li>
              <li>
                <code>initialValue: T</code> - The initial value if no value
                exists in localStorage
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Returns</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <code>[storedValue: T, setValue: (value: T) ={">"} void]</code>
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </PageContentWrapper>
  );
};

export default UseLocalStoragePage;
