import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';


// https://vitejs.dev/config/
export default defineConfig({  
  plugins: [
    react(),    
    vanillaExtractPlugin()
  ],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "public", replacement: "/public" },
      { find: 'node_modules', replacement: "/node_modules"}
    ],
},
})
