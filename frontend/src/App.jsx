// import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate, useParams } from "react-router-dom";
// import {
//   Users,
//   FileText,
//   LayoutDashboard,
//   Plus,
//   Printer,
//   Edit2,
//   Trash2,
//   DollarSign,
//   Clock,
//   Newspaper,
//   X,
//   Save,
//   ArrowLeft,
//   PieChart as PieIcon,
//   BarChart3,
//   Wallet,
//   BarChart,
//   LogOut,
//   UserCheck,
//   UserX,
//   Filter,
//   TrendingUp,
//   ChevronLeft,
//   ChevronRight,
//   Info,
//   CheckCircle2,
//   AlertTriangle,
//   Lightbulb,
// } from "lucide-react";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// // ==========================================
// // DADOS DO CARROSSEL DE RELATÓRIOS (9 DICAS)
// // ==========================================
// const REPORT_CAROUSEL_ITEMS = [
//   {
//     id: 1,
//     title: "💡 Dica de Gestão: Redução de Inadimplência",
//     description:
//       "Clientes com OS em aberto há mais de 15 dias devem receber lembretes automáticos. Mantenha o acompanhamento ativo para otimizar o fluxo de caixa.",
//     tag: "Financeiro",
//     color: "#38bdf8",
//   },
//   {
//     id: 2,
//     title: "📈 Análise de Margem e Ticket Médio",
//     description:
//       "Monitore o seu Ticket Médio por OS. Elevar o valor médio dos serviços prestados traz mais margem líquida sem necessidade de aumentar a cartela de clientes.",
//     tag: "Estratégia",
//     color: "#10b981",
//   },
//   {
//     id: 3,
//     title: "🔄 Retenção e Reativação de Clientes Inativos",
//     description:
//       "Clientes inativos representam oportunidades de novas Ordens de Serviço. Realize campanhas pontuais de manutenção preventiva para reativá-los.",
//     tag: "CRM",
//     color: "#f59e0b",
//   },
//   {
//     id: 4,
//     title: "⏱️ Gestão do Tempo e SLA de Atendimento",
//     description:
//       "Defina prazos médios de entrega para cada tipo de serviço. Reduzir o tempo de execução aumenta a rotação do pátio/oficina e melhora a satisfação do cliente.",
//     tag: "Operacional",
//     color: "#a855f7",
//   },
//   {
//     id: 5,
//     title: "🎯 Pós-Venda e Pesquisa de Satisfação",
//     description:
//       "Envie uma mensagem 3 dias após a conclusão da OS perguntando sobre a qualidade do serviço. Isso fortalece o relacionamento e gera avaliações positivas.",
//     tag: "Fidelização",
//     color: "#ec4899",
//   },
//   {
//     id: 6,
//     title: "📦 Controle Estrito de Insumos e Peças",
//     description:
//       "Vincule peças e materiais diretamente à OS correspondente para evitar perdas não contabilizadas e garantir a margem de lucro exata de cada projeto.",
//     tag: "Custos",
//     color: "#f43f5e",
//   },
//   {
//     id: 7,
//     title: "🤝 Upsell no Momento da Avaliação",
//     description:
//       "Ao diagnosticar o problema principal do cliente, identifique serviços preventivos complementares. Apresentar opções no orçamento aumenta o valor médio da OS.",
//     tag: "Vendas",
//     color: "#8b5cf6",
//   },
//   {
//     id: 8,
//     title: "📊 Projeção de Receita Recorrente",
//     description:
//       "Incentive contratos de manutenção periódica para clientes corporativos. A receita previsível mensal traz estabilidade financeira no longo prazo.",
//     tag: "Planejamento",
//     color: "#06b6d4",
//   },
//   {
//     id: 9,
//     title: "📢 Marketing Direto por Histórico",
//     description:
//       "Consulte o histórico de clientes que não realizam serviços há mais de 6 meses e ofereça uma verificação gratuita ou desconto de retorno.",
//     tag: "Marketing",
//     color: "#84cc16",
//   },
// ];

// // ==========================================
// // BASE DE DADOS DOS ARTIGOS (15 ARTIGOS EXPANDIDOS)
// // ==========================================
// export const ARTICLES_DATA = [
//   {
//     id: "fluxo-de-caixa",
//     title: "Como Otimizar o Fluxo de Caixa na sua Empresa",
//     category: "Finanças",
//     image:
//       "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1000&auto=format&fit=crop&q=80",
//     desc: "Estratégias práticas e avançadas para manter a saúde financeira do seu negócio previsível e lucrativa.",
//     content: `
//       <h2>1. O que é o Fluxo de Caixa e por que ele falha?</h2>
//       <p>O fluxo de caixa é o registro minucioso das entradas e saídas de capital de uma empresa em um período de tempo. Muitos gestores erram ao confundir faturamento com lucro disponível: ver dinheiro entrando no caixa não significa que a empresa está no lucro se os prazos de recebimento forem incompatíveis com os prazos de pagamento de fornecedores.</p>

//       <h2>2. Separando Contas Pessoais das Empresariais (Pró-Labore)</h2>
//       <p>Misturar finanças pessoais com as da empresa é uma das principais causas de falência em pequenas empresas. O gestor deve definir um valor fixo de pró-labore e mantê-lo como um custo fixo no orçamento empresarial, sem retiradas adicionais desordenadas.</p>

//       <h2>3. Previsibilidade com Conciliação Diária</h2>
//       <p>A conciliação bancária deve ser feita diariamente. Registrar pagamentos pendentes e faturamentos a receber permite identificar gargalos financeiros com antecedência e planejar investimentos sem comprometer a reserva de emergência.</p>
//     `,
//   },
//   {
//     id: "fidelizar-clientes",
//     title: "5 Técnicas de CRM para Fidelizar Clientes em 2026",
//     category: "Gestão & CRM",
//     image:
//       "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&auto=format&fit=crop&q=80",
//     desc: "Aprenda a estruturar o histórico dos seus atendimentos e vender mais para a sua própria base.",
//     content: `
//       <h2>1. Centralização de Histórico de Interações</h2>
//       <p>Guardar as preferências e todo o histórico de Ordens de Serviço executadas para cada cliente é indispensável. Quando um cliente retorna e a equipe já sabe o exato serviço realizado anteriormente, a confiança é estabelecida de forma imediata.</p>

//       <h2>2. Lembretes Automáticos de Revisão e Manutenção</h2>
//       <p>Aproveite os dados do CRM para disparar lembretes periódicos de manutenção preventiva. Clientes apreciam empresas proativas que cuidam do seu patrimônio antes que um problema maior aconteça.</p>

//       <h2>3. Pesquisas Rápidas pós-Atendimento (NPS)</h2>
//       <p>Mandar uma mensagem simples perguntando a satisfação do cliente traz dados valiosos sobre a qualidade do seu time de atendimento e permite corrigir eventuais problemas imediatamente.</p>
//     `,
//   },
//   {
//     id: "automatizar-os",
//     title: "A Importância de Automatizar Ordens de Serviço",
//     category: "Produtividade",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
//     desc: "Reduza erros operacionais, elimine o papel e garanta o cumprimento rigoroso dos prazos.",
//     content: `
//       <h2>1. O Fim dos Blocos de Papel e Rasuras</h2>
//       <p>Ordens de serviço em papel geram perda de informações, letras ilegíveis e retrabalho. A digitalização garante registros padronizados, acessíveis a qualquer membro da equipe em tempo real.</p>

//       <h2>2. Acompanhamento em Tempo Real e Transparência</h2>
//       <p>Saber com precisão qual OS está Pendente, Em Andamento ou Concluída melhora o planejamento operacional e otimiza o tempo de resposta ao cliente final quando ele solicita uma atualização.</p>
//     `,
//   },
//   {
//     id: "precificacao-servicos",
//     title: "Precificação Correta: Como Calcular a Margem Real de Serviços",
//     category: "Finanças",
//     image:
//       "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1000&auto=format&fit=crop&q=80",
//     desc: "Evite prejuízos velados calculando hora de trabalho, insumos, impostos e custos fixos imprevistos.",
//     content: `
//       <h2>1. Diferença entre Custos Diretos e Indiretos</h2>
//       <p>O custo direto engloba as peças e insumos consumidos na execução do serviço. Os custos indiretos são o aluguel da sede, energia elétrica, sistemas e folha de pagamento que precisam ser rateados no valor final do serviço.</p>

//       <h2>2. Calculando o Valor da Hora de Trabalho</h2>
//       <p>Determine a capacidade produtiva máxima em horas da sua equipe e divida os custos fixos totais por esse volume para entender o custo base por hora antes de aplicar a margem de lucro.</p>
//     `,
//   },
//   {
//     id: "pos-venda-eficiente",
//     title: "Pós-Venda Estratégico: O Segredo do Recorrente",
//     category: "Vendas",
//     image:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&auto=format&fit=crop&q=80",
//     desc: "A venda não termina na entrega. Descubra como transformar clientes pontuais em receita previsível.",
//     content: `
//       <h2>1. Contato de Acompanhamento (Follow-up)</h2>
//       <p>Entre em contato com o cliente cerca de 48 horas após a entrega para assegurar que tudo funciona perfeitamente. Esse cuidado demonstra profissionalismo e fortalece a retenção.</p>

//       <h2>2. Pesquisas de Satisfação e Depoimentos</h2>
//       <p>Aproveite o momento pós-atendimento para solicitar avaliações positivas no Google ou depoimentos que servirão para atrair novos clientes por meio de prova social.</p>
//     `,
//   },
//   {
//     id: "gestao-de-tempo",
//     title: "Gestão do Tempo e SLA em Oficinas e Prestadores de Serviço",
//     category: "Produtividade",
//     image:
//       "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1000&auto=format&fit=crop&q=80",
//     desc: "Aumente a rotação de serviços cumprindo prazos com rigor sem perder qualidade técnica.",
//     content: `
//       <h2>1. Definição de SLA (Acordo de Nível de Serviço)</h2>
//       <p>Estabelecer prazos claros para a análise inicial, orçamento e execução evita expectativas irrealistas do cliente e reduz a cobrança constante por updates.</p>

//       <h2>2. Mapeamento dos Gargalos Operacionais</h2>
//       <p>Analise periodicamente quais etapas tomam mais tempo no fluxo de trabalho para padronizar rotinas e otimizar a movimentação física ou digital na empresa.</p>
//     `,
//   },
//   {
//     id: "marketing-local",
//     title: "Como Atrair Clientes Locais para o seu Negócio de Serviços",
//     category: "Marketing",
//     image:
//       "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1000&auto=format&fit=crop&q=80",
//     desc: "Domine a sua região com estratégias práticas de presença digital e programas de indicação.",
//     content: `
//       <h2>1. Otimização do Perfil da Empresa no Google</h2>
//       <p>Mantenha seu perfil comercial completo com horário de funcionamento, fotos reais da estrutura, endereço correto e avaliações de clientes atualizadas.</p>

//       <h2>2. Programa de Indicação Premiada</h2>
//       <p>Ofereça descontos ou serviços bônus para clientes antigos que indicarem novos contatos que realizarem ordens de serviço com a sua empresa.</p>
//     `,
//   },
//   {
//     id: "reducao-de-inadimplencia",
//     title: "Como Reduzir a Inadimplência com Cobranças Inteligentes",
//     category: "Finanças",
//     image:
//       "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&auto=format&fit=crop&q=80",
//     desc: "Mantenha o recebimento de contas em dia sem prejudicar o bom relacionamento com os clientes.",
//     content: `
//       <h2>1. Comunicação Preventiva Antes do Vencimento</h2>
//       <p>Disparar um lembrete cortês por mensagem ou e-mail alguns dias antes do vencimento da cobrança previne o esquecimento e reduz drasticamente o atraso involuntário.</p>

//       <h2>2. Métodos Modernos de Pagamento</h2>
//       <p>Disponibilizar chaves Pix com QR Code e link para pagamento por cartão parcelado facilita a liquidação imediata da fatura na aprovação da OS.</p>
//     `,
//   },
//   {
//     id: "atendimento-humanizado",
//     title: "Atendimento Humanizado no Setor Técnico",
//     category: "Gestão & CRM",
//     image:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=80",
//     desc: "Traduzir termos técnicos complexos para uma linguagem acessível constrói relacionamentos duradouros.",
//     content: `
//       <h2>1. Linguagem Acessível e Clara</h2>
//       <p>Evite excesso de jargões técnicos ao explicar um orçamento. Clientes aprovam orçamentos com mais facilidade quando entendem a necessidade de cada item.</p>

//       <h2>2. Registro Transparente no Histórico da OS</h2>
//       <p>Anote em detalhes todas as observações técnicas na Ordem de Serviço para garantir clareza no atendimento e proteção em caso de dúvidas futuras.</p>
//     `,
//   },
//   {
//     id: "tecnica-de-upsell",
//     title: "Como Aplicar Upsell e Cross-sell em Ordens de Serviço",
//     category: "Vendas",
//     image:
//       "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1000&auto=format&fit=crop&q=80",
//     desc: "Aumente o ticket médio da sua empresa oferecendo adicionais e serviços complementares durante a avaliação.",
//     content: `
//       <h2>1. Entendendo a Diferença entre Upsell e Cross-sell</h2>
//       <p>O <strong>Upsell</strong> consiste em oferecer uma versão superior ou mais completa do serviço contratado (ex: trocar uma peça básica por uma de alta durabilidade). O <strong>Cross-sell</strong> é a inclusão de um serviço ou produto complementar que agregue valor ao principal (ex: incluir higienização na manutenção periódica).</p>

