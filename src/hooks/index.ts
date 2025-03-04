import {fetchDashboardData} from "@/api/dashboardAnalytics";
import {FetchDashboardDataParams} from "@/types/BizCollectDataTypes";
import {useQuery} from "@tanstack/react-query";

export function useDashboardData(filters: Record<string, any>) {
  return useQuery({
    queryKey: ['dashboardData', filters], // ✅ Unique cache key based on filters
    queryFn: () => fetchDashboardData(<FetchDashboardDataParams>filters), // ✅ API call
    staleTime: 1000 * 60 * 5, // ✅ Cache data for 5 minutes
    retry: 2, // ✅ Retry on failure
    enabled: !!filters, // ✅ Only fetch if filters exist
  })}
