import "./App.css";

function App() {
  const historyPanels = [
  { title: "Tempo Total Ativo", value: "65h 55min", footer:"Tempo total no Período", className: "panel-yellow" },
  { title: "Média por Usuário", value: "16h 29min", footer:"Média no Período", className: "panel-green" },
  { title: "Sessões p/Usuário", value: "16", footer:"Média de Sessões", className: "panel-blue" },
  { title: "Usuários Ativos", value: "3/4", footer:"Usuários com Login", className: "panel-blue2" },
  { title: "Tempo Máquina", value: "28h 25min", footer:"Processamento Automático", className: "panel-purple" },
  { title: "Total Economizado", value: "R$ 91.648,00", footer:"Economia Mensal Estimada", className: "panel-green2" },
];

  const users = [
    { name: "João Almeida", status: "Active", orders: 24 },
    { name: "Maria Silva", status: "Active", orders: 18 },
    { name: "Alex Brito", status: "Inactive", orders: 7 },
    { name: "Ana Costa", status: "Pending", orders: 12 },
    { name: "Cleber", status: "Pending", orders: 12 },
    { name: "Igor", status: "Pending", orders: 12 },
  ];

  return (
    <div className="app">
      <main className="main">
        <section className="top-row">
          <h1>Dashboard de Tempo de uso por Usuários</h1>

          <select className="selector">
            <option>Todos</option>
            <option>Clientes</option>
            <option>Empresas</option>
            <option>Periodo</option>
            <option>Usuários</option>
          </select>
        </section>

        <section className="history-panels">
          {historyPanels.map((item, index) => (
            <div className={`history-card ${item.className}`} key={index}>
              <h5>{item.title}</h5>
              <p>{item.value}</p>
              <h6>{item.footer}</h6>
            </div>
          ))}
        </section>

        <section className="dashboard-content">
          <div className="user-details">
            <h3>Detalhamento por Usuário</h3>

            {users.map((user, index) => (
              <div className="user-card" key={index}>
                <h3>{user.name}</h3>
                <p>Status: {user.status}</p>
                <p>Orders: {user.orders}</p>
              </div>
            ))}
          </div>

          <div className="charts">
<div className="chart-box">
  <h2>Distribuição diária de uso por Usuários</h2>

  <div className="line-chart">
    <svg viewBox="0 0 700 320">
      {/* Y Axis */}
      <line x1="60" y1="20" x2="60" y2="260" stroke="#9ca3af" />
      <line x1="60" y1="260" x2="650" y2="260" stroke="#9ca3af" />

      {/* Y Labels */}
      <text x="20" y="260">0</text>
      <text x="10" y="210">10</text>
      <text x="10" y="160">20</text>
      <text x="10" y="110">30</text>
      <text x="10" y="60">40</text>
      <text x="10" y="30">50</text>

      {/* X Labels */}
      <text x="70" y="290">Seg</text>
      <text x="150" y="290">Ter</text>
      <text x="230" y="290">Qua</text>
      <text x="310" y="290">Qui</text>
      <text x="390" y="290">Sex</text>
      <text x="470" y="290">Sab</text>
      <text x="550" y="290">Dom</text>

      {/* Blue Line */}
      <polyline
        points="80,220 160,180 240,160 320,120 400,140 480,90 560,70"
        fill="none"
        stroke="#2563eb"
        strokeWidth="4"
      />

      {/* Green Line */}
      <polyline
        points="80,240 160,210 240,170 320,150 400,110 480,80 560,60"
        fill="none"
        stroke="#16a34a"
        strokeWidth="4"
      />

      {/* Purple Line */}
      <polyline
        points="80,200 160,190 240,140 320,170 400,120 480,130 560,100"
        fill="none"
        stroke="#9333ea"
        strokeWidth="4"
      />
    </svg>
  </div>
</div>
            <div className="chart-box">
              <h2>Capacidade de Máquina X Equivalência Humana</h2>

              <div className="vertical-bar-chart">
                <div className="bar-row">
                  <span>Cleber</span>
                  <div><strong style={{ width: "45%" }}></strong></div>
                </div>
                <div className="bar-row">
                  <span>Igor</span>
                  <div><strong style={{ width: "70%" }}></strong></div>
                </div>
                <div className="bar-row">
                  <span>João</span>
                  <div><strong style={{ width: "55%" }}></strong></div>
                </div>
                <div className="bar-row">
                  <span>Maria</span>
                  <div><strong style={{ width: "90%" }}></strong></div>
                </div>
                <div className="bar-row">
                  <span>Ana</span>
                  <div><strong style={{ width: "65%" }}></strong></div>
                </div>
                <div className="bar-row">
                  <span>Alex</span>
                  <div><strong style={{ width: "80%" }}></strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;