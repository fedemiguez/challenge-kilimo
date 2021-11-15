import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Plots } from '../models/plots';
import { PlotsService } from '../service/plots.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  plots: Plots[] = [];
  plot:Plots = {
    id:0,
    name:'',
    farm_name:'',
    crop:'',
    water_per_week:0,
    rains:[],
    total_rain:0,
    total_irrigations:0,
    irrigations:[]
  };
  form:FormGroup;

  constructor(private plotsService:PlotsService, private fb:FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      rains: ['', Validators.required],
      irrigations: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.listPlots()
  }

  listPlots(): void{
    this.plots = this.plotsService.list()
  }

  detailPlot(id:number){
    this.plot = this.plots.find(item => item.id === id)!;
  }

  save(){
    const {rains, irrigations} = this.form.value
    this.plots.find(item => item.id === this.plot.id)?.rains.push(rains)
    this.plots.find(item => item.id === this.plot.id)!.total_rain += parseInt(rains)
    this.plots.find(item => item.id === this.plot.id)?.irrigations.push(irrigations)
    this.plots.find(item => item.id === this.plot.id)!.total_irrigations += parseInt(irrigations)
    this.form.setValue({rains: '', irrigations: ''})
    this.toastr.success('Agregaste el riego correctamente');
  }
}
