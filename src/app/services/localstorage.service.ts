import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getImagePath = () => {
    if (JSON.parse(localStorage.getItem('path'))) {
      let stored = JSON.parse(localStorage.getItem('path'));
      return stored.imagePath;
    }
  }

  setImagePath = (image) => {
    localStorage.setItem('path', JSON.stringify({ imagePath : image }))
  }
}
