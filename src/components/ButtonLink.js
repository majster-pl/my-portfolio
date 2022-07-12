import React from "react";
import { Button } from "react-bootstrap";

const ButtonLink = ({ projectUrl, linkText, LinkIcon }) => {
  const onLinkClicked = (e, url) => {
    e.stopPropagation();
    window.open(url, "_blank").focus();
  };

  return (
    <Button
      variant="link"
      className="p-0 px-1 link-pink"
      onClick={(e) => onLinkClicked(e, projectUrl)}
      target="_blank"
      rel="noreferrer"
      title="Open website with live project"
    >
      {linkText} <i className={`ms-1 fa ${LinkIcon}`}></i>
    </Button>
  );
};

export default ButtonLink;
