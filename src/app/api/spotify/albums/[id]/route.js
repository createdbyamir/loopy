const API_KEY = process.env.API_KEY
const API_KEY_ID = process.env.API_KEY_ID


export async function GET(request, { params }){
    const { id } = await params;

    // Getting token from Spotify
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
        method: "POST",
        headers: {
            "Content-Type": `application/x-www-form-urlencoded`,
            "Authorization": `Basic ${Buffer.from(`${API_KEY_ID}:${API_KEY}`).toString("base64")}`
        },
        body: `grant_type=client_credentials`
    })
    const tokenData = await response.json();
    
 
    const albumResponse = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
        method: "GET",
        headers: {
            "Authorization": `${tokenData.token_type} ${tokenData.access_token}`
        }
    })
    const albumData = await albumResponse.json();
    console.log(albumData)

    return Response.json({
        albums: albumData
    });

};