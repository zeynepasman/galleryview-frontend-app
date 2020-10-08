import { notification } from 'antd';

const createNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
    duration: 8,

  });
};
export default createNotification;