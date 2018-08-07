import { ListAgentComponent } from './list-agent.component';
import { ListAgentRoutingModule } from './list-agent-routing.module';
import { StatModule } from './../shared/modules/stat/stat.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    imports: [
        CommonModule,
        ListAgentRoutingModule,
        MatGridListModule,
        StatModule,
        MatCardModule,
        FlexLayoutModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [ListAgentComponent]
})
export class ListAgentModule {}
