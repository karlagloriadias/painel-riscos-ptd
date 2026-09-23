console.log("APP INICIOU");

alert("app.js carregou");

const riscos = [
{
id:"RPTD_001",

nome:"Falta de coordenação das ações entre as Secretarias finalísticas do MEC",

categoria:"Governança e Gestão",

secretarias:"SETEC, SESU, SERES, SEB, SECADI",

monitoramento:"SE",

descricao:"Dificuldade em alinhar e executar atividades entre as secretarias, gerando atrasos ou falhas.",

probabilidade:4,
probabilidadeLabel:"4-Muito provável",

impacto:4,
impactoLabel:"4-Alto",

severidade:"Elevado",

estrategia:"Mitigar",

tratamento:"Realizar uma governança bem definida, com alinhamento estratégico, tático e operacional, com o detalhamento de papéis e responsabilidades em todos os níveis, definição de canais de comunicação e o estabelecimento de métricas que monitorem o nível de progressos conjunto das secretarias.",

responsavel:"SETEC, SESU, SERES, SEB, SECADI",

status:"A iniciar"
},

{
id:"RPTD_002",

nome:"Resistências a processos de compartilhamento de dados",

categoria:"Governança e Gestão",

secretarias:"STIC, Segape, SEB",

monitoramento:"SE",

descricao:"Oposição ou barreiras internas ou externas na troca de informações e bases de dados, inviabilizando a integração.",

probabilidade:4,
probabilidadeLabel:"4-Muito provável",

impacto:4,
impactoLabel:"4-Alto",

severidade:"Elevado",

estrategia:"Eliminar",

tratamento:"Estabelecer no modelo de governança de dados o desenvolvimento do catálogo das bases de referência existentes, a padronização de protocolos técnicos para troca de dados, acordos formais de compartilhamento, promoção da cultura de dados e implementação de mecanismos seguros de compartilhamento.",

responsavel:"STIC, Segape, SEB",

status:"A iniciar"
},

{
id:"RPTD_003",

nome:"Sistemas legados pouco confiáveis e com problemas de estrutura",

categoria:"Tecnologia e Infraestrutura",

secretarias:"STIC, SESU, SETEC",

monitoramento:"SE",

descricao:"Dependência de sistemas antigos, instáveis e defasados que não suportam novas demandas.",

probabilidade:3,
probabilidadeLabel:"3-Provável",

impacto:3,
impactoLabel:"3-Médio",

severidade:"Moderado",

estrategia:"Eliminar",

tratamento:"Realizar diagnóstico e estabelecer programa de atualização tecnológica priorizando sistemas legados com maior risco operacional e aderência às boas práticas do Governo Federal.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_004",

nome:"Falta de capacitação e número reduzido de pessoas para conduzir os projetos",

categoria:"Capacitação e Recursos Humanos",

secretarias:"SETEC, SESU, SERES, SEB, SECADI",

monitoramento:"SE",

descricao:"Insuficiência de profissionais qualificados e em quantidade adequada para planejar, executar e gerenciar o PTD.",

probabilidade:5,
probabilidadeLabel:"5-Praticamente certo",

impacto:5,
impactoLabel:"5-Muito alto",

severidade:"Crítico",

estrategia:"Mitigar",

tratamento:"Pesquisar formas alternativas para composição da força de trabalho por meio de acordos de cooperação técnica, contratar empresas especializadas com transferência de conhecimento e implementar programas de capacitação e retenção.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_005",

nome:"Não conformidade com a LGPD",

categoria:"Capacitação e Recursos Humanos",

secretarias:"STIC, SEGAPE, SESU",

monitoramento:"SE",

descricao:"Risco de as ações, sistemas e processos do PTD não atenderem aos requisitos da LGPD.",

probabilidade:2,
probabilidadeLabel:"2-Pouco provável",

impacto:5,
impactoLabel:"5-Muito alto",

severidade:"Moderado",

estrategia:"Eliminar",

tratamento:"Fortalecer a conformidade com a LGPD, mapear os dados tratados, classificá-los conforme sensibilidade, realizar avaliações formais de impacto e melhorar continuamente os processos relacionados ao tratamento de dados.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},
{
id:"RPTD_006",

nome:"Dependência de fornecedores de tecnologia",

categoria:"Tecnologia e Infraestrutura",

secretarias:"STIC,SESU",

monitoramento:"SE",
descricao:"Excessiva confiança em empresas externas para desenvolvimento e suporte de soluções tecnológicas críticas.",

probabilidade:3,
probabilidadeLabel:"3-Provável",

impacto:5,
impactoLabel:"5-Muito alto",

severidade:"Elevado",

estrategia:"Mitigar",

tratamento:"Transferir gradualmente dependências para empresas públicas de tecnologia, estimular software livre, documentar soluções e promover transferência de conhecimento interno.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_007",

nome:"Escopo em constante modificação",
categoria:"Processos e Gestão de Projetos",

secretarias:"STIC,SEGAPE",

monitoramento:"SE",

descricao:"Expansão descontrolada dos requisitos e objetivos do projeto sem controle de recursos e prazos.",

probabilidade:3,
probabilidadeLabel:"3-Provável",

impacto:4,
impactoLabel:"4-Alto",

severidade:"Elevado",

estrategia:"Mitigar",

tratamento:"Definir declaração clara de escopo, estabelecer governança de mudanças rigorosa e realizar gestão contínua das expectativas das partes interessadas.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_008",

nome:"Inviabilidade ou insuficiência de orçamento",
categoria:"Financeira",

secretarias:"Todas as Secretarias",

monitoramento:"SE",

descricao:"Atrasos, escassez ou inadequação de recursos financeiros para sustentação do PTD.",

probabilidade:3,
probabilidadeLabel:"3-Provável",

impacto:5,
impactoLabel:"5-Muito alto",

severidade:"Elevado",

estrategia:"Mitigar",

tratamento:"Monitorar orçamento continuamente, planejar de forma flexível, buscar fontes alternativas de financiamento e otimizar recursos de tecnologia.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_009",

nome:"Complexidade da integração de sistemas e dados",
categoria:"Tecnologia e Infraestrutura",

secretarias:"STIC, SEGAPE, SESU",

monitoramento:"SE",

descricao:"Desafios técnicos e operacionais para interoperabilidade de sistemas distintos e unificação de grandes volumes de dados.",

probabilidade:4,
probabilidadeLabel:"4-Muito provável",

impacto:4,
impactoLabel:"4-Alto",

severidade:"Elevado",

estrategia:"Mitigar",

tratamento:"Adotar arquitetura modular, padrões de interoperabilidade, catálogo de APIs, testes rigorosos e comitê de arquitetura corporativa.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_010",

nome:"Baixa adoção pelos usuários finais",
categoria:"Adoção e Mudança Organizacional",

secretarias:"SEB, SETEC, SESU, SECADI",

monitoramento:"SE",

descricao:"Falta de engajamento, aceitação ou utilização das novas soluções digitais.",

probabilidade:3,
probabilidadeLabel:"3-Provável",

impacto:3,
impactoLabel:"3-Médio",

severidade:"Moderado",

estrategia:"Mitigar",

tratamento:"Realizar campanhas de comunicação, treinamentos segmentados, canais de suporte e mecanismos permanentes de coleta de feedback.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},
{
id:"RPTD_011",

nome:"Falhas na gestão da mudança cultural",
categoria:"Adoção e Mudança Organizaciona",

secretarias:"SETEC, SESU, SEB, SECADI",

monitoramento:"SE",

descricao:"Incapacidade de preparar a organização para as profundas mudanças culturais e de mentalidade exigidas pela Transformação Digital.",

probabilidade:5,
probabilidadeLabel:"5-Praticamente certo",

impacto:5,
impactoLabel:"5-Muito alto",

severidade:"Crítico",

estrategia:"Mitigar",

tratamento:"Realizar liderança engajada, estabelecer plano de comunicação diferenciado e transparente para audiências distintas, considerando suas preocupações e motivações. Criar programas de conscientização e capacitação com diferentes trilhas baseadas nos papéis e níveis de conhecimento tecnológico.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_012",

nome:"Ameaças de cibersegurança e vulnerabilidades (além da LGPD)",
categoria:"Segurança e Conformidade",

secretarias:"STIC,SEGAPE",

monitoramento:"SE",
descricao:"Ocorrência de ataques cibernéticos ou falhas de segurança que comprometem sistemas e informações.",

probabilidade:5,
probabilidadeLabel:"5-Praticamente certo",

impacto:5,
impactoLabel:"5-Muito alto",

severidade:"Crítico",

estrategia:"Mitigar",

tratamento:"Implementar medidas de segurança robustas, monitoramento contínuo, planos de resposta a incidentes, fortalecimento das políticas de gestão de identidades, adoção de frameworks reconhecidos, testes periódicos de segurança e programas contínuos de capacitação em cibersegurança.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_013",
nome:"Descontinuidade ou alterações políticas institucionais",
categoria:"Política e Institucional",

secretarias:"Todas as Secretarias",

monitoramento:"SE",
descricao:"Mudanças na gestão ministerial ou nas prioridades governamentais que afetam o foco e o apoio ao PTD.",
probabilidade:3,
probabilidadeLabel:"3-Provável",
impacto:5,
impactoLabel:"5-Muito alto",
severidade:"Elevado",
estrategia:"Mitigar/Aceitar",
tratamento:"Buscar apoio multissetorial, comunicação contínua com novas gestões, documentação robusta dos resultados do PTD, obtenção de apoio institucional amplo e formalização do PTD por meio de decretos e portarias.",
responsavel:"CGGA / STIC",
status:"A iniciar"
},

{
id:"RPTD_014",
nome:"Qualidade insuficiente dos dados existentes",
categoria:"Dados",

secretarias:"SEGAPE, SEB, SESU",

monitoramento:"SE",
descricao:"Presença de dados imprecisos, incompletos ou inconsistentes nas bases do MEC e vinculadas.",
probabilidade:5,
probabilidadeLabel:"5-Praticamente certo",
impacto:4,
impactoLabel:"4-Alto",
severidade:"Crítico",
estrategia:"Mitigar",
tratamento:"Realizar auditoria e limpeza de dados, padronização, governança para qualidade contínua e monitoramento permanente.",
responsavel:"CGGA / STIC",
status:"A iniciar"
},

{
id:"RPTD_015",
nome:"Subutilização ou falha na aplicação do potencial da Inteligência Artificial",
categoria:"Inovação e Transformação",

secretarias:"STIC,SEGAPE",

monitoramento:"SE",
descricao:"Dificuldade em aplicar e integrar efetivamente soluções de IA, perdendo benefícios esperados.",
probabilidade:3,
probabilidadeLabel:"3-Provável",
impacto:3,
impactoLabel:"3-Médio",
severidade:"Moderado",
estrategia:"Mitigar",
tratamento:"Realizar pilotos controlados, estabelecer diretrizes éticas para IA, criar métricas de avaliação e promover capacitação especializada.",
responsavel:"CGGA / STIC",
status:"A iniciar"
},

{
id:"RPTD_016",
nome:"Desconhecimento dos gestores sobre os componentes digitais disponíveis",
categoria:"Conhecimento e Comunicação",

secretarias:"SETEC, SESU, SEB, SECADI, SERES",

monitoramento:"SE",
descricao:"Desconhecimento, por parte dos gestores e equipes responsáveis pelos serviços, das soluções e componentes digitais oferecidos pela Secretaria de Governo Digital (SGD/MGI), como login gov.br, ferramenta de avaliação de satisfação, meio de pagamento gov.br, mensageria e integração via barramento de APIs.",
probabilidade:4,
probabilidadeLabel:"4-Muito provável",
impacto:4,
impactoLabel:"4-Alto",
severidade:"Elevado",
estrategia:"Mitigar",
tratamento:"Promover ações de comunicação e sensibilização para ampliar o conhecimento dos gestores e equipes sobre os componentes digitais disponíveis no Governo Federal. Elaborar e divulgar catálogo interno com descrição e orientações de uso. Realizar reuniões com as secretarias finalísticas para prever a adoção dos componentes digitais e designar pontos focais técnicos para apoiar as integrações.",
responsavel:"CGGA / STIC",
status:"A iniciar"
},

{
id:"RPTD_017",

nome:"Heterogeneidade da infraestrutura tecnológica",
categoria:"Tecnologia e Infraestrutura",

secretarias:"SETEC,SEB, SECADI",

monitoramento:"SE",

descricao:"Disparidade de recursos tecnológicos, hardware e conectividade entre as unidades educacionais, inviabilizando a implementação uniforme das soluções.",

probabilidade:4,
probabilidadeLabel:"4-Muito provável",

impacto:4,
impactoLabel:"4-Alto",

severidade:"Elevado",

estrategia:"Mitigar",

tratamento:"Criar modelo de implementação escalonada por níveis de maturidade tecnológica. Estabelecer programa nacional de nivelamento da infraestrutura educacional para reduzir disparidades tecnológicas e possibilitar implementação mais uniforme das soluções digitais.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_018",

nome:"Conflito com a autonomia das instituições",
categoria:"Política Institucional",

secretarias:"SERES,SESU",

monitoramento:"SE",

descricao:"Resistência das universidades e institutos federais, que possuem autonomia administrativa, em adotar plataformas e processos padronizados pelo PTD.",

probabilidade:4,
probabilidadeLabel:"4-Muito provável",

impacto:4,
impactoLabel:"4-Alto",

severidade:"Elevado",

estrategia:"Mitigar",

tratamento:"Estabelecer comitê de governança participativo com representantes das instituições para definição colaborativa de padrões e políticas. Criar comitê consultivo permanente e desenvolver modelos de adesão flexíveis e modulares para adoção gradual das soluções do PTD.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_019",

nome:"Insegurança jurídica de novos modelos regulatórios",
categoria:"Processo e Regulatório",

secretarias:"STIC,SERES",

monitoramento:"SE",

descricao:"Risco de contestações legais ou falta de amparo normativo para novos métodos de regulação e supervisão baseados em tecnologias digitais.",

probabilidade:3,
probabilidadeLabel:"3-Provável",

impacto:5,
impactoLabel:"5-Muito alto",

severidade:"Elevado",

estrategia:"Mitigar",

tratamento:"Elaborar pareceres jurídicos e minutas de atos normativos. Submeter os novos modelos à consulta pública ampla e implementar ambiente de sandbox regulatório para validação controlada antes da adoção em larga escala.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_020",

nome:"Governança de dados federativa",
categoria:"Dados",

secretarias:"SEGAPE,SEB, SETEC",

monitoramento:"SE",
descricao:"Dificuldade em estabelecer uma governança de dados coesa que abranja diferentes esferas municipal, estadual e federal, afetando a qualidade e a integração das informações da educação básica.",

probabilidade:5,
probabilidadeLabel:"5-Praticamente certo",

impacto:4,
impactoLabel:"4-Alto",

severidade:"Crítico",

estrategia:"Mitigar",

tratamento:"Criar framework de interoperabilidade e políticas de dados mestre. Instituir Fórum Permanente de Governança de Dados Educacionais. Implementar programa de certificação e selo de qualidade para estimular a adesão dos entes federativos às boas práticas de governança de dados.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},
{
id:"RPTD_021",

nome:"Exclusão digital de públicos vulneráveis",
categoria:"Acessabilidade e Inclusão",

secretarias:"SECADI,SEB, SETEC",

monitoramento:"SE",
descricao:"Falha das novas tecnologias em atender às necessidades de pessoas com deficiência, baixa proficiência digital ou sem acesso a recursos, aprofundando desigualdades.",

probabilidade:4,
probabilidadeLabel:"4-Muito provável",

impacto:4,
impactoLabel:"4-Alto",

severidade:"Elevado",

estrategia:"Mitigar",

tratamento:"Incorporar requisitos de acessibilidade e usabilidade em todas as soluções digitais. Realizar testes com usuários de diferentes perfis, estabelecer parcerias estratégicas com organizações que atuam junto a públicos vulneráveis e implementar programas de capacitação e letramento digital.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_022",

nome:"Gestão de identidade e acesso descentralizada",
categoria:"Segurança e Conformidade",

secretarias:"STIC, SEGAPE, SESU",

monitoramento:"SE",
descricao:"Complexidade em gerenciar o ciclo de vida de identidades digitais de milhões de usuários em sistemas heterogêneos, aumentando a superfície de ataque.",

probabilidade:4,
probabilidadeLabel:"4-Muito provável",

impacto:5,
impactoLabel:"5-Muito alto",

severidade:"Crítico",

estrategia:"Mitigar",

tratamento:"Desenvolver uma solução centralizada e federada de gestão de identidade e acesso. Adotar o Gov.br como plataforma de identidade federada e implementar solução corporativa de IAM para integração entre sistemas legados e novos ambientes digitais.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_023",

nome:"Métricas de avaliação inadequadas",
categoria:"Avaliação e Monitoramento",

secretarias:"STIC,SEGAPE",

monitoramento:"SE",
descricao:"Dificuldade em definir e coletar indicadores de desempenho que meçam efetivamente o sucesso e o impacto da transformação digital nas políticas educacionais.",

probabilidade:4,
probabilidadeLabel:"4-Muito provável",

impacto:3,
impactoLabel:"3-Médio",

severidade:"Elevado",

estrategia:"Mitigar",

tratamento:"Definir framework de medição de resultados com indicadores alinhados aos objetivos estratégicos do MEC. Adotar metodologia formal de planejamento da transformação digital e desenvolver painéis interativos para monitoramento dos indicadores em tempo real.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_024",

nome:"Sobrecarga e fadiga dos canais digitais",
categoria:"Comunicação e Engajamento",

secretarias:"STIC,Ouvidoria",

monitoramento:"SE",
descricao:"Risco de os canais digitais se tornarem o único ponto de contato, gerando sobrecarga na ouvidoria e frustração dos usuários pela ausência de atendimento humanizado.",

probabilidade:5,
probabilidadeLabel:"5-Praticamente certo",

impacto:3,
impactoLabel:"3-Médio",

severidade:"Elevado",

estrategia:"Mitigar",

tratamento:"Implementar automação para triagem e atendimento de primeiro nível, integrar soluções de inteligência artificial generativa, dimensionar adequadamente as equipes especializadas e otimizar a jornada do usuário entre canais digitais e atendimento humano.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_025",

nome:"Interoperabilidade com ecossistemas de terceiros",
categoria:"Tecnologia e Infraestrutura",

secretarias:"STIC,SESU, SETEC",

monitoramento:"SE",
descricao:"Dificuldade na integração das plataformas do MEC com sistemas de parceiros estratégicos, limitando a oferta de serviços digitais de valor agregado.",

probabilidade:4,
probabilidadeLabel:"4-Muito provável",

impacto:3,
impactoLabel:"3-Médio",

severidade:"Elevado",

estrategia:"Mitigar",

tratamento:"Publicar catálogo padronizado de APIs, estabelecer programa de parcerias para integração de sistemas externos e promover interoperabilidade segura, escalável e alinhada à arquitetura corporativa do MEC.",

responsavel:"CGGA / STIC",

status:"A iniciar"
},

{
id:"RPTD_026",

nome:"Resistência à tomada de decisão baseada em dados",
categoria:"Adoção e Mudança Organizacional",

secretarias:"SEGAPE, Todas as Secretarias",

monitoramento:"SE",
descricao:"Cultura organizacional que desvaloriza ou resiste ao uso de dados e análises para formulação de políticas públicas, privilegiando decisões intuitivas ou tradicionais.",

probabilidade:5,
probabilidadeLabel:"5-Praticamente certo",

impacto:4,
impactoLabel:"4-Alto",

severidade:"Crítico",

estrategia:"Mitigar",

tratamento:"Promover capacitação de gestores em análise de dados, implantar dashboards intuitivos, criar programa de multiplicadores da cultura de dados e vincular a alocação de recursos ao uso efetivo de evidências e indicadores para tomada de decisão.",

responsavel:"CGGA / STIC",

status:"A iniciar"
}

];

let dadosFiltrados = [...riscos];
let severityChart;
let strategyChart;

function atualizarKPIs(){

document.getElementById("totalRiscos").textContent=dadosFiltrados.length;

document.getElementById("criticos").textContent=
dadosFiltrados.filter(r=>r.severidade==="Crítico").length;

document.getElementById("elevados").textContent=
dadosFiltrados.filter(r=>r.severidade==="Elevado").length;

document.getElementById("moderados").textContent=
dadosFiltrados.filter(r=>r.severidade==="Moderado").length;

document.getElementById("registroInfo").innerText=
`${dadosFiltrados.length} risco(s) exibido(s)`;
}

function renderTabela(){

const tbody =
document.getElementById("riskTable");

tbody.innerHTML = "";

dadosFiltrados.forEach(r => {

const row =
document.createElement("tr");

row.className = "risk-row";

row.innerHTML = `

<td>
<span class="expand-icon">▶</span>
${r.id}
</td>

<td>${r.nome}</td>

<td>${r.probabilidadeLabel}</td>

<td>${r.impactoLabel}</td>

<td>
<span class="badge ${r.severidade
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()}">
${r.severidade}
</span>
</td>

<td>${r.estrategia}</td>

<td>${r.status}</td>

`;

tbody.appendChild(row);

const detailRow =
document.createElement("tr");

detailRow.style.display = "none";

detailRow.innerHTML = `

<td colspan="7">

<div class="risk-detail">

<div class="detail-card">

<h4>
ℹ DESCRIÇÃO DO RISCO
</h4>

<p>
${r.descricao}
</p>

<p>

<strong>
Avaliação do Risco:
</strong>

${r.probabilidadeLabel}
 ·
${r.impactoLabel}
 ·
${r.severidade}

</p>

</div>

<div class="detail-card">

<h4>

🛡 ESTRATÉGIA E AÇÕES DE TRATAMENTO

</h4>

<p>

${r.tratamento}

</p>

<div class="detail-footer">

<div class="status-box">

Status Atual:
${r.status}

</div>

<div>

Responsabilidade:
${r.responsavel || "CGGA / STIC"}

</div>

</div>

</div>

</div>

</td>

`;

tbody.appendChild(detailRow);

row.onclick = () => {

detailRow.style.display =
detailRow.style.display==="none"
? "table-row"
: "none";

};

});

}
function abrirDetalhe(r){

document.getElementById("riskDetails").innerHTML=`
<h2>${r.id}</h2>
<h3>${r.nome}</h3>
<p><b>Probabilidade:</b> ${r.probabilidade}</p>
<p><b>Impacto:</b> ${r.impacto}</p>
<p><b>Severidade:</b> ${r.severidade}</p>
<p><b>Estratégia:</b> ${r.estrategia}</p>
<p><b>Status:</b> ${r.status}</p>
`;

document.getElementById("modal").style.display="block";
}

function fecharModal(){
document.getElementById("modal").style.display="none";
}

function mostrarCriticos(){
dadosFiltrados=riscos.filter(r=>r.severidade==="Crítico");
atualizarPainel();
}

function limparFiltro(){
dadosFiltrados=[...riscos];
document.getElementById("searchBox").value="";
atualizarPainel();
}

function pesquisar(){

const termo=
document.getElementById("searchBox")
.value
.toLowerCase();

dadosFiltrados=riscos.filter(r=>
r.nome.toLowerCase().includes(termo) ||
r.id.toLowerCase().includes(termo)
);

atualizarPainel();
}

function criarMatriz(){

const matrix =
document.getElementById("riskMatrix");

matrix.innerHTML = "";

for(let p=5;p>=1;p--){

for(let i=1;i<=5;i++){

const score=p*i;

let classe="limitado";

if(score>=20) classe="critico";
else if(score>=12) classe="elevado";
else if(score>=6) classe="moderado";

const count=riscos.filter(r=>
r.probabilidade===p &&
r.impacto===i
).length;

const cell=document.createElement("div");

cell.className=`cell ${classe}`;

cell.innerHTML=`P${p}×I${i}<br>${count}`;

cell.onclick=()=>{

dadosFiltrados=riscos.filter(r=>
r.probabilidade===p &&
r.impacto===i
);

atualizarPainel();
};

matrix.appendChild(cell);
}
}
}

function atualizarGraficos(){

const criticos=dadosFiltrados.filter(r=>r.severidade==="Crítico").length;
const elevados=dadosFiltrados.filter(r=>r.severidade==="Elevado").length;
const moderados=dadosFiltrados.filter(r=>r.severidade==="Moderado").length;

if(severityChart) severityChart.destroy();

severityChart=new Chart(
document.getElementById("severityChart"),
{
type:"bar",
data:{
labels:["Crítico","Elevado","Moderado"],
datasets:[{
data:[criticos,elevados,moderados],
backgroundColor:[
"#dc2626",
"#f97316",
"#22c55e"
]
}]
},
options: {
plugins: {
legend: {
display: false
}
}
}
}
);

const estrategia={};

dadosFiltrados.forEach(r=>{
estrategia[r.estrategia]=(estrategia[r.estrategia]||0)+1;
});

if(strategyChart) strategyChart.destroy();

strategyChart=new Chart(
document.getElementById("strategyChart"),
{
type:"doughnut",
data:{
labels:Object.keys(estrategia),
datasets:[{
data:Object.values(estrategia)
}]
}
});
}

function atualizarPainel(){
atualizarKPIs();
renderTabela();
atualizarGraficos();
}

function preencherCategorias(){

const select =
document.getElementById(
"filtroCategoria"
);

const categorias =
[
...new Set(
riscos
.map(r => r.categoria)
.filter(Boolean)
)
];

categorias.sort();

categorias.forEach(cat=>{

const option=
document.createElement("option");

option.value=cat;

option.textContent=cat;

select.appendChild(option);

});

}

function filtrarCategoria(){

const categoria =

document.getElementById(
"filtroCategoria"
).value;

if(!categoria){

dadosFiltrados=
[...riscos];

atualizarPainel();

return;

}

dadosFiltrados=

riscos.filter(r=>

r.categoria===categoria

);

atualizarPainel();

}

function filtrarSeveridade(){

const severidade =

document.getElementById(
"filtroSeveridade"
).value;

if(!severidade){

dadosFiltrados=
[...riscos];

atualizarPainel();

return;

}

dadosFiltrados=

riscos.filter(r=>

r.severidade===severidade

);

atualizarPainel();

}

function carregarCriticos(){

const painel=
document.getElementById(
"listaCriticos"
);

painel.innerHTML="";

const criticos=

riscos.filter(r=>

r.severidade==="Crítico"

);

criticos.forEach(r=>{

const div=
document.createElement(
"div"
);

div.className=
"critico-card";

div.innerHTML=`

<h4>

${r.id}

</h4>

<strong>

${r.nome}

</strong>

<p>

${r.descricao}

</p>

<p>

<b>
Status:
</b>

${r.status}

</p>

`;

painel.appendChild(
div
);

});

}

console.log("ANTES");

console.log(riscos.length);

preencherCategorias();

carregarCriticos();

console.log("CRIANDO MATRIZ");

criarMatriz();

atualizarPainel();

console.log("DEPOIS");