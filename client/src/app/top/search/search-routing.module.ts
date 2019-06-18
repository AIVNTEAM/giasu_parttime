import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchIndexComponent } from './search-index/search-index.component';
const routes: Routes = [
	{
		path: '',
	    data: {
	        pageTitle: 'Search cong viec'
	    },
	    children: [
	        {path: '',component: SearchIndexComponent },
	        {path: ':param',component: SearchIndexComponent },
	        {path: ':param/:param_1',component: SearchIndexComponent },
	        {path: ':param/:param_1/:param_2',component: SearchIndexComponent },
	        {path: ':param/:param_1/:param_2/:param_3',component: SearchIndexComponent },
	        {path: ':param/:param_1/:param_2/:param_3/:param_4',component: SearchIndexComponent },
	        {path: ':param/:param_1/:param_2/:param_3/:param_4/:param_5',component: SearchIndexComponent },
	        {path: ':param/:param_1/:param_2/:param_3/:param_4/:param_5/:param_6',component: SearchIndexComponent },
	        {path: ':param/:param_1/:param_2/:param_3/:param_4/:param_5/:param_6/:param_7',component: SearchIndexComponent },
	        {path: ':param/:param_1/:param_2/:param_3/:param_4/:param_5/:param_6/:param_7/:param_8',component: SearchIndexComponent },
	        {path: ':param/:param_1/:param_2/:param_3/:param_4/:param_5/:param_6/:param_7/:param_8/:param_9',component: SearchIndexComponent },
	        {path: ':param/:param_1/:param_2/:param_3/:param_4/:param_5/:param_6/:param_7/:param_8/:param_9/:param_10',component: SearchIndexComponent },
	        {path: ':param/:param_1/:param_2/:param_3/:param_4/:param_5/:param_6/:param_7/:param_8/:param_9/:param_10/:param_11',component: SearchIndexComponent },
	        {path: ':param/:param_1/:param_2/:param_3/:param_4/:param_5/:param_6/:param_7/:param_8/:param_9/:param_10/:param_11/:param_12',component: SearchIndexComponent },
	        {path: ':param/:param_1/:param_2/:param_3/:param_4/:param_5/:param_6/:param_7/:param_8/:param_9/:param_10/:param_11/:param_12/:param_13',component: SearchIndexComponent },
	    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
