import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeviceComponent } from "./device/device.component";
import { PersonComponent } from "./person/person.component";


const routes: Routes = [
    {path: '', component: DeviceComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule {}