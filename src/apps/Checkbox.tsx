import { FC, useState } from "react";
import { CheckboxItem } from "ino-ui-tv";
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

const Checkbox: FC = () => {
  const [active, setActive] = useState(0);

  const checkboxes = [
    {
      label: "First",
      isActive: active === 0,
      onChange: (checked: boolean) => alert(checked),
      onDown: () => setActive(1),
    },
    {
      label: "Second",
      isActive: active === 1,
      onChange: (checked: boolean) => alert(checked),
      onUp: () => setActive(0),
    },
  ];

  const propsData = [
    {
      name: "`isActive`",
      type: "boolean",
      description: "Indicates if the checkbox is currently active.",
    },
    {
      name: "`label`",
      type: "string",
      description: "The label displayed next to the checkbox.",
    },
    {
      name: "`defaultChecked`",
      type: "boolean",
      description: "Indicates if the checkbox is checked by default.",
    },
    {
      name: "`onChange`",
      type: "function",
      description:
        "Callback function triggered when the checkbox state changes.",
    },
    {
      name: "`onDown`",
      type: "function",
      description: "Callback function triggered when the down action occurs.",
    },
    {
      name: "`onUp`",
      type: "function",
      description: "Callback function triggered when the up action occurs.",
    },
  ];

  const codeString = `import { CheckboxItem } from "ino-ui-tv";
  
  <CheckboxItem
  isActive={active === 0}
  label="First"
  defaultChecked={true}
  onChange={(checked) => alert(checked)}
  onDown={() => setActive(1)}
/>
<CheckboxItem
  isActive={active === 1}
  label="Second"
  defaultChecked={true}
  onChange={(checked) => alert(checked)}
  onUp={() => setActive(0)}
/>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Checkbox Component Example
      </h2>
      <p className="mb-6 text-gray-600">
        This component demonstrates how to use a checkbox.
      </p>

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="bg-amber-100 rounded-lg p-4">
            {checkboxes.map((checkbox, index) => (
              <CheckboxItem
                key={index}
                isActive={checkbox.isActive}
                label={checkbox.label}
                defaultChecked={true}
                onChange={checkbox.onChange}
                onDown={checkbox.onDown}
                onUp={checkbox.onUp}
              />
            ))}
          </div>
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
        <TableCaption className="text-gray-500">
          CheckboxItem Props
        </TableCaption>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Checkbox;
