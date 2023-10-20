export default function isUserLoggedIn() {
  const token = localStorage.getItem('token');
  return token !== null;
}