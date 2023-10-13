## 👏 Automação Playwright com JavaScript
Projeto inicial feito pelo Henrique Breda, utilizando ele para aprimorar meus conhecimentos em playwright.

## 💡 Technologies used

- [x] Javascript
- [x] Playwright

## 🚀  Documentação do site

url: https://the-internet.herokuapp.com


## 🌎 License

This project is under the MIT license. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for more details.




# Sobre o Playwright


## Navegadores suportados

Playwright suporta os principais navegadores:

- Chromium
- Google Chrome
- Microsoft Edge
- Mozila Firefox
- Safari (Webkit)

> Para mais detalhes acesse a documentação na seção [Browsers](https://playwright.dev/docs/browsers)

## CLI - Command Line Interface

Executa todos os testes

```sh
npx playwright test
```

Inicia o modo de interface para execução dos testes

```sh
npx playwright test --ui
```

Executa todos os testes em um navegador específico

```sh
npx playwright test --project=chromium
# caso queira executar em mais de um navegador
npx playwright test --project=chromium --project=firefox
```

Executa apenas uma classe de teste especifica

```sh
npx playwright test example
```

Executa testes por [TAG](https://playwright.dev/docs/test-annotations#tag-tests)

```sh
npx playwright test --grep @fast
```

Executa os testes em modo `debug`:

```sh
npx playwright test --debug
```

Executar todos os testes gerando o Trace

```sh
npx playwright test --trace on
```

Exibir o relatório de execução:

```sh
npx playwright show-report
```
