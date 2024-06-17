import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="w-full bg-primary flex justify-between px-4">
        <h1 className="text-white">Asher</h1>
        <ul>
          <li>
            <Link to="/" className="text-white hover:text-tertiary">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
