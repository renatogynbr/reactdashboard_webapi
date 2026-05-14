namespace AiNumera.Api.Dtos
{
    public class DashboardResponse
    {
        public List<HistoryPanelDto> HistoryPanels { get; set; } = [];
        public List<UserDto> Users { get; set; } = [];
        public List<LineChartDto> LineChart { get; set; } = [];
        public List<BarChartDto> BarChart { get; set; } = [];
    }
}
