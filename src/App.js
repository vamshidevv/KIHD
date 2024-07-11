
import { ToastContainer } from "react-toastify";
import { Routes1 } from "./Routes/Routes1";
import "./Style/Style.css";

function App() {

  return (
    <div className="App">
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes1 />
    </div>
  );
}

export default App;
