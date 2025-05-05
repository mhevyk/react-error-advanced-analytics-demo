import log from "loglevel";

log.setLevel(import.meta.env.PROD ? "error" : "debug");

export default log;
