const CreateAndEditProduct = ( ) => {
    return (
        <form>
             <div class="block row">
            <div class="col-md-12">
                <fieldset>
                    <legend>Thông tin cơ bản</legend>
                    <div class="form-group">
                        <label class="control-label col-md-2">Danh mục cha</label>
                        <div class="col-md-10">
                            dropdownDanh mục
                        </div>
                    </div>
                    <div class="form-group count-this">
                        <label class="control-label col-md-2">Tên bài viết <span></span></label>
                        <div class="col-md-10">
                            <input type="text" placeholder="Tên bài viết" id="txtName"/>
                        </div>
                    </div>
                    <div class="form-group count-this">
                        <label class="control-label col-md-2">Mô tả <span></span></label>
                        <div class="col-md-10">
                            <input type="text" placeholder="Mô tả" TextMode="MultiLine" id="txtDescription" Rows="3" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-2">SKU</label>
                        <div class="col-md-2">
                            <input type="text" placeholder="SKU" id="txtSKU" />
                        </div>
                        <label class="control-label col-md-2">Giá niêm yết</label>
                        <div class="col-md-2">
                            <div class="input-group">
                                <input type="text" TextMode="Number" placeholder="Giá niêm yết" id="txtPrice" />
                                {/* <asp:TextBox runat="server" ID="txtPriceOld" TextMode="Number" CssClass="form-control" onkeyup="HienThiGia(this,'giaNY');"></asp:TextBox>
                                <div id="giaNY" class="input-group-addon">
                                    <asp:Literal runat="server" ID="ltrPriceOld" />
                                </div> */}
                            </div>
                        </div>
                        <label class="control-label col-md-2">Giá khuyến mãi</label>
                        <div class="col-md-2">
                            <div class="input-group">
                                <input type="text" TextMode="Number" placeholder="Giá khuyến mãi" id="txtPriceNew" />
                                {/* <asp:TextBox runat="server" ID="txtPriceNew" TextMode="Number" CssClass="form-control" onkeyup="HienThiGia(this,'giaBan');"></asp:TextBox>
                                <div id="giaBan" class="input-group-addon">
                                    <asp:Literal runat="server" ID="ltrPriceNew" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <uc1:UploadImage runat="server" ID="UploadImage" />
                    <uc1:UploadImage runat="server" ID="UploadImage1" /> */}
                    <div class="form-group">
                        <label class="control-label col-md-2">Ngày đăng</label>
                        <div class="col-md-3">
                            <input type="text" TextMode="Date" placeholder="Ngày đăng" id="txtCreatedDate" />
                        </div>
                        <label class="control-label col-md-1">Thứ tự</label>
                        <div class="col-md-2">
                            <input type="text" TextMode="Number" placeholder="Thứ tự" id="txtOrder" />
                        </div>
                        <label class="control-label col-md-1">Số lượng tồn</label>
                        <div class="col-md-2">
                            <input type="text" TextMode="Number" placeholder="Số lượng tồn" id="txtQuantity" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-2">Trạng thái</label>
                        <div class="col-md-2">
                            <label class="switch switch-primary">
                                <input type="checkbox" name="" id="" /><span></span>
                            </label>
                        </div>
                        <label class="control-label col-md-2">Ngừng kinh doanh</label>
                        <div class="col-md-2">
                            <label class="switch switch-primary">
                            <input type="checkbox" name="" id="" /><span></span>
                            </label>
                        </div>
                        <label class="control-label col-md-3">Tiếp tục tạo mục khác</label>
                        <div class="col-md-1">
                            <label class="switch switch-primary">
                            <input type="checkbox" name="" id="" /><span></span>
                            </label>
                        </div>
                    </div>
                </fieldset>
                {/* <asp:ScriptManager runat="server" ID="ScriptManager1" />
                <asp:UpdatePanel runat="server" ID="UpdatePanel">
                    <ContentTemplate>
                        <fieldset>
                            <legend>Nhóm phân loại</legend>
                            <asp:Repeater runat="server" ID="rptOption" OnItemCommand="rptOption_OnItemCommand">
                                <ItemTemplate>
                                    <div class="form-group">
                                        <div class="col-md-2">
                                            <asp:TextBox type="text" ID="tbGroupName" CssClass="form-control" runat="server" placeholder="Tên nhóm phân loại"></asp:TextBox>
                                        </div>
                                        <div class="col-md-8">
                                            <asp:TextBox type="text" ID="tbClass" CssClass="form-control" runat="server" placeholder="Có thể nhập nhiều loại, mỗi loại cách nhau bằng dấu phẩy (,)"></asp:TextBox>
                                        </div>
                                        <div class="col-md-2">
                                            <asp:LinkButton id="lbtDelete" Text="Xóa" runat="server" CssClass="btn btn-warning" CommandName="delete" CommandArgument="1"/>
                                        </div>
                                    </div>
                                </ItemTemplate>
                            </asp:Repeater>
                            <div class="form-group">
                                <div class="col-md-3 col-md-offset-3">
                                    <asp:Button id="btAddOption" runat="server" Text="Thêm mới phân loại" OnClick="btAddOption_Click" CssClass="btn btn-default" CommandArgument="1" />
                                </div>
                            </div>
                        </fieldset>
                    </ContentTemplate>
                </asp:UpdatePanel>
                <asp:UpdatePanel runat="server" ID="UpdatePanel1">
                    <ContentTemplate>
                        <fieldset>
                            <legend>Nhóm bán giá sỉ</legend>
                            <asp:Repeater runat="server" ID="rptWholesale" OnItemCommand="rptWholesale_OnItemCommand">
                                <ItemTemplate>
                                    <div class="form-group">
                                        <div class="col-md-2">
                                            <asp:TextBox runat="server" type="text" ID="tbGroupWholesale" placeholder="Số lượng" CssClass="form-control" ></asp:TextBox>
                                        </div>
                                        <div class="col-md-8">
                                            <asp:TextBox type="text" ID="tbClassWholesale" CssClass="form-control" data-index='<%#  Container.ItemIndex %>' runat="server" placeholder="Giá bán" onkeyup="HienThiGiaBanLe(this, document.getElementById(this.getAttribute('id')).getAttribute('data-index'))"></asp:TextBox>
                                            <div id='<%# "giaSi_" + Container.ItemIndex %>' class="input-group-addon">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <asp:LinkButton id="lbtDelete" Text="Xóa" runat="server" CssClass="btn btn-warning" CommandName="delete" CommandArgument="1"/>
                                        </div>
                                    </div>
                                </ItemTemplate>
                            </asp:Repeater>
                            <div class="form-group">
                                <div class="col-md-3 col-md-offset-3">
                                    <asp:Button id="btAddOptionWholesale" runat="server" Text="Thêm mới phân loại" OnClick="btAddOptionWholesale_click" CssClass="btn btn-default" CommandArgument="1" />
                                </div>
                            </div>
                        </fieldset>
                    </ContentTemplate>
                </asp:UpdatePanel>
                <fieldset runat="server" id="fsFilter" class="fsFilter">
                    <legend>Thuộc tính lọc</legend>
                    <div class="form-group">
                        <asp:Repeater ID="rptParentFilter" runat="server">
                            <ItemTemplate>
                                <div class="col-sm-6 col-md-4 col-lg-3">
                                    <div class="fwb"><%#Eval(FilterColumns.VfName).ToString() %></div>
                                    <div class="list">
                                        <asp:RadioButtonList ID="rdlAnswer" runat="server" DataSource='<%#GetSubFilter(Eval(FilterColumns.IfId).ToString(), Eval(FilterColumns.IfType).ToString(), "0") %>' DataTextField="<%#FilterColumns.VfName%>" DataValueField="<%#FilterColumns.IfId %>" />
                                        <asp:CheckBoxList ID="cblAnswer" runat="server" DataSource='<%#GetSubFilter(Eval(FilterColumns.IfId).ToString(), Eval(FilterColumns.IfType).ToString(), "1") %>' DataTextField="<%#FilterColumns.VfName%>" DataValueField="<%#FilterColumns.IfId %>" />
                                    </div>
                                </div>
                            </ItemTemplate>
                        </asp:Repeater>
                    </div>
                </fieldset> */}
                <fieldset>
                    <legend>Mô tả chi tiết</legend>
                    <div class="form-group">
                        <div class="col-md-12">
                            ckEditor
                            {/* <CKEditor:CKEditorControl ID="txt_content" runat="server"></CKEditor:CKEditorControl> */}
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Tối ưu cho công cụ tìm kiếm</legend>
                    <div class="form-group count-this">
                        <label class="col-md-2 control-label">URL <span></span></label>
                        <div class="col-md-10">
                            <input type="text" ID="txtUrl" ClientIDMode="Static" CssClass="form-control" placeholder="URL" />
                            {/* <asp:TextBox type="text" ID="txtUrl" ClientIDMode="Static" CssClass="form-control" runat="server"></asp:TextBox> */}
                        </div>
                    </div>
                    <div class="form-group count-this">
                        <label class="col-md-2 control-label">Meta title <span></span></label>
                        <div class="col-md-10">
                            <input type="text" ID="txtMetaTitle" ClientIDMode="Static" CssClass="form-control" placeholder="Meta title" />   
                            {/* <asp:TextBox type="text" ID="txtMetaTitle" ClientIDMode="Static" CssClass="form-control" runat="server" placeholder="Giới hạn từ 50 đến 65 ký tự"></asp:TextBox> */}
                        </div>
                    </div>
                    <div class="form-group count-this">
                        <label class="col-md-2 control-label">Meta keyword <span></span></label>
                        <div class="col-md-10">
                            <input type="text" ID="txtMetaKeyword" ClientIDMode="Static" CssClass="form-control" placeholder="Meta keyword" />
                            {/* <asp:TextBox type="text" ID="txtMetaKeyword" CssClass="form-control" runat="server"></asp:TextBox> */}
                        </div>
                    </div>
                    <div class="form-group count-this">
                        <label class="col-md-2 control-label">Meta description <span></span></label>
                        <div class="col-md-10">
                            <input type="text" ID="txtMetaDescription" ClientIDMode="Static" CssClass="form-control" TextMode="MultiLine" Rows="5" placeholder="Meta description" />
                            {/* <asp:TextBox type="text" ID="txtMetaDescription" CssClass="form-control" runat="server" TextMode="MultiLine" Rows="5" placeholder="Giới hạn từ 130 đến 160 ký tự"></asp:TextBox> */}
                        </div>
                    </div>
                    <div class="form-group count-this">
                        <label class="col-md-2 control-label">Tag <span></span></label>
                        <div class="col-md-10">
                            <input type="text"  ID="txtTag" CssClass="form-control input-tags" placeholder="Add tag" />
                            {/* <asp:TextBox type="text" ID="txtTag" CssClass="form-control input-tags" placeholder="Add tag" runat="server"></asp:TextBox> */}
                        </div>
                    </div>
                </fieldset>
                <div class="form-group">
                    <div class="col-md-10 col-md-offset-2">
                        <button>Create</button>
                        {/* <asp:Button runat="server" ID="btSubmit" CssClass="btn btn-primary" OnClick="btSubmit_OnClick" Text="Thêm mới" OnClientClick="unhook();" /> */}
                    </div>
                </div>
                <button>Save</button>
                {/* <asp:Button runat="server" ID="btSubmit2" OnClick="btSubmit_OnClick" CssClass="quick-submit btn btn-primary" Text="Save" OnClientClick="unhook();" /> */}
            </div>
        </div>
        </form>
    )
}

export default CreateAndEditProduct;