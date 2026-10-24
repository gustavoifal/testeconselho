# Guia passo a passo (sem precisar saber programar)

## Caminho A — Gerar o instalador pelo GitHub (recomendado)
1. Crie uma conta gratuita em https://github.com (botão "Sign up").
2. Depois de entrar, clique no **+** no canto superior direito > **New repository**. Em "Repository name" escreva `arrumaai`. Marque **Private** (privado). Clique **Create repository**.
3. Na tela seguinte clique em **uploading an existing file**.
4. No seu computador, extraia (descompacte) o arquivo `ArrumaAi-projeto.zip`. Abra a pasta e selecione **tudo** (Ctrl+A), inclusive a pasta `.github`. Arraste para a página do GitHub.
5. Espere terminar o envio. Role a página e clique **Commit changes**.
6. Clique na aba **Actions**. Se pedir, clique em "I understand my workflows, go ahead and enable them". O trabalho começa sozinho (ícone amarelo girando). Leva uns 5 a 10 minutos. Se não começar: clique em "Gerar instalador do Windows" > **Run workflow**.
7. Quando aparecer um ✔ verde, clique no nome da execução e, em **Artifacts** (no fim da página), baixe **ArrumaAi-Setup**. Descompacte o zip: dentro está `ArrumaAi-Setup.exe`.
8. Se aparecer ✖ vermelho: tire um print da página e envie para a Claude.

## Caminho B — Gerar no seu PC (plano B)
1. Instale o Node.js "LTS" de https://nodejs.org (Avançar, Avançar... Concluir).
2. Extraia o zip, abra a pasta e dê dois cliques em **GERAR-INSTALADOR.bat**.
3. Espere. No fim abre a pasta `release` com `ArrumaAi-Setup.exe`. Se der erro, tire um print da janela preta.

## Instalar e testar
1. Dê dois cliques em `ArrumaAi-Setup.exe`. O Windows pode avisar "editor desconhecido" (o instalador não é assinado): clique em **Mais informações** > **Executar assim mesmo**.
2. Abra o **ArrumaAí** pelo atalho da área de trabalho.
3. Teste nesta ordem e anote/printe o que estranhar:
   - Início: veja o serviço de demonstração.
   - **Novo documento**: preencha, escolha "Quem vai assinar?" e clique **Emitir documento**.
   - **Exportar**: escolha uma pasta, deixe Word e PDF marcados, clique Exportar. Abra os dois arquivos.
   - **Histórico**: confira o documento e teste a pesquisa.
   - **Configurações > Instituição**: o app pedirá para criar a senha de administrador. Guarde essa senha.
   - Feche e abra o app: os dados devem continuar lá.
4. Para atualizar no futuro: gere um novo instalador e instale por cima. Seus dados não são apagados.

## Antes de usar com dados reais
Leia `SEGURANCA-E-LIMITACOES.md`.
