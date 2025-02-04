import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import eslintConfigPrettier from 'eslint-config-prettier';

export default createConfigForNuxt({
  features: {
    stylistic: false, // Disable stylistic rules to avoid conflicts with Prettier
  },
}).append(eslintConfigPrettier);