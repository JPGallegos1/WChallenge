import Error from "./error";
import Success from "./success";
import Warning from "./warning";

const Notification = ({ text, status }) => {
  // This is a design pattern called Factory.
  // Basically, you can create a family of components which are related each other
  // You group them into an object or switch, returning a component by "status"
  // For example, with the inputs' types are useful too.

  const notificationFactory = {
    error: <Error text={text} />,
    warning: <Warning text={text} />,
    success: <Success text={text} />
  };

  return notificationFactory[status];
};

export default Notification;
