import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(public imagesService: ImagesService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(value)
    this.imagesService.imagesChanged.emit(value.keyword)

  }

}
