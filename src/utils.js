import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';

dayjs.extend(Duration);
const EVENT_DATE_FORMAT = 'D MMMM';
const EVENT_TIME_FORMAT = 'HH:mm';

const getEventDate = (date) => date ? dayjs(date).format(EVENT_DATE_FORMAT) : '';

const getEventTime = (date) => date ? dayjs(date).format(EVENT_TIME_FORMAT) : '';

const getDuration = (x, y) => dayjs.duration(x.diff(y));

export {
  getEventDate,
  getEventTime,
  getDuration,
};
