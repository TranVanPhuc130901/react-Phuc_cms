
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CreateAndEditProduct = ( ) => {
    return (
        <form className="h-[calc(100vh-100px)] overflow-auto w-full">
            <div className="flex flex-col gap-4">
                    <legend className="font-bold text-2xl text-center mt-2">Thông tin cơ bản</legend>
                    <div className="form-group">
                        <label className="control-label col-md-2">Danh mục cha</label>
                        <div className="col-md-10">
                            dropdownDanh mục
                        </div>
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
                            <label className="font-bold text-xl">SKU</label>
                            <div className="w-full">
                                <input type="text" placeholder="SKU" id="txtSKU" className="w-full p-2 rounded-[8px] border-[#ced4da]"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">Giá niêm yết</label>
                            <div className="col-md-2">
                                <div className="w-full">
                                    <input type="number" placeholder="Giá niêm yết" id="txtPrice" className="w-full p-2 rounded-[8px] border-[#ced4da]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">Giá khuyến mãi</label>
                            <div className="col-md-2">
                                <div className="w-full">
                                    <input  type="number" placeholder="Giá khuyến mãi" id="txtPriceNew" className="w-full p-2 rounded-[8px] border-[#ced4da]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">Ngày đăng</label>
                            <div className="w-full">
                                <input type="Date" className="w-full p-2 rounded-[8px] border-[#ced4da]" placeholder="Ngày đăng" id="txtCreatedDate" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">Thứ tự</label>
                            <div className="w-full">
                                <input  type="Number" className="w-full p-2 rounded-[8px] border-[#ced4da]" placeholder="Thứ tự" id="txtOrder" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                            <label className="font-bold text-xl">Số lượng tồn</label>
                            <div className="w-full">
                                <input type="Number" className="w-full p-2 rounded-[8px] border-[#ced4da]" placeholder="Số lượng tồn" id="txtQuantity" />
                            </div>
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
                
                    <legend className="font-bold text-xl">Mô tả chi tiết</legend>
                    <div className="form-group">
                        <div className="h-[300px]">
                        <CKEditor height="300px"
                            editor={ ClassicEditor }
                            data="<p>Hello from CKEditor5!</p>"
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event ) => {
                                console.log( event );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
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

export default CreateAndEditProduct;