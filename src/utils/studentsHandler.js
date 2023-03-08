import Swal from "sweetalert2";

export const notificationHandler = ({ type, title, message }) => {
  return Swal.fire({
    icon: `${type}`,
    title: `${title}`,
    text: `${message}`,
  });
};
