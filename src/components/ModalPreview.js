import { Modal, CloseButton, Button, Spinner } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonLink from "./ButtonLink";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/swiper.css";

// import required modules
import { Autoplay, Lazy, Pagination, Navigation } from "swiper";

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
      className="unselectable"
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
          lazy={{
            loadOnTransitionStart: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          navigation={true}
          modules={[Autoplay, Lazy, Pagination, Navigation]}
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
                <Spinner className="swiper-lazy-preloader" animation="border" />
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
          <ButtonLink
            projectData={appPreviewData}
            linkText="Live Page"
            LinkIcon="fa-external-link"
          />
        ) : (
          ""
        )}

        {typeof appPreviewData.git_page !== "undefined" ? (
          <ButtonLink
            projectData={appPreviewData}
            linkText="GitHub"
            LinkIcon="fa-github"
          />
        ) : (
          ""
        )}

        {typeof appPreviewData.store_page !== "undefined" ? (
          <ButtonLink
            projectData={appPreviewData}
            linkText="Store"
            LinkIcon="fa-shopping-bag"
          />
        ) : (
          ""
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPreview;
