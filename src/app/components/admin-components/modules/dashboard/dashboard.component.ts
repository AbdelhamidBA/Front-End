import { DashboardService } from './../../../../services/dashboard.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement{
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogène', weight: 1.005, symbol: 'H'},
  {position: 2, name: 'Oxygène', weight: 1.005, symbol: 'O'},
  {position: 3, name: 'Neon', weight: 1.005, symbol: 'N'},
  {position: 4, name: 'Hydrogène', weight: 1.005, symbol: 'H'},
  {position: 5, name: 'Hydrogène', weight: 1.005, symbol: 'H'},
  {position: 6, name: 'Hydrogène', weight: 1.005, symbol: 'H'},
  {position: 7, name: 'Hydrogène', weight: 1.005, symbol: 'H'},
  {position: 8, name: 'Hydrogène', weight: 1.005, symbol: 'H'},
  {position: 9, name: 'Hydrogène', weight: 1.005, symbol: 'H'},
  {position: 1, name: 'Hydrogène', weight: 1.005, symbol: 'H'},
  {position: 2, name: 'Oxygène', weight: 1.005, symbol: 'O'},
  {position: 3, name: 'Neon', weight: 1.005, symbol: 'N'},
  {position: 4, name: 'Hydrogène', weight: 1.005, symbol: 'H'},
  {position: 5, name: 'Hydrogène', weight: 1.005, symbol: 'H'},
  {position: 6, name: 'Hydrogène', weight: 1.005, symbol: 'H'},
  {position: 7, name: 'Hydrogène', weight: 1.005, symbol: 'H'},
  {position: 8, name: 'Hydrogène', weight: 1.005, symbol: 'H'},
  {position: 9, name: 'Hydrogène', weight: 1.005, symbol: 'H'}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];
  displayColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigCharts();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.dataSource.paginator = this.paginator;
  }


}
