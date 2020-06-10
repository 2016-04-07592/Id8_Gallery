import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  sources: string[] = [];
  imageURL: string


  constructor(public imagesService: ImagesService) {

    this.imagesService.imagesChanged.subscribe(

      (res) => {

        this.imagesService.getImagesByCategory(res).subscribe(
          (res) => {
            this.sources = res.hits
            console.log(res.hits)
          }
        ),
          (err) => {
            console.log(err)
          }

      },
      (err) => {
        console.log(err)
      }


    )
  }

  ngOnInit() {

    this.imagesService.getImages().subscribe(
      (res) => {
        this.sources = res.hits
        console.log(res.hits)
      }
    ),
      (err) => {
        console.log(err)
      }

  }

  clickedImage(imageURL: string) {

    this.imageURL = imageURL
  }

}