//       <h2>2. O Momento Perfeito para a Abordagem</h2>
//       <p>O melhor momento para propor um adicional é durante o diagnóstico inicial da Ordem de Serviço, quando o cliente está focado em resolver o problema por completo e aberto a recomendações de especialistas.</p>

//       <h2>3. Criando Combos de Serviços Vantajosos</h2>
//       <p>Combine serviços recorrentes em pacotes com pequeno desconto no valor total para incentivar o cliente a aprovar um escopo maior na mesma visita.</p>
//     `,
//   },
//   {
//     id: "organizacao-de-estoque",
//     title: "Controle de Insumos: Como Não Perder Margem de Lucro",
//     category: "Operacional",
//     image:
//       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80",
//     desc: "Vincule o consumo de materiais diretamente a cada Ordem de Serviço executada.",
//     content: `
//       <h2>1. Baixa de Material Vinculada à OS</h2>
//       <p>Cada componente, peça ou insumo utilizado em um atendimento deve ser baixado imediatamente do inventário e atrelado ao registro da OS correspondente.</p>

//       <h2>2. Inventários Periódicos de Auditoria</h2>
//       <p>Realize contagens físicas regulares do estoque para comparar com os saldos registrados no sistema e conter desperdícios e perdas de insumos.</p>
//     `,
//   },
//   {
//     id: "metricas-essenciais",
//     title: "As 4 Métricas Financeiras que Todo Gestor Deve Acompanhar",
//     category: "Finanças",
//     image:
//       "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&auto=format&fit=crop&q=80",
//     desc: "Ticket Médio, Faturamento Realizado, Taxa de Retenção e Receita Recorrente sem complicações.",
//     content: `
//       <h2>1. Ticket Médio por Serviço</h2>
//       <p>Indica quanto, em média, cada cliente gasta por atendimento. Aumentar o ticket médio é mais barato do que investir na atração de novos clientes.</p>

//       <h2>2. Taxa de Clientes Ativos vs. Inativos</h2>
//       <p>Mede a proporção da sua base que continua consumindo serviços no período. Manter clientes ativos garante estabilidade no fluxo de caixa.</p>
//     `,
//   },
//   {
//     id: "seguranca-juridica-os",
//     title: "Como Proteger sua Empresa com Ordens de Serviço Detalhadas",
//     category: "Gestão & CRM",
//     image:
//       "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1000&auto=format&fit=crop&q=80",
//     desc: "Aprovação prévia, vistoria de entrada e termos claros evitam desentendimentos jurídicos.",
//     content: `
//       <h2>1. Vistoria Completa na Entrada</h2>
//       <p>Registre detalhadamente as condições de recebimento do item ou equipamento antes de iniciar os trabalhos para evitar alegações indevidas sobre avarias anteriores.</p>

//       <h2>2. Aprovação Registrada do Orçamento</h2>
//       <p>Sempre solicite o aceite formal (físico ou digital) do cliente antes de iniciar qualquer serviço complementar ou alterar os custos negociados.</p>
//     `,
//   },
//   {
//     id: "cultura-de-atendimento",
//     title: "Como Treinar sua Equipe para Offerecer um Atendimento Nota 10",
//     category: "Gestão & CRM",
//     image:
//       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80",
//     desc: "Padronização de processos, empatia e alinhamento do time geram mais indicações espontâneas.",
//     content: `
//       <h2>1. Checklist Padrão de Atendimento</h2>
//       <p>Desenvolva passos claros para a recepção, diagnóstico, envio do orçamento, atualização de prazos e entrega final do trabalho.</p>

//       <h2>2. Autonomia Orientada para Solução de Problemas</h2>
//       <p>Capacite a sua equipe da ponta para resolver imprevistos pontuais rapidamente sem burocracias desnecessárias que frustram o cliente.</p>
//     `,
//   },
//   {
//     id: "tecnologia-no-crm",
//     title: "O Papel da Tecnologia na Escala de Serviços no Brasil",
//     category: "Produtividade",
//     image:
//       "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format&fit=crop&q=80",
//     desc: "Como pequenas e médias empresas utilizam sistemas modernos de CRM para crescer com estrutura.",
//     content: `
//       <h2>1. Centralização e Acesso em Nuvem</h2>
//       <p>Gerenciar clientes e Ordens de Serviço centralizados em um sistema permite acompanhar os indicadores de desempenho da sua empresa de qualquer lugar.</p>

//       <h2>2. Tomada de Decisão com Base em Dados</h2>
//       <p>Substitua o 'achismo' por dados precisos de faturamento, volume de pendências e comportamento de consumo da sua carteira de clientes.</p>
//     `,
//   },
// ];

// // ==========================================
// // DETALHE DO ARTIGO
// // ==========================================
// function ArticleDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const article = ARTICLES_DATA.find((a) => a.id === id);

//   if (!article) {
//     return (
//       <div style={{ padding: "40px", color: "#fff" }}>
//         <h2>Artigo não encontrado!</h2>
//         <button className="btn" onClick={() => navigate("/")}>
//           <ArrowLeft size={16} /> Voltar ao Dashboard
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div
//       style={{
//         maxWidth: "900px",
//         margin: "0 auto",
//         padding: "32px 16px",
//         color: "#f8fafc",
//       }}
//     >
//       <button
//         className="btn btn-secondary"
//         onClick={() => navigate("/")}
//         style={{ marginBottom: "24px" }}
//       >
//         <ArrowLeft size={16} /> Voltar para o Dashboard
//       </button>

//       <div>
//         <span
//           style={{
//             fontSize: "0.85rem",
//             background: "#0284c7",
//             padding: "4px 12px",
//             borderRadius: "4px",
//             color: "#fff",
//             fontWeight: "bold",
//           }}
//         >
//           {article.category}
//         </span>
//       </div>

//       <h1 style={{ fontSize: "2.3rem", margin: "16px 0", lineHeight: "1.2" }}>
//         {article.title}
//       </h1>
//       <p style={{ fontSize: "1.1rem", color: "#94a3b8", marginBottom: "24px" }}>
//         {article.desc}
//       </p>

//       <img
//         src={article.image}
//         alt={article.title}
//         style={{
//           width: "100%",
//           maxHeight: "420px",
//           objectFit: "cover",
//           borderRadius: "12px",
//           marginBottom: "32px",
//           border: "1px solid #334155",
//         }}
//       />

//       <div
//         style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#cbd5e1" }}
//         dangerouslySetInnerHTML={{ __html: article.content }}
//       />
//     </div>
//   );
// }

// // ==========================================
// // TELA DE LOGIN
// // ==========================================
// function LoginScreen({ onLogin }) {
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) return alert("Preencha todos os campos!");

//     const user = {
//       name: isRegistering ? name : email.split("@")[0],
//       email: email,
//     };
//     onLogin(user);
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "#0f172a",
//         color: "#fff",
//         padding: "16px",
//       }}
//     >
//       <div
//         className="card"
//         style={{ maxWidth: "400px", width: "100%", padding: "32px" }}
//       >
//         <h2
//           style={{ textAlign: "center", marginBottom: "8px", color: "#38bdf8" }}
//         >
//           ⚡ NOX CRM
//         </h2>
//         <p
//           style={{
//             textAlign: "center",
//             color: "#94a3b8",
//             marginBottom: "24px",
//           }}
//         >
//           {isRegistering
//             ? "Crie sua conta para começar"
//             : "Acesse sua conta para continuar"}
//         </p>

//         <form onSubmit={handleSubmit}>
//           {isRegistering && (
//             <div className="form-group" style={{ marginBottom: "16px" }}>
//               <label>Nome Completo</label>
//               <input
//                 type="text"
//                 placeholder="Seu nome"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//           )}

//           <div className="form-group" style={{ marginBottom: "16px" }}>
//             <label>E-mail</label>
//             <input
//               type="email"
//               placeholder="seuemail@exemplo.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-group" style={{ marginBottom: "24px" }}>
//             <label>Senha</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="btn"
//             style={{ width: "100%", padding: "12px" }}
//           >
//             {isRegistering ? "Cadastrar e Entrar" : "Entrar no Sistema"}
//           </button>
//         </form>

//         <div
//           style={{ marginTop: "20px", textAlign: "center", fontSize: "0.9rem" }}
//         >
//           <span style={{ color: "#94a3b8" }}>
//             {isRegistering ? "Já possui uma conta?" : "Ainda não tem conta?"}
//           </span>{" "}
//           <button
//             style={{
//               background: "none",
//               border: "none",
//               color: "#38bdf8",
//               cursor: "pointer",
//               fontWeight: "bold",
//             }}
//             onClick={() => setIsRegistering(!isRegistering)}
//           >
//             {isRegistering ? "Faça Login" : "Cadastre-se"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // COMPONENTE PRINCIPAL
// // ==========================================
// function MainApp() {
//   const navigate = useNavigate();
//   const [tab, setTab] = useState("dashboard");

//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);

//   const [clients, setClients] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [selectedOSForPrint, setSelectedOSForPrint] = useState([]);

//   const [carouselIndex, setCarouselIndex] = useState(0);

//   const [clientForm, setClientForm] = useState({
//     id: null,
//     firstName: "",
//     lastName: "",
//     phone: "",
//     address: "",
//     document: "",
//     email: "",
//   });

//   const [osForm, setOsForm] = useState({
//     id: null,
//     client_id: "",
//     title: "",
//     description: "",
//     value: "",
//     status: "Pendente",
//   });

//   const [isEditingClient, setIsEditingClient] = useState(false);
//   const [isEditingOS, setIsEditingOS] = useState(false);

//   const fetchData = async () => {
//     try {
//       const resClients = await fetch(`${API_URL}/clients`);
//       if (resClients.ok) {
//         const dataClients = await resClients.json();
//         setClients(Array.isArray(dataClients) ? dataClients : []);
//       }

//       const resOrders = await fetch(`${API_URL}/orders`);
//       if (resOrders.ok) {
//         const dataOrders = await resOrders.json();
//         setOrders(Array.isArray(dataOrders) ? dataOrders : []);
//       }
//     } catch (err) {
//       console.error("Erro ao carregar dados:", err);
//     }
//   };

//   useEffect(() => {
//     if (isAuthenticated) fetchData();
//   }, [isAuthenticated]);

//   useEffect(() => {
//     if (tab === "reports") {
//       const timer = setInterval(() => {
//         setCarouselIndex((prev) => (prev + 1) % REPORT_CAROUSEL_ITEMS.length);
//       }, 5000);
//       return () => clearInterval(timer);
//     }
//   }, [tab]);

//   const handleLogin = (user) => {
//     setCurrentUser(user);
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setCurrentUser(null);
//   };

//   if (!isAuthenticated) {
//     return <LoginScreen onLogin={handleLogin} />;
//   }

//   // --- AÇÕES DE CLIENTES (SEM STATUS) ---
//   const handleSaveClient = async (e) => {
//     e.preventDefault();
//     const fullName = `${clientForm.firstName} ${clientForm.lastName}`.trim();
//     const payload = {
//       name: fullName,
//       phone: clientForm.phone,
//       address: clientForm.address,
//       document: clientForm.document,
//       email: clientForm.email,
//     };

//     try {
//       if (isEditingClient && clientForm.id) {
//         const res = await fetch(`${API_URL}/clients/${clientForm.id}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         });

//         if (res.ok) {
//           const updatedClient = await res.json();
//           setClients((prev) =>
//             prev.map((c) =>
//               c.id === clientForm.id
//                 ? { ...c, ...payload, ...updatedClient }
//                 : c,
//             ),
//           );
//         }
//         setIsEditingClient(false);
//       } else {
//         await fetch(`${API_URL}/clients`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         });
//       }

//       setClientForm({
//         id: null,
//         firstName: "",
//         lastName: "",
//         phone: "",
//         address: "",
//         document: "",
//         email: "",
//       });
//       await fetchData();
//     } catch (err) {
//       alert("Erro ao salvar cliente.");
//     }
//   };

//   const handleEditClientClick = (c) => {
//     setIsEditingClient(true);
//     const nameParts = (c.name || "").trim().split(" ");
//     const firstName = nameParts[0] || "";
//     const lastName = nameParts.slice(1).join(" ") || "";

//     setClientForm({
//       id: c.id,
//       firstName,
//       lastName,
//       phone: c.phone || "",
//       address: c.address || "",
//       document: c.document || "",
//       email: c.email || "",
//     });
//   };

//   const handleDeleteClient = async (id) => {
//     if (!window.confirm("Tem certeza que deseja excluir este cliente?")) return;
//     try {
//       await fetch(`${API_URL}/clients/${id}`, { method: "DELETE" });
//       await fetchData();
//     } catch (err) {
//       alert("Erro ao excluir cliente.");
//     }
//   };

//   // --- AÇÕES DE ORDENS DE SERVIÇO ---
//   const handleSaveOS = async (e) => {
//     e.preventDefault();
//     const payload = {
//       client_id: osForm.client_id,
//       title: osForm.title,
//       description: osForm.description,
//       value: osForm.value || 0,
//       status: osForm.status,
//     };

//     try {
//       if (isEditingOS && osForm.id) {
//         await fetch(`${API_URL}/orders/${osForm.id}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         });
//         setIsEditingOS(false);
//       } else {
//         await fetch(`${API_URL}/orders`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         });
//       }

//       setOsForm({
//         id: null,
//         client_id: "",
//         title: "",
//         description: "",
//         value: "",
//         status: "Pendente",
//       });
//       await fetchData();
//     } catch (err) {
//       alert("Erro ao salvar OS.");
//     }
//   };

//   const handleEditOSClick = (o) => {
//     setIsEditingOS(true);
//     setOsForm({
//       id: o.id,
//       client_id: o.client_id || "",
//       title: o.title || "",
//       description: o.description || "",
//       value: o.value || "",
//       status: o.status || "Pendente",
//     });
//   };

