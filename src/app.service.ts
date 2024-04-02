// file: grpc-http1 > src > app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public accumulate(data: number[]): number {
    const initialValue = 0;
    const sum = data.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    return sum;
  }
}