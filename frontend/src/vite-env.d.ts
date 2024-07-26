/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SQUID_APP_ID: string;
  readonly VITE_SQUID_REGION: SquidRegion;
  readonly VITE_SQUID_ENVIRONMENT_ID: EnvironmentId;
  readonly VITE_SQUID_DEVELOPER_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
