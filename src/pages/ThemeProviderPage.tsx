import React, { useState } from "react";
import { ThemeProvider } from "ino-ui-tv";
import PageIntroHeader from "@/components/common/PageIntroHeader";
import PageContentWrapper from "@/components/common/PageContentWrapper";
import { InoButton } from "ino-ui-tv";
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

const themes = {
  default: {
    colors: {
      primary: "#fb923c",
      secondary: "#292524",
      danger: "#ef4444",
      warning: "#f59e0b",
      text: {
        primary: "#fff",
        secondary: "#fb923c",
        danger: "#ef4444",
        warning: "#f59e0b",
      },
    },
  },
  dark: {
    colors: {
      primary: "#1e293b",
      secondary: "#475569",
      danger: "#dc2626",
      warning: "#d97706",
      text: {
        primary: "#f8fafc",
        secondary: "#94a3b8",
        danger: "#fecaca",
        warning: "#fef3c7",
      },
    },
  },
  light: {
    colors: {
      primary: "#f8fafc",
      secondary: "#e2e8f0",
      danger: "#fee2e2",
      warning: "#fef3c7",
      text: {
        primary: "#1e293b",
        secondary: "#475569",
        danger: "#dc2626",
        warning: "#d97706",
      },
    },
  },
};

const ThemeProviderPage: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<"default" | "dark" | "light">(
    "default"
  );

  const codeString = `import { ThemeProvider } from "ino-ui-tv";

const App = () => {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: "#fb923c",
          secondary: "#292524",
          danger: "#ef4444",
          warning: "#f59e0b",
          text: {
            primary: "#fff",
            secondary: "#fb923c",
            danger: "#ef4444",
            warning: "#f59e0b",
          },
        },
      }}
    >
      {/* Your app content */}
    </ThemeProvider>
  );
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    alert("Code copied to clipboard!");
  };

  return (
    <PageContentWrapper>
      <PageIntroHeader title="ThemeProvider API" />

      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="space-y-8">
            <div className="flex gap-4">
              {Object.keys(themes).map((theme, index) => (
                <InoButton
                  key={theme}
                  index={index}
                  onClick={() =>
                    setActiveTheme(theme as "default" | "dark" | "light")
                  }
                  className={`px-4 py-2 rounded ${
                    activeTheme === theme
                      ? "bg-primary text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
                </InoButton>
              ))}
            </div>

            <ThemeProvider theme={themes[activeTheme]}>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <InoButton
                    index={0}
                    variant="primary"
                  >
                    Primary Button
                  </InoButton>
                  <InoButton
                    index={1}
                    variant="secondary"
                  >
                    Secondary Button
                  </InoButton>
                  <InoButton
                    index={2}
                    variant="danger"
                  >
                    Danger Button
                  </InoButton>
                  <InoButton
                    index={3}
                    variant="warning"
                  >
                    Warning Button
                  </InoButton>
                </div>
              </div>
            </ThemeProvider>
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
      </Tabs>

      <Table className="mt-8">
        <TableCaption>Theme Configuration Options</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Property</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Required</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>colors.primary</TableCell>
            <TableCell>string</TableCell>
            <TableCell>Primary color used throughout the application</TableCell>
            <TableCell>No</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>colors.secondary</TableCell>
            <TableCell>string</TableCell>
            <TableCell>
              Secondary color used for less prominent elements
            </TableCell>
            <TableCell>No</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>colors.danger</TableCell>
            <TableCell>string</TableCell>
            <TableCell>
              Color used for dangerous or destructive actions
            </TableCell>
            <TableCell>No</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>colors.warning</TableCell>
            <TableCell>string</TableCell>
            <TableCell>Color used for warning states and messages</TableCell>
            <TableCell>No</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>colors.text</TableCell>
            <TableCell>object</TableCell>
            <TableCell>
              Object containing text colors for different states
            </TableCell>
            <TableCell>No</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </PageContentWrapper>
  );
};

export default ThemeProviderPage;
