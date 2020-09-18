import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { PhotosService } from "../../services/photos.service";


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe(
      datos => { console.log(datos);
        this.photos = datos;
      },
      error => { console.log(error);
      }
    )
  }

}
