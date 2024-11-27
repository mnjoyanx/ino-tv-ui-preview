import React, { useState } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";
import { useInterval } from "ino-ui-tv";

const UseIntervalPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(
    () => {
      setCount((c) => c + 1);
    },
    isRunning ? 1000 : null
  );

  const codeString = `import { useInterval } from "ino-ui-tv";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(
    () => {
      setCount(c => c + 1);
    },
    isRunning ? 1000 : null // Pass null to stop the interval
  );

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};`;

  return (
    <PageContentWrapper>
      <PageIntroHeader title="useInterval Hook" />

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
                <p>Count: {count}</p>
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {isRunning ? "Stop" : "Start"}
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
                <code>callback: () ={">"} void</code> - The function to call
                every interval
              </li>
              <li>
                <code>delay: number | null</code> - The delay in milliseconds
                between each call to the callback function. Pass null to stop
                the interval
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Returns</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <code>clearInterval: () ={">"} void</code> - A function to clear
                the interval
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </PageContentWrapper>
  );
};

export default UseIntervalPage;
