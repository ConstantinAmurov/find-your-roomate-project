import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { resetNotification } from "./actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationsComponent = () => {
  const { type, message } = useSelector((state) => state.notifications.info);
  const dispatch = useDispatch();

  const options = {
    onClose: () => dispatch(resetNotification()),
  };

  useEffect(() => {
    switch (type) {
      case "success":
        toast.success(message, options);
        break;
      case "warn":
        toast.warn(message, options);
        break;
      case "info":
        toast.info(message, options);
        break;
      case "error":
        toast.error(message, options);
        break;
      default:
        break;
    }
  });
  return <ToastContainer></ToastContainer>;
};

export default NotificationsComponent;
