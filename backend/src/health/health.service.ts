import { Injectable } from '@nestjs/common';

export interface HealthResponse {
  status: 'ok';
  service: string;
  timestamp: string;
}

@Injectable()
export class HealthService {
  health(): HealthResponse {
    return this.response();
  }

  ready(): HealthResponse {
    return this.response();
  }

  private response(): HealthResponse {
    return {
      status: 'ok',
      service: 'healthcare-platform-backend',
      timestamp: new Date().toISOString()
    };
  }
}
