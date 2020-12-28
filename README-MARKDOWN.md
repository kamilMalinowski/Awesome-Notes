# MARKDOWN
## Nagłówki:

# lub ====== - nagłówek (odpowiednik h1)
## lub ------ - nagłówek (odpowiednik h2)
### - nagłówek (odpowiednik h3)
#### - nagłówek (odpowiednik h4)
##### - nagłówek (odpowiednik h5)
##### - nagłówek (odpowiednik h6)

## Style:

*tekst* lub _tekst_ - kursywa

**tekst** lub __tekst__ - pogrubienie

***tekst*** lub **_tekst_** lub inna kombinacja - kursywa i pogrubienie

~~tekst~~ - przekreślenie

## Alerty:

> [!NOTE]
> tekst - notatka

> [!TIP]
> tekst - porada

> [!IMPORTANT]
> tekst - ważne

> [!CAUTION]
> tekst - uwaga

> [!WARNING]
> tekst - ostrzeżenie

## Linki:

[opis linku](link) - odpowiednik a(link)
 
[opis linku](link "tytuł") - link z tytułem
   
[opis linku] [tekst referencyjny bez rozróżniania wielkości liter] - styl referencyjny
 
[opis linku](../blob/master/LICENSE) - względny odnośnik do pliku repozytorum

[opis linku][1] - Możesz użyć numerów dla definicji linków w stylu odniesienia

[opis linku] - pusty link

link - link bez znaczników

## Obrazy:

![alt text](link do obrazu "tytuł") - odpowiednik obrazu img

![alt text][logo] - [logo]: link do obrazu "tytuł" - link referencyjny

## Listy:
              
- lub * lub + tekst - lista nieuporządkowana (ul)

1. tekst - lista uporządkowana (ol)

... - wcięcie w listach / sublistach

## Tabela:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Ogólne:

`polecenie / jednolinijkowy kod` - wyróżniona treść

```javascript 
blok kodu 
``` 

- tekst w bloku. W zależności od przeglądarki lub programu wpisując na początku kod (np.javascript) dostajemy kolory z edytora

> tekst - wcięcie do cytatu

.md - pliki Markdown mają rozszerzenie .md
