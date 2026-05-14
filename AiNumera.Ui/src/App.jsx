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
    { name: "John Smith", status: "Active", orders: 24 },
    { name: "Maria Silva", status: "Active", orders: 18 },
    { name: "Alex Brown", status: "Inactive", orders: 7 },
    { name: "Ana Costa", status: "Pending", orders: 12 },
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
              <h3>Distribuição diária de uso por usuário</h3>

              <div className="line-chart">
                <svg viewBox="0 0 500 220">
                  <polyline
                    points="20,170 100,130 180,150 260,90 340,110 460,50"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="4"
                  />
                  <polyline
                    points="20,150 100,100 180,120 260,70 340,85 460,30"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="4"
                  />
                  <polyline
                    points="20,190 100,160 180,130 260,140 340,100 460,80"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="4"
                  />
                  <polyline
                    points="20,120 100,140 180,90 260,110 340,60 460,100"
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
                  <span>Renato</span>
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