
export const getProducts = async () => {
    const response = await fetch('http://192.168.131.101:8080/dca/api/plants');
    if (!response.ok) {
        throw new Error('no funciona la red, lo sientoooo');
    }
    const data = await response.json();
    return data;
}