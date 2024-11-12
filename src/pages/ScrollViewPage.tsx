import React from "react";
import { ScrollView } from "ino-ui-tv";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
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

const ScrollViewPage: React.FC = () => {
  const propsData = [
    {
      name: "`isActive`",
      type: "boolean",
      description:
        "Controls if the ScrollView is currently active for navigation",
      required: true,
    },
    {
      name: "`onReachBottom`",
      type: "() => void",
      description:
        "Callback function triggered when scrolling reaches the bottom",
      required: false,
    },
    {
      name: "`onOk`",
      type: "() => void",
      description: "Callback function triggered when OK/Enter is pressed",
      required: false,
    },
    {
      name: "`onBack`",
      type: "() => void",
      description: "Callback function triggered when Back is pressed",
      required: false,
    },
    {
      name: "`children`",
      type: "ReactNode",
      description: "Content to be displayed inside the ScrollView",
      required: true,
    },
  ];

  const codeString = `import { ScrollView } from "ino-ui-tv";

const MyComponent = () => {
  return (
    <div className="w-[300px] h-[300px] overflow-hidden">
      <ScrollView
        isActive={true}
        onReachBottom={() => console.log("Reached bottom")}
        onOk={() => alert("OK pressed")}
        onBack={() => alert("Back pressed")}
      >
        <h2>Privacy Policy</h2>
        <div className="content">
          {/* Your scrollable content here */}
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </ScrollView>
    </div>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    toast("Code copied to clipboard!");
  };

  const loremIpsum =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`.repeat(
      5
    );

  return (
    <PageContentWrapper>
      <PageIntroHeader title="ScrollView Component" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="bg-amber-100 rounded-lg p-4">
            <p className="mt-4 text-sm text-gray-600">
              Use ↑↓ keys to navigate
            </p>
            <div className="w-[300px] h-[300px] overflow-hidden border border-gray-200 rounded-lg bg-white">
              <ScrollView
                isActive={true}
                onReachBottom={() => toast("Reached bottom!")}
                onOk={() => toast("OK pressed!")}
                onBack={() => toast("Back pressed!")}
              >
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
                  <p className="text-gray-700">{loremIpsum}</p>
                </div>
              </ScrollView>
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
      </Tabs>

      <Table className="mt-6 border border-gray-200 rounded-lg shadow-md">
        <TableCaption className="text-gray-500">ScrollView Props</TableCaption>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PageContentWrapper>
  );
};

export default ScrollViewPage;
