create database recordings; 


CREATE USER 'nativeuser'@'localhost'IDENTIFIED WITH mysql_native_password BY 'password';

DROP TABLE IF EXISTS Pacientes;
CREATE TABLE Pacientes (
  id         VARCHAR(255) NOT NULL,
  nomePaciente      VARCHAR(128) NOT NULL,
  rua    VARCHAR(255) NOT NULL,
  numeroCasa       INT NOT NULL,
  complemento      VARCHAR(128) NOT NULL,
  bairro    VARCHAR(255) NOT NULL,
  CEP       INT NOT NULL,
  email      VARCHAR(128) NOT NULL,
  telefone   INT NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO Pacientes 
  (id,nomePaciente, rua, numeroCasa,complemento, bairro,  CEP,email,telefone ) 
VALUES 
  ("oi",'Kayle', 'Mamado monjro', 139, 'casa','Noxus', 192830382, 'aa@gmail.com',9999999);
 
DROP TABLE IF EXISTS Medicos;
CREATE TABLE Medicos (
  id          VARCHAR(255) NOT NULL,
  nomeMedicos      VARCHAR(128) NOT NULL,
  rua    VARCHAR(255) NOT NULL,
  numeroCasa       INT NOT NULL,
  complemento      VARCHAR(128) NOT NULL,
  bairro    VARCHAR(255) NOT NULL,
  CEP       INT NOT NULL,
  email      VARCHAR(128) NOT NULL,
  telefone   INT NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO Medicos 
  (nomeMedicos, rua, numeroCasa,complemento, bairro,  CEP,email,telefone ) 
VALUES 
  ('Draven', 'Mamado monjro', 139, 'casa','Noxus', 192830382, 'dd@gmail.com',9999999);
 
DROP TABLE IF EXISTS Convenios;
CREATE TABLE Convenios (
  id          VARCHAR(255) NOT NULL,
  nomeFantasia       VARCHAR(255) NOT NULL,
  nomeEmpresa    VARCHAR(255) NOT NULL,
  CNPJ       VARCHAR(255) NOT NULL,
  email      VARCHAR(128) NOT NULL,
  nomeContato    VARCHAR(255) NOT NULL,
  homepage        VARCHAR(255) NOT NULL,
  telefone  INT NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO Convenios 
  (nomeFantasia, nomeEmpresa, CNPJ,email, nomeContato,  homepage,telefone ) 
VALUES 
  ('Lucas inc', 'Lucas software', "a0-2isafh3oa", 'noxus@gmail.com','Urgot VII', 'lmsoftware.com',9999999);
 

use  recordings;


UPDATE Pacientes SET nomePaciente="Kayle", rua="Fonjiro", numeroCasa=139,complemento='casa', 
bairro="Noxus",  CEP=192830382,email='dd@gmail.com',telefone=9999999  WHERE id = 1;
DELETE FROM Pacientes WHERE id = 1;
 SELECT * FROM Convenios;
 SELECT * FROM Medicos;
  SELECT * FROM Pacientes;
