import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RightArrow } from "../components/elements/Logos";
// import MenuBar from "../components/MenuBar";

const sideBar = [
  {
    title: "Profile",
    path: ""
  },
  {
    title: "Posts",
    path: "posts"
  },
  {
    title: "Gallery",
    path: "gallery"
  },
  {
    title: "ToDo",
    path: "todo"
  }
];

const HomePage = () => {
  // console.log("last index", sideBar.length);
  const navigate = useNavigate();

  const { state, pathname } = useLocation();
  const customPath = pathname.replace("/", "");
  const title = sideBar?.find((x) => x?.path === customPath);
  // console.log("jedki", );

  return (
    <div className="w-full h-full p-6">
      <div className="flex flex-row h-full gap-4">
        <div className="basis-1/6 w-full h-full bg-gradient-to-tr from-violet-500 via-indigo-500 rounded-3xl to-blue-500">
          <div className="flex flex-col h-full justify-center items-center w-full">
            {sideBar?.map((x, index) => (
              <div
                key={index}
                className="flex justify-center items-center px-4 relative w-full  "
              >
                <button
                  className={`text-3xl flex justify-start m-1 w-full text-left min-w-40 font-semibold text-white p-3 ${
                    index < 3 ? "border-b" : ""
                  }`}
                  onClick={() => navigate(`/home/${x?.path}`)}
                >
                  <span className="text-left">{x?.title}</span>
                </button>
                {/* <div className="h-5 w-5 bg-white rounded-l-full absolute -right-[18px] top-6 " /> */}
                {x?.path === customPath && (
                  <div className="flex items-center justify-center">
                    <div className="absolute z-10 bg-white -right-0 w-5 h-8 rounded-l-full flex items-center justify-center">
                      <RightArrow />
                    </div>
                  </div>
                )}
                {/* <div className="h-5 w-5 bg-white rounded-full absolute -right-4 -bottom-2  " /> */}
              </div>
            ))}
          </div>
        </div>
        <div className="basis-3/4 w-full h-full ">
          <div className="p-2 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-500">
                {title?.title}
              </h2>
              <div
                className={`mb-4 mx-2 cursor-pointer items-center flex overflow-auto items-center justify-center`}
              >
                <img
                  src={state?.profilepicture}
                  className="rounded-full w-12 h-12 object-cover"
                  alt="user "
                />
                <h2 className="text-xl ml-4 text-gray-500 font-semibold">
                  {state?.username}
                </h2>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
