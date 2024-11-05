import { Module } from '@nestjs/common';
import { StatsModule } from './statistical/stats.module';
import { TimeSeriesModule } from './timeseries/timeseries.module';

@Module({
  imports: [
    StatsModule,
    TimeSeriesModule,
  ],
})
export class AppModule { }
