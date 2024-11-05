import { Injectable } from '@nestjs/common';

@Injectable()
export class StatsService {
    calculateMean(numbers: number[]): number {
        const sum = numbers.reduce((a, b) => a + b, 0);
        return sum / numbers.length;
    }

    calculateMedian(numbers: number[]): number {
        const sorted = numbers.sort((a, b) => a - b);
        const middle = Math.floor(sorted.length / 2);
        if (sorted.length % 2 === 0) {
            return (sorted[middle - 1] + sorted[middle]) / 2;
        }
        return sorted[middle];
    }

    calculateStandardDeviation(numbers: number[]): number {
        const mean = this.calculateMean(numbers);
        const squareDiffs = numbers.map(value => Math.pow(value - mean, 2));
        const avgSquareDiff = this.calculateMean(squareDiffs);
        return Math.sqrt(avgSquareDiff);
    }
}