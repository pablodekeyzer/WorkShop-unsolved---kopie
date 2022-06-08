# Workshop GraphQL

## Deel 1: Initialisatie

- Log in op je MongoDB account en stel een cluster op
- Kopieer de url naar deze database en zet die in je config/db.js file

om te weten of alles is geslaagd:

- npm i
- npm start

output:

🚀 Server ready at [http://localhost:4000/](http://localhost:4000/)

Database connection successful.

## Deel 2: Types en Query&#39;s

Het eerste dat we moeten doen is een Type definiëren die onze api zal aanbieden.

- Open het index.js bestand in de src map
- Hierin staat er een multiline gql`` als deze niet correct wordt gekleurt zorg dan dat je de juiste extensie hebt
- Verander hierin de NAMEHERE naar een resource die je wil aanbieden(niet in all caps :)
- Voorzie het een paar velden(Int, Float, String of Boolean) die bij deze resource passen
- Onder Query voorzie je 2 &#39;routes&#39;: een daarvan krijgt een id mee en geeft de bijhorende entry terug en de andere geeft een lijst van alle entrys van ons aangemaakt type

## Deel 3: Input en Mutations

Vooraleer we iets kunnen terugkrijgen van onze api moeten we natuurlijk eerst een manier hebben om iets toe te voegen aan de databank.

- Voorzie in dezelfde gql string een &quot;input&quot; CreateNAMEHEREInput
- Hierin komen alle velden die nodig zijn om een entry aan te maken.
- Om deze input te gebruiken maken we onder Query een type Mutation aan.
- Hierin maken we een entry die als input onze input geeft
- Om te weten of onze operaties al dan niet slagen geeft deze methode ook de entry terug die het net heeft aangemaakt

## Deel 4: MongoDB resolvers

Nu weet onze api wel wat er binnen zal komen, maar het weet nog niks over wat het daarmee moet doen. Daarom maken we een schema met mongoose dat met onze database kan werken.

- maak voor elk niet id veld in je Type een veld aan in je schema (nog steeds in src/index.js)

(let op: Int of Float == Number in mongoose)

Nu weet mongoose wat het moet verwachten in de database. De volgende stap is om een entry aan te maken wanneer we onze mutation aanspreken.

- ga naar resolvers/mutations/
- maak een file aan createNAMEHERE.js (moet dezelfde naam hebben als je mutation)
- kopieer de boilerplate code in commentaar op index.js
- gebruik de models parameter die je meekrijgt om je entry aan te maken
- return de gemaakte entry.
- import deze file in index.js en export die weer op zijn beurt
- zet de resolvers uit commentaar in de main index.js

Als alles goed is gegaan kan je nu de server starten en zie je een query die je kan uitvoeren op apollo.

- ga nu naar resolvers/queries/
- maak nu twee files aan met de naam van je resource(een enkel- en een meervoud)
- gebruik de boilerplate code van net, en met de findOne en find methode kan je nu de data ophalen.
- import deze file in index.js en export die weer op zijn beurt

Nu kan je terug naar de server en kan je deze queries testen

## Deel 5(extra): update en delete

## Deel 6(extra): processed data

##
