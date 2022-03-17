import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {
  displaybooksData
  displaybook;
  isLoaded = true;
  imageSrc = 'assets/images/book.jpg'  
  imageAlt = 'book'
  constructor(private _myservice:ServiceService) { }

  ngOnInit(): void {
    this.isLoaded = true;
    this._myservice.displayBooks()
    .subscribe(
      data => {
            this.displaybooksData = data,
            console.log(this.displaybooksData);
            this.isLoaded = false;
          },
      error  => console.log('err')
    );
  }

}
