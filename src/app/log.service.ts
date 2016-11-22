import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  writeToLog(legMessage: string) {
    console.log(logMessage);
  }
}
