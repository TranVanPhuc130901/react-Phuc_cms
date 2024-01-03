
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PermissionTable from './compoment/permissionTable';
import { useState } from 'react';

const CreateAndEditUser = ( ) => {
    const [selectedUserRole, setSelectedUserRole] = useState(false);
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
                            <input className="w-full p-2 rounded-[8px] border-[#ced4da]" type="text"  id="txtName"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-xl">FirstName<span></span></label>
                        <div className="w-full">
                            <textarea className="w-full p-2 rounded-[8px] border-[#ced4da]" placeholder="Mô tả" id="txtFirstName" rows={4} />   
                        </div>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">LastName</label>
                            <div className="w-full">
                                <input type="text" placeholder="SKU" id="txtLastName" className="w-full p-2 rounded-[8px] border-[#ced4da]"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">Address</label>
                            <div className="col-md-2">
                                <div className="w-full">
                                    <input type="text" placeholder="Giá niêm yết" id="txtAddress" className="w-full p-2 rounded-[8px] border-[#ced4da]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">PhoneNumber</label>
                            <div className="col-md-2">
                                <div className="w-full">
                                    <input type="number" placeholder="Giá khuyến mãi" id="txtPhoneNumber" className="w-full p-2 rounded-[8px] border-[#ced4da]" />
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
        </form>

        <PermissionTable isStatus={selectedUserRole} activeFormPermission={handlePermissionClick}/>
        </div>
    )
}

export default CreateAndEditUser;