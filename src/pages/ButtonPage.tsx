import React from "react";
import ButtonComponent from "../apps/button/ButtonComponent";
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

const ButtonPage: React.FC = () => {
  const propsData = [
    {
      name: "`isActive`",
      type: "boolean",
      description: "Indicates whether the button is active.",
      required: true,
      defaultValue: "false",
    },
    {
      name: "`index`",
      type: "number",
      description: "The index of the button.",
      required: true,
      defaultValue: "0",
    },
    {
      name: "`text`",
      type: "string",
      description: "The text to be displayed inside the button.",
      required: false,
      defaultValue: "''",
    },
    {
      name: "`children`",
      type: "ReactNode",
      description: "The content to be displayed inside the button.",
      required: false,
      defaultValue: "null",
    },
    {
      name: "`onClick`",
      type: "function",
      description: "Callback function to be called when the button is clicked.",
      required: true,
      defaultValue: "() => {}",
    },
    {
      name: "`type`",
      type: "'button' | 'submit' | 'reset'",
      description: "The type of the button.",
      required: false,
      defaultValue: "'button'",
    },
    {
      name: "`disabled`",
      type: "boolean",
      description: "Indicates whether the button is disabled.",
      required: false,
      defaultValue: "false",
    },
    {
      name: "`classNames`",
      type: "string",
      description: "Additional class names to be applied to the button.",
      required: false,
      defaultValue: "''",
    },
    {
      name: "`variant`",
      type: "'primary' | 'secondary' | 'danger' | 'outline'",
      description: "The variant of the button.",
      required: true,
      defaultValue: "'primary'",
    },
    {
      name: "`onLeft`",
      type: "function",
      description:
        "Callback function to be called when the left arrow key is pressed.",
      required: false,
      defaultValue: "() => {}",
    },
    {
      name: "`onRight`",
      type: "function",
      description:
        "Callback function to be called when the right arrow key is pressed.",
      required: false,
      defaultValue: "() => {}",
    },
    {
      name: "`onUp`",
      type: "function",
      description:
        "Callback function to be called when the up arrow key is pressed.",
      required: false,
      defaultValue: "() => {}",
    },
    {
      name: "`onDown`",
      type: "function",
      description:
        "Callback function to be called when the down arrow key is pressed.",
      required: false,
      defaultValue: "() => {}",
    },
    {
      name: "`onBack`",
      type: "function",
      description:
        "Callback function to be called when the back action is triggered.",
      required: false,
      defaultValue: "() => {}",
    },
  ];

  const codeString = `import { InoButton } from "ino-ui-tv";

  <InoButton
    index={0}
    isActive={activeIndex === 0}
    variant="primary"
    onClick={(_e, index) => toast(\`Button \${index} clicked\`)}
    onRight={() => setActiveIndex(1)}
  >
    Primary Button
  </InoButton>
  // ... other buttons ...
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div>
      <PageContentWrapper>
        <PageIntroHeader title="Button Component Example" />

        <Tabs defaultValue="preview">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          <TabsContent value="preview">
            <ButtonComponent />
          </TabsContent>

          <TabsContent value="code">
            <div className="relative bg-gray-900 p-4 rounded-lg mt-6">
              <button
                onClick={handleCopy}
                className="absolute top-12 right-12 p-1 bg-white rounded hover:bg-gray-300"
              >
                <Copy className="w-5 h-5" />
              </button>
              <SyntaxHighlighter
                language="jsx"
                style={vscDarkPlus}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          </TabsContent>
        </Tabs>

        <Table className="mt-6 border border-gray-200 rounded-lg shadow-md">
          <TableCaption className="text-gray-500">Button Props</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-blue-200 font-semibold text-gray-700">
                Prop/Callback
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
                Default Value
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
      </PageContentWrapper>
    </div>
  );
};

export default ButtonPage;
