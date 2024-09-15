import { defineRunnerConfig } from "wxt";

export default defineRunnerConfig({
  /* binaries: {
    chrome: "/usr/bin/chromium",
    firefox: "/usr/bin/firedragon"
  },*/
  startUrls: [
    "https://imba.io"
  ],
  chromiumArgs: [
    "--auto-open-devtools-for-tabs"
  ]
});