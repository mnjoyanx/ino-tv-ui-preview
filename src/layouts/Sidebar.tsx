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
              className={`hover:text-primary block ${
                isActive("/") ? "text-primary font-semibold" : ""
              }`}
            >
              Introduction
            </Link>
          </li>

          <li>
            <Link
              to="/theme"
              className={`hover:text-primary block ${
                isActive("/theme") ? "text-primary font-semibold" : ""
              }`}
            >
              ThemeProvider
            </Link>
          </li>

          <li>
            <Link
              to="/button"
              className={`hover:text-primary block ${
                isActive("/button") ? "text-primary font-semibold" : ""
              }`}
            >
              Button
            </Link>
          </li>
          <li>
            <Link
              to="/modal"
              className={`hover:text-primary block ${
                isActive("/modal") ? "text-primary font-semibold" : ""
              }`}
            >
              Modal
            </Link>
          </li>
          <li>
            <Link
              to="/checkbox"
              className={`hover:text-primary block ${
                isActive("/checkbox") ? "text-primary font-semibold" : ""
              }`}
            >
              Checkbox
            </Link>
          </li>
          <li>
            <Link
              to="/scrollview"
              className={`hover:text-primary block ${
                isActive("/scrollview") ? "text-primary font-semibold" : ""
              }`}
            >
              ScrollView
            </Link>
          </li>
          <li>
            <Link
              to="/listview"
              className={`hover:text-primary block ${
                isActive("/listview") ? "text-primary font-semibold" : ""
              }`}
            >
              ListView
            </Link>
          </li>
          <li>
            <Link
              to="/gridview"
              className={`hover:text-primary block ${
                isActive("/gridview") ? "text-primary font-semibold" : ""
              }`}
            >
              GridView
            </Link>
          </li>
          <li>
            <Link
              to="/keyboard"
              className={`hover:text-primary block ${
                isActive("/keyboard") ? "text-primary font-semibold" : ""
              }`}
            >
              Keyboard
            </Link>
          </li>
          <li>
            <Link
              to="/input"
              className={`hover:text-primary block ${
                isActive("/input") ? "text-primary font-semibold" : ""
              }`}
            >
              Input
            </Link>
          </li>
          <li>
            <Link
              to="/row"
              className={`hover:text-primary block ${
                isActive("/row") ? "text-primary font-semibold" : ""
              }`}
            >
              Row
            </Link>
          </li>
          <li>
            <Link
              to="/col"
              className={`hover:text-primary block ${
                isActive("/col") ? "text-primary font-semibold" : ""
              }`}
            >
              Column
            </Link>
          </li>
          <li>
            <Link
              to="/layout-demo"
              className={`hover:text-primary block ${
                isActive("/layout-demo") ? "text-primary font-semibold" : ""
              }`}
            >
              Layout Demo
            </Link>
          </li>
          <li>
            <Link
              to="/tabs"
              className={`hover:text-primary block ${
                isActive("/tabs") ? "text-primary font-semibold" : ""
              }`}
            >
              Tabs
            </Link>
          </li>
          <li>
            <Link
              to="/skeleton"
              className={`hover:text-primary block ${
                isActive("/skeleton") ? "text-primary font-semibold" : ""
              }`}
            >
              Skeleton
            </Link>
          </li>
          <li>
            <Link
              to="/list-item"
              className={`hover:text-primary block ${
                isActive("/list-item") ? "text-primary font-semibold" : ""
              }`}
            >
              ListItem
            </Link>
          </li>
          <li>
            <Link
              to="/sidebar"
              className={`hover:text-primary block ${
                isActive("/sidebar") ? "text-primary font-semibold" : ""
              }`}
            >
              Sidebar
            </Link>
          </li>
          <li>
            <Link
              to="/text"
              className={`hover:text-primary block ${
                isActive("/text") ? "text-primary font-semibold" : ""
              }`}
            >
              Text
            </Link>
          </li>
          <li>
            <Link
              to="/toast"
              className={`hover:text-primary block ${
                isActive("/toast") ? "text-primary font-semibold" : ""
              }`}
            >
              Toast
            </Link>
          </li>
          <li>
            <Link
              to="/protect-input"
              className={`hover:text-primary block ${
                isActive("/protect-input") ? "text-primary font-semibold" : ""
              }`}
            >
              Protect Input
            </Link>
          </li>
          <li>
            <Link
              to="/progress"
              className={`hover:text-primary block ${
                isActive("/player-progress") ? "text-primary font-semibold" : ""
              }`}
            >
              Progress
            </Link>
          </li>
          <li>
            <Link
              to="/recycle-list"
              className={`hover:text-primary block ${
                isActive("/recycle-list") ? "text-primary font-semibold" : ""
              }`}
            >
              Recycle List
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
