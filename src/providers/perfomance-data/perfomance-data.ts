import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

@Injectable()
export class PerfomanceDataProvider {
  constructor(private _tokenService: Angular2TokenService) {}

  saveData(data) {
    return this._tokenService.post('perfomance_data', data).map(data => data);
  }
}
