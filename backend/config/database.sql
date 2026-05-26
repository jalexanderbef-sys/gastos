CREATE DATABASE gastos;

use gastos;


create Table categorias(

    cat_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50)

);

create table transacciones(
    ts_id int PRIMARY KEY AUTO_INCREMENT,
    monto DECIMAL,
    categoria_id INT,
    fecha DATE,
    

    Foreign KEY (categoria_id) REFERENCES categorias(cat_id)
);

select * from transacciones;


insert into categorias(nombre) values('alimentación'), ('salario'), ('transporte');


insert into transacciones(monto,cat_id,fecha)
values (1000,1,'2026-05-26'),(1000,3,'2026-05-26');

