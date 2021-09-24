import { message } from "antd";
import { format } from "date-fns";
import moment from "moment";

export const round = (value: number, precision: number) => {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

export const formatLocalDate = (date: string, pattern: string) => {
  const dt = new Date(date);
  const dtDateOnly = new Date(
    dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000
  );
  return format(dtDateOnly, pattern);
};

export const formatDate = "DD/MM/YYYY";

export const formater = "HH:mm";
