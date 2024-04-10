import axios from 'axios';
import PermissionTable from './compoment/permissionTable';
import { useEffect, useState } from 'react';

const CreateAndEditUser = ( ) => {
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    const [user, setUser] = useState({
        UserName: '',
        FirstName: '',
        LastName: '',
        Address: '',
        UserRole: [],
        PhoneNumber: '',
        Email: ''
    });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setUser(prevUser => ({
    //       ...prevUser,
    //       [name]: value
    //     }));
    //   };
    const [selectedUserRole, setSelectedUserRole] = useState(false);
    // gọi api lấy dataUser

    useEffect(() => {
        // Lấy id từ query params của URL
        const urlParams = new URLSearchParams(window.location.search);
        
        const id = urlParams.get('idUser');


        // console.log(id);

        // Gọi API getUserById với id từ query params
        fetch(`http://localhost:3000/api/user?idUser=${id}`)
            .then(response => response.json())
            .then(data => {

                console.log(data)
                // Cập nhật state user với dữ liệu từ API
                setUser(data.users);
                
                // console.log(data.users)
            })
            .catch(error => console.error('Error fetching user:', error));
    }, []);



    const handleSavePermissions = (permissions) => {
        setSelectedPermissions(permissions);
        // Thực hiện các xử lý cần thiết với dữ liệu permissions ở đây
      };
const handleSave = async (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user, UserRole : selectedPermissions};

    const requestBody = JSON.stringify(updatedUser);

    try {
      // Gọi API addUser với dữ liệu user và selectedPermissions
      const response = await axios.post('http://localhost:3000/api/user/updateUser', requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(requestBody)
    //   const data = await response.json();
      console.log(response); // Xử lý response từ API tại đây

      setIsSendingData(false); // Hoàn thành việc gửi dữ liệu
    } catch (error) {
      console.error('Error adding user:', error);
    //   setIsSendingData(false); // Đánh dấu lỗi khi gửi dữ liệu
    }
  };

    const handlePermissionClick = () => {
        // Toggle the selectedPermission state when clicking on a permission
       setSelectedUserRole(!selectedUserRole);
      };
    return (
        <div className='flex w-full flex-col'>
        <form className="h-[calc(100vh-100px)] overflow-auto w-full">
            <div className="flex flex-col gap-4">
                    <legend className="font-bold text-2xl text-center mt-2">Thông tin cơ bản</legend>
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-xl"> <span>Account</span></label>
                        <div className="w-full">
                            <input className="w-full p-2 rounded-[8px] border-[#ced4da]" type="text"  id="txtName" value={user.UserName} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-xl">UserDescription<span></span></label>
                        <div className="w-full">
                            <textarea className="w-full p-2 rounded-[8px] border-[#ced4da]" placeholder="Mô tả" id="txtFirstName" rows={4} value={user.UserDescription}  />   
                        </div>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">Avatar</label>
                            <div className="w-full">
                                <input type="file" placeholder="SKU" id="txtLastName" className="w-full p-2 rounded-[8px] border-[#ced4da]"/>
                            </div>
                            <img src={user.UserAvatar} alt="" />
                        </div>
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">UserEmail</label>
                            <div className="col-md-2">
                                <div className="w-full">
                                    <input type="text" placeholder="Giá niêm yết" id="txtAddress" className="w-full p-2 rounded-[8px] border-[#ced4da]" value={user.UserEmail}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">UserStatus</label>
                            <div className="col-md-2">
                                <div className="w-full">
                                    <input type="number" placeholder="Giá khuyến mãi" id="txtPhoneNumber" className="w-full p-2 rounded-[8px] border-[#ced4da]" value={user.UserStatus} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">Email</label>
                            <div className="w-full">
                                <input type="email" className="w-full p-2 rounded-[8px] border-[#ced4da]" placeholder="Email *" id="txtEmail" />
                            </div>
                        </div>
                        {/* <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">IdentityCard</label>
                            <div className="w-full">
                                <input  type="Number" className="w-full p-2 rounded-[8px] border-[#ced4da]" placeholder="Thứ tự" id="txtOrder" />
                            </div>
                        </div> */}
                        
                    </div>
                    <div className='cursor-pointer bg-sky-600 text-white p-2 rounded-[8px] flex justify-center items-center w-[400px]'
                    onClick={handlePermissionClick}
                    >Mở bảng phân quyền</div>
                    
                {/* <button>Save</button> */}
            </div>
            <PermissionTable isStatus={selectedUserRole} activeFormPermission={handlePermissionClick} activeSavePermission={handleSavePermissions} data={user.UserRole}/>
            <button type='submit' onClick={handleSave} className='cursor-pointer bg-sky-600 text-white p-2 rounded-[8px] flex justify-center items-center w-[400px] mt-2'>save</button>
        </form>

            
        </div>
    )
}

export default CreateAndEditUser;