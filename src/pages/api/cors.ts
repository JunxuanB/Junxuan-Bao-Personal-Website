export const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // Allow requests from
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Allow the HTTP methods used
    "Access-Control-Allow-Headers": "Content-Type, Authorization", // Allow headers used
};

export const options = {
    status: 204,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Max-Age': '86400',
    },
};