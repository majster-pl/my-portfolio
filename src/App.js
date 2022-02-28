import Header from "./components/Header";
import MiddleSection from "./components/MiddleSection";
import './css/main.scss'
import './css/main.css'
import { useState } from "react";
import { Modal, Button, CloseButton, Container } from "react-bootstrap";
import ModalPreview from "./components/ModalPreview";

function App() {
  const [showAppPreview, setShowAppPreview] = useState(false);
  const [appPreviewData, setAppPreviewData] = useState({
    header: "header",
    body: "body",
    skills: [],
    images: [{
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },]
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
        setAppPreviewData={setAppPreviewData}
        closeAppPreview={closeAppPreview}
      />
    </>
  );
}

export default App;
