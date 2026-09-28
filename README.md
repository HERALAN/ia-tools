# ia-tools

Para que la opción **Bosquejo sencillo** pueda cargar `Bosquejo_fast.md`, abre el proyecto mediante un servidor HTTP y no directamente como archivo. Por ejemplo, desde esta carpeta ejecuta:

```powershell
python -m http.server 8000
```

Después visita `http://localhost:8000`.

El botón **Prompt Presentaciones** copia la instrucción de `Prompt_Presentaciones.md`. Edita ese archivo para personalizar el prompt.

Los módulos 2 y 4 incorporan automáticamente el contenido de `tesis_builder.md` al generar prompts. Si utilizas `promt_bosquejoTeologico.md` o `promt_INVESTIGADOR_biblico.md` fuera de la aplicación, incluye también ese archivo para aplicar el constructor compartido.