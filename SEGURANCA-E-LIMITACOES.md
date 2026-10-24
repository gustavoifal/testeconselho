# Segurança, privacidade e limitações da primeira versão

## O que já está implementado
- Electron com `contextIsolation` ligado, `nodeIntegration` desligado, `sandbox` ligado; a interface só chama uma lista fechada de operações (preload), e o processo principal valida a origem e os dados de cada chamada.
- Interface sem acesso direto a disco ou banco. Pastas de exportação só podem ser as escolhidas pelo usuário na janela do sistema.
- Política de conteúdo (CSP) na interface; texto digitado é escapado na prévia (iframe sem scripts).
- Banco local SQLite com chaves, índices e restrições; **gatilhos** impedem alterar/excluir documentos emitidos, alterar o registro de auditoria ou fazer a numeração retroceder. Numeração e emissão ocorrem na mesma transação (tudo ou nada); falha ao gravar no disco desfaz a operação.
- Senha de administrador guardada com scrypt + sal (nunca em texto puro); bloqueio após 5 tentativas erradas; sessão expira em 15 min sem uso.
- Imagens (logomarca, assinatura) só PNG/JPG, validadas pelo conteúdo, com limite de tamanho.
- Backups com senha usam AES-256-GCM; restauração valida integridade e guarda cópia de segurança antes.
- Sem telemetria, sem envio de documentos, sem IA externa; PDF e DOCX são gerados localmente.
- Instância única do aplicativo; navegação externa bloqueada.

## Limitações conhecidas (leia antes de usar com dados reais)
1. **Os dados do banco não são criptografados em repouso.** Quem tiver acesso à conta do Windows pode ler o arquivo. Para implantação institucional use criptografia de disco (BitLocker), conta de usuário protegida e backups com senha.
2. **Um único perfil de administrador** (senha única). Não há usuários individuais nem permissões por pessoa. A auditoria registra "administrador" ou "usuário", não a pessoa.
3. **A senha de administrador não é recuperável.**
4. **O instalador NÃO é assinado digitalmente** (não há certificado configurado). O Windows pode exibir o aviso "SmartScreen / editor desconhecido"; é preciso clicar em "Mais informações > Executar assim mesmo". Para distribuição institucional, adquira um certificado de assinatura de código.
5. **Imagem de assinatura manuscrita não é assinatura eletrônica/digital com validade jurídica.** O sistema não gera assinatura digital (ICP-Brasil ou equivalente).
6. **Pagináção do Word e do PDF pode diferir** em textos muito longos (no teste, um texto de 8 páginas no PDF virou 9 no Word, pois o Word e o motor do PDF quebram linhas de formas diferentes). Confira o PDF final.
7. Apenas **um modelo (Ofício)** na primeira versão; novos modelos exigem adicionar um layout no código.
8. Não é uma solução de gestão de casos, prontuários ou atendimento.
9. A proteção de dados pessoais (LGPD) exige também medidas organizacionais (política de acesso, retenção, descarte, treinamento). Guardar dados localmente não resolve essas obrigações por si só.
10. Os dados de demonstração são fictícios. **Não use dados reais de crianças, adolescentes ou famílias em testes.**
11. O aplicativo foi testado no Linux (Electron real com tela virtual) e empacotado em Linux. **O instalador do Windows e a versão instalada no Windows ainda precisam ser testados por você** (veja o guia).
