import { Injectable } from '@nestjs/common';

export interface TimeSeriesPoint {
    timestamp: Date;
    value: number;
}

@Injectable()
export class TimeSeriesService {
    calculateMovingAverage(data: TimeSeriesPoint[], windowSize: number): TimeSeriesPoint[] {
        return data.map((point, index) => {
            if (index < windowSize - 1) {
                return { timestamp: point.timestamp, value: null };
            }
            const windowSlice = data.slice(index - windowSize + 1, index + 1);
            const sum = windowSlice.reduce((acc, curr) => acc + curr.value, 0);
            return { timestamp: point.timestamp, value: sum / windowSize };
        });
    }

    detectOutliers(data: TimeSeriesPoint[], threshold: number): TimeSeriesPoint[] {
        const values = data.map(point => point.value);
        const mean = values.reduce((a, b) => a + b) / values.length;
        const stdDev = Math.sqrt(values.reduce((sq, n) => sq + Math.pow(n - mean, 2), 0) / values.length);

        return data.filter(point => Math.abs(point.value - mean) > threshold * stdDev);
    }
}