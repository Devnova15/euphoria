import {CONFIG} from "../config/index.js";

export const buildQueryString = (params)=>
    `https://api.visicom.ua/data-api/5.0/core/distance.json?origin=30.42612,50.45111&destination=${params.lon},${params.lat}&key=${CONFIG.VISICOM_API_KEY}`
