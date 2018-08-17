import angular from 'angular';
import DatosService from '../home/datosservice';
import {HomeComponent} from "./inicio/home.component";
import {PacienteoProfComponent} from "./pacienteoprof/choose.component";
import {NuevoProfesionalComponent} from "./nuevoprofesional/newprof.component";
import {NuevoUsuarioComponent} from "./nuevousuario/newuser.component";
import {EditProfComponent} from "./editProf/editProf.component";
import {EditPacienteComponent} from "./editPaciente/editPaciente.component";
import {viewPacienteComponent} from "./viewPaciente/viewPaciente.component";
import {viewProfComponent} from "./viewProf/viewProf.component"
import {CuatroCeroCuatroComponent} from "./cuatrocerocuatro/cuatrocerocuatro.component";
import {BorradoComponent} from "./borrado/borrado.component";
 
const home = angular
.module('home',[])
.component ('inicio', HomeComponent)
.component ('pacienteoprof', PacienteoProfComponent)
.component ('nuevoprofesional', NuevoProfesionalComponent)
.component ('cuatrocerocuatro', CuatroCeroCuatroComponent)
.component ('nuevousuario', NuevoUsuarioComponent)
.component ('editProf', EditProfComponent)
.component('editPaciente', EditPacienteComponent)
.component('viewPaciente', viewPacienteComponent)
.component('viewProf', viewProfComponent)
.service('datosService', DatosService)
.component ('borrado', BorradoComponent)
    .config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state('nuevousuario', {
            url: '/newuser',
            component: 'nuevousuario'
        })
        .state('nuevoprofesional', {
            url: '/newprof',
            component: 'nuevoprofesional'
        })
        .state('pacienteoprof', {
            url: '/choose',
            component: 'pacienteoprof'
        })
        .state('error', {
            url: '/cuatrocerocuatro',
            component: 'cuatrocerocuatro'
        })
        .state('borrado', {
            url: '/borrado',
            component: 'borrado'
        })
        .state('editPaciente' , {
            url: '/editpaciente/:userID',
            component:'editPaciente'
        })
        .state('editProf', {
            url: '/editprof/:userID',
            component: 'editProf'
        }) 
        .state('viewPaciente' , {
            url: '/viewPaciente/:userID',
            component:'viewPaciente'
        })    
        .state('viewProf' , {
            url: '/viewProf/:userID',
            component:'viewProf'
        })   
        .state('inicio', {
            url: '/',
            component: 'inicio'
        });
    $urlRouterProvider.otherwise('/cuatrocerocuatro')
    })
    .name

export default home
