CREATE DATABASE vortex_empleado;
------------------------------
USE vortex_empleado;
CREATE TABLE `empleado` (
  `id_empleado` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `apellidos` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `tipo_identificacion` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `n_identificacion` int(11) NOT NULL,
  `telefono` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `correo` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `salario` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_empleado`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci

------------------------------ 
INSERT INTO `vortex_empleado`.`empleado`
(`nombres`,
`apellidos`,
`tipo_identificacion`,
`n_identificacion`,
`telefono`,
`correo`,
`salario`)
VALUES(
'Jonathan',
'Pinto Aroca',
'cc',
'1098288282',
'321673933',
'jonathan@gmail.com',
'300000');
------------------------------
INSERT INTO `vortex_empleado`.`empleado`
(`nombres`,
`apellidos`,
`tipo_identificacion`,
`n_identificacion`,
`telefono`,
`correo`,
`salario`)
VALUES(
'Camila',
'Lopez',
'cc',
'1094333282',
'32167333',
'camila@gmail.com',
'300000');