import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api')
export class GatewayController {
    constructor(
        @Inject('STATS_SERVICE') private statsClient: ClientProxy,
        @Inject('TIMESERIES_SERVICE') private timeseriesClient: ClientProxy,
    ) { }

    @Get('mean')
    async getMean(@Body() data: number[]) {
        return this.statsClient.send({ cmd: 'calculateMean' }, data);
    }

    @Post('moving-average')
    async getMovingAverage(@Body() data: { series: any[], windowSize: number }) {
        return this.timeseriesClient.send({ cmd: 'calculateMovingAverage' }, data);
    }
}