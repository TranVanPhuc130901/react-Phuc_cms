import React, { useEffect, useState } from 'react';
import roleService from '../../../../services/role';
import RoleTable from './roleTable';

const PermissionTable = ({ isStatus, activeFormPermission,activeSavePermission, data }) => {
  const [permissions, setPermissions] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState(data); // Khởi tạo giá trị ban đầu cho selectedPermissions
  const [status, setStatus] = useState(isStatus);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await roleService.getAllGroupsAndRoles();
        setPermissions(responseData.roles);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data)
    setSelectedPermissions(data);
    setStatus(isStatus); // Cập nhật selectedPermissions khi data thay đổi
  }, [data]); // Theo dõi thay đổi của data


  const handlePermissionClick = (permissionId) => {
    setSelectedPermissions([...selectedPermissions, permissionId]); // Thêm permissionId vào mảng selectedPermissions
  };

  const handleToggleRoleTable = () => {
    setSelectedPermissions([]); // Đặt lại selectedPermissions về mảng rỗng
  };

  const handleSavePermissions = (e) => {
    e.preventDefault();
    activeSavePermission(selectedPermissions);
    // isStatus = false
    activeFormPermission(selectedPermissions); 

    // console.log(isStatus);
  };

  const handleActiveForm = () => {
    activeFormPermission(selectedPermissions); // Truyền selectedPermissions lên component cha
  };

  return (
    isStatus && (
      <div className="overflow-x-auto fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]">
        <div className='bg-white border border-gray-300 fixed w-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col'>
          <div className='flex justify-end w-full p-2 cursor-pointer' onClick={handleActiveForm}>
            <i className='simple-icon-close text-[24px]'></i>
          </div>
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
                  key={permission._id}
                  className={`cursor-pointer`}
                  id={permission._id}
                  onDoubleClick={() => handlePermissionClick(permission._id)}
                >
                  <td className="py-2 px-4 border-b">{permission.RoleName}</td>
                  <td className="py-2 px-4 border-b">{permission.RoleDescription}</td>
                  <td className="py-2 px-4 border-b">
                    <input
                      type="checkbox"
                      value={permission._id}
                      checked={selectedPermissions.includes(permission._id)}
                      onChange={() => handlePermissionClick(permission._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleSavePermissions}>Lưu</button>
        </div>
      </div>
    )
  );
};

export default PermissionTable;
