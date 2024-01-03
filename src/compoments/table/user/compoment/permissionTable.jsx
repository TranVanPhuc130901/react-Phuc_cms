import React, { useEffect, useState } from 'react';
import roleService from '../../../../services/role';
import RoleTable from './roleTable';

const PermissionTable = ({ isStatus, activeFormPermission }) => {
  const [permissions, setPermission] = useState([]);
  const [selectedPermissionId, setSelectedPermissionId] = useState(null);
  const [selectedPermissionData, setSelectedPermissionData] = useState(null);
const[roleActive, setRoleActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await roleService.getAllGroupsAndRoles();
        setPermission(data.roles);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  console.log(roleActive)

  useEffect(() => {
    const fetchData = async () => {
      if (selectedPermissionId) {
        try {
          const data = await roleService.getAllRoleToPermission(selectedPermissionId);
          setSelectedPermissionData(data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      }
    };

    fetchData();
  }, [selectedPermissionId]);

  const handlePermissionClick = (permissionId) => {
    setSelectedPermissionId(permissionId);
    setRoleActive(true);
  };

  const handleToggleRoleTable = () => {
    setRoleActive((prevIsStatus) => !prevIsStatus);
  };

  const handleActiveForm = () => {activeFormPermission()}

  return (
    isStatus && (<div className="overflow-x-auto fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]">
    <div className='bg-white border border-gray-300 fixed w-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col'>
    <div className='flex justify-end w-full p-2 cursor-pointer' onClick={handleActiveForm} ><i className='simple-icon-close text-[24px]'></i></div>
      <table className="text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Module Permission</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr
              key={permission.PermissionId}
              className={`cursor-pointer`}
              id={permission.PermissionId}
              onDoubleClick={() => handlePermissionClick(permission.PermissionId)}
            >
              <td className="py-2 px-4 border-b">{permission.PermissionName}</td>
              <td className="py-2 px-4 border-b">{permission.PermissionDescription}</td>
              <td className="py-2 px-4 border-b">
                <input type="checkbox" value={permission.PermissionId} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Lưu</button>
    </div>
      <RoleTable isStatus={roleActive} onToggleRoleTable={handleToggleRoleTable} selectedPermissionData={selectedPermissionData} selectedPermissionId={selectedPermissionId} />
  </div>)
  );
};

export default PermissionTable;
