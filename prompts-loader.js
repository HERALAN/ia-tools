// Cargador de prompts desde archivo JSON externo
// Este archivo se encarga de leer prompts.json y poblar baseDatosPrompts

async function cargarPromptsDesdeJSON() {
    try {
        // Ruta relativa al archivo JSON
        const response = await fetch('./prompts.json');
        
        if (!response.ok) {
            throw new Error(`Error al cargar prompts.json: ${response.status}`);
        }
        
        const promptsData = await response.json();
        
        // Construir baseDatosPrompts con la estructura esperada
        const baseDatosPrompts = {
            'p1': {
                titulo: promptsData.p1.titulo,
                descripcion: promptsData.p1.descripcion,
                pregunta: promptsData.p1.pregunta,
                plantilla: promptsData.p1.plantilla
            },
            'p2': {
                titulo: promptsData.p2_sencillo.titulo.replace('Bosquejo Sencillo', '2. Diseñar Bosquejos para predicar'),
                descripcion: "Crea un bosquejo bíblico para un sermón con 4 opciones de análisis.",
                pregunta: "¿Podrías introducir un tema o cita bíblica?",
                plantillaBosquejoSencillo: promptsData.p2_sencillo.plantilla,
                plantillaBosquejoLogico: promptsData.p2_logico.plantilla,
                plantillaBosquejoHermeneutico: promptsData.p2_hermeneutico.plantilla,
                plantillaBosquejoExegetico: promptsData.p2_exegetico.plantilla
            },
            'p3': {
                titulo: promptsData.p3.titulo,
                descripcion: promptsData.p3.descripcion,
                pregunta: promptsData.p3.pregunta,
                plantilla: promptsData.p3.plantilla
            },
            'p4': {
                titulo: promptsData.p4.titulo,
                descripcion: promptsData.p4.descripcion,
                pregunta: promptsData.p4.pregunta,
                plantilla: promptsData.p4.plantilla
            },
            'p5': {
                titulo: promptsData.p5.titulo,
                plantilla: promptsData.p5.plantilla
            },
            'p6': {
                titulo: promptsData.p6.titulo,
                descripcion: promptsData.p6.descripcion,
                pregunta: promptsData.p6.pregunta,
                plantilla: promptsData.p6.plantilla
            },
            'p7': {
                titulo: promptsData.p7.titulo,
                descripcion: promptsData.p7.descripcion,
                pregunta: promptsData.p7.pregunta,
                plantilla: promptsData.p7.plantilla
            },
            'p8': {
                titulo: promptsData.p8.titulo,
                descripcion: promptsData.p8.descripcion,
                pregunta: promptsData.p8.pregunta,
                plantilla: promptsData.p8.plantilla
            },
            'p9': {
                titulo: promptsData.p9.titulo,
                descripcion: promptsData.p9.descripcion,
                pregunta: promptsData.p9.pregunta,
                plantilla: promptsData.p9.plantilla
            }
        };
        
        return baseDatosPrompts;
        
    } catch (error) {
        console.error('Error cargando prompts:', error);
        alert('No se pudo cargar el archivo de prompts. Asegúrate de que prompts.json esté en la misma carpeta que index.html');
        return null;
    }
}

// Exportar función para uso en HTML
window.cargarPromptsDesdeJSON = cargarPromptsDesdeJSON;
