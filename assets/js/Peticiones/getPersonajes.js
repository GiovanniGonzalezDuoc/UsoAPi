export const getPersonajes = async () => {
    try {
        const publicKey = "5d6f114c5cf5ed08ff6ac73a9f124bef";
        const privateKey = "18aef078e0eab7562464a3e5da8af00f96db7bda";
        const ts = new Date().getTime(); // Generar un timestamp
        const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString(); // Calcular el hash MD5

        const url = `https://gateway.marvel.com:443/v1/public/comics?apikey=${publicKey}&ts=${ts}&hash=${hash}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
}

