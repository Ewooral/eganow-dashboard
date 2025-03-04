import {fetchDashboardData} from "@/api/dashboardAnalytics";
import {FetchDashboardDataParams} from "@/types/BizCollectDataTypes";
import {useQuery} from "@tanstack/react-query";
import { useEffect, useState } from 'react';
import { usePopoverStore } from '@/store';


export function useDashboardData(filters: Record<string, any>) {
  return useQuery({
     // ✅ Unique cache key based on filters
    queryKey: ['dashboardData', filters],
    // ✅ API call
    queryFn: () => fetchDashboardData(<FetchDashboardDataParams>filters), 
    // ✅ Cache data for 5 minutes
    staleTime: 1000 * 60 * 5, 
     // ✅ Retry on failure
    retry: 2,
    // ✅ Only fetch if filters exist
    enabled: !!filters, 
  })}




/**
 * Custom hook to update the status of a section based on the provided data.
 *
 * @param data - The data to evaluate for determining the section status. If the data is an empty array, the status will be set to "PENDING". Otherwise, it will be set to "COMPLETED".
 * @param sectionId - The unique identifier of the section whose status needs to be updated.
 *
 * @returns void
 */
const useSectionStatus = (data: unknown, sectionId: string) => {
  const updateSectionStatus = usePopoverStore((state) => state.updateSectionStatus);
  const sections = usePopoverStore((state) => state.sections)
  const [tabsCompleted, setTabsCompleted]  = useState<number | undefined>(undefined)
  const completedSections = sections.filter((section) => section.status === "COMPLETED").length;

  useEffect(() => {
    if (Array.isArray(data) && data.length < 1) {
      updateSectionStatus(sectionId, "PENDING");
    } else {
      updateSectionStatus(sectionId, "COMPLETED");
    }
  }, [data, sectionId, updateSectionStatus]);

  useEffect(() => {
    if(completedSections){
      setTabsCompleted(completedSections)
    }
  }, [completedSections, tabsCompleted])

  useEffect(() => {
   console.log("TABS COMPLETED::: ", tabsCompleted)
  }, [completedSections, tabsCompleted])
  
  return {
    sections,
    tabsCompleted,
    completedSections,
  };
  

};

 


export default useSectionStatus;