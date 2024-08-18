import { LoggerType } from "../types/CommonTypes";

export const log = (message: any, type?: LoggerType) => {
  const divider = "=".repeat(40);
  const stackTrace = new Error().stack?.split("\n")[2].trim().substring(3);
  switch (type) {
    case LoggerType.warning:
      console.warn(divider);
      console.warn("⚠️  WARNING ⚠️: [" + stackTrace + "]");
      console.warn(message);
      console.warn(divider);
      break;

    case LoggerType.error:
      console.error(divider);
      console.error("❌  ERROR ❌: [" + stackTrace + "]");
      console.error(message);
      console.error(divider);
      break;
    case LoggerType.success:
      console.log(divider);
      console.log("✅  SUCCESS ✅: [" + stackTrace + "]");
      console.log(message);
      console.log(divider);
      break;
    case LoggerType.alert:
      console.log(divider);
      console.log("🚨  ALERT 🚨: [" + stackTrace + "]");
      console.log(message);
      console.log(divider);
      break;
    default:
      console.log(divider);
      console.log("ℹ️  INFO ℹ️: [" + stackTrace + "]");
      console.log(message);
      console.log(divider);
  }
};
