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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<"single" | "list" | null>(
    "single"
  );
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const propsData = [
    {
      name: "label",
      type: "string",
      description: "Text label for the checkbox",
    },
    {
      name: "checked",
      type: "boolean",
      description: "Controlled checked state of the checkbox",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      description: "Default checked state for uncontrolled usage",
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Whether the checkbox is disabled",
    },
    {
      name: "isActive",
      type: "boolean",
      description: "Whether the checkbox is currently active/focused",
    },
    {
      name: "onChange",
      type: "(checked: boolean) => void",
      description: "Callback fired when the checkbox state changes",
    },
    {
      name: "onFocus",
      type: "() => void",
      description: "Callback fired when the checkbox receives focus",
    },
    {
      name: "onUp",
      type: "() => void",
      description: "Callback fired when up arrow key is pressed",
    },
    {
      name: "onDown",
      type: "() => void",
      description: "Callback fired when down arrow key is pressed",
    },
  ];

  // Single checkbox example
  const singleCheckbox = {
    label: "Single Checkbox",
    isActive: activeSection === "single",
    defaultChecked: false,
    onDown: () => {
      setActiveSection("list");
      setActiveIndex(0);
    },
  };

  // List of checkboxes example
  const todoList = [
    "Complete project documentation",
    "Review pull requests",
    "Write unit tests",
    "Update dependencies",
    "Deploy to production",
  ];

  const handleTodoToggle = (todo: string) => {
    setSelectedItems((prev) =>
      prev.includes(todo)
        ? prev.filter((item) => item !== todo)
        : [...prev, todo]
    );
  };

  const handleKeyNavigation = (
    direction: "up" | "down",
    currentIndex: number
  ) => {
    setActiveSection("list");
    if (direction === "up") {
      setActiveIndex(currentIndex > 0 ? currentIndex - 1 : todoList.length - 1);
    } else {
      setActiveIndex(currentIndex < todoList.length - 1 ? currentIndex + 1 : 0);
    }
  };

  const codeString = `import { CheckboxItem } from "ino-ui-tv";
  
// State management
const [activeIndex, setActiveIndex] = useState<number | null>(null);
const [activeSection, setActiveSection] = useState<'single' | 'list' | null>(null);
const [selectedItems, setSelectedItems] = useState<string[]>([]);

const handleKeyNavigation = (direction: 'up' | 'down', currentIndex: number) => {
  setActiveSection('list');
  if (direction === 'up') {
    setActiveIndex(currentIndex > 0 ? currentIndex - 1 : todoList.length - 1);
  } else {
    setActiveIndex(currentIndex < todoList.length - 1 ? currentIndex + 1 : 0);
  }
};

// Single Checkbox Example
<CheckboxItem
  isActive={activeSection === 'single'}
  label="Single Checkbox"
  defaultChecked={false}
  onChange={(checked) => alert(checked)}
  onFocus={() => {
    setActiveSection('single');
    setActiveIndex(null);
  }}
/>

// Todo List Example
{todoList.map((todo, index) => (
  <CheckboxItem
    key={index}
    isActive={activeSection === 'list' && index === activeIndex}
    label={todo}
    checked={selectedItems.includes(todo)}
    onChange={() => handleTodoToggle(todo)}
    onUp={() => handleKeyNavigation('up', index)}
    onDown={() => handleKeyNavigation('down', index)}
    onFocus={() => handleListItemFocus(index)}
  />
))}`;

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
          <div className="space-y-6">
            {/* Single Checkbox Example */}
            <div className="bg-amber-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">
                Single Checkbox Example
              </h3>
              <CheckboxItem {...singleCheckbox} />
            </div>

            {/* Todo List Example */}
            <div className="bg-amber-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Todo List Example</h3>
              <p className="text-sm text-gray-600 mb-2">
                Use ↑↓ keys to navigate
              </p>
              <div className="space-y-2">
                {todoList.map((todo, index) => (
                  <CheckboxItem
                    key={index}
                    isActive={activeSection === "list" && index === activeIndex}
                    label={todo}
                    checked={selectedItems.includes(todo)}
                    onChange={() => handleTodoToggle(todo)}
                    onUp={() => handleKeyNavigation("up", index)}
                    onDown={() => handleKeyNavigation("down", index)}
                  />
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Selected items: {selectedItems.length}
                {activeSection === "list" && activeIndex !== null && (
                  <>
                    <br />
                    Active item: {todoList[activeIndex]}
                  </>
                )}
              </div>
            </div>
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
