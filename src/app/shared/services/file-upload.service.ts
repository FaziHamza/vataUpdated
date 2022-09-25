import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  files;
  previews;
  fileUploaded = new BehaviorSubject<any>(null);
  updatedFile$ = this.fileUploaded.asObservable();
  constructor() { }

  upDateFiles(data) {
    this.fileUploaded.next(data);
  }

  setFiles(files) {
    this.files = files;
  }

  setPreview(previews) {
    this.previews = previews;
  }

  getFiles() {
    return this.files;
  }

  getPreviews() {
    return this.previews;
  }
}
