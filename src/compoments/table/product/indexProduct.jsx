import StyleProduct from '../../../styles/Product.module.css';

const IndexProduct = () => {
    return (
        <div className={StyleProduct.containerProduct}>
            <div className={StyleProduct.head}>
                <div className={StyleProduct.headLeft}>
                    <h1>Product List</h1>
                    <div className={StyleProduct.sortStyle}>
                        <a href="#" className='mr-2 view-icon active'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                                <path className="view-icon-svg" d="M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"></path>
                                <path className="view-icon-svg" d="M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"></path>
                                <path className="view-icon-svg" d="M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"></path>
                            </svg>
                         </a>
                        <a href="#" className="mr-2 view-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                                <path className="view-icon-svg" d="M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"></path>
                                <path className="view-icon-svg" d="M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"></path>
                                <path className="view-icon-svg" d="M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"></path>
                                <path className="view-icon-svg" d="M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"></path>
                                <path className="view-icon-svg" d="M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"></path>
                                <path className="view-icon-svg" d="M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"></path>
                            </svg>
                        </a>
                        <a href="#" className="mr-2 view-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                                <path className="view-icon-svg" d="M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"></path>
                                <path className="view-icon-svg" d="M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"></path>
                                <path className="view-icon-svg" d="M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"></path>
                                <path className="view-icon-svg" d="M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"></path>
                            </svg>
                        </a>
                        <div className={StyleProduct.sortBy}>
                            <span>Sort by</span>
                            <select>
                                <option>Price</option>
                                <option>Price</option>
                                <option>Price</option>
                            </select>
                        </div>
                        <div className={StyleProduct.searchByDay}>
                            <input type="date" placeholder='Search by day' />
                        </div>
                    </div>
                </div>
                <div className={StyleProduct.headRight}>
                    <div className={StyleProduct.top}>
                        <button>Add new</button>
                        <div className={StyleProduct.action}>
                            <input type="checkbox" name="" id="" />
                        </div>
                    </div>
                    <div className={StyleProduct.bottom}>
                        <div className={StyleProduct.pagingAction}>
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
            <table className={StyleProduct.table}>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>Marble Cake</td>
                        <td>Cakes</td>
                        <td>02.04.2018</td>
                        <td>on hold</td>
                        <td></td>
                    </tr> 
                </tbody>  
            </table>
            <div className={StyleProduct.paging}></div>
        </div>
    )
}

export default IndexProduct;