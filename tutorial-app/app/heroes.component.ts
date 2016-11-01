import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'adams-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: [ 'heroes.component.css' ],
    providers: []

})

export class HeroesComponent implements OnInit { 
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) {}

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    gotoDetail(): void {
        this.router.navigate(['detail', this.selectedHero.id]);
    }
}