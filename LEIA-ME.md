# ArrumaAí — automação de documentos oficiais (MVP)

Aplicativo desktop para Windows 10/11 que gera ofícios padronizados (cabeçalho, número sequencial, assinaturas, rodapé) em **Word (.docx)** e **PDF**, com histórico e banco de dados local.

**Primeira vez? Leia `GUIA-PASSO-A-PASSO.md`** (feito para quem não é da área técnica).

## O que o MVP faz
- Vários serviços (órgãos) na mesma plataforma; vem com um serviço de **demonstração com dados fictícios**.
- Cadastro institucional (nome, endereço, telefone, e-mail, cabeçalho, rodapé, logomarca, fonte).
- **Responsáveis e Assinaturas**: cadastrar, editar, ativar/desativar, remover da seleção (sem apagar o histórico), definir quem assina cada modelo e quantas assinaturas (1 a 4). Campo "Quem vai assinar?" dinâmico.
- Ofício com campos obrigatórios por modelo, prévia ao vivo, numeração automática (`001/2026`), reinício anual configurável.
- Documento emitido guarda uma **cópia** de nomes, cargos e dados da instituição: alterar o cadastro depois não muda documentos antigos. Documentos emitidos não podem ser alterados nem excluídos (garantido no banco de dados).
- Cancelamento com motivo; número cancelado **nunca** é reaproveitado.
- Histórico com busca (número, destinatário, assunto, período, situação), rascunhos, consulta da sequência.
- Exportação DOCX e PDF (sem internet), escolha de pasta e nome, confirmação antes de substituir.
- Backup manual (com senha opcional, criptografado) e automático diário; restauração.
- Modo administrador com senha; registro de auditoria.

## Comandos (desenvolvimento)
```
npm ci               # instala dependências
npm test             # testes automáticos (regras de negócio e exportação)
npm run typecheck    # verificação de tipos
npm start            # compila e abre o aplicativo
npm run dist         # gera release/ArrumaAi-Setup.exe (no Windows)
npm run test:integration   # testa PDF/DOCX com o Electron real
```
Dados do usuário ficam em `%APPDATA%\ArrumaAí\dados\` (separados do programa: atualizar ou reinstalar não apaga nada).

## Estrutura
```
src/main/db        banco (SQLite via sql.js, sem módulo nativo), migrações versionadas
src/main/services  regras de negócio: registro, responsáveis, numeração, documentos, backup, auth, auditoria
src/main/docs      modelo (layout), geração de DOCX, HTML/PDF, exportação
src/main/ipc       ponte segura (lista fechada de canais, validação, origem confiável)
src/preload        API mínima exposta à interface
src/renderer       interface React (páginas e componentes)
tests              testes automatizados
```
Segurança e limitações: veja `SEGURANCA-E-LIMITACOES.md`.
