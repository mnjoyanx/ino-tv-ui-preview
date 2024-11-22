import React, { useState } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoRecycleList } from "ino-ui-tv";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Copy } from "lucide-react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { toast } from "sonner";

const RecycleListPage: React.FC = () => {
  const [, setActiveList] = useState<1 | 2>(1);

  // Example data for the lists
  const simpleItems = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    title: `Item ${i + 1}`,
    description: `Description for item ${i + 1}`,
  }));

  //   const propsData = [
  //     {
  //       name: "`data`",
  //       type: "Array<any>",
  //       description: "Array of items to be rendered in the list",
  //       required: true,
  //       defaultValue: "[]",
  //     },
  //     {
  //       name: "`renderItem`",
  //       type: "(item: any, index: number) => ReactNode",
  //       description: "Function to render each item",
  //       required: true,
  //       defaultValue: "-",
  //     },
  //     {
  //       name: "`itemHeight`",
  //       type: "number",
  //       description: "Height of each item in pixels",
  //       required: true,
  //       defaultValue: "50",
  //     },
  //     {
  //       name: "`isActive`",
  //       type: "boolean",
  //       description: "Whether the list is currently focused",
  //       required: false,
  //       defaultValue: "false",
  //     },
  //     {
  //       name: "`onSelect`",
  //       type: "(item: any) => void",
  //       description: "Callback when an item is selected",
  //       required: false,
  //       defaultValue: "undefined",
  //     },
  //   ];

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Recycle List Component" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8 p-4 bg-amber-100 rounded-lg">
            <p className="text-sm text-gray-600 mb-4">
              Use ↑↓ keys to navigate between lists and items
            </p>

            {/* Simple List Example */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Simple List</h3>
              <div className="h-[50vh] bg-white pt-4">
                <InoRecycleList
                  items={simpleItems}
                  itemHeight={60}
                  height={300}
                  isActive={true}
                  infinite={true}
                  onDown={() => setActiveList(2)}
                  renderItem={(item) => (
                    <div className="px-4 border-b hover:bg-gray-100">
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Code and Props sections similar to other pages */}
      </Tabs>
    </PageContentWrapper>
  );
};

export default RecycleListPage;
