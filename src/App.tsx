import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "ino-ui-tv/dist/styles/styles.css";
import { Modal, CheckboxItem } from "ino-ui-tv";
import Checkbox from "./apps/Checkbox";
import ListViewComponent from "./apps/ListViewComponent";
import ModalComponent from "./apps/ModalComponent"; // Import the new Modal component
import Sidebar from "./layouts/Sidebar";

const ComponentPreview = ({ component: Component, props }) => {
  return (
    <div className="component-preview">
      <h2>Component Preview</h2>
      <Component {...props} />
    </div>
  );
};

const ComponentDocs = ({ docs }) => {
  return (
    <div className="component-docs">
      <h2>Component Documentation</h2>
      <pre>{JSON.stringify(docs, null, 2)}</pre>
    </div>
  );
};

const ComponentPage = ({ component, props, docs }) => {
  return (
    <div className="component-page">
      <ComponentPreview
        component={component}
        props={props}
      />
      <ComponentDocs docs={docs} />
    </div>
  );
};

const ModalPage = () => (
  <ComponentPage
    component={Modal}
    props={{
      isOpen: true,
      onClose: () => {},
      title: "Example Modal",
      children: <p>This is the modal content.</p>,
      okBtnText: "OK",
      cancelBtnText: "Cancel",
    }}
    docs={Modal.propTypes}
  />
);

const CheckboxPage = () => (
  <>
    <Checkbox />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="app bg-stone-100 flex">
        <Sidebar />
        <main className="w-[calc(100%-256px)] ml-[256px]">
          <Routes>
            <Route
              path="/modal"
              element={<ModalComponent />} // Use the new Modal component
            />
            <Route
              path="/checkbox"
              element={<CheckboxPage />}
            />
            <Route
              path="/listview"
              element={<ListViewComponent />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
