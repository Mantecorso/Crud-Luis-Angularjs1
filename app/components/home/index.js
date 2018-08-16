import angular from 'angular';
import DatosService from '../home/listadoJson';
import {HomeComponent} from "./inicio/home.component";
import {PacienteoProfComponent} from "./pacienteoprof/choose.component";
import {NuevoProfesionalComponent} from "./nuevoprofesional/newprof.component";
import {NuevoUsuarioComponent} from "./nuevousuario/newuser.component";
import {EditProfComponent} from "./editProf/editProf.component";
import {EditPacienteComponent} from "./editPaciente/editPaciente.component";
import {viewPacienteComponent} from "./listadoJSON/viewPaciente.component";
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
.component('viewPacienteComponent', viewPacienteComponent)
.component('viewProfComponent', viewProfComponent)
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
            url: '/editprofesional/:userID',
            component: 'editProfesional'
        }) 
        .state('viewPacienteComponent' , {
            url: '/viewPaciente/:userID',
            component:'viewPacienteComponent'
        })    
        .state('viewProfComponent' , {
            url: '/viewProf/:userID',
            component:'viewProfComponent'
        })   
        .state('inicio', {
            url: '/',
            component: 'inicio'
        });
    $urlRouterProvider.otherwise('/cuatrocerocuatro')
    })
    .name

export default home
