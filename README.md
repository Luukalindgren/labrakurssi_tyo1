"REST API, joka tarjoaa yksinkertaisen Create Read Update Delete -toiminnallisuuden jollekin itse valittavalle aihepiirille. Tämä menisi osaltaan jopa tuonne tietokantapuolelle, eli tähän saisi kätevästi ORM (olio-relaatio-mappaus) tekniikan mukaan, jota ei juuri tuolla meidän SQL-painotteisella tietokantakurssilla käsitellä."

REST API kuvitteellisen verkkokaupan asiakastiedoille. Toteutettu käyttäen Node.js, Express ja MongoDB. 

Käyttöohjeet:
1. Kloonaa repositorio omalle koneellesi.
2. Siirry juurikansioon ja aja komento: "npm install"
3. Käynnistääksesi palvelminen, aja komento: "npm run devStart"
4. Terminaaliin ilmestyvä viesti "Connected to Database" varmistaa yhteyden onnistumisen.
5. API löytyy osoitteesta: "http://localhost:3000/customers", joka palauttaa kaikki tietokantaan tallennetut asiakkaat.
6. Yksittäisen asiakkaan tiedot saa lisäämällä sen ID:n URLin päätteeksi

Esimerkkejä REST API kutsuista:
GET http://localhost:3000/customers

GET http://localhost:3000/customers/64217a1da92626d47801f77b

DELETE http://localhost:3000/customers/64217a1da92626d47801f77b

POST http://localhost:3000/customers
Content-Type: application/json

{
    "name": "Kalle Asiakas",
    "dateOfBirth": "2000-03-25",
    "joiningDate": "2022-07-23",
    "phoneNumber": "0947504723",
    "email": "kalle.asiakas@email.net",
    "address": "Asiakkaankatu 1",
    "membership": true
}
