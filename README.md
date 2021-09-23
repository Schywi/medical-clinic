# Avisos Gerais
Caso não possua o "Go" instalado no seu computador , instale ele no site https://golang.org/dl/
E necessario instalar o "Go" para rodar os comandos com "go" no terminal

# Configurando o Servidor

No arquivo sql coloque a  senha do banco no campo "password" na linha indicada abaixo  
```
CREATE USER 'nativeuser'@'localhost'IDENTIFIED WITH mysql_native_password BY 'password';
```

No arquivo main.go coloque a senha do banco no campo "password" na linha indicada abaixo 

```
db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/recordings")
```

# Iniciando Servidor

Execute ``go run main.go  ``


# Configurando front end

Instale as dependencias executando ``npm i  `` no terminal
Apos a instalação execute ``npm start``
