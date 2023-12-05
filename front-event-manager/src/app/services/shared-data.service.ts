import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private winnerName: string = '';

  private setResults: string[] = [];

  setSetResults(results: string[]) {
    this.setResults = results;
  }

  getSetResults(): string[] {
    return this.setResults;
  }


  setWinnerName(name: string) {
    this.winnerName = name;
  }

  getWinnerName(): string {
    return this.winnerName;
  }
}
