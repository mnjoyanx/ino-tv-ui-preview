import React, { useState } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoRow, InoCol, InoButton } from "ino-ui-tv";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

const LayoutDemoPage: React.FC = () => {
  const [isRowActive, setIsRowActive] = useState(true);
  const [isColActive, setIsColActive] = useState(false);

  const codeString = `import { InoRow, InoCol, InoButton } from "ino-ui-tv";
import { useState } from "react";

const LayoutDemo = () => {
  const [isRowActive, setIsRowActive] = useState(true);
  const [isColActive, setIsColActive] = useState(false);

  return (
    <div>
      <InoRow
        isActive={isRowActive}
        infinite={true}
        onDown={() => {
            setIsRowActive(false);
            setIsColActive(true);
        }}
      >
        <InoButton index={0}>Button 1</InoButton>
        <InoButton index={1}>Button 2</InoButton>
        <InoButton index={2}>Button 3</InoButton>
      </InoRow>

      <InoCol
        isActive={isColActive}
        onUp={() => {
            setIsColActive(false);
            setIsRowActive(true);
        }}
      >
        <InoButton index={0}>Button 1</InoButton>
        <InoButton index={1}>Button 2</InoButton>
        <InoButton index={2}>Button 3</InoButton>
      </InoCol>
    </div>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    toast("Code copied to clipboard!");
  };

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Layout Components Demo" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8 p-4 bg-amber-100 rounded-lg">
            <p className="text-sm text-gray-600 mb-4">
              Use ↑↓←→ keys to navigate between rows and columns
            </p>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Nested Layout Example</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Use ←→ ↑↓ keys to navigate between columns and rows
                </p>

                <div className="space-x-4">
                  <h2 className="text-lg font-semibold">Row</h2>
                  <InoRow
                    isActive={isRowActive}
                    infinite={true}
                    onDown={() => {
                      setIsRowActive(false);
                      setIsColActive(true);
                    }}
                  >
                    <InoButton>Button 1</InoButton>
                    <InoButton>Button 2</InoButton>
                    <InoButton>Button 3</InoButton>
                  </InoRow>
                  <div className="h-10"></div>

                  <h2 className="text-lg font-semibold">Column</h2>
                  <InoCol
                    isActive={isColActive}
                    onUp={() => {
                      setIsColActive(false);
                      setIsRowActive(true);
                    }}
                  >
                    <InoButton>Button 1</InoButton>
                    <InoButton>Button 2</InoButton>
                    <InoButton>Button 3</InoButton>
                  </InoCol>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code">
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{ padding: "20px" }}
          >
            {codeString}
          </SyntaxHighlighter>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <Copy onClick={handleCopy} />
      </div>
    </PageContentWrapper>
  );
};

export default LayoutDemoPage;
