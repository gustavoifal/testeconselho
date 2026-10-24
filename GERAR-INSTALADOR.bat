@echo off
chcp 65001 >nul
title ArrumaAi - Gerar instalador
echo ============================================
echo   ArrumaAi - gerando o instalador do Windows
echo ============================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo [ERRO] O Node.js nao esta instalado.
  echo Baixe a versao "LTS" em https://nodejs.org , instale (Avancar, Avancar...) e de dois cliques neste arquivo de novo.
  pause
  exit /b 1
)
echo Instalando dependencias (pode demorar alguns minutos)...
call npm ci
if errorlevel 1 goto erro
echo.
echo Rodando os testes...
call npm test
if errorlevel 1 goto erro
echo.
echo Gerando o instalador...
call npm run dist
if errorlevel 1 goto erro
echo.
echo PRONTO! O instalador esta na pasta "release": ArrumaAi-Setup.exe
start "" "release"
pause
exit /b 0
:erro
echo.
echo [ERRO] Algo deu errado. Tire um print desta janela e envie para a Claude.
pause
exit /b 1
