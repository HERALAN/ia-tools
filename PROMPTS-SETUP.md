# Estructura de Prompts Independientes - IA Tools

## Descripción General

Los prompts han sido extraídos del archivo HTML principal y colocados en archivos independientes para mejor mantenibilidad y escalabilidad.

## Archivos Creados

### 1. **prompts.json**
Archivo JSON que contiene la estructura completa de todos los prompts organizados por módulo:
- **p1**: Delimitar Capítulo por Temas
- **p2_sencillo**: Bosquejo Sencillo
- **p2_logico**: Bosquejo Lógico
- **p2_hermeneutico**: Bosquejo Hermenéutico
- **p2_exegetico**: Bosquejo Exegético
- **p3**: Explicar Doctrina de la Confesión
- **p4**: Dudas sobre Fe o Práctica
- **p5**: Creador de Speachs Litúrgicos
- **p6**: Análisis Exegético
- **p7**: Análisis Gramatical
- **p8**: Análisis Literario y Retórico
- **p9**: Análisis Doctrinal de Canciones/Cantos

### 2. **prompts-loader.js**
Archivo JavaScript que carga `prompts.json` y lo transforma en la estructura esperada por el HTML.

Función principal: `cargarPromptsDesdeJSON()`
- Lee el archivo JSON
- Construye el objeto `baseDatosPrompts` esperado
- Retorna un objeto listo para usar

## Cómo Implementar en HTML

### Paso 1: Incluir el script en el HTML
Agregá esta línea antes del cierre `</body>` del `index.html`:

```html
<script src="./prompts-loader.js"></script>
```

### Paso 2: Modificar la inicialización
Dentro del `<script>` principal del HTML, reemplazá:

```javascript
// ANTES (eliminá esto):
const baseDatosPrompts = { ... };

// DESPUÉS (agregá esto):
let baseDatosPrompts = null;

// Al cargar la página, cargá los prompts:
document.addEventListener('DOMContentLoaded', async function() {
    baseDatosPrompts = await cargarPromptsDesdeJSON();
    aplicarTemaGuardado();
});
```

### Paso 3: Estructura de carpetas
Asegúrate de tener la siguiente estructura:

```
/IA_Tools
├── index.html
├── prompts.json          ← Archivo con todos los prompts
├── prompts-loader.js     ← Script que carga los prompts
└── PROMPTS-SETUP.md      ← Este archivo
```

## Ventajas

✅ **Mantenimiento**: Editar prompts sin tocar código HTML/JS  
✅ **Legibilidad**: HTML mucho más limpio  
✅ **Escalabilidad**: Agregar nuevos prompts es trivial  
✅ **Separación**: UI ≠ Contenido  
✅ **Control de versiones**: Cambios de prompts vs código separados  

## Cómo Editar un Prompt

1. Abrí `prompts.json`
2. Encuentra el prompt que quieres editar (busca por clave: `p1`, `p2_sencillo`, etc.)
3. Edita el campo `"plantilla"`
4. Guardá el archivo
5. Los cambios se reflejarán automáticamente al recargar la página

## Ejemplo: Editar Prompt de Bosquejo Sencillo

```json
{
  "p2_sencillo": {
    "titulo": "Bosquejo Sencillo",
    "plantilla": "AQUÍ VA TU NUEVO CONTENIDO..."
  }
}
```

## Notas Importantes

- Los archivos **deben estar en la misma carpeta** para que funcione la carga
- El navegador debe permitir acceso a archivos locales (algunos navegadores restringen esto)
- Si usas un servidor local (recomendado), no habrá problemas

## Servidor Local Recomendado

Si trabajás con `file://`, algunos navegadores pueden bloquear la carga de JSON.

Alternativa: Usá un servidor local simple:

**Python 3:**
```bash
python -m http.server 8000
```

**Node.js (http-server):**
```bash
npx http-server
```

Luego accedé a: `http://localhost:8000`

## Próximos Pasos Sugeridos

- ✅ Extraer prompts a JSON
- ✅ Crear loader de prompts
- ⏳ (Opcional) Crear interfaz para agregar/eliminar prompts dinámicamente
- ⏳ (Opcional) Crear API REST para gestionar prompts
- ⏳ (Opcional) Exportar/importar prompts personalizados

---

**Mantenedor**: Sistema IA Tools  
**Última actualización**: Agosto 2026
