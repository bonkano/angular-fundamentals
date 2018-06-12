import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-service.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  searchResults : GitSearch;
  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit() {
    this.GitSearchService.gitSearch('topic:angular').then( (response) => {
      this.searchResults = (response as GitSearch)
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  };

  gitSearch = (query : string) => {
    this.GitSearchService.gitSearch(query).then( (response) => {
      this.searchResults = (response as GitSearch)
    }, (error) => {
      alert("Error: " + error.statusText)
    })
 
  }
}