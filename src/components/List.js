import { getAllUsers } from '../supports/apiService.js'; // Import service API

export default function List() {
  const click = async () => {
    // Sau khi đăng nhập, bạn có thể gọi API khác bằng cách sử dụng service API
    const userInfoResponse = await getAllUsers();
    const userInfo = userInfoResponse.data;
    console.log(userInfo)
  }
  
  return (
    <div>
      <h1>List</h1>
      <button onClick={click}>button</button>
    </div>
  );
}