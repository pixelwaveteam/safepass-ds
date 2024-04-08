import { Config } from 'tailwindcss';

import plugin from 'tailwindcss/plugin';
import { shadcnPreset } from './src/lib/shadcn-preset';

const config = {
  presets: [shadcnPreset],
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.absolutely-centered': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }
      })
    })
  ]
} satisfies Config;

export default config;
