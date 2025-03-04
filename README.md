## Configurando e Executando Testes de Carga com K6 ##

### Passo a passo para instalar e configurar o K6 integrado com o Grafana ###

📌 1. Instalando o K6 no Windows

- Acesse https://github.com/grafana/k6/releases e baixe a versão do k6 no formato zip
- Extraia os arquivos para um diretório de sua escolha, por exemplo: C:\k6.
- Adicione o caminho da pasta C:\k6 às variáveis de ambiente
- No menu Iniciar, pesquise por "Variáveis de ambiente" e abra editar as variáveis de ambiente do sistema, clique em variáveis de ambiente,
  Em variáveis do sistema, localize a variável Path, selecione e clique em editar, clique em Novo e adicione C:\k6,
  Confirme todas as alterações e reinicie o terminal.
- Para verificar a instalação, execute no Prompt de Comando: k6 version
- Se a instalação foi bem-sucedida, a versão do K6 será exibida.

📌 2. Instalando e Configurando o Grafana

- Baixe o instalador do Grafana MSI: https://grafana.com/grafana/download?platform=windows
- Execute o instalador e siga as instruções
- Após a instalação, abra o Prompt de Comando e inicie o servidor do Grafana com: grafana-server.exe
- Acesse o Grafana via navegador em: http://localhost:3000.
- Faça login com as credenciais padrão: Usuário: admin, Senha: admin (será solicitado que você altere a senha após o primeiro login).

📌 3. Executando Testes de Carga com o K6

- Baixe repositório
- No diretório onde o arquivo script.js está salvo, execute o comando: k6 run script.js
- O K6 iniciará o teste de carga e exibirá os resultados no terminal

📌 4. Integração do K6 com Grafana (via InfluxDB)

- Para visualizar os dados no Grafana, é necessário configurar uma base de dados, como o InfluxDB.
- Acesse e faça a instalação: https://www.influxdata.com/downloads/
- Inicie o InfluxDB e configure uma nova base de dados: influx CREATE DATABASE k6 
- Execute o teste de carga enviando os dados para o InfluxDB: k6 run --out influxdb=http://localhost:8086/meu_banco script.js

No Grafana, adicione o InfluxDB como fonte de dados e crie um painel para visualizar os resultados.

Agora você está pronto para executar testes de carga no K6 e visualizar os resultados no Grafana! 🚀



