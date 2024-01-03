import React, { useEffect, useState } from 'react';
import roleService from '../../../../services/role';

const RoleTable = ({ isStatus,onToggleRoleTable , selectedPermissionData,selectedPermissionId }) => {
  const [active, setActive] = useState(isStatus);
  const [userRoles, setUserRoles] = useState([]);
  const [listRole, setListRole] = useState([]);
  const [listRoleActive, setListRoleActive] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await roleService.getAllRoles();
        setListRole(data.roles);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (selectedPermissionData && selectedPermissionData.roles.length > 0) {
      const roles = selectedPermissionData.roles[0];
      const updatedListRole = listRole.map((role) => ({
        ...role,
        Checked: roles.some((selectedRole) => selectedRole.RoleId === role.RoleId),
      }));
      setUserRoles(updatedListRole);
    } else {
      const defaultListRole = listRole.map((role) => ({
        ...role,
        Checked: false,
      }));
      setUserRoles(defaultListRole);
    }
  }, [selectedPermissionData, listRole]);

  const handleCheckboxChange = (roleId) => {
    setUserRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.RoleId === roleId ? { ...role, Checked: !role.Checked } : role
      )
    );
  };
  
  useEffect(() => {
    setListRoleActive(userRoles.filter((role) => role.Checked).map((role) => role.RoleId));
  }, [userRoles]);
  

  const handleSaveButtonClick = async () => {
    try {
      // Gọi API sửa với listRoleActive và id của item vừa được click
      const data = {
        id: selectedPermissionId, // Thay id bằng id của item vừa được click
        param: listRoleActive.join(","),
      };
      const result = await roleService.editGroupAndRole(data);
      console.log(result);
      // Thêm logic xử lý sau khi gọi API thành công (nếu cần)
    } catch (error) {
      console.error('Error updating roles:', error.message);
      // Thêm logic xử lý lỗi (nếu cần)
    }
  };

  const handleClosePopup = () => {
    onToggleRoleTable()
  };
  return (
    // Chỉ hiện table khi isStatus là true
    isStatus && (
      <div className="overflow-x-auto fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]">
        <div className='bg-white border border-gray-300 fixed w-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col'>
        <div className='flex justify-end w-full p-2 cursor-pointer' onClick={handleClosePopup}><i className='simple-icon-close text-[24px]'></i></div>
          <table className="text-center">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Module Permission</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {userRoles.map((role) => (
                <tr key={role.RoleId} className='cursor-pointer' id={role.RoleId}>
                  <td className="py-2 px-4 border-b">{role.RoleName}</td>
                  <td className="py-2 px-4 border-b">{role.RoleDescription}</td>
                  <td className="py-2 px-4 border-b">
                  <input
                      type="checkbox"
                      value={role.RoleId}
                      checked={role.Checked}
                      onChange={() => handleCheckboxChange(role.RoleId)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleSaveButtonClick}>Lưu</button>
        </div>
      </div>
    )
  );
};

export default RoleTable;
