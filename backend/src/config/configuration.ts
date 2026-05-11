export interface AppConfiguration {
  nodeEnv: string;
  port: number;
  corsOrigin: string;
  databaseUrl: string;
  redisUrl: string;
}

export function configuration(): AppConfiguration {
  return {
    nodeEnv: process.env.NODE_ENV ?? 'development',
    port: Number.parseInt(process.env.PORT ?? '3000', 10),
    corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
    databaseUrl:
      process.env.DATABASE_URL ??
      'postgresql://healthcare:healthcare_password@localhost:5432/healthcare_platform?schema=public',
    redisUrl: process.env.REDIS_URL ?? 'redis://localhost:6379'
  };
}
