
import { NgModule } from '@angular/core';
import { CurencyPipe } from './curency.pipe';
import { TranslateAppPipe } from './translate-app/translate-app.pipe';
@NgModule({
    declarations: [CurencyPipe,TranslateAppPipe],
    imports: [],
    exports: [CurencyPipe,TranslateAppPipe]
})
export class PipesModule { }
