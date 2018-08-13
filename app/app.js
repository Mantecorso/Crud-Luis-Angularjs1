import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import {AppComponent} from "./app.component";
import common from "./common/common";
import components from "./components/components";
//import models from "./models/datamodels";
//import service from "./service/listado/listadoJSON";

const root = angular
.module('App',[
    uiRouter,
    common,
    components
 //   models,
//    service

])
.component ('cApp', AppComponent)

//Punto de arranque.
document.addEventListener('DOMContentLoaded',
    ()=>angular.bootstrap(document,['App']));
