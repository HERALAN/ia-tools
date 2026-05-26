# IA Tools - Arquitectos del Pensamiento

## 📋 Descripción General

IA Tools es una aplicación web para generar análisis bíblicos avanzados usando inteligencia artificial. Integra 9 módulos especializados en exégesis, hermenéutica, análisis teológico y doctrinal.

## 🏗️ Estructura Actual (Actualizada)

### Archivos Principales
- **index.html** - Aplicación principal (UI + lógica JavaScript)
- **prompts.json** - Base de datos centralizada con todos los prompts (NUEVO)
- **prompts-loader.js** - Script que carga prompts desde JSON (NUEVO)

### Datos
- Todos los 9 módulos y sus plantillas están organizados en `prompts.json`
- El HTML original mantiene los datos inline como fallback
- Carga asincrónica: el navegador intenta cargar desde JSON, con fallback automático

## ✨ Características Principales

### Módulos Incluidos
1. **Delimitar Capítulo por Temas** - División de capítulos en perícopes predicables
2. **Diseñar Bosquejos para predicar** - 4 tipos de bosquejos:
   - Bosquejo Sencillo (estilo John MacArthur)
   - Bosquejo Lógico (silogismos doctrinales)
   - Bosquejo Hermenéutico (análisis profundo)
   - Bosquejo Exegético (método exhaustivo)
3. **Explicar Doctrina** - Análisis de la Confesión de Fe de Londres 1689
4. **Dudas sobre Fe o Práctica** - Resolución teológica con rigor académico
5. **Speachs Litúrgicos** - Generador de textos para momentos de culto
6. **Análisis Exegético** - Método gramatical-histórico-teológico
7. **Análisis Gramatical** - Análisis profundo en idioma original
8. **Análisis Literario y Retórico** - Método de E.W. Bullinger
9. **Análisis de Cantos/Himnos** - Evaluación doctrinal de canciones

## 🚀 Cómo Usar

### Opción 1: Archivo Local (recomendado)
1. Descargar todos los archivos en la misma carpeta
2. Abrir `index.html` en navegador

### Opción 2: Servidor Local
Si el navegador bloquea acceso a archivos:

**Python 3:**
```bash
cd /ruta/al/proyecto
python -m http.server 8000
```

**Node.js (http-server):**
```bash
npx http-server
```

Luego abrir: `http://localhost:8000`

## 🔧 Configuración de la Aplicación

### Cómo Cambiar Prompts
1. Abrir `prompts.json`
2. Buscar el módulo deseado (p1, p2_sencillo, etc.)
3. Editar el campo `"plantilla"`
4. Guardar y recargar la página

### Tema (Modo Claro/Oscuro)
- Se guarda automáticamente en localStorage
- Botón de toggle en la interfaz

## 📊 Nuevo Sistema de Mantenimiento

### Ventajas de la Nueva Arquitectura

✅ **Separación de Responsabilidades**
- Contenido (prompts.json) separado de lógica (HTML/JS)

✅ **Mantenimiento Simplificado**
- Editar prompts sin tocar código

✅ **Escalabilidad**
- Fácil agregar nuevos módulos o variantes

✅ **Versionado**
- Cambios de contenido independientes de código

✅ **Performance**
- Datos cargados una sola vez al iniciar

## 🔐 Seguridad y Compatibilidad

- ✅ Sin depedencias externas
- ✅ Funciona en cualquier navegador moderno
- ✅ Fallback automático si JSON falla
- ✅ Datos inline preservados para compatibilidad

## 📝 Notas de Desarrollo

### Archivos Técnicos
- `PROMPTS-SETUP.md` - Documentación técnica de integración
- Fallback de datos inline preservado en index.html

### Próximos Pasos Opcionales
- Exportar/importar prompts personalizados
- Crear panel de administración
- API REST para sincronización en la nube

---

**Última actualización:** Agosto 2026
**Desarrollado para:** Iglesia Cristiana Elim
**Responsable:** Pastor Antonio Hermenegildo Alejo