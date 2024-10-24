import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white text-gray-800 shadow-lg sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Ino TV UI</h2>
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className={`hover:text-blue-500 block ${
                isActive("/") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Introduction
            </Link>
          </li>

          <li>
            <Link
              to="/modal"
              className={`hover:text-blue-500 block ${
                isActive("/modal") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Modal
            </Link>
          </li>
          <li>
            <Link
              to="/checkbox"
              className={`hover:text-blue-500 block ${
                isActive("/checkbox") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Checkbox
            </Link>
          </li>
          <li>
            <Link
              to="/listview"
              className={`hover:text-blue-500 block ${
                isActive("/listview") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              ListView
            </Link>
          </li>
          <li>
            <Link
              to="/gridview"
              className={`hover:text-blue-500 block ${
                isActive("/gridview") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              GridView
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
