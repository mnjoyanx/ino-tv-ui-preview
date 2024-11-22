import React, { useState } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoProtectInput } from "ino-ui-tv";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

const ProtectInputPage: React.FC = () => {
  const [activeInput, setActiveInput] = useState<1 | 2>(1);

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Protect Input Component" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8 p-4 bg-amber-100 rounded-lg">
            <p className="text-sm text-gray-600 mb-4">
              Use ↑↓ keys to navigate between inputs
            </p>

            {/* PIN Input Example */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                PIN Input (Numbers Only)
              </h3>
              <div className="max-w-md">
                <InoProtectInput
                  count={4}
                  withLetters={false}
                  keyboard={true}
                  onChange={(value) => toast(`PIN: ${value}`)}
                  onComplete={(value) =>
                    toast.success(`Complete PIN: ${value}`)
                  }
                  isActive={activeInput === 1}
                  onDown={() => setActiveInput(2)}
                />
              </div>
            </div>

            {/* Password Input Example */}
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-semibold">
                Password Input (Alphanumeric)
              </h3>
              <div className="max-w-2xl">
                <InoProtectInput
                  count={6}
                  withLetters={true}
                  //   keyboard={true}
                  onChange={(value) => toast(`Password: ${value}`)}
                  onComplete={(value) =>
                    toast.success(`Complete Password: ${value}`)
                  }
                  isActive={activeInput === 2}
                  onUp={() => setActiveInput(1)}
                />
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Code and Props sections... */}
      </Tabs>
    </PageContentWrapper>
  );
};

export default ProtectInputPage;
