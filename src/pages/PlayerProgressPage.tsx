import React, { useState, useEffect } from "react";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoPlayerProgress } from "ino-ui-tv";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { Copy } from "lucide-react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { toast } from "sonner";

const PlayerProgressPage: React.FC = () => {
  const [progress1, setProgress1] = useState(0);
  const [buffered1, setBuffered1] = useState(0);
  const [isPlaying1] = useState(true);

  const [progress2, setProgress2] = useState(30);
  const [buffered2] = useState(60);

  // Simulate progress for first example
  useEffect(() => {
    if (isPlaying1) {
      const interval = setInterval(() => {
        setProgress1((prev) => (prev < 100 ? prev + 1 : 0));
        setBuffered1((prev) => (prev < 95 ? prev + 2 : prev));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying1]);

  return (
    <PageContentWrapper>
      <PageIntroHeader title="Player Progress Component" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="props">Props</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8 p-4 bg-amber-100 rounded-lg">
            {/* Auto Progress Example */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Auto Progress Example</h3>
              <p className="text-sm text-gray-600">
                Current progress: {progress1}%, Buffered: {buffered1}%
              </p>
              {/* <div className="max-w-2xl pt-8">
                <InoPlayerProgress
                  value={progress1}
                  isActive={is}
                  duration={10000}
                  buffered={buffered1}
                  onChange={setProgress1}
                  showTooltip={true}
                  //   onOk={() => setIsPlaying1(!isPlaying1)}
                />
              </div> */}
              <p className="text-sm text-gray-600">
                Press OK to {isPlaying1 ? "pause" : "play"}
              </p>
            </div>

            {/* Manual Control Example */}
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-semibold">Manual Control Example</h3>
              <p className="text-sm text-gray-600">
                Use ←→ keys to control progress
              </p>
              <div className="max-w-2xl pt-8">
                <InoPlayerProgress
                  value={progress2}
                  isActive={true}
                  duration={500}
                  buffered={buffered2}
                  onChange={setProgress2}
                  showTooltip={true}
                  //   onLeft={() => setProgress2((prev) => Math.max(0, prev - 5))}
                  //   onRight={() =>
                  //     setProgress2((prev) => Math.min(100, prev + 5))
                  //   }
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

export default PlayerProgressPage;
