delete from loja;
delete from produto;

insert into loja (cnpj, nome, endereco) 
values ('0123456789', 'loja 1', 'rua A, 123, centro - franca/sp');

insert into loja (cnpj, nome, endereco) 
values ('0000000', 'loja 2', 'rua B, 123, centro - ribeirao preto/sp');

insert into loja (cnpj, nome, endereco) 
values ('1111111', 'loja 3', 'rua ABC, 123, centro - são paulo/sp');

insert into produto (nome, marca, categoria, preco)
values('geladeira A', 'consul', 'eletro', 1500.00);

insert into produto (nome, marca, categoria, preco)
values('microondas B', 'electrolux', 'eletro', 400.00);

insert into produto (nome, marca, categoria, preco)
values('cama box A', 'castor', 'moveis', 2500.00);

insert into produto (nome, marca, categoria, preco)
values('guarda roupa casal B', 'araplac', 'moveis', 900.00);



select * from loja;
select * from produto;