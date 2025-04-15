export async function loadModelData() {
    try {
        const res = await fetch('data/model.json');
        const models = await res.json();
        console.log(models); 
        return models;
    } catch (err) {
        console.error('Failed to load model data:', err);
    }
}
