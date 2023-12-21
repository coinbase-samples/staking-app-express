import winston from "winston";

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL,
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});
