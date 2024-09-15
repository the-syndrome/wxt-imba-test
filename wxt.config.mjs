import { join } from "path";
import { defineConfig } from "wxt";

export default defineConfig({
  modules: [join(__dirname, "imba-plugin.mjs")]
});
