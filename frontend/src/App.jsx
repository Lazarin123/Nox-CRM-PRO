import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import {
  Users,
  FileText,
  LayoutDashboard,
  Plus,
  Printer,
  Edit2,
  Trash2,
  TrendingUp,
  DollarSign,
  CheckCircle2,
  Clock,
  Newspaper,
  X,
  Save,
  ArrowLeft,
  PieChart as PieIcon,
  BarChart3,
  Wallet,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// ==========================================
// BASE DE DADOS DOS 15 ARTIGOS COMPLETOS
// ==========================================
export const ARTICLES_DATA = [
  {
    id: "fluxo-de-caixa",
    title: "Como Otimizar o Fluxo de Caixa na sua Empresa",
    category: "Finanças",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1000&auto=format&fit=crop&q=80",
    desc: "Estratégias práticas para manter a saúde financeira do seu negócio em dia.",
    content: `
      <h2>1. O que é o Fluxo de Caixa?</h2>
      <p>O fluxo de caixa é a espinha dorsal de qualquer empreendimento. Ele registra todas as entradas e saídas de capital em um determinado período, permitindo previsibilidade e controle absoluto.</p>
      <h2>2. Mapeamento de Custos Fixos e Variáveis</h2>
      <p>Para otimizar suas contas, categorize os custos em fixos (aluguel, salários, assinaturas) e variáveis (insumos, comissões, manutenção emergencial). Essa separação permite identificar gargalos rapidamente.</p>
      <h2>3. Projeção Financeira e Reserva de Emergência</h2>
      <p>Nunca trabalhe apenas com o saldo do dia. Mantenha uma projeção mínima de 3 a 6 meses de custos operacionais como reserva de emergência para períodos de baixa demanda.</p>
    `,
  },
  {
    id: "fidelizar-clientes",
    title: "5 Técnicas de CRM para Fidelizar Clientes em 2026",
    category: "Gestão & CRM",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&auto=format&fit=crop&q=80",
    desc: "Aprenda a estruturar o histórico dos seus atendimentos e vender mais.",
    content: `
      <h2>1. Centralização do Histórico do Cliente</h2>
      <p>Registrar todas as interações e preferências do cliente garante um atendimento personalizado e previne falhas de comunicação na equipe.</p>
      <h2>2. Follow-up Automatizado</h2>
      <p>Configure lembretes de retorno após a entrega de um serviço ou produto. Mostrar preocupação no pós-venda aumenta o Lifetime Value (LTV).</p>
      <h2>3. Segmentação de Base</h2>
      <p>Separe seus clientes por frequência de compra e valor investido para oferecer condições especiais aos mais engajados.</p>
    `,
  },
  {
    id: "automatizar-os",
    title: "A Importância de Automatizar Ordens de Serviço",
    category: "Produtividade",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80",
    desc: "Reduza erros operacionais e garanta prazos com um sistema organizado.",
    content: `
      <h2>1. Fim do Papel e da Perda de Informação</h2>
      <p>Digitalizar as Ordens de Serviço evita rasuras, perda de blocos de anotações e dúvidas sobre o histórico do equipamento ou serviço contratado.</p>
      <h2>2. Status em Tempo Real</h2>
      <p>Permita que o cliente e sua equipe saibam exatamente o estágio da OS (Pendente, Em Andamento ou Concluído), eliminando chamadas desnecessárias.</p>
    `,
  },
  {
    id: "precificacao-servicos",
    title: "Como Precificar Serviços sem Prejudicar a Margem",
    category: "Finanças",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1000&auto=format&fit=crop&q=80",
    desc: "Aprenda a calcular a hora técnica, impostos e custos ocultos na precificação.",
    content: `
      <h2>1. Cálculo da Hora Técnica</h2>
      <p>Some todos os custos operacionais do mês e divida pelo número de horas efetivamente trabalhadas para descobrir seu custo por hora base.</p>
      <h2>2. Inclusão de Margem de Lucro e Impostos</h2>
      <p>Nunca esqueça de adicionar a alíquota de impostos e a margem de lucro desejada sobre a soma de insumos e hora técnica.</p>
    `,
  },
  {
    id: "atendimento-humanizado",
    title: "Atendimento Humanizado no Setor Técnico",
    category: "Atendimento",
    image:
      "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1000&auto=format&fit=crop&q=80",
    desc: "Transforme termos difíceis em soluções simples e encante seu cliente.",
    content: `
      <h2>1. Traduzindo o 'Tecniquês'</h2>
      <p>Explique diagnósticos e serviços usando termos simples. O cliente prefere entender o valor da solução do que a complexidade do problema.</p>
      <h2>2. Transparência na Execução</h2>
      <p>Envie fotos e atualizações durante o processo para demonstrar cuidado e profissionalismo.</p>
    `,
  },
  {
    id: "gestao-inadimplencia",
    title: "Estratégias para Reduzir a Inadimplência",
    category: "Finanças",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&auto=format&fit=crop&q=80",
    desc: "Mecanismos de cobrança amigável e alertas automáticos de vencimento.",
    content: `
      <h2>1. Lembretes Pré-Vencimento</h2>
      <p>Envie mensagens corteses 2 a 3 dias antes do vencimento da fatura com os dados facilitados de pagamento (Pix/Boleto).</p>
      <h2>2. Políticas Claras de Pagamento</h2>
      <p>Defina porcentagem de entrada e parcelamento formalizado na aprovação da Ordem de Serviço.</p>
    `,
  },
  {
    id: "indicadores-kpi",
    title: "KPIs Essenciais para Pequenas Empresas",
    category: "Gestão & CRM",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&auto=format&fit=crop&q=80",
    desc: "Acompanhe ticket médio, taxa de conversão e tempo médio de conclusão.",
    content: `
      <h2>1. Ticket Médio</h2>
      <p>Calcule o valor médio gasto por cliente dividindo o faturamento total pelo número de atendimentos efetuados.</p>
      <h2>2. Tempo Médio de Resolução</h2>
      <p>Monitore quantos dias ou horas sua equipe leva desde a abertura até o encerramento da OS.</p>
    `,
  },
  {
    id: "marketing-local",
    title: "Como Atrair Clientes da Sua Região",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1000&auto=format&fit=crop&q=80",
    desc: "Presença digital no Google Meu Negócio e avaliações de clientes satisfeitos.",
    content: `
      <h2>1. Otimização do Perfil da Empresa</h2>
      <p>Mantenha endereço, telefone e horário de funcionamento rigorosamente atualizados no Google.</p>
      <h2>2. Solicitação de Avaliações</h2>
      <p>Peça para cada cliente satisfeito deixar uma avaliação de 5 estrelas no final do atendimento.</p>
    `,
  },
  {
    id: "organizacao-operacional",
    title: "Organização do Ambiente e Rotina de Trabalho",
    category: "Produtividade",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&auto=format&fit=crop&q=80",
    desc: "Metodologias organizacionais para evitar atrasos em entregas.",
    content: `
      <h2>1. Metodologia 5S no Ateliê/Oficina</h2>
      <p>Descarte o desnecessário, organize as ferramentas por uso e mantenha a bancada limpa ao final do dia.</p>
    `,
  },
  {
    id: "pos-venda-eficiente",
    title: "Como Construir um Pós-Venda que Vende Mais",
    category: "Atendimento",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&auto=format&fit=crop&q=80",
    desc: "Pesquisas de satisfação e ofertas exclusivas para recompras.",
    content: `
      <h2>1. Pesquisa CSAT Simples</h2>
      <p>Envie uma pergunta de 1 a 5 estrelas após a conclusão da OS para mensurar o grau de satisfação.</p>
    `,
  },
  {
    id: "contratos-e-garantias",
    title: "Termos de Garantia e Segurança Jurídica",
    category: "Gestão & CRM",
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1000&auto=format&fit=crop&q=80",
    desc: "Como formular Ordens de Serviço válidas para evitar disputas legais.",
    content: `
      <h2>1. Checklist de Entrada</h2>
      <p>Registre todos os vícios e arranhões do equipamento antes de iniciar a manutenção na OS.</p>
    `,
  },
  {
    id: "tecnologia-em-nuvem",
    title: "Vantagens dos Sistemas em Nuvem",
    category: "Tecnologia",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&auto=format&fit=crop&q=80",
    desc: "Acesse seus dados financeiros e ordens de qualquer dispositivo com segurança.",
    content: `
      <h2>1. Backup Automático e Acesso Remoto</h2>
      <p>Bancos de dados serverless (como Neon PostgreSQL) protegem seus dados contra falhas de hardware locais.</p>
    `,
  },
  // --- NOVOS ARTIGOS ADICIONADOS ---
  {
    id: "lgpd-para-pequenas-empresas",
    title: "LGPD e Proteção de Dados para Pequenas Empresas",
    category: "Jurídico",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1000&auto=format&fit=crop&q=80",
    desc: "Como armazenar dados de clientes e orçamentos de forma totalmente segura e legal.",
    content: `
      <h2>1. Consentimento e Transparência</h2>
      <p>Informe claramente aos clientes quais dados são coletados (Telefone, Endereço, Documentos) e a finalidade exclusiva para emissão de Ordens de Serviço.</p>
      <h2>2. Armazenamento Seguro</h2>
      <p>Utilize bancos de dados criptografados e evite guardar informações sensíveis em cadernos de papel expostos.</p>
    `,
  },
  {
    id: "tecnicas-de-fechamento-vendas",
    title: "Dicas de Negociação e Fechamento de Vendas",
    category: "Vendas",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&auto=format&fit=crop&q=80",
    desc: "Técnicas para apresentar orçamentos e aumentar a taxa de aprovação das Ordens de Serviço.",
    content: `
      <h2>1. Apresentação Centrada em Benefícios</h2>
      <p>Ao enviar o orçamento, destaque a durabilidade e a garantia do serviço antes de apresentar o valor final.</p>
      <h2>2. Ancoragem e Opções de Pagamento</h2>
      <p>Ofereça opções de parcelamento flexíveis para diminuir a resistência de preço do cliente.</p>
    `,
  },
  {
    id: "gestao-de-estoque-e-pecas",
    title: "Como Gerenciar Estoque e Peças de Reposição",
    category: "Produtividade",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80",
    desc: "Evite capital parado e imprevistos por falta de insumos durante a manutenção.",
    content: `
      <h2>1. Estoque Mínimo e Ponto de Pedido</h2>
      <p>Estabeleça a quantidade mínima de cada insumo recorrente. Quando o estoque atingir essa margem, faça a compra de reposição imediatamente.</p>
      <h2>2. Inventário Periódico</h2>
      <p>Realize contagens mensais para garantir que os itens registrados batam exatamente com o estoque físico disponível.</p>
    `,
  },
];

// ==========================================
// COMPONENTE DA TELA COMPLETA DO ARTIGO (ROTA)
// ==========================================
function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = ARTICLES_DATA.find((a) => a.id === id);

  if (!article) {
    return (
      <div style={{ padding: "40px", color: "#fff" }}>
        <h2>Artigo não encontrado!</h2>
        <button className="btn" onClick={() => navigate("/")}>
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
        onClick={() => navigate("/")}
        style={{ marginBottom: "24px" }}
      >
        <ArrowLeft size={16} /> Voltar para o Dashboard
      </button>

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

      <h1 style={{ fontSize: "2.5rem", margin: "16px 0", lineHeight: "1.2" }}>
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
// COMPONENTE PRINCIPAL (DASHBOARD / CLIENTES / OS)
// ==========================================
function MainApp() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("dashboard");
  const [clients, setClients] = useState([]);
  const [orders, setOrders] = useState([]);

  // Estados dos Formulários
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

  // Modais de Edição
  const [isEditingClient, setIsEditingClient] = useState(false);
  const [isEditingOS, setIsEditingOS] = useState(false);

  // Buscar dados
  const fetchData = async () => {
    try {
      const resClients = await fetch(`${API_URL}/clients`);
      const dataClients = await resClients.json();
      setClients(Array.isArray(dataClients) ? dataClients : []);

      const resOrders = await fetch(`${API_URL}/orders`);
      const dataOrders = await resOrders.json();
      setOrders(Array.isArray(dataOrders) ? dataOrders : []);
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // --- CLIENTES: CADASTRAR / EDITAR / EXCLUIR CORRIGIDO ---
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
        const response = await fetch(`${API_URL}/clients/${clientForm.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Falha ao atualizar cliente");
        setIsEditingClient(false);
      } else {
        const response = await fetch(`${API_URL}/clients`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Falha ao criar cliente");
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
      alert("Erro ao salvar cliente: " + err.message);
    }
  };

  const handleEditClientClick = (client) => {
    const names = (client.name || "").split(" ");
    const firstName = names[0] || "";
    const lastName = names.slice(1).join(" ") || "";

    setClientForm({
      id: client.id,
      firstName,
      lastName,
      phone: client.phone || "",
      address: client.address || "",
      document: client.document || "",
      email: client.email || "",
    });
    setIsEditingClient(true);
  };

  const handleDeleteClient = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este cliente?")) {
      try {
        const response = await fetch(`${API_URL}/clients/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Falha ao excluir cliente");
        await fetchData();
      } catch (err) {
        alert("Erro ao excluir cliente: " + err.message);
      }
    }
  };

  // --- ORDENS DE SERVIÇO: CADASTRAR / EDITAR / EXCLUIR ---
  const handleSaveOS = async (e) => {
    e.preventDefault();
    const payload = {
      client_id: osForm.client_id,
      title: osForm.title,
      description: osForm.description,
      value: osForm.value || 0,
      status: osForm.status,
    };

    if (isEditingOS) {
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
    fetchData();
  };

  const handleEditOSClick = (os) => {
    setOsForm({
      id: os.id,
      client_id: os.client_id,
      title: os.title,
      description: os.description || "",
      value: os.value,
      status: os.status,
    });
    setIsEditingOS(true);
  };

  const handleDeleteOS = async (id) => {
    if (
      window.confirm("Tem certeza que deseja excluir esta Ordem de Serviço?")
    ) {
      await fetch(`${API_URL}/orders/${id}`, { method: "DELETE" });
      fetchData();
    }
  };

  // Métricas do Dashboard
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

  // Cálculos para Gráfico de Pizza SVG
  const pConcluido = (concluidas / totalOS) * 100;
  const pAndamento = (emAndamento / totalOS) * 100;
  const pPendente = (pendentes / totalOS) * 100;

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
          <Users size={20} /> Clientes
        </div>
        <div
          className={`nav-item ${tab === "orders" ? "active" : ""}`}
          onClick={() => setTab("orders")}
        >
          <FileText size={20} /> Ordens de Serviço
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* ================= DASHBOARD ================= */}
        {tab === "dashboard" && (
          <div>
            <h1 className="header-title">Visão Geral & Métricas</h1>

            {/* KPI Cards */}
            <div className="cards-grid">
              <div className="card">
                <div className="card-title">
                  <Users size={16} /> Total de Clientes
                </div>
                <div className="card-value">{clients.length}</div>
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
                  R$ {contasAReceber.toFixed(2)}
                </div>
              </div>
              <div className="card">
                <div className="card-title">
                  <DollarSign size={16} /> Receita Recebida
                </div>
                <div className="card-value" style={{ color: "#10b981" }}>
                  R$ {totalFaturado.toFixed(2)}
                </div>
              </div>
            </div>

            {/* SEÇÃO DE GRÁFICOS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                marginBottom: "32px",
              }}
            >
              {/* 1. GRÁFICO DE COLUNAS */}
              <div className="card">
                <h3
                  style={{
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <BarChart3 size={20} color="#38bdf8" /> Volume de OS (Colunas)
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

              {/* 2. GRÁFICO DE PIZZA */}
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
                      Pendente: {Math.round(pPendente)}%
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
                      Concluído: {Math.round(pConcluido)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HUB DOS 15 ARTIGOS */}
            <h2
              style={{
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Newspaper size={20} color="#38bdf8" /> Artigos, Dicas & Notícias
              de CRM ({ARTICLES_DATA.length})
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

        {/* ================= CLIENTES ================= */}
        {tab === "clients" && (
          <div>
            <h1 className="header-title">Gerenciamento de Clientes</h1>

            {/* Formulário de Cadastro / Edição */}
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
                  {isEditingClient ? "✏️ Editar Cliente" : "👤 Novo Cliente"}
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
                  <label>Email</label>
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
                <div className="form-group" style={{ gridColumn: "span 2" }}>
                  <label>Endereço Completo</label>
                  <input
                    type="text"
                    value={clientForm.address}
                    onChange={(e) =>
                      setClientForm({ ...clientForm, address: e.target.value })
                    }
                    placeholder="Rua das Flores, 123 - São Paulo/SP"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn"
                style={{ marginTop: "8px" }}
              >
                {isEditingClient ? <Save size={16} /> : <Plus size={16} />}{" "}
                {isEditingClient ? "Atualizar Cliente" : "Cadastrar Cliente"}
              </button>
            </form>

            {/* Tabela de Clientes */}
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Endereço</th>
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
                      <td>{c.address || "-"}</td>
                      <td>{c.document || "-"}</td>
                      <td
                        style={{
                          textAlign: "center",
                          display: "flex",
                          gap: "8px",
                          justifyContent: "center",
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
                          className="btn"
                          style={{ padding: "6px 10px", background: "#ef4444" }}
                          onClick={() => handleDeleteClient(c.id)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {clients.length === 0 && (
                    <tr>
                      <td
                        colSpan="7"
                        style={{ textAlign: "center", color: "#94a3b8" }}
                      >
                        Nenhum cliente cadastrado.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= ORDENS DE SERVIÇO ================= */}
        {tab === "orders" && (
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
                Ordens de Serviço
              </h1>
              <button
                className="btn btn-secondary no-print"
                onClick={() => window.print()}
              >
                <Printer size={16} /> Imprimir / Exportar PDF
              </button>
            </div>

            {/* Formulário de OS */}
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
                    placeholder="Manutenção Preventiva"
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

                <div className="form-group" style={{ gridColumn: "span 2" }}>
                  <label>Descrição detalhada dos serviços</label>
                  <textarea
                    rows="3"
                    value={osForm.description}
                    onChange={(e) =>
                      setOsForm({ ...osForm, description: e.target.value })
                    }
                    placeholder="Descreva os detalhes..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn"
                style={{ marginTop: "8px" }}
              >
                {isEditingOS ? <Save size={16} /> : <Plus size={16} />}{" "}
                {isEditingOS ? "Atualizar OS" : "Criar Ordem de Serviço"}
              </button>
            </form>

            {/* Tabela de OS */}
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>OS #</th>
                    <th>Cliente</th>
                    <th>Serviço / Descrição</th>
                    <th>Valor</th>
                    <th>Status</th>
                    <th className="no-print" style={{ textAlign: "center" }}>
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id}>
                      <td>
                        <strong>#{o.id}</strong>
                      </td>
                      <td>{o.client_name}</td>
                      <td>
                        <strong>{o.title}</strong>
                        {o.description && (
                          <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                            {o.description}
                          </div>
                        )}
                      </td>
                      <td>R$ {Number(o.value).toFixed(2)}</td>
                      <td>
                        <span
                          className={`status-badge status-${o.status
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .replace(" ", "")}`}
                        >
                          {o.status}
                        </span>
                      </td>
                      <td
                        className="no-print"
                        style={{
                          textAlign: "center",
                          display: "flex",
                          gap: "8px",
                          justifyContent: "center",
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
                          className="btn"
                          style={{ padding: "6px 10px", background: "#ef4444" }}
                          onClick={() => handleDeleteOS(o.id)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {orders.length === 0 && (
                    <tr>
                      <td
                        colSpan="6"
                        style={{ textAlign: "center", color: "#94a3b8" }}
                      >
                        Nenhuma ordem de serviço cadastrada.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Configuração de Rotas
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/artigo/:id" element={<ArticleDetail />} />
    </Routes>
  );
}
