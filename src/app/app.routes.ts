import { Routes } from '@angular/router';

import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { Stage1Component } from './stage-1/stage-1.component';
import { Stage2Component } from './stage-2/stage-2.component';
import { Stage3Component } from './stage-3/stage-3.component';
import { VictoryViewComponent } from './victory-view/victory-view.component';
import { CrashViewComponent } from './crash-view/crash-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'start-screen', pathMatch: 'full' },
  { path: 'error', component: UncaughtError },
  { path: 'start-screen', component: StartScreenComponent, data: { text: 'Start-Screen' } },
  { path: 'stage-1', component: Stage1Component, data: { text: 'Stage-1' } },
  { path: 'stage-2', component: Stage2Component, data: { text: 'Stage-2' } },
  { path: 'stage-3', component: Stage3Component, data: { text: 'Stage-3' } },
  { path: 'victory-view', component: VictoryViewComponent, data: { text: 'Victory-View' } },
  { path: 'crash-view', component: CrashViewComponent, data: { text: 'Crash-View' } },
  { path: '**', component: NotFound } // must always be last
];
