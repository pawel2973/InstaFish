<h1>InstaFish</h1>
<h3>O naszej aplikacji</h3>
Stworzony przez nas portal społecznościowy to serwis przeznaczony do dzielenia się wspomnieniami z wypraw wędkarskich. Portal jest swoistym połączeniem Instagrama oraz Facebooka. Użytkownicy mogą dzielić się zdjęciami ze swoich połowów, śledzić innych użytkowników, lubić ich posty oraz tworzyć wydarzenia wędkarskie. Posty dodawane przez użytkowników mogą zawierać bardzo szczegółowe informacje na temat ich połowów, m.in. szczegóły dotyczące lokalizacji, złapanego okazu, czy też użytego sprzętu. Profil użytkownika również jest bardzo bogaty. Zawiera informacje o jego danych osobowych, przynależności do organizacji, osiągnięć sportowych i wędkarskiego wyposażenia.

<h3>Jak identyfikujemy społeczność?</h3>
Nasz portal zrzesza ludzi z zamiłowaniem do wędkarstwa. Znajdzie tu miejsce każdy, kto lubi łowić ryby, od początkujących do profesjonalistów. Każdy ma możliwość rejestracji oraz śledzenia innych użytkowników dzięki czemu może widzieć ich posty na swojej tablicy. Portal skupia się na społeczności międzynarodowej dlatego powstał w całości w języku angielskim.

<h3>Technologie i narzędzia</h3>

- Django
- Django Rest Framework
- React

Do wykonania naszego projektu wykorzystaliśmy po stronie <strong>backendu:</strong>

<strong>Django</strong> - wolnego i otwartego frameworka przeznaczonego do tworzenia aplikacji internetowych, napisany w Pythonie. 

<strong>Django Rest Framework</strong> - potężnego modułu do tworzenia web API, który posiada zasady uwierzytelniania i dzięki niemu można w łatwy sposób wywoływać metody HTTP z poziomu przeglądarki. Dzięki użyciu w/w frameworku mogliśmy w prosty i przyjemny sposób stworzyć REST API.

Po stronie <strong>frontendu:</strong>

<strong>React</strong> - biblioteka języka JavaScript, którą wykorzystaliśmy do stworzenia graficznego interfejsu użytkownika. Korzystanie z tej biblioteki polega na tworzeniu samodzielnych komponentów, a następnie składanie z nich całej aplikacji.

<h3>Struktura i bezpieczeństwo</h3>
Django traktuje bezpieczeństwo poważnie i pomaga programistom uniknąć wielu błędów związanych z bezpieczeństwem. Może o tym świadczyć liczba łatek (patch) związanych z lukami bezpieczeństwa bibliotek zależnych od Django.
Przy procesie rejestracji zadbaliśmy o to, aby użytkownik podał wystarczająco bezpieczne hasło.
Dane logowania/rejestracji przesyłamy za pomocą tokena JWT (JSON Web Tokens) - jest to otwarty standard (RFC 7519), który definiuje sposób wymiany danych między stronami w bezpieczny sposób poprzez obiekt JSON. Przesyłane informacje mogą być weryfikowane dzięki cyfrowemu podpisowi, który jest elementem tokenu. Token JWT jest podpisany za pomocą sygnatury – algorytmem HMAC lub za pomocą klucza publicznego/prywatnego RSA lub ECDSA.
Możliwość łatwego przeglądania postów śledzonych użytkowników
Użytkownik z łatwością może wyświetlać wszystkie posty śledzonych użytkowników na swojej tablicy. Może także zaglądnąć w każdy profil i widzieć ich ostatnio dodane posty. Posty na tablicy wyświetlają się od najnowszych, po 10 na stronie - dzięki użytej paginacji.

<h3>W jaki sposób chcemy przyciągnąć użytkowników do nas? 
Jak rozreklamować nasz portal wędkarski?</h3>
Przede wszystkim reklamę naszego portalu rozpoczęlibyśmy od stworzenia fanepage’u na facebooku, instagramie oraz stworzenia personalnego bloga, gdzie użytkownicy mogliby uzyskać informację jak rozpocząć przygodę z wędkarstwem. Oczywiście nie omieszkalibyśmy wspomnieć o naszym portalu zrzeszającym rzesze zapalonych wędkarzy.  Następnym krokiem byłoby wykupienie reklam google nakierowanych na użytkowników 
o podanych przez nas preferencjach. Wykorzystalibyśmy również możliwość wykupienia reklam na youtubie. Współpraca z firmami produkującymi sprzęt wędkarski to również kluczowy czynnik promocji naszego portalu.

<h3>User story</h3>
Jako Gość chcę mieć możliwość:
- rejestracji
- przeglądania profili użytkowników

Jako Użytkownik chcę mieć możliwość:
- zalogowania/wylogowania się
- stworzenia własnego profilu
	- edycji danych personalnych
	- dodania informacji o swojej ulubionej metodzie(specjalności) połowu
	- dodania informacji o przynależności do organizacji wędkarskich
	- dodania informacji o posiadanym sprzęcie wędkarskim
	- dodania informacji o używanych portalach społecznościowych 
	- dodania i edycji zdjęcia profilowego
- dodania postu na swój profil
	- nagłówek postu
	- zdjęcie z połowu
	- informacje o złapanej rybie
	- informacja o dacie połowu
	- lokalizacji zbiornika/rzeki na której złapano rybę
	- używanego sprzętu podczas połowu
	- używanej przynęty
	- dodatkowego opisu z połowu
- wyszukiwania innych użytkowników
- śledzenia postów/aktywności followersów
- przeglądania postów śledzonych użytkowników(wall)
- komentowania/polubienia postów użytkowników
- umówienia się na ryby z innymi użytkownikami 

Jako Admin chcę mieć możliwość:
- usunięcia konta użytkownika w panelu admina
- usunięcia postu użytkownika w panelu admina
- zablokowania użytkownika w panelu admina





