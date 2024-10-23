import { FC } from "react";
import { ListView } from "ino-ui-tv";
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
import styles from "./listview.module.scss";

const ListViewComponent: FC = () => {
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
  ];

  const propsData = [
    {
      name: "`id`",
      type: "string",
      description: "Unique identifier for the ListView component.",
    },
    {
      name: "`uniqueKey`",
      type: "string",
      description: "A unique key for the ListView instance.",
    },
    {
      name: "`itemsTotal`",
      type: "number",
      description: "Total number of items in the list.",
    },
    {
      name: "`itemsCount`",
      type: "number",
      description: "Number of items to display at once.",
    },
    {
      name: "`listType`",
      type: "string",
      description: "Type of list layout (e.g., 'horizontal').",
    },
    {
      name: "`itemWidth`",
      type: "number",
      description: "Width of each item in the list.",
    },
    {
      name: "`itemHeight`",
      type: "number",
      description: "Height of each item in the list.",
    },
    {
      name: "`isActive`",
      type: "boolean",
      description: "Indicates if the ListView is active.",
    },
    {
      name: "`buffer`",
      type: "number",
      description: "Number of items to buffer for smooth scrolling.",
    },
    {
      name: "`debounce`",
      type: "number",
      description: "Debounce time for scroll events.",
    },
    {
      name: "`nativeControle`",
      type: "boolean",
      description: "Enables native control for the ListView.",
    },
    {
      name: "`renderItem`",
      type: "function",
      description: "Function to render each item in the list.",
    },
    {
      name: "`data`",
      type: "array",
      description: "Array of data items to be displayed.",
    },
    {
      name: "`onBackScrollIndex`",
      type: "number",
      description: "Index to scroll back to when navigating back.",
    },
  ];

  const codeString = `import { ListView } from "ino-ui-tv";

  const items = [
    { id: 1, name: "Item 1", image: "https://placehold.co/400" },
    { id: 2, name: "Item 2", image: "https://placehold.co/400" },
    { id: 3, name: "Item 3", image: "https://placehold.co/400" },
    { id: 4, name: "Item 4", image: "https://placehold.co/400" }
  ];

  <ListView
    id="example_list"
    uniqueKey="example-list"
    itemsTotal={items.length}
    itemsCount={2}
    listType="horizontal"
    itemWidth={24}
    itemHeight={27}
    isActive={true}
    buffer={5}
    debounce={100}
    nativeControle={true}
    renderItem={({ index, style, isActive, item }) => (
      <div style={style} key={item.id}>
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
      </div>
    )}
    data={items}
    onBackScrollIndex={0}
  />`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        ListView Component Example
      </h2>
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="bg-amber-100 rounded-lg p-4 overflow-hidden">
            <ListView
              id="example_list"
              uniqueKey="example-list"
              itemsTotal={items.length}
              itemsCount={2}
              listType="horizontal"
              itemWidth={24}
              itemHeight={27}
              isActive={true}
              buffer={5}
              debounce={100}
              nativeControle={true}
              renderItem={({ index, style, isActive, item }) => (
                <div
                  style={style}
                  key={item.id + index}
                  className={`${styles.item} ${isActive ? styles.active : ""}`}
                >
                  <div className="w-[90%] h-[90%]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto mb-2 rounded"
                    />
                  </div>
                  <p>{item.name}</p>
                </div>
              )}
              data={items}
              onBackScrollIndex={0}
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
        <TableCaption className="text-gray-500">ListView Props</TableCaption>
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

export default ListViewComponent;
