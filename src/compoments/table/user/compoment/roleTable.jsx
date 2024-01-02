import React from 'react';
import roleService from '../../../../services/role';

const RoleTable = ({ roles }) => {
    const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call your API function here
        const data = await roleService.getAllGroupsAndRoles();
        setRoles(data.datas.items);
        console.log(data.datas.items); // Assuming your API response contains the products
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Module Permission</th>
            <th className="py-2 px-4 border-b">Role Name</th>
            <th className="py-2 px-4 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.role_id}>
              <td className="py-2 px-4 border-b">{role.role_id}</td>
              <td className="py-2 px-4 border-b">{role.role_name}</td>
              <td className="py-2 px-4 border-b">{role.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleTable;
