const API_URL = "https://localhost:7154/api/Dashboard";

export async function getDashboardData() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error loading dashboard data");
  }

  return await response.json();
}