/*Creando la base de datos y seleccioandola*/
create database productos;
use productos;

/*Creando una tabla*/

create table mesas(
id int unsigned auto_increment primary key not null,
cantidad_sillas int unsigned
);

create table pedido(
id int unsigned auto_increment primary key not null,
monto float,
platos int 
);

insert into mesas (id,cantidad_sillas) values 
(default,4),(default,3),(default,6),(default,4);

CREATE TABLE `juana`.`usuarios` (`id` INT AUTO_INCREMENT , `email` VARCHAR(100) NOT NULL , `telefono` INT NOT NULL , `nombre` VARCHAR(100) NOT NULL , `apellido` VARCHAR(100) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
/*https://app.diagrams.net/#G1V9norX_6i-VruWPZsJcbh1dZMRbCq7Ao*/

/*Clase 2 Manipulación de tablas*/

create schema biblioteca;
use biblioteca;

create table books(
	id int unsigned auto_increment primary key not null,
    title varchar(200) not null,
    rating decimal(3,1) unsigned not null,
    awards int unsigned default 0,
    release_date date not null,
    length int unsigned not null
);

/*Alteramos la tabla añadimos la columna printing, cambiamos rating a null*/
ALTER TABLE `books` 
ADD COLUMN `printing` VARCHAR(45) NOT NULL AFTER `length`,
CHANGE COLUMN `rating` `rating` DECIMAL(3,1) UNSIGNED NULL;

/*Insertamos datos dentro de la tabla*/
INSERT INTO `books` (`title`, `rating`, `release_date`, `length`, `printing`) VALUES 
('El mundo de Fer', '1.2', '2023-01-01', '50', 'Cervantes');

insert into books(title,rating,release_date,length,printing)values
("El mundo de Luis",1.2,"2023-01-01",50,"Cervantes");

create table usuarios(
	id int unsigned primary key auto_increment not null,
    user_name varchar(80) not null unique,
    email varchar(150) not null unique
);
/*Ejecutar dos veces para ver el error 
Error Code: 1062. Duplicate entry 'LuisNavas' for key 'user_name'	0.016 sec
*/
insert into usuarios(id,user_name,email)values(default,"LuisNavas","lpipnavas@gmail.com");

/*Agregar columna img en la tabla books*/

alter table books add img varchar(500) not null;
alter table books modify title varchar(100) not null;
alter table books drop rating; 

create table usuarios2345(
	id int unsigned primary key auto_increment not null,
    user_name varchar(80) not null unique,
    email varchar(150) not null unique
);
drop table if exists usuarios2345;

/*agregamos info en books*/

insert into books(title,awards,release_date,length,printing,img)values(
"El rey Leon", 1,"2024-01-01",250,"Sevilla","https://i1.sndcdn.com/artworks-000573621965-pkvvd7-t500x500.jpg"
),(
"Toy Story", 1,"2000-01-01",250,"Sevilla","https://i1.sndcdn.com/artworks-000573621965-pkvvd7-t500x500.jpg"
),(
"100 de Soledad", 1,"1980-01-01",250,"Cartagena","https://i1.sndcdn.com/artworks-000573621965-pkvvd7-t500x500.jpg"
),(
"Toy Story", 1,"2000-01-01",250,"Sevilla","https://i1.sndcdn.com/artworks-000573621965-pkvvd7-t500x500.jpg"
);
select * from books where title = "Toy Story";
select * from books where title = "Toy Story" order by id desc;
select * from books where title = "Toy Story" order by id asc;/*Valor por defecto*/

insert into usuarios(id,user_name,email)values
(default,"Juan","juan@gmail.com"),
(default,"Alan","alan@gmail.com"),
(default,"Pedro","pedro@gmail.com"),
(default,"Alejandro","ale_dj@gmail.com"),
(default,"Noraima","noraima@gmail.com"),
(default,"Luna","luna36n@gmail.com");

select user_name from usuarios where id > 2 order by user_name desc limit 3 offset 3;
/*select * from where id between 2 and 7;*/

select * from books where title like "%Leon%";







