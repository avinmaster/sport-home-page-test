import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.odiliyinc.visitmap',
  appName: 'visitmap-client-frontend',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