//   const handleDeleteOS = async (id) => {
//     if (!window.confirm("Tem certeza que deseja excluir esta OS?")) return;
//     try {
//       await fetch(`${API_URL}/orders/${id}`, { method: "DELETE" });
//       await fetchData();
//     } catch (err) {
//       alert("Erro ao excluir OS.");
//     }
//   };

//   const toggleSelectOSForPrint = (id) => {
//     if (selectedOSForPrint.includes(id)) {
//       setSelectedOSForPrint(selectedOSForPrint.filter((item) => item !== id));
//     } else {
//       setSelectedOSForPrint([...selectedOSForPrint, id]);
//     }
//   };

//   const toggleSelectAllOS = () => {
//     if (selectedOSForPrint.length === orders.length) {
//       setSelectedOSForPrint([]);
//     } else {
//       setSelectedOSForPrint(orders.map((o) => o.id));
//     }
//   };

//   // --- MÉTRICAS DE RESUMO ---
//   const totalClientes = clients.length;

//   const totalFaturado = orders
//     .filter((o) => o.status === "Concluído")
//     .reduce((acc, curr) => acc + Number(curr.value || 0), 0);

//   const contasAReceber = orders
//     .filter((o) => o.status === "Pendente" || o.status === "Em Andamento")
//     .reduce((acc, curr) => acc + Number(curr.value || 0), 0);

//   const emAndamento = orders.filter((o) => o.status === "Em Andamento").length;
//   const pendentes = orders.filter((o) => o.status === "Pendente").length;
//   const concluidas = orders.filter((o) => o.status === "Concluído").length;
//   const totalOS = orders.length || 1;

//   const valPendentes = orders
//     .filter((o) => o.status === "Pendente")
//     .reduce((a, b) => a + Number(b.value || 0), 0);
//   const valAndamento = orders
//     .filter((o) => o.status === "Em Andamento")
//     .reduce((a, b) => a + Number(b.value || 0), 0);

//   const ticketMedio = concluidas > 0 ? totalFaturado / concluidas : 0;

//   const pConcluido = (concluidas / totalOS) * 100;
//   const pAndamento = (emAndamento / totalOS) * 100;
//   const pPendente = (pendentes / totalOS) * 100;

//   const formatBRL = (val) =>
//     Number(val || 0).toLocaleString("pt-BR", {
//       style: "currency",
//       currency: "BRL",
//     });

//   const ordersToPrint = orders.filter(
//     (o) => selectedOSForPrint.length === 0 || selectedOSForPrint.includes(o.id),
//   );

//   return (
//     <div className="app-container">
//       {/* Sidebar Navigation */}
//       <aside className="sidebar no-print">
//         <h2>⚡ NOX CRM</h2>
//         <div
//           className={`nav-item ${tab === "dashboard" ? "active" : ""}`}
//           onClick={() => setTab("dashboard")}
//         >
//           <LayoutDashboard size={20} /> Dashboard
//         </div>
//         <div
//           className={`nav-item ${tab === "clients" ? "active" : ""}`}
//           onClick={() => setTab("clients")}
//         >
//           <Users size={20} /> Clientes / Cadastro
//         </div>
//         <div
//           className={`nav-item ${tab === "orders" ? "active" : ""}`}
//           onClick={() => setTab("orders")}
//         >
//           <FileText size={20} /> Ordens de Serviço
//         </div>
//         <div
//           className={`nav-item ${tab === "reports" ? "active" : ""}`}
//           onClick={() => setTab("reports")}
//         >
//           <BarChart size={20} /> Relatórios
//         </div>
//       </aside>

//       {/* ÁREA PRINCIPAL */}
//       <main className="main-content">
//         {/* TOPBAR */}
//         <header
//           className="no-print"
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             paddingBottom: "20px",
//             marginBottom: "24px",
//             borderBottom: "1px solid #334155",
//           }}
//         >
//           <div>
//             <span
//               style={{
//                 fontSize: "1.2rem",
//                 fontWeight: "600",
//                 color: "#f8fafc",
//               }}
//             >
//               Olá,{" "}
//               <strong style={{ color: "#38bdf8" }}>
//                 {currentUser?.name || "Usuário"}
//               </strong>
//               ! 👋
//             </span>
//           </div>

//           <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//             <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
//               {currentUser?.email}
//             </span>
//             <button
//               className="btn btn-secondary"
//               onClick={handleLogout}
//               style={{
//                 padding: "6px 12px",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "6px",
//               }}
//             >
//               <LogOut size={16} /> Sair
//             </button>
//           </div>
//         </header>

//         {/* ================= DASHBOARD ================= */}
//         {tab === "dashboard" && (
//           <div>
//             <h1 className="header-title">Visão Geral & Métricas</h1>

//             <div className="cards-grid">
//               <div className="card">
//                 <div className="card-title">
//                   <Users size={16} /> Total de Clientes
//                 </div>
//                 <div className="card-value" style={{ color: "#38bdf8" }}>
//                   {totalClientes}
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-title">
//                   <Clock size={16} /> OS em Aberto
//                 </div>
//                 <div className="card-value" style={{ color: "#f59e0b" }}>
//                   {pendentes + emAndamento}
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-title">
//                   <Wallet size={16} /> Contas a Receber
//                 </div>
//                 <div className="card-value" style={{ color: "#f59e0b" }}>
//                   {formatBRL(contasAReceber)}
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="card-title">
//                   <DollarSign size={16} /> Receita Recebida
//                 </div>
//                 <div className="card-value" style={{ color: "#10b981" }}>
//                   {formatBRL(totalFaturado)}
//                 </div>
//               </div>
//             </div>

//             {/* GRÁFICOS DO DASHBOARD */}
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//                 gap: "20px",
//                 marginBottom: "32px",
//               }}
//             >
//               <div className="card">
//                 <h3
//                   style={{
//                     marginBottom: "16px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   <BarChart3 size={20} color="#38bdf8" /> Volume de OS (Status)
//                 </h3>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "flex-end",
//                     justifyContent: "space-around",
//                     height: "180px",
//                     paddingTop: "20px",
//                     borderBottom: "1px solid #334155",
//                   }}
//                 >
//                   <div style={{ textAlign: "center", width: "30%" }}>
//                     <div
//                       style={{
//                         background: "#f59e0b",
//                         height: `${Math.max((pendentes / totalOS) * 130, 8)}px`,
//                         borderRadius: "4px 4px 0 0",
//                         transition: "height 0.5s",
//                       }}
//                     ></div>
//                     <span
//                       style={{
//                         fontSize: "0.8rem",
//                         marginTop: "8px",
//                         display: "block",
//                       }}
//                     >
//                       Pend ({pendentes})
//                     </span>
//                   </div>
//                   <div style={{ textAlign: "center", width: "30%" }}>
//                     <div
//                       style={{
//                         background: "#0284c7",
//                         height: `${Math.max((emAndamento / totalOS) * 130, 8)}px`,
//                         borderRadius: "4px 4px 0 0",
//                         transition: "height 0.5s",
//                       }}
//                     ></div>
//                     <span
//                       style={{
//                         fontSize: "0.8rem",
//                         marginTop: "8px",
//                         display: "block",
//                       }}
//                     >
//                       Andam ({emAndamento})
//                     </span>
//                   </div>
//                   <div style={{ textAlign: "center", width: "30%" }}>
//                     <div
//                       style={{
//                         background: "#10b981",
//                         height: `${Math.max((concluidas / totalOS) * 130, 8)}px`,
//                         borderRadius: "4px 4px 0 0",
//                         transition: "height 0.5s",
//                       }}
//                     ></div>
//                     <span
//                       style={{
//                         fontSize: "0.8rem",
//                         marginTop: "8px",
//                         display: "block",
//                       }}
//                     >
//                       Concl ({concluidas})
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="card">
//                 <h3
//                   style={{
//                     marginBottom: "16px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   <PieIcon size={20} color="#38bdf8" /> Proporção Status (Pizza)
//                 </h3>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-around",
//                     height: "180px",
//                   }}
//                 >
//                   <svg
//                     width="130"
//                     height="130"
//                     viewBox="0 0 32 32"
//                     style={{
//                       borderRadius: "50%",
//                       transform: "rotate(-90deg)",
//                       background: "#0f172a",
//                     }}
//                   >
//                     <circle
//                       r="16"
//                       cx="16"
//                       cy="16"
//                       fill="transparent"
//                       stroke="#f59e0b"
//                       strokeWidth="32"
//                       strokeDasharray={`${pPendente} 100`}
//                     />
//                     <circle
//                       r="16"
//                       cx="16"
//                       cy="16"
//                       fill="transparent"
//                       stroke="#0284c7"
//                       strokeWidth="32"
//                       strokeDasharray={`${pAndamento} 100`}
//                       strokeDashoffset={`-${pPendente}`}
//                     />
//                     <circle
//                       r="16"
//                       cx="16"
//                       cy="16"
//                       fill="transparent"
//                       stroke="#10b981"
//                       strokeWidth="32"
//                       strokeDasharray={`${pConcluido} 100`}
//                       strokeDashoffset={`-${pPendente + pAndamento}`}
//                     />
//                   </svg>

//                   <div
//                     style={{
//                       fontSize: "0.85rem",
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "8px",
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "6px",
//                       }}
//                     >
//                       <span
//                         style={{
//                           width: "12px",
//                           height: "12px",
//                           background: "#f59e0b",
//                           borderRadius: "2px",
//                         }}
//                       ></span>{" "}
//                       Pendentes: {Math.round(pPendente)}%
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "6px",
//                       }}
//                     >
//                       <span
//                         style={{
//                           width: "12px",
//                           height: "12px",
//                           background: "#0284c7",
//                           borderRadius: "2px",
//                         }}
//                       ></span>{" "}
//                       Andamento: {Math.round(pAndamento)}%
//                     </div>
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "6px",
//                       }}
//                     >
//                       <span
//                         style={{
//                           width: "12px",
//                           height: "12px",
//                           background: "#10b981",
//                           borderRadius: "2px",
//                         }}
//                       ></span>{" "}
//                       Concluídas: {Math.round(pConcluido)}%
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ARTIGOS E GUIAS */}
//             <h2
//               style={{
//                 marginBottom: "16px",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}
//             >
//               <Newspaper size={20} color="#38bdf8" /> Artigos, Dicas & Notícias
//               de CRM
//             </h2>
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//                 gap: "16px",
//               }}
//             >
//               {ARTICLES_DATA.map((art) => (
//                 <div
//                   key={art.id}
//                   className="card"
//                   style={{
//                     padding: "0",
//                     overflow: "hidden",
//                     display: "flex",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <img
//                     src={art.image}
//                     alt={art.title}
//                     style={{
//                       width: "100%",
//                       height: "140px",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <div
//                     style={{
//                       padding: "16px",
//                       flex: 1,
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "space-between",
//                     }}
//                   >
//                     <div>
//                       <span
//                         style={{
//                           fontSize: "0.75rem",
//                           background: "#0284c7",
//                           padding: "2px 8px",
//                           borderRadius: "4px",
//                           color: "#fff",
//                         }}
//                       >
//                         {art.category}
//                       </span>
//                       <h4 style={{ margin: "8px 0", fontSize: "1rem" }}>
//                         {art.title}
//                       </h4>
//                       <p
//                         style={{
//                           fontSize: "0.85rem",
//                           color: "#94a3b8",
//                           marginBottom: "12px",
//                         }}
//                       >
//                         {art.desc}
//                       </p>
//                     </div>
//                     <button
//                       className="btn btn-secondary"
//                       style={{ width: "100%", marginTop: "auto" }}
//                       onClick={() => navigate(`/artigo/${art.id}`)}
//                     >
//                       Ler mais
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ================= CLIENTES / CADASTRO ================= */}
//         {tab === "clients" && (
//           <div>
//             <h1 className="header-title">Cadastro & Gestão de Clientes</h1>

