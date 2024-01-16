import DropDownList from '../../base/dropDownList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroups } from '../../../redux/features/groupsDuck';
import { useCallback, useEffect, useState } from 'react';
import MyEditor from '../../ckEditor/myEditor.jsx';
import ToggleButton from '../../base/toggleButton.jsx';
import productService from '../../../services/product.jsx';
import { MyEditorProvider } from '../../base/useContext.jsx';
import UploadImageBox from '../../base/uploadImage.jsx';
import { useParams,useLocation   } from 'react-router-dom';


const CreateAndEditProduct = ( ) => {
    // lấy giá trị id từ thanh url
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    // const { id } = useParams();
    // console.log(productId);
    // const match = useRouteMatch()
    // tạo biến khai báo trạng thái là insert hay update
    const [editingMode, setEditingMode] = useState(false);
    const [isNew, setIsNew] = useState(!id);
    const [formData, setFormData] = useState({
        productApp: "product",
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
        productParam: "",
        toggleStates: {
            txtStatus: 0,
            txtBusiness: 0,
            txtOther: 0,
        },
        productAssetImage:"",
    });
    useEffect(() => {
        const fetchData = async () => {
          // Kiểm tra xem có tồn tại id từ URL không để xác định trạng thái là insert hay update
          if (id) {
            setEditingMode(true);
    
            try {
              // Thực hiện lấy dữ liệu từ API hoặc bất kỳ nguồn dữ liệu nào khác để điền vào form
              let dataProduct = await productService.getAllProducts(id,"","");
              let existingProduct = dataProduct.datas.items[0];
              console.log(existingProduct)
              // Cập nhật formData với dữ liệu từ API
              setFormData({
                ...formData,
                productApp: existingProduct.viApp,
                productName: existingProduct.viTitle,
                productDescription: existingProduct.viDescription,
                productSku: existingProduct.viCode,
                productPriceOld: existingProduct.fiPriceOld,
                productPriceNew: existingProduct.fiPriceNew,
                productDate: existingProduct.diDateCreated,
                productQuantity: existingProduct.Inventory,
                productImage: existingProduct.viImage,
                productOrder: existingProduct.iiSortOrder,
                productContent: existingProduct.viContent,
                productUrl: existingProduct.viLink,
                productMetaTitle: existingProduct.viMetaTitle,
                productMetaDescription: existingProduct.viMetaDescription,
                productMetaKeyword: existingProduct.viMetaKeyword,
                productTag: existingProduct.viTag,
                productParam: existingProduct.viParam,
                toggleStates: {
                  txtStatus: existingProduct.iiStatus,
                  txtBusiness: 0,
                  txtOther: 0,
                },
                productAssetImage: existingProduct.AccessId,
              });
              
              console.log(formData)
            } catch (error) {
              // Xử lý lỗi nếu có
              console.error('Error fetching product data:', error);
            }
          } else {
            setEditingMode(false);
          }
        };
    
        fetchData();
      }, [id]);

     


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
    // Cập nhật trạng thái formData nếu cần:
    setFormData({
        ...formData,
        productParam: newContent,
      });
  };
const handleToggle = (id, status) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [id]: status,
    }));
    console.log(toggleStates);
  };
  const handleImageUpload = ({ imageUrl, assetId }) => {
    // Update the imageData state with the new imageUrl and assetId
    setFormData({
        ...formData,
        productImage: imageUrl,
        productAssetImage: assetId,
      });
      console.log(formData);
  };
    const handleClick = async (e) => {
        e.preventDefault();
        console.log(formData);
        if (editingMode) {
            // lấy thông tin cũ từ DB
          
            // xử lý khi cập nhật
            productService.editProduct(id, formData);
            // handleUpdate(id ,formData);
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
                                    value={formData.productName}
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
                                    value={formData.productDescription}
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
                                        value={formData.productSku}
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
                                            value={formData.productPriceOld}
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
                                            value={formData.productPriceNew}
                                            className="w-full p-2 rounded-[8px] border-[#ced4da]"
                                            onChange={(e) => handleChange("productPriceNew",e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <UploadImageBox urlOld={formData.productImage} onImageUpload={handleImageUpload} isNew={isNew} assetIdOld={formData.productAssetImage}/>
                        <div className="flex gap-[10px]">
                            <div className="flex flex-col gap-3 w-[calc((100%-20px)/3)]">
                                <label className="font-bold text-xl">Ngày đăng</label>
                                <div className="w-full">
                                    <input type="Date" 
                                        className="w-full p-2 rounded-[8px] border-[#ced4da]" 
                                        placeholder="Ngày đăng" 
                                        id="txtCreatedDate"
                                        value={formData.productDate}
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
                                        value={formData.productOrder}
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
                                        value={formData.productQuantity}
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
                                    <MyEditor onContentChange={(newContent) => handleEditorContentChange(newContent)} contentOld={formData.productParam}/>
                                </div>
                            {/* </MyEditorProvider> */}
                        </div>
                        <legend className="font-bold text-xl">Tối ưu cho công cụ tìm kiếm</legend>
                        <div className="flex flex-col gap-3">
                            <label className="font-bold text-xl">URL <span></span></label>
                            <div className="w-full">
                                <input 
                                    type="text" id="txtUrl" 
                                    value={formData.productUrl}
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
                                    value={formData.productMetaTitle}
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
                                    value={formData.productMetaKeyword}
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
                                    value={formData.productMetaDescription}
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
                                    value={formData.productTag}
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
                               {editingMode ? 'Cập nhật' : 'Thêm mới'}
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