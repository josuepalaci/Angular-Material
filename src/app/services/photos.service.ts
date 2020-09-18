import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Photo } from '../models/photo.model';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private htt: HttpClient) { }

  getPhotos(){
    return this.htt.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=5');
  }
}
