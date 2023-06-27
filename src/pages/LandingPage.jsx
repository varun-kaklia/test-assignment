import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Latest version of nanoid package

const LandingPage = () => {
  const navigate = useNavigate();
  const [accountList, setAccountList] = useState("");

  const api = async () => {
    const req = await fetch("https://panorbit.in/api/users.json");
    const res = await req.json();
    if (res) {
      setAccountList(res?.users);
    }
  };

  useEffect(() => {
    api();
  }, []);

  // console.log("data", accountList);

  const handleAccountSelection = (x) => {
    navigate(`/home`, { state: x });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 w-full overflow-x-hidden">
      <div className="max-w-2xl w-full overflow-hidden  bg-white h-2/3  rounded-3xl rounded shadow">
        <div className="w-full bg-gray-50 px-8 py-6 rounded-t-3xl">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-500">
            Select an Account
          </h1>
        </div>
        <div className=" max-h-full overflow-y-scroll px-8 py-4 pb-24">
          {accountList?.length > 0 &&
            accountList?.map((x) => (
              <div
                key={x?.id}
                className={`p-2 mb-4 mx-2 cursor-pointer items-center flex overflow-auto ${
                  accountList?.id === accountList?.length - 1
                    ? " border-0"
                    : "border-b border-gray-300"
                } `}
                onClick={() => handleAccountSelection(x)}
              >
                <img
                  src={x?.profilepicture}
                  className="rounded-full w-12 h-12 object-cover"
                  alt="user "
                />
                <h2 className="text-xl ml-4 font-semibold">{x?.name}</h2>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
