import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "ino-ui-tv/dist/styles/styles.css";

import Checkbox from "./apps/Checkbox";
import ListViewComponent from "./apps/ListViewComponent";
import ModalComponent from "./apps/ModalComponent"; // Import the new Modal component
import Sidebar from "./layouts/Sidebar";
import GridViewComponent from "./apps/GridViewComponent"; // Import the new GridView component
import IntroductionPage from "./pages/IntruductionPage"; // Import the new Introduction component
import ButtonPage from "./pages/ButtonPage";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider, ToastProvider } from "ino-ui-tv";
import ThemeProviderPage from "./pages/ThemeProviderPage";
import KeyboardPage from "./pages/KeyboardPage";
import ScrollViewPage from "./pages/ScrollViewPage";
import InputPage from "./pages/InputPage";
import RowPage from "./pages/RowPage";
import ColPage from "./pages/ColPage";
import LayoutDemoPage from "./pages/LayoutDemoPage";
import TabsPage from "./pages/TabsPage";
import SkeletonPage from "./pages/SkeletonPage";
import ListItemPage from "./pages/ListItemPage";
import SidebarPage from "./pages/SidebarPage";
import TextPage from "./pages/TextPage";
import ToastPage from "./pages/ToastPage";
import PlayerProgressPage from "./pages/PlayerProgressPage";
import ProtectInputPage from "./pages/ProtectInputPage";
import RecycleListPage from "./pages/RecycleListPage";

const CheckboxPage = () => (
  <>
    <Checkbox />
  </>
);

const App = () => {
  return (
    <ToastProvider>
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
                <Route
                  path="/skeleton"
                  element={<SkeletonPage />}
                />
                <Route
                  path="/list-item"
                  element={<ListItemPage />}
                />
                <Route
                  path="/sidebar"
                  element={<SidebarPage />}
                />
                <Route
                  path="/text"
                  element={<TextPage />}
                />
                <Route
                  path="/toast"
                  element={<ToastPage />}
                />
                <Route
                  path="/protect-input"
                  element={<ProtectInputPage />}
                />
                <Route
                  path="/progress"
                  element={<PlayerProgressPage />}
                />
                <Route
                  path="/recycle-list"
                  element={<RecycleListPage />}
                />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </Router>
    </ToastProvider>
  );
};

export default App;
