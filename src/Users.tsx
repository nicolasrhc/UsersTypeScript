import React from 'react';

interface Usuario {
    id: number;
    nombre: string;
    edad: number;  
  }
  
  let usu1: Usuario = {
    id: 0,
    nombre: "usuario1",
    edad: 19
  }
  
  let usu2: Usuario = {
    id: 1,
    nombre: "usuario2",
    edad: 29
  }
  
  let usu3: Usuario = {
    id: 2,
    nombre: "usuario3",
    edad: 58
  }
  
  let arrayUsuarios: Usuario[] = [];
  arrayUsuarios.push(usu1);
  arrayUsuarios.push(usu2);
  arrayUsuarios.push(usu3);