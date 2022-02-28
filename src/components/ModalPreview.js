import { Modal, Button, CloseButton, Container } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';

const ModalPreview = ({ setShowAppPreview, showAppPreview, closeAppPreview, setAppPreviewData, appPreviewData }) => {
    return (
        <Modal
            show={showAppPreview}
            onHide={closeAppPreview}
            centered
            scrollable
            dialogClassName="modal-90w"
        >
            <Modal.Header className="bg-secondary text-white fs-5 border-bottom-0">
                <span className="text-uppercase">{appPreviewData.title}</span>
                <CloseButton className="float-end" variant="white" onClick={closeAppPreview} />
            </Modal.Header>
            <Modal.Body className="bg-light-gray">

                <ImageGallery
                    infinite
                    autoPlay
                    showBullets
                    lazyLoad
                    additionalClass="modal-galery"
                    // slideInterval={randomNumber(20, 35)}
                    // showNav={false}
                    onImageLoad={(e) => {
                        console.log("loading", e);
                    }}
                    useBrowserFullscreen={false}
                    // thumbnailPosition="right"
                    // showFullscreenButton={false}
                    showThumbnails={false}
                    items={appPreviewData.images} />
                <div
                    className="m-3"
                    dangerouslySetInnerHTML={{
                        __html: appPreviewData.body
                    }}
                >

                </div>
            </Modal.Body>
            <Modal.Footer className="bg-secondary text-white">
                test
            </Modal.Footer>
        </Modal>
    )
}

export default ModalPreview