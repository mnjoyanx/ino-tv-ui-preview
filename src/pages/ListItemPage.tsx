import React, { useState } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoListItem, InoCol, InoTabs, InoTab, InoButton } from "ino-ui-tv";
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

const ListItemPage: React.FC = () => {
  const [, setActiveIndex] = useState(0);

  const propsData = [
    {
      name: "`title`",
      type: "string",
      description: "Primary text of the list item",
      required: true,
      defaultValue: "-",
    },
    {
      name: "`subtitle`",
      type: "string",
      description: "Secondary text displayed below the title",
      required: false,
      defaultValue: "undefined",
    },
    {
      name: "`isActive`",
      type: "boolean",
      description: "Whether the list item is currently focused",
      required: false,
      defaultValue: "false",
    },
    {
      name: "`onOk`",
      type: "() => void",
      description: "Callback when OK/Enter is pressed",
      required: false,
      defaultValue: "undefined",
    },
  ];

  const codeString = `import { InoListItem, InoCol, InoTabs, InoTab } from "ino-ui-tv";

const MyComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <InoTabs selectedIndex={0} changeByOnOk>
      <InoTab label="Basic List">
        <InoCol isActive onActiveChange={setActiveIndex}>
          <InoListItem 
            title="First Item"
            subtitle="Description for first item"
            isActive={activeIndex === 0}
            onOk={() => console.log('First item clicked')}
          />
          <InoListItem 
            title="Second Item"
            isActive={activeIndex === 1}
            onOk={() => console.log('Second item clicked')}
          />
          <InoListItem 
            title="Third Item"
            subtitle="With subtitle"
            isActive={activeIndex === 2}
            onOk={() => console.log('Third item clicked')}
          />
        </InoCol>
      </InoTab>
      
      <InoTab label="Media List">
        <InoCol isActive onActiveChange={setActiveIndex}>
          <InoListItem 
            title="Movie Title"
            subtitle="2024 • Action, Adventure"
            imageUrl="/movie-poster.jpg"
            isActive={activeIndex === 0}
          />
          <InoListItem 
            title="TV Series"
            subtitle="2023 • Drama"
            imageUrl="/series-poster.jpg"
            isActive={activeIndex === 1}
          />
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
      <PageIntroHeader title="List Item Component" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8 p-4 bg-amber-100 rounded-lg">
            <p className="text-sm text-gray-600 mb-4">
              Use ←→ keys to switch tabs, ↑↓ keys to navigate list items
            </p>

            <InoTabs
              selectedIndex={0}
              changeByOnOk
              size="small"
              direction="vertical"
            >
              <InoTab label="Basic List">
                <InoCol
                  isActive={true}
                  infinite={true}
                >
                  <InoListItem
                    // icon={<HomeIcon />}
                    rightContent="→"
                    onClick={() => alert("Home")}
                    onOk={() => alert("Home")}
                  >
                    Home
                  </InoListItem>
                  <InoListItem
                    // icon={<SettingsIcon />}
                    rightContent="→"
                    onClick={() => {}}
                  >
                    Settings
                  </InoListItem>
                  <InoListItem
                    // icon={<LogoutIcon />}
                    disabled
                    onClick={() => {}}
                  >
                    Logout
                  </InoListItem>
                </InoCol>
              </InoTab>

              <InoTab label="Media List">
                <InoCol
                  isActive
                  onActiveChange={setActiveIndex}
                >
                  <InoListItem>
                    <InoButton
                      size="small"
                      onClick={() => toast("Hello")}
                    >
                      Click me
                    </InoButton>
                  </InoListItem>
                </InoCol>
              </InoTab>
            </InoTabs>
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
            <TableCaption>List Item Component Props</TableCaption>
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

export default ListItemPage;
