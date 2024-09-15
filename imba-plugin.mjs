import { join } from "path";
import { defineWxtModule, addViteConfig, addEntrypoint } from "wxt/modules";
import imba from "imba/plugin";

export default defineWxtModule({
  name: "wxt-imba-plugin",
  async setup(wxt) {
    addViteConfig(wxt, () => ({ plugins: [imba()] }));

    const backgroundPath = join(import.meta.dirname, "entrypoints", "background.imba");
    addEntrypoint(wxt, {
      type: "background",
      name: "background",
      inputPath: backgroundPath,
      outputDir: wxt.config.outDir,
      options: {}
    });

    /* const contentPath = join(import.meta.dirname, "entrypoints", "content.imba");
    addEntrypoint(wxt, {
      type: "content-script",
      name: "content",
      inputPath: contentPath,
      outputDir: wxt.config.outDir,
      options: {}
    }); */
  }
});
