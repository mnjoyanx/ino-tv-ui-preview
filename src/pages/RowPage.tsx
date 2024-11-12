import React, { useState } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoRow, InoButton } from "ino-ui-tv";
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

const RowPage: React.FC = () => {
  const [, setActiveIndex] = useState(0);

  const propsData = [
    {
      name: "`isActive`",
      type: "boolean",
      description: "Controls if the row is currently active",
      required: true,
      defaultValue: "false",
    },
    {
      name: "`infinite`",
      type: "boolean",
      description: "Enables infinite scrolling within the row",
      required: false,
      defaultValue: "false",
    },
    {
      name: "`onActiveChange`",
      type: "(index: number) => void",
      description: "Callback when active item changes",
      required: false,
      defaultValue: "undefined",
    },
  ];

  const codeString = `import { InoRow, InoButton } from "ino-ui-tv";

const MyComponent = () => {

  return (
    <InoRow
      isActive={true}
      infinite={true}
      onActiveChange={(index) => console.log(index)}
    >
      <InoButton>Button 1</InoButton>
      <InoButton>Button 2</InoButton>
      <InoButton>Button 3</InoButton>
      <InoButton>Button 4</InoButton>
    </InoRow>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    toast("Code copied to clipboard!");
  };

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Row Component" />

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
                Use ← → keys to navigate between buttons
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Row</h3>
                <InoRow
                  isActive={true}
                  onActiveChange={(index) => console.log(index)}
                >
                  <InoButton>Button 1</InoButton>
                  <InoButton>Button 2</InoButton>
                  <InoButton>Button 3</InoButton>
                  <InoButton>Button 4</InoButton>
                </InoRow>
              </div>

              <div className="space-y-4 mt-8">
                <h3 className="text-lg font-semibold">Infinite Row</h3>
                <InoRow
                  isActive={true}
                  infinite={true}
                  onActiveChange={(index) => setActiveIndex(index)}
                >
                  <InoButton index={0}>Button 1</InoButton>
                  <InoButton index={1}>Button 2</InoButton>
                  <InoButton index={2}>Button 3</InoButton>
                  <InoButton index={3}>Button 4</InoButton>
                </InoRow>
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
            <TableCaption>Row Component Props</TableCaption>
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

export default RowPage;
