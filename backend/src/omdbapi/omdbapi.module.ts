import { Module } from '@nestjs/common';
import { OmdbapiService } from './omdbapi.service';
import { OmdbapiController } from './omdbapi.controller';

@Module({
  controllers: [OmdbapiController],
  providers: [OmdbapiService]
})
export class OmdbapiModule {}
