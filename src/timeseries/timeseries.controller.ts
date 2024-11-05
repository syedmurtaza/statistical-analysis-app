import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TimeSeriesService, TimeSeriesPoint } from './timeseries.service';

@Controller()
export class TimeSeriesController {
    constructor(private readonly timeSeriesService: TimeSeriesService) { }

    @MessagePattern({ cmd: 'calculateMovingAverage' })
    calculateMovingAverage(data: { series: TimeSeriesPoint[], windowSize: number }): TimeSeriesPoint[] {
        return this.timeSeriesService.calculateMovingAverage(data.series, data.windowSize);
    }

    @MessagePattern({ cmd: 'detectOutliers' })
    detectOutliers(data: { series: TimeSeriesPoint[], threshold: number }): TimeSeriesPoint[] {
        return this.timeSeriesService.detectOutliers(data.series, data.threshold);
    }
}