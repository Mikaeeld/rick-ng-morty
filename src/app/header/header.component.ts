import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { GetCountsGQL } from '../services/rickAndMortyGraphql.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public characterCount = 800;
  public page = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countServie: GetCountsGQL
  ) {}

  ngOnInit(): void {
    this.countServie.fetch().subscribe((result) => {
      if (result.data.characters?.info?.count) {
        this.characterCount = result.data.characters.info.count;
      }
    });
    this.route.params.subscribe((params) => {
      this.page = +params['id'];
    });
  }

  pageChange($event: PageEvent) {
    this.router.navigate([`/${$event.pageIndex + 1}`]);
  }
}
