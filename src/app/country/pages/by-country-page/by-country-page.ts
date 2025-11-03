import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../../shared/components/footer/footer';
import { SearchInput } from '../../Components/search-input/search-input';
import { CountryList } from '../../Components/country-list/country-list';

@Component({
  selector: 'app-by-country-page',
  imports: [Footer,SearchInput,CountryList],
  templateUrl: './by-country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPage { }
