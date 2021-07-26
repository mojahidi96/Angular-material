import { Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { HomeComponent } from './home/home.component';
import { MatIconComponent } from './mat-icon/mat-icon.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'autocomplete', component: AutocompleteComponent },
    { path: 'badge', component: BadgeComponent },
    { path: 'bottom-sheet', component: BottomSheetComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'chips', component: ChipsComponent },
    { path: 'button-toggle', component: ButtonToggleComponent },
    { path: 'card', component: CardComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'dialog', component: DialogComponent },
    { path: 'divider', component: DividerComponent },
    { path: 'expansion-panel', component: ExpansionPanelComponent },
    { path: 'grid-list', component: GridListComponent },
    { path: 'icon', component: MatIconComponent }
]