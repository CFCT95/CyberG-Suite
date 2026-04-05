const fs = require('fs');
const path = require('path');
const assert = require('assert');

(async () => {
    console.log('\n🚀 Iniciando pruebas unitarias de estructura (Native Node.js)...');
    try {
        const filePath = path.resolve(__dirname, '../index.html');
        console.log(`Buscando archivo en: ${filePath}`);
        
        // Cargar el archivo localmente
        const htmlContent = fs.readFileSync(filePath, 'utf8');
        
        // Extraer elementos clave usando puras validaciones preconstruidas
        const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/i);
        const h1Match = htmlContent.match(/<h1>(.*?)<\/h1>/i);
        
        // Evaluar condiciones de prueba
        assert.ok(titleMatch, 'La etiqueta <title> debería existir en el documento.');
        const title = titleMatch[1].trim();
        console.log(`Título de la página: "${title}"`);
        assert.strictEqual(title, 'CyberG Suite', `El título es incorrecto. Encontramos "${title}"`);
        
        assert.ok(h1Match, 'La etiqueta <h1> debería existir en el documento.');
        const h1Text = h1Match[1].trim();
        console.log(`Encabezado de la página: "${h1Text}"`);
        assert.ok(h1Text.includes('Bienvenido a CyberG Suite'), "El texto del encabezado H1 no coincide.");
        
        console.log('✅ [Éxito] Todas las validaciones del DOM pasaron correctamente.\n');
        
    } catch (error) {
        console.error('\n❌ [Fallo en Prueba]', error.message);
    }
})();
