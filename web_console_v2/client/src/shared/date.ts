import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function formatTimestamp(input: number) {
  if (input.toString().length === 10) {
    return dayjs.unix(input).format('YYYY-MM-DD HH:mm:ss');
  }

  return dayjs(input).format('YYYY-MM-DD HH:mm:ss');
}

export function fromNow(input: number, ...args: any[]) {
  return dayjs.unix(input).fromNow(...args);
}