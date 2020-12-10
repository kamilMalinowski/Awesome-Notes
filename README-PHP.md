# Co ten PHP?

## Notatki PHP - podstawy

### Podstawowe zasady:
```php
<?php znaczniki php ?>

<?php

//komentarze liniowe

/*
komentarze
blokowe
*/

echo - znaczkin do wywołania zawartości w wyszukiwarce
echo ""; - zmienne+ inne typy zmiennych
echo ''; - string/tekst
. - znak konkatenacji

$zmienne; lub $_zmienne;

STAŁE; lub _STAŁE;
define('CONST', 'value'); - definiujemy stałą

_GET; - stała globalna GET
_POST; - stała globalna POST

isset(); - funkcja ustalająca czy zmienna jest zdeklarowana/inna niz null
var_dumb($zmienna); - ustala typ zmiennej
is_; - sprawdza typy zmiennych
round($b - $a, wartość zaokrąglenia); - zaokrąglanie

```

### Typy danych:
```php
<?php

$string = 'tekst';
$integer = 1;
$float = 1.0;
$boolean = true/false;
$i inne;

```

### operatory arytmetyczne:
```php
<?php
tak jak w JS:
$a = 2;
$b = 3;
echo ($a + $b); - dodawanie
echo ($a - $b); - odejmowanie
echo ($a * $b); - mnożenie
echo ($a / $b); - dzielenie
echo ($a % $b); - reszta z dzielenia
pow(2, 3); - potęgowanie
sqrt(4); - pierwiastkowanie

skróty:
//$a = $a operator 10;
$a += 10;
$a -= 10;
$a *= 10;
$a /= 10;
$a %= 10;

//$a = $a operator 1;

$a++ - (post)ikrementacja
++$a - (pre)inkrementacja
$a-- - (post)dekrementacja
--$a - (pre)denkrementacja

```

### operatory porównania:
```php
<?php

echo ($a == $b); - równy
echo ($a != lub <> $b); - nie równy/różny
echo ($a < $b); - mniejsze
echo ($a > $b); - większe
echo ($a <= $b); - mniejsze/równe
echo ($a >= $b); - większe/równe 

echo ($a === $b); - równe przy uwzględnieniu typów danych
echo ($a !== $b); - różne przy uwzględnieniu typów danych

```






### operatory logiczne:
```php
<?php
$a = false;
$b = false;

var_dump($a or $b); -
var_dump($a  $b); -
var_dump($a  $b); -
var_dump($a  $b); -
```

### instrukcje warunkowe:
```php
<?php

```

### instrukce wyboru:
```php
<?php

```

### pętle:
```php
<?php

```

### instrukcje skoku:
```php
<?php

```

### tablice:
```php
<?php

```

### funkcje:
```php
<?php

```

### formularze:
```php
<?php

```

### pliki cookies:
```php
<?php

```

















