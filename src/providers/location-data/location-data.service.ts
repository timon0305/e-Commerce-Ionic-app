import { Injectable } from '@angular/core';

@Injectable()
export class LocationDataService {
  data = {
    "countries": [
      {
        "value": "AF",
        "name": "Afghanistan"
      },
      {
        "value": "AL",
        "name": "Albania"
      },
      {
        "value": "DZ",
        "name": "Algeria"
      },
      {
        "value": "AS",
        "name": "American Samoa"
      },
      {
        "value": "AD",
        "name": "Andorra"
      },
      {
        "value": "AO",
        "name": "Angola"
      },
      {
        "value": "AI",
        "name": "Anguilla"
      },
      {
        "value": "AQ",
        "name": "Antarctica"
      },
      {
        "value": "AG",
        "name": "Antigua and Barbuda"
      },
      {
        "value": "AR",
        "name": "Argentina"
      },
      {
        "value": "AM",
        "name": "Armenia"
      },
      {
        "value": "AW",
        "name": "Aruba"
      },
      {
        "value": "AU",
        "name": "Australia"
      },
      {
        "value": "AT",
        "name": "Austria"
      },
      {
        "value": "AZ",
        "name": "Azerbaijan"
      },
      {
        "value": "BS",
        "name": "Bahamas"
      },
      {
        "value": "BH",
        "name": "Bahrain"
      },
      {
        "value": "BD",
        "name": "Bangladesh"
      },
      {
        "value": "BB",
        "name": "Barbados"
      },
      {
        "value": "BY",
        "name": "Belarus"
      },
      {
        "value": "PW",
        "name": "Belau"
      },
      {
        "value": "BE",
        "name": "Belgium"
      },
      {
        "value": "BZ",
        "name": "Belize"
      },
      {
        "value": "BJ",
        "name": "Benin"
      },
      {
        "value": "BM",
        "name": "Bermuda"
      },
      {
        "value": "BT",
        "name": "Bhutan"
      },
      {
        "value": "BO",
        "name": "Bolivia"
      },
      {
        "value": "BQ",
        "name": "Bonaire, Saint Eustatius and Saba"
      },
      {
        "value": "BA",
        "name": "Bosnia and Herzegovina"
      },
      {
        "value": "BW",
        "name": "Botswana"
      },
      {
        "value": "BV",
        "name": "Bouvet Island"
      },
      {
        "value": "BR",
        "name": "Brazil"
      },
      {
        "value": "IO",
        "name": "British Indian Ocean Territory"
      },
      {
        "value": "VG",
        "name": "British Virgin Islands"
      },
      {
        "value": "BN",
        "name": "Brunei"
      },
      {
        "value": "BG",
        "name": "Bulgaria"
      },
      {
        "value": "BF",
        "name": "Burkina Faso"
      },
      {
        "value": "BI",
        "name": "Burundi"
      },
      {
        "value": "KH",
        "name": "Cambodia"
      },
      {
        "value": "CM",
        "name": "Cameroon"
      },
      {
        "value": "CA",
        "name": "Canada"
      },
      {
        "value": "CV",
        "name": "Cape Verde"
      },
      {
        "value": "KY",
        "name": "Cayman Islands"
      },
      {
        "value": "CF",
        "name": "Central African Republic"
      },
      {
        "value": "TD",
        "name": "Chad"
      },
      {
        "value": "CL",
        "name": "Chile"
      },
      {
        "value": "CN",
        "name": "China"
      },
      {
        "value": "CX",
        "name": "Christmas Island"
      },
      {
        "value": "CC",
        "name": "Cocos (Keeling) Islands"
      },
      {
        "value": "CO",
        "name": "Colombia"
      },
      {
        "value": "KM",
        "name": "Comoros"
      },
      {
        "value": "CG",
        "name": "Congo (Brazzaville)"
      },
      {
        "value": "CD",
        "name": "Congo (Kinshasa)"
      },
      {
        "value": "CK",
        "name": "Cook Islands"
      },
      {
        "value": "CR",
        "name": "Costa Rica"
      },
      {
        "value": "HR",
        "name": "Croatia"
      },
      {
        "value": "CU",
        "name": "Cuba"
      },
      {
        "value": "CW",
        "name": "Cura&ccedil;ao"
      },
      {
        "value": "CY",
        "name": "Cyprus"
      },
      {
        "value": "CZ",
        "name": "Czech Republic"
      },
      {
        "value": "DK",
        "name": "Denmark"
      },
      {
        "value": "DJ",
        "name": "Djibouti"
      },
      {
        "value": "DM",
        "name": "Dominica"
      },
      {
        "value": "DO",
        "name": "Dominican Republic"
      },
      {
        "value": "EC",
        "name": "Ecuador"
      },
      {
        "value": "EG",
        "name": "Egypt"
      },
      {
        "value": "SV",
        "name": "El Salvador"
      },
      {
        "value": "GQ",
        "name": "Equatorial Guinea"
      },
      {
        "value": "ER",
        "name": "Eritrea"
      },
      {
        "value": "EE",
        "name": "Estonia"
      },
      {
        "value": "ET",
        "name": "Ethiopia"
      },
      {
        "value": "FK",
        "name": "Falkland Islands"
      },
      {
        "value": "FO",
        "name": "Faroe Islands"
      },
      {
        "value": "FJ",
        "name": "Fiji"
      },
      {
        "value": "FI",
        "name": "Finland"
      },
      {
        "value": "FR",
        "name": "France"
      },
      {
        "value": "GF",
        "name": "French Guiana"
      },
      {
        "value": "PF",
        "name": "French Polynesia"
      },
      {
        "value": "TF",
        "name": "French Southern Territories"
      },
      {
        "value": "GA",
        "name": "Gabon"
      },
      {
        "value": "GM",
        "name": "Gambia"
      },
      {
        "value": "GE",
        "name": "Georgia"
      },
      {
        "value": "DE",
        "name": "Germany"
      },
      {
        "value": "GH",
        "name": "Ghana"
      },
      {
        "value": "GI",
        "name": "Gibraltar"
      },
      {
        "value": "GR",
        "name": "Greece"
      },
      {
        "value": "GL",
        "name": "Greenland"
      },
      {
        "value": "GD",
        "name": "Grenada"
      },
      {
        "value": "GP",
        "name": "Guadeloupe"
      },
      {
        "value": "GU",
        "name": "Guam"
      },
      {
        "value": "GT",
        "name": "Guatemala"
      },
      {
        "value": "GG",
        "name": "Guernsey"
      },
      {
        "value": "GN",
        "name": "Guinea"
      },
      {
        "value": "GW",
        "name": "Guinea-Bissau"
      },
      {
        "value": "GY",
        "name": "Guyana"
      },
      {
        "value": "HT",
        "name": "Haiti"
      },
      {
        "value": "HM",
        "name": "Heard Island and McDonald Islands"
      },
      {
        "value": "HN",
        "name": "Honduras"
      },
      {
        "value": "HK",
        "name": "Hong Kong"
      },
      {
        "value": "HU",
        "name": "Hungary"
      },
      {
        "value": "IS",
        "name": "Iceland"
      },
      {
        "value": "IN",
        "name": "India"
      },
      {
        "value": "ID",
        "name": "Indonesia"
      },
      {
        "value": "IR",
        "name": "Iran"
      },
      {
        "value": "IQ",
        "name": "Iraq"
      },
      {
        "value": "IE",
        "name": "Ireland"
      },
      {
        "value": "IM",
        "name": "Isle of Man"
      },
      {
        "value": "IL",
        "name": "Israel"
      },
      {
        "value": "IT",
        "name": "Italy"
      },
      {
        "value": "CI",
        "name": "Ivory Coast"
      },
      {
        "value": "JM",
        "name": "Jamaica"
      },
      {
        "value": "JP",
        "name": "Japan"
      },
      {
        "value": "JE",
        "name": "Jersey"
      },
      {
        "value": "JO",
        "name": "Jordan"
      },
      {
        "value": "KZ",
        "name": "Kazakhstan"
      },
      {
        "value": "KE",
        "name": "Kenya"
      },
      {
        "value": "KI",
        "name": "Kiribati"
      },
      {
        "value": "KW",
        "name": "Kuwait"
      },
      {
        "value": "KG",
        "name": "Kyrgyzstan"
      },
      {
        "value": "LA",
        "name": "Laos"
      },
      {
        "value": "LV",
        "name": "Latvia"
      },
      {
        "value": "LB",
        "name": "Lebanon"
      },
      {
        "value": "LS",
        "name": "Lesotho"
      },
      {
        "value": "LR",
        "name": "Liberia"
      },
      {
        "value": "LY",
        "name": "Libya"
      },
      {
        "value": "LI",
        "name": "Liechtenstein"
      },
      {
        "value": "LT",
        "name": "Lithuania"
      },
      {
        "value": "LU",
        "name": "Luxembourg"
      },
      {
        "value": "MO",
        "name": "Macao S.A.R., China"
      },
      {
        "value": "MK",
        "name": "Macedonia"
      },
      {
        "value": "MG",
        "name": "Madagascar"
      },
      {
        "value": "MW",
        "name": "Malawi"
      },
      {
        "value": "MY",
        "name": "Malaysia"
      },
      {
        "value": "MV",
        "name": "Maldives"
      },
      {
        "value": "ML",
        "name": "Mali"
      },
      {
        "value": "MT",
        "name": "Malta"
      },
      {
        "value": "MH",
        "name": "Marshall Islands"
      },
      {
        "value": "MQ",
        "name": "Martinique"
      },
      {
        "value": "MR",
        "name": "Mauritania"
      },
      {
        "value": "MU",
        "name": "Mauritius"
      },
      {
        "value": "YT",
        "name": "Mayotte"
      },
      {
        "value": "MX",
        "name": "Mexico"
      },
      {
        "value": "FM",
        "name": "Micronesia"
      },
      {
        "value": "MD",
        "name": "Moldova"
      },
      {
        "value": "MC",
        "name": "Monaco"
      },
      {
        "value": "MN",
        "name": "Mongolia"
      },
      {
        "value": "ME",
        "name": "Montenegro"
      },
      {
        "value": "MS",
        "name": "Montserrat"
      },
      {
        "value": "MA",
        "name": "Morocco"
      },
      {
        "value": "MZ",
        "name": "Mozambique"
      },
      {
        "value": "MM",
        "name": "Myanmar"
      },
      {
        "value": "NA",
        "name": "Namibia"
      },
      {
        "value": "NR",
        "name": "Nauru"
      },
      {
        "value": "NP",
        "name": "Nepal"
      },
      {
        "value": "NL",
        "name": "Netherlands"
      },
      {
        "value": "NC",
        "name": "New Caledonia"
      },
      {
        "value": "NZ",
        "name": "New Zealand"
      },
      {
        "value": "NI",
        "name": "Nicaragua"
      },
      {
        "value": "NE",
        "name": "Niger"
      },
      {
        "value": "NG",
        "name": "Nigeria"
      },
      {
        "value": "NU",
        "name": "Niue"
      },
      {
        "value": "NF",
        "name": "Norfolk Island"
      },
      {
        "value": "KP",
        "name": "North Korea"
      },
      {
        "value": "MP",
        "name": "Northern Mariana Islands"
      },
      {
        "value": "NO",
        "name": "Norway"
      },
      {
        "value": "OM",
        "name": "Oman"
      },
      {
        "value": "PK",
        "name": "Pakistan"
      },
      {
        "value": "PS",
        "name": "Palestinian Territory"
      },
      {
        "value": "PA",
        "name": "Panama"
      },
      {
        "value": "PG",
        "name": "Papua New Guinea"
      },
      {
        "value": "PY",
        "name": "Paraguay"
      },
      {
        "value": "PE",
        "name": "Peru"
      },
      {
        "value": "PH",
        "name": "Philippines"
      },
      {
        "value": "PN",
        "name": "Pitcairn"
      },
      {
        "value": "PL",
        "name": "Poland"
      },
      {
        "value": "PT",
        "name": "Portugal"
      },
      {
        "value": "PR",
        "name": "Puerto Rico"
      },
      {
        "value": "QA",
        "name": "Qatar"
      },
      {
        "value": "RE",
        "name": "Reunion"
      },
      {
        "value": "RO",
        "name": "Romania"
      },
      {
        "value": "RU",
        "name": "Russia"
      },
      {
        "value": "RW",
        "name": "Rwanda"
      },
      {
        "value": "ST",
        "name": "S&atilde;o Tom&eacute; and Pr&iacute;ncipe"
      },
      {
        "value": "BL",
        "name": "Saint Barth&eacute;lemy"
      },
      {
        "value": "SH",
        "name": "Saint Helena"
      },
      {
        "value": "KN",
        "name": "Saint Kitts and Nevis"
      },
      {
        "value": "LC",
        "name": "Saint Lucia"
      },
      {
        "value": "SX",
        "name": "Saint Martin (Dutch part)"
      },
      {
        "value": "MF",
        "name": "Saint Martin (French part)"
      },
      {
        "value": "PM",
        "name": "Saint Pierre and Miquelon"
      },
      {
        "value": "VC",
        "name": "Saint Vincent and the Grenadines"
      },
      {
        "value": "WS",
        "name": "Samoa"
      },
      {
        "value": "SM",
        "name": "San Marino"
      },
      {
        "value": "SA",
        "name": "Saudi Arabia"
      },
      {
        "value": "SN",
        "name": "Senegal"
      },
      {
        "value": "RS",
        "name": "Serbia"
      },
      {
        "value": "SC",
        "name": "Seychelles"
      },
      {
        "value": "SL",
        "name": "Sierra Leone"
      },
      {
        "value": "SG",
        "name": "Singapore"
      },
      {
        "value": "SK",
        "name": "Slovakia"
      },
      {
        "value": "SI",
        "name": "Slovenia"
      },
      {
        "value": "SB",
        "name": "Solomon Islands"
      },
      {
        "value": "SO",
        "name": "Somalia"
      },
      {
        "value": "ZA",
        "name": "South Africa"
      },
      {
        "value": "GS",
        "name": "South Georgia/Sandwich Islands"
      },
      {
        "value": "KR",
        "name": "South Korea"
      },
      {
        "value": "SS",
        "name": "South Sudan"
      },
      {
        "value": "ES",
        "name": "Spain"
      },
      {
        "value": "LK",
        "name": "Sri Lanka"
      },
      {
        "value": "SD",
        "name": "Sudan"
      },
      {
        "value": "SR",
        "name": "Suriname"
      },
      {
        "value": "SJ",
        "name": "Svalbard and Jan Mayen"
      },
      {
        "value": "SZ",
        "name": "Swaziland"
      },
      {
        "value": "SE",
        "name": "Sweden"
      },
      {
        "value": "CH",
        "name": "Switzerland"
      },
      {
        "value": "SY",
        "name": "Syria"
      },
      {
        "value": "TW",
        "name": "Taiwan"
      },
      {
        "value": "TJ",
        "name": "Tajikistan"
      },
      {
        "value": "TZ",
        "name": "Tanzania"
      },
      {
        "value": "TH",
        "name": "Thailand"
      },
      {
        "value": "TL",
        "name": "Timor-Leste"
      },
      {
        "value": "TG",
        "name": "Togo"
      },
      {
        "value": "TK",
        "name": "Tokelau"
      },
      {
        "value": "TO",
        "name": "Tonga"
      },
      {
        "value": "TT",
        "name": "Trinidad and Tobago"
      },
      {
        "value": "TN",
        "name": "Tunisia"
      },
      {
        "value": "TR",
        "name": "Turkey"
      },
      {
        "value": "TM",
        "name": "Turkmenistan"
      },
      {
        "value": "TC",
        "name": "Turks and Caicos Islands"
      },
      {
        "value": "TV",
        "name": "Tuvalu"
      },
      {
        "value": "UG",
        "name": "Uganda"
      },
      {
        "value": "UA",
        "name": "Ukraine"
      },
      {
        "value": "AE",
        "name": "United Arab Emirates"
      },
      {
        "value": "GB",
        "name": "United Kingdom (UK)"
      },
      {
        "value": "US",
        "name": "United States (US)"
      },
      {
        "value": "UM",
        "name": "United States (US) Minor Outlying Islands"
      },
      {
        "value": "VI",
        "name": "United States (US) Virgin Islands"
      },
      {
        "value": "UY",
        "name": "Uruguay"
      },
      {
        "value": "UZ",
        "name": "Uzbekistan"
      },
      {
        "value": "VU",
        "name": "Vanuatu"
      },
      {
        "value": "VA",
        "name": "Vatican"
      },
      {
        "value": "VE",
        "name": "Venezuela"
      },
      {
        "value": "VN",
        "name": "Vietnam"
      },
      {
        "value": "WF",
        "name": "Wallis and Futuna"
      },
      {
        "value": "EH",
        "name": "Western Sahara"
      },
      {
        "value": "YE",
        "name": "Yemen"
      },
      {
        "value": "ZM",
        "name": "Zambia"
      },
      {
        "value": "ZW",
        "name": "Zimbabwe"
      }
    ],
    "states": {
      "AR": [
        {
          "value": "C",
          "name": "Ciudad Aut&oacute;noma de Buenos Aires"
        },
        {
          "value": "B",
          "name": "Buenos Aires"
        },
        {
          "value": "K",
          "name": "Catamarca"
        },
        {
          "value": "H",
          "name": "Chaco"
        },
        {
          "value": "U",
          "name": "Chubut"
        },
        {
          "value": "X",
          "name": "C&oacute;rdoba"
        },
        {
          "value": "W",
          "name": "Corrientes"
        },
        {
          "value": "E",
          "name": "Entre R&iacute;os"
        },
        {
          "value": "P",
          "name": "Formosa"
        },
        {
          "value": "Y",
          "name": "Jujuy"
        },
        {
          "value": "L",
          "name": "La Pampa"
        },
        {
          "value": "F",
          "name": "La Rioja"
        },
        {
          "value": "M",
          "name": "Mendoza"
        },
        {
          "value": "N",
          "name": "Misiones"
        },
        {
          "value": "Q",
          "name": "Neuqu&eacute;n"
        },
        {
          "value": "R",
          "name": "R&iacute;o Negro"
        },
        {
          "value": "A",
          "name": "Salta"
        },
        {
          "value": "J",
          "name": "San Juan"
        },
        {
          "value": "D",
          "name": "San Luis"
        },
        {
          "value": "Z",
          "name": "Santa Cruz"
        },
        {
          "value": "S",
          "name": "Santa Fe"
        },
        {
          "value": "G",
          "name": "Santiago del Estero"
        },
        {
          "value": "V",
          "name": "Tierra del Fuego"
        },
        {
          "value": "T",
          "name": "Tucum&aacute;n"
        }
      ],
      "AU": [
        {
          "value": "ACT",
          "name": "Australian Capital Territory"
        },
        {
          "value": "NSW",
          "name": "New South Wales"
        },
        {
          "value": "NT",
          "name": "Northern Territory"
        },
        {
          "value": "QLD",
          "name": "Queensland"
        },
        {
          "value": "SA",
          "name": "South Australia"
        },
        {
          "value": "TAS",
          "name": "Tasmania"
        },
        {
          "value": "VIC",
          "name": "Victoria"
        },
        {
          "value": "WA",
          "name": "Western Australia"
        }
      ],
      "BD": [
        {
          "value": "BAG",
          "name": "Bagerhat"
        },
        {
          "value": "BAN",
          "name": "Bandarban"
        },
        {
          "value": "BAR",
          "name": "Barguna"
        },
        {
          "value": "BARI",
          "name": "Barisal"
        },
        {
          "value": "BHO",
          "name": "Bhola"
        },
        {
          "value": "BOG",
          "name": "Bogra"
        },
        {
          "value": "BRA",
          "name": "Brahmanbaria"
        },
        {
          "value": "CHA",
          "name": "Chandpur"
        },
        {
          "value": "CHI",
          "name": "Chittagong"
        },
        {
          "value": "CHU",
          "name": "Chuadanga"
        },
        {
          "value": "COM",
          "name": "Comilla"
        },
        {
          "value": "COX",
          "name": "Cox's Bazar"
        },
        {
          "value": "DHA",
          "name": "Dhaka"
        },
        {
          "value": "DIN",
          "name": "Dinajpur"
        },
        {
          "value": "FAR",
          "name": "Faridpur "
        },
        {
          "value": "FEN",
          "name": "Feni"
        },
        {
          "value": "GAI",
          "name": "Gaibandha"
        },
        {
          "value": "GAZI",
          "name": "Gazipur"
        },
        {
          "value": "GOP",
          "name": "Gopalganj"
        },
        {
          "value": "HAB",
          "name": "Habiganj"
        },
        {
          "value": "JAM",
          "name": "Jamalpur"
        },
        {
          "value": "JES",
          "name": "Jessore"
        },
        {
          "value": "JHA",
          "name": "Jhalokati"
        },
        {
          "value": "JHE",
          "name": "Jhenaidah"
        },
        {
          "value": "JOY",
          "name": "Joypurhat"
        },
        {
          "value": "KHA",
          "name": "Khagrachhari"
        },
        {
          "value": "KHU",
          "name": "Khulna"
        },
        {
          "value": "KIS",
          "name": "Kishoreganj"
        },
        {
          "value": "KUR",
          "name": "Kurigram"
        },
        {
          "value": "KUS",
          "name": "Kushtia"
        },
        {
          "value": "LAK",
          "name": "Lakshmipur"
        },
        {
          "value": "LAL",
          "name": "Lalmonirhat"
        },
        {
          "value": "MAD",
          "name": "Madaripur"
        },
        {
          "value": "MAG",
          "name": "Magura"
        },
        {
          "value": "MAN",
          "name": "Manikganj "
        },
        {
          "value": "MEH",
          "name": "Meherpur"
        },
        {
          "value": "MOU",
          "name": "Moulvibazar"
        },
        {
          "value": "MUN",
          "name": "Munshiganj"
        },
        {
          "value": "MYM",
          "name": "Mymensingh"
        },
        {
          "value": "NAO",
          "name": "Naogaon"
        },
        {
          "value": "NAR",
          "name": "Narail"
        },
        {
          "value": "NARG",
          "name": "Narayanganj"
        },
        {
          "value": "NARD",
          "name": "Narsingdi"
        },
        {
          "value": "NAT",
          "name": "Natore"
        },
        {
          "value": "NAW",
          "name": "Nawabganj"
        },
        {
          "value": "NET",
          "name": "Netrakona"
        },
        {
          "value": "NIL",
          "name": "Nilphamari"
        },
        {
          "value": "NOA",
          "name": "Noakhali"
        },
        {
          "value": "PAB",
          "name": "Pabna"
        },
        {
          "value": "PAN",
          "name": "Panchagarh"
        },
        {
          "value": "PAT",
          "name": "Patuakhali"
        },
        {
          "value": "PIR",
          "name": "Pirojpur"
        },
        {
          "value": "RAJB",
          "name": "Rajbari"
        },
        {
          "value": "RAJ",
          "name": "Rajshahi"
        },
        {
          "value": "RAN",
          "name": "Rangamati"
        },
        {
          "value": "RANP",
          "name": "Rangpur"
        },
        {
          "value": "SAT",
          "name": "Satkhira"
        },
        {
          "value": "SHA",
          "name": "Shariatpur"
        },
        {
          "value": "SHE",
          "name": "Sherpur"
        },
        {
          "value": "SIR",
          "name": "Sirajganj"
        },
        {
          "value": "SUN",
          "name": "Sunamganj"
        },
        {
          "value": "SYL",
          "name": "Sylhet"
        },
        {
          "value": "TAN",
          "name": "Tangail"
        },
        {
          "value": "THA",
          "name": "Thakurgaon"
        }
      ],
      "BO": [
        {
          "value": "B",
          "name": "Chuquisaca"
        },
        {
          "value": "H",
          "name": "Beni"
        },
        {
          "value": "C",
          "name": "Cochabamba"
        },
        {
          "value": "L",
          "name": "La Paz"
        },
        {
          "value": "O",
          "name": "Oruro"
        },
        {
          "value": "N",
          "name": "Pando"
        },
        {
          "value": "P",
          "name": "Potosí"
        },
        {
          "value": "S",
          "name": "Santa Cruz"
        },
        {
          "value": "T",
          "name": "Tarija"
        }
      ],
      "BR": [
        {
          "value": "AC",
          "name": "Acre"
        },
        {
          "value": "AL",
          "name": "Alagoas"
        },
        {
          "value": "AP",
          "name": "Amap&aacute;"
        },
        {
          "value": "AM",
          "name": "Amazonas"
        },
        {
          "value": "BA",
          "name": "Bahia"
        },
        {
          "value": "CE",
          "name": "Cear&aacute;"
        },
        {
          "value": "DF",
          "name": "Distrito Federal"
        },
        {
          "value": "ES",
          "name": "Esp&iacute;rito Santo"
        },
        {
          "value": "GO",
          "name": "Goi&aacute;s"
        },
        {
          "value": "MA",
          "name": "Maranh&atilde;o"
        },
        {
          "value": "MT",
          "name": "Mato Grosso"
        },
        {
          "value": "MS",
          "name": "Mato Grosso do Sul"
        },
        {
          "value": "MG",
          "name": "Minas Gerais"
        },
        {
          "value": "PA",
          "name": "Par&aacute;"
        },
        {
          "value": "PB",
          "name": "Para&iacute;ba"
        },
        {
          "value": "PR",
          "name": "Paran&aacute;"
        },
        {
          "value": "PE",
          "name": "Pernambuco"
        },
        {
          "value": "PI",
          "name": "Piau&iacute;"
        },
        {
          "value": "RJ",
          "name": "Rio de Janeiro"
        },
        {
          "value": "RN",
          "name": "Rio Grande do Norte"
        },
        {
          "value": "RS",
          "name": "Rio Grande do Sul"
        },
        {
          "value": "RO",
          "name": "Rond&ocirc;nia"
        },
        {
          "value": "RR",
          "name": "Roraima"
        },
        {
          "value": "SC",
          "name": "Santa Catarina"
        },
        {
          "value": "SP",
          "name": "S&atilde;o Paulo"
        },
        {
          "value": "SE",
          "name": "Sergipe"
        },
        {
          "value": "TO",
          "name": "Tocantins"
        }
      ],
      "BG": [
        {
          "value": "BG-01",
          "name": "Blagoevgrad"
        },
        {
          "value": "BG-02",
          "name": "Burgas"
        },
        {
          "value": "BG-08",
          "name": "Dobrich"
        },
        {
          "value": "BG-07",
          "name": "Gabrovo"
        },
        {
          "value": "BG-26",
          "name": "Haskovo"
        },
        {
          "value": "BG-09",
          "name": "Kardzhali"
        },
        {
          "value": "BG-10",
          "name": "Kyustendil"
        },
        {
          "value": "BG-11",
          "name": "Lovech"
        },
        {
          "value": "BG-12",
          "name": "Montana"
        },
        {
          "value": "BG-13",
          "name": "Pazardzhik"
        },
        {
          "value": "BG-14",
          "name": "Pernik"
        },
        {
          "value": "BG-15",
          "name": "Pleven"
        },
        {
          "value": "BG-16",
          "name": "Plovdiv"
        },
        {
          "value": "BG-17",
          "name": "Razgrad"
        },
        {
          "value": "BG-18",
          "name": "Ruse"
        },
        {
          "value": "BG-27",
          "name": "Shumen"
        },
        {
          "value": "BG-19",
          "name": "Silistra"
        },
        {
          "value": "BG-20",
          "name": "Sliven"
        },
        {
          "value": "BG-21",
          "name": "Smolyan"
        },
        {
          "value": "BG-23",
          "name": "Sofia"
        },
        {
          "value": "BG-22",
          "name": "Sofia-Grad"
        },
        {
          "value": "BG-24",
          "name": "Stara Zagora"
        },
        {
          "value": "BG-25",
          "name": "Targovishte"
        },
        {
          "value": "BG-03",
          "name": "Varna"
        },
        {
          "value": "BG-04",
          "name": "Veliko Tarnovo"
        },
        {
          "value": "BG-05",
          "name": "Vidin"
        },
        {
          "value": "BG-06",
          "name": "Vratsa"
        },
        {
          "value": "BG-28",
          "name": "Yambol"
        }
      ],
      "CA": [
        {
          "value": "AB",
          "name": "Alberta"
        },
        {
          "value": "BC",
          "name": "British Columbia"
        },
        {
          "value": "MB",
          "name": "Manitoba"
        },
        {
          "value": "NB",
          "name": "New Brunswick"
        },
        {
          "value": "NL",
          "name": "Newfoundland and Labrador"
        },
        {
          "value": "NT",
          "name": "Northwest Territories"
        },
        {
          "value": "NS",
          "name": "Nova Scotia"
        },
        {
          "value": "NU",
          "name": "Nunavut"
        },
        {
          "value": "ON",
          "name": "Ontario"
        },
        {
          "value": "PE",
          "name": "Prince Edward Island"
        },
        {
          "value": "QC",
          "name": "Quebec"
        },
        {
          "value": "SK",
          "name": "Saskatchewan"
        },
        {
          "value": "YT",
          "name": "Yukon Territory"
        }
      ],
      "CN": [
        {
          "value": "CN1",
          "name": "Yunnan / &#20113;&#21335;"
        },
        {
          "value": "CN2",
          "name": "Beijing / &#21271;&#20140;"
        },
        {
          "value": "CN3",
          "name": "Tianjin / &#22825;&#27941;"
        },
        {
          "value": "CN4",
          "name": "Hebei / &#27827;&#21271;"
        },
        {
          "value": "CN5",
          "name": "Shanxi / &#23665;&#35199;"
        },
        {
          "value": "CN6",
          "name": "Inner Mongolia / &#20839;&#33945;&#21476;"
        },
        {
          "value": "CN7",
          "name": "Liaoning / &#36797;&#23425;"
        },
        {
          "value": "CN8",
          "name": "Jilin / &#21513;&#26519;"
        },
        {
          "value": "CN9",
          "name": "Heilongjiang / &#40657;&#40857;&#27743;"
        },
        {
          "value": "CN10",
          "name": "Shanghai / &#19978;&#28023;"
        },
        {
          "value": "CN11",
          "name": "Jiangsu / &#27743;&#33487;"
        },
        {
          "value": "CN12",
          "name": "Zhejiang / &#27993;&#27743;"
        },
        {
          "value": "CN13",
          "name": "Anhui / &#23433;&#24509;"
        },
        {
          "value": "CN14",
          "name": "Fujian / &#31119;&#24314;"
        },
        {
          "value": "CN15",
          "name": "Jiangxi / &#27743;&#35199;"
        },
        {
          "value": "CN16",
          "name": "Shandong / &#23665;&#19996;"
        },
        {
          "value": "CN17",
          "name": "Henan / &#27827;&#21335;"
        },
        {
          "value": "CN18",
          "name": "Hubei / &#28246;&#21271;"
        },
        {
          "value": "CN19",
          "name": "Hunan / &#28246;&#21335;"
        },
        {
          "value": "CN20",
          "name": "Guangdong / &#24191;&#19996;"
        },
        {
          "value": "CN21",
          "name": "Guangxi Zhuang / &#24191;&#35199;&#22766;&#26063;"
        },
        {
          "value": "CN22",
          "name": "Hainan / &#28023;&#21335;"
        },
        {
          "value": "CN23",
          "name": "Chongqing / &#37325;&#24198;"
        },
        {
          "value": "CN24",
          "name": "Sichuan / &#22235;&#24029;"
        },
        {
          "value": "CN25",
          "name": "Guizhou / &#36149;&#24030;"
        },
        {
          "value": "CN26",
          "name": "Shaanxi / &#38485;&#35199;"
        },
        {
          "value": "CN27",
          "name": "Gansu / &#29976;&#32899;"
        },
        {
          "value": "CN28",
          "name": "Qinghai / &#38738;&#28023;"
        },
        {
          "value": "CN29",
          "name": "Ningxia Hui / &#23425;&#22799;"
        },
        {
          "value": "CN30",
          "name": "Macau / &#28595;&#38376;"
        },
        {
          "value": "CN31",
          "name": "Tibet / &#35199;&#34255;"
        },
        {
          "value": "CN32",
          "name": "Xinjiang / &#26032;&#30086;"
        }
      ],
      "GR": [
        {
          "value": "I",
          "name": "Αττική"
        },
        {
          "value": "A",
          "name": "Ανατολική Μακεδονία και Θράκη"
        },
        {
          "value": "B",
          "name": "Κεντρική Μακεδονία"
        },
        {
          "value": "C",
          "name": "Δυτική Μακεδονία"
        },
        {
          "value": "D",
          "name": "Ήπειρος"
        },
        {
          "value": "E",
          "name": "Θεσσαλία"
        },
        {
          "value": "F",
          "name": "Ιόνιοι Νήσοι"
        },
        {
          "value": "G",
          "name": "Δυτική Ελλάδα"
        },
        {
          "value": "H",
          "name": "Στερεά Ελλάδα"
        },
        {
          "value": "J",
          "name": "Πελοπόννησος"
        },
        {
          "value": "K",
          "name": "Βόρειο Αιγαίο"
        },
        {
          "value": "L",
          "name": "Νότιο Αιγαίο"
        },
        {
          "value": "M",
          "name": "Κρήτη"
        }
      ],
      "HK": [
        {
          "value": "HONG KONG",
          "name": "Hong Kong Island"
        },
        {
          "value": "KOWLOON",
          "name": "Kowloon"
        },
        {
          "value": "NEW TERRITORIES",
          "name": "New Territories"
        }
      ],
      "HU": [
        {
          "value": "BK",
          "name": "Bács-Kiskun"
        },
        {
          "value": "BE",
          "name": "Békés"
        },
        {
          "value": "BA",
          "name": "Baranya"
        },
        {
          "value": "BZ",
          "name": "Borsod-Abaúj-Zemplén"
        },
        {
          "value": "BU",
          "name": "Budapest"
        },
        {
          "value": "CS",
          "name": "Csongrád"
        },
        {
          "value": "FE",
          "name": "Fejér"
        },
        {
          "value": "GS",
          "name": "Győr-Moson-Sopron"
        },
        {
          "value": "HB",
          "name": "Hajdú-Bihar"
        },
        {
          "value": "HE",
          "name": "Heves"
        },
        {
          "value": "JN",
          "name": "Jász-Nagykun-Szolnok"
        },
        {
          "value": "KE",
          "name": "Komárom-Esztergom"
        },
        {
          "value": "NO",
          "name": "Nógrád"
        },
        {
          "value": "PE",
          "name": "Pest"
        },
        {
          "value": "SO",
          "name": "Somogy"
        },
        {
          "value": "SZ",
          "name": "Szabolcs-Szatmár-Bereg"
        },
        {
          "value": "TO",
          "name": "Tolna"
        },
        {
          "value": "VA",
          "name": "Vas"
        },
        {
          "value": "VE",
          "name": "Veszprém"
        },
        {
          "value": "ZA",
          "name": "Zala"
        }
      ],
      "IN": [
        {
          "value": "AP",
          "name": "Andhra Pradesh"
        },
        {
          "value": "AR",
          "name": "Arunachal Pradesh"
        },
        {
          "value": "AS",
          "name": "Assam"
        },
        {
          "value": "BR",
          "name": "Bihar"
        },
        {
          "value": "CT",
          "name": "Chhattisgarh"
        },
        {
          "value": "GA",
          "name": "Goa"
        },
        {
          "value": "GJ",
          "name": "Gujarat"
        },
        {
          "value": "HR",
          "name": "Haryana"
        },
        {
          "value": "HP",
          "name": "Himachal Pradesh"
        },
        {
          "value": "JK",
          "name": "Jammu and Kashmir"
        },
        {
          "value": "JH",
          "name": "Jharkhand"
        },
        {
          "value": "KA",
          "name": "Karnataka"
        },
        {
          "value": "KL",
          "name": "Kerala"
        },
        {
          "value": "MP",
          "name": "Madhya Pradesh"
        },
        {
          "value": "MH",
          "name": "Maharashtra"
        },
        {
          "value": "MN",
          "name": "Manipur"
        },
        {
          "value": "ML",
          "name": "Meghalaya"
        },
        {
          "value": "MZ",
          "name": "Mizoram"
        },
        {
          "value": "NL",
          "name": "Nagaland"
        },
        {
          "value": "OR",
          "name": "Orissa"
        },
        {
          "value": "PB",
          "name": "Punjab"
        },
        {
          "value": "RJ",
          "name": "Rajasthan"
        },
        {
          "value": "SK",
          "name": "Sikkim"
        },
        {
          "value": "TN",
          "name": "Tamil Nadu"
        },
        {
          "value": "TS",
          "name": "Telangana"
        },
        {
          "value": "TR",
          "name": "Tripura"
        },
        {
          "value": "UK",
          "name": "Uttarakhand"
        },
        {
          "value": "UP",
          "name": "Uttar Pradesh"
        },
        {
          "value": "WB",
          "name": "West Bengal"
        },
        {
          "value": "AN",
          "name": "Andaman and Nicobar Islands"
        },
        {
          "value": "CH",
          "name": "Chandigarh"
        },
        {
          "value": "DN",
          "name": "Dadra and Nagar Haveli"
        },
        {
          "value": "DD",
          "name": "Daman and Diu"
        },
        {
          "value": "DL",
          "name": "Delhi"
        },
        {
          "value": "LD",
          "name": "Lakshadeep"
        },
        {
          "value": "PY",
          "name": "Pondicherry (Puducherry)"
        }
      ],
      "ID": [
        {
          "value": "AC",
          "name": "Daerah Istimewa Aceh"
        },
        {
          "value": "SU",
          "name": "Sumatera Utara"
        },
        {
          "value": "SB",
          "name": "Sumatera Barat"
        },
        {
          "value": "RI",
          "name": "Riau"
        },
        {
          "value": "KR",
          "name": "Kepulauan Riau"
        },
        {
          "value": "JA",
          "name": "Jambi"
        },
        {
          "value": "SS",
          "name": "Sumatera Selatan"
        },
        {
          "value": "BB",
          "name": "Bangka Belitung"
        },
        {
          "value": "BE",
          "name": "Bengkulu"
        },
        {
          "value": "LA",
          "name": "Lampung"
        },
        {
          "value": "JK",
          "name": "DKI Jakarta"
        },
        {
          "value": "JB",
          "name": "Jawa Barat"
        },
        {
          "value": "BT",
          "name": "Banten"
        },
        {
          "value": "JT",
          "name": "Jawa Tengah"
        },
        {
          "value": "JI",
          "name": "Jawa Timur"
        },
        {
          "value": "YO",
          "name": "Daerah Istimewa Yogyakarta"
        },
        {
          "value": "BA",
          "name": "Bali"
        },
        {
          "value": "NB",
          "name": "Nusa Tenggara Barat"
        },
        {
          "value": "NT",
          "name": "Nusa Tenggara Timur"
        },
        {
          "value": "KB",
          "name": "Kalimantan Barat"
        },
        {
          "value": "KT",
          "name": "Kalimantan Tengah"
        },
        {
          "value": "KI",
          "name": "Kalimantan Timur"
        },
        {
          "value": "KS",
          "name": "Kalimantan Selatan"
        },
        {
          "value": "KU",
          "name": "Kalimantan Utara"
        },
        {
          "value": "SA",
          "name": "Sulawesi Utara"
        },
        {
          "value": "ST",
          "name": "Sulawesi Tengah"
        },
        {
          "value": "SG",
          "name": "Sulawesi Tenggara"
        },
        {
          "value": "SR",
          "name": "Sulawesi Barat"
        },
        {
          "value": "SN",
          "name": "Sulawesi Selatan"
        },
        {
          "value": "GO",
          "name": "Gorontalo"
        },
        {
          "value": "MA",
          "name": "Maluku"
        },
        {
          "value": "MU",
          "name": "Maluku Utara"
        },
        {
          "value": "PA",
          "name": "Papua"
        },
        {
          "value": "PB",
          "name": "Papua Barat"
        }
      ],
      "IR": [
        {
          "value": "KHZ",
          "name": "Khuzestan  (خوزستان)"
        },
        {
          "value": "THR",
          "name": "Tehran  (تهران)"
        },
        {
          "value": "ILM",
          "name": "Ilaam (ایلام)"
        },
        {
          "value": "BHR",
          "name": "Bushehr (بوشهر)"
        },
        {
          "value": "ADL",
          "name": "Ardabil (اردبیل)"
        },
        {
          "value": "ESF",
          "name": "Isfahan (اصفهان)"
        },
        {
          "value": "YZD",
          "name": "Yazd (یزد)"
        },
        {
          "value": "KRH",
          "name": "Kermanshah (کرمانشاه)"
        },
        {
          "value": "KRN",
          "name": "Kerman (کرمان)"
        },
        {
          "value": "HDN",
          "name": "Hamadan (همدان)"
        },
        {
          "value": "GZN",
          "name": "Ghazvin (قزوین)"
        },
        {
          "value": "ZJN",
          "name": "Zanjan (زنجان)"
        },
        {
          "value": "LRS",
          "name": "Luristan (لرستان)"
        },
        {
          "value": "ABZ",
          "name": "Alborz (البرز)"
        },
        {
          "value": "EAZ",
          "name": "East Azarbaijan (آذربایجان شرقی)"
        },
        {
          "value": "WAZ",
          "name": "West Azarbaijan (آذربایجان غربی)"
        },
        {
          "value": "CHB",
          "name": "Chaharmahal and Bakhtiari (چهارمحال و بختیاری)"
        },
        {
          "value": "SKH",
          "name": "South Khorasan (خراسان جنوبی)"
        },
        {
          "value": "RKH",
          "name": "Razavi Khorasan (خراسان رضوی)"
        },
        {
          "value": "NKH",
          "name": "North Khorasan (خراسان جنوبی)"
        },
        {
          "value": "SMN",
          "name": "Semnan (سمنان)"
        },
        {
          "value": "FRS",
          "name": "Fars (فارس)"
        },
        {
          "value": "QHM",
          "name": "Qom (قم)"
        },
        {
          "value": "KRD",
          "name": "Kurdistan / کردستان)"
        },
        {
          "value": "KBD",
          "name": "Kohgiluyeh and BoyerAhmad (کهگیلوییه و بویراحمد)"
        },
        {
          "value": "GLS",
          "name": "Golestan (گلستان)"
        },
        {
          "value": "GIL",
          "name": "Gilan (گیلان)"
        },
        {
          "value": "MZN",
          "name": "Mazandaran (مازندران)"
        },
        {
          "value": "MKZ",
          "name": "Markazi (مرکزی)"
        },
        {
          "value": "HRZ",
          "name": "Hormozgan (هرمزگان)"
        },
        {
          "value": "SBN",
          "name": "Sistan and Baluchestan (سیستان و بلوچستان)"
        }
      ],
      "IE": [
        {
          "value": "CE",
          "name": "Clare"
        },
        {
          "value": "CK",
          "name": "Cork"
        },
        {
          "value": "CN",
          "name": "Cavan"
        },
        {
          "value": "CW",
          "name": "Carlow"
        },
        {
          "value": "DL",
          "name": "Donegal"
        },
        {
          "value": "DN",
          "name": "Dublin"
        },
        {
          "value": "GY",
          "name": "Galway"
        },
        {
          "value": "KE",
          "name": "Kildare"
        },
        {
          "value": "KK",
          "name": "Kilkenny"
        },
        {
          "value": "KY",
          "name": "Kerry"
        },
        {
          "value": "LD",
          "name": "Longford"
        },
        {
          "value": "LH",
          "name": "Louth"
        },
        {
          "value": "LK",
          "name": "Limerick"
        },
        {
          "value": "LM",
          "name": "Leitrim"
        },
        {
          "value": "LS",
          "name": "Laois"
        },
        {
          "value": "MH",
          "name": "Meath"
        },
        {
          "value": "MN",
          "name": "Monaghan"
        },
        {
          "value": "MO",
          "name": "Mayo"
        },
        {
          "value": "OY",
          "name": "Offaly"
        },
        {
          "value": "RN",
          "name": "Roscommon"
        },
        {
          "value": "SO",
          "name": "Sligo"
        },
        {
          "value": "TY",
          "name": "Tipperary"
        },
        {
          "value": "WD",
          "name": "Waterford"
        },
        {
          "value": "WH",
          "name": "Westmeath"
        },
        {
          "value": "WW",
          "name": "Wicklow"
        },
        {
          "value": "WX",
          "name": "Wexford"
        }
      ],
      "IT": [
        {
          "value": "AG",
          "name": "Agrigento"
        },
        {
          "value": "AL",
          "name": "Alessandria"
        },
        {
          "value": "AN",
          "name": "Ancona"
        },
        {
          "value": "AO",
          "name": "Aosta"
        },
        {
          "value": "AR",
          "name": "Arezzo"
        },
        {
          "value": "AP",
          "name": "Ascoli Piceno"
        },
        {
          "value": "AT",
          "name": "Asti"
        },
        {
          "value": "AV",
          "name": "Avellino"
        },
        {
          "value": "BA",
          "name": "Bari"
        },
        {
          "value": "BT",
          "name": "Barletta-Andria-Trani"
        },
        {
          "value": "BL",
          "name": "Belluno"
        },
        {
          "value": "BN",
          "name": "Benevento"
        },
        {
          "value": "BG",
          "name": "Bergamo"
        },
        {
          "value": "BI",
          "name": "Biella"
        },
        {
          "value": "BO",
          "name": "Bologna"
        },
        {
          "value": "BZ",
          "name": "Bolzano"
        },
        {
          "value": "BS",
          "name": "Brescia"
        },
        {
          "value": "BR",
          "name": "Brindisi"
        },
        {
          "value": "CA",
          "name": "Cagliari"
        },
        {
          "value": "CL",
          "name": "Caltanissetta"
        },
        {
          "value": "CB",
          "name": "Campobasso"
        },
        {
          "value": "CI",
          "name": "Carbonia-Iglesias"
        },
        {
          "value": "CE",
          "name": "Caserta"
        },
        {
          "value": "CT",
          "name": "Catania"
        },
        {
          "value": "CZ",
          "name": "Catanzaro"
        },
        {
          "value": "CH",
          "name": "Chieti"
        },
        {
          "value": "CO",
          "name": "Como"
        },
        {
          "value": "CS",
          "name": "Cosenza"
        },
        {
          "value": "CR",
          "name": "Cremona"
        },
        {
          "value": "KR",
          "name": "Crotone"
        },
        {
          "value": "CN",
          "name": "Cuneo"
        },
        {
          "value": "EN",
          "name": "Enna"
        },
        {
          "value": "FM",
          "name": "Fermo"
        },
        {
          "value": "FE",
          "name": "Ferrara"
        },
        {
          "value": "FI",
          "name": "Firenze"
        },
        {
          "value": "FG",
          "name": "Foggia"
        },
        {
          "value": "FC",
          "name": "Forlì-Cesena"
        },
        {
          "value": "FR",
          "name": "Frosinone"
        },
        {
          "value": "GE",
          "name": "Genova"
        },
        {
          "value": "GO",
          "name": "Gorizia"
        },
        {
          "value": "GR",
          "name": "Grosseto"
        },
        {
          "value": "IM",
          "name": "Imperia"
        },
        {
          "value": "IS",
          "name": "Isernia"
        },
        {
          "value": "SP",
          "name": "La Spezia"
        },
        {
          "value": "AQ",
          "name": "L'Aquila"
        },
        {
          "value": "LT",
          "name": "Latina"
        },
        {
          "value": "LE",
          "name": "Lecce"
        },
        {
          "value": "LC",
          "name": "Lecco"
        },
        {
          "value": "LI",
          "name": "Livorno"
        },
        {
          "value": "LO",
          "name": "Lodi"
        },
        {
          "value": "LU",
          "name": "Lucca"
        },
        {
          "value": "MC",
          "name": "Macerata"
        },
        {
          "value": "MN",
          "name": "Mantova"
        },
        {
          "value": "MS",
          "name": "Massa-Carrara"
        },
        {
          "value": "MT",
          "name": "Matera"
        },
        {
          "value": "ME",
          "name": "Messina"
        },
        {
          "value": "MI",
          "name": "Milano"
        },
        {
          "value": "MO",
          "name": "Modena"
        },
        {
          "value": "MB",
          "name": "Monza e della Brianza"
        },
        {
          "value": "NA",
          "name": "Napoli"
        },
        {
          "value": "NO",
          "name": "Novara"
        },
        {
          "value": "NU",
          "name": "Nuoro"
        },
        {
          "value": "OT",
          "name": "Olbia-Tempio"
        },
        {
          "value": "OR",
          "name": "Oristano"
        },
        {
          "value": "PD",
          "name": "Padova"
        },
        {
          "value": "PA",
          "name": "Palermo"
        },
        {
          "value": "PR",
          "name": "Parma"
        },
        {
          "value": "PV",
          "name": "Pavia"
        },
        {
          "value": "PG",
          "name": "Perugia"
        },
        {
          "value": "PU",
          "name": "Pesaro e Urbino"
        },
        {
          "value": "PE",
          "name": "Pescara"
        },
        {
          "value": "PC",
          "name": "Piacenza"
        },
        {
          "value": "PI",
          "name": "Pisa"
        },
        {
          "value": "PT",
          "name": "Pistoia"
        },
        {
          "value": "PN",
          "name": "Pordenone"
        },
        {
          "value": "PZ",
          "name": "Potenza"
        },
        {
          "value": "PO",
          "name": "Prato"
        },
        {
          "value": "RG",
          "name": "Ragusa"
        },
        {
          "value": "RA",
          "name": "Ravenna"
        },
        {
          "value": "RC",
          "name": "Reggio Calabria"
        },
        {
          "value": "RE",
          "name": "Reggio Emilia"
        },
        {
          "value": "RI",
          "name": "Rieti"
        },
        {
          "value": "RN",
          "name": "Rimini"
        },
        {
          "value": "RM",
          "name": "Roma"
        },
        {
          "value": "RO",
          "name": "Rovigo"
        },
        {
          "value": "SA",
          "name": "Salerno"
        },
        {
          "value": "VS",
          "name": "Medio Campidano"
        },
        {
          "value": "SS",
          "name": "Sassari"
        },
        {
          "value": "SV",
          "name": "Savona"
        },
        {
          "value": "SI",
          "name": "Siena"
        },
        {
          "value": "SR",
          "name": "Siracusa"
        },
        {
          "value": "SO",
          "name": "Sondrio"
        },
        {
          "value": "TA",
          "name": "Taranto"
        },
        {
          "value": "TE",
          "name": "Teramo"
        },
        {
          "value": "TR",
          "name": "Terni"
        },
        {
          "value": "TO",
          "name": "Torino"
        },
        {
          "value": "OG",
          "name": "Ogliastra"
        },
        {
          "value": "TP",
          "name": "Trapani"
        },
        {
          "value": "TN",
          "name": "Trento"
        },
        {
          "value": "TV",
          "name": "Treviso"
        },
        {
          "value": "TS",
          "name": "Trieste"
        },
        {
          "value": "UD",
          "name": "Udine"
        },
        {
          "value": "VA",
          "name": "Varese"
        },
        {
          "value": "VE",
          "name": "Venezia"
        },
        {
          "value": "VB",
          "name": "Verbano-Cusio-Ossola"
        },
        {
          "value": "VC",
          "name": "Vercelli"
        },
        {
          "value": "VR",
          "name": "Verona"
        },
        {
          "value": "VV",
          "name": "Vibo Valentia"
        },
        {
          "value": "VI",
          "name": "Vicenza"
        },
        {
          "value": "VT",
          "name": "Viterbo"
        }
      ],
      "JP": [
        {
          "value": "JP01",
          "name": "Hokkaido"
        },
        {
          "value": "JP02",
          "name": "Aomori"
        },
        {
          "value": "JP03",
          "name": "Iwate"
        },
        {
          "value": "JP04",
          "name": "Miyagi"
        },
        {
          "value": "JP05",
          "name": "Akita"
        },
        {
          "value": "JP06",
          "name": "Yamagata"
        },
        {
          "value": "JP07",
          "name": "Fukushima"
        },
        {
          "value": "JP08",
          "name": "Ibaraki"
        },
        {
          "value": "JP09",
          "name": "Tochigi"
        },
        {
          "value": "JP10",
          "name": "Gunma"
        },
        {
          "value": "JP11",
          "name": "Saitama"
        },
        {
          "value": "JP12",
          "name": "Chiba"
        },
        {
          "value": "JP13",
          "name": "Tokyo"
        },
        {
          "value": "JP14",
          "name": "Kanagawa"
        },
        {
          "value": "JP15",
          "name": "Niigata"
        },
        {
          "value": "JP16",
          "name": "Toyama"
        },
        {
          "value": "JP17",
          "name": "Ishikawa"
        },
        {
          "value": "JP18",
          "name": "Fukui"
        },
        {
          "value": "JP19",
          "name": "Yamanashi"
        },
        {
          "value": "JP20",
          "name": "Nagano"
        },
        {
          "value": "JP21",
          "name": "Gifu"
        },
        {
          "value": "JP22",
          "name": "Shizuoka"
        },
        {
          "value": "JP23",
          "name": "Aichi"
        },
        {
          "value": "JP24",
          "name": "Mie"
        },
        {
          "value": "JP25",
          "name": "Shiga"
        },
        {
          "value": "JP26",
          "name": "Kyoto"
        },
        {
          "value": "JP27",
          "name": "Osaka"
        },
        {
          "value": "JP28",
          "name": "Hyogo"
        },
        {
          "value": "JP29",
          "name": "Nara"
        },
        {
          "value": "JP30",
          "name": "Wakayama"
        },
        {
          "value": "JP31",
          "name": "Tottori"
        },
        {
          "value": "JP32",
          "name": "Shimane"
        },
        {
          "value": "JP33",
          "name": "Okayama"
        },
        {
          "value": "JP34",
          "name": "Hiroshima"
        },
        {
          "value": "JP35",
          "name": "Yamaguchi"
        },
        {
          "value": "JP36",
          "name": "Tokushima"
        },
        {
          "value": "JP37",
          "name": "Kagawa"
        },
        {
          "value": "JP38",
          "name": "Ehime"
        },
        {
          "value": "JP39",
          "name": "Kochi"
        },
        {
          "value": "JP40",
          "name": "Fukuoka"
        },
        {
          "value": "JP41",
          "name": "Saga"
        },
        {
          "value": "JP42",
          "name": "Nagasaki"
        },
        {
          "value": "JP43",
          "name": "Kumamoto"
        },
        {
          "value": "JP44",
          "name": "Oita"
        },
        {
          "value": "JP45",
          "name": "Miyazaki"
        },
        {
          "value": "JP46",
          "name": "Kagoshima"
        },
        {
          "value": "JP47",
          "name": "Okinawa"
        }
      ],
      "MY": [
        {
          "value": "JHR",
          "name": "Johor"
        },
        {
          "value": "KDH",
          "name": "Kedah"
        },
        {
          "value": "KTN",
          "name": "Kelantan"
        },
        {
          "value": "LBN",
          "name": "Labuan"
        },
        {
          "value": "MLK",
          "name": "Malacca (Melaka)"
        },
        {
          "value": "NSN",
          "name": "Negeri Sembilan"
        },
        {
          "value": "PHG",
          "name": "Pahang"
        },
        {
          "value": "PNG",
          "name": "Penang (Pulau Pinang)"
        },
        {
          "value": "PRK",
          "name": "Perak"
        },
        {
          "value": "PLS",
          "name": "Perlis"
        },
        {
          "value": "SBH",
          "name": "Sabah"
        },
        {
          "value": "SWK",
          "name": "Sarawak"
        },
        {
          "value": "SGR",
          "name": "Selangor"
        },
        {
          "value": "TRG",
          "name": "Terengganu"
        },
        {
          "value": "PJY",
          "name": "Putrajaya"
        },
        {
          "value": "KUL",
          "name": "Kuala Lumpur"
        }
      ],
      "MX": [
        {
          "value": "Distrito Federal",
          "name": "Distrito Federal"
        },
        {
          "value": "Jalisco",
          "name": "Jalisco"
        },
        {
          "value": "Nuevo Leon",
          "name": "Nuevo León"
        },
        {
          "value": "Aguascalientes",
          "name": "Aguascalientes"
        },
        {
          "value": "Baja California",
          "name": "Baja California"
        },
        {
          "value": "Baja California Sur",
          "name": "Baja California Sur"
        },
        {
          "value": "Campeche",
          "name": "Campeche"
        },
        {
          "value": "Chiapas",
          "name": "Chiapas"
        },
        {
          "value": "Chihuahua",
          "name": "Chihuahua"
        },
        {
          "value": "Coahuila",
          "name": "Coahuila"
        },
        {
          "value": "Colima",
          "name": "Colima"
        },
        {
          "value": "Durango",
          "name": "Durango"
        },
        {
          "value": "Guanajuato",
          "name": "Guanajuato"
        },
        {
          "value": "Guerrero",
          "name": "Guerrero"
        },
        {
          "value": "Hidalgo",
          "name": "Hidalgo"
        },
        {
          "value": "Estado de Mexico",
          "name": "Edo. de México"
        },
        {
          "value": "Michoacan",
          "name": "Michoacán"
        },
        {
          "value": "Morelos",
          "name": "Morelos"
        },
        {
          "value": "Nayarit",
          "name": "Nayarit"
        },
        {
          "value": "Oaxaca",
          "name": "Oaxaca"
        },
        {
          "value": "Puebla",
          "name": "Puebla"
        },
        {
          "value": "Queretaro",
          "name": "Querétaro"
        },
        {
          "value": "Quintana Roo",
          "name": "Quintana Roo"
        },
        {
          "value": "San Luis Potosi",
          "name": "San Luis Potosí"
        },
        {
          "value": "Sinaloa",
          "name": "Sinaloa"
        },
        {
          "value": "Sonora",
          "name": "Sonora"
        },
        {
          "value": "Tabasco",
          "name": "Tabasco"
        },
        {
          "value": "Tamaulipas",
          "name": "Tamaulipas"
        },
        {
          "value": "Tlaxcala",
          "name": "Tlaxcala"
        },
        {
          "value": "Veracruz",
          "name": "Veracruz"
        },
        {
          "value": "Yucatan",
          "name": "Yucatán"
        },
        {
          "value": "Zacatecas",
          "name": "Zacatecas"
        }
      ],
      "NP": [
        {
          "value": "BAG",
          "name": "Bagmati"
        },
        {
          "value": "BHE",
          "name": "Bheri"
        },
        {
          "value": "DHA",
          "name": "Dhaulagiri"
        },
        {
          "value": "GAN",
          "name": "Gandaki"
        },
        {
          "value": "JAN",
          "name": "Janakpur"
        },
        {
          "value": "KAR",
          "name": "Karnali"
        },
        {
          "value": "KOS",
          "name": "Koshi"
        },
        {
          "value": "LUM",
          "name": "Lumbini"
        },
        {
          "value": "MAH",
          "name": "Mahakali"
        },
        {
          "value": "MEC",
          "name": "Mechi"
        },
        {
          "value": "NAR",
          "name": "Narayani"
        },
        {
          "value": "RAP",
          "name": "Rapti"
        },
        {
          "value": "SAG",
          "name": "Sagarmatha"
        },
        {
          "value": "SET",
          "name": "Seti"
        }
      ],
      "NZ": [
        {
          "value": "NL",
          "name": "Northland"
        },
        {
          "value": "AK",
          "name": "Auckland"
        },
        {
          "value": "WA",
          "name": "Waikato"
        },
        {
          "value": "BP",
          "name": "Bay of Plenty"
        },
        {
          "value": "TK",
          "name": "Taranaki"
        },
        {
          "value": "GI",
          "name": "Gisborne"
        },
        {
          "value": "HB",
          "name": "Hawke&rsquo;s Bay"
        },
        {
          "value": "MW",
          "name": "Manawatu-Wanganui"
        },
        {
          "value": "WE",
          "name": "Wellington"
        },
        {
          "value": "NS",
          "name": "Nelson"
        },
        {
          "value": "MB",
          "name": "Marlborough"
        },
        {
          "value": "TM",
          "name": "Tasman"
        },
        {
          "value": "WC",
          "name": "West Coast"
        },
        {
          "value": "CT",
          "name": "Canterbury"
        },
        {
          "value": "OT",
          "name": "Otago"
        },
        {
          "value": "SL",
          "name": "Southland"
        }
      ],
      "NG": [
        {
          "value": "AB",
          "name": "Abia"
        },
        {
          "value": "FC",
          "name": "Abuja"
        },
        {
          "value": "AD",
          "name": "Adamawa"
        },
        {
          "value": "AK",
          "name": "Akwa Ibom"
        },
        {
          "value": "AN",
          "name": "Anambra"
        },
        {
          "value": "BA",
          "name": "Bauchi"
        },
        {
          "value": "BY",
          "name": "Bayelsa"
        },
        {
          "value": "BE",
          "name": "Benue"
        },
        {
          "value": "BO",
          "name": "Borno"
        },
        {
          "value": "CR",
          "name": "Cross River"
        },
        {
          "value": "DE",
          "name": "Delta"
        },
        {
          "value": "EB",
          "name": "Ebonyi"
        },
        {
          "value": "ED",
          "name": "Edo"
        },
        {
          "value": "EK",
          "name": "Ekiti"
        },
        {
          "value": "EN",
          "name": "Enugu"
        },
        {
          "value": "GO",
          "name": "Gombe"
        },
        {
          "value": "IM",
          "name": "Imo"
        },
        {
          "value": "JI",
          "name": "Jigawa"
        },
        {
          "value": "KD",
          "name": "Kaduna"
        },
        {
          "value": "KN",
          "name": "Kano"
        },
        {
          "value": "KT",
          "name": "Katsina"
        },
        {
          "value": "KE",
          "name": "Kebbi"
        },
        {
          "value": "KO",
          "name": "Kogi"
        },
        {
          "value": "KW",
          "name": "Kwara"
        },
        {
          "value": "LA",
          "name": "Lagos"
        },
        {
          "value": "NA",
          "name": "Nasarawa"
        },
        {
          "value": "NI",
          "name": "Niger"
        },
        {
          "value": "OG",
          "name": "Ogun"
        },
        {
          "value": "ON",
          "name": "Ondo"
        },
        {
          "value": "OS",
          "name": "Osun"
        },
        {
          "value": "OY",
          "name": "Oyo"
        },
        {
          "value": "PL",
          "name": "Plateau"
        },
        {
          "value": "RI",
          "name": "Rivers"
        },
        {
          "value": "SO",
          "name": "Sokoto"
        },
        {
          "value": "TA",
          "name": "Taraba"
        },
        {
          "value": "YO",
          "name": "Yobe"
        },
        {
          "value": "ZA",
          "name": "Zamfara"
        }
      ],
      "PK": [
        {
          "value": "JK",
          "name": "Azad Kashmir"
        },
        {
          "value": "BA",
          "name": "Balochistan"
        },
        {
          "value": "TA",
          "name": "FATA"
        },
        {
          "value": "GB",
          "name": "Gilgit Baltistan"
        },
        {
          "value": "IS",
          "name": "Islamabad Capital Territory"
        },
        {
          "value": "KP",
          "name": "Khyber Pakhtunkhwa"
        },
        {
          "value": "PB",
          "name": "Punjab"
        },
        {
          "value": "SD",
          "name": "Sindh"
        }
      ],
      "PE": [
        {
          "value": "CAL",
          "name": "El Callao"
        },
        {
          "value": "LMA",
          "name": "Municipalidad Metropolitana de Lima"
        },
        {
          "value": "AMA",
          "name": "Amazonas"
        },
        {
          "value": "ANC",
          "name": "Ancash"
        },
        {
          "value": "APU",
          "name": "Apur&iacute;mac"
        },
        {
          "value": "ARE",
          "name": "Arequipa"
        },
        {
          "value": "AYA",
          "name": "Ayacucho"
        },
        {
          "value": "CAJ",
          "name": "Cajamarca"
        },
        {
          "value": "CUS",
          "name": "Cusco"
        },
        {
          "value": "HUV",
          "name": "Huancavelica"
        },
        {
          "value": "HUC",
          "name": "Hu&aacute;nuco"
        },
        {
          "value": "ICA",
          "name": "Ica"
        },
        {
          "value": "JUN",
          "name": "Jun&iacute;n"
        },
        {
          "value": "LAL",
          "name": "La Libertad"
        },
        {
          "value": "LAM",
          "name": "Lambayeque"
        },
        {
          "value": "LIM",
          "name": "Lima"
        },
        {
          "value": "LOR",
          "name": "Loreto"
        },
        {
          "value": "MDD",
          "name": "Madre de Dios"
        },
        {
          "value": "MOQ",
          "name": "Moquegua"
        },
        {
          "value": "PAS",
          "name": "Pasco"
        },
        {
          "value": "PIU",
          "name": "Piura"
        },
        {
          "value": "PUN",
          "name": "Puno"
        },
        {
          "value": "SAM",
          "name": "San Mart&iacute;n"
        },
        {
          "value": "TAC",
          "name": "Tacna"
        },
        {
          "value": "TUM",
          "name": "Tumbes"
        },
        {
          "value": "UCA",
          "name": "Ucayali"
        }
      ],
      "PH": [
        {
          "value": "ABR",
          "name": "Abra"
        },
        {
          "value": "AGN",
          "name": "Agusan del Norte"
        },
        {
          "value": "AGS",
          "name": "Agusan del Sur"
        },
        {
          "value": "AKL",
          "name": "Aklan"
        },
        {
          "value": "ALB",
          "name": "Albay"
        },
        {
          "value": "ANT",
          "name": "Antique"
        },
        {
          "value": "APA",
          "name": "Apayao"
        },
        {
          "value": "AUR",
          "name": "Aurora"
        },
        {
          "value": "BAS",
          "name": "Basilan"
        },
        {
          "value": "BAN",
          "name": "Bataan"
        },
        {
          "value": "BTN",
          "name": "Batanes"
        },
        {
          "value": "BTG",
          "name": "Batangas"
        },
        {
          "value": "BEN",
          "name": "Benguet"
        },
        {
          "value": "BIL",
          "name": "Biliran"
        },
        {
          "value": "BOH",
          "name": "Bohol"
        },
        {
          "value": "BUK",
          "name": "Bukidnon"
        },
        {
          "value": "BUL",
          "name": "Bulacan"
        },
        {
          "value": "CAG",
          "name": "Cagayan"
        },
        {
          "value": "CAN",
          "name": "Camarines Norte"
        },
        {
          "value": "CAS",
          "name": "Camarines Sur"
        },
        {
          "value": "CAM",
          "name": "Camiguin"
        },
        {
          "value": "CAP",
          "name": "Capiz"
        },
        {
          "value": "CAT",
          "name": "Catanduanes"
        },
        {
          "value": "CAV",
          "name": "Cavite"
        },
        {
          "value": "CEB",
          "name": "Cebu"
        },
        {
          "value": "COM",
          "name": "Compostela Valley"
        },
        {
          "value": "NCO",
          "name": "Cotabato"
        },
        {
          "value": "DAV",
          "name": "Davao del Norte"
        },
        {
          "value": "DAS",
          "name": "Davao del Sur"
        },
        {
          "value": "DAC",
          "name": "Davao Occidental"
        },
        {
          "value": "DAO",
          "name": "Davao Oriental"
        },
        {
          "value": "DIN",
          "name": "Dinagat Islands"
        },
        {
          "value": "EAS",
          "name": "Eastern Samar"
        },
        {
          "value": "GUI",
          "name": "Guimaras"
        },
        {
          "value": "IFU",
          "name": "Ifugao"
        },
        {
          "value": "ILN",
          "name": "Ilocos Norte"
        },
        {
          "value": "ILS",
          "name": "Ilocos Sur"
        },
        {
          "value": "ILI",
          "name": "Iloilo"
        },
        {
          "value": "ISA",
          "name": "Isabela"
        },
        {
          "value": "KAL",
          "name": "Kalinga"
        },
        {
          "value": "LUN",
          "name": "La Union"
        },
        {
          "value": "LAG",
          "name": "Laguna"
        },
        {
          "value": "LAN",
          "name": "Lanao del Norte"
        },
        {
          "value": "LAS",
          "name": "Lanao del Sur"
        },
        {
          "value": "LEY",
          "name": "Leyte"
        },
        {
          "value": "MAG",
          "name": "Maguindanao"
        },
        {
          "value": "MAD",
          "name": "Marinduque"
        },
        {
          "value": "MAS",
          "name": "Masbate"
        },
        {
          "value": "MSC",
          "name": "Misamis Occidental"
        },
        {
          "value": "MSR",
          "name": "Misamis Oriental"
        },
        {
          "value": "MOU",
          "name": "Mountain Province"
        },
        {
          "value": "NEC",
          "name": "Negros Occidental"
        },
        {
          "value": "NER",
          "name": "Negros Oriental"
        },
        {
          "value": "NSA",
          "name": "Northern Samar"
        },
        {
          "value": "NUE",
          "name": "Nueva Ecija"
        },
        {
          "value": "NUV",
          "name": "Nueva Vizcaya"
        },
        {
          "value": "MDC",
          "name": "Occidental Mindoro"
        },
        {
          "value": "MDR",
          "name": "Oriental Mindoro"
        },
        {
          "value": "PLW",
          "name": "Palawan"
        },
        {
          "value": "PAM",
          "name": "Pampanga"
        },
        {
          "value": "PAN",
          "name": "Pangasinan"
        },
        {
          "value": "QUE",
          "name": "Quezon"
        },
        {
          "value": "QUI",
          "name": "Quirino"
        },
        {
          "value": "RIZ",
          "name": "Rizal"
        },
        {
          "value": "ROM",
          "name": "Romblon"
        },
        {
          "value": "WSA",
          "name": "Samar"
        },
        {
          "value": "SAR",
          "name": "Sarangani"
        },
        {
          "value": "SIQ",
          "name": "Siquijor"
        },
        {
          "value": "SOR",
          "name": "Sorsogon"
        },
        {
          "value": "SCO",
          "name": "South Cotabato"
        },
        {
          "value": "SLE",
          "name": "Southern Leyte"
        },
        {
          "value": "SUK",
          "name": "Sultan Kudarat"
        },
        {
          "value": "SLU",
          "name": "Sulu"
        },
        {
          "value": "SUN",
          "name": "Surigao del Norte"
        },
        {
          "value": "SUR",
          "name": "Surigao del Sur"
        },
        {
          "value": "TAR",
          "name": "Tarlac"
        },
        {
          "value": "TAW",
          "name": "Tawi-Tawi"
        },
        {
          "value": "ZMB",
          "name": "Zambales"
        },
        {
          "value": "ZAN",
          "name": "Zamboanga del Norte"
        },
        {
          "value": "ZAS",
          "name": "Zamboanga del Sur"
        },
        {
          "value": "ZSI",
          "name": "Zamboanga Sibugay"
        },
        {
          "value": "00",
          "name": "Metro Manila"
        }
      ],
      "RO": [
        {
          "value": "AB",
          "name": "Alba"
        },
        {
          "value": "AR",
          "name": "Arad"
        },
        {
          "value": "AG",
          "name": "Arges"
        },
        {
          "value": "BC",
          "name": "Bacau"
        },
        {
          "value": "BH",
          "name": "Bihor"
        },
        {
          "value": "BN",
          "name": "Bistrita-Nasaud"
        },
        {
          "value": "BT",
          "name": "Botosani"
        },
        {
          "value": "BR",
          "name": "Braila"
        },
        {
          "value": "BV",
          "name": "Brasov"
        },
        {
          "value": "B",
          "name": "Bucuresti"
        },
        {
          "value": "BZ",
          "name": "Buzau"
        },
        {
          "value": "CL",
          "name": "Calarasi"
        },
        {
          "value": "CS",
          "name": "Caras-Severin"
        },
        {
          "value": "CJ",
          "name": "Cluj"
        },
        {
          "value": "CT",
          "name": "Constanta"
        },
        {
          "value": "CV",
          "name": "Covasna"
        },
        {
          "value": "DB",
          "name": "Dambovita"
        },
        {
          "value": "DJ",
          "name": "Dolj"
        },
        {
          "value": "GL",
          "name": "Galati"
        },
        {
          "value": "GR",
          "name": "Giurgiu"
        },
        {
          "value": "GJ",
          "name": "Gorj"
        },
        {
          "value": "HR",
          "name": "Harghita"
        },
        {
          "value": "HD",
          "name": "Hunedoara"
        },
        {
          "value": "IL",
          "name": "Ialomita"
        },
        {
          "value": "IS",
          "name": "Iasi"
        },
        {
          "value": "IF",
          "name": "Ilfov"
        },
        {
          "value": "MM",
          "name": "Maramures"
        },
        {
          "value": "MH",
          "name": "Mehedinti"
        },
        {
          "value": "MS",
          "name": "Mures"
        },
        {
          "value": "NT",
          "name": "Neamt"
        },
        {
          "value": "OT",
          "name": "Olt"
        },
        {
          "value": "PH",
          "name": "Prahova"
        },
        {
          "value": "SJ",
          "name": "Salaj"
        },
        {
          "value": "SM",
          "name": "Satu Mare"
        },
        {
          "value": "SB",
          "name": "Sibiu"
        },
        {
          "value": "SV",
          "name": "Suceava"
        },
        {
          "value": "TR",
          "name": "Teleorman"
        },
        {
          "value": "TM",
          "name": "Timis"
        },
        {
          "value": "TL",
          "name": "Tulcea"
        },
        {
          "value": "VL",
          "name": "Valcea"
        },
        {
          "value": "VS",
          "name": "Vaslui"
        },
        {
          "value": "VN",
          "name": "Vrancea"
        }
      ],
      "ZA": [
        {
          "value": "EC",
          "name": "Eastern Cape"
        },
        {
          "value": "FS",
          "name": "Free State"
        },
        {
          "value": "GP",
          "name": "Gauteng"
        },
        {
          "value": "KZN",
          "name": "KwaZulu-Natal"
        },
        {
          "value": "LP",
          "name": "Limpopo"
        },
        {
          "value": "MP",
          "name": "Mpumalanga"
        },
        {
          "value": "NC",
          "name": "Northern Cape"
        },
        {
          "value": "NW",
          "name": "North West"
        },
        {
          "value": "WC",
          "name": "Western Cape"
        }
      ],
      "ES": [
        {
          "value": "C",
          "name": "A Coru&ntilde;a"
        },
        {
          "value": "VI",
          "name": "Araba/&Aacute;lava"
        },
        {
          "value": "AB",
          "name": "Albacete"
        },
        {
          "value": "A",
          "name": "Alicante"
        },
        {
          "value": "AL",
          "name": "Almer&iacute;a"
        },
        {
          "value": "O",
          "name": "Asturias"
        },
        {
          "value": "AV",
          "name": "&Aacute;vila"
        },
        {
          "value": "BA",
          "name": "Badajoz"
        },
        {
          "value": "PM",
          "name": "Baleares"
        },
        {
          "value": "B",
          "name": "Barcelona"
        },
        {
          "value": "BU",
          "name": "Burgos"
        },
        {
          "value": "CC",
          "name": "C&aacute;ceres"
        },
        {
          "value": "CA",
          "name": "C&aacute;diz"
        },
        {
          "value": "S",
          "name": "Cantabria"
        },
        {
          "value": "CS",
          "name": "Castell&oacute;n"
        },
        {
          "value": "CE",
          "name": "Ceuta"
        },
        {
          "value": "CR",
          "name": "Ciudad Real"
        },
        {
          "value": "CO",
          "name": "C&oacute;rdoba"
        },
        {
          "value": "CU",
          "name": "Cuenca"
        },
        {
          "value": "GI",
          "name": "Girona"
        },
        {
          "value": "GR",
          "name": "Granada"
        },
        {
          "value": "GU",
          "name": "Guadalajara"
        },
        {
          "value": "SS",
          "name": "Gipuzkoa"
        },
        {
          "value": "H",
          "name": "Huelva"
        },
        {
          "value": "HU",
          "name": "Huesca"
        },
        {
          "value": "J",
          "name": "Ja&eacute;n"
        },
        {
          "value": "LO",
          "name": "La Rioja"
        },
        {
          "value": "GC",
          "name": "Las Palmas"
        },
        {
          "value": "LE",
          "name": "Le&oacute;n"
        },
        {
          "value": "L",
          "name": "Lleida"
        },
        {
          "value": "LU",
          "name": "Lugo"
        },
        {
          "value": "M",
          "name": "Madrid"
        },
        {
          "value": "MA",
          "name": "M&aacute;laga"
        },
        {
          "value": "ML",
          "name": "Melilla"
        },
        {
          "value": "MU",
          "name": "Murcia"
        },
        {
          "value": "NA",
          "name": "Navarra"
        },
        {
          "value": "OR",
          "name": "Ourense"
        },
        {
          "value": "P",
          "name": "Palencia"
        },
        {
          "value": "PO",
          "name": "Pontevedra"
        },
        {
          "value": "SA",
          "name": "Salamanca"
        },
        {
          "value": "TF",
          "name": "Santa Cruz de Tenerife"
        },
        {
          "value": "SG",
          "name": "Segovia"
        },
        {
          "value": "SE",
          "name": "Sevilla"
        },
        {
          "value": "SO",
          "name": "Soria"
        },
        {
          "value": "T",
          "name": "Tarragona"
        },
        {
          "value": "TE",
          "name": "Teruel"
        },
        {
          "value": "TO",
          "name": "Toledo"
        },
        {
          "value": "V",
          "name": "Valencia"
        },
        {
          "value": "VA",
          "name": "Valladolid"
        },
        {
          "value": "BI",
          "name": "Bizkaia"
        },
        {
          "value": "ZA",
          "name": "Zamora"
        },
        {
          "value": "Z",
          "name": "Zaragoza"
        }
      ],
      "TH": [
        {
          "value": "TH-37",
          "name": "Amnat Charoen (&#3629;&#3635;&#3609;&#3634;&#3592;&#3648;&#3592;&#3619;&#3636;&#3597;)"
        },
        {
          "value": "TH-15",
          "name": "Ang Thong (&#3629;&#3656;&#3634;&#3591;&#3607;&#3629;&#3591;)"
        },
        {
          "value": "TH-14",
          "name": "Ayutthaya (&#3614;&#3619;&#3632;&#3609;&#3588;&#3619;&#3624;&#3619;&#3637;&#3629;&#3618;&#3640;&#3608;&#3618;&#3634;)"
        },
        {
          "value": "TH-10",
          "name": "Bangkok (&#3585;&#3619;&#3640;&#3591;&#3648;&#3607;&#3614;&#3617;&#3627;&#3634;&#3609;&#3588;&#3619;)"
        },
        {
          "value": "TH-38",
          "name": "Bueng Kan (&#3610;&#3638;&#3591;&#3585;&#3634;&#3628;)"
        },
        {
          "value": "TH-31",
          "name": "Buri Ram (&#3610;&#3640;&#3619;&#3637;&#3619;&#3633;&#3617;&#3618;&#3660;)"
        },
        {
          "value": "TH-24",
          "name": "Chachoengsao (&#3593;&#3632;&#3648;&#3594;&#3636;&#3591;&#3648;&#3607;&#3619;&#3634;)"
        },
        {
          "value": "TH-18",
          "name": "Chai Nat (&#3594;&#3633;&#3618;&#3609;&#3634;&#3607;)"
        },
        {
          "value": "TH-36",
          "name": "Chaiyaphum (&#3594;&#3633;&#3618;&#3616;&#3641;&#3617;&#3636;)"
        },
        {
          "value": "TH-22",
          "name": "Chanthaburi (&#3592;&#3633;&#3609;&#3607;&#3610;&#3640;&#3619;&#3637;)"
        },
        {
          "value": "TH-50",
          "name": "Chiang Mai (&#3648;&#3594;&#3637;&#3618;&#3591;&#3651;&#3627;&#3617;&#3656;)"
        },
        {
          "value": "TH-57",
          "name": "Chiang Rai (&#3648;&#3594;&#3637;&#3618;&#3591;&#3619;&#3634;&#3618;)"
        },
        {
          "value": "TH-20",
          "name": "Chonburi (&#3594;&#3621;&#3610;&#3640;&#3619;&#3637;)"
        },
        {
          "value": "TH-86",
          "name": "Chumphon (&#3594;&#3640;&#3617;&#3614;&#3619;)"
        },
        {
          "value": "TH-46",
          "name": "Kalasin (&#3585;&#3634;&#3628;&#3626;&#3636;&#3609;&#3608;&#3640;&#3660;)"
        },
        {
          "value": "TH-62",
          "name": "Kamphaeng Phet (&#3585;&#3635;&#3649;&#3614;&#3591;&#3648;&#3614;&#3594;&#3619;)"
        },
        {
          "value": "TH-71",
          "name": "Kanchanaburi (&#3585;&#3634;&#3597;&#3592;&#3609;&#3610;&#3640;&#3619;&#3637;)"
        },
        {
          "value": "TH-40",
          "name": "Khon Kaen (&#3586;&#3629;&#3609;&#3649;&#3585;&#3656;&#3609;)"
        },
        {
          "value": "TH-81",
          "name": "Krabi (&#3585;&#3619;&#3632;&#3610;&#3637;&#3656;)"
        },
        {
          "value": "TH-52",
          "name": "Lampang (&#3621;&#3635;&#3611;&#3634;&#3591;)"
        },
        {
          "value": "TH-51",
          "name": "Lamphun (&#3621;&#3635;&#3614;&#3641;&#3609;)"
        },
        {
          "value": "TH-42",
          "name": "Loei (&#3648;&#3621;&#3618;)"
        },
        {
          "value": "TH-16",
          "name": "Lopburi (&#3621;&#3614;&#3610;&#3640;&#3619;&#3637;)"
        },
        {
          "value": "TH-58",
          "name": "Mae Hong Son (&#3649;&#3617;&#3656;&#3630;&#3656;&#3629;&#3591;&#3626;&#3629;&#3609;)"
        },
        {
          "value": "TH-44",
          "name": "Maha Sarakham (&#3617;&#3627;&#3634;&#3626;&#3634;&#3619;&#3588;&#3634;&#3617;)"
        },
        {
          "value": "TH-49",
          "name": "Mukdahan (&#3617;&#3640;&#3585;&#3604;&#3634;&#3627;&#3634;&#3619;)"
        },
        {
          "value": "TH-26",
          "name": "Nakhon Nayok (&#3609;&#3588;&#3619;&#3609;&#3634;&#3618;&#3585;)"
        },
        {
          "value": "TH-73",
          "name": "Nakhon Pathom (&#3609;&#3588;&#3619;&#3611;&#3600;&#3617;)"
        },
        {
          "value": "TH-48",
          "name": "Nakhon Phanom (&#3609;&#3588;&#3619;&#3614;&#3609;&#3617;)"
        },
        {
          "value": "TH-30",
          "name": "Nakhon Ratchasima (&#3609;&#3588;&#3619;&#3619;&#3634;&#3594;&#3626;&#3637;&#3617;&#3634;)"
        },
        {
          "value": "TH-60",
          "name": "Nakhon Sawan (&#3609;&#3588;&#3619;&#3626;&#3623;&#3619;&#3619;&#3588;&#3660;)"
        },
        {
          "value": "TH-80",
          "name": "Nakhon Si Thammarat (&#3609;&#3588;&#3619;&#3624;&#3619;&#3637;&#3608;&#3619;&#3619;&#3617;&#3619;&#3634;&#3594;)"
        },
        {
          "value": "TH-55",
          "name": "Nan (&#3609;&#3656;&#3634;&#3609;)"
        },
        {
          "value": "TH-96",
          "name": "Narathiwat (&#3609;&#3619;&#3634;&#3608;&#3636;&#3623;&#3634;&#3626;)"
        },
        {
          "value": "TH-39",
          "name": "Nong Bua Lam Phu (&#3627;&#3609;&#3629;&#3591;&#3610;&#3633;&#3623;&#3621;&#3635;&#3616;&#3641;)"
        },
        {
          "value": "TH-43",
          "name": "Nong Khai (&#3627;&#3609;&#3629;&#3591;&#3588;&#3634;&#3618;)"
        },
        {
          "value": "TH-12",
          "name": "Nonthaburi (&#3609;&#3609;&#3607;&#3610;&#3640;&#3619;&#3637;)"
        },
        {
          "value": "TH-13",
          "name": "Pathum Thani (&#3611;&#3607;&#3640;&#3617;&#3608;&#3634;&#3609;&#3637;)"
        },
        {
          "value": "TH-94",
          "name": "Pattani (&#3611;&#3633;&#3605;&#3605;&#3634;&#3609;&#3637;)"
        },
        {
          "value": "TH-82",
          "name": "Phang Nga (&#3614;&#3633;&#3591;&#3591;&#3634;)"
        },
        {
          "value": "TH-93",
          "name": "Phatthalung (&#3614;&#3633;&#3607;&#3621;&#3640;&#3591;)"
        },
        {
          "value": "TH-56",
          "name": "Phayao (&#3614;&#3632;&#3648;&#3618;&#3634;)"
        },
        {
          "value": "TH-67",
          "name": "Phetchabun (&#3648;&#3614;&#3594;&#3619;&#3610;&#3641;&#3619;&#3603;&#3660;)"
        },
        {
          "value": "TH-76",
          "name": "Phetchaburi (&#3648;&#3614;&#3594;&#3619;&#3610;&#3640;&#3619;&#3637;)"
        },
        {
          "value": "TH-66",
          "name": "Phichit (&#3614;&#3636;&#3592;&#3636;&#3605;&#3619;)"
        },
        {
          "value": "TH-65",
          "name": "Phitsanulok (&#3614;&#3636;&#3625;&#3603;&#3640;&#3650;&#3621;&#3585;)"
        },
        {
          "value": "TH-54",
          "name": "Phrae (&#3649;&#3614;&#3619;&#3656;)"
        },
        {
          "value": "TH-83",
          "name": "Phuket (&#3616;&#3641;&#3648;&#3585;&#3655;&#3605;)"
        },
        {
          "value": "TH-25",
          "name": "Prachin Buri (&#3611;&#3619;&#3634;&#3592;&#3637;&#3609;&#3610;&#3640;&#3619;&#3637;)"
        },
        {
          "value": "TH-77",
          "name": "Prachuap Khiri Khan (&#3611;&#3619;&#3632;&#3592;&#3623;&#3610;&#3588;&#3637;&#3619;&#3637;&#3586;&#3633;&#3609;&#3608;&#3660;)"
        },
        {
          "value": "TH-85",
          "name": "Ranong (&#3619;&#3632;&#3609;&#3629;&#3591;)"
        },
        {
          "value": "TH-70",
          "name": "Ratchaburi (&#3619;&#3634;&#3594;&#3610;&#3640;&#3619;&#3637;)"
        },
        {
          "value": "TH-21",
          "name": "Rayong (&#3619;&#3632;&#3618;&#3629;&#3591;)"
        },
        {
          "value": "TH-45",
          "name": "Roi Et (&#3619;&#3657;&#3629;&#3618;&#3648;&#3629;&#3655;&#3604;)"
        },
        {
          "value": "TH-27",
          "name": "Sa Kaeo (&#3626;&#3619;&#3632;&#3649;&#3585;&#3657;&#3623;)"
        },
        {
          "value": "TH-47",
          "name": "Sakon Nakhon (&#3626;&#3585;&#3621;&#3609;&#3588;&#3619;)"
        },
        {
          "value": "TH-11",
          "name": "Samut Prakan (&#3626;&#3617;&#3640;&#3607;&#3619;&#3611;&#3619;&#3634;&#3585;&#3634;&#3619;)"
        },
        {
          "value": "TH-74",
          "name": "Samut Sakhon (&#3626;&#3617;&#3640;&#3607;&#3619;&#3626;&#3634;&#3588;&#3619;)"
        },
        {
          "value": "TH-75",
          "name": "Samut Songkhram (&#3626;&#3617;&#3640;&#3607;&#3619;&#3626;&#3591;&#3588;&#3619;&#3634;&#3617;)"
        },
        {
          "value": "TH-19",
          "name": "Saraburi (&#3626;&#3619;&#3632;&#3610;&#3640;&#3619;&#3637;)"
        },
        {
          "value": "TH-91",
          "name": "Satun (&#3626;&#3605;&#3641;&#3621;)"
        },
        {
          "value": "TH-17",
          "name": "Sing Buri (&#3626;&#3636;&#3591;&#3627;&#3660;&#3610;&#3640;&#3619;&#3637;)"
        },
        {
          "value": "TH-33",
          "name": "Sisaket (&#3624;&#3619;&#3637;&#3626;&#3632;&#3648;&#3585;&#3625;)"
        },
        {
          "value": "TH-90",
          "name": "Songkhla (&#3626;&#3591;&#3586;&#3621;&#3634;)"
        },
        {
          "value": "TH-64",
          "name": "Sukhothai (&#3626;&#3640;&#3650;&#3586;&#3607;&#3633;&#3618;)"
        },
        {
          "value": "TH-72",
          "name": "Suphan Buri (&#3626;&#3640;&#3614;&#3619;&#3619;&#3603;&#3610;&#3640;&#3619;&#3637;)"
        },
        {
          "value": "TH-84",
          "name": "Surat Thani (&#3626;&#3640;&#3619;&#3634;&#3625;&#3598;&#3619;&#3660;&#3608;&#3634;&#3609;&#3637;)"
        },
        {
          "value": "TH-32",
          "name": "Surin (&#3626;&#3640;&#3619;&#3636;&#3609;&#3607;&#3619;&#3660;)"
        },
        {
          "value": "TH-63",
          "name": "Tak (&#3605;&#3634;&#3585;)"
        },
        {
          "value": "TH-92",
          "name": "Trang (&#3605;&#3619;&#3633;&#3591;)"
        },
        {
          "value": "TH-23",
          "name": "Trat (&#3605;&#3619;&#3634;&#3604;)"
        },
        {
          "value": "TH-34",
          "name": "Ubon Ratchathani (&#3629;&#3640;&#3610;&#3621;&#3619;&#3634;&#3594;&#3608;&#3634;&#3609;&#3637;)"
        },
        {
          "value": "TH-41",
          "name": "Udon Thani (&#3629;&#3640;&#3604;&#3619;&#3608;&#3634;&#3609;&#3637;)"
        },
        {
          "value": "TH-61",
          "name": "Uthai Thani (&#3629;&#3640;&#3607;&#3633;&#3618;&#3608;&#3634;&#3609;&#3637;)"
        },
        {
          "value": "TH-53",
          "name": "Uttaradit (&#3629;&#3640;&#3605;&#3619;&#3604;&#3636;&#3605;&#3606;&#3660;)"
        },
        {
          "value": "TH-95",
          "name": "Yala (&#3618;&#3632;&#3621;&#3634;)"
        },
        {
          "value": "TH-35",
          "name": "Yasothon (&#3618;&#3650;&#3626;&#3608;&#3619;)"
        }
      ],
      "TR": [
        {
          "value": "TR01",
          "name": "Adana"
        },
        {
          "value": "TR02",
          "name": "Ad&#305;yaman"
        },
        {
          "value": "TR03",
          "name": "Afyon"
        },
        {
          "value": "TR04",
          "name": "A&#287;r&#305;"
        },
        {
          "value": "TR05",
          "name": "Amasya"
        },
        {
          "value": "TR06",
          "name": "Ankara"
        },
        {
          "value": "TR07",
          "name": "Antalya"
        },
        {
          "value": "TR08",
          "name": "Artvin"
        },
        {
          "value": "TR09",
          "name": "Ayd&#305;n"
        },
        {
          "value": "TR10",
          "name": "Bal&#305;kesir"
        },
        {
          "value": "TR11",
          "name": "Bilecik"
        },
        {
          "value": "TR12",
          "name": "Bing&#246;l"
        },
        {
          "value": "TR13",
          "name": "Bitlis"
        },
        {
          "value": "TR14",
          "name": "Bolu"
        },
        {
          "value": "TR15",
          "name": "Burdur"
        },
        {
          "value": "TR16",
          "name": "Bursa"
        },
        {
          "value": "TR17",
          "name": "&#199;anakkale"
        },
        {
          "value": "TR18",
          "name": "&#199;ank&#305;r&#305;"
        },
        {
          "value": "TR19",
          "name": "&#199;orum"
        },
        {
          "value": "TR20",
          "name": "Denizli"
        },
        {
          "value": "TR21",
          "name": "Diyarbak&#305;r"
        },
        {
          "value": "TR22",
          "name": "Edirne"
        },
        {
          "value": "TR23",
          "name": "Elaz&#305;&#287;"
        },
        {
          "value": "TR24",
          "name": "Erzincan"
        },
        {
          "value": "TR25",
          "name": "Erzurum"
        },
        {
          "value": "TR26",
          "name": "Eski&#351;ehir"
        },
        {
          "value": "TR27",
          "name": "Gaziantep"
        },
        {
          "value": "TR28",
          "name": "Giresun"
        },
        {
          "value": "TR29",
          "name": "G&#252;m&#252;&#351;hane"
        },
        {
          "value": "TR30",
          "name": "Hakkari"
        },
        {
          "value": "TR31",
          "name": "Hatay"
        },
        {
          "value": "TR32",
          "name": "Isparta"
        },
        {
          "value": "TR33",
          "name": "&#304;&#231;el"
        },
        {
          "value": "TR34",
          "name": "&#304;stanbul"
        },
        {
          "value": "TR35",
          "name": "&#304;zmir"
        },
        {
          "value": "TR36",
          "name": "Kars"
        },
        {
          "value": "TR37",
          "name": "Kastamonu"
        },
        {
          "value": "TR38",
          "name": "Kayseri"
        },
        {
          "value": "TR39",
          "name": "K&#305;rklareli"
        },
        {
          "value": "TR40",
          "name": "K&#305;r&#351;ehir"
        },
        {
          "value": "TR41",
          "name": "Kocaeli"
        },
        {
          "value": "TR42",
          "name": "Konya"
        },
        {
          "value": "TR43",
          "name": "K&#252;tahya"
        },
        {
          "value": "TR44",
          "name": "Malatya"
        },
        {
          "value": "TR45",
          "name": "Manisa"
        },
        {
          "value": "TR46",
          "name": "Kahramanmara&#351;"
        },
        {
          "value": "TR47",
          "name": "Mardin"
        },
        {
          "value": "TR48",
          "name": "Mu&#287;la"
        },
        {
          "value": "TR49",
          "name": "Mu&#351;"
        },
        {
          "value": "TR50",
          "name": "Nev&#351;ehir"
        },
        {
          "value": "TR51",
          "name": "Ni&#287;de"
        },
        {
          "value": "TR52",
          "name": "Ordu"
        },
        {
          "value": "TR53",
          "name": "Rize"
        },
        {
          "value": "TR54",
          "name": "Sakarya"
        },
        {
          "value": "TR55",
          "name": "Samsun"
        },
        {
          "value": "TR56",
          "name": "Siirt"
        },
        {
          "value": "TR57",
          "name": "Sinop"
        },
        {
          "value": "TR58",
          "name": "Sivas"
        },
        {
          "value": "TR59",
          "name": "Tekirda&#287;"
        },
        {
          "value": "TR60",
          "name": "Tokat"
        },
        {
          "value": "TR61",
          "name": "Trabzon"
        },
        {
          "value": "TR62",
          "name": "Tunceli"
        },
        {
          "value": "TR63",
          "name": "&#350;anl&#305;urfa"
        },
        {
          "value": "TR64",
          "name": "U&#351;ak"
        },
        {
          "value": "TR65",
          "name": "Van"
        },
        {
          "value": "TR66",
          "name": "Yozgat"
        },
        {
          "value": "TR67",
          "name": "Zonguldak"
        },
        {
          "value": "TR68",
          "name": "Aksaray"
        },
        {
          "value": "TR69",
          "name": "Bayburt"
        },
        {
          "value": "TR70",
          "name": "Karaman"
        },
        {
          "value": "TR71",
          "name": "K&#305;r&#305;kkale"
        },
        {
          "value": "TR72",
          "name": "Batman"
        },
        {
          "value": "TR73",
          "name": "&#350;&#305;rnak"
        },
        {
          "value": "TR74",
          "name": "Bart&#305;n"
        },
        {
          "value": "TR75",
          "name": "Ardahan"
        },
        {
          "value": "TR76",
          "name": "I&#287;d&#305;r"
        },
        {
          "value": "TR77",
          "name": "Yalova"
        },
        {
          "value": "TR78",
          "name": "Karab&#252;k"
        },
        {
          "value": "TR79",
          "name": "Kilis"
        },
        {
          "value": "TR80",
          "name": "Osmaniye"
        },
        {
          "value": "TR81",
          "name": "D&#252;zce"
        }
      ],
      "US": [
        {
          "value": "AL",
          "name": "Alabama"
        },
        {
          "value": "AK",
          "name": "Alaska"
        },
        {
          "value": "AZ",
          "name": "Arizona"
        },
        {
          "value": "AR",
          "name": "Arkansas"
        },
        {
          "value": "CA",
          "name": "California"
        },
        {
          "value": "CO",
          "name": "Colorado"
        },
        {
          "value": "CT",
          "name": "Connecticut"
        },
        {
          "value": "DE",
          "name": "Delaware"
        },
        {
          "value": "DC",
          "name": "District Of Columbia"
        },
        {
          "value": "FL",
          "name": "Florida"
        },
        {
          "value": "GA",
          "name": "Georgia"
        },
        {
          "value": "HI",
          "name": "Hawaii"
        },
        {
          "value": "ID",
          "name": "Idaho"
        },
        {
          "value": "IL",
          "name": "Illinois"
        },
        {
          "value": "IN",
          "name": "Indiana"
        },
        {
          "value": "IA",
          "name": "Iowa"
        },
        {
          "value": "KS",
          "name": "Kansas"
        },
        {
          "value": "KY",
          "name": "Kentucky"
        },
        {
          "value": "LA",
          "name": "Louisiana"
        },
        {
          "value": "ME",
          "name": "Maine"
        },
        {
          "value": "MD",
          "name": "Maryland"
        },
        {
          "value": "MA",
          "name": "Massachusetts"
        },
        {
          "value": "MI",
          "name": "Michigan"
        },
        {
          "value": "MN",
          "name": "Minnesota"
        },
        {
          "value": "MS",
          "name": "Mississippi"
        },
        {
          "value": "MO",
          "name": "Missouri"
        },
        {
          "value": "MT",
          "name": "Montana"
        },
        {
          "value": "NE",
          "name": "Nebraska"
        },
        {
          "value": "NV",
          "name": "Nevada"
        },
        {
          "value": "NH",
          "name": "New Hampshire"
        },
        {
          "value": "NJ",
          "name": "New Jersey"
        },
        {
          "value": "NM",
          "name": "New Mexico"
        },
        {
          "value": "NY",
          "name": "New York"
        },
        {
          "value": "NC",
          "name": "North Carolina"
        },
        {
          "value": "ND",
          "name": "North Dakota"
        },
        {
          "value": "OH",
          "name": "Ohio"
        },
        {
          "value": "OK",
          "name": "Oklahoma"
        },
        {
          "value": "OR",
          "name": "Oregon"
        },
        {
          "value": "PA",
          "name": "Pennsylvania"
        },
        {
          "value": "RI",
          "name": "Rhode Island"
        },
        {
          "value": "SC",
          "name": "South Carolina"
        },
        {
          "value": "SD",
          "name": "South Dakota"
        },
        {
          "value": "TN",
          "name": "Tennessee"
        },
        {
          "value": "TX",
          "name": "Texas"
        },
        {
          "value": "UT",
          "name": "Utah"
        },
        {
          "value": "VT",
          "name": "Vermont"
        },
        {
          "value": "VA",
          "name": "Virginia"
        },
        {
          "value": "WA",
          "name": "Washington"
        },
        {
          "value": "WV",
          "name": "West Virginia"
        },
        {
          "value": "WI",
          "name": "Wisconsin"
        },
        {
          "value": "WY",
          "name": "Wyoming"
        },
        {
          "value": "AA",
          "name": "Armed Forces (AA)"
        },
        {
          "value": "AE",
          "name": "Armed Forces (AE)"
        },
        {
          "value": "AP",
          "name": "Armed Forces (AP)"
        }
      ]
    },
    "continent": { "BD": "AS", "BE": "EU", "BF": "AF", "BG": "EU", "BA": "EU", "BB": "NA", "WF": "OC", "BL": "NA", "BM": "NA", "BN": "AS", "BO": "SA", "BH": "AS", "BI": "AF", "BJ": "AF", "BT": "AS", "JM": "NA", "BV": "AN", "BW": "AF", "WS": "OC", "BQ": "NA", "BR": "SA", "BS": "NA", "JE": "EU", "BY": "EU", "BZ": "NA", "RU": "EU", "RW": "AF", "RS": "EU", "TL": "OC", "RE": "AF", "TM": "AS", "TJ": "AS", "RO": "EU", "TK": "OC", "GW": "AF", "GU": "OC", "GT": "NA", "GS": "AN", "GR": "EU", "GQ": "AF", "GP": "NA", "JP": "AS", "GY": "SA", "GG": "EU", "GF": "SA", "GE": "AS", "GD": "NA", "GB": "EU", "GA": "AF", "SV": "NA", "GN": "AF", "GM": "AF", "GL": "NA", "GI": "EU", "GH": "AF", "OM": "AS", "TN": "AF", "JO": "AS", "HR": "EU", "HT": "NA", "HU": "EU", "HK": "AS", "HN": "NA", "HM": "AN", "VE": "SA", "PR": "NA", "PS": "AS", "PW": "OC", "PT": "EU", "SJ": "EU", "PY": "SA", "IQ": "AS", "PA": "NA", "PF": "OC", "PG": "OC", "PE": "SA", "PK": "AS", "PH": "AS", "PN": "OC", "PL": "EU", "PM": "NA", "ZM": "AF", "EH": "AF", "EE": "EU", "EG": "AF", "ZA": "AF", "EC": "SA", "IT": "EU", "VN": "AS", "SB": "OC", "ET": "AF", "SO": "AF", "ZW": "AF", "SA": "AS", "ES": "EU", "ER": "AF", "ME": "EU", "MD": "EU", "MG": "AF", "MF": "NA", "MA": "AF", "MC": "EU", "UZ": "AS", "MM": "AS", "ML": "AF", "MO": "AS", "MN": "AS", "MH": "OC", "MK": "EU", "MU": "AF", "MT": "EU", "MW": "AF", "MV": "AS", "MQ": "NA", "MP": "OC", "MS": "NA", "MR": "AF", "IM": "EU", "UG": "AF", "TZ": "AF", "MY": "AS", "MX": "NA", "IL": "AS", "FR": "EU", "IO": "AS", "SH": "AF", "FI": "EU", "FJ": "OC", "FK": "SA", "FM": "OC", "FO": "EU", "NI": "NA", "NL": "EU", "NO": "EU", "NA": "AF", "VU": "OC", "NC": "OC", "NE": "AF", "NF": "OC", "NG": "AF", "NZ": "OC", "NP": "AS", "NR": "OC", "NU": "OC", "CK": "OC", "XK": "EU", "CI": "AF", "CH": "EU", "CO": "SA", "CN": "AS", "CM": "AF", "CL": "SA", "CC": "AS", "CA": "NA", "CG": "AF", "CF": "AF", "CD": "AF", "CZ": "EU", "CY": "EU", "CX": "AS", "CR": "NA", "CW": "NA", "CV": "AF", "CU": "NA", "SZ": "AF", "SY": "AS", "SX": "NA", "KG": "AS", "KE": "AF", "SS": "AF", "SR": "SA", "KI": "OC", "KH": "AS", "KN": "NA", "KM": "AF", "ST": "AF", "SK": "EU", "KR": "AS", "SI": "EU", "KP": "AS", "KW": "AS", "SN": "AF", "SM": "EU", "SL": "AF", "SC": "AF", "KZ": "AS", "KY": "NA", "SG": "AS", "SE": "EU", "SD": "AF", "DO": "NA", "DM": "NA", "DJ": "AF", "DK": "EU", "VG": "NA", "DE": "EU", "YE": "AS", "DZ": "AF", "US": "NA", "UY": "SA", "YT": "AF", "UM": "OC", "LB": "AS", "LC": "NA", "LA": "AS", "TV": "OC", "TW": "AS", "TT": "NA", "TR": "AS", "LK": "AS", "LI": "EU", "LV": "EU", "TO": "OC", "LT": "EU", "LU": "EU", "LR": "AF", "LS": "AF", "TH": "AS", "TF": "AN", "TG": "AF", "TD": "AF", "TC": "NA", "LY": "AF", "VA": "EU", "VC": "NA", "AE": "AS", "AD": "EU", "AG": "NA", "AF": "AS", "AI": "NA", "VI": "NA", "IS": "EU", "IR": "AS", "AM": "AS", "AL": "EU", "AO": "AF", "AQ": "AN", "AS": "OC", "AR": "SA", "AU": "OC", "AT": "EU", "AW": "NA", "IN": "AS", "AX": "EU", "AZ": "AS", "IE": "EU", "ID": "AS", "UA": "EU", "QA": "AS", "MZ": "AF" }
  };
  constructor() {

  }
  getCountryName(val) {
    let name = ''
    for (let v of this.data.countries) {
      if (val == v.value) name = v.name
    }
    return name;
  }
  getStateName(val, val2) {
    let name = ""
    if (this.data.states[val]) {
      for (let v of this.data.states[val]) {
        if (val2 == v.value) name = v.name;
      }
    }
    else name = "other";
    return name;
  }
  getStateCode(c, s) {
    let name = ""
    if (this.data.states[c]) {
      for (let v of this.data.states[c]) {
        if (s == v.name) name = v.value;
      }
    }
    else name = "s";
    return name;
  }
  getContientCode(con) {
    return this.data.continent[con];
  }
}
