import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Pagination from '../../base/pagination';
import userService from '../../../redux/services/userServices';
import HeaderTable from '../../navbar/headerTable';

const IndexUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call your API function here
        const data = await userService.getAllUsers();
        console.log(data);
        setUsers(data.users);
         // Assuming your API response contains the products
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='w-[calc(100%-260px)] my-0 mx-auto'>
     <HeaderTable/>
      <div className="w-full">
        <div className="flex items-center justify-between mx-4 text-center row">
          <div className="w-1/5 p-2 cell header">Name</div>
          <div className="w-1/5 p-2 cell header">Email</div>
          <div className="w-1/5 p-2 cell header">Date</div>
          <div className="w-1/5 p-2 cell header">Status</div>
          <div className="p-2 cell w-1/10 header">Actions</div>
          <div className="p-2 cell w-1/10 header">
            <input type="checkbox" />
          </div>
        </div>
        {users.map((user) => (
          <div className="flex items-center justify-between px-4 py-8 mb-4 text-center cursor-pointer row custom-shadow">
            <div className="w-1/5 p-2 cell">{user.vuAccount}</div>
            <div className="w-1/5 p-2 cell">{user.vuEmail}</div>
            <div className="w-1/5 p-2 cell">{user.duDateCreated}</div>
            <div className="w-1/5 p-2 cell">{user.iuStatus}</div>
            <div className="p-2 cell w-1/10 flex items-center gap-2">
                <span title='Edit Item'><i className='iconsminds-brush'></i></span>
                <span title='Delete Item'><i className='iconsminds-delete-file'></i></span>
                <span title='Duplicate Item'><i className='iconsminds-duplicate-layer'></i></span>
            </div>
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

export default IndexUser;
