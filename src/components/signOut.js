function signOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("user_id");
  localStorage.removeItem("is_admin");
  window.location = "/";
}
export default signOut;
