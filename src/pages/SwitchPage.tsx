import React, { useState } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoSwitch, InoListItem, InoCol } from "ino-ui-tv";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Copy, Table } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const SwitchPage: React.FC = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(true);
  const [active, setActive] = useState(0);

  const propsData = [
    {
      name: "`checked`",
      type: "boolean",
      description: "The controlled checked state of the switch",
      required: true,
      defaultValue: "false",
    },
    {
      name: "`onChange`",
      type: "(checked: boolean) => void",
      description: "Callback when the switch is toggled",
      required: true,
      defaultValue: "-",
    },
    {
      name: "`isActive`",
      type: "boolean",
      description: "Whether the switch is currently focused",
      required: false,
      defaultValue: "false",
    },
    {
      name: "`disabled`",
      type: "boolean",
      description: "Whether the switch is disabled",
      required: false,
      defaultValue: "false",
    },
  ];

  const codeString = `import { InoSwitch, InoListItem, InoCol } from "ino-ui-tv";

const MyComponent = () => {
  const [checked, setChecked] = useState(false);
  
  return (
    <div className="space-y-4">
      {/* Standalone Switch */}
      <InoSwitch
        checked={checked}
        onChange={setChecked}
        isActive={true}
      />

      {/* Switch in ListItem */}
      <InoCol isActive>
        <InoListItem
          title="Enable Feature"
          rightContent={
            <InoSwitch
              checked={checked}
              onChange={setChecked}
            />
          }
        />
      </InoCol>
    </div>
  );
};`;

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Switch Component" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8 p-4 bg-amber-100 rounded-lg">
            <p className="text-sm text-gray-600 mb-4">
              Use ↑↓ keys to navigate between switches
            </p>

            {/* Standalone Switches */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Standalone Switches</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <InoSwitch
                    isChecked={checked1}
                    onChange={(e, index) => setChecked1(!checked1)}
                    isActive={active === 0}
                    onDown={() => setActive(1)}
                  />
                  <span>Basic Switch</span>
                </div>
                <div className="flex items-center gap-4">
                  <InoSwitch
                    isChecked={checked2}
                    onChange={(e, index) => setChecked2(!checked2)}
                    disabled
                    isActive={active === 1}
                    onUp={() => setActive(0)}
                    onDown={() => setActive(2)}
                  />
                  <span>Disabled Switch</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-semibold">Switches in List Items</h3>
              <InoCol
                isActive={active > 1}
                onUp={() => setActive(1)}
              >
                <InoListItem
                  children="Enable Notifications"
                  className="!bg-indigo-300"
                  isActive
                  onOk={() => setChecked3(!checked3)}
                  rightContent={
                    <InoSwitch
                      isChecked={checked3}
                      variant="success"
                    />
                  }
                />
                <InoListItem
                  children="Dark Mode"
                  className="!bg-indigo-300"
                  isActive
                  onOk={() => setChecked4(!checked4)}
                  rightContent={
                    <InoSwitch
                      isChecked={checked4}
                      variant="danger"
                    />
                  }
                />
              </InoCol>
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
            <TableCaption>Switch Component Props</TableCaption>
            <TableHeader>
              <TableRow>
                {["Prop", "Type", "Description", "Required", "Default"].map(
                  (header) => (
                    <TableHead
                      key={header}
                      className="bg-blue-200 font-semibold text-gray-700"
                    >
                      {header}
                    </TableHead>
                  )
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {propsData.map((prop) => (
                <TableRow key={prop.name}>
                  <TableCell className="font-mono">{prop.name}</TableCell>
                  <TableCell className="font-mono">{prop.type}</TableCell>
                  <TableCell>{prop.description}</TableCell>
                  <TableCell>{prop.required ? "Yes" : "No"}</TableCell>
                  <TableCell className="font-mono">
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

export default SwitchPage;
