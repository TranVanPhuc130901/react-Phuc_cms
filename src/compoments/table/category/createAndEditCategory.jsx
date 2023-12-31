import DropDownList from "../../base/dropDownList";

const CreateAndEditCategory = () => {
    return (
        <form className="h-[calc(100vh-100px)] overflow-auto w-full">
            <div className="flex flex-col gap-4">
                    <legend className="font-bold text-2xl text-center mt-2">Thông tin cơ bản</legend>
                    <div className="form-group">
                        <label className="control-label col-md-2">Danh mục cha</label>
                        <DropDownList/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-xl">Tên bài viết <span></span></label>
                        <div className="w-full">
                            <input className="w-full p-2 rounded-[8px] border-[#ced4da]" type="text"  id="txtName"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-xl">Mô tả <span></span></label>
                        <div className="w-full">
                            <textarea className="w-full p-2 rounded-[8px] border-[#ced4da]" placeholder="Mô tả" id="txtDescription" rows={4} />   
                        </div>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">Trạng thái</label>
                            <div className="w-full">
                                <label className="switch switch-primary">
                                    <input type="checkbox" name="" id="" className="toggle-checkbox" /><span className="toggle-label bg-blue-500 text-white px-4 py-2"></span>
                                </label>
                            </div>
                        </div>
                       <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">Ngừng kinh doanh</label>
                            <div className="w-full">
                                <label className="switch switch-primary">
                                <input type="checkbox" name="" id="" /><span></span>
                                </label>
                            </div>
                       </div>
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">Tiếp tục tạo mục khác</label>
                            <div className="w-full">
                                <label className="switch switch-primary">
                                <input type="checkbox" name="" id="" /><span></span>
                                </label>
                            </div>
                        </div>
                    </div>
                
                    
                    <legend className="font-bold text-xl">Tối ưu cho công cụ tìm kiếm</legend>
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-xl">URL <span></span></label>
                        <div className="w-full">
                            <input type="text" id="txtUrl" className="w-full p-2 rounded-[8px] border-[#ced4da]" placeholder="URL" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-xl">Meta title <span></span></label>
                        <div className="col-md-10">
                            <input type="text" id="txtMetaTitle" className="w-full p-2 rounded-[8px] border-[#ced4da]" placeholder="Meta title" />   
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-xl">Meta keyword <span></span></label>
                        <div className="col-md-10">
                            <input type="text" id="txtMetaKeyword" className="w-full p-2 rounded-[8px] border-[#ced4da]" placeholder="Meta keyword" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-xl">Meta description <span></span></label>
                        <div className="col-md-10">
                            <textarea type="text" id="txtMetaDescription"  className="w-full p-2 rounded-[8px] border-[#ced4da]"  rows={5} placeholder="Meta description" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="font-bold text-xl">Tag <span></span></label>
                        <div className="col-md-10">
                            <input type="text"  id="txtTag" className="w-full p-2 rounded-[8px] border-[#ced4da]" placeholder="Add tag" />
                        </div>
                    </div>
                <div className="flex flex-col gap-3">
                    <div className="col-md-10 col-md-offset-2">
                        <button className="bg-[--primary-light-bluenavy] text-white px-4 py-2 rounded-full">Create</button>
                    </div>
                </div>
                {/* <button>Save</button> */}
            </div>
        </form>
    )
}

export default CreateAndEditCategory;