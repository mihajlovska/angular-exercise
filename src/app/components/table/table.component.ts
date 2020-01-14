import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort  } from '@angular/material/sort';
import { StarWarsService } from '../../services/star-wars/star-wars.service';
import { StarWarsMember } from '../../models/star-wars-member';
import { StarWarsResponse } from '../../models/star-wars-response';
import { startWith, delayWhen, switchMap, catchError, takeUntil, map } from 'rxjs/operators';
import { combineLatest, of, ReplaySubject, merge } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  characters: StarWarsMember[] = [];
  tableHeader: string[] = ['name', 'gender', 'birthYear'];

  pageIndex = 0;
  pageSize = 10;
  resultsLength: number = null;
  private destroyed$ = new ReplaySubject<boolean>(1);
  isLoadingResults = true;

  constructor(private starWarsService: StarWarsService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    merge(
      this.sort.sortChange,
      this.paginator.page,
    ).pipe(
      startWith({}),
      delayWhen(() => combineLatest(this.paginator.initialized, this.sort.initialized)
      ),
      switchMap(
        (event: Sort | PageEvent) => {
          this.isLoadingResults = true;
          return this.starWarsService.getMembers(this.paginator.pageIndex + 1);
        }
      ),
      map((res: StarWarsResponse) => res),
      catchError(err => {
        console.error(err);
        this.isLoadingResults = false;
        return of([]);
      }),
      takeUntil(this.destroyed$)
    ).subscribe((data: StarWarsResponse) => {
      this.characters = data.results;
      this.resultsLength = data.count;
      this.isLoadingResults = false;
    });
  }
}