//             <form
//               className="card"
//               style={{ marginBottom: "24px" }}
//               onSubmit={handleSaveClient}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   marginBottom: "16px",
//                 }}
//               >
//                 <h3>
//                   {isEditingClient
//                     ? "✏️ Editar Cliente"
//                     : "👤 Novo Cadastro de Cliente"}
//                 </h3>
//                 {isEditingClient && (
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     onClick={() => {
//                       setIsEditingClient(false);
//                       setClientForm({
//                         id: null,
//                         firstName: "",
//                         lastName: "",
//                         phone: "",
//                         address: "",
//                         document: "",
//                         email: "",
//                       });
//                     }}
//                   >
//                     <X size={16} /> Cancelar
//                   </button>
//                 )}
//               </div>

//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//                   gap: "12px",
//                 }}
//               >
//                 <div className="form-group">
//                   <label>Nome *</label>
//                   <input
//                     type="text"
//                     value={clientForm.firstName}
//                     onChange={(e) =>
//                       setClientForm({
//                         ...clientForm,
//                         firstName: e.target.value,
//                       })
//                     }
//                     required
//                     placeholder="João"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Sobrenome</label>
//                   <input
//                     type="text"
//                     value={clientForm.lastName}
//                     onChange={(e) =>
//                       setClientForm({ ...clientForm, lastName: e.target.value })
//                     }
//                     placeholder="Silva"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Telefone</label>
//                   <input
//                     type="text"
//                     value={clientForm.phone}
//                     onChange={(e) =>
//                       setClientForm({ ...clientForm, phone: e.target.value })
//                     }
//                     placeholder="(11) 99999-9999"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>E-mail</label>
//                   <input
//                     type="email"
//                     value={clientForm.email}
//                     onChange={(e) =>
//                       setClientForm({ ...clientForm, email: e.target.value })
//                     }
//                     placeholder="joao@email.com"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Documento (CPF/CNPJ)</label>
//                   <input
//                     type="text"
//                     value={clientForm.document}
//                     onChange={(e) =>
//                       setClientForm({ ...clientForm, document: e.target.value })
//                     }
//                     placeholder="000.000.000-00"
//                   />
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="btn"
//                 style={{ marginTop: "16px" }}
//               >
//                 <Save size={16} />{" "}
//                 {isEditingClient ? "Atualizar Cliente" : "Cadastrar Cliente"}
//               </button>
//             </form>

//             <div className="table-container">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Nome</th>
//                     <th>Telefone</th>
//                     <th>Email</th>
//                     <th>Documento</th>
//                     <th style={{ textAlign: "center" }}>Ações</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {clients.map((c) => (
//                     <tr key={c.id}>
//                       <td>#{c.id}</td>
//                       <td>
//                         <strong>{c.name}</strong>
//                       </td>
//                       <td>{c.phone || "-"}</td>
//                       <td>{c.email || "-"}</td>
//                       <td>{c.document || "-"}</td>
//                       <td style={{ textAlign: "center" }}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "center",
//                             gap: "6px",
//                           }}
//                         >
//                           <button
//                             className="btn btn-secondary"
//                             style={{ padding: "6px 10px" }}
//                             onClick={() => handleEditClientClick(c)}
//                           >
//                             <Edit2 size={14} />
//                           </button>
//                           <button
//                             className="btn btn-secondary"
//                             style={{ padding: "6px 10px", color: "#ef4444" }}
//                             onClick={() => handleDeleteClient(c.id)}
//                           >
//                             <Trash2 size={14} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {/* ================= ORDENS DE SERVIÇO ================= */}
//         {tab === "orders" && (
//           <div>
//             <div
//               className="no-print"
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 marginBottom: "24px",
//               }}
//             >
//               <h1 className="header-title" style={{ margin: 0 }}>
//                 Ordens de Serviço
//               </h1>
//               <button
//                 className="btn btn-secondary"
//                 onClick={() => window.print()}
//               >
//                 <Printer size={16} /> Imprimir Selecionadas (
//                 {selectedOSForPrint.length === 0
//                   ? "Todas"
//                   : selectedOSForPrint.length}
//                 )
//               </button>
//             </div>

//             <form
//               className="card no-print"
//               style={{ marginBottom: "24px" }}
//               onSubmit={handleSaveOS}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   marginBottom: "16px",
//                 }}
//               >
//                 <h3>
//                   {isEditingOS
//                     ? "✏️ Editar Ordem de Serviço"
//                     : "📋 Nova Ordem de Serviço"}
//                 </h3>
//                 {isEditingOS && (
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     onClick={() => {
//                       setIsEditingOS(false);
//                       setOsForm({
//                         id: null,
//                         client_id: "",
//                         title: "",
//                         description: "",
//                         value: "",
//                         status: "Pendente",
//                       });
//                     }}
//                   >
//                     <X size={16} /> Cancelar
//                   </button>
//                 )}
//               </div>

//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//                   gap: "12px",
//                 }}
//               >
//                 <div className="form-group">
//                   <label>Cliente *</label>
//                   <select
//                     value={osForm.client_id}
//                     onChange={(e) =>
//                       setOsForm({ ...osForm, client_id: e.target.value })
//                     }
//                     required
//                   >
//                     <option value="">Selecione um cliente...</option>
//                     {clients.map((c) => (
//                       <option key={c.id} value={c.id}>
//                         {c.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label>Título do Serviço *</label>
//                   <input
//                     type="text"
//                     value={osForm.title}
//                     onChange={(e) =>
//                       setOsForm({ ...osForm, title: e.target.value })
//                     }
//                     required
//                     placeholder="Ex: Manutenção Preventiva"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Valor (R$)</label>
//                   <input
//                     type="number"
//                     step="0.01"
//                     value={osForm.value}
//                     onChange={(e) =>
//                       setOsForm({ ...osForm, value: e.target.value })
//                     }
//                     placeholder="0.00"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Status</label>
//                   <select
//                     value={osForm.status}
//                     onChange={(e) =>
//                       setOsForm({ ...osForm, status: e.target.value })
//                     }
//                   >
//                     <option value="Pendente">Pendente</option>
//                     <option value="Em Andamento">Em Andamento</option>
//                     <option value="Concluído">Concluído</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="form-group" style={{ marginTop: "12px" }}>
//                 <label>Descrição do Serviço / Observações</label>
//                 <textarea
//                   rows="3"
//                   value={osForm.description}
//                   onChange={(e) =>
//                     setOsForm({ ...osForm, description: e.target.value })
//                   }
//                   placeholder="Detalhamento técnico do serviço a ser executado..."
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     background: "#0f172a",
//                     border: "1px solid #334155",
//                     color: "#fff",
//                     borderRadius: "6px",
//                     resize: "vertical",
//                   }}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="btn"
//                 style={{ marginTop: "16px" }}
//               >
//                 <Save size={16} /> {isEditingOS ? "Atualizar OS" : "Salvar OS"}
//               </button>
//             </form>

//             <div className="table-container no-print">
//               <table>
//                 <thead>
//                   <tr>
//                     <th style={{ width: "40px", textAlign: "center" }}>
//                       <input
//                         type="checkbox"
//                         checked={
//                           selectedOSForPrint.length === orders.length &&
//                           orders.length > 0
//                         }
//                         onChange={toggleSelectAllOS}
//                       />
//                     </th>
//                     <th>OS #</th>
//                     <th>Cliente</th>
//                     <th>Serviço</th>
//                     <th>Descrição</th>
//                     <th>Valor</th>
//                     <th>Status</th>
//                     <th style={{ textAlign: "center" }}>Ações</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {orders.map((o) => (
//                     <tr key={o.id}>
//                       <td style={{ textAlign: "center" }}>
//                         <input
//                           type="checkbox"
//                           checked={selectedOSForPrint.includes(o.id)}
//                           onChange={() => toggleSelectOSForPrint(o.id)}
//                         />
//                       </td>
//                       <td>#{o.id}</td>
//                       <td>{o.client_name}</td>
//                       <td>
//                         <strong>{o.title}</strong>
//                       </td>
//                       <td
//                         style={{
//                           color: "#94a3b8",
//                           fontSize: "0.85rem",
//                           maxWidth: "200px",
//                         }}
//                       >
//                         {o.description || "-"}
//                       </td>
//                       <td>{formatBRL(o.value)}</td>
//                       <td>
//                         <span className="status-badge">{o.status}</span>
//                       </td>
//                       <td style={{ textAlign: "center" }}>
//                         <div
//                           style={{
//                             display: "flex",
//                             justifyContent: "center",
//                             gap: "6px",
//                           }}
//                         >
//                           <button
//                             className="btn btn-secondary"
//                             style={{ padding: "6px 10px" }}
//                             onClick={() => handleEditOSClick(o)}
//                           >
//                             <Edit2 size={14} />
//                           </button>
//                           <button
//                             className="btn btn-secondary"
//                             style={{ padding: "6px 10px", color: "#ef4444" }}
//                             onClick={() => handleDeleteOS(o.id)}
//                           >
//                             <Trash2 size={14} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* LAYOUT DE IMPRESSÃO */}
//             <div className="print-only" style={{ display: "none" }}>
//               <style>{`
//                 @media print {
//                   .no-print { display: none !important; }
//                   .print-only { display: block !important; }
//                   body { background: #fff !important; color: #000 !important; }
//                 }
//               `}</style>
//               {ordersToPrint.map((o) => (
//                 <div
//                   key={o.id}
//                   style={{
//                     pageBreakAfter: "always",
//                     padding: "40px",
//                     border: "2px solid #000",
//                     marginBottom: "40px",
//                     fontFamily: "Arial, sans-serif",
//                     color: "#000",
//                     background: "#fff",
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       borderBottom: "2px solid #000",
//                       paddingBottom: "16px",
//                       marginBottom: "24px",
//                     }}
//                   >
//                     <div>
//                       <h2 style={{ margin: 0, fontSize: "1.8rem" }}>
//                         ⚡ NOX CRM
//                       </h2>
//                       <p style={{ margin: "4px 0 0 0", fontSize: "0.9rem" }}>
//                         Relatório de Ordem de Serviço
//                       </p>
//                     </div>
//                     <div style={{ textAlign: "right" }}>
//                       <h3 style={{ margin: 0, fontSize: "1.4rem" }}>
//                         OS #{o.id}
//                       </h3>
//                       <p style={{ margin: "4px 0 0 0", fontSize: "0.9rem" }}>
//                         Status: <strong>{o.status}</strong>
//                       </p>
//                     </div>
//                   </div>

//                   <div style={{ marginBottom: "24px" }}>
//                     <h4
//                       style={{
//                         borderBottom: "1px solid #ccc",
//                         paddingBottom: "6px",
//                         marginBottom: "12px",
//                       }}
//                     >
//                       Dados do Cliente
//                     </h4>
//                     <p style={{ margin: "6px 0", fontSize: "1.05rem" }}>
//                       <strong>Nome:</strong> {o.client_name}
//                     </p>
//                   </div>

//                   <div style={{ marginBottom: "24px" }}>
//                     <h4
//                       style={{
//                         borderBottom: "1px solid #ccc",
//                         paddingBottom: "6px",
//                         marginBottom: "12px",
//                       }}
//                     >
//                       Informações do Serviço
//                     </h4>
//                     <p style={{ margin: "6px 0", fontSize: "1.05rem" }}>
//                       <strong>Título:</strong> {o.title}
//                     </p>
//                     <p style={{ margin: "6px 0", fontSize: "1.05rem" }}>
//                       <strong>Valor:</strong> {formatBRL(o.value)}
//                     </p>
//                   </div>

//                   <div style={{ marginBottom: "40px" }}>
//                     <h4
//                       style={{
//                         borderBottom: "1px solid #ccc",
//                         paddingBottom: "6px",
//                         marginBottom: "12px",
//                       }}
//                     >
//                       Descrição Técnica / Observações
//                     </h4>
//                     <div
//                       style={{
//                         border: "1px solid #ccc",
//                         padding: "16px",
//                         borderRadius: "6px",
//                         minHeight: "120px",
//                         fontSize: "1.05rem",
//                         lineHeight: "1.6",
//                         background: "#f9f9f9",
//                       }}
//                     >
//                       {o.description || "Nenhuma observação informada."}
//                     </div>
//                   </div>

//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       marginTop: "80px",
//                     }}
//                   >
//                     <div
//                       style={{
//                         textAlign: "center",
//                         width: "45%",
//                         borderTop: "1px solid #000",
//                         paddingTop: "8px",
//                       }}
//                     >
//                       Assinatura do Técnico
//                     </div>
//                     <div
//                       style={{
//                         textAlign: "center",
//                         width: "45%",
//                         borderTop: "1px solid #000",
//                         paddingTop: "8px",
//                       }}
//                     >
//                       Assinatura do Cliente
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ================= RELATÓRIOS ================= */}
//         {tab === "reports" && (
//           <div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 marginBottom: "24px",
//               }}
//             >
//               <h1 className="header-title" style={{ margin: 0 }}>
//                 Relatórios Financeiros & Operacionais
//               </h1>
//               <button
//                 className="btn btn-secondary no-print"
//                 onClick={() => window.print()}
//               >
//                 <Printer size={16} /> Imprimir Relatório Completo
//               </button>
//             </div>

//             {/* CARROSSEL INFORMATIVO */}
//             <div
//               className="card no-print"
//               style={{
//                 marginBottom: "24px",
//                 background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
//                 borderLeft: `4px solid ${REPORT_CAROUSEL_ITEMS[carouselIndex].color}`,
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <span
//                   style={{
//                     fontSize: "0.75rem",
//                     background: REPORT_CAROUSEL_ITEMS[carouselIndex].color,
//                     padding: "2px 8px",
//                     borderRadius: "4px",
//                     color: "#000",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {REPORT_CAROUSEL_ITEMS[carouselIndex].tag} (
//                   {carouselIndex + 1}/{REPORT_CAROUSEL_ITEMS.length})
//                 </span>

//                 <div style={{ display: "flex", gap: "8px" }}>
//                   <button
//                     className="btn btn-secondary"
//                     style={{ padding: "4px 8px" }}
//                     onClick={() =>
//                       setCarouselIndex(
//                         (carouselIndex - 1 + REPORT_CAROUSEL_ITEMS.length) %
//                           REPORT_CAROUSEL_ITEMS.length,
//                       )
//                     }
//                   >
//                     <ChevronLeft size={16} />
//                   </button>
//                   <button
//                     className="btn btn-secondary"
//                     style={{ padding: "4px 8px" }}
//                     onClick={() =>
//                       setCarouselIndex(
//                         (carouselIndex + 1) % REPORT_CAROUSEL_ITEMS.length,
//                       )
//                     }
//                   >
//                     <ChevronRight size={16} />
//                   </button>
//                 </div>
//               </div>

//               <h3
//                 style={{
//                   margin: "12px 0 6px 0",
//                   color: REPORT_CAROUSEL_ITEMS[carouselIndex].color,
//                 }}
//               >
//                 {REPORT_CAROUSEL_ITEMS[carouselIndex].title}
//               </h3>
//               <p
//                 style={{
//                   color: "#cbd5e1",
//                   fontSize: "0.95rem",
//                   lineHeight: "1.5",
//                 }}
//               >
//                 {REPORT_CAROUSEL_ITEMS[carouselIndex].description}
//               </p>
//             </div>

//             {/* CARDS DE MÉTRICAS */}
//             <div className="cards-grid" style={{ marginBottom: "24px" }}>
//               <div className="card">
//                 <h3>👥 Base de Clientes</h3>
//                 <p
//                   style={{
//                     fontSize: "1.8rem",
//                     color: "#38bdf8",
//                     margin: "8px 0",
//                   }}
//                 >
//                   {totalClientes}
//                 </p>
//                 <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
//                   Total de clientes cadastrados
//                 </span>
//               </div>

//               <div className="card">
//                 <h3>📊 Faturamento Realizado</h3>
//                 <p
//                   style={{
//                     fontSize: "1.8rem",
//                     color: "#10b981",
//                     margin: "8px 0",
//                   }}
//                 >
//                   {formatBRL(totalFaturado)}
//                 </p>
//                 <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
//                   {concluidas} Ordens Concluídas
//                 </span>
//               </div>

//               <div className="card">
//                 <h3>⏳ Em Haver (Pendentes)</h3>
//                 <p
//                   style={{
//                     fontSize: "1.8rem",
//                     color: "#f59e0b",
//                     margin: "8px 0",
//                   }}
//                 >
//                   {formatBRL(contasAReceber)}
//                 </p>
//                 <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
//                   {pendentes + emAndamento} Ordens em Aberto
//                 </span>
//               </div>

//               <div className="card">
//                 <h3>📈 Ticket Médio / OS</h3>
//                 <p
//                   style={{
//                     fontSize: "1.8rem",
//                     color: "#38bdf8",
//                     margin: "8px 0",
//                   }}
//                 >
//                   {formatBRL(ticketMedio)}
//                 </p>
//                 <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
//                   Média por serviço concluído
//                 </span>
//               </div>
//             </div>

//             {/* TABELA DE RESUMO */}
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//                 gap: "20px",
//               }}
//             >
//               <div className="card">
//                 <h3
//                   style={{
//                     marginBottom: "16px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     color: "#38bdf8",
//                   }}
//                 >
//                   <BarChart size={18} /> Resumo Operacional por Status
//                 </h3>
//                 <div className="table-container" style={{ margin: 0 }}>
//                   <table style={{ fontSize: "0.85rem" }}>
//                     <thead>
//                       <tr>
//                         <th>Status</th>
//                         <th>Qtd. OS</th>
//                         <th>Valor Acumulado</th>
//                         <th>% Total</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td>
//                           <span
//                             style={{ color: "#f59e0b", fontWeight: "bold" }}
//                           >
//                             Pendente
//                           </span>
//                         </td>
//                         <td>{pendentes}</td>
//                         <td>{formatBRL(valPendentes)}</td>
//                         <td>{Math.round(pPendente)}%</td>
//                       </tr>
//                       <tr>
//                         <td>
//                           <span
//                             style={{ color: "#0284c7", fontWeight: "bold" }}
//                           >
//                             Em Andamento
//                           </span>
//                         </td>
//                         <td>{emAndamento}</td>
//                         <td>{formatBRL(valAndamento)}</td>
//                         <td>{Math.round(pAndamento)}%</td>
//                       </tr>
//                       <tr>
//                         <td>
//                           <span
//                             style={{ color: "#10b981", fontWeight: "bold" }}
//                           >
//                             Concluído
//                           </span>
//                         </td>
//                         <td>{concluidas}</td>
//                         <td>{formatBRL(totalFaturado)}</td>
//                         <td>{Math.round(pConcluido)}%</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               <div
//                 className="card"
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <div>
//                   <h3
//                     style={{
//                       marginBottom: "16px",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       color: "#38bdf8",
//                     }}
//                   >
//                     <Lightbulb size={18} /> Recomendações do Sistema
//                   </h3>
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: "12px",
//                       fontSize: "0.88rem",
//                     }}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "flex-start",
//                         gap: "10px",
//                         background: "#0f172a",
//                         padding: "10px",
//                         borderRadius: "6px",
//                         borderLeft: "3px solid #f59e0b",
//                       }}
//                     >
//                       <AlertTriangle
//                         size={18}
//                         color="#f59e0b"
//                         style={{ minWidth: "18px" }}
//                       />
//                       <span>
//                         Existe um total de{" "}
//                         <strong>{formatBRL(contasAReceber)}</strong> pendente de
//                         conclusão/recebimento. Priorize a finalização dessas
//                         ordens.
//                       </span>
//                     </div>

//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "flex-start",
//                         gap: "10px",
//                         background: "#0f172a",
//                         padding: "10px",
//                         borderRadius: "6px",
//                         borderLeft: "3px solid #10b981",
//                       }}
//                     >
//                       <CheckCircle2
//                         size={18}
//                         color="#10b981"
//                         style={{ minWidth: "18px" }}
//                       />
//                       <span>
//                         O seu Ticket Médio atual é de{" "}
//                         <strong>{formatBRL(ticketMedio)}</strong> por serviço
//                         entregue.
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div
//                   style={{
//                     marginTop: "16px",
//                     padding: "10px",
//                     background: "#1e293b",
//                     borderRadius: "6px",
//                     fontSize: "0.8rem",
//                     color: "#94a3b8",
//                   }}
//                 >
//                   ℹ️ Relatório atualizado em tempo real com base no banco de
//                   dados ativo.
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<MainApp />} />
//       <Route path="/artigo/:id" element={<ArticleDetail />} />
//     </Routes>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  Users,
  FileText,
  LayoutDashboard,
  Plus,
  Printer,
  Edit2,
  Trash2,
  DollarSign,
  Clock,
  Newspaper,
  X,
  Save,
  ArrowLeft,
  PieChart as PieIcon,
  BarChart3,
  Wallet,
  BarChart,
  LogOut,
  UserCheck,
  UserX,
  Filter,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Info,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// ==========================================
// DADOS DO CARROSSEL DE RELATÓRIOS (9 DICAS)
// ==========================================
const REPORT_CAROUSEL_ITEMS = [
  {
    id: 1,
    title: "💡 Dica de Gestão: Redução de Inadimplência",
    description:
      "Clientes com OS em aberto há mais de 15 dias devem receber lembretes automáticos. Mantenha o acompanhamento ativo para otimizar o fluxo de caixa.",
    tag: "Financeiro",
    color: "#38bdf8",
  },
  {
    id: 2,
    title: "📈 Análise de Margem e Ticket Médio",
    description:
      "Monitore o seu Ticket Médio por OS. Elevar o valor médio dos serviços prestados traz mais margem líquida sem necessidade de aumentar a cartela de clientes.",
    tag: "Estratégia",
    color: "#10b981",
  },
  {
    id: 3,
    title: "🔄 Retenção e Reativação de Clientes Inativos",
    description:
      "Clientes inativos representam oportunidades de novas Ordens de Serviço. Realize campanhas pontuais de manutenção preventiva para reativá-los.",
    tag: "CRM",
    color: "#f59e0b",
  },
  {
    id: 4,
    title: "⏱️ Gestão do Tempo e SLA de Atendimento",
    description:
      "Defina prazos médios de entrega para cada tipo de serviço. Reduzir o tempo de execução aumenta a rotação do pátio/oficina e melhora a satisfação do cliente.",
    tag: "Operacional",
    color: "#a855f7",
  },
  {
    id: 5,
    title: "🎯 Pós-Venda e Pesquisa de Satisfação",
    description:
      "Envie uma mensagem 3 dias após a conclusão da OS perguntando sobre a qualidade do serviço. Isso fortalece o relacionamento e gera avaliações positivas.",
    tag: "Fidelização",
    color: "#ec4899",
  },
  {
    id: 6,
    title: "📦 Controle Estrito de Insumos e Peças",
    description:
      "Vincule peças e materiais diretamente à OS correspondente para evitar perdas não contabilizadas e garantir a margem de lucro exata de cada projeto.",
    tag: "Custos",
    color: "#f43f5e",
  },
  {
    id: 7,
    title: "🤝 Upsell no Momento da Avaliação",
    description:
      "Ao diagnosticar o problema principal do cliente, identifique serviços preventivos complementares. Apresentar opções no orçamento aumenta o valor médio da OS.",
    tag: "Vendas",
    color: "#8b5cf6",
  },
  {
    id: 8,
    title: "📊 Projeção de Receita Recorrente",
    description:
      "Incentive contratos de manutenção periódica para clientes corporativos. A receita previsível mensal traz estabilidade financeira no longo prazo.",
    tag: "Planejamento",
    color: "#06b6d4",
  },
  {
    id: 9,
    title: "📢 Marketing Direto por Histórico",
    description:
      "Consulte o histórico de clientes que não realizam serviços há mais de 6 meses e ofereça uma verificação gratuita ou desconto de retorno.",
    tag: "Marketing",
    color: "#84cc16",
  },
];

// ==========================================
// BASE DE DADOS DOS ARTIGOS (15 ARTIGOS EXPANDIDOS)
// ==========================================
export const ARTICLES_DATA = [
  {
    id: "fluxo-de-caixa",
    title: "Como Otimizar o Fluxo de Caixa na sua Empresa",
    category: "Finanças",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1000&auto=format&fit=crop&q=80",
    desc: "Estratégias práticas e avançadas para manter a saúde financeira do seu negócio previsível e lucrativa.",
    content: `
      <h2>1. O que é o Fluxo de Caixa e por que ele falha?</h2>
      <p>O fluxo de caixa é o registro minucioso das entradas e saídas de capital de uma empresa em um período de tempo. Muitos gestores erram ao confundir faturamento com lucro disponível: ver dinheiro entrando no caixa não significa que a empresa está no lucro se os prazos de recebimento forem incompatíveis com os prazos de pagamento de fornecedores.</p>
      
      <h2>2. Separando Contas Pessoais das Empresariais (Pró-Labore)</h2>
      <p>Misturar finanças pessoais com as da empresa é uma das principais causas de falência em pequenas empresas. O gestor deve definir um valor fixo de pró-labore e mantê-lo como um custo fixo no orçamento empresarial, sem retiradas adicionais desordenadas.</p>

      <h2>3. Previsibilidade com Conciliação Diária</h2>
      <p>A conciliação bancária deve ser feita diariamente. Registrar pagamentos pendentes e faturamentos a receber permite identificar gargalos financeiros com antecedência e planejar investimentos sem comprometer a reserva de emergência.</p>
    `,
  },
  {
    id: "fidelizar-clientes",
    title: "5 Técnicas de CRM para Fidelizar Clientes em 2026",
    category: "Gestão & CRM",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&auto=format&fit=crop&q=80",
    desc: "Aprenda a estruturar o histórico dos seus atendimentos e vender mais para a sua própria base.",
    content: `
      <h2>1. Centralização de Histórico de Interações</h2>
      <p>Guardar as preferências e todo o histórico de Ordens de Serviço executadas para cada cliente é indispensável. Quando um cliente retorna e a equipe já sabe o exato serviço realizado anteriormente, a confiança é estabelecida de forma imediata.</p>
      
      <h2>2. Lembretes Automáticos de Revisão e Manutenção</h2>
      <p>Aproveite os dados do CRM para disparar lembretes periódicos de manutenção preventiva. Clientes apreciam empresas proativas que cuidam do seu patrimônio antes que um problema maior aconteça.</p>

      <h2>3. Pesquisas Rápidas pós-Atendimento (NPS)</h2>
      <p>Mandar uma mensagem simples perguntando a satisfação do cliente traz dados valiosos sobre a qualidade do seu time de atendimento e permite corrigir eventuais problemas imediatamente.</p>
    `,
  },
  {
    id: "automatizar-os",
    title: "A Importância de Automatizar Ordens de Serviço",
    category: "Produtividade",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
    desc: "Reduza erros operacionais, elimine o papel e garanta o cumprimento rigoroso dos prazos.",
    content: `
      <h2>1. O Fim dos Blocos de Papel e Rasuras</h2>
      <p>Ordens de serviço em papel geram perda de informações, letras ilegíveis e retrabalho. A digitalização garante registros padronizados, acessíveis a qualquer membro da equipe em tempo real.</p>
      
      <h2>2. Acompanhamento em Tempo Real e Transparência</h2>
      <p>Saber com precisão qual OS está Pendente, Em Andamento ou Concluída melhora o planejamento operacional e otimiza o tempo de resposta ao cliente final quando ele solicita uma atualização.</p>
    `,
  },
  {
    id: "precificacao-servicos",
    title: "Precificação Correta: Como Calcular a Margem Real de Serviços",
    category: "Finanças",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1000&auto=format&fit=crop&q=80",
    desc: "Evite prejuízos velados calculando hora de trabalho, insumos, impostos e custos fixos imprevistos.",
    content: `
      <h2>1. Diferença entre Custos Diretos e Indiretos</h2>
      <p>O custo direto engloba as peças e insumos consumidos na execução do serviço. Os custos indiretos são o aluguel da sede, energia elétrica, sistemas e folha de pagamento que precisam ser rateados no valor final do serviço.</p>
      
      <h2>2. Calculando o Valor da Hora de Trabalho</h2>
      <p>Determine a capacidade produtiva máxima em horas da sua equipe e divida os custos fixos totais por esse volume para entender o custo base por hora antes de aplicar a margem de lucro.</p>
    `,
  },
  {
    id: "pos-venda-eficiente",
    title: "Pós-Venda Estratégico: O Segredo do Recorrente",
    category: "Vendas",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&auto=format&fit=crop&q=80",
    desc: "A venda não termina na entrega. Descubra como transformar clientes pontuais em receita previsível.",
    content: `
      <h2>1. Contato de Acompanhamento (Follow-up)</h2>
      <p>Entre em contato com o cliente cerca de 48 horas após a entrega para assegurar que tudo funciona perfeitamente. Esse cuidado demonstra profissionalismo e fortalece a retenção.</p>
      
      <h2>2. Pesquisas de Satisfação e Depoimentos</h2>
      <p>Aproveite o momento pós-atendimento para solicitar avaliações positivas no Google ou depoimentos que servirão para atrair novos clientes por meio de prova social.</p>
    `,
  },
  {
    id: "gestao-de-tempo",
    title: "Gestão do Tempo e SLA em Oficinas e Prestadores de Serviço",
    category: "Produtividade",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1000&auto=format&fit=crop&q=80",
    desc: "Aumente a rotação de serviços cumprindo prazos com rigor sem perder qualidade técnica.",
    content: `
      <h2>1. Definição de SLA (Acordo de Nível de Serviço)</h2>
      <p>Estabelecer prazos claros para a análise inicial, orçamento e execução evita expectativas irrealistas do cliente e reduz a cobrança constante por updates.</p>
      
      <h2>2. Mapeamento dos Gargalos Operacionais</h2>
      <p>Analise periodicamente quais etapas tomam mais tempo no fluxo de trabalho para padronizar rotinas e otimizar a movimentação física ou digital na empresa.</p>
    `,
  },
  {
    id: "marketing-local",
    title: "Como Atrair Clientes Locais para o seu Negócio de Serviços",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1000&auto=format&fit=crop&q=80",
    desc: "Domine a sua região com estratégias práticas de presença digital e programas de indicação.",
    content: `
      <h2>1. Otimização do Perfil da Empresa no Google</h2>
      <p>Mantenha seu perfil comercial completo com horário de funcionamento, fotos reais da estrutura, endereço correto e avaliações de clientes atualizadas.</p>
      
      <h2>2. Programa de Indicação Premiada</h2>
      <p>Ofereça descontos ou serviços bônus para clientes antigos que indicarem novos contatos que realizarem ordens de serviço com a sua empresa.</p>
    `,
  },
  {
    id: "reducao-de-inadimplencia",
    title: "Como Reduzir a Inadimplência com Cobranças Inteligentes",
    category: "Finanças",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&auto=format&fit=crop&q=80",
    desc: "Mantenha o recebimento de contas em dia sem prejudicar o bom relacionamento com os clientes.",
    content: `
      <h2>1. Comunicação Preventiva Antes do Vencimento</h2>
      <p>Disparar um lembrete cortês por mensagem ou e-mail alguns dias antes do vencimento da cobrança previne o esquecimento e reduz drasticamente o atraso involuntário.</p>
      
      <h2>2. Métodos Modernos de Pagamento</h2>
      <p>Disponibilizar chaves Pix com QR Code e link para pagamento por cartão parcelado facilita a liquidação imediata da fatura na aprovação da OS.</p>
    `,
  },
  {
    id: "atendimento-humanizado",
    title: "Atendimento Humanizado no Setor Técnico",
    category: "Gestão & CRM",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=80",
    desc: "Traduzir termos técnicos complexos para uma linguagem acessível constrói relacionamentos duradouros.",
    content: `
      <h2>1. Linguagem Acessível e Clara</h2>
      <p>Evite excesso de jargões técnicos ao explicar um orçamento. Clientes aprovam orçamentos com mais facilidade quando entendem a necessidade de cada item.</p>
      
      <h2>2. Registro Transparente no Histórico da OS</h2>
      <p>Anote em detalhes todas as observações técnicas na Ordem de Serviço para garantir clareza no atendimento e proteção em caso de dúvidas futuras.</p>
    `,
  },
  {
    id: "tecnica-de-upsell",
    title: "Como Aplicar Upsell e Cross-sell em Ordens de Serviço",
    category: "Vendas",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1000&auto=format&fit=crop&q=80",
    desc: "Aumente o ticket médio da sua empresa oferecendo adicionais e serviços complementares durante a avaliação.",
    content: `
      <h2>1. Entendendo a Diferença entre Upsell e Cross-sell</h2>
      <p>O <strong>Upsell</strong> consiste em oferecer uma versão superior ou mais completa do serviço contratado (ex: trocar uma peça básica por uma de alta durabilidade). O <strong>Cross-sell</strong> é a inclusão de um serviço ou produto complementar que agregue valor ao principal (ex: incluir higienização na manutenção periódica).</p>
      
      <h2>2. O Momento Perfeito para a Abordagem</h2>
      <p>O melhor momento para propor um adicional é durante o diagnóstico inicial da Ordem de Serviço, quando o cliente está focado em resolver o problema por completo e aberto a recomendações de especialistas.</p>

      <h2>3. Criando Combos de Serviços Vantajosos</h2>
      <p>Combine serviços recorrentes em pacotes com pequeno desconto no valor total para incentivar o cliente a aprovar um escopo maior na mesma visita.</p>
    `,
  },
  {
    id: "organizacao-de-estoque",
    title: "Controle de Insumos: Como Não Perder Margem de Lucro",
    category: "Operacional",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80",
    desc: "Vincule o consumo de materiais diretamente a cada Ordem de Serviço executada.",
    content: `
      <h2>1. Baixa de Material Vinculada à OS</h2>
      <p>Cada componente, peça ou insumo utilizado em um atendimento deve ser baixado imediatamente do inventário e atrelado ao registro da OS correspondente.</p>
      
      <h2>2. Inventários Periódicos de Auditoria</h2>
      <p>Realize contagens físicas regulares do estoque para comparar com os saldos registrados no sistema e conter desperdícios e perdas de insumos.</p>
    `,
  },
  {
    id: "metricas-essenciais",
    title: "As 4 Métricas Financeiras que Todo Gestor Deve Acompanhar",
    category: "Finanças",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&auto=format&fit=crop&q=80",
    desc: "Ticket Médio, Faturamento Realizado, Taxa de Retenção e Receita Recorrente sem complicações.",
    content: `
      <h2>1. Ticket Médio por Serviço</h2>
      <p>Indica quanto, em média, cada cliente gasta por atendimento. Aumentar o ticket médio é mais barato do que investir na atração de novos clientes.</p>
      
      <h2>2. Taxa de Clientes Ativos vs. Inativos</h2>
      <p>Mede a proporção da sua base que continua consumindo serviços no período. Manter clientes ativos garante estabilidade no fluxo de caixa.</p>
    `,
  },
  {
    id: "seguranca-juridica-os",
    title: "Como Proteger sua Empresa com Ordens de Serviço Detalhadas",
    category: "Gestão & CRM",
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1000&auto=format&fit=crop&q=80",
    desc: "Aprovação prévia, vistoria de entrada e termos claros evitam desentendimentos jurídicos.",
    content: `
      <h2>1. Vistoria Completa na Entrada</h2>
      <p>Registre detalhadamente as condições de recebimento do item ou equipamento antes de iniciar os trabalhos para evitar alegações indevidas sobre avarias anteriores.</p>
      
      <h2>2. Aprovação Registrada do Orçamento</h2>
      <p>Sempre solicite o aceite formal (físico ou digital) do cliente antes de iniciar qualquer serviço complementar ou alterar os custos negociados.</p>
    `,
  },
  {
    id: "cultura-de-atendimento",
    title: "Como Treinar sua Equipe para Offerecer um Atendimento Nota 10",
    category: "Gestão & CRM",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80",
    desc: "Padronização de processos, empatia e alinhamento do time geram mais indicações espontâneas.",
    content: `
      <h2>1. Checklist Padrão de Atendimento</h2>
      <p>Desenvolva passos claros para a recepção, diagnóstico, envio do orçamento, atualização de prazos e entrega final do trabalho.</p>
      
      <h2>2. Autonomia Orientada para Solução de Problemas</h2>
      <p>Capacite a sua equipe da ponta para resolver imprevistos pontuais rapidamente sem burocracias desnecessárias que frustram o cliente.</p>
    `,
  },
  {
    id: "tecnologia-no-crm",
    title: "O Papel da Tecnologia na Escala de Serviços no Brasil",
    category: "Produtividade",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format&fit=crop&q=80",
    desc: "Como pequenas e médias empresas utilizam sistemas modernos de CRM para crescer com estrutura.",
    content: `
      <h2>1. Centralização e Acesso em Nuvem</h2>
      <p>Gerenciar clientes e Ordens de Serviço centralizados em um sistema permite acompanhar os indicadores de desempenho da sua empresa de qualquer lugar.</p>
      
      <h2>2. Tomada de Decisão com Base em Dados</h2>
      <p>Substitua o 'achismo' por dados precisos de faturamento, volume de pendências e comportamento de consumo da sua carteira de clientes.</p>
    `,
  },
];

// ==========================================
// DETALHE DO ARTIGO
// ==========================================
function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = ARTICLES_DATA.find((a) => a.id === id);

  if (!article) {
    return (
      <div style={{ padding: "40px", color: "#fff" }}>
        <h2>Artigo não encontrado!</h2>
        <button className="btn" onClick={() => navigate("/?tab=dashboard")}>
          <ArrowLeft size={16} /> Voltar ao Dashboard
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "32px 16px",
        color: "#f8fafc",
      }}
    >
      <button
        className="btn btn-secondary"
        onClick={() => navigate("/?tab=dashboard")}
        style={{ marginBottom: "24px" }}
      >
        <ArrowLeft size={16} /> Voltar para o Dashboard
      </button>

      <div>
        <span
          style={{
            fontSize: "0.85rem",
            background: "#0284c7",
            padding: "4px 12px",
            borderRadius: "4px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {article.category}
        </span>
      </div>

      <h1 style={{ fontSize: "2.3rem", margin: "16px 0", lineHeight: "1.2" }}>
        {article.title}
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#94a3b8", marginBottom: "24px" }}>
        {article.desc}
      </p>

      <img
        src={article.image}
        alt={article.title}
        style={{
          width: "100%",
          maxHeight: "420px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "32px",
          border: "1px solid #334155",
        }}
      />

      <div
        style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#cbd5e1" }}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}

// ==========================================
// TELA DE LOGIN
// ==========================================
function LoginScreen({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Preencha todos os campos!");

    const user = {
      name: isRegistering ? name : email.split("@")[0],
      email: email,
    };
    onLogin(user);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f172a",
        color: "#fff",
        padding: "16px",
      }}
    >
      <div
        className="card"
        style={{ maxWidth: "400px", width: "100%", padding: "32px" }}
      >
        <h2
          style={{ textAlign: "center", marginBottom: "8px", color: "#38bdf8" }}
        >
          ⚡ NOX CRM
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "24px",
          }}
        >
          {isRegistering
            ? "Crie sua conta para começar"
            : "Acesse sua conta para continuar"}
        </p>

        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <div className="form-group" style={{ marginBottom: "16px" }}>
              <label>Nome Completo</label>
              <input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group" style={{ marginBottom: "16px" }}>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: "24px" }}>
            <label>Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn"
            style={{ width: "100%", padding: "12px" }}
          >
            {isRegistering ? "Cadastrar e Entrar" : "Entrar no Sistema"}
          </button>
        </form>

        <div
          style={{ marginTop: "20px", textAlign: "center", fontSize: "0.9rem" }}
        >
          <span style={{ color: "#94a3b8" }}>
            {isRegistering ? "Já possui uma conta?" : "Ainda não tem conta?"}
          </span>{" "}
          <button
            style={{
              background: "none",
              border: "none",
              color: "#38bdf8",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Faça Login" : "Cadastre-se"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
function MainApp() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Lê a aba direto da URL ou assume "dashboard" como padrão
  const tab = searchParams.get("tab") || "dashboard";

  const setTab = function (newTab) {
    setSearchParams({ tab: newTab });
  };

  // Garante que se houver mudança nos parâmetros da URL, atualize a aba correspondente
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setTab(tabParam);
    }
  }, [searchParams]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [clients, setClients] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedOSForPrint, setSelectedOSForPrint] = useState([]);

  const [carouselIndex, setCarouselIndex] = useState(0);

  const [clientForm, setClientForm] = useState({
    id: null,
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    document: "",
    email: "",
  });

  const [osForm, setOsForm] = useState({
    id: null,
    client_id: "",
    title: "",
    description: "",
    value: "",
    status: "Pendente",
  });

  const [isEditingClient, setIsEditingClient] = useState(false);
  const [isEditingOS, setIsEditingOS] = useState(false);

  const fetchData = async () => {
    try {
      const resClients = await fetch(`${API_URL}/clients`);
      if (resClients.ok) {
        const dataClients = await resClients.json();
        setClients(Array.isArray(dataClients) ? dataClients : []);
      }

      const resOrders = await fetch(`${API_URL}/orders`);
      if (resOrders.ok) {
        const dataOrders = await resOrders.json();
        setOrders(Array.isArray(dataOrders) ? dataOrders : []);
      }
    } catch (err) {
      console.error("Erro ao carregar dados:", err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchData();
  }, [isAuthenticated]);

  useEffect(() => {
    if (tab === "reports") {
      const timer = setInterval(() => {
        setCarouselIndex((prev) => (prev + 1) % REPORT_CAROUSEL_ITEMS.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [tab]);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // --- AÇÕES DE CLIENTES (SEM STATUS) ---
  const handleSaveClient = async (e) => {
    e.preventDefault();
    const fullName = `${clientForm.firstName} ${clientForm.lastName}`.trim();
    const payload = {
      name: fullName,
      phone: clientForm.phone,
      address: clientForm.address,
      document: clientForm.document,
      email: clientForm.email,
    };

    try {
      if (isEditingClient && clientForm.id) {
        const res = await fetch(`${API_URL}/clients/${clientForm.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          const updatedClient = await res.json();
          setClients((prev) =>
            prev.map((c) =>
              c.id === clientForm.id
                ? { ...c, ...payload, ...updatedClient }
                : c,
            ),
          );
        }
        setIsEditingClient(false);
      } else {
        await fetch(`${API_URL}/clients`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setClientForm({
        id: null,
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        document: "",
        email: "",
      });
      await fetchData();
    } catch (err) {
      alert("Erro ao salvar cliente.");
    }
  };

  const handleEditClientClick = (c) => {
    setIsEditingClient(true);
    const nameParts = (c.name || "").trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    setClientForm({
      id: c.id,
      firstName,
      lastName,
      phone: c.phone || "",
      address: c.address || "",
      document: c.document || "",
      email: c.email || "",
    });
  };

  const handleDeleteClient = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este cliente?")) return;
    try {
      await fetch(`${API_URL}/clients/${id}`, { method: "DELETE" });
      await fetchData();
    } catch (err) {
      alert("Erro ao excluir cliente.");
    }
  };

  // --- AÇÕES DE ORDENS DE SERVIÇO ---
  const handleSaveOS = async (e) => {
    e.preventDefault();
    const payload = {
      client_id: osForm.client_id,
      title: osForm.title,
      description: osForm.description,
      value: osForm.value || 0,
      status: osForm.status,
    };

    try {
      if (isEditingOS && osForm.id) {
        await fetch(`${API_URL}/orders/${osForm.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        setIsEditingOS(false);
      } else {
        await fetch(`${API_URL}/orders`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setOsForm({
        id: null,
        client_id: "",
        title: "",
        description: "",
        value: "",
        status: "Pendente",
      });
      await fetchData();
    } catch (err) {
      alert("Erro ao salvar OS.");
    }
  };

  const handleEditOSClick = (o) => {
    setIsEditingOS(true);
    setOsForm({
      id: o.id,
      client_id: o.client_id || "",
      title: o.title || "",
      description: o.description || "",
      value: o.value || "",
      status: o.status || "Pendente",
    });
  };

  const handleDeleteOS = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir esta OS?")) return;
    try {
      await fetch(`${API_URL}/orders/${id}`, { method: "DELETE" });
      await fetchData();
    } catch (err) {
      alert("Erro ao excluir OS.");
    }
  };

  const toggleSelectOSForPrint = (id) => {
    if (selectedOSForPrint.includes(id)) {
      setSelectedOSForPrint(selectedOSForPrint.filter((item) => item !== id));
    } else {
      setSelectedOSForPrint([...selectedOSForPrint, id]);
    }
  };

  const toggleSelectAllOS = () => {
    if (selectedOSForPrint.length === orders.length) {
      setSelectedOSForPrint([]);
    } else {
      setSelectedOSForPrint(orders.map((o) => o.id));
    }
  };

  // --- MÉTRICAS DE RESUMO ---
  const totalClientes = clients.length;

  const totalFaturado = orders
    .filter((o) => o.status === "Concluído")
    .reduce((acc, curr) => acc + Number(curr.value || 0), 0);

  const contasAReceber = orders
    .filter((o) => o.status === "Pendente" || o.status === "Em Andamento")
    .reduce((acc, curr) => acc + Number(curr.value || 0), 0);

  const emAndamento = orders.filter((o) => o.status === "Em Andamento").length;
  const pendentes = orders.filter((o) => o.status === "Pendente").length;
  const concluidas = orders.filter((o) => o.status === "Concluído").length;
  const totalOS = orders.length || 1;

  const valPendentes = orders
    .filter((o) => o.status === "Pendente")
    .reduce((a, b) => a + Number(b.value || 0), 0);
  const valAndamento = orders
    .filter((o) => o.status === "Em Andamento")
    .reduce((a, b) => a + Number(b.value || 0), 0);

  const ticketMedio = concluidas > 0 ? totalFaturado / concluidas : 0;

  const pConcluido = (concluidas / totalOS) * 100;
  const pAndamento = (emAndamento / totalOS) * 100;
  const pPendente = (pendentes / totalOS) * 100;

  const formatBRL = (val) =>
    Number(val || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const ordersToPrint = orders.filter(
    (o) => selectedOSForPrint.length === 0 || selectedOSForPrint.includes(o.id),
  );

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar no-print">
        <h2>⚡ NOX CRM</h2>
        <div
          className={`nav-item ${tab === "dashboard" ? "active" : ""}`}
          onClick={() => setTab("dashboard")}
        >
          <LayoutDashboard size={20} /> Dashboard
        </div>
        <div
          className={`nav-item ${tab === "clients" ? "active" : ""}`}
          onClick={() => setTab("clients")}
        >
          <Users size={20} /> Clientes / Cadastro
        </div>
        <div
          className={`nav-item ${tab === "orders" ? "active" : ""}`}
          onClick={() => setTab("orders")}
        >
          <FileText size={20} /> Ordens de Serviço
        </div>
        <div
          className={`nav-item ${tab === "reports" ? "active" : ""}`}
          onClick={() => setTab("reports")}
        >
          <BarChart size={20} /> Relatórios
        </div>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <main className="main-content">
        {/* TOPBAR */}
        <header
          className="no-print"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "20px",
            marginBottom: "24px",
            borderBottom: "1px solid #334155",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#f8fafc",
              }}
            >
              Olá,{" "}
              <strong style={{ color: "#38bdf8" }}>
                {currentUser?.name || "Usuário"}
              </strong>
              ! 👋
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
              {currentUser?.email}
            </span>
            <button
              className="btn btn-secondary"
              onClick={handleLogout}
              style={{
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <LogOut size={16} /> Sair
            </button>
          </div>
        </header>

        {/* ================= DASHBOARD ================= */}
        {tab === "dashboard" && (
          <div>
            <h1 className="header-title">Visão Geral & Métricas</h1>

            <div className="cards-grid">
              <div className="card">
                <div className="card-title">
                  <Users size={16} /> Total de Clientes
                </div>
                <div className="card-value" style={{ color: "#38bdf8" }}>
                  {totalClientes}
                </div>
              </div>
              <div className="card">
                <div className="card-title">
                  <Clock size={16} /> OS em Aberto
                </div>
                <div className="card-value" style={{ color: "#f59e0b" }}>
                  {pendentes + emAndamento}
                </div>
              </div>
              <div className="card">
                <div className="card-title">
                  <Wallet size={16} /> Contas a Receber
                </div>
                <div className="card-value" style={{ color: "#f59e0b" }}>
                  {formatBRL(contasAReceber)}
                </div>
              </div>
              <div className="card">
                <div className="card-title">
                  <DollarSign size={16} /> Receita Recebida
                </div>
                <div className="card-value" style={{ color: "#10b981" }}>
                  {formatBRL(totalFaturado)}
                </div>
              </div>
            </div>

            {/* GRÁFICOS DO DASHBOARD */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                marginBottom: "32px",
              }}
            >
              <div className="card">
                <h3
                  style={{
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <BarChart3 size={20} color="#38bdf8" /> Volume de OS (Status)
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-around",
                    height: "180px",
                    paddingTop: "20px",
                    borderBottom: "1px solid #334155",
                  }}
                >
                  <div style={{ textAlign: "center", width: "30%" }}>
                    <div
                      style={{
                        background: "#f59e0b",
                        height: `${Math.max((pendentes / totalOS) * 130, 8)}px`,
                        borderRadius: "4px 4px 0 0",
                        transition: "height 0.5s",
                      }}
                    ></div>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        marginTop: "8px",
                        display: "block",
                      }}
                    >
                      Pend ({pendentes})
                    </span>
                  </div>
                  <div style={{ textAlign: "center", width: "30%" }}>
                    <div
                      style={{
                        background: "#0284c7",
                        height: `${Math.max((emAndamento / totalOS) * 130, 8)}px`,
                        borderRadius: "4px 4px 0 0",
                        transition: "height 0.5s",
                      }}
                    ></div>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        marginTop: "8px",
                        display: "block",
                      }}
                    >
                      Andam ({emAndamento})
                    </span>
                  </div>
                  <div style={{ textAlign: "center", width: "30%" }}>
                    <div
                      style={{
                        background: "#10b981",
                        height: `${Math.max((concluidas / totalOS) * 130, 8)}px`,
                        borderRadius: "4px 4px 0 0",
                        transition: "height 0.5s",
                      }}
                    ></div>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        marginTop: "8px",
                        display: "block",
                      }}
                    >
                      Concl ({concluidas})
                    </span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3
                  style={{
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <PieIcon size={20} color="#38bdf8" /> Proporção Status (Pizza)
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    height: "180px",
                  }}
                >
                  <svg
                    width="130"
                    height="130"
                    viewBox="0 0 32 32"
                    style={{
                      borderRadius: "50%",
                      transform: "rotate(-90deg)",
                      background: "#0f172a",
                    }}
                  >
                    <circle
                      r="16"
                      cx="16"
                      cy="16"
                      fill="transparent"
                      stroke="#f59e0b"
                      strokeWidth="32"
                      strokeDasharray={`${pPendente} 100`}
                    />
                    <circle
                      r="16"
                      cx="16"
                      cy="16"
                      fill="transparent"
                      stroke="#0284c7"
                      strokeWidth="32"
                      strokeDasharray={`${pAndamento} 100`}
                      strokeDashoffset={`-${pPendente}`}
                    />
                    <circle
                      r="16"
                      cx="16"
                      cy="16"
                      fill="transparent"
                      stroke="#10b981"
                      strokeWidth="32"
                      strokeDasharray={`${pConcluido} 100`}
                      strokeDashoffset={`-${pPendente + pAndamento}`}
                    />
                  </svg>

                  <div
                    style={{
                      fontSize: "0.85rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          width: "12px",
                          height: "12px",
                          background: "#f59e0b",
                          borderRadius: "2px",
                        }}
                      ></span>{" "}
                      Pendentes: {Math.round(pPendente)}%
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          width: "12px",
                          height: "12px",
                          background: "#0284c7",
                          borderRadius: "2px",
                        }}
                      ></span>{" "}
                      Andamento: {Math.round(pAndamento)}%
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          width: "12px",
                          height: "12px",
                          background: "#10b981",
                          borderRadius: "2px",
                        }}
                      ></span>{" "}
                      Concluídas: {Math.round(pConcluido)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ARTIGOS E GUIAS */}
            <h2
              style={{
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Newspaper size={20} color="#38bdf8" /> Artigos, Dicas & Notícias
              de CRM
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "16px",
              }}
            >
              {ARTICLES_DATA.map((art) => (
                <div
                  key={art.id}
                  className="card"
                  style={{
                    padding: "0",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={art.image}
                    alt={art.title}
                    style={{
                      width: "100%",
                      height: "140px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      padding: "16px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          background: "#0284c7",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          color: "#fff",
                        }}
                      >
                        {art.category}
                      </span>
                      <h4 style={{ margin: "8px 0", fontSize: "1rem" }}>
                        {art.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#94a3b8",
                          marginBottom: "12px",
                        }}
                      >
                        {art.desc}
                      </p>
                    </div>
                    <button
                      className="btn btn-secondary"
                      style={{ width: "100%", marginTop: "auto" }}
                      onClick={() => navigate(`/artigo/${art.id}`)}
                    >
                      Ler mais
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= CLIENTES / CADASTRO ================= */}
        {tab === "clients" && (
          <div>
            <h1 className="header-title">Cadastro & Gestão de Clientes</h1>

            <form
              className="card"
              style={{ marginBottom: "24px" }}
              onSubmit={handleSaveClient}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <h3>
                  {isEditingClient
                    ? "✏️ Editar Cliente"
                    : "👤 Novo Cadastro de Cliente"}
                </h3>
                {isEditingClient && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setIsEditingClient(false);
                      setClientForm({
                        id: null,
                        firstName: "",
                        lastName: "",
                        phone: "",
                        address: "",
                        document: "",
                        email: "",
                      });
                    }}
                  >
                    <X size={16} /> Cancelar
                  </button>
                )}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "12px",
                }}
              >
                <div className="form-group">
                  <label>Nome *</label>
                  <input
                    type="text"
                    value={clientForm.firstName}
                    onChange={(e) =>
                      setClientForm({
                        ...clientForm,
                        firstName: e.target.value,
                      })
                    }
                    required
                    placeholder="João"
                  />
                </div>
                <div className="form-group">
                  <label>Sobrenome</label>
                  <input
                    type="text"
                    value={clientForm.lastName}
                    onChange={(e) =>
                      setClientForm({ ...clientForm, lastName: e.target.value })
                    }
                    placeholder="Silva"
                  />
                </div>
                <div className="form-group">
                  <label>Telefone</label>
                  <input
                    type="text"
                    value={clientForm.phone}
                    onChange={(e) =>
                      setClientForm({ ...clientForm, phone: e.target.value })
                    }
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div className="form-group">
                  <label>E-mail</label>
                  <input
                    type="email"
                    value={clientForm.email}
                    onChange={(e) =>
                      setClientForm({ ...clientForm, email: e.target.value })
                    }
                    placeholder="joao@email.com"
                  />
                </div>
                <div className="form-group">
                  <label>Documento (CPF/CNPJ)</label>
                  <input
                    type="text"
                    value={clientForm.document}
                    onChange={(e) =>
                      setClientForm({ ...clientForm, document: e.target.value })
                    }
                    placeholder="000.000.000-00"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn"
                style={{ marginTop: "16px" }}
              >
                <Save size={16} />{" "}
                {isEditingClient ? "Atualizar Cliente" : "Cadastrar Cliente"}
              </button>
            </form>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Documento</th>
                    <th style={{ textAlign: "center" }}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((c) => (
                    <tr key={c.id}>
                      <td>#{c.id}</td>
                      <td>
                        <strong>{c.name}</strong>
                      </td>
                      <td>{c.phone || "-"}</td>
                      <td>{c.email || "-"}</td>
                      <td>{c.document || "-"}</td>
                      <td style={{ textAlign: "center" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "6px",
                          }}
                        >
                          <button
                            className="btn btn-secondary"
                            style={{ padding: "6px 10px" }}
                            onClick={() => handleEditClientClick(c)}
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            className="btn btn-secondary"
                            style={{ padding: "6px 10px", color: "#ef4444" }}
                            onClick={() => handleDeleteClient(c.id)}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= ORDENS DE SERVIÇO ================= */}
        {tab === "orders" && (
          <div>
            <div
              className="no-print"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h1 className="header-title" style={{ margin: 0 }}>
                Ordens de Serviço
              </h1>
              <button
                className="btn btn-secondary"
                onClick={() => window.print()}
              >
                <Printer size={16} /> Imprimir Selecionadas (
                {selectedOSForPrint.length === 0
                  ? "Todas"
                  : selectedOSForPrint.length}
                )
              </button>
            </div>

            <form
              className="card no-print"
              style={{ marginBottom: "24px" }}
              onSubmit={handleSaveOS}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <h3>
                  {isEditingOS
                    ? "✏️ Editar Ordem de Serviço"
                    : "📋 Nova Ordem de Serviço"}
                </h3>
                {isEditingOS && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setIsEditingOS(false);
                      setOsForm({
                        id: null,
                        client_id: "",
                        title: "",
                        description: "",
                        value: "",
                        status: "Pendente",
                      });
                    }}
                  >
                    <X size={16} /> Cancelar
                  </button>
                )}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "12px",
                }}
              >
                <div className="form-group">
                  <label>Cliente *</label>
                  <select
                    value={osForm.client_id}
                    onChange={(e) =>
                      setOsForm({ ...osForm, client_id: e.target.value })
                    }
                    required
                  >
                    <option value="">Selecione um cliente...</option>
                    {clients.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Título do Serviço *</label>
                  <input
                    type="text"
                    value={osForm.title}
                    onChange={(e) =>
                      setOsForm({ ...osForm, title: e.target.value })
                    }
                    required
                    placeholder="Ex: Manutenção Preventiva"
                  />
                </div>
                <div className="form-group">
                  <label>Valor (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={osForm.value}
                    onChange={(e) =>
                      setOsForm({ ...osForm, value: e.target.value })
                    }
                    placeholder="0.00"
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    value={osForm.status}
                    onChange={(e) =>
                      setOsForm({ ...osForm, status: e.target.value })
                    }
                  >
                    <option value="Pendente">Pendente</option>
                    <option value="Em Andamento">Em Andamento</option>
                    <option value="Concluído">Concluído</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginTop: "12px" }}>
                <label>Descrição do Serviço / Observações</label>
                <textarea
                  rows="3"
                  value={osForm.description}
                  onChange={(e) =>
                    setOsForm({ ...osForm, description: e.target.value })
                  }
                  placeholder="Detalhamento técnico do serviço a ser executado..."
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "#0f172a",
                    border: "1px solid #334155",
                    color: "#fff",
                    borderRadius: "6px",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn"
                style={{ marginTop: "16px" }}
              >
                <Save size={16} /> {isEditingOS ? "Atualizar OS" : "Salvar OS"}
              </button>
            </form>

            <div className="table-container no-print">
              <table>
                <thead>
                  <tr>
                    <th style={{ width: "40px", textAlign: "center" }}>
                      <input
                        type="checkbox"
                        checked={
                          selectedOSForPrint.length === orders.length &&
                          orders.length > 0
                        }
                        onChange={toggleSelectAllOS}
                      />
                    </th>
                    <th>OS #</th>
                    <th>Cliente</th>
                    <th>Serviço</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Status</th>
                    <th style={{ textAlign: "center" }}>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id}>
                      <td style={{ textAlign: "center" }}>
                        <input
                          type="checkbox"
                          checked={selectedOSForPrint.includes(o.id)}
                          onChange={() => toggleSelectOSForPrint(o.id)}
                        />
                      </td>
                      <td>#{o.id}</td>
                      <td>{o.client_name}</td>
                      <td>
                        <strong>{o.title}</strong>
                      </td>
                      <td
                        style={{
                          color: "#94a3b8",
                          fontSize: "0.85rem",
                          maxWidth: "200px",
                        }}
                      >
                        {o.description || "-"}
                      </td>
                      <td>{formatBRL(o.value)}</td>
                      <td>
                        <span className="status-badge">{o.status}</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "6px",
                          }}
                        >
                          <button
                            className="btn btn-secondary"
                            style={{ padding: "6px 10px" }}
                            onClick={() => handleEditOSClick(o)}
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            className="btn btn-secondary"
                            style={{ padding: "6px 10px", color: "#ef4444" }}
                            onClick={() => handleDeleteOS(o.id)}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* LAYOUT DE IMPRESSÃO */}
            <div className="print-only" style={{ display: "none" }}>
              <style>{`
                @media print {
                  .no-print { display: none !important; }
                  .print-only { display: block !important; }
                  body { background: #fff !important; color: #000 !important; }
                }
              `}</style>
              {ordersToPrint.map((o) => (
                <div
                  key={o.id}
                  style={{
                    pageBreakAfter: "always",
                    padding: "40px",
                    border: "2px solid #000",
                    marginBottom: "40px",
                    fontFamily: "Arial, sans-serif",
                    color: "#000",
                    background: "#fff",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "2px solid #000",
                      paddingBottom: "16px",
                      marginBottom: "24px",
                    }}
                  >
                    <div>
                      <h2 style={{ margin: 0, fontSize: "1.8rem" }}>
                        ⚡ NOX CRM
                      </h2>
                      <p style={{ margin: "4px 0 0 0", fontSize: "0.9rem" }}>
                        Relatório de Ordem de Serviço
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <h3 style={{ margin: 0, fontSize: "1.4rem" }}>
                        OS #{o.id}
                      </h3>
                      <p style={{ margin: "4px 0 0 0", fontSize: "0.9rem" }}>
                        Status: <strong>{o.status}</strong>
                      </p>
                    </div>
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <h4
                      style={{
                        borderBottom: "1px solid #ccc",
                        paddingBottom: "6px",
                        marginBottom: "12px",
                      }}
                    >
                      Dados do Cliente
                    </h4>
                    <p style={{ margin: "6px 0", fontSize: "1.05rem" }}>
                      <strong>Nome:</strong> {o.client_name}
                    </p>
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <h4
                      style={{
                        borderBottom: "1px solid #ccc",
                        paddingBottom: "6px",
                        marginBottom: "12px",
                      }}
                    >
                      Informações do Serviço
                    </h4>
                    <p style={{ margin: "6px 0", fontSize: "1.05rem" }}>
                      <strong>Título:</strong> {o.title}
                    </p>
                    <p style={{ margin: "6px 0", fontSize: "1.05rem" }}>
                      <strong>Valor:</strong> {formatBRL(o.value)}
                    </p>
                  </div>

                  <div style={{ marginBottom: "40px" }}>
                    <h4
                      style={{
                        borderBottom: "1px solid #ccc",
                        paddingBottom: "6px",
                        marginBottom: "12px",
                      }}
                    >
                      Descrição Técnica / Observações
                    </h4>
                    <div
                      style={{
                        border: "1px solid #ccc",
                        padding: "16px",
                        borderRadius: "6px",
                        minHeight: "120px",
                        fontSize: "1.05rem",
                        lineHeight: "1.6",
                        background: "#f9f9f9",
                      }}
                    >
                      {o.description || "Nenhuma observação informada."}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "80px",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        width: "45%",
                        borderTop: "1px solid #000",
                        paddingTop: "8px",
                      }}
                    >
                      Assinatura do Técnico
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        width: "45%",
                        borderTop: "1px solid #000",
                        paddingTop: "8px",
                      }}
                    >
                      Assinatura do Cliente
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= RELATÓRIOS ================= */}
        {tab === "reports" && (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h1 className="header-title" style={{ margin: 0 }}>
                Relatórios Financeiros & Operacionais
              </h1>
              <button
                className="btn btn-secondary no-print"
                onClick={() => window.print()}
              >
                <Printer size={16} /> Imprimir Relatório Completo
              </button>
            </div>

            {/* CARROSSEL INFORMATIVO */}
            <div
              className="card no-print"
              style={{
                marginBottom: "24px",
                background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                borderLeft: `4px solid ${REPORT_CAROUSEL_ITEMS[carouselIndex].color}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    background: REPORT_CAROUSEL_ITEMS[carouselIndex].color,
                    padding: "2px 8px",
                    borderRadius: "4px",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {REPORT_CAROUSEL_ITEMS[carouselIndex].tag} (
                  {carouselIndex + 1}/{REPORT_CAROUSEL_ITEMS.length})
                </span>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    className="btn btn-secondary"
                    style={{ padding: "4px 8px" }}
                    onClick={() =>
                      setCarouselIndex(
                        (carouselIndex - 1 + REPORT_CAROUSEL_ITEMS.length) %
                          REPORT_CAROUSEL_ITEMS.length,
                      )
                    }
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    className="btn btn-secondary"
                    style={{ padding: "4px 8px" }}
                    onClick={() =>
                      setCarouselIndex(
                        (carouselIndex + 1) % REPORT_CAROUSEL_ITEMS.length,
                      )
                    }
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <h3
                style={{
                  margin: "12px 0 6px 0",
                  color: REPORT_CAROUSEL_ITEMS[carouselIndex].color,
                }}
              >
                {REPORT_CAROUSEL_ITEMS[carouselIndex].title}
              </h3>
              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                }}
              >
                {REPORT_CAROUSEL_ITEMS[carouselIndex].description}
              </p>
            </div>

            {/* CARDS DE MÉTRICAS */}
            <div className="cards-grid" style={{ marginBottom: "24px" }}>
              <div className="card">
                <h3>👥 Base de Clientes</h3>
                <p
                  style={{
                    fontSize: "1.8rem",
                    color: "#38bdf8",
                    margin: "8px 0",
                  }}
                >
                  {totalClientes}
                </p>
                <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                  Total de clientes cadastrados
                </span>
              </div>

              <div className="card">
                <h3>📊 Faturamento Realizado</h3>
                <p
                  style={{
                    fontSize: "1.8rem",
                    color: "#10b981",
                    margin: "8px 0",
                  }}
                >
                  {formatBRL(totalFaturado)}
                </p>
                <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                  {concluidas} Ordens Concluídas
                </span>
              </div>

              <div className="card">
                <h3>⏳ Em Haver (Pendentes)</h3>
                <p
                  style={{
                    fontSize: "1.8rem",
                    color: "#f59e0b",
                    margin: "8px 0",
                  }}
                >
                  {formatBRL(contasAReceber)}
                </p>
                <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                  {pendentes + emAndamento} Ordens em Aberto
                </span>
              </div>

              <div className="card">
                <h3>📈 Ticket Médio / OS</h3>
                <p
                  style={{
                    fontSize: "1.8rem",
                    color: "#38bdf8",
                    margin: "8px 0",
                  }}
                >
                  {formatBRL(ticketMedio)}
                </p>
                <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                  Média por serviço concluído
                </span>
              </div>
            </div>

            {/* TABELA DE RESUMO */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "20px",
              }}
            >
              <div className="card">
                <h3
                  style={{
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#38bdf8",
                  }}
                >
                  <BarChart size={18} /> Resumo Operacional por Status
                </h3>
                <div className="table-container" style={{ margin: 0 }}>
                  <table style={{ fontSize: "0.85rem" }}>
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Qtd. OS</th>
                        <th>Valor Acumulado</th>
                        <th>% Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span
                            style={{ color: "#f59e0b", fontWeight: "bold" }}
                          >
                            Pendente
                          </span>
                        </td>
                        <td>{pendentes}</td>
                        <td>{formatBRL(valPendentes)}</td>
                        <td>{Math.round(pPendente)}%</td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            style={{ color: "#0284c7", fontWeight: "bold" }}
                          >
                            Em Andamento
                          </span>
                        </td>
                        <td>{emAndamento}</td>
                        <td>{formatBRL(valAndamento)}</td>
                        <td>{Math.round(pAndamento)}%</td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            style={{ color: "#10b981", fontWeight: "bold" }}
                          >
                            Concluído
                          </span>
                        </td>
                        <td>{concluidas}</td>
                        <td>{formatBRL(totalFaturado)}</td>
                        <td>{Math.round(pConcluido)}%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#38bdf8",
                    }}
                  >
                    <Lightbulb size={18} /> Recomendações do Sistema
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      fontSize: "0.88rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        background: "#0f172a",
                        padding: "10px",
                        borderRadius: "6px",
                        borderLeft: "3px solid #f59e0b",
                      }}
                    >
                      <AlertTriangle
                        size={18}
                        color="#f59e0b"
                        style={{ minWidth: "18px" }}
                      />
                      <span>
                        Existe um total de{" "}
                        <strong>{formatBRL(contasAReceber)}</strong> pendente de
                        conclusão/recebimento. Priorize a finalização dessas
                        ordens.
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        background: "#0f172a",
                        padding: "10px",
                        borderRadius: "6px",
                        borderLeft: "3px solid #10b981",
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        color="#10b981"
                        style={{ minWidth: "18px" }}
                      />
                      <span>
                        O seu Ticket Médio atual é de{" "}
                        <strong>{formatBRL(ticketMedio)}</strong> por serviço
                        entregue.
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "16px",
                    padding: "10px",
                    background: "#1e293b",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    color: "#94a3b8",
                  }}
                >
                  ℹ️ Relatório atualizado em tempo real com base no banco de
                  dados ativo.
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/artigo/:id" element={<ArticleDetail />} />
    </Routes>
  );
}
