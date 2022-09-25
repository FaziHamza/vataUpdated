import { Injectable, Output, EventEmitter } from '@angular/core';
import sprinf from "sprintf";
import { ApiService } from 'src/app/core';
import { ApiEndPoints } from 'src/app/helpers/constants/api.constants';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductVariationService {
  variations: any = null;
  tempFormData: any = null;
}
