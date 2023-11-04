import aboutImg from '../images/about.jpg';
import ircon from '../images/ircon.png';
import topol from '../images/topol.png';
import czech from '../images/czech.png';
import rks from '../images/rks.png';

const data = {
    ger: {
        navbar: [
            {
                path: "/",
                name: "Heim"
            },
            {
                path: "/about-us",
                name: "Über uns"
            },
            {
                path: "/architecture",
                name: "Architektur"
            },
            {
                path: "/services",
                name: "Dienstleistungen"
            },
            {
                path: "/projects",
                name: "Projekte"
            },
            {
                path: "/contact",
                name: "Kontakt"
            },
        ],
        footerData: {
            dataTitle: {
                title1: "Verknüpfung",
                title2: "Info"
            },
            address: {
                name: "# Adresse",
                value: "TÄFERNSTRASSE 2A 5405 DÄTTWIL"
            },
            tel: [
                {
                    name: "# Tel",
                    value: "079 586 00 92"
                },
                {
                    name: "# Tel",
                    value: "044 593 54 11"
                }
            ],
            email: {
                name: "# Email",
                value: "EDMA@GMX.CH"
            },
            copyright: {
                name: "Urheberrecht © 2023"
            }
        },
        homeAbout: {
            title: "Über uns",
            subTitle: "EDMA ist ein Beratungs- und Bauingenieurunternehmen, das auf die Planung, Überwachung und den Bau öffentlicher und privater Projekte spezialisiert ist.",
            desc: "Es wurde im Jahr 2010 von einem Team von Ingenieurexperten gegründet und hat über einen Zeitraum von mehr als einem Jahrzehnt mehr als 400 Projekte mit unterschiedlichem Fachwissen im Bereich Bauingenieurwesen und Beratung abgeschlossen. Wir sind bestrebt, unsere Projekte an die neuesten Entwicklungen anzupassen und die Spitzentechnologie zu nutzen, wobei wir uns stets auf die Wünsche des Kunden konzentrieren, die wir als Schlüssel zum Erfolg betrachten. Unser Ziel ist es, unsere Projekte mit hoher Qualität, Funktionalität, Ästhetik und Gebrauchstauglichkeit zu entwickeln, indem wir Ideen und Ratschläge dazu liefern, wie der Raum aussehen wird, in dem Sie leben, arbeiten oder entspannen",
            btnText: "MEHR...",
            btnLink: "/about-us",
            aboutImg: aboutImg,
            aboutNr: "15",
            aboutNrText: "LANGJÄHRIGE ERFAHRUNG"
        },
        homeSpecialization: {
            name: "Unsere Spezialisierung", 
            overName: "WAS WIR TUN",
            content: [
                {
                    specialImg: "M430 681 c-157 -58 -291 -110 -297 -117 -14 -14 -19 -299 -5 -307 4 -3 113 11 242 29 129 18 241 33 248 34 13 0 18 -115 5 -123 -5 -3 -119 -17 -255 -33 l-248 -28 0 -48 0 -48 -50 0 c-38 0 -50 -4 -50 -15 0 -13 68 -15 555 -15 487 0 555 2 555 15 0 11 -12 15 -50 15 l-50 0 -2 187 -3 188 -42 9 -43 9 0 55 c0 52 1 54 23 47 71 -22 67 -25 67 61 l0 79 -146 55 c-81 30 -151 55 -158 55 -6 1 -139 -46 -296 -104z m341 65 c19 -7 78 -30 132 -50 l97 -38 0 -54 c0 -30 -1 -54 -2 -54 -2 0 -65 22 -142 49 l-139 48 -200 -58 c-111 -33 -209 -59 -219 -59 -16 0 -18 -10 -18 -75 0 -64 3 -75 17 -75 14 0 334 60 396 74 16 4 17 -11 17 -205 l0 -209 -280 0 -280 0 0 38 0 39 157 17 c87 9 197 22 246 28 l87 11 0 82 c0 45 -2 84 -5 86 -2 3 -109 -10 -237 -28 -128 -18 -237 -32 -241 -33 -4 0 -6 62 -5 137 l3 137 275 102 c151 56 282 102 291 103 9 1 32 -5 50 -13z m56 -162 l103 -37 0 -53 c0 -62 4 -61 -100 -34 -98 26 -106 25 -310 -15 -96 -19 -183 -35 -193 -35 -15 0 -18 7 -15 47 l3 47 190 57 c105 31 196 57 204 58 8 0 61 -15 118 -35z m56 -161 l117 -27 0 -178 0 -178 -140 0 -140 0 0 211 0 211 23 -6 c12 -3 75 -18 140 -33z",
                    specialImg2: "M200 205 c0 -19 5 -35 10 -35 6 0 10 16 10 35 0 19 -4 35 -10 35 -5 0 -10 -16 -10 -35z",
                    specialName: "ARCHITEKTUR & INFRASTRUKTUR",
                    specialDesc: "Wir sind bestrebt, unsere Projekte an die neuesten Entwicklungen anzupassen und die Spitzentechnologie zu nutzen, wobei wir uns stets auf die Wünsche des Kunden konzentrieren, die wir als Schlüssel zum Erfolg betrachten."
                },
                {
                    specialImg: "M415 741 c-149 -53 -155 -56 -155 -80 0 -14 -29 -29 -124 -66 -69 -26 -127 -54 -130 -62 -3 -8 -6 -32 -6 -53 0 -44 20 -57 63 -41 l26 10 4 -112 3 -112 2 115 2 116 80 26 80 26 0 -134 c0 -74 -1 -134 -2 -134 -2 0 -55 -9 -118 -20 -63 -11 -116 -20 -117 -20 -2 0 -3 -22 -3 -50 l0 -50 35 0 c32 0 35 -2 35 -30 0 -29 -2 -30 -45 -30 -33 0 -45 -4 -45 -15 0 -13 71 -15 575 -15 504 0 575 2 575 15 0 11 -12 15 -50 15 l-50 0 0 35 c0 34 1 35 40 35 l41 0 -3 63 -3 62 -40 3 -40 3 3 135 3 136 33 -6 c39 -8 46 3 46 68 l0 42 -220 78 c-150 53 -228 76 -244 72 -14 -3 -36 -2 -51 4 -51 19 -72 16 -200 -29z m169 13 c14 -5 16 -47 16 -360 l0 -354 -25 0 -25 0 0 360 c0 212 4 360 9 360 5 0 16 -3 25 -6z m-54 -359 l0 -355 -125 0 -125 0 0 314 0 314 113 40 c61 23 118 41 125 41 9 1 12 -76 12 -354z m379 274 c107 -38 196 -69 198 -69 2 0 3 -16 3 -35 0 -20 -5 -35 -12 -35 -6 0 -95 25 -197 56 -182 55 -221 60 -273 39 -16 -6 -18 -1 -18 48 l0 55 38 10 c20 5 44 8 52 5 8 -3 103 -36 209 -74z m-221 -211 c1 89 5 162 10 162 4 0 52 -14 107 -30 55 -17 130 -40 168 -51 l67 -20 0 -134 c0 -159 25 -144 -195 -115 -86 12 -168 18 -192 14 l-43 -6 0 159 0 160 33 9 32 10 5 -161 6 -160 2 163z m-428 114 l0 -37 -107 -38 c-60 -20 -111 -37 -115 -37 -5 0 -8 15 -8 34 0 34 0 35 103 75 56 22 108 41 115 41 7 0 12 -14 12 -38z m848 -361 c1 -1 2 -17 2 -36 l0 -35 -128 0 c-71 0 -184 3 -250 7 l-122 6 0 53 0 53 43 3 c30 2 427 -43 455 -51z m-848 -36 c0 -20 -6 -37 -12 -39 -7 -3 -57 -7 -110 -10 l-98 -5 0 29 c0 25 5 30 32 35 18 3 53 10 78 14 25 5 60 9 78 10 30 1 32 -1 32 -34z m398 -51 c18 -5 22 -13 22 -45 0 -38 -1 -39 -35 -39 -35 0 -35 0 -35 45 0 47 4 50 48 39z m366 -10 c10 -4 16 -18 16 -40 l0 -34 -175 0 -175 0 0 40 0 40 159 0 c88 0 166 -3 175 -6z m-764 -39 l0 -35 -80 0 -80 0 0 29 c0 33 10 36 113 39 l47 2 0 -35z",
                    specialName: "HVAC TECHNIK",
                    specialDesc: "Unser Sortiment und unser technisches Fachwissen stellen sicher, dass wir eine praktische Lösung für die mechanische Dienstleistungsbranche anbieten, die die beste in unserer Region ist."
                },
                {
                    specialImg: "M575 923 c-66 -30 -123 -60 -127 -66 -4 -7 -8 -77 -8 -157 l0 -145 -58 -25 c-31 -13 -63 -30 -69 -36 -10 -9 -13 -71 -13 -238 l0 -225 -42 -4 c-24 -2 112 -4 302 -4 190 0 330 2 313 4 l-33 4 0 404 0 403 -27 34 c-47 59 -97 108 -108 107 -5 0 -64 -25 -130 -56z m125 -428 c0 -458 0 -465 -20 -465 -19 0 -20 7 -20 238 l0 237 -66 43 c-63 42 -75 44 -117 27 -16 -7 -17 2 -15 135 l3 143 115 53 c63 29 116 53 118 53 1 1 2 -208 2 -464z m120 -57 l0 -408 -50 0 -50 0 0 457 0 457 50 -49 50 -49 0 -408z m-310 -138 l0 -270 -95 0 -95 0 0 228 0 227 93 42 c50 22 93 42 95 42 1 1 2 -120 2 -269z m130 -36 l0 -234 -55 0 -55 0 0 270 0 270 55 -36 55 -37 0 -233z",
                    specialName: "WWTP",
                    specialDesc: "Project Plus bietet eine Vielzahl innovativer Lösungen sowie umfangreiches Wissen und regionale Erfahrung bei der Fertigstellung schlüsselfertiger Projekte für Abwasseraufbereitungsanlagen."
                }

            ]
        },
        homeClients: {
            name: "Unsere Kunden",
            overName: "FANTASTISCHE PARTNER",
            content: [
                {
                    name: "IRCON",
                    image: ircon,
                    path: "http://www.ircon.cz/",
                    desc: "Ircon Ltd. ist ein Beratungs- und Umsetzungsunternehmen aus der Tschechischen Republik, das sich auf die Vorbereitung und Umsetzung von Entwicklungsprojekten im Bereich Wasser, Wassermanagement, Umwelttechnologien und Landwirtschaft konzentriert. Zu unseren Hauptaktivitäten gehören die Umsetzung von Projekten zur Schaffung, Erneuerung oder Rekonstruktion von Abwassersammel- und -aufbereitungssystemen, die Versorgung schwer zugänglicher und hydrogeologisch anspruchsvoller Gebiete mit sauberem Trinkwasser, die Lösung von Problemen im Zusammenhang mit Wasserknappheit für die Bewässerung in der Landwirtschaft und Spezialprojekte im Zusammenhang mit der Überwachung der Trinkwasserqualität."
                },
                {
                    name: "TOPOLWATER",
                    image: topol,
                    path: "http://old.topolwater.eu/english/index.html",
                    desc: "Das Unternehmen TopolWater, s.r.o. Das Unternehmen wurde im Jahr 2000 als Nachfolger des Unternehmens Ing. gegründet. Jan Topol – Kläranlagen. Bis 1990 fungierte dieses Unternehmen ursprünglich als Planungsbüro und sein Haupttätigkeitsbereich war die Planung von Wasserwirtschaftsbauwerken und Abwasseraufbereitungsanlagen.",
                },
                {
                    name: "CZECH REPUBLIC",
                    image: czech,
                    path: "http://www.czechaid.cz/",
                    desc: "Wir können die Projekte der Tschechischen Entwicklungsagentur nach den Themen, auf die sie sich konzentrieren, oder nach Ländern unterteilen. Weitere Informationen zu einzelnen Projekten und Branchen finden Sie in der Themenübersicht in der rechten Spalte.",
                },
                {
                    name: "REPUBLIC OF KOSOVO",
                    image: rks,
                    path: "https://ekosova.rks-gov.net/",
                    desc: "eKosova ist eine staatliche Plattform, auf der öffentliche Dienstleistungen in Büros und physischen Schaltern von Institutionen elektronisch angeboten werden.",
                },
            ]
        },
        aboutPage: {
            upper: {
                name: "ÜBER UNS",
                desc: "Wir entwickeln Projekte von der Konzeption bis zu den letzten Details"
            },
            middle: {
                left: [
                    {
                        number: "15",
                        name: "LANGJÄHRIGE ERFAHRUNG"
                    },
                    {
                        number: "50",
                        name: "ZUFRIEDENE KUNDEN"
                    },
                    {
                        number: "100",
                        name: "FERTIGE PROJEKTE"
                    },
                    {
                        number: "25",
                        name: "DESIGNPREISE"
                    },
                ],
                right: {
                    title: "EDMA GmbH",
                    desc: "wurde im Jahr 2010 von einem Expertenteam des Maschinenbaus gegründet und hat über einen Zeitraum von mehr als einem Jahrzehnt mehr als 400 Projekte mit unterschiedlichem Fachwissen im Bereich Bauingenieurwesen und Beratung abgeschlossen. Im Laufe der Entwicklung zahlreicher Bauprojekte sowie der Planung und Umsetzung schlüsselfertiger Projekte haben wir ein tiefes Verständnis dafür gewonnen, wie wir die Effizienz optimieren und maximieren und gleichzeitig die Auswirkungen auf die Umwelt minimieren können."
                }
            }
        },
        architecturePage: [
            {
                title: "DIE ARCHITEKTUR",
                desc: "Unsere Priorität ist es, die besten Einrichtungen und Gebäude für Wohnen, Arbeiten und Freizeit zu entwerfen. Wir entwickeln Projekte vom Konzeptentwurf bis zu den endgültigen Details, basierend auf den Anforderungen des Kunden und unter Berücksichtigung der Baukriterien und -bedingungen, mit dem alleinigen Ziel, die Kontinuität des Konzeptentwurfs und des Gebäudes mit hoher Qualität zu gewährleisten. Gutes Design, das auf der Wahrnehmung vor Ort basiert, ist der Schlüssel zu adäquatem und qualitativ hochwertigem Design. In diesem Tätigkeitsfeld plant unser professionelles Team aus erfahrenen Architekten, Statikern, Bauingenieuren und Detailplanern oberirdische Bauwerke, die mit einem hohen technischen Standard ausgestattet sind. Solche Projekte werden von uns in allen Phasen umfassend betreut. Mit Schweizer Standards für Gesundheits-, Bildungs-, Sport-, Verwaltungs-, Hotel- und Industriegebäude.",
                btnText: "PROJEKTE ANZEIGEN"
            },
            {
                title: "ENERGIEEFFIZIENZ & ERNEUERBARE ENERGIE",
                desc: "Energieeffizienz bedeutet einfach, weniger Energie zu verbrauchen, um die gleiche Aufgabe zu erfüllen – das heißt, Energieverschwendung zu vermeiden. Energieeffizienz bringt eine Vielzahl von Vorteilen mit sich: Reduzierung der Treibhausgasemissionen, Reduzierung der Nachfrage nach Energieimporten und Senkung unserer Kosten auf Haushalts- und Wirtschaftsebene. Auch wenn erneuerbare Energietechnologien dazu beitragen, diese Ziele zu erreichen, ist die Verbesserung der Energieeffizienz der kostengünstigste – und oft der unmittelbarste – Weg, den Einsatz fossiler Brennstoffe zu reduzieren. In jedem Sektor der Wirtschaft gibt es enorme Möglichkeiten für Effizienzsteigerungen, sei es im Gebäudebereich, im Transportwesen, in der Industrie oder bei der Energieerzeugung. Aufgrund ihrer Rolle als großer Energieverbraucher sind Gebäude weltweit ein wichtiger Bereich für Verbesserungen der Energieeffizienz. Allerdings ist die Frage des Energieverbrauchs in Gebäuden nicht einfach, da die Innenbedingungen, die durch den Energieverbrauch erreicht werden können, sehr unterschiedlich sind. Die Maßnahmen zur Aufrechterhaltung des Komforts in Gebäuden, wie Beleuchtung, Heizung, Kühlung und Belüftung, verbrauchen alle Energie. Typischerweise wird der Grad der Energieeffizienz in einem Gebäude gemessen, indem die verbrauchte Energie durch die Grundfläche des Gebäudes dividiert wird, was als spezifischer Energieverbrauch (SEC) oder Energienutzungsintensität (EUI) bezeichnet wird.",
                btnText: "PROJEKTE ANZEIGEN"
            },
            {
                title: "WASSER & INFRASTRUKTUR",
                desc: "Unter Infrastruktur versteht man die grundlegenden Einrichtungen und Systeme, die ein Land, eine Stadt oder ein anderes Gebiet versorgen, einschließlich der Dienste und Einrichtungen, die für das Funktionieren seiner Wirtschaft erforderlich sind. Die Infrastruktur besteht aus öffentlichen und privaten physischen Verbesserungen wie Straßen, Eisenbahnen, Brücken, Tunneln, Wasserversorgung, Abwasserkanälen, Stromnetzen und Telekommunikation (einschließlich Internetkonnektivität und Breitbandgeschwindigkeiten). Im Allgemeinen wurde es auch definiert als „die physischen Komponenten miteinander verbundener Systeme, die Waren und Dienstleistungen bereitstellen, die für die Ermöglichung, Aufrechterhaltung oder Verbesserung der gesellschaftlichen Lebensbedingungen unerlässlich sind“. Es gibt zwei allgemeine Arten, die Infrastruktur anzuzeigen: Hard oder Soft. Unter harter Infrastruktur versteht man die physischen Netzwerke, die für das Funktionieren einer modernen Industrie erforderlich sind. Dazu gehören Straßen, Brücken, Eisenbahnen usw. Als weiche Infrastruktur werden alle Institutionen bezeichnet, die die wirtschaftlichen, gesundheitlichen, sozialen und kulturellen Standards eines Landes aufrechterhalten. Dazu gehören Bildungsprogramme, amtliche Statistiken, Parks und Freizeiteinrichtungen, Strafverfolgungsbehörden und Rettungsdienste. Infrastruktur ist der Begriff für die grundlegenden physischen Systeme eines Unternehmens oder einer Nation – Transport-, Kommunikations-, Abwasser-, Wasser- und Elektrizitätssysteme sind Beispiele für Infrastruktur. Bei diesen Systemen handelt es sich in der Regel um kostenintensive Investitionen, die für die wirtschaftliche Entwicklung und den Wohlstand eines Landes von entscheidender Bedeutung sind. Projekte im Zusammenhang mit Infrastrukturverbesserungen können öffentlich, privat oder durch öffentlich-private Partnerschaften finanziert werden. In wirtschaftlicher Hinsicht geht es bei der Infrastruktur häufig um die Produktion öffentlicher Güter oder Produktionsprozesse, die natürliche Monopole unterstützen.",
                btnText: "PROJEKTE ANZEIGEN"
            },
        ]
    },
    en: {
        navbar: [
            {
                path: "/",
                name: "Home"
            },
            {
                path: "/about-us",
                name: "About Us"
            },
            {
                path: "/architecture",
                name: "Architecture"
            },
            {
                path: "/services",
                name: "Services"
            },
            {
                path: "/projects",
                name: "Projects"
            },
            {
                path: "/contact",
                name: "Contact"
            },
        ],
        footerData: {
            dataTitle: {
                title1: "Links",
                title2: "Info"
            },
            address: {
                name: "# Address",
                value: "TÄFERNSTRASSE 2A 5405 DÄTTWIL"
            },
            tel: [
                {
                    name: "# Tel",
                    value: "079 586 00 92"
                },
                {
                    name: "# Tel",
                    value: "044 593 54 11"
                }
            ],
            email: {
                name: "# Email",
                value: "edma@gmx.ch"
            },
            copyright: {
                name: "Copyright © 2023"
            }
        },
        homeAbout: {
            title: "About Us",
            subTitle: "EDMA is a consulting and civil engineering company specializing in the design, supervision and construction of public and private projects.",
            desc: "Founded in 2010 by a team of engineering experts, it has completed more than 400 projects over a period of more than a decade with varying expertise in civil engineering and consulting. We strive to adapt our projects to the latest developments and to use cutting-edge technology, always focusing on the customer's wishes, which we consider the key to success. Our aim is to develop our projects with high quality, functionality, aesthetics and usability by providing ideas and advice on what the space in which you live, work or relax will look like",
            btnText: "MORE...",
            btnLink: "/about-us",
            aboutImg: aboutImg,
            aboutNr: "15",
            aboutNrText: "YEARS OF EXPERIENCE"
        },
        homeSpecialization: {
            name: "Our Specialization", 
            overName: "WHAT WE DO",
            content: [
                {
                    specialImg: "M430 681 c-157 -58 -291 -110 -297 -117 -14 -14 -19 -299 -5 -307 4 -3 113 11 242 29 129 18 241 33 248 34 13 0 18 -115 5 -123 -5 -3 -119 -17 -255 -33 l-248 -28 0 -48 0 -48 -50 0 c-38 0 -50 -4 -50 -15 0 -13 68 -15 555 -15 487 0 555 2 555 15 0 11 -12 15 -50 15 l-50 0 -2 187 -3 188 -42 9 -43 9 0 55 c0 52 1 54 23 47 71 -22 67 -25 67 61 l0 79 -146 55 c-81 30 -151 55 -158 55 -6 1 -139 -46 -296 -104z m341 65 c19 -7 78 -30 132 -50 l97 -38 0 -54 c0 -30 -1 -54 -2 -54 -2 0 -65 22 -142 49 l-139 48 -200 -58 c-111 -33 -209 -59 -219 -59 -16 0 -18 -10 -18 -75 0 -64 3 -75 17 -75 14 0 334 60 396 74 16 4 17 -11 17 -205 l0 -209 -280 0 -280 0 0 38 0 39 157 17 c87 9 197 22 246 28 l87 11 0 82 c0 45 -2 84 -5 86 -2 3 -109 -10 -237 -28 -128 -18 -237 -32 -241 -33 -4 0 -6 62 -5 137 l3 137 275 102 c151 56 282 102 291 103 9 1 32 -5 50 -13z m56 -162 l103 -37 0 -53 c0 -62 4 -61 -100 -34 -98 26 -106 25 -310 -15 -96 -19 -183 -35 -193 -35 -15 0 -18 7 -15 47 l3 47 190 57 c105 31 196 57 204 58 8 0 61 -15 118 -35z m56 -161 l117 -27 0 -178 0 -178 -140 0 -140 0 0 211 0 211 23 -6 c12 -3 75 -18 140 -33z",
                    specialImg2: "M200 205 c0 -19 5 -35 10 -35 6 0 10 16 10 35 0 19 -4 35 -10 35 -5 0 -10 -16 -10 -35z",
                    specialName: "ARCHITECTURE & INFRASTRUCTURE",
                    specialDesc: "We are keen to adapt our projects to the latest developments and using the high-end technology by always being focused in the clients requests, which we consider the key to success."
                },
                {
                    specialImg: "M415 741 c-149 -53 -155 -56 -155 -80 0 -14 -29 -29 -124 -66 -69 -26 -127 -54 -130 -62 -3 -8 -6 -32 -6 -53 0 -44 20 -57 63 -41 l26 10 4 -112 3 -112 2 115 2 116 80 26 80 26 0 -134 c0 -74 -1 -134 -2 -134 -2 0 -55 -9 -118 -20 -63 -11 -116 -20 -117 -20 -2 0 -3 -22 -3 -50 l0 -50 35 0 c32 0 35 -2 35 -30 0 -29 -2 -30 -45 -30 -33 0 -45 -4 -45 -15 0 -13 71 -15 575 -15 504 0 575 2 575 15 0 11 -12 15 -50 15 l-50 0 0 35 c0 34 1 35 40 35 l41 0 -3 63 -3 62 -40 3 -40 3 3 135 3 136 33 -6 c39 -8 46 3 46 68 l0 42 -220 78 c-150 53 -228 76 -244 72 -14 -3 -36 -2 -51 4 -51 19 -72 16 -200 -29z m169 13 c14 -5 16 -47 16 -360 l0 -354 -25 0 -25 0 0 360 c0 212 4 360 9 360 5 0 16 -3 25 -6z m-54 -359 l0 -355 -125 0 -125 0 0 314 0 314 113 40 c61 23 118 41 125 41 9 1 12 -76 12 -354z m379 274 c107 -38 196 -69 198 -69 2 0 3 -16 3 -35 0 -20 -5 -35 -12 -35 -6 0 -95 25 -197 56 -182 55 -221 60 -273 39 -16 -6 -18 -1 -18 48 l0 55 38 10 c20 5 44 8 52 5 8 -3 103 -36 209 -74z m-221 -211 c1 89 5 162 10 162 4 0 52 -14 107 -30 55 -17 130 -40 168 -51 l67 -20 0 -134 c0 -159 25 -144 -195 -115 -86 12 -168 18 -192 14 l-43 -6 0 159 0 160 33 9 32 10 5 -161 6 -160 2 163z m-428 114 l0 -37 -107 -38 c-60 -20 -111 -37 -115 -37 -5 0 -8 15 -8 34 0 34 0 35 103 75 56 22 108 41 115 41 7 0 12 -14 12 -38z m848 -361 c1 -1 2 -17 2 -36 l0 -35 -128 0 c-71 0 -184 3 -250 7 l-122 6 0 53 0 53 43 3 c30 2 427 -43 455 -51z m-848 -36 c0 -20 -6 -37 -12 -39 -7 -3 -57 -7 -110 -10 l-98 -5 0 29 c0 25 5 30 32 35 18 3 53 10 78 14 25 5 60 9 78 10 30 1 32 -1 32 -34z m398 -51 c18 -5 22 -13 22 -45 0 -38 -1 -39 -35 -39 -35 0 -35 0 -35 45 0 47 4 50 48 39z m366 -10 c10 -4 16 -18 16 -40 l0 -34 -175 0 -175 0 0 40 0 40 159 0 c88 0 166 -3 175 -6z m-764 -39 l0 -35 -80 0 -80 0 0 29 c0 33 10 36 113 39 l47 2 0 -35z",
                    specialName: "HVAC ENGINEERING",
                    specialDesc: "Our range and technical expertise ensures we offer a convenient solution for the mechanical services industry that is the best in our region."
                },
                {
                    specialImg: "M575 923 c-66 -30 -123 -60 -127 -66 -4 -7 -8 -77 -8 -157 l0 -145 -58 -25 c-31 -13 -63 -30 -69 -36 -10 -9 -13 -71 -13 -238 l0 -225 -42 -4 c-24 -2 112 -4 302 -4 190 0 330 2 313 4 l-33 4 0 404 0 403 -27 34 c-47 59 -97 108 -108 107 -5 0 -64 -25 -130 -56z m125 -428 c0 -458 0 -465 -20 -465 -19 0 -20 7 -20 238 l0 237 -66 43 c-63 42 -75 44 -117 27 -16 -7 -17 2 -15 135 l3 143 115 53 c63 29 116 53 118 53 1 1 2 -208 2 -464z m120 -57 l0 -408 -50 0 -50 0 0 457 0 457 50 -49 50 -49 0 -408z m-310 -138 l0 -270 -95 0 -95 0 0 228 0 227 93 42 c50 22 93 42 95 42 1 1 2 -120 2 -269z m130 -36 l0 -234 -55 0 -55 0 0 270 0 270 55 -36 55 -37 0 -233z",
                    specialName: "WWTP",
                    specialDesc: "Project Plus has a host of innovative solutions on offer, not to mention a wealth of knowledge and regional experience on completing turnkey projects for Waste Water Treatment Plants."
                }
            ]
        },
        homeClients: {
            name: "Our Clients",
            overName: "AWESOME PARTNERS",
            content: [
                {
                    name: "IRCON",
                    image: ircon,
                    path: "http://www.ircon.cz/",
                    desc: "Ircon ltd. is a consulting and implementation company from the Czech Republic that focuses on the preparation and implementation of development projects in the field of water, water management, environmental technologies and agriculture. Our main activities include the implementation of projects for the creation, renewal or reconstruction of wastewater collection and treatment systems, the supply of safe drinking water in hard-to-reach and hydrogeologically demanding areas, solving problems related to water shortages for irrigation in agriculture and specialized projects related to monitoring of drinking water quality."
                },
                {
                    name: "TOPOLWATER",
                    image: topol,
                    path: "http://old.topolwater.eu/english/index.html",
                    desc: "The TopolWater, s.r.o. company was established in 2000 as the successor to the company of Ing. Jan Topol – Wastewater treatment plants. Up to 1990 this company originally acted as the design office and its main area of activity was the design of water-management structures and wastewater treatment plants.",
                },
                {
                    name: "CZECH REPUBLIC",
                    image: czech,
                    path: "http://www.czechaid.cz/",
                    desc: "We can divide the projects of the Czech Development Agency according to the topics they focus on or by country. You can find more information about individual projects and sectors in the overview of topics located in the right column.",
                },
                {
                    name: "REPUBLIC OF KOSOVO",
                    image: rks,
                    path: "https://ekosova.rks-gov.net/",
                    desc: "eKosova is a state platform where public services found in offices and physical counters of institutions are offered electronically.",
                },
            ]
        },
        aboutPage: {
            upper: {
                name: "ABOUT US",
                desc: "We develop projects from conception to the last details"
            },
            middle: {
                left: [
                    {
                        number: "15",
                        name: "YEARS OF EXPERIENCE"
                    },
                    {
                        number: "50",
                        name: "SATISFIED COSTUMERS"
                    },
                    {
                        number: "100",
                        name: "FINISHED PROJECTS"
                    },
                    {
                        number: "25",
                        name: "DESIGN PRICES"
                    },
                ],
                right: {
                    title: "EDMA GmbH",
                    desc: "was founded in 2010 by a team of mechanical engineering experts and has completed more than 400 projects with varying expertise in civil engineering and consulting over a period of more than a decade. Over the course of developing numerous construction projects and designing and implementing turnkey projects, we have gained a deep understanding of how to optimize and maximize efficiency while minimizing environmental impact."
                }
            }
        },
        architecturePage: [
            {
                title: "ARCHITECTURE",
                desc: "Our priority is to design the best facilities and buildings for living, working and leisure. We develop projects from concept design to final details, based on the client's requirements and taking into account the construction criteria and conditions, with the sole aim of ensuring the continuity of the concept design and the building with high quality. Good design based on local perception is the key to adequate and high quality design. In this field of activity, our professional team of experienced architects, structural engineers, civil engineers and detailed planners plan above-ground structures that are equipped to a high technical standard. We provide comprehensive support for such projects in all phases. With Swiss standards for health, education, sports, administrative, hotel and industrial buildings.",
                btnText: "VIEW PROJECTS"
            },
            {
                title: "ENERGY EFFIENCY & RENEWABLE ENERGY",
                desc: "Energy efficiency simply means using less energy to perform the same task – that is, eliminating energy waste. Energy efficiency brings a variety of benefits: reducing greenhouse gas emissions, reducing demand for energy imports, and lowering our costs on a household and economy-wide level. While renewable energy technologies also help accomplish these objectives, improving energy efficiency is the cheapest – and often the most immediate – way to reduce the use of fossil fuels. There are enormous opportunities for efficiency improvements in every sector of the economy, whether it is buildings, transportation, industry, or energy generation. Buildings are an important field for energy efficiency improvements around the world because of their role as a major energy consumer. However, the question of energy use in buildings is not straightforward as the indoor conditions that can be achieved with energy use vary a lot. The measures that keep buildings comfortable, lighting, heating, cooling and ventilation, all consume energy. Typically the level of energy efficiency in a building is measured by dividing energy consumed with the floor area of the building which is referred to as specific energy consumption (SEC) or energy use intensity (EUI).",
                btnText: "VIEW PROJECTS"
            },
            {
                title: "WATER & INFRASTRUCTURE",
                desc: "Infrastructure is the fundamental facilities and systems serving a country, city, or other area, including the services and facilities necessary for its economy to function. Infrastructure is composed of public and private physical improvements such as roads, railways, bridges, tunnels, water supply, sewers, electrical grids, and telecommunications (including Internet connectivity and broadband speeds). In general, it has also been defined as “the physical components of interrelated systems providing commodities and services essential to enable, sustain, or enhance societal living conditions”. There are two general types of ways to view infrastructure, hard or soft. Hard infrastructure refers to the physical networks necessary for the functioning of a modern industry. This includes roads, bridges, railways, etc. Soft infrastructure refers to all the institutions that maintain the economic, health, social, and cultural standards of a country. This includes educational programs, official statistics, parks and recreational facilities, law enforcement agencies, and emergency services. Infrastructure is the term for the basic physical systems of a business or nation—transportation, communication, sewage, water, and electric systems are all examples of infrastructure. These systems tend to be high-cost investments and are vital to a country’s economic development and prosperity. Projects related to infrastructure improvements may be funded publicly, privately, or through public-private partnerships. In economic terms infrastructure often involves the production of public goods or production processes that support natural monopolies.",
                btnText: "VIEW PROJECTS"
            },
        ]
    }
}

export {data};