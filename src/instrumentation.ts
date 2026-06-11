export function register() {
  process.on("unhandledRejection", (reason) => {
    console.error("[instrumentation] unhandledRejection:", reason);
  });
  process.on("uncaughtException", (error) => {
    console.error("[instrumentation] uncaughtException:", error);
  });
}
