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

Różne:
isset(); - funkcja ustalająca czy zmienna jest zdeklarowana/inna niz null
var_dumb($zmienna); - ustala typ zmiennej - szczegółowe dane
print_r($zmienna) - mniej danych
is_; - sprawdza typy zmiennych
round($b - $a, wartość zaokrąglenia); - zaokrąglanie
count(); - policzenie np. indeksów w tablicy

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

$a++ - (post)inkrementacja
++$a - (pre)inkrementacja
$a-- - (post)dekrementacja
--$a - (pre)dekrementacja

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

var_dump($a or(lub)|| $b); - (lub/logiczna suma) - wystarczy jedna prawda(true) by zwrócić true
var_dump($a and(lub)&& $b); - (i)  muszą być dwie prawdy(true) by zwrócić true
var_dump($a xor $b); - (exclusive or)tylko jedna prawda(true) zwróci true
var_dump(!$a); - (not) operator negacji odwraca wartość

hierarchia ʕ •ᴥ•ʔ:
! (szef aka prezes)
&& (senior developer)
|| (junior developer)
and (praktykant, stażysta)
or (ja szukający pracy)

```

### instrukcje warunkowe:
```php
<?php
if (jeśli)
if(true); - wykona
if(false); - nie wykona
if(warunek instrukcji warunkowej) {ciało instrukcji}
elseif(warunek instrukcji warunkowej) {ciało instrukcji}
else {ciało instrukcji}

skrócona wersja (operator trójargumentowy):
warunek instrukcji warunkowej ? cało instrukcji : ciało instrukcji;

```

### instrukce wyboru:
```php
<?php
praktyczny przykład:

switch(zmienna/wartość)
{
case 1: echo 'Poniedziałek'; break;
case 2: echo 'Wtorek'; break;
case 3: echo 'Środa'; break;
case 4: echo 'Czwartek'; break;
case 5: echo 'Piątek'; break;
case 6: echo 'Sobota'; break;
case 7: echo 'Niedziela'; break;
default: 'echo nie ma takiego dnia';
}

```

### pętle:
```php
<?php
Pętla zagnieżdza kod, który powtórzy się pewną ilość razy.

1. while(dopóki/podczas gdy)
while(warunek kontynuacji pętli) {ciało pętli} - WAŻNE!!! trzeba zakończyć pętle np. używając inkrementacji.

2. do while
do{ciało pętli}
while(warunek kontynuacji pętli); - wykona się przynajmniej raz

3. for
for (expr1; expr2; expr3){ciało pętli};

PRZYKŁADY Z PHP MANUAL:
/* example 1 */

for ($i = 1; $i <= 10; $i++) {
    echo $i;
}

/* example 2 */

for ($i = 1; ; $i++) {
    if ($i > 10) {
        break;
    }
    echo $i;
}

/* example 3 */

$i = 1;
for (; ; ) {
    if ($i > 10) {
        break;
    }
    echo $i;
    $i++;
}

/* example 4 */

for ($i = 1, $j = 0; $i <= 10; $j += $i, print $i, $i++);

4.foreach
foreach (iterable_expression as $value)
    statement
foreach (iterable_expression as $key => $value)
    statement
    
Przykład z PHP Manual:
$arr = array(1, 2, 3, 4);
foreach ($arr as &$value) {
    $value = $value * 2;
}
// $arr is now array(2, 4, 6, 8)

// without an unset($value), $value is still a reference to the last item: $arr[3]

foreach ($arr as $key => $value) {
    // $arr[3] will be updated with each value from $arr...
    echo "{$key} => {$value} ";
    print_r($arr);
}
// ...until ultimately the second-to-last value is copied onto the last value

// output:
// 0 => 2 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 2 )
// 1 => 4 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 4 )
// 2 => 6 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 6 )
// 3 => 6 Array ( [0] => 2, [1] => 4, [2] => 6, [3] => 6 )
?>

```

### instrukcje skoku:
```php
<?php
1. break; - wyskocz(zatrzymaj)
2. continue; - pomija i kontynuuje
3. goto lab1; lab1: - WAŻNE!!! uważamy gdzie to umieszczamy

goto example:
for($i=0,$j=50; $i<100; $i++) {
  while($j--) {
    if($j==17) goto end; 
  }  
}
echo "i = $i";
end:
echo 'j hit 17';

4.return (używamy w funkcji)

```

### tablice:
```php
<?php
Rodzaje tablic:
- Tablica indeksowana numerycznie:
Sposób zapisu:
nr 1:
$tab = array(wartości);
echo $tab[index];

nr 2:
$tab[index] = wartość;
echo $tab[index];

- Tablica Asocjacyjna:
Sposób zapisu:
nr 1:
$tab = array(index(np.typu string) => wartość);
echo $tab[index(np.typu string)];

nr 2:
$tab[index(np.typu string)] = wartość;
echo $tab[index];

- Tablica Wymiarowa:
$tab[index1(np.typu string)][index2(np.typu string)] = wartość;
echo $tab[index1][index2];

```

### include:
```php
<?php
sposób 1: include('hello.php');
sposób 2: include hello.php;
sposób 3: include_once hello.php; - wczytujemy plik tylko raz

Cecha: Dołączamy plik, który nie jest wymagany. Nie wpływa na nasz plik główny

```

### require:
```php
<?php
sposób 1: require('hello.php');
sposób 2: require hello.php;
sposób 3: require_once hello.php; - wczytujemy plik tylko raz

Cecha: Dołączamy plik, który jest wymagany. Wpływa na nasz plik główny - dalsza zawartość przestaję działać w przypadku podania nieprawidłowego pliku/nazwy pliku/połączenia itd.

```

### funkcje:
```php
<?php
function name(paramatryargument){ciało funkcji};
name(); - wywołanie funkcji

```

### formularze:
```php
<?php
1.GET (formularz jawny)
$_GET['name'];

2.POST (formularz tajny/ukryty)
$_POST['name'];
```

C.D.N =>

### sesje:
```php
<?php

```

### pliki cookies:
```php
<?php

```

















