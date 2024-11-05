import { Module } from '@nestjs/common';
import { TimeSeriesService } from './timeseries.service';
import { TimeSeriesController } from './timeseries.controller';

@Module({
    providers: [TimeSeriesService],
    controllers: [TimeSeriesController],
})
export class TimeSeriesModule { }