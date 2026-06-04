export function register() {
  process.on("unhandledRejection", (reason) => {
    console.error("[instrumentation] unhandledRejection:", reason);
  });
}
