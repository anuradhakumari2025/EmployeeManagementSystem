import { useState } from "react";

function Header(props) {
  // const [userName, setUserName] = useState("");
  // if (!data) {
  //   setUserName("admin");
  // } else {
  //   setUserName(data.name);
  // }
  console.log(props);
const handleLogout = () =>{
  localStorage.setItem("loggedInUser",'')
  props.changeUser('')
  // window.location.reload()
}
  return (
    <>
      <div className="text-white flex justify-between items-center">
        <h1 className="font-medium text-xl">
          Hi,
          <br />
          <span className="font-bold text-2xl">{props?.data?.name}👋</span>
        </h1>
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded-2xl font-medium text-lg">
          Log out
        </button>
      </div>
    </>
  );
}

export default Header;
