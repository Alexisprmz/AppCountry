import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuHeadComponent } from "../../Components/menu-head";
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../../shared/components/footer/footer';
import { SearchInput } from '../../Components/search-input/search-input';
import { CountryList } from '../../Components/country-list/country-list';


@Component({
  selector:"",
  imports: [Footer,SearchInput,CountryList],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage { }
