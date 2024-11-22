import React, { useState } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoButton, InoRow, toast } from "ino-ui-tv";
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

const ToastPage: React.FC = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [isSecond, setIsSecond] = useState(false);

  const propsData = [
    {
      name: "`message`",
      type: "string",
      description: "Toast message content",
      required: true,
      defaultValue: "-",
    },
    {
      name: "`type`",
      type: "'success' | 'error' | 'info' | 'warning'",
      description: "Type of toast notification",
      required: false,
      defaultValue: "'info'",
    },
    {
      name: "`duration`",
      type: "number",
      description: "Duration in milliseconds",
      required: false,
      defaultValue: "3000",
    },
    {
      name: "`position`",
      type: "'top' | 'bottom'",
      description: "Toast position on screen",
      required: false,
      defaultValue: "'top'",
    },
  ];

  const codeString = `import { toast } from "ino-ui-tv";

const MyComponent = () => {
  return (
    <div className="space-y-4">
      <InoButton 
        onOk={() => toast("Default toast message")}
      >
        Show Default Toast
      </InoButton>

      <InoButton 
        onOk={() => toast.success("Success message")}
      >
        Show Success Toast
      </InoButton>

      <InoButton 
        onOk={() => toast.error("Error message")}
      >
        Show Error Toast
      </InoButton>

      <InoButton 
        onOk={() => toast.warning("Warning message", { duration: 5000 })}
      >
        Show Warning Toast (5s)
      </InoButton>

      <InoButton 
        onOk={() => toast.info("Info message", { position: "bottom" })}
      >
        Show Bottom Toast
      </InoButton>
    </div>
  );
};`;

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Toast Component" />

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
                Use ↑↓ keys to navigate between buttons{" "}
              </p>

              <InoRow
                isActive={isFirst}
                onDown={() => {
                  setIsFirst(false);
                  setIsSecond(true);
                }}
                onUp={() => {
                  setIsFirst(true);
                  setIsSecond(false);
                }}
              >
                <InoButton
                  size="small"
                  onClick={() => toast.success("Default toast message")}
                >
                  Default
                </InoButton>

                <InoButton
                  size="small"
                  onClick={() => toast.success("Success message")}
                >
                  Success
                </InoButton>

                <InoButton
                  size="small"
                  onClick={() =>
                    toast.error("Error message", { duration: 15000 })
                  }
                >
                  Error
                </InoButton>
              </InoRow>

              <InoRow
                isActive={isSecond}
                onDown={() => {
                  setIsSecond(true);
                  setIsFirst(false);
                }}
                onUp={() => {
                  setIsSecond(false);
                  setIsFirst(true);
                }}
              >
                <InoButton
                  size="small"
                  onClick={() =>
                    toast.warning("Warning message", {
                      duration: 5000,
                      position: "bottom",
                    })
                  }
                >
                  Warning (5s)
                </InoButton>

                <InoButton
                  size="small"
                  onClick={() =>
                    toast.info("Info message", { position: "bottom" })
                  }
                >
                  Show Bottom Toast
                </InoButton>
              </InoRow>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="relative bg-gray-900 p-4 rounded-lg mt-6">
            <button
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                toast.success("Code copied to clipboard!");
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

        <TabsContent value="props">
          <Table className="mt-8">
            <TableCaption>Toast Component Props</TableCaption>
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

export default ToastPage;
