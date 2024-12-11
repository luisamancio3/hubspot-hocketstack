// Criar um arquivo test-meetings.js
const pullDataFromHubspot = require('./worker');

// Função de teste
async function testMeetingsProcessing() {
  try {
    await pullDataFromHubspot();
    console.log('Teste concluído com sucesso');
  } catch (error) {
    console.error('Erro durante o teste:', error);
  }
}

testMeetingsProcessing();