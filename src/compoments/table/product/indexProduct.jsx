import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StyleProduct from '../../../styles/Product.module.css';
import Pagination from '../../base/pagination';
import productService from '../../../services/product';

const IndexProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call your API function here
        const data = await productService.getAllProducts();
        setProducts(data.datas.items);
        console.log(data.datas.items); // Assuming your API response contains the products
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={StyleProduct.containerProduct}>
      <div className="flex justify-between items_center border-b-[1px] pb-2">
        <div className={StyleProduct.headLeft}>
          <h1 className="mb-2 text-3xl font-bold">Product List</h1>
          <div className="flex items-center gap-[8px]">
            <a href="#" className="mr-2 view-icon active">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" className="w-[19px]">
                <path className="view-icon-svg" d="M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"></path>
                <path className="view-icon-svg" d="M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"></path>
                <path className="view-icon-svg" d="M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"></path>
              </svg>
            </a>
            <a href="#" className="mr-2 view-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" className="w-[19px]">
                <path className="view-icon-svg" d="M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"></path>
                <path
                  className="view-icon-svg"
                  d="M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"
                ></path>
                <path
                  className="view-icon-svg"
                  d="M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"
                ></path>
                <path
                  className="view-icon-svg"
                  d="M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"
                ></path>
                <path className="view-icon-svg" d="M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"></path>
                <path className="view-icon-svg" d="M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"></path>
              </svg>
            </a>
            <a href="#" className="mr-2 view-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" className="w-[19px]">
                <path
                  className="view-icon-svg"
                  d="M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"
                ></path>
                <path
                  className="view-icon-svg"
                  d="M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"
                ></path>
                <path
                  className="view-icon-svg"
                  d="M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"
                ></path>
                <path
                  className="view-icon-svg"
                  d="M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"
                ></path>
              </svg>
            </a>
            <div className="border-[1px] border-[#8f8f8f] rounded-[20px] px-2 text-[#8f8f8f] text-sm flex justify-center items-center">
              <select>
                <option>Order By</option>
                <option>Price</option>
                <option>Price</option>
                <option>Price</option>
              </select>
            </div>
            <div className="border-[1px] border-[#8f8f8f] rounded-[20px] px-2 text-[#8f8f8f] text-sm flex justify-center items-center">
              <input type="date" placeholder="Search by day" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[4px] mr-[10px]">
          <div className="flex items-center gap-[10px]">
            <Link to="/admin/createProduct">
              <button className="rounded-[20px] px-2 text-[#fff] text-xl px-8 py-2 bg-[--primary-light-bluenavy]">
                Add new
              </button>
            </Link>
            <div className="rounded-[20px] px-2 text-[#fff] text-2xl px-8 py-2 bg-[--primary-light-bluenavy]">
              <input type="checkbox" name="" id="" />
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="text-[#8f8f8f] text-sm">Displaying 1-10 of 210 items</div>
            <div className="border-[1px] border-[#8f8f8f] rounded-[20px] px-2 text-[#8f8f8f] text-sm">
              <select name="" id="">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between mx-4 text-center row">
          <div className="w-1/5 p-2 cell header">Name</div>
          <div className="w-1/5 p-2 cell header">image</div>
          <div className="w-1/5 p-2 cell header">Category</div>
          <div className="w-1/5 p-2 cell header">Date</div>
          <div className="w-1/5 p-2 cell header">Status</div>
          <div className="p-2 cell w-1/10 header">Actions</div>
          <div className="p-2 cell w-1/10 header">
            <input type="checkbox" />
          </div>
        </div>
        {products.map((product) => (
          <div className="flex items-center justify-between px-4 py-8 mb-4 text-center cursor-pointer row custom-shadow">
            <div className="w-1/5 p-2 cell">{product.viTitle}</div>
            <div className="w-1/5 p-2 cell"><img src={product.viImage} alt={product.viTitle} /></div>
            <div className="w-1/5 p-2 cell">Category</div>
            <div className="w-1/5 p-2 cell">{product.dateCreated}</div>
            <div className="w-1/5 p-2 cell">Active</div>
            <div className="p-2 cell w-1/10">action</div>
            <div className="p-2 cell w-1/10">
              <input type="checkbox" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default IndexProduct;
