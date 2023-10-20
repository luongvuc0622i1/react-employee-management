import { getUserInfo } from '../supports/apiService.js'; // Import service API


export default function Profile() {
  const click = async () => {
    // Sau khi đăng nhập, bạn có thể gọi API khác bằng cách sử dụng service API
    const userInfoResponse = await getUserInfo();
    const userInfo = userInfoResponse.data;
    console.log(userInfo)
  }
  
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={click}>button</button>
    </div>
  );
}