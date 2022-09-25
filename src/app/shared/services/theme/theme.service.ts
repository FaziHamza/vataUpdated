import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  light: string = '#ffffff';
  dark: string = '#1c1c1c';

  white: string = '#ffffff';
  black: string = '#141313';
  lightGray: string = '#c4c4c4';
  lighterGray: string = '#f5f5f5';
  lighterGrayBlack: string = '#f5f5f5';
  darkGray: string = '#808080';

  private _themeDark: Subject<boolean> = new Subject<boolean>();

  isThemeDark = this._themeDark.asObservable();

  constructor() { }

  setDarkTheme(isThemeDark: boolean) {
    this._themeDark.next(isThemeDark);

    if (isThemeDark == true) {
      console.log('Dark Used');
      document.documentElement.style.setProperty('--primary-color', this.dark);
      document.documentElement.style.setProperty('--white-color', this.black);
      document.documentElement.style.setProperty('--black-color', this.white);
      document.documentElement.style.setProperty('--light-gray', this.darkGray);
      document.documentElement.style.setProperty('--ligher-gray', this.darkGray);
      document.documentElement.style.setProperty('--dark-gray', this.lightGray);
      document.documentElement.style.setProperty('--ligher-gray-black', this.black);
      localStorage.setItem('dark', 'true');
    }
    else {
      console.log('Light Used');
      document.documentElement.style.setProperty('--primary-color', this.light);
      document.documentElement.style.setProperty('--white-color', this.white);
      document.documentElement.style.setProperty('--black-color', this.black);
      document.documentElement.style.setProperty('--light-gray', this.lightGray);
      document.documentElement.style.setProperty('--ligher-gray', this.lighterGray);
      document.documentElement.style.setProperty('--dark-gray', this.darkGray);
      document.documentElement.style.setProperty('--ligher-gray-black', this.lighterGrayBlack);
      localStorage.setItem('dark', 'false');
    }
  }

}
