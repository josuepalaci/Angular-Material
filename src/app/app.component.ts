import { Component, OnInit } from '@angular/core';
import { PhotosService } from "./services/photos.service";
import { Photo } from "./models/photo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  albumns = [1,2,3,4,5];
constructor(private photosService: PhotosService){}

ngOnInit(){
 
} 
}
