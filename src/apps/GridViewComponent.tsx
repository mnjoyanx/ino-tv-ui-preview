import { FC } from "react";
import { GridView } from "ino-ui-tv";
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
import styles from "./gridview.module.scss";

const GridViewComponent: FC = () => {
  const items = [
    { id: 1, name: "Item 1", image: "https://placehold.co/400" },
    { id: 2, name: "Item 2", image: "https://placehold.co/400" },
    { id: 3, name: "Item 3", image: "https://placehold.co/400" },
    { id: 4, name: "Item 4", image: "https://placehold.co/400" },
    { id: 5, name: "Item 5", image: "https://placehold.co/400" },
    { id: 6, name: "Item 6", image: "https://placehold.co/400" },
    { id: 7, name: "Item 7", image: "https://placehold.co/400" },
    { id: 8, name: "Item 8", image: "https://placehold.co/400" },
    { id: 9, name: "Item 9", image: "https://placehold.co/400" },
    { id: 10, name: "Item 10", image: "https://placehold.co/400" },
    { id: 11, name: "Item 11", image: "https://placehold.co/400" },
    { id: 12, name: "Item 12", image: "https://placehold.co/400" },
    { id: 13, name: "Item 13", image: "https://placehold.co/400" },
    { id: 14, name: "Item 14", image: "https://placehold.co/400" },
    { id: 15, name: "Item 15", image: "https://placehold.co/400" },
    { id: 16, name: "Item 16", image: "https://placehold.co/400" },
    { id: 17, name: "Item 17", image: "https://placehold.co/400" },
    { id: 18, name: "Item 18", image: "https://placehold.co/400" },
    { id: 19, name: "Item 19", image: "https://placehold.co/400" },
    { id: 20, name: "Item 20", image: "https://placehold.co/400" },
    { id: 21, name: "Item 21", image: "https://placehold.co/400" },
    { id: 22, name: "Item 22", image: "https://placehold.co/400" },
    { id: 23, name: "Item 23", image: "https://placehold.co/400" },
    { id: 24, name: "Item 24", image: "https://placehold.co/400" },
    { id: 25, name: "Item 25", image: "https://placehold.co/400" },
    { id: 26, name: "Item 26", image: "https://placehold.co/400" },
    { id: 27, name: "Item 27", image: "https://placehold.co/400" },
    { id: 28, name: "Item 28", image: "https://placehold.co/400" },
    { id: 29, name: "Item 29", image: "https://placehold.co/400" },
    { id: 30, name: "Item 30", image: "https://placehold.co/400" },
    { id: 31, name: "Item 31", image: "https://placehold.co/400" },
    { id: 32, name: "Item 32", image: "https://placehold.co/400" },
    { id: 33, name: "Item 33", image: "https://placehold.co/400" },
    { id: 34, name: "Item 34", image: "https://placehold.co/400" },
    { id: 35, name: "Item 35", image: "https://placehold.co/400" },
    { id: 36, name: "Item 36", image: "https://placehold.co/400" },
    { id: 37, name: "Item 37", image: "https://placehold.co/400" },
    { id: 38, name: "Item 38", image: "https://placehold.co/400" },
    { id: 39, name: "Item 39", image: "https://placehold.co/400" },
    { id: 40, name: "Item 40", image: "https://placehold.co/400" },
    { id: 41, name: "Item 41", image: "https://placehold.co/400" },
  ];

  const propsData = [
    {
      name: "`id`",
      type: "string",
      description: "Unique identifier for the GridView component.",
      required: true,
    },
    {
      name: "`uniqueKey`",
      type: "string",
      description: "A unique key for the GridView instance.",
      required: true,
    },
    {
      name: "`itemsTotal`",
      type: "number",
      description: "Total number of items in the grid.",
      required: true,
    },
    {
      name: "`rowItemsCount`",
      type: "number",
      description: "Number of items per row.",
      required: false,
    },
    {
      name: "`rowCount`",
      type: "number",
      description: "Number of rows to display.",
      required: false,
    },
    {
      name: "`itemWidth`",
      type: "number",
      description: "Width of each item in the grid.",
      required: false,
    },
    {
      name: "`itemHeight`",
      type: "number",
      description: "Height of each item in the grid.",
      required: false,
    },
    {
      name: "`isActive`",
      type: "boolean",
      description: "Indicates if the GridView is active.",
      required: false,
    },
    {
      name: "`bufferStart`",
      type: "number",
      description:
        "Number of items to buffer at the start for smooth scrolling.",
      required: false,
    },
    {
      name: "`bufferEnd`",
      type: "number",
      description: "Number of items to buffer at the end for smooth scrolling.",
      required: false,
    },
    {
      name: "`nativeControle`",
      type: "boolean",
      description: "Enables native control for the GridView.",
      required: false,
    },
    {
      name: "`renderItem`",
      type: "function",
      description: "Function to render each item in the grid.",
      required: true,
    },
    {
      name: "`data`",
      type: "array",
      description: "Array of data items to be displayed.",
      required: true,
    },
  ];

  const codeString = `import { GridView } from "ino-ui-tv";

  const items = [
    { id: 1, name: "Item 1", image: "https://placehold.co/400" },
    { id: 2, name: "Item 2", image: "https://placehold.co/400" },
    // ... other items ...
  ];

  <GridView
    id="gridview-1"
    uniqueKey="gridview-1"
    data={items}
    isActive={true}
    itemsTotal={items.length}
    rowItemsCount={3}
    rowCount={3}
    itemWidth={23}
    itemHeight={17}
    bufferStart={10}
    bufferEnd={10}
    nativeControle={true}
    renderItem={({ item, isActive, style }) => (
      <div key={item.id} style={style}>
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
      </div>
    )}
  />`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        GridView Component Example
      </h2>
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="bg-amber-100 rounded-lg p-4 overflow-hidden h-[90vh]">
            <GridView
              id="gridview-1"
              uniqueKey="gridview-1"
              data={items}
              isActive={true}
              onChangeRow={() => {}}
              onUp={() => {}}
              onDown={() => {}}
              onLeft={() => {}}
              onRight={() => {}}
              onBack={() => {}}
              rowItemsCount={3}
              rowCount={3}
              itemWidth={23}
              itemHeight={17}
              bufferStart={10}
              bufferEnd={10}
              nativeControle={true}
              onOk={() => {
                alert("onClick");
              }}
              onMouseEnter={() => {
                alert("onMouseEnter");
              }}
              renderItem={({ item, isActive, style }) => (
                <div
                  key={item.id}
                  style={style}
                  className={`${styles.item} ${isActive ? styles.active : ""}`}
                >
                  <div className="w-[90%] h-[90%]">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <p>{item.name}</p>
                </div>
              )}
            />
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
        <TableCaption className="text-gray-500">GridView Props</TableCaption>
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
              <TableCell className="p-4 border-b">
                {prop.required ? "Yes" : "No"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default GridViewComponent;
