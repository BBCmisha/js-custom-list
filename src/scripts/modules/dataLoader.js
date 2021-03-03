import { setData } from '../storage/jsonData.js';

const request = (url) => new Promise((resolve, reject) => {
    let httpRequest = new XMLHttpRequest();
    
    httpRequest.open('GET', url);
    httpRequest.responseType = 'json';
    httpRequest.send();
    httpRequest.onload = function() { resolve(httpRequest) };
    httpRequest.onerror = function(err) { reject(err) };
});


export const dataLoader = async (fileUrl) => {
    const response = await request(fileUrl);

    if (response.status != 200) {
        console.log(`[ERROR] ${response.status}: ${response.statusText}`);
    } else {
        setData(response.response);
        console.log('[INFO] Data successfully loaded!');
    }

}
