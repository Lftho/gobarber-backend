## Configuração do insomnia

Caso queria alterar a porta do backend, necessário remover o "4000" e coloca de sua preferência o número.

<img src="https://github.com/Lftho/gobarber-backend/blob/main/src/assets-readme/code-01.png" />

<br>

Primeiro momento o agendamento será feito de hora em hora.Está sendo usando a lib ```date-fns``` para controle de horas.

## Documento sobre repository, service e patterns

<p>Explicação de como utilizar repository e serviços. Utilizando o nodejs </p>
    <a style="text-decoration: none" 
    href="https://www.notion.so/Repository-service-e-patterns-82419cceb11c4c4fbbc055ade7fb1ac5"> - Documento</a>


<br>

## Bancos de dados - Docker

<h3>Como funciona ?</h2>
<p>
  <ul>
    <li>
      Criação de ambientes isolados (container);
    </li>
    <li>
      Containers expõe portas para comunicação;
    </li>
  </ul>
</p>

<h3>Principais conceitos</h3>
<p>
<ul>
  <li>
    Imagem: Um serviço disponível do docker (mysql, redis) tudo isso é imagem. Que são ferramentas que podemos colocar dentro do container.
  </li>
  <li>
    Container: Instancia de uma imagem
  </li>
  <li>
    Docker Registry (Docker Hub)
  </li>
  <li>
    Dockerfile
    - Receita de uma imagem;
  </li>
  </ul>
<p>

## Instalação do Docker

<p>Passo-a-passo de como fazer a instalação do Docker, segue o link abaixo: </p>

<a 
style="text-decoration: none"
href="https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2"> - Instalando Docker</a>


<h3>Criando container do banco</h3>

Comando para essa etapa:
``` 
  docker run --name gostack_postgree -e POSTGRESS_PASSWORD=docker -p 5432:5432 -d postgress
```

O primeiro "5432" antes do dois-pontos é a porta que você ser alterada para qualquer outra caso ela já esteja sendo usada. Já o "5432" depois do dois-pontos é a porta que o postgress sempre vai usar devido as configurações que ele tem por si só.

Como saber se o postgress está sendo executado, usando o seguinte comando:
``` docker ps ``` 

Caso o postgress não subiu, roda o comando ``` docker ps -a ``` que fará uma listagem de todas imagens.

<img src="" alt="status-executando-docker" />

<h3>Configuração de portas - docker</h3>

Como verificar se a porta no Linux ou Mac, estão disponíveis:

``` 
lsof -i :5432 
```  

Como verificar a porta no windows utilizando o powershell:

``` 
Get-Process -Id (Get-NetTCPConnection -LocalPort 5432).OwningProcess 
``` 

Ou caso, não funcione no powershell. Usar via cmd

```
C:\> netstat -a -b
``` 


<h3>Start/Stop</h3>

O docker ele não ficará rodando na sua máquina eternamente, quando você fazer o desligamento do computador ou reiniciar a máquina. Provavelmente o docker irá parar sua image. 

Quando rodar o comandao ``` docker ps ``` não vai encontrar nada. Para ficar online novamente, necessário fazer o comando ```docker ps -a``` para mostrar uma lista de todas as imagens, após isso pegar o "CONTAINER ID" e roda o comando ```docker start id``` ou para parar a imagem roda ```docker stop id```. O "id" ele se caracteriza com vários números.   