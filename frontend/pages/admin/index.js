import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import { NavLink } from "reactstrap";
import UserInfo from "../../components/auth/UserInfo";

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5 pl-4">
              <h2>Admin Dashboard</h2>
            </div>

            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item">
                  <NavLink href="admin/crud/category-tag">
                    Create Category
                  </NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink href="admin/crud/category-tag">Create Tag</NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink href="admin/crud/blog">Create Blog</NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink href="admin/crud/blogs">Update/Delete Blog</NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink href="user/update">Update Profile</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <UserInfo/>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default AdminIndex;
