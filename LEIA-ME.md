# Acervo

Tracker pessoal das suas digitalizações de LPs, CDs, DVDs, fitas e afins, com busca no Discogs. Roda no navegador, instala na tela inicial do iPhone e abre sem internet para consultar o acervo.

## 1. Publicar no GitHub Pages (uma vez, no computador)

1. Entre em [github.com](https://github.com) (crie uma conta se ainda não tiver).
2. Clique em **New repository**, dê o nome `acervo`, deixe como **Public** e clique em **Create repository**.
3. Na página do repositório, clique em **uploading an existing file**.
4. Abra esta pasta no computador, selecione **tudo o que está dentro dela** (index.html, manifest.json, sw.js e as pastas `icons` e `fonts`) e arraste para a página. Arraste o conteúdo, não a pasta em si, para que o `index.html` fique na raiz do repositório. Clique em **Commit changes**.
5. Vá em **Settings → Pages**. Em **Build and deployment**, escolha *Deploy from a branch*, depois a branch `main` e a pasta `/ (root)`, e clique em **Save**.
6. Em um ou dois minutos o endereço aparece no topo dessa mesma página: `https://SEU-USUARIO.github.io/acervo/`.

O código do app fica público. Os seus dados não: eles ficam salvos só no aparelho em que você usa o app.

## Onde NÃO publicar: Neocities

O Neocities bloqueia, no servidor, qualquer conexão da página com outros sites. O app abre, mas nunca consegue falar com o Discogs. Use o GitHub Pages (acima) ou, se preferir arrastar e soltar, o [Netlify Drop](https://app.netlify.com/drop) ou o Cloudflare Pages. Todos aceitam a pasta do app como está.

## 2. Instalar no iPhone

Abra o endereço no **Safari**, toque em **Compartilhar** e depois em **Adicionar à Tela de Início**. O Acervo passa a abrir em tela cheia, com ícone próprio.

Use sempre pelo ícone da tela de início: no iPhone, o app instalado guarda os dados separado do Safari. Se você já cadastrou algo pelo Safari, exporte o backup lá e importe no app.

## 3. Conectar o Discogs

1. No Discogs, abra **Configurações → Desenvolvedores** ([discogs.com/settings/developers](https://www.discogs.com/settings/developers)) e gere um token pessoal.
2. No Acervo, toque em **Ajustes**, cole o token e toque em **Salvar e testar**.

O token fica salvo só no aparelho e é enviado apenas ao Discogs. Sem token, colar um link do Discogs ainda funciona, mas sem capa e sem busca por nome.

## Como usar

- **Adicionar**: busque pelo nome do álbum, cole um link do Discogs ou digite o código de barras. Em *Álbuns* você escolhe o disco e depois, se quiser, a prensagem exata; em *Edições* a busca já mostra cada prensagem e pode ser filtrada por formato.
- **Mídia de origem**: vinil, CD, DVD, Blu-ray, K7, VHS ou outro, com detalhe (ex.: LP 12" 33⅓ RPM).
- **Status**: na fila, em andamento, concluído ou refazer. Ao marcar *Concluído*, a data de hoje é preenchida (dá para mudar).
- **Ficha técnica**: formato do arquivo, equipamento, estado da mídia (escala Goldmine, a mesma do Discogs), onde está o arquivo e notas. Os campos sugerem o que você já usou antes.
- **Mesmo álbum em outra mídia**: abra o item e use *Duplicar para outra mídia*.

## Backup e outros aparelhos

Cada aparelho guarda os próprios dados. Em **Ajustes → Backup**:

- **Exportar backup** gera um arquivo `.json` com tudo. No iPhone, salve em Arquivos ou no iCloud Drive.
- **Importar backup** junta esse arquivo ao acervo do aparelho: itens novos entram e, quando o mesmo item existe nos dois lados, fica a versão editada por último. É assim que se leva o acervo do iPhone para o computador e vice-versa.
- **Exportar planilha (CSV)** abre no Excel ou no Google Planilhas.

## Atualizar o app

Substitua os arquivos no repositório pelos da nova versão. O app se atualiza sozinho na próxima vez que abrir com internet.

## Créditos

Dados de discos fornecidos pelo [Discogs](https://www.discogs.com). Fontes Archivo e Courier Prime sob a SIL Open Font License (licenças na pasta `fonts`).
