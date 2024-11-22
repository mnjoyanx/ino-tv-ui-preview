import React from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoSkeleton, InoSkeletonListItem } from "ino-ui-tv";
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

const SkeletonPage: React.FC = () => {
  const propsData = [
    {
      name: "`variant`",
      type: "'text' | 'rectangular' | 'circular'",
      description: "Type of skeleton to display",
      required: false,
      defaultValue: "'rectangular'",
    },
    {
      name: "`width`",
      type: "number | string",
      description: "Width of the skeleton (in rem if number)",
      required: false,
      defaultValue: "100%",
    },
    {
      name: "`height`",
      type: "number | string",
      description: "Height of the skeleton (in rem if number)",
      required: false,
      defaultValue: "1.2rem",
    },
    {
      name: "`animation`",
      type: "'pulse' | 'wave' | 'none'",
      description: "Animation type",
      required: false,
      defaultValue: "'pulse'",
    },
    {
      name: "`borderRadius`",
      type: "number",
      description: "Border radius in rem",
      required: false,
      defaultValue: "0.25",
    },
    {
      name: "`textVariant`",
      type: "'heading' | 'subheading' | 'body'",
      description: "Predefined text sizes when variant is 'text'",
      required: false,
      defaultValue: "'body'",
    },
  ];

  const listItemPropsData = [
    {
      name: "`avatarSize`",
      type: "number",
      description: "Size of the avatar circle in rem",
      required: false,
      defaultValue: "4",
    },
    {
      name: "`lines`",
      type: "number",
      description: "Number of text lines to show",
      required: false,
      defaultValue: "1",
    },
  ];

  const codeString = `import { InoSkeleton, InoSkeletonListItem } from "ino-ui-tv";

const MyComponent = () => {
  return (
    <div className="space-y-4">
      {/* Basic rectangular skeleton */}
      <InoSkeleton 
        width={15} 
        height={3} 
        animation="pulse"
      />

      {/* Text skeleton */}
      <InoSkeleton
        variant="text"
        width="80%"
        textVariant="subheading"
      />

      {/* Circular skeleton for avatars */}
      <InoSkeleton
        variant="circular"
        width={5}
        height={5}
      />

      {/* List item with avatar */}
      <InoSkeletonListItem
        avatarSize={6}
        lines={2}
      />

      {/* Multiple list items */}
      <div className="space-y-4">
        <InoSkeletonListItem />
        <InoSkeletonListItem />
        <InoSkeletonListItem />
      </div>
    </div>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    toast("Code copied to clipboard!");
  };

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Skeleton Components" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8 p-4 bg-amber-100 rounded-lg">
            <div className="space-y-8">
              {/* Basic Skeletons */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Basic Skeletons</h3>
                <div className="space-y-4">
                  {/* <InoSkeleton
                    width={15}
                    height={3}
                    animation="pulse"
                  /> */}
                  <InoSkeleton
                    variant="text"
                    width={10}
                    height={3}
                    textVariant="subheading"
                  />
                  {/* <InoSkeleton
                    variant="circular"
                    width={5}
                    height={5}
                  /> */}
                </div>
              </div>

              {/* List Items */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">List Items</h3>
                <div className="space-y-4">
                  <InoSkeletonListItem />
                  <InoSkeletonListItem
                    avatarSize={6}
                    lines={4}
                  />
                  {/* <div className="space-y-4">
                    <InoSkeletonListItem />
                    <InoSkeletonListItem />
                    <InoSkeletonListItem />
                  </div> */}
                </div>
              </div>

              {/* Custom Styling */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Custom Styling</h3>
                <div className="space-y-4">
                  <InoSkeleton
                    width={15}
                    height={3}
                    borderRadius={0.8}
                    className="custom-skeleton"
                    style={{ margin: "1rem 0" }}
                  />
                </div>
              </div>
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
              <TableCaption>InoSkeleton Component Props</TableCaption>
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
              <TableCaption>InoSkeletonListItem Component Props</TableCaption>
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
                {listItemPropsData.map((prop) => (
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

export default SkeletonPage;
