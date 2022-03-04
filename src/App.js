import Header from "./components/Header";
import MiddleSection from "./components/MiddleSection";
import './css/main.scss'
import './css/main.css'
import { useState } from "react";
import ModalPreview from "./components/ModalPreview";

function App() {
  const [showAppPreview, setShowAppPreview] = useState(false);
  const [appPreviewData, setAppPreviewData] = useState({
    title: "",
    avatar: "",
    header: "",
    body: "",
    skills: [],
    images: [],
  });

  const openAppPreview = () => {
    setShowAppPreview(true);
  }

  const closeAppPreview = () => {
    setShowAppPreview(false);
  }

  return (
    <>
      <Header />
      <MiddleSection openAppPreview={openAppPreview} setAppPreviewData={setAppPreviewData} />

      <ModalPreview 
        showAppPreview={showAppPreview}
        appPreviewData={appPreviewData}
        closeAppPreview={closeAppPreview}
      />
    </>
  );
}

export default App;
