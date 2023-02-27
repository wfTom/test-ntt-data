import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OmdbapiModule } from './omdbapi/omdbapi.module';

@Module({
  imports: [ConfigModule.forRoot(), OmdbapiModule],
})
export class AppModule {}
