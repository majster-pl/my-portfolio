import { Modal, CloseButton, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/swiper.css";

// import required modules
import { Lazy, Pagination, Navigation } from "swiper";

const ModalPreview = ({
  //   setShowAppPreview,
  showAppPreview,
  closeAppPreview,
  appPreviewData,
}) => {
  //   const [galleryLoading, setGalleryLoading] = useState(true);

  //   const imagesArr = [...Array(appPreviewData.images2).keys()];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

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
        <CloseButton
          className="float-end"
          variant="white"
          onClick={closeAppPreview}
        />
      </Modal.Header>
      <Modal.Body className="bg-light-gray">
        <Swiper
          className="mySwiper"
          lazy={true}
          pagination={pagination}
          navigation={true}
          modules={[Lazy, Pagination, Navigation]}
        >
          {appPreviewData.images.map((item) => {
            return (
              <SwiperSlide key={item}>
                <img
                  data-src={`images/apps/${appPreviewData.title
                    .toLowerCase()
                    .replaceAll(" ", "-")}/${item}`}
                  className="swiper-lazy"
                  alt=""
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          className="m-3 fs-5"
          dangerouslySetInnerHTML={{
            __html: appPreviewData.body,
          }}
        ></div>
      </Modal.Body>
      <Modal.Footer className="bg-secondary text-white">
        {typeof appPreviewData.live_page !== "undefined" ? (
          <Button
            variant="link"
            className="border-end pe-3"
            href={appPreviewData.live_page}
            target="_blank"
            rel="noreferrer"
            title="Open website with live project"
          >
            Live Page <i className="fa fa-external-link"></i>
          </Button>
        ) : (
          ""
        )}

        {typeof appPreviewData.git_page !== "undefined" ? (
          <Button
            variant="link"
            className="ps-1"
            href={appPreviewData.git_page}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <i className="fa fa-github" aria-hidden="true"></i>
          </Button>
        ) : (
          ""
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPreview;
