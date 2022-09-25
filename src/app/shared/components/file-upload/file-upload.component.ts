import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Output() uploadData = new EventEmitter();
  @Input() fileRemoveIndex;
  @Input() isDragEnabled = true;
  @Input() multiple = true;

  format;

  @Input() allowedTypes = "image/*";

  id = Math.random();

  @Input() template = 'default';
  @Input() imageToShow = '';
  uploadingFiles = [];
  preview = [];
  constructor() { }

  ngOnInit() {
  }

  onFileSelect(event) {
    if(!event.target.files.length)
      return;
    this.uploadingFiles.push(<File>event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    if(event.target.files[0].type.indexOf('image')> -1){
      this.format = 'image';
    } else if(event.target.files[0].type.indexOf('video')> -1){
      this.format = 'video';
    }
    reader.onload = (e) => {
      this.preview.push({data: reader.result as string, format: this.format});
      this.uploadData.emit({files: this.uploadingFiles, preview: this.preview});
    };
  }

  onFileDrop(files: NgxFileDropEntry[]) {
    for (const droppedFile of files) {
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          this.uploadingFiles.push(file);
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            this.preview.push({data: reader.result as string, format: this.format});
          };
          console.log(droppedFile.relativePath, file);
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
    this.uploadData.emit({files: this.uploadingFiles, preview: this.preview});
  }
}
