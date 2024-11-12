import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "ino-ui-tv/dist/styles/styles.css";

import Checkbox from "./apps/Checkbox";
import ListViewComponent from "./apps/ListViewComponent";
import ModalComponent from "./apps/ModalComponent"; // Import the new Modal component
import Sidebar from "./layouts/Sidebar";
import GridViewComponent from "./apps/GridViewComponent"; // Import the new GridView component
import IntroductionPage from "./pages/IntruductionPage"; // Import the new Introduction component
import ButtonPage from "./pages/ButtonPage";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "ino-ui-tv";
import ThemeProviderPage from "./pages/ThemeProviderPage";
import KeyboardPage from "./pages/KeyboardPage";
import ScrollViewPage from "./pages/ScrollViewPage";
import InputPage from "./pages/InputPage";
import RowPage from "./pages/RowPage";
import ColPage from "./pages/ColPage";
import LayoutDemoPage from "./pages/LayoutDemoPage";
import TabsPage from "./pages/TabsPage";

const CheckboxPage = () => (
  <>
    <Checkbox />
  </>
);

const App = () => {
  return (
    <Router>
      <Toaster />
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
        <div className="app bg-stone-100 flex">
          <Sidebar />
          <main className="w-[calc(100%-256px)] ml-[256px]">
            <Routes>
              <Route
                path="/"
                element={<IntroductionPage />}
              />

              <Route
                path="/theme"
                element={<ThemeProviderPage />}
              />

              <Route
                path="/button"
                element={<ButtonPage />}
              />

              <Route
                path="/modal"
                element={<ModalComponent />}
              />
              <Route
                path="/checkbox"
                element={<CheckboxPage />}
              />
              <Route
                path="/scrollview"
                element={<ScrollViewPage />}
              />
              <Route
                path="/listview"
                element={<ListViewComponent />}
              />
              <Route
                path="/gridview"
                element={<GridViewComponent />} // Add the new GridView route
              />
              <Route
                path="/theme"
                element={<ThemeProviderPage />}
              />
              <Route
                path="/keyboard"
                element={<KeyboardPage />}
              />
              <Route
                path="/input"
                element={<InputPage />}
              />
              <Route
                path="/row"
                element={<RowPage />}
              />
              <Route
                path="/col"
                element={<ColPage />}
              />
              <Route
                path="/layout-demo"
                element={<LayoutDemoPage />}
              />
              <Route
                path="/tabs"
                element={<TabsPage />}
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
