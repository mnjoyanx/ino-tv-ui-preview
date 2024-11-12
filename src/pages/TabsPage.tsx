import React from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoTabs, InoTab, InoButton, InoCol } from "ino-ui-tv";
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

const TabsPage: React.FC = () => {
  const propsData = [
    {
      name: "`selectedIndex`",
      type: "number",
      description: "Index of the currently selected tab",
      required: false,
      defaultValue: "0",
    },
    {
      name: "`infinite`",
      type: "boolean",
      description: "Enable infinite scrolling through tabs",
      required: false,
      defaultValue: "false",
    },
    {
      name: "`changeByOnOk`",
      type: "boolean",
      description: "Change tabs only when OK/Enter is pressed",
      required: false,
      defaultValue: "false",
    },
    {
      name: "`onChange`",
      type: "(index: number) => void",
      description: "Callback when active tab changes",
      required: false,
      defaultValue: "undefined",
    },
  ];

  const tabPropsData = [
    {
      name: "`label`",
      type: "string",
      description: "Text label for the tab",
      required: true,
      defaultValue: "undefined",
    },
    {
      name: "`children`",
      type: "React.ReactNode",
      description: "Content to be displayed inside the tab",
      required: true,
      defaultValue: "undefined",
    },
    {
      name: "`disabled`",
      type: "boolean",
      description: "Whether the tab is disabled",
      required: false,
      defaultValue: "false",
    },
  ];

  const codeString = `import { InoTabs, InoTab, InoButton, InoCol } from "ino-ui-tv";

const MyComponent = () => {
  return (
    <InoTabs
      selectedIndex={0}
      changeByOnOk
      infinite
    >
      <InoTab label="Tab 1">
        <h2>Content for Tab 1</h2>
        <p>This is the content of the first tab</p>
      </InoTab>
      <InoTab label="Tab 2">
        <div>
          <h2>Content for Tab 2</h2>
          <InoButton>A button in tab 2</InoButton>
        </div>
      </InoTab>
      <InoTab label="Tab 3">
        <InoCol isActive>
          <InoButton>Button 1</InoButton>
          <InoButton>Button 2</InoButton>
        </InoCol>
      </InoTab>
    </InoTabs>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    toast("Code copied to clipboard!");
  };

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Tabs Component" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8 p-4 bg-amber-100 rounded-lg">
            <p className="text-sm text-gray-600 mb-4">
              Use ←→ keys to navigate between tabs, press OK/Enter to change tab
              content
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Basic Tabs</h3>
              <InoTabs
                selectedIndex={0}
                changeByOnOk
                infinite
              >
                <InoTab label="Tab 1">
                  <h2 className="text-lg font-semibold text-white">
                    Content for Tab 1
                  </h2>
                  <p className="text-white">
                    This is the content of the first tab
                  </p>
                </InoTab>
                <InoTab label="Tab 2">
                  <div>
                    <h2>Content for Tab 2</h2>
                    <InoButton>A button in tab 2</InoButton>
                  </div>
                </InoTab>
                <InoTab label="Tab 3">
                  <InoCol isActive>
                    <InoButton>Button 1</InoButton>
                    <InoButton>Button 2</InoButton>
                  </InoCol>
                </InoTab>
              </InoTabs>
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
          <div className="space-y-8">
            <Table>
              <TableCaption>InoTabs Component Props</TableCaption>
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

            <Table>
              <TableCaption>InoTab Component Props</TableCaption>
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
                {tabPropsData.map((prop) => (
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
          </div>
        </TabsContent>
      </Tabs>
    </PageContentWrapper>
  );
};

export default TabsPage;
