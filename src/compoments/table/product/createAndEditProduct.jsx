import DropDownList from '../../base/dropDownList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from '../../../redux/features/groupsDuck';
import { useCallback, useEffect, useState } from 'react';
import MyEditor from '../../ckEditor/myEditor.jsx';
import ToggleButton from '../../base/toggleButton.jsx';
import productService from '../../../services/product.jsx';
import { MyEditorProvider } from '../../base/useContext.jsx';
import UploadImageBox from '../../base/uploadImage.jsx';
import { useParams } from 'react-router-dom';


const CreateAndEditProduct = ( ) => {
    // lấy giá trị id từ thanh url
    const {id} = useParams();
    // tạo biến khai báo trạng thái là insert hay update
    const [editingMode, setEditingMode] = useState(false);
    // khai báo các trường state để thêm mới vào Db
    // const [productName, setProductName] = useState("");
    // const [productDescription, setProductDescription] = useState("");
    // const [productSku, setProductSku] = useState("");
    // const [productPriceOld, setProductPriceOld] = useState("");
    // const [productPriceNew, setProductPriceNew] = useState("");
    // const [productDate, setProductDate] = useState("");
    // const [productQuantity, setProductQuantity] = useState("");
    // const [productImage, setProductImage] = useState("");
    // const [productOrder, setProductOrder] = useState("");
    // const [productContent, setProductContent] = useState("");
    // const [productUrl, setProductUrl] = useState("");
    // const [productMetaTitle, setProductMetaTitle] = useState("");
    // const [productMetaDescription, setProductMetaDescription] = useState("");
    // const [productMetaKeyword, setProductMetaKeyword] = useState("");
    // const [productTag, setProductTag] = useState("");
    // const [toggleStates, setToggleStates] = useState({
    //     txtStatus: 0,
    //     txtBusiness: 0,
    //     txtOther: 0,
    //   });
     const [formData, setFormData] = useState({
        productName: "",
        productDescription: "",
        productSku: "",
        productPriceOld: "",
        productPriceNew: "",
        productDate: "",
        productQuantity: "",
        productImage: "",
        productOrder: "",
        productContent: "",
        productUrl: "",
        productMetaTitle: "",
        productMetaDescription: "",
        productMetaKeyword: "",
        productTag: "",
        toggleStates: {
            txtStatus: 0,
            txtBusiness: 0,
            txtOther: 0,
        },
    });
// ------------------------ end khai báo state
// khai báo form Data 
    // let formProduct = {
    //     Title: productName,
    //     Description: productDescription,
    //     // productSku: productSku,
    //     fiPriceOld: productPriceOld,
    //     fiPriceNew: productPriceNew,
    //     dateCreated: productDate,
    //     Status: toggleStates.txtStatus,
    //     productBusiness: toggleStates.txtBusiness,
    //     productOther: toggleStates.txtOther,
    //     Quanlity: productQuantity,
    //     productImage: productImage,
    //     SortOrder: productOrder,
    //     Content: productContent,
    //     Link: productUrl,
    //     MetaTitle: productMetaTitle,
    //     MetaDescription: productMetaDescription,
    //     MetaKeyword: productMetaKeyword,
    //     Tag: productTag,
    //     Param: "",
    // }
// end khai báo form data

const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

// xử lý khi thêm mới Item
const handleInsert = async (formData) => {
    // Thực hiện logic insert ở đây
    console.log("Inserting product:", formData);
  };
  // xử lý khi cập nhật item
  const handleUpdate = async (formData) => {
    // Thực hiện logic update ở đây
    console.log("Updating product:", formData);
  };
const handleEditorContentChange = (newContent) => {
    // Thực hiện các công việc cần thiết với newContent, ví dụ:
    console.log("Nội dung mới từ MyEditor:", newContent);
    // Cập nhật trạng thái formProduct nếu cần:
    setFormData({
        ...formData,
        productContent: newContent,
      });
  };
const handleToggle = (id, status) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [id]: status,
    }));
    console.log(toggleStates);
  };

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(formProduct);
        if (editingMode) {
            // lấy thông tin cũ từ DB
           let existingProduct = await productService.getAllProducts(id);
            setFormData({
                ...formData,
                productName: existingProduct.Title,
                productDescription: existingProduct.Description,
                // ... (Cập nhật các trường khác)
            });
            // xử lý khi cập nhật
            handleUpdate(id ,formData);
          } else {
            productService.insertProduct(formData);
          }
    }

    const [editorData, setEditorData] = useState();
    const [selectedCategory, setSelectedCategory] = useState("");
    const dispatch = useDispatch();
    const groups = useSelector((state) => state.groups.groups);
    const status = useSelector((state) => state.groups.status);
    const error = useSelector((state) => state.groups.error);
   
    useEffect(() => {
        dispatch(fetchGroups("product"));
      }, [dispatch]);
      if (status === 'loading') {
        return <div>Loading...</div>;
      }
    
      if (status === 'failed') {
        return <div>Error: {error}</div>;
      }

      const handleCategoryChange = (category) => {
        setSelectedCategory(category);
      };
    return (
        <div>
            <h2>{editingMode ? 'Cập nhật' : 'Thêm mới'} Product</h2>
            <form className="h-[calc(100vh-100px)] overflow-auto w-full">
                <div className="flex flex-col gap-4">
                        <legend className="font-bold text-2xl text-center mt-2">Thông tin cơ bản</legend>
                        <div className="form-group">
                            <label className="control-label col-md-2">Danh mục cha</label>
                            <div className="col-md-10">
                                <DropDownList options={groups} onSelectChange={handleCategoryChange} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-xl">Tên bài viết <span></span></label>
                            <div className="w-full">
                                <input 
                                    className="w-full p-2 rounded-[8px] border-[#ced4da]" 
                                    type="text" 
                                    id="txtName"
                                    onChange={(e) => handleChange("productName", e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-xl">Mô tả <span></span></label>
                            <div className="w-full">
                                <textarea 
                                    className="w-full p-2 rounded-[8px] border-[#ced4da]" 
                                    placeholder="Mô tả"
                                    id="txtDescription" 
                                    rows={4}
                                    onChange={(e) => handleChange("productDescription", e.target.value)}
                                />   
                            </div>
                        </div>
                        <div className="flex gap-[10px]">
                            <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                                <label className="font-bold text-xl">SKU</label>
                                <div className="w-full">
                                    <input 
                                        type="text" 
                                        placeholder="SKU" 
                                        id="txtSKU" 
                                        className="w-full p-2 rounded-[8px] border-[#ced4da]"
                                        onChange={(e) => handleChange("productSKU", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                                <label className="font-bold text-xl">Giá niêm yết</label>
                                <div className="col-md-2">
                                    <div className="w-full">
                                        <input 
                                            type="number" 
                                            placeholder="Giá niêm yết" 
                                            id="txtPrice" 
                                            className="w-full p-2 rounded-[8px] border-[#ced4da]"
                                            onChange={(e) => handleChange("productPriceOld", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                                <label className="font-bold text-xl">Giá khuyến mãi</label>
                                <div className="col-md-2">
                                    <div className="w-full">
                                        <input  
                                            type="number" 
                                            placeholder="Giá khuyến mãi" 
                                            id="txtPriceNew" 
                                            className="w-full p-2 rounded-[8px] border-[#ced4da]"
                                            onChange={(e) => handleChange("productPriceNew",e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <UploadImageBox/>
                        <div className="flex gap-[10px]">
                            <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                                <label className="font-bold text-xl">Ngày đăng</label>
                                <div className="w-full">
                                    <input type="Date" 
                                        className="w-full p-2 rounded-[8px] border-[#ced4da]" 
                                        placeholder="Ngày đăng" 
                                        id="txtCreatedDate"
                                        onChange={(e) => handleChange("productDate",(e.target.value))}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                                <label className="font-bold text-xl">Thứ tự</label>
                                <div className="w-full">
                                    <input  
                                        type="Number" 
                                        className="w-full p-2 rounded-[8px] border-[#ced4da]" 
                                        placeholder="Thứ tự" id="txtOrder"
                                        onChange={(e) => handleChange("productOrder",e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                                <label className="font-bold text-xl">Số lượng tồn</label>
                                <div className="w-full">
                                    <input 
                                        type="Number" 
                                        className="w-full p-2 rounded-[8px] border-[#ced4da]" 
                                        placeholder="Số lượng tồn" id="txtQuantity"
                                        onChange={(e) => handleChange("productQuantity",e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[10px]">
                            <ToggleButton
                                name="Trạng thái "
                                idInput="txtStatus"
                                onToggle={(status) => handleToggle("txtStatus", status)}
                            />
                            <ToggleButton
                                name="Ngừng kinh doanh"
                                idInput="txtBusiness"
                                onToggle={(status) => handleToggle("txtBusiness", status)}
                            />
                            <ToggleButton
                                name="Tiếp tục tạo mục khác"
                                idInput="txtOther"
                                onToggle={(status) => handleToggle("txtOther", status)}
                            />
                        </div>
                        <legend className="font-bold text-xl">Mô tả chi tiết</legend>
                        <div className="form-group">
                            {/* <MyEditorProvider> */}
                                <div className="">
                                    <MyEditor onContentChange={(newContent) => handleEditorContentChange(newContent)}/>
                                </div>
                            {/* </MyEditorProvider> */}
                        </div>
                        <legend className="font-bold text-xl">Tối ưu cho công cụ tìm kiếm</legend>
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-xl">URL <span></span></label>
                            <div className="w-full">
                                <input 
                                    type="text" id="txtUrl" 
                                    className="w-full p-2 rounded-[8px] border-[#ced4da]" 
                                    placeholder="URL"
                                    onChange={(e) => handleChange("productUrl",e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-xl">Meta title <span></span></label>
                            <div className="col-md-10">
                                <input 
                                    type="text" 
                                    id="txtMetaTitle" 
                                    className="w-full p-2 rounded-[8px] border-[#ced4da]" 
                                    placeholder="Meta title"
                                    onChange={(e) => handleChange("productMetaTitle",e.target.value)}
                                />   
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-xl">Meta keyword <span></span></label>
                            <div className="col-md-10">
                                <input 
                                    type="text" 
                                    id="txtMetaKeyword" 
                                    className="w-full p-2 rounded-[8px] border-[#ced4da]" 
                                    placeholder="Meta keyword"
                                    onChange={(e) => handleChange("productMetaKeyword",e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-xl">Meta description <span></span></label>
                            <div className="col-md-10">
                                <textarea
                                    type="text" id="txtMetaDescription"  
                                    className="w-full p-2 rounded-[8px] border-[#ced4da]"  
                                    rows={5} 
                                    placeholder="Meta description"
                                    onChange={(e) => handleChange("productMetaDescription",e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-xl">Tag <span></span></label>
                            <div className="col-md-10">
                                <input 
                                    type="text" 
                                    id="txtTag" 
                                    className="w-full p-2 rounded-[8px] border-[#ced4da]" 
                                    placeholder="Add tag" 
                                    onChange={(e) => handleChange("productTag",e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                        <div className="col-md-10 col-md-offset-2">
                            <button
                                className="bg-[--primary-light-bluenavy] text-white px-4 py-2 rounded-full"
                                onClick={(e) => handleClick(e)}
                                type='button'
                            >
                                Create
                            </button>
                        </div>
                    </div>
                    {/* <button>Save</button> */}
                </div>
            </form>
        </div>
    )
}

export default CreateAndEditProduct;