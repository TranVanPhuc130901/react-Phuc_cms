const CreateAndEditProduct = ( ) => {
    return (
        <form className="w-full px-5">
            <div className="block row">
            <div className="col-md-12">
                <fieldset>
                    <legend>Thông tin cơ bản</legend>
                    <div className="form-group">
                        <label className="control-label col-md-2">Danh mục cha</label>
                        <div className="col-md-10">
                            dropdownDanh mục
                        </div>
                    </div>
                    <div className="form-group count-this">
                        <label className="control-label col-md-2">Tên bài viết <span></span></label>
                        <div className="w-full">
                            <input className="w-full p-2" type="text"  id="txtName"/>
                        </div>
                    </div>
                    <div className="form-group count-this">
                        <label className="control-label col-md-2">Mô tả <span></span></label>
                        <div className="col-md-10">
                            <textarea placeholder="Mô tả" id="txtDescription" rows={3} />   
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-2">SKU</label>
                        <div className="col-md-2">
                            <input type="text" placeholder="SKU" id="txtSKU" />
                        </div>
                        <label className="control-label col-md-2">Giá niêm yết</label>
                        <div className="col-md-2">
                            <div className="input-group">
                                <input type="number" placeholder="Giá niêm yết" id="txtPrice" />
                            </div>
                        </div>
                        <label className="control-label col-md-2">Giá khuyến mãi</label>
                        <div className="col-md-2">
                            <div className="input-group">
                                <input  type="number" placeholder="Giá khuyến mãi" id="txtPriceNew" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-2">Ngày đăng</label>
                        <div className="col-md-3">
                            <input type="Date" placeholder="Ngày đăng" id="txtCreatedDate" />
                        </div>
                        <label className="control-label col-md-1">Thứ tự</label>
                        <div className="col-md-2">
                            <input  type="Number" placeholder="Thứ tự" id="txtOrder" />
                        </div>
                        <label className="control-label col-md-1">Số lượng tồn</label>
                        <div className="col-md-2">
                            <input type="Number" placeholder="Số lượng tồn" id="txtQuantity" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-md-2">Trạng thái</label>
                        <div className="col-md-2">
                            <label className="switch switch-primary">
                                <input type="checkbox" name="" id="" /><span></span>
                            </label>
                        </div>
                        <label className="control-label col-md-2">Ngừng kinh doanh</label>
                        <div className="col-md-2">
                            <label className="switch switch-primary">
                            <input type="checkbox" name="" id="" /><span></span>
                            </label>
                        </div>
                        <label className="control-label col-md-3">Tiếp tục tạo mục khác</label>
                        <div className="col-md-1">
                            <label className="switch switch-primary">
                            <input type="checkbox" name="" id="" /><span></span>
                            </label>
                        </div>
                    </div>
                </fieldset>
                
                <fieldset>
                    <legend>Mô tả chi tiết</legend>
                    <div className="form-group">
                        <div className="col-md-12">
                            ckEditor
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Tối ưu cho công cụ tìm kiếm</legend>
                    <div className="form-group count-this">
                        <label className="col-md-2 control-label">URL <span></span></label>
                        <div className="col-md-10">
                            <input type="text" id="txtUrl"  className="form-control" placeholder="URL" />
                        </div>
                    </div>
                    <div className="form-group count-this">
                        <label className="col-md-2 control-label">Meta title <span></span></label>
                        <div className="col-md-10">
                            <input type="text" id="txtMetaTitle"  className="form-control" placeholder="Meta title" />   
                        </div>
                    </div>
                    <div className="form-group count-this">
                        <label className="col-md-2 control-label">Meta keyword <span></span></label>
                        <div className="col-md-10">
                            <input type="text" id="txtMetaKeyword"  className="form-control" placeholder="Meta keyword" />
                        </div>
                    </div>
                    <div className="form-group count-this">
                        <label className="col-md-2 control-label">Meta description <span></span></label>
                        <div className="col-md-10">
                            <textarea type="text" id="txtMetaDescription"  className="form-control"  rows={5} placeholder="Meta description" />
                        </div>
                    </div>
                    <div className="form-group count-this">
                        <label className="col-md-2 control-label">Tag <span></span></label>
                        <div className="col-md-10">
                            <input type="text"  id="txtTag" className="form-control input-tags" placeholder="Add tag" />
                        </div>
                    </div>
                </fieldset>
                <div className="form-group">
                    <div className="col-md-10 col-md-offset-2">
                        <button>Create</button>
                    </div>
                </div>
                <button>Save</button>
            </div>
        </div>
        </form>
    )
}

export default CreateAndEditProduct;