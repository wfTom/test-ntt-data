import { Controller, Get, Param } from '@nestjs/common';
import { ErrorOmdbapi } from './dto/error-omdbapi.dto';
import { FindOmdbapiDto } from './dto/find-omdbapi.dto';
import { OmdbapiService } from './omdbapi.service';

@Controller('omdbapi')
export class OmdbapiController {
  constructor(private readonly omdbapiService: OmdbapiService) {}

  @Get(':title')
  async findOne(
    @Param('title') title: string,
  ): Promise<FindOmdbapiDto | ErrorOmdbapi> {
    return await this.omdbapiService.findOne(title);
  }
}
