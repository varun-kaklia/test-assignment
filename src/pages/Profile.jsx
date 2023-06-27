import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const { state } = useLocation();
  console.log("lcoation", state);

  const personal = [
    {
      heading: "Username",
      access: state?.username
    },
    {
      heading: "e-mail",
      access: state?.email
    },
    {
      heading: "Phone",
      access: state?.phone
    },
    {
      heading: "Website",
      access: state?.website
    }
  ];

  const company = [
    {
      heading: "Name",
      access: state?.company?.name
    },
    {
      heading: "CatchPhrase",
      access: state?.company?.catchPhrase
    },
    {
      heading: "bs",
      access: state?.company?.bs
    }
  ];

  const address = [
    {
      heading: "Street",
      access: state?.address?.street
    },
    {
      heading: "Suite",
      access: state?.address?.suite
    },
    {
      heading: "City",
      access: state?.address?.city
    },
    {
      heading: "Zipcode",
      access: state?.address?.zipcode
    }
  ];

  return (
    <div className="flex p-2 h-full">
      <div className="basis-2/5 border-r h-fit p-1">
        <div className="flex items-center justify-center p-4">
          <img
            src={state?.profilepicture}
            className="w-3/5 object-contain rounded-full"
            alt="user profile"
          />
        </div>
        <h3 className="text-center lg:text-3xl font-semibold text-gray-600">
          {state?.name}
        </h3>
        <div className="p-2 px-8">
          <div className="p-2 w-full grid grid-cols-2 border-b gap-2">
            {personal?.map((x, index) => (
              <React.Fragment key={index}>
                <h3 className="text-right font-semibold text-gray-500 lg:text-2xl">
                  {x?.heading} <span className="">:</span>{" "}
                </h3>
                <p className="text-left font-semibold pl-2 lg:text-2xl text-gray-600">
                  {x?.access}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <h3 className="text-center text-3xl text-gray-500 font-bold">
          Company
        </h3>
        <div className="p-2 px-8">
          <div className="p-2 w-full grid grid-cols-2 gap-2 ">
            {company?.map((x, index) => (
              <React.Fragment key={index}>
                <h3 className="text-right font-semibold text-gray-500 lg:text-2xl">
                  {x?.heading} <span className="">:</span>{" "}
                </h3>
                <p className="text-left text-gray-600 font-semibold pl-2 lg:text-2xl">
                  {x?.access}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="basis-3/5 w-full">
        <h3 className="text-left text-3xl pl-4 text-gray-500 font-bold">
          Address :
        </h3>
        <div className="p-2 px-8">
          <div className="p-2 w-full grid grid-cols-2 gap-2 ">
            {address?.map((x, index) => (
              <React.Fragment key={index}>
                <h3 className="text-right font-semibold text-gray-500 lg:text-2xl">
                  {x?.heading} <span className="">:</span>{" "}
                </h3>
                <p className="text-left text-gray-600 font-semibold pl-2 lg:text-2xl">
                  {x?.access}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className=" p-4 m-4 rounded-3xl bg-gray-100 flex justify-center items-center h-40 w-full">
          <p>Google Map need API</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
