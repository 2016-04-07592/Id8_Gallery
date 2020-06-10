import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<any>('https://pixabay.com/api/?key=16977889-eecf1969c8cdd1f4ded677225&image_type=photo&per_page=20')

  }

  imagesChanged = new EventEmitter<string>();

  getImagesByCategory(keyword: string) {
    return this.http.get<any>(`https://pixabay.com/api/?key=16977889-eecf1969c8cdd1f4ded677225&image_type=photo&per_page=20&category=${keyword}`)

  }

}
