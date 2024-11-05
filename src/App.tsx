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

const CheckboxPage = () => (
  <>
    <Checkbox />
  </>
);

const App = () => {
  return (
    <Router>
      <Toaster />

      <div className="app bg-stone-100 flex">
        <Sidebar />
        <main className="w-[calc(100%-256px)] ml-[256px]">
          <Routes>
            <Route
              path="/"
              element={<IntroductionPage />}
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
              path="/listview"
              element={<ListViewComponent />}
            />
            <Route
              path="/gridview"
              element={<GridViewComponent />} // Add the new GridView route
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
