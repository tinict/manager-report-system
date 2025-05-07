import {fetchApi} from "@/utils/fetch-api.js";

export const getPackageById = async (facilityId, packageId, examineId) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `/v1/medical-services/facilities/${facilityId}/health-packages/${packageId}/services?examineId=${examineId}`,
        });
        return response.data;
    }catch(e) {
        console.error("Error fetching packages: ", e);
    }
}