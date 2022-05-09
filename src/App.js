//import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import EditForm from "./component/form/EditForm";
import UserList from "./component/form/UserList";
import Index from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/editform" element={<EditForm />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
