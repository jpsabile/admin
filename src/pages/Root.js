import { Outlet, Link } from "react-router-dom";

function Root() {
  return (
    <>
      <ul style={{ backgroundColor: "#dddddd" }}>
        <li>
          <Link to={"/admin"}>Admin</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Root;
