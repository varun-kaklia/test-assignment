import {
  HomePage,
  LandingPage,
  Profile,
  Posts,
  Gallery,
  ToDo
} from "./pages/index";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="h-screen max-w-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route index element={<Profile />} />
          <Route path="posts" element={<Posts />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="todo" element={<ToDo />} />
        </Route>
      </Routes>
    </div>
  );
}
