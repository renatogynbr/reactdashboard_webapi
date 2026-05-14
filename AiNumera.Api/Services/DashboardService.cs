using AiNumera.Api.Interfaces;
using AiNumera.Api.Dtos;

namespace AiNumera.Api.Services
{
    public class DashboardService : IDashboardService
    {
        public DashboardResponse GetDashboard()
        {
            return new DashboardResponse
            {
                HistoryPanels =
                [
                    new HistoryPanelDto
                    {
                        Title = "Tempo Total Ativo",
                        Value = "65h 55min",
                        Footer = "Tempo total no Período",
                        ClassName = "panel-yellow"
                    },
                    new HistoryPanelDto
                    {
                        Title = "Média por Usuário",
                        Value = "16h 29mi",
                        Footer = "Média no Período",
                        ClassName = "panel-green"
                    },
                    new HistoryPanelDto
                    {
                        Title = "Sessões por Usuário",
                        Value = "16",
                        Footer = "Média de Sessões",
                        ClassName = "panel-blue"
                    },
                    new HistoryPanelDto
                    {
                        Title = "Usuários Ativos",
                        Value = "3/4",
                        Footer = "Usuários com Login",
                        ClassName = "panel-blue2"
                    },
                    new HistoryPanelDto
                    {
                        Title = "Tempo Máquina",
                        Value = "28h 25min",
                        Footer = "Processamento Automático",
                        ClassName = "panel-purple"
                    },
                    new HistoryPanelDto
                    {
                        Title = "Total Economizado",
                        Value = "R$ 91.648,00",
                        Footer = "Economia Mensal Estimada",
                        ClassName = "panel-green2"
                    }
                ],

                Users =
                [
                    new UserDto
                    {
                        Name = "João Batista",
                        Status = "Active",
                        Orders = 24
                    },
                    new UserDto
                    {
                        Name = "Maria Silva",
                        Status = "Active",
                        Orders = 18
                    },
                    new UserDto { Name = "Ana Clara", Status = "Pending", Orders = 28 },
                    new UserDto { Name = "Simone Moura", Status = "Pending", Orders = 12 }
                ],

                LineChart =
                    [
                        new LineChartDto { Day = "Seg", Users = 40, Clients = 30, Companies = 20 },
                        new LineChartDto { Day = "Ter", Users = 55, Clients = 45, Companies = 30 },
                        new LineChartDto { Day = "Qua", Users = 48, Clients = 60, Companies = 45 },
                        new LineChartDto { Day = "Qui", Users = 70, Clients = 50, Companies = 60 },
                        new LineChartDto { Day = "Sex", Users = 65, Clients = 75, Companies = 55 },
                        new LineChartDto { Day = "Sáb", Users = 80, Clients = 70, Companies = 68 },
                        new LineChartDto { Day = "Dom", Users = 90, Clients = 85, Companies = 72 }
                    ],

                BarChart =
                    [
                        new BarChartDto { Name = "João", Value = 45 },
                        new BarChartDto { Name = "Maria", Value = 70 },
                        new BarChartDto { Name = "Ana", Value = 55 },
                        new BarChartDto { Name = "Simone", Value = 90 }
                    ]
            };
        }
    }
}
