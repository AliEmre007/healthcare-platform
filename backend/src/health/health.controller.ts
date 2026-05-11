import { Controller, Get } from '@nestjs/common';
import { HealthResponse, HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('health')
  health(): HealthResponse {
    return this.healthService.health();
  }

  @Get('ready')
  ready(): HealthResponse {
    return this.healthService.ready();
  }
}
