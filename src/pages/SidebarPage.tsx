import React, { useState } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoSidebar, InoButton } from "ino-ui-tv";
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
import {
  Copy,
  UserIcon,
  SettingsIcon,
  HomeIcon,
  SearchIcon,
} from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

const SidebarPage: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sidebarItems = [
    { id: "home", label: "Home", icon: <HomeIcon /> },
    { id: "search", label: "Search", icon: <SearchIcon /> },
    { id: "settings", label: "Settings", icon: <SettingsIcon /> },
    { id: "profile", label: "Profile", icon: <UserIcon /> },
  ];

  const [selectedItem, setSelectedItem] = useState<string | null>("home");

  const propsData = [
    {
      name: "`items`",
      type: "Array<{ id: string; label: string; icon?: string }>",
      description: "Array of sidebar items",
      required: true,
      defaultValue: "-",
    },
    {
      name: "`position`",
      type: "'left' | 'right'",
      description: "Position of the sidebar",
      required: false,
      defaultValue: "'left'",
    },
    {
      name: "`rtl`",
      type: "boolean",
      description: "Right-to-left text direction",
      required: false,
      defaultValue: "false",
    },
    {
      name: "`collapsed`",
      type: "boolean",
      description: "Whether the sidebar is collapsed",
      required: false,
      defaultValue: "false",
    },
    {
      name: "`selectedId`",
      type: "string",
      description: "ID of the currently selected item",
      required: false,
      defaultValue: "undefined",
    },
    {
      name: "`isActive`",
      type: "boolean",
      description: "Whether the sidebar is focused",
      required: false,
      defaultValue: "false",
    },
    {
      name: "`onSelect`",
      type: "(item: SidebarItem) => void",
      description: "Callback when an item is selected",
      required: false,
      defaultValue: "undefined",
    },
  ];

  const codeString = `import { InoSidebar } from "ino-ui-tv";

const MyComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState("home");

  const items = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "search", label: "Search", icon: "🔍" },
    { id: "settings", label: "Settings", icon: "⚙️" },
    { id: "profile", label: "Profile", icon: "👤" },
  ];

  return (
    <InoSidebar
        items={sidebarItems}
        position="left"
        collapsed={isCollapsed}
        selectedId={selectedItem}
        isActive={true}
        onSelect={(item) => setSelectedItem(item.id)}
        onLeft={() => setIsCollapsed(false)}
        onRight={() => setIsCollapsed(true)}
    />
  );
};`;

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Sidebar Component" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8 p-4 bg-amber-100 rounded-lg h-[80vh]">
            <div className="space-y-4">
              <div className="gap-8 overflow-hidden">
                <div className="relative h-full min-h-[80vh] flex">
                  <InoSidebar
                    items={sidebarItems}
                    position="left"
                    rtl={false}
                    collapsed={isCollapsed}
                    selectedId={selectedItem}
                    isActive={true}
                    onSelect={(item) => setSelectedItem(item.id)}
                    className="z-50 ino-sidebar"
                    onLeft={() => setIsCollapsed(false)}
                    onRight={() => setIsCollapsed(true)}
                  />
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
            <TableCaption>Sidebar Component Props</TableCaption>
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

export default SidebarPage;
