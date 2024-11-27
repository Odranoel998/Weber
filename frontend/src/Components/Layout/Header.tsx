import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 bg-opacity-90 text-white p-6 flex flex-col space-y-4 shadow-lg z-50">
      <h1 className="text-2xl font-bold mb-6 text-center">My App</h1>
      
      {/* Links de navegación */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-left py-2 px-4 w-full rounded-md ${
            isActive ? "bg-gray-700" : "hover:bg-gray-700"
          } transition-colors duration-300`
        }
      >
        FormScripts
      </NavLink>
      
      
      <NavLink
        to="/listscripts"
        className={({ isActive }) =>
          `text-left py-2 px-4 w-full rounded-md ${
            isActive ? "bg-gray-700" : "hover:bg-gray-700"
          } transition-colors duration-300`
        }
      >
        ListScripts
      </NavLink>
      
      <NavLink
        to="/search"
        className={({ isActive }) =>
          `text-left py-2 px-4 w-full rounded-md ${
            isActive ? "bg-gray-700" : "hover:bg-gray-700"
          } transition-colors duration-300`
        }
      >
        Search
      </NavLink>
    </div>
  );
};

export default Header;
