import { Component } from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  value = 1.23;


hero: Hero = {
  id: 1,
  name: 'Big Boy'

}



}
