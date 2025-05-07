import {fetchApi} from "@/utils/fetch-api.js";

export const createAppointment = async (appointment) => {
    try {
        let response = await fetchApi({
            method: "POST",
            url: `/v1/appointments`,
            body: appointment
        });
        return response.data;
    }catch(e) {
        console.error("Lỗi khi tạo appointment:", e);
    }
}