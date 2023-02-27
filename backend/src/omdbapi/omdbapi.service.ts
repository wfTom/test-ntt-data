import { Injectable } from '@nestjs/common';
import omdapi from 'src/utils/api';
import { ErrorOmdbapi } from './dto/error-omdbapi.dto';
import { FindOmdbapiDto } from './dto/find-omdbapi.dto';

@Injectable()
export class OmdbapiService {
  async findOne(title: string): Promise<FindOmdbapiDto | ErrorOmdbapi> {
    try {
      const url = `?apikey=${process.env.API_KEY}&t=${title}`;
      const data = await (await omdapi.post(url).then()).data;
      if (data.Title) {
        const response = new FindOmdbapiDto();
        response.plot = data.Plot;
        response.poster = data.Poster;
        response.title = data.Title;
        response.actor = data.Actors;
        response.rating = Number(data.imdbRating);
        return response;
      } else {
        return { response: false, error: 'Movie not found!' };
      }
    } catch (err) {
      return { response: false, error: 'Movie not found!' };
    }
  }
}
