import { Nuxt } from 'nuxt/schema';
import { defineNuxtConfig } from 'nuxt/config';
import { LoadNuxtOptions } from '@nuxt/kit';
import { resolve } from 'path';

let nuxt: Nuxt | undefined;

class NuxtSite {
  async generateSite() {
    // Imports
    const { build, loadNuxt } = await import('nuxt');

    const rootDir = resolve('./rootDir');
    const buildDir = resolve('./buildDir');

    const config = defineNuxtConfig({
      rootDir,
      devtools: { enabled: true },
      ssr: false,
      buildDir,
      generate: { routes: ['/'] },
    });

    // Nuxt options
    const options: LoadNuxtOptions = {
      dev: false,
      ready: true,
      rootDir,
      config,
    };
    console.log('--------------------------------------> options', options);

    console.log('--------------------------------------> context', {
      __dirname,
      __filename,
      rootDir,
      buildDir,
    });

    if (!nuxt) nuxt = await loadNuxt(options);
    await nuxt.ready();
    console.log('--------------------------------------> loadNuxt complete');

    await build(nuxt);
    console.log('--------------------------------------> build complete');
  }
}

export const nuxtSite = new NuxtSite();
