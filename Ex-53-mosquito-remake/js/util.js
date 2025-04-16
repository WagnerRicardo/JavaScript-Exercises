export function getValidatedPlayerSettings() {
    const data = localStorage.getItem('playerSettings');

    if (!data) return null;

    try {
        return JSON.parse(data);
    } catch (error) {
        return null;
    }

}

export function validaJSON(data){
    try{
        JSON.parse(data);
        return true;
    }catch (err){
        return false;
    }
}