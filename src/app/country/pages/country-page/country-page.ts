import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuHeadComponent } from '../../Components/menu-head';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-country-page',
  imports: [MenuHeadComponent, RouterOutlet],
  templateUrl: './country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPage { }
