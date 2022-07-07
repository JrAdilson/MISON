create table receitas (
    id integer primary key generated always as identity,
    fonte varchar(50),
    valor numeric(15,2) not null,
    datalanc timestamp,
    descricao varchar(100),
    datadisp timestamp
);

create table despesas (
    id integer primary key generated always as identity,
    referencia varchar(50),
    valor numeric(15,2) not null,
    descricao varchar(100),
    valortot numeric(15,2) not null,
    datapag timestamp,
    custofixo numeric(15,2)
);