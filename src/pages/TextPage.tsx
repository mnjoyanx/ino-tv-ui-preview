import React, { useState } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoText } from "ino-ui-tv";
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
import { Copy, Info } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

const TextPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const propsData = [
    {
      name: "`variant`",
      type: "'heading' | 'subheading' | 'body' | 'caption'",
      description: "Text style variant",
      required: false,
      defaultValue: "'body'",
    },
    {
      name: "`color`",
      type: "'primary' | 'secondary' | 'success' | 'error'",
      description: "Text color variant",
      required: false,
      defaultValue: "'primary'",
    },
    {
      name: "`marquee`",
      type: "boolean",
      description: "Enable marquee animation for overflowing text",
      required: false,
      defaultValue: "false",
    },
    {
      name: "`marqueeSpeed`",
      type: "number",
      description: "Speed of marquee animation in seconds",
      required: false,
      defaultValue: "5",
    },
    {
      name: "`delay`",
      type: "number",
      description: "Delay before marquee animation starts (ms)",
      required: false,
      defaultValue: "3000",
    },
    {
      name: "`isActive`",
      type: "boolean",
      description: "Whether the text is currently focused",
      required: false,
      defaultValue: "false",
    },
  ];

  const codeString = `import { InoText } from "ino-ui-tv";

const MyComponent = () => {
  return (
    <div className="space-y-4">
      {/* Basic text */}
      <InoText variant="heading" color="primary">
        Heading Text
      </InoText>

      {/* Marquee text */}
      <div className="w-[300px]">
        <InoText
          marquee
          variant="body"
          color="secondary"
          marqueeSpeed={5}
          delay={3000}
          isActive={true}
        >
          This is a long text that will animate when it overflows the container
        </InoText>
      </div>

      {/* Different variants */}
      <InoText variant="subheading">Subheading Text</InoText>
      <InoText variant="body">Body Text</InoText>
      <InoText variant="caption" color="secondary">
        Caption Text
      </InoText>
    </div>
  );
};`;

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Text Component" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8 p-4 bg-amber-100 rounded-lg">
            <div className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Text Examples</h3>
                <InoText
                  variant="h1"
                  color="primary"
                >
                  h1 Text
                </InoText>
                <InoText
                  variant="h2"
                  color="secondary"
                >
                  h2 Text with secondary color
                </InoText>
                <InoText
                  variant="h3"
                  color="success"
                >
                  h3 Text with success color
                </InoText>
                <InoText
                  variant="h4"
                  color="error"
                >
                  h4 Text with error color
                </InoText>
                <InoText variant="body">Body Text</InoText>
                <InoText
                  variant="caption"
                  color="secondary"
                >
                  Caption Text
                </InoText>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Marquee Text</h3>
                <p className="text-sm">
                  <Info className="w-4 h-4 inline-block mr-1 text-blue-500" />
                  The marquee animation will start after 2 seconds delay in case
                  `isActive` is true. Press the button below to toggle the
                  active state.
                </p>
                <button
                  onClick={() => setIsActive(!isActive)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  {isActive ? "Stop" : "Start"}
                </button>

                <div className="w-[300px] border border-gray-300 p-2 rounded">
                  <InoText
                    marquee
                    variant="body"
                    color="secondary"
                    marqueeSpeed={5}
                    delay={2000}
                    isActive={isActive}
                  >
                    This is a long text that will animate when it overflows the
                    container
                  </InoText>
                </div>
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

        <TabsContent value="props">
          <Table className="mt-8">
            <TableCaption>Text Component Props</TableCaption>
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

export default TextPage;
