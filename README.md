<h1>Sistema de Cadastro de Eventos - SENAI</h1>

<hr>
<br>

<h3>Cenário</h3>

<hr>

<p>A empresa Savinis, focada no desenvolvimento de software de alta performance, contratou você para realizar o desenvolvimento de um sistema de cadastro para eventos que será disponibilizado para o público, o que, até então, era realizado manualmente.</p>

<br>

<p>Esse sistema terá como função principal a divulgação dos eventos para a comunidade de desenvolvimento (grupo de pessoas que tem o intuito de compartilhar ideias, projetos e conhecimentos) para que sejam consultados de forma eficiente.</p>

<br>

<p>Você será responsável por escolher qual técnica irá atender os seguintes requisitos:</p>

<br>

<ul>
<li>Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.</li>
<li>Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.</li>
<li>Listar participantes e palestrantes por evento.</li>
<li>Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.</li>
</ul>

<br>

<h3>Sobre</h3>
<p>O projeto contém duas versões, uma em React (ainda em desenvolvimento) e outra versão simplificada, feita em Vanilla JavaScript e Node.js, confira abaixo como executar cada uma.</p>

<h3>Preparando o ambiente</h3>

<hr>
<br>

<ul>
<p>Requisitos para a versão React</p>
<li>Node.js LTS</li>
<li>Editor de preferência (Ex: VSCode)</li>
<li>Navegador atualizado</li>
<li>yarn</li>
</ul>

<ul>
<p>Requisitos para a versão simplificada</p>
<li>Node.js LTS</li>
<li>Editor de preferência (Ex: VSCode)</li>
</ul>

<br>

<h3>Executando o projeto</h3>

<br>

<ol>
<p>Versão React</p>
<li>
Clone o projeto
<code>git clone https://github.com/ReaperClown/senai-cadastro-eventos</code>
</li>
<li>
Acesse as pastas back-end e front-end e instale as dependências com o yarn<br>
<br><code>cd back-end/</code><br>
<code>yarn install</code><br>
<br>
E<br>
<br>
<code>cd ..</code><br>
<code>cd front-end/</code><br>
<code>yarn install</code>
</li>
<li>Ainda na pasta front-end/, inicie o projeto</li>
<code>yarn start</code><br>
<li>Continua...</li>
</ol>

<br>

<ol>
<p>Versão simplificada</p>
<li>
Clone o projeto
<code>git clone https://github.com/ReaperClown/senai-cadastro-eventos</code>
</li>
<li>Acesse a pasta versao-simplificada/</li>
<code>cd versao-simplificada/</code>
<li>Execute o script</li>
<code>node index.js</code>
</ol>