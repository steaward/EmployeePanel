import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LogService {
  entries: String[] = [];
  public getLog;

  constructor() { 
    this.getLog = new Subject();
  }

  writeLog(entry:string){
    let now = new Date();
    this.entries.push(now + ": " + entry);
    this.getLog.next(this.entries);
  }

}
