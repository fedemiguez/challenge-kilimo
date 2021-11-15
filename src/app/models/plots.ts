export class Plots {
  id:number;
  name:string;
  farm_name:string;
  crop:string;
  water_per_week:number;
  rains:Array<string>;
  irrigations:Array<string>;
  total_rain:number;
  total_irrigations:number;

  constructor(id:number, name:string, farm_name:string, crop:string, water_per_week:number, rains:Array<string>, irrigations:Array<string>, total_rain:number, total_irrigations:number){
    this.id = id;
    this.name = name;
    this.farm_name = farm_name;
    this.crop = crop;
    this.water_per_week = water_per_week;
    this.rains = rains;
    this.irrigations = irrigations;
    this.total_rain = total_rain;
    this.total_irrigations = total_irrigations
  }

}
