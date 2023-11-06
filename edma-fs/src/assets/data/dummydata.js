import aboutImg from '../images/about.jpg';
import ircon from '../images/ircon.png';
import topol from '../images/topol.png';
import czech from '../images/czech.png';
import rks from '../images/rks.png';
import architecture1 from '../images/architecture1.webp';
import architecture2 from '../images/architecture2.webp';
import architecture3 from '../images/architecture3.webp';
import architecture4 from '../images/architecture4.webp';
import architecture5 from '../images/architecture5.webp';
import architecture6 from '../images/architecture6.webp';
import energy1 from '../images/energy1.png';
import energy2 from '../images/energy2.png';
import energy3 from '../images/energy3.png';
import energy4 from '../images/energy4.png';
import energy5 from '../images/energy5.png';
import energy6 from '../images/energy6.png';
import water1 from '../images/water1.png';
import water2 from '../images/water2.png';
import water3 from '../images/water3.png';
import water4 from '../images/water4.png';
import water5 from '../images/water5.png';
import water6 from '../images/water6.png';
import hero1 from '../images/hero1.png';
import hero2 from '../images/hero2.png';
import hero3 from '../images/hero3.png';
import  civilEngineering from '../images/civilEngineering.jpg';
import  consultingServices from '../images/consultingServices.jpg';
import  architectureServices from '../images/architectureServices.jpg';
import  wttp from '../images/wttp.jpg';
import project1 from '../images/project1.jpeg';
import project2 from '../images/project2.jpeg';
import project3 from '../images/project3.jpeg';
import project4 from '../images/project4.jpg';
import project5 from '../images/project5.jpg';
import project6 from '../images/project6.jpg';
import project7 from '../images/project7.jpg';
import project8 from '../images/project8.jpg';
import project9 from '../images/project9.png';
import project10 from '../images/project10.jpg';


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
        homeHero: {
            images:[
                {
                    image: hero1
                },
                {
                    image: hero2
                },
                {
                    image: hero3
                },
            ],
            content: [
                {
                    title: "Innovationen für die Zukunft des Bauwesens",
                    subTitle: "Entdecken Sie das Jahrzehnt der Exzellenz im Bauingenieurwesen und der Beratung der EDMA GmbH"
                },
                {
                    title: "Effizienz meistern, Auswirkungen minimieren",
                    subTitle:"EDMA GmbH: Ihr Partner für nachhaltige Infrastrukturlösungen"
                },
                {
                    title: "Wir setzen neue Maßstäbe für mechanische Dienstleistungen",
                    subTitle:"EDMA GmbH: Wegweisende Heizungs-, Lüftungs- und Klimatechnik in der Region"
                },
            ]
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
                btnText: "PROJEKTE ANZEIGEN",
                images: [
                    {
                        image: architecture1
                    },
                    {
                        image: architecture2
                    },
                    {
                        image: architecture3
                    },
                    {
                        image: architecture4
                    },
                    {
                        image: architecture5
                    },
                    {
                        image: architecture6
                    },
                ]
            },
            {
                title: "ENERGIEEFFIZIENZ & ERNEUERBARE ENERGIE",
                desc: "Energieeffizienz bedeutet einfach, weniger Energie zu verbrauchen, um die gleiche Aufgabe zu erfüllen – das heißt, Energieverschwendung zu vermeiden. Energieeffizienz bringt eine Vielzahl von Vorteilen mit sich: Reduzierung der Treibhausgasemissionen, Reduzierung der Nachfrage nach Energieimporten und Senkung unserer Kosten auf Haushalts- und Wirtschaftsebene. Auch wenn erneuerbare Energietechnologien dazu beitragen, diese Ziele zu erreichen, ist die Verbesserung der Energieeffizienz der kostengünstigste – und oft der unmittelbarste – Weg, den Einsatz fossiler Brennstoffe zu reduzieren. In jedem Sektor der Wirtschaft gibt es enorme Möglichkeiten für Effizienzsteigerungen, sei es im Gebäudebereich, im Transportwesen, in der Industrie oder bei der Energieerzeugung. Aufgrund ihrer Rolle als großer Energieverbraucher sind Gebäude weltweit ein wichtiger Bereich für Verbesserungen der Energieeffizienz. Allerdings ist die Frage des Energieverbrauchs in Gebäuden nicht einfach, da die Innenbedingungen, die durch den Energieverbrauch erreicht werden können, sehr unterschiedlich sind. Die Maßnahmen zur Aufrechterhaltung des Komforts in Gebäuden, wie Beleuchtung, Heizung, Kühlung und Belüftung, verbrauchen alle Energie. Typischerweise wird der Grad der Energieeffizienz in einem Gebäude gemessen, indem die verbrauchte Energie durch die Grundfläche des Gebäudes dividiert wird, was als spezifischer Energieverbrauch (SEC) oder Energienutzungsintensität (EUI) bezeichnet wird.",
                btnText: "PROJEKTE ANZEIGEN",
                images: [
                    {
                        image: energy1
                    },
                    {
                        image: energy2
                    },
                    {
                        image: energy3
                    },
                    {
                        image: energy4
                    },
                    {
                        image: energy5
                    },
                    {
                        image: energy6
                    },
                ]
            },
            {
                title: "WASSER & INFRASTRUKTUR",
                desc: "Unter Infrastruktur versteht man die grundlegenden Einrichtungen und Systeme, die ein Land, eine Stadt oder ein anderes Gebiet versorgen, einschließlich der Dienste und Einrichtungen, die für das Funktionieren seiner Wirtschaft erforderlich sind. Die Infrastruktur besteht aus öffentlichen und privaten physischen Verbesserungen wie Straßen, Eisenbahnen, Brücken, Tunneln, Wasserversorgung, Abwasserkanälen, Stromnetzen und Telekommunikation (einschließlich Internetkonnektivität und Breitbandgeschwindigkeiten). Im Allgemeinen wurde es auch definiert als „die physischen Komponenten miteinander verbundener Systeme, die Waren und Dienstleistungen bereitstellen, die für die Ermöglichung, Aufrechterhaltung oder Verbesserung der gesellschaftlichen Lebensbedingungen unerlässlich sind“. Es gibt zwei allgemeine Arten, die Infrastruktur anzuzeigen: Hard oder Soft. Unter harter Infrastruktur versteht man die physischen Netzwerke, die für das Funktionieren einer modernen Industrie erforderlich sind. Dazu gehören Straßen, Brücken, Eisenbahnen usw. Als weiche Infrastruktur werden alle Institutionen bezeichnet, die die wirtschaftlichen, gesundheitlichen, sozialen und kulturellen Standards eines Landes aufrechterhalten. Dazu gehören Bildungsprogramme, amtliche Statistiken, Parks und Freizeiteinrichtungen, Strafverfolgungsbehörden und Rettungsdienste. Infrastruktur ist der Begriff für die grundlegenden physischen Systeme eines Unternehmens oder einer Nation – Transport-, Kommunikations-, Abwasser-, Wasser- und Elektrizitätssysteme sind Beispiele für Infrastruktur. Bei diesen Systemen handelt es sich in der Regel um kostenintensive Investitionen, die für die wirtschaftliche Entwicklung und den Wohlstand eines Landes von entscheidender Bedeutung sind. Projekte im Zusammenhang mit Infrastrukturverbesserungen können öffentlich, privat oder durch öffentlich-private Partnerschaften finanziert werden. In wirtschaftlicher Hinsicht geht es bei der Infrastruktur häufig um die Produktion öffentlicher Güter oder Produktionsprozesse, die natürliche Monopole unterstützen.",
                btnText: "PROJEKTE ANZEIGEN",
                images: [
                    {
                        image: water1
                    },
                    {
                        image: water2
                    },
                    {
                        image: water3
                    },
                    {
                        image: water4
                    },
                    {
                        image: water5
                    },
                    {
                        image: water6
                    },
                ]
            },
        ],
        servicesPage: {
            title: "DIENSTLEISTUNGEN",
            services: [
                {
                     title: "Bauingenieurwesen",
                     logo: [
                        {
                            path: "M 165.931 13.583 C 164.846 14.891, 164.847 16.587, 165.937 23.333 C 168.025 36.257, 167.943 37.500, 165 37.500 C 162.634 37.500, 162.419 37.023, 160.979 28.576 C 160.142 23.668, 158.961 19.487, 158.355 19.285 C 157.748 19.083, 154.690 21.259, 151.559 24.120 C 144.787 30.309, 140.065 38.965, 139.273 46.644 C 138.832 50.916, 138.358 52, 136.932 52 C 132.256 52, 130.329 58.716, 134.223 61.443 C 137.567 63.786, 214.433 63.786, 217.777 61.443 C 221.671 58.716, 219.744 52, 215.068 52 C 213.640 52, 213.168 50.913, 212.723 46.607 C 211.911 38.738, 207.599 30.770, 200.692 24.375 C 197.442 21.367, 194.280 19.073, 193.663 19.279 C 193.047 19.484, 191.858 23.668, 191.021 28.576 C 189.581 37.023, 189.366 37.500, 187 37.500 C 184.062 37.500, 183.979 36.311, 186.017 23.284 C 187.732 12.321, 187.446 12, 176 12 C 169.233 12, 166.946 12.360, 165.931 13.583 M 139.501 72.250 C 142.331 90.029, 151.133 104.877, 162.966 111.834 C 166.865 114.127, 168.629 114.500, 175.564 114.500 C 182.064 114.500, 184.515 114.044, 188.205 112.149 C 199.971 106.105, 209.679 90.165, 212.505 72.250 C 213.116 68.376, 212.988 68, 211.057 68 C 209.891 68, 208.793 68.563, 208.618 69.250 C 208.442 69.938, 207.546 73.650, 206.626 77.500 C 199.314 108.121, 173.617 119.276, 156.137 99.418 C 150.989 93.570, 147.529 86.523, 145.374 77.500 C 144.454 73.650, 143.558 69.938, 143.382 69.250 C 143.207 68.563, 142.109 68, 140.943 68 C 139.011 68, 138.884 68.374, 139.501 72.250 M 137.500 112.890 C 128.418 115.535, 123.156 118.659, 116.399 125.416 C 106.825 134.990, 101.994 146.583, 102.006 159.960 C 102.014 169.441, 103.538 173.854, 108.435 178.571 C 114.317 184.237, 121.452 186.085, 139.965 186.735 L 154.500 187.246 150.381 184.212 C 144.929 180.195, 141.917 175.797, 141.259 170.895 C 140.783 167.344, 141.105 166.487, 144.066 163.432 L 147.411 159.980 152.088 164.586 C 157.172 169.594, 160.265 170.134, 160.836 166.115 C 161.078 164.414, 159.969 162.525, 156.884 159.382 L 152.596 155.012 155.994 151.506 C 158.157 149.274, 160.320 148.008, 161.946 148.022 C 165.145 148.049, 172.047 151.135, 173.889 153.361 C 175.154 154.890, 175.795 154.547, 181.065 149.520 C 184.494 146.248, 187.749 144, 189.055 144 C 191.518 144, 208.230 159.675, 210.591 164.200 C 213.519 169.811, 211.903 179.914, 207.224 185.250 C 205.784 186.893, 206.052 186.998, 211.595 186.969 C 226.784 186.890, 239.175 183.558, 244.344 178.163 C 251.876 170.301, 251.892 151.587, 244.379 136.761 C 241.026 130.144, 230.938 120.016, 224.400 116.703 C 216.974 112.940, 206.938 110.493, 205.865 112.184 C 205.406 112.908, 205.024 114.010, 205.015 114.634 C 205.007 115.257, 203.220 117.376, 201.044 119.342 C 189.314 129.939, 159.946 129.387, 149.862 118.379 C 148.412 116.796, 146.919 114.487, 146.545 113.250 C 145.748 110.612, 145.374 110.597, 137.500 112.890 M 183.098 152.510 C 179.757 156.134, 179.132 157.378, 179.916 158.842 C 181.291 161.413, 183.555 163.120, 185.145 162.785 C 187.961 162.193, 187.204 167.431, 184.034 170.468 L 180.979 173.394 184.653 177.157 L 188.327 180.920 191.699 177.960 C 193.553 176.332, 195.681 175, 196.428 175 C 198.243 175, 199.141 177.591, 198.378 180.631 C 197.609 183.696, 200.667 186.521, 202.820 184.734 C 206.049 182.055, 208.356 175.517, 208.115 169.728 C 207.972 166.291, 200.851 158.272, 196.210 156.322 C 194.394 155.559, 193.208 154.472, 193.564 153.896 C 194.308 152.692, 190.241 148, 188.453 148 C 187.794 148, 185.384 150.030, 183.098 152.510 M 159.335 153.571 C 158.952 154.568, 160.057 156.498, 162.366 158.863 C 166.728 163.330, 166.982 166.366, 163.313 170.195 C 159.629 174.041, 156.411 173.807, 151.863 169.366 C 147.160 164.774, 144.455 165.254, 145.311 170.527 C 146.554 178.186, 153.383 183.373, 161.561 182.871 L 166.015 182.597 181.828 198.298 C 195.245 211.621, 198.099 214, 200.666 214 C 202.329 214, 204.435 213.177, 205.345 212.171 C 208.936 208.204, 207.684 206.208, 191.347 189.847 L 175.695 174.171 175.597 167.836 C 175.486 160.565, 173.700 157.387, 167.864 154.068 C 163.532 151.604, 160.164 151.408, 159.335 153.571 M 180 166.559 C 180 167.416, 180.457 167.835, 181.016 167.490 C 181.575 167.144, 181.774 166.443, 181.457 165.931 C 180.600 164.544, 180 164.802, 180 166.559 M 192 183.723 C 192 184.981, 194.858 187.475, 195.530 186.803 C 195.795 186.538, 195.110 185.504, 194.006 184.506 C 192.903 183.507, 192 183.155, 192 183.723 M 157.728 193.845 C 153.669 197.780, 149.899 201, 149.349 201 C 147.862 201, 144 205.406, 144 207.102 C 144 209.043, 153.131 218, 155.110 218 C 156.773 218, 161 213.986, 161 212.407 C 161 211.876, 163.925 208.543, 167.500 205 C 171.075 201.457, 174 197.851, 174 196.987 C 174 196.123, 171.999 193.453, 169.554 191.053 L 165.107 186.689 157.728 193.845 M 198 207.531 C 198 210.629, 200.597 211.831, 202.714 209.714 C 204.831 207.597, 203.629 205, 200.531 205 C 198.490 205, 198 205.490, 198 207.531"
                        },
                     ],
                     desc: "Die EDMA GmbH bietet umfassende Tiefbaulösungen, von der Standortplanung und -entwicklung bis hin zur Tragwerksplanung, und sorgt so für sichere, effiziente und konforme Bauprojekte",
                     btnText: "MEHR",
                     image: civilEngineering
                },
                {
                    title: "Beratungsleistungen",
                    logo: [
                       {
                        path: "M 167.735 1.250 C 166.690 2.043, 165.979 4.297, 165.793 7.410 L 165.500 12.320 160.267 14.093 C 157.389 15.068, 153.683 16.665, 152.030 17.641 L 149.025 19.416 145.715 16.208 C 143.892 14.442, 141.346 13, 140.049 13 C 137.180 13, 130 20.409, 130 23.369 C 130 24.489, 131.428 26.878, 133.174 28.679 L 136.347 31.954 133.653 37.457 C 132.171 40.483, 130.686 44.319, 130.354 45.980 C 129.784 48.828, 129.481 49, 125.030 49 C 118.703 49, 117 50.945, 117 58.174 C 117 65.091, 118.778 67, 125.220 67 C 129.367 67, 129.845 67.251, 130.461 69.750 C 130.834 71.263, 132.303 75.106, 133.725 78.292 L 136.311 84.084 133.155 87.340 C 131.420 89.130, 130 91.493, 130 92.589 C 130 95.169, 137.968 103, 140.592 103 C 141.700 103, 144.114 101.446, 145.955 99.546 L 149.302 96.093 153.401 98.465 C 155.656 99.769, 159.412 101.341, 161.750 101.957 C 165.948 103.063, 166 103.132, 166 107.539 C 166 113.652, 168.436 116, 174.777 116 C 181.744 116, 184 114.052, 184 108.036 L 184 103.186 189.374 101.496 C 192.329 100.566, 196.015 98.974, 197.564 97.958 L 200.380 96.111 204.193 99.555 C 206.290 101.450, 208.739 103, 209.634 103 C 211.996 103, 220 94.635, 220 92.166 C 220 91.013, 218.612 88.489, 216.917 86.558 L 213.833 83.046 216.284 77.773 C 217.631 74.873, 219.027 71.263, 219.386 69.750 C 219.977 67.256, 220.455 67, 224.519 67 C 230.862 67, 233 64.623, 233 57.571 C 233 50.667, 231.461 49, 225.087 49 C 220.337 49, 220.311 48.982, 219.071 44.750 C 218.386 42.412, 216.791 38.623, 215.526 36.328 L 213.228 32.156 216.151 29.356 C 220.955 24.752, 220.912 22.505, 215.921 17.419 C 210.690 12.090, 207.859 11.775, 203.463 16.036 L 200.331 19.072 193.915 16.037 C 190.387 14.367, 186.713 13.001, 185.750 13.001 C 184.356 13, 184 12.129, 184 8.723 C 184 1.962, 182.006 -0, 175.134 -0 C 171.971 -0, 168.641 0.563, 167.735 1.250 M 166.173 32.905 C 153.278 37.359, 145.706 51.598, 149.427 64.397 C 151.593 71.848, 156.384 77.807, 163.018 81.302 C 167.975 83.914, 169.218 84.149, 176 83.764 C 184.448 83.284, 188.258 81.676, 193.600 76.334 C 198.784 71.149, 200.954 65.751, 200.968 58 C 200.991 46.043, 193.576 35.733, 182.612 32.477 C 176.164 30.563, 172.694 30.653, 166.173 32.905 M 137 120.915 C 132.325 123.384, 123.620 127.507, 117.656 130.076 C 102.675 136.529, 98.912 139.383, 95.140 147.151 C 91.428 154.793, 90 164.817, 90 183.224 L 90 196 176 196 L 262 196 261.992 183.750 C 261.979 165.026, 260.527 154.644, 256.873 147.151 C 253.166 139.549, 248.855 136.173, 236.200 130.963 C 231.415 128.993, 222.699 124.911, 216.832 121.892 L 206.164 116.404 202.667 127.452 C 200.744 133.528, 196.606 146.596, 193.471 156.492 L 187.772 174.484 184.386 165.119 C 180.458 154.253, 180.398 153.684, 182.825 150.154 C 185.792 145.840, 187.157 141.507, 186.818 137.478 C 186.378 132.254, 182.892 129.769, 176 129.769 C 165.106 129.769, 162.093 136.766, 168.119 148.072 L 171.353 154.139 167.941 164.025 C 166.065 169.463, 164.229 173.369, 163.862 172.706 C 163.495 172.043, 159.277 159.125, 154.489 144 C 149.702 128.875, 145.720 116.483, 145.642 116.462 C 145.564 116.441, 141.675 118.445, 137 120.915"
                       },
                    ],
                    desc: "Die Beratungsleistungen der EDMA GmbH decken ein breites Spektrum ab, darunter Projektmanagement, Umweltverträglichkeitsprüfung, Einhaltung gesetzlicher Vorschriften, Kostenschätzung und Nachhaltigkeitsberatung. So stellen wir sicher, dass Ihre Projekte sorgfältig geplant, umweltverträglich und im Rahmen des Budgets liegen.",
                    btnText: "MEHR",
                    image: consultingServices
                },
                {
                   title: "Architekturdienstleistungen",
                   logo: [
                        {
                            path: "M 138.250 122.708 L 117 133.273 117 173.636 L 117 214 139 214 L 161 214 161 164 C 161 136.500, 161.113 114.001, 161.250 114.001 C 161.387 114.002, 168.250 116.858, 176.500 120.348 L 191.500 126.693 191.780 138.789 L 192.061 150.885 186.050 148.442 C 182.744 147.099, 179.491 146, 178.820 146 C 176.442 146, 179.516 147.785, 185.750 150.023 L 192 152.268 192.206 161.384 L 192.411 170.500 192.745 161.750 C 192.928 156.938, 193.209 153, 193.369 153 C 193.529 153, 196.324 154.084, 199.580 155.408 L 205.500 157.816 205.766 185.908 L 206.031 214 224.516 214 L 243 214 243 192.449 L 243 170.898 239.750 169.591 C 237.963 168.873, 229.863 165.680, 221.750 162.497 L 207 156.710 206.978 144.105 L 206.957 131.500 183.728 121.735 C 170.953 116.364, 160.275 112.009, 160 112.056 C 159.725 112.104, 149.938 116.897, 138.250 122.708 M 138.750 124.058 L 119 134.010 119 173.005 L 119 212 139.628 212 L 160.256 212 159.878 163.001 C 159.670 136.051, 159.275 114.025, 159 114.054 C 158.725 114.083, 149.613 118.585, 138.750 124.058 M 193 139.536 L 193 151.071 197.250 152.891 C 206.751 156.959, 206 157.674, 206 144.555 L 206 132.975 200.376 130.487 C 197.282 129.119, 194.357 128, 193.876 128 C 193.394 128, 193 133.191, 193 139.536 M 207 185.500 L 207 212 224.021 212 L 241.041 212 240.771 191.779 L 240.500 171.558 224.530 165.279 C 215.747 161.826, 208.209 159, 207.780 159 C 207.351 159, 207 170.925, 207 185.500"
                        }
                   ],
                    desc: "Die Architekturdienstleistungen der EDMA GmbH umfassen ein breites Spektrum an Fachwissen, darunter Architekturdesign, Konzeptentwurf und Masterplanung, Gebäuderenovierung und -sanierung, 3D-Rendering und -Visualisierung sowie die sorgfältige Einhaltung der Bauvorschriften, um die Umsetzung Ihrer architektonischen Visionen mit Präzision und Kreativität sicherzustellen .",
                    btnText: "MEHR",
                    image: architectureServices
                },
                {
                    title: "WWTP Dienstleistungen",
                    logo: [
                        {
                            path: "M 193.667 19.667 C 193.300 20.033, 193 22.275, 193 24.648 C 193 28.551, 192.738 29.016, 190.250 29.526 C 175.136 32.629, 160.910 42.255, 152.147 55.309 C 144.472 66.741, 137.289 84.099, 134.065 99 C 131.943 108.811, 129.020 135.260, 129.010 144.750 L 129 154 125.970 154 C 124.303 154, 120.148 152.825, 116.736 151.389 C 111.270 149.088, 109.505 148.827, 101.893 149.191 C 95.909 149.477, 92.432 150.142, 90.582 151.354 C 89.113 152.317, 85.681 153.369, 82.955 153.692 C 79.495 154.101, 78 154.728, 78 155.768 C 78 157.644, 84.500 156.913, 93.839 153.986 C 101.808 151.489, 105.223 151.493, 113.161 154.009 C 122.396 156.935, 129.499 157.415, 136 155.551 C 150.578 151.372, 151.280 151.338, 162.465 154.280 C 175.226 157.637, 177.517 157.650, 188.074 154.429 C 197.366 151.594, 203.693 151.635, 212 154.583 C 220.274 157.519, 225.800 157.501, 235.989 154.503 C 246.424 151.433, 250.780 151.517, 261.839 155.002 C 269.263 157.342, 273 157.554, 273 155.636 C 273 154.788, 271.381 154.050, 268.719 153.685 C 266.364 153.362, 262.427 152.186, 259.969 151.071 C 253.346 148.067, 242.723 148.249, 235 151.500 C 231.306 153.055, 227.147 154, 224 154 C 220.853 154, 216.694 153.055, 213 151.500 C 205.336 148.274, 194.649 148.069, 188.141 151.022 C 185.743 152.110, 183.314 153, 182.743 153 C 179.873 153, 184.700 125.429, 189.070 116.863 C 191.265 112.561, 192.508 112.012, 193.290 115 C 193.775 116.856, 194.654 117, 205.472 117 C 217.241 117, 221 116.144, 221 113.465 C 221 112.216, 224.833 112, 247 112 C 269.444 112, 273 111.795, 273 110.500 C 273 109.205, 269.444 109, 247 109 L 221 109 221 106.224 L 221 103.448 242.452 103.570 C 258.763 103.662, 264.019 103.392, 264.383 102.443 C 264.647 101.757, 264.593 100.927, 264.264 100.598 C 263.936 100.269, 254.067 100, 242.333 100 L 221 100 221 95.500 L 221 91 225.083 91 C 230.294 91, 229.948 88.635, 224.673 88.190 L 221 87.879 221 62.940 L 221 38 225.418 38 C 227.848 38, 230.546 37.728, 231.412 37.395 C 234.424 36.240, 231.851 35, 226.441 35 L 221 35 221 31.017 L 221 27.034 246.750 26.767 C 268.854 26.538, 272.500 26.288, 272.500 25 C 272.500 23.713, 268.890 23.462, 247.082 23.232 C 223.035 22.979, 221.589 22.858, 220.275 20.982 C 219.019 19.189, 217.717 19, 206.610 19 C 199.858 19, 194.033 19.300, 193.667 19.667 M 195.713 22.621 C 195.321 23.013, 195 43.508, 195 68.167 L 195 113 206 113 L 217 113 217 67.500 L 217 22 211.020 22 L 205.039 22 204.770 43.667 C 204.570 59.728, 204.182 65.441, 203.270 65.744 C 202.326 66.058, 201.977 61.062, 201.770 44.327 L 201.500 22.500 198.963 22.204 C 197.567 22.041, 196.104 22.229, 195.713 22.621 M 181.917 35.347 C 161.354 42.666, 145.374 65.401, 138.084 97.708 C 134.170 115.055, 133.221 121.990, 132.409 139.194 L 131.716 153.887 134.108 153.299 C 138.567 152.203, 139 151.196, 139 141.929 C 139 131.741, 141.641 109.959, 143.047 108.553 C 145.515 106.085, 145.803 110.022, 144.008 121.717 C 142.976 128.437, 142.031 137.421, 141.906 141.682 L 141.680 149.429 150.182 149.135 C 157.477 148.883, 159.553 149.207, 164.811 151.421 C 168.182 152.839, 172.713 154, 174.880 154 L 178.820 154 179.460 145.250 C 180.775 127.250, 183.519 118.098, 190.092 109.793 L 193.025 106.086 192.763 69.793 C 192.460 27.982, 193.483 31.230, 181.917 35.347 M 173.177 55.535 C 164.305 61.846, 156.009 71.409, 157.828 73.228 C 158.574 73.974, 159.707 73.282, 161.655 70.894 C 165.788 65.827, 173.126 59.059, 176.321 57.368 C 178.613 56.155, 178.918 55.606, 177.948 54.438 C 177.292 53.647, 176.698 53.039, 176.628 53.086 C 176.557 53.133, 175.005 54.235, 173.177 55.535 M 99 168.031 C 96.525 168.378, 92.025 169.390, 89 170.278 C 85.975 171.166, 82.375 172.029, 81 172.196 C 79.579 172.369, 78.500 173.148, 78.500 174 C 78.500 176.186, 85.741 175.387, 93.898 172.302 C 101.199 169.540, 107.921 169.618, 113.760 172.530 C 117.806 174.549, 127.283 176.074, 131.326 175.357 C 133.072 175.047, 137.870 173.665, 141.989 172.286 C 150.611 169.399, 155.607 169.580, 163.442 173.065 C 170.496 176.203, 181.534 176.124, 189.009 172.882 C 192.593 171.327, 196.410 170.500, 200 170.500 C 203.590 170.500, 207.407 171.327, 210.991 172.882 C 215.166 174.692, 218.285 175.263, 224 175.263 C 229.715 175.263, 232.834 174.692, 237.009 172.882 C 243.772 169.948, 252.854 169.728, 257.846 172.376 C 261.404 174.263, 270.618 176.084, 272.655 175.302 C 274.820 174.471, 272.871 172, 270.050 172 C 268.545 172, 264.655 171.074, 261.407 169.943 C 257.478 168.575, 252.988 167.886, 248 167.886 C 243.012 167.886, 238.522 168.575, 234.593 169.943 C 227.064 172.565, 220.595 172.549, 212.908 169.889 C 204.875 167.109, 194.576 167.124, 186.593 169.926 C 179.123 172.549, 172.966 172.552, 164.880 169.936 C 156.546 167.239, 147.232 167.230, 138.550 169.912 C 130.212 172.487, 124.986 172.545, 117.380 170.144 C 110.027 167.824, 104.772 167.219, 99 168.031"
                        },
                    ],
                    desc: "Die EDMA GmbH ist auf die Bereitstellung umfassender Lösungen für Abwasseraufbereitungsanlagen (WWTP) spezialisiert, einschließlich Design und Bau, Prozessoptimierung, Einhaltung von Umweltvorschriften, schlüsselfertigen Projekten sowie laufender Wartungs- und Betriebsunterstützung, um ein effizientes und umweltbewusstes Abwassermanagement sicherzustellen.",
                    btnText: "MEHR",
                    image: wttp
                }
            ]
        },
        projectPage: {
            title: "PROJEKTE",
            projects: [
                {
                    title: "WHOHNDESIGN",
                    image: project1
                },
                {
                    title: "EDMA GMBH",
                    image: project2
                },
                {
                    title: "SPOT-TECH IMMOBILIEN AG",
                    image: project3
                },
                {
                    title: "GEMÜTICHES ECKHAUS",
                    image: project4
                },
                {
                    title: "METRO LOFT WOHNEN",
                    image: project5
                },
                {
                    title: "BAYVIEW-ANWESEN",
                    image: project6
                },
                {
                    title: "GREENFIELD-HERRENHAUS",
                    image: project7
                },
                {
                    title: "VERSTECK AM SEEUFER",
                    image: project8
                },
                {
                    title: "VILLEN MIT BERGBLICK",
                    image: project9
                },
                {
                    title: "SEASCAPE-RESIDENZEN",
                    image: project10
                },
            ],
            btnText: "MEHR LADEN"
        },
        contactPage: {
            title: "KONTAKT",
            desc: "LASSEN SIE UNS MIT UNS ZUSAMMENARBEITEN",
            bigTitle: "Gemeinsam können wir Träume wahr werden lassen",
            contactInfo: [
                {
                    name: "adresse:",
                    values: [
                        {
                            value: "Täfernstrasse 2a 5405 Dättwil"
                        }
                    ]
                },
                {
                    name: "telefonnummer:",
                    values: [
                        {
                            value: "079 586 00 92"
                        },
                        {
                            value: "044 593 54 11"
                        },
                    ]
                },
                {
                    name: "email:",
                    values: [
                        {
                            value: "edma@gmx.ch"
                        }
                    ]
                },
            ],
            form: {
                inputs: [
                    {
                        name: "user_name",
                        label: "Name",
                        errors: [
                            {
                                error: "Name ist erforderlich"
                            }
                        ]
                    },
                    {
                        name: "user_email",
                        label: "Email",
                        errors: [
                            {
                                error: "E-Mail ist erforderlich"
                            },
                            {
                                error: "Ungültige E-Mail-Adresse"
                            }
                        ]
                    },
                    {
                        name: "user_phone",
                        label: "Telefonnummer",
                        errors : [
                            {
                                error: "Telefonnummer ist erforderlich"
                            },
                            {
                                error: "Ungültige Telefonnummer"
                            }
                        ]
                    },
                    {
                        name: "message",
                        label: "Nachricht",
                        errors: [
                            {
                                error: "Nachricht ist erforderlich"
                            }
                        ]
                    },
                ],
                btnText: "NACHRICHT SENDEN",
                successText: "Vielen Dank für das Absenden des Formulars",
            }
        },
        errorPage: {
            title: "404",
            text: "Leider wurde die Seite nicht gefunden",
            btnText: "Gehe zu Heim",
            btnLink: "/"
        },
        registerPage: {
            title: "Registrieren Sie sich bei der EDMA GmbH",
            successText: "Sie sind erfolgreich registriert",
            accountExists: "Sie haben bereits ein Konto?",
            login: "Inloggen",
            loginPath: "/login",
            btnText: "Registrieren",
            inputs: [
                {
                    name: "username",
                    label: "Nutzername",
                    errors: [
                        {
                            error: "Benutzername wird benötigt"
                        }
                    ]
                },
                {
                    name: "email",
                    label: "Email",
                    errors: [
                        {
                            error: "E-Mail ist bereits vergeben"
                        },
                        {
                            error: "E-Mail ist erforderlich"
                        },
                        {
                            error: "Ungültige E-Mail-Adresse"
                        }
                    ]
                },
                {
                    name: "password",
                    label: "Passwort",
                    errors: [
                        {
                            error: "Passwort wird benötigt"
                        },
                        {
                            error: "Das Passwort muss mindestens 8 Zeichen lang sein"
                        }
                    ]
                },
                {
                    name: "confirmPassword",
                    label: "Bestätige das Passwort",
                    errors: [
                        {
                            error: "Bitte bestätigen Sie das Passwort"
                        },
                        {
                            error: "Passwörter stimmen nicht überein"
                        },
                    ]
                },
            ],
        },
        loginPage: {
            title: "Inloggen Sie sich bei EDMA GmbH an",
            accountExists: "Haben Sie kein Konto?",
            signUp: "Registrieren",
            register: "/register",
            btnText: "Inloggen",
            inputs: [
                {
                    name: "email",
                    label: "Email",
                    errors: [
                        {
                            error: "E-Mail existiert nicht"
                        },
                        {
                            error: "E-Mail ist erforderlich"
                        },
                        {
                            error: "Ungültige E-Mail-Adresse"
                        }
                    ]
                },
                {
                    name: "password",
                    label: "Passwort",
                    errors: [
                        {
                            error: "Passwort wird benötigt"
                        },
                        {
                            error: "Falsches Passwort"
                        }
                    ]
                },
            ],
        }
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
        homeHero: {
            images:[
                {
                    image: hero1
                },
                {
                    image: hero2
                },
                {
                    image: hero3
                },
            ],
            content: [
                {
                    title: "Innovating the Future of Construction",
                    subTitle: "Discover EDMA GmbH's Decade of Excellence in Civil Engineering and Consulting"
                },
                {
                    title: "Mastering Efficiency, Minimizing Impact",
                    subTitle:"EDMA GmbH: Your Partner for Sustainable Infrastructure Solutions"
                },
                {
                    title: "Setting New Standards in Mechanical Services",
                    subTitle:"EDMA GmbH: Pioneering HVAC Engineering in the Region"
                },
            ]
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
                btnText: "VIEW PROJECTS",
                images: [
                    {
                        image: architecture1
                    },
                    {
                        image: architecture2
                    },
                    {
                        image: architecture3
                    },
                    {
                        image: architecture4
                    },
                    {
                        image: architecture5
                    },
                    {
                        image: architecture6
                    },
                ]
            },
            {
                title: "ENERGY EFFIENCY & RENEWABLE ENERGY",
                desc: "Energy efficiency simply means using less energy to perform the same task – that is, eliminating energy waste. Energy efficiency brings a variety of benefits: reducing greenhouse gas emissions, reducing demand for energy imports, and lowering our costs on a household and economy-wide level. While renewable energy technologies also help accomplish these objectives, improving energy efficiency is the cheapest – and often the most immediate – way to reduce the use of fossil fuels. There are enormous opportunities for efficiency improvements in every sector of the economy, whether it is buildings, transportation, industry, or energy generation. Buildings are an important field for energy efficiency improvements around the world because of their role as a major energy consumer. However, the question of energy use in buildings is not straightforward as the indoor conditions that can be achieved with energy use vary a lot. The measures that keep buildings comfortable, lighting, heating, cooling and ventilation, all consume energy. Typically the level of energy efficiency in a building is measured by dividing energy consumed with the floor area of the building which is referred to as specific energy consumption (SEC) or energy use intensity (EUI).",
                btnText: "VIEW PROJECTS",
                images: [
                    {
                        image: energy1
                    },
                    {
                        image: energy2
                    },
                    {
                        image: energy3
                    },
                    {
                        image: energy4
                    },
                    {
                        image: energy5
                    },
                    {
                        image: energy6
                    },
                ]
            },
            {
                title: "WATER & INFRASTRUCTURE",
                desc: "Infrastructure is the fundamental facilities and systems serving a country, city, or other area, including the services and facilities necessary for its economy to function. Infrastructure is composed of public and private physical improvements such as roads, railways, bridges, tunnels, water supply, sewers, electrical grids, and telecommunications (including Internet connectivity and broadband speeds). In general, it has also been defined as “the physical components of interrelated systems providing commodities and services essential to enable, sustain, or enhance societal living conditions”. There are two general types of ways to view infrastructure, hard or soft. Hard infrastructure refers to the physical networks necessary for the functioning of a modern industry. This includes roads, bridges, railways, etc. Soft infrastructure refers to all the institutions that maintain the economic, health, social, and cultural standards of a country. This includes educational programs, official statistics, parks and recreational facilities, law enforcement agencies, and emergency services. Infrastructure is the term for the basic physical systems of a business or nation—transportation, communication, sewage, water, and electric systems are all examples of infrastructure. These systems tend to be high-cost investments and are vital to a country’s economic development and prosperity. Projects related to infrastructure improvements may be funded publicly, privately, or through public-private partnerships. In economic terms infrastructure often involves the production of public goods or production processes that support natural monopolies.",
                btnText: "VIEW PROJECTS",
                images: [
                    {
                        image: water1
                    },
                    {
                        image: water2
                    },
                    {
                        image: water3
                    },
                    {
                        image: water4
                    },
                    {
                        image: water5
                    },
                    {
                        image: water6
                    },
                ]
            },
        ],
        servicesPage: {
            title: "SERVICES",
            services: [
                {
                    title: "Civil Enginering",
                    logo: [
                        {
                            path: "M 165.931 13.583 C 164.846 14.891, 164.847 16.587, 165.937 23.333 C 168.025 36.257, 167.943 37.500, 165 37.500 C 162.634 37.500, 162.419 37.023, 160.979 28.576 C 160.142 23.668, 158.961 19.487, 158.355 19.285 C 157.748 19.083, 154.690 21.259, 151.559 24.120 C 144.787 30.309, 140.065 38.965, 139.273 46.644 C 138.832 50.916, 138.358 52, 136.932 52 C 132.256 52, 130.329 58.716, 134.223 61.443 C 137.567 63.786, 214.433 63.786, 217.777 61.443 C 221.671 58.716, 219.744 52, 215.068 52 C 213.640 52, 213.168 50.913, 212.723 46.607 C 211.911 38.738, 207.599 30.770, 200.692 24.375 C 197.442 21.367, 194.280 19.073, 193.663 19.279 C 193.047 19.484, 191.858 23.668, 191.021 28.576 C 189.581 37.023, 189.366 37.500, 187 37.500 C 184.062 37.500, 183.979 36.311, 186.017 23.284 C 187.732 12.321, 187.446 12, 176 12 C 169.233 12, 166.946 12.360, 165.931 13.583 M 139.501 72.250 C 142.331 90.029, 151.133 104.877, 162.966 111.834 C 166.865 114.127, 168.629 114.500, 175.564 114.500 C 182.064 114.500, 184.515 114.044, 188.205 112.149 C 199.971 106.105, 209.679 90.165, 212.505 72.250 C 213.116 68.376, 212.988 68, 211.057 68 C 209.891 68, 208.793 68.563, 208.618 69.250 C 208.442 69.938, 207.546 73.650, 206.626 77.500 C 199.314 108.121, 173.617 119.276, 156.137 99.418 C 150.989 93.570, 147.529 86.523, 145.374 77.500 C 144.454 73.650, 143.558 69.938, 143.382 69.250 C 143.207 68.563, 142.109 68, 140.943 68 C 139.011 68, 138.884 68.374, 139.501 72.250 M 137.500 112.890 C 128.418 115.535, 123.156 118.659, 116.399 125.416 C 106.825 134.990, 101.994 146.583, 102.006 159.960 C 102.014 169.441, 103.538 173.854, 108.435 178.571 C 114.317 184.237, 121.452 186.085, 139.965 186.735 L 154.500 187.246 150.381 184.212 C 144.929 180.195, 141.917 175.797, 141.259 170.895 C 140.783 167.344, 141.105 166.487, 144.066 163.432 L 147.411 159.980 152.088 164.586 C 157.172 169.594, 160.265 170.134, 160.836 166.115 C 161.078 164.414, 159.969 162.525, 156.884 159.382 L 152.596 155.012 155.994 151.506 C 158.157 149.274, 160.320 148.008, 161.946 148.022 C 165.145 148.049, 172.047 151.135, 173.889 153.361 C 175.154 154.890, 175.795 154.547, 181.065 149.520 C 184.494 146.248, 187.749 144, 189.055 144 C 191.518 144, 208.230 159.675, 210.591 164.200 C 213.519 169.811, 211.903 179.914, 207.224 185.250 C 205.784 186.893, 206.052 186.998, 211.595 186.969 C 226.784 186.890, 239.175 183.558, 244.344 178.163 C 251.876 170.301, 251.892 151.587, 244.379 136.761 C 241.026 130.144, 230.938 120.016, 224.400 116.703 C 216.974 112.940, 206.938 110.493, 205.865 112.184 C 205.406 112.908, 205.024 114.010, 205.015 114.634 C 205.007 115.257, 203.220 117.376, 201.044 119.342 C 189.314 129.939, 159.946 129.387, 149.862 118.379 C 148.412 116.796, 146.919 114.487, 146.545 113.250 C 145.748 110.612, 145.374 110.597, 137.500 112.890 M 183.098 152.510 C 179.757 156.134, 179.132 157.378, 179.916 158.842 C 181.291 161.413, 183.555 163.120, 185.145 162.785 C 187.961 162.193, 187.204 167.431, 184.034 170.468 L 180.979 173.394 184.653 177.157 L 188.327 180.920 191.699 177.960 C 193.553 176.332, 195.681 175, 196.428 175 C 198.243 175, 199.141 177.591, 198.378 180.631 C 197.609 183.696, 200.667 186.521, 202.820 184.734 C 206.049 182.055, 208.356 175.517, 208.115 169.728 C 207.972 166.291, 200.851 158.272, 196.210 156.322 C 194.394 155.559, 193.208 154.472, 193.564 153.896 C 194.308 152.692, 190.241 148, 188.453 148 C 187.794 148, 185.384 150.030, 183.098 152.510 M 159.335 153.571 C 158.952 154.568, 160.057 156.498, 162.366 158.863 C 166.728 163.330, 166.982 166.366, 163.313 170.195 C 159.629 174.041, 156.411 173.807, 151.863 169.366 C 147.160 164.774, 144.455 165.254, 145.311 170.527 C 146.554 178.186, 153.383 183.373, 161.561 182.871 L 166.015 182.597 181.828 198.298 C 195.245 211.621, 198.099 214, 200.666 214 C 202.329 214, 204.435 213.177, 205.345 212.171 C 208.936 208.204, 207.684 206.208, 191.347 189.847 L 175.695 174.171 175.597 167.836 C 175.486 160.565, 173.700 157.387, 167.864 154.068 C 163.532 151.604, 160.164 151.408, 159.335 153.571 M 180 166.559 C 180 167.416, 180.457 167.835, 181.016 167.490 C 181.575 167.144, 181.774 166.443, 181.457 165.931 C 180.600 164.544, 180 164.802, 180 166.559 M 192 183.723 C 192 184.981, 194.858 187.475, 195.530 186.803 C 195.795 186.538, 195.110 185.504, 194.006 184.506 C 192.903 183.507, 192 183.155, 192 183.723 M 157.728 193.845 C 153.669 197.780, 149.899 201, 149.349 201 C 147.862 201, 144 205.406, 144 207.102 C 144 209.043, 153.131 218, 155.110 218 C 156.773 218, 161 213.986, 161 212.407 C 161 211.876, 163.925 208.543, 167.500 205 C 171.075 201.457, 174 197.851, 174 196.987 C 174 196.123, 171.999 193.453, 169.554 191.053 L 165.107 186.689 157.728 193.845 M 198 207.531 C 198 210.629, 200.597 211.831, 202.714 209.714 C 204.831 207.597, 203.629 205, 200.531 205 C 198.490 205, 198 205.490, 198 207.531"
                        },
                        
                    ],
                    desc: "EDMA GmbH provides comprehensive civil engineering solutions, from site planning and development to structural engineering, ensuring safe, efficient, and compliant construction projects.",
                    btnText: "MORE",
                    image: civilEngineering
                },
                {
                    title: "Consulting Services",
                    logo: [
                        {
                            path: "M 167.735 1.250 C 166.690 2.043, 165.979 4.297, 165.793 7.410 L 165.500 12.320 160.267 14.093 C 157.389 15.068, 153.683 16.665, 152.030 17.641 L 149.025 19.416 145.715 16.208 C 143.892 14.442, 141.346 13, 140.049 13 C 137.180 13, 130 20.409, 130 23.369 C 130 24.489, 131.428 26.878, 133.174 28.679 L 136.347 31.954 133.653 37.457 C 132.171 40.483, 130.686 44.319, 130.354 45.980 C 129.784 48.828, 129.481 49, 125.030 49 C 118.703 49, 117 50.945, 117 58.174 C 117 65.091, 118.778 67, 125.220 67 C 129.367 67, 129.845 67.251, 130.461 69.750 C 130.834 71.263, 132.303 75.106, 133.725 78.292 L 136.311 84.084 133.155 87.340 C 131.420 89.130, 130 91.493, 130 92.589 C 130 95.169, 137.968 103, 140.592 103 C 141.700 103, 144.114 101.446, 145.955 99.546 L 149.302 96.093 153.401 98.465 C 155.656 99.769, 159.412 101.341, 161.750 101.957 C 165.948 103.063, 166 103.132, 166 107.539 C 166 113.652, 168.436 116, 174.777 116 C 181.744 116, 184 114.052, 184 108.036 L 184 103.186 189.374 101.496 C 192.329 100.566, 196.015 98.974, 197.564 97.958 L 200.380 96.111 204.193 99.555 C 206.290 101.450, 208.739 103, 209.634 103 C 211.996 103, 220 94.635, 220 92.166 C 220 91.013, 218.612 88.489, 216.917 86.558 L 213.833 83.046 216.284 77.773 C 217.631 74.873, 219.027 71.263, 219.386 69.750 C 219.977 67.256, 220.455 67, 224.519 67 C 230.862 67, 233 64.623, 233 57.571 C 233 50.667, 231.461 49, 225.087 49 C 220.337 49, 220.311 48.982, 219.071 44.750 C 218.386 42.412, 216.791 38.623, 215.526 36.328 L 213.228 32.156 216.151 29.356 C 220.955 24.752, 220.912 22.505, 215.921 17.419 C 210.690 12.090, 207.859 11.775, 203.463 16.036 L 200.331 19.072 193.915 16.037 C 190.387 14.367, 186.713 13.001, 185.750 13.001 C 184.356 13, 184 12.129, 184 8.723 C 184 1.962, 182.006 -0, 175.134 -0 C 171.971 -0, 168.641 0.563, 167.735 1.250 M 166.173 32.905 C 153.278 37.359, 145.706 51.598, 149.427 64.397 C 151.593 71.848, 156.384 77.807, 163.018 81.302 C 167.975 83.914, 169.218 84.149, 176 83.764 C 184.448 83.284, 188.258 81.676, 193.600 76.334 C 198.784 71.149, 200.954 65.751, 200.968 58 C 200.991 46.043, 193.576 35.733, 182.612 32.477 C 176.164 30.563, 172.694 30.653, 166.173 32.905 M 137 120.915 C 132.325 123.384, 123.620 127.507, 117.656 130.076 C 102.675 136.529, 98.912 139.383, 95.140 147.151 C 91.428 154.793, 90 164.817, 90 183.224 L 90 196 176 196 L 262 196 261.992 183.750 C 261.979 165.026, 260.527 154.644, 256.873 147.151 C 253.166 139.549, 248.855 136.173, 236.200 130.963 C 231.415 128.993, 222.699 124.911, 216.832 121.892 L 206.164 116.404 202.667 127.452 C 200.744 133.528, 196.606 146.596, 193.471 156.492 L 187.772 174.484 184.386 165.119 C 180.458 154.253, 180.398 153.684, 182.825 150.154 C 185.792 145.840, 187.157 141.507, 186.818 137.478 C 186.378 132.254, 182.892 129.769, 176 129.769 C 165.106 129.769, 162.093 136.766, 168.119 148.072 L 171.353 154.139 167.941 164.025 C 166.065 169.463, 164.229 173.369, 163.862 172.706 C 163.495 172.043, 159.277 159.125, 154.489 144 C 149.702 128.875, 145.720 116.483, 145.642 116.462 C 145.564 116.441, 141.675 118.445, 137 120.915"
                        },
                    ],
                    desc: "EDMA GmbH's consulting services cover a wide spectrum, including project management, environmental impact assessment, regulatory compliance, cost estimation, and sustainability consultation, ensuring your projects are meticulously planned, environmentally responsible, and within budget.",
                    btnText: "MORE",
                    image: consultingServices
                },
                {
                    title: "Architecture Services",
                    logo: [
                        {
                            path: "M 138.250 122.708 L 117 133.273 117 173.636 L 117 214 139 214 L 161 214 161 164 C 161 136.500, 161.113 114.001, 161.250 114.001 C 161.387 114.002, 168.250 116.858, 176.500 120.348 L 191.500 126.693 191.780 138.789 L 192.061 150.885 186.050 148.442 C 182.744 147.099, 179.491 146, 178.820 146 C 176.442 146, 179.516 147.785, 185.750 150.023 L 192 152.268 192.206 161.384 L 192.411 170.500 192.745 161.750 C 192.928 156.938, 193.209 153, 193.369 153 C 193.529 153, 196.324 154.084, 199.580 155.408 L 205.500 157.816 205.766 185.908 L 206.031 214 224.516 214 L 243 214 243 192.449 L 243 170.898 239.750 169.591 C 237.963 168.873, 229.863 165.680, 221.750 162.497 L 207 156.710 206.978 144.105 L 206.957 131.500 183.728 121.735 C 170.953 116.364, 160.275 112.009, 160 112.056 C 159.725 112.104, 149.938 116.897, 138.250 122.708 M 138.750 124.058 L 119 134.010 119 173.005 L 119 212 139.628 212 L 160.256 212 159.878 163.001 C 159.670 136.051, 159.275 114.025, 159 114.054 C 158.725 114.083, 149.613 118.585, 138.750 124.058 M 193 139.536 L 193 151.071 197.250 152.891 C 206.751 156.959, 206 157.674, 206 144.555 L 206 132.975 200.376 130.487 C 197.282 129.119, 194.357 128, 193.876 128 C 193.394 128, 193 133.191, 193 139.536 M 207 185.500 L 207 212 224.021 212 L 241.041 212 240.771 191.779 L 240.500 171.558 224.530 165.279 C 215.747 161.826, 208.209 159, 207.780 159 C 207.351 159, 207 170.925, 207 185.500"
                        }

                    ],
                    desc: "EDMA GmbH's architecture services encompass a broad range of expertise, including architectural design, conceptual design and master planning, building renovation and restoration, 3D rendering and visualization, and meticulous adherence to building code compliance, ensuring the realization of your architectural visions with precision and creativity.",
                    btnText: "MORE",
                    image: architectureServices
                },
                {
                    title: "WWTP Services",
                    logo: [
                        {
                            path: "M 193.667 19.667 C 193.300 20.033, 193 22.275, 193 24.648 C 193 28.551, 192.738 29.016, 190.250 29.526 C 175.136 32.629, 160.910 42.255, 152.147 55.309 C 144.472 66.741, 137.289 84.099, 134.065 99 C 131.943 108.811, 129.020 135.260, 129.010 144.750 L 129 154 125.970 154 C 124.303 154, 120.148 152.825, 116.736 151.389 C 111.270 149.088, 109.505 148.827, 101.893 149.191 C 95.909 149.477, 92.432 150.142, 90.582 151.354 C 89.113 152.317, 85.681 153.369, 82.955 153.692 C 79.495 154.101, 78 154.728, 78 155.768 C 78 157.644, 84.500 156.913, 93.839 153.986 C 101.808 151.489, 105.223 151.493, 113.161 154.009 C 122.396 156.935, 129.499 157.415, 136 155.551 C 150.578 151.372, 151.280 151.338, 162.465 154.280 C 175.226 157.637, 177.517 157.650, 188.074 154.429 C 197.366 151.594, 203.693 151.635, 212 154.583 C 220.274 157.519, 225.800 157.501, 235.989 154.503 C 246.424 151.433, 250.780 151.517, 261.839 155.002 C 269.263 157.342, 273 157.554, 273 155.636 C 273 154.788, 271.381 154.050, 268.719 153.685 C 266.364 153.362, 262.427 152.186, 259.969 151.071 C 253.346 148.067, 242.723 148.249, 235 151.500 C 231.306 153.055, 227.147 154, 224 154 C 220.853 154, 216.694 153.055, 213 151.500 C 205.336 148.274, 194.649 148.069, 188.141 151.022 C 185.743 152.110, 183.314 153, 182.743 153 C 179.873 153, 184.700 125.429, 189.070 116.863 C 191.265 112.561, 192.508 112.012, 193.290 115 C 193.775 116.856, 194.654 117, 205.472 117 C 217.241 117, 221 116.144, 221 113.465 C 221 112.216, 224.833 112, 247 112 C 269.444 112, 273 111.795, 273 110.500 C 273 109.205, 269.444 109, 247 109 L 221 109 221 106.224 L 221 103.448 242.452 103.570 C 258.763 103.662, 264.019 103.392, 264.383 102.443 C 264.647 101.757, 264.593 100.927, 264.264 100.598 C 263.936 100.269, 254.067 100, 242.333 100 L 221 100 221 95.500 L 221 91 225.083 91 C 230.294 91, 229.948 88.635, 224.673 88.190 L 221 87.879 221 62.940 L 221 38 225.418 38 C 227.848 38, 230.546 37.728, 231.412 37.395 C 234.424 36.240, 231.851 35, 226.441 35 L 221 35 221 31.017 L 221 27.034 246.750 26.767 C 268.854 26.538, 272.500 26.288, 272.500 25 C 272.500 23.713, 268.890 23.462, 247.082 23.232 C 223.035 22.979, 221.589 22.858, 220.275 20.982 C 219.019 19.189, 217.717 19, 206.610 19 C 199.858 19, 194.033 19.300, 193.667 19.667 M 195.713 22.621 C 195.321 23.013, 195 43.508, 195 68.167 L 195 113 206 113 L 217 113 217 67.500 L 217 22 211.020 22 L 205.039 22 204.770 43.667 C 204.570 59.728, 204.182 65.441, 203.270 65.744 C 202.326 66.058, 201.977 61.062, 201.770 44.327 L 201.500 22.500 198.963 22.204 C 197.567 22.041, 196.104 22.229, 195.713 22.621 M 181.917 35.347 C 161.354 42.666, 145.374 65.401, 138.084 97.708 C 134.170 115.055, 133.221 121.990, 132.409 139.194 L 131.716 153.887 134.108 153.299 C 138.567 152.203, 139 151.196, 139 141.929 C 139 131.741, 141.641 109.959, 143.047 108.553 C 145.515 106.085, 145.803 110.022, 144.008 121.717 C 142.976 128.437, 142.031 137.421, 141.906 141.682 L 141.680 149.429 150.182 149.135 C 157.477 148.883, 159.553 149.207, 164.811 151.421 C 168.182 152.839, 172.713 154, 174.880 154 L 178.820 154 179.460 145.250 C 180.775 127.250, 183.519 118.098, 190.092 109.793 L 193.025 106.086 192.763 69.793 C 192.460 27.982, 193.483 31.230, 181.917 35.347 M 173.177 55.535 C 164.305 61.846, 156.009 71.409, 157.828 73.228 C 158.574 73.974, 159.707 73.282, 161.655 70.894 C 165.788 65.827, 173.126 59.059, 176.321 57.368 C 178.613 56.155, 178.918 55.606, 177.948 54.438 C 177.292 53.647, 176.698 53.039, 176.628 53.086 C 176.557 53.133, 175.005 54.235, 173.177 55.535 M 99 168.031 C 96.525 168.378, 92.025 169.390, 89 170.278 C 85.975 171.166, 82.375 172.029, 81 172.196 C 79.579 172.369, 78.500 173.148, 78.500 174 C 78.500 176.186, 85.741 175.387, 93.898 172.302 C 101.199 169.540, 107.921 169.618, 113.760 172.530 C 117.806 174.549, 127.283 176.074, 131.326 175.357 C 133.072 175.047, 137.870 173.665, 141.989 172.286 C 150.611 169.399, 155.607 169.580, 163.442 173.065 C 170.496 176.203, 181.534 176.124, 189.009 172.882 C 192.593 171.327, 196.410 170.500, 200 170.500 C 203.590 170.500, 207.407 171.327, 210.991 172.882 C 215.166 174.692, 218.285 175.263, 224 175.263 C 229.715 175.263, 232.834 174.692, 237.009 172.882 C 243.772 169.948, 252.854 169.728, 257.846 172.376 C 261.404 174.263, 270.618 176.084, 272.655 175.302 C 274.820 174.471, 272.871 172, 270.050 172 C 268.545 172, 264.655 171.074, 261.407 169.943 C 257.478 168.575, 252.988 167.886, 248 167.886 C 243.012 167.886, 238.522 168.575, 234.593 169.943 C 227.064 172.565, 220.595 172.549, 212.908 169.889 C 204.875 167.109, 194.576 167.124, 186.593 169.926 C 179.123 172.549, 172.966 172.552, 164.880 169.936 C 156.546 167.239, 147.232 167.230, 138.550 169.912 C 130.212 172.487, 124.986 172.545, 117.380 170.144 C 110.027 167.824, 104.772 167.219, 99 168.031"
                        },
                    ],
                    desc: "EDMA GmbH specializes in delivering comprehensive solutions for Waste Water Treatment Plants (WWTP), including design and construction, process optimization, environmental compliance, turnkey projects, and ongoing maintenance and operation support, ensuring efficient and environmentally responsible wastewater management.",
                    btnText: "MORE",
                    image: wttp
                }
            ]
        },
        projectPage: {
            title: "PROJECTS",
            projects: [
                {
                    title: "HOME DESIGN",
                    image: project1
                },
                {
                    title: "EDMA GMBH",
                    image: project2
                },
                {
                    title: "SPOT-TECH REAL ESTATE AG",
                    image: project3
                },
                {
                    title: "COZY CORNER HOUSE",
                    image: project4
                },
                {
                    title: "METRO LOFT LIVING",
                    image: project5
                },
                {
                    title: "BAYVIEW ESTATE",
                    image: project6
                },
                {
                    title: "GREENFIELD MANOR",
                    image: project7
                },
                {
                    title: "LAKEFRONT HIDEAWAY",
                    image: project8
                },
                {
                    title: "MOUNTAINVIEW VILLAS",
                    image: project9
                },
                {
                    title: "SEASCAPE RESIDENCES",
                    image: project10
                },
            ],
            btnText: "LOAD MORE"
        },
        contactPage: {
            title: "CONTACT",
            desc: "LET US COLLABORATE WITH US",
            bigTitle: "Together we can make dreams come true",
            contactInfo: [
                {
                    name: "address:",
                    values: [
                        {
                            value: "Täfernstrasse 2a 5405 Dättwil"
                        }
                    ]
                },
                {
                    name: "phone number:",
                    values: [
                        {
                            value: "079 586 00 92"
                        },
                        {
                            value: "044 593 54 11"
                        },
                    ]
                },
                {
                    name: "email:",
                    values: [
                        {
                            value: "edma@gmx.ch"
                        }
                    ]
                },
            ],
            form: {
                inputs: [
                    {
                        name: "user_name",
                        label: "Name",
                        errors: [
                            {
                                error: "Name is required"
                            }
                        ]
                    },
                    {
                        name: "user_email",
                        label: "Email",
                        errors: [
                            {
                                error: "Email is required"
                            },
                            {
                                error: "Invalid email address"
                            }
                        ]
                    },
                    {
                        name: "user_phone",
                        label: "Phone Number",
                        errors: [
                            {
                                error: "Phone number is required"
                            },
                            {
                                error: "Invalid phone number"
                            }
                        ]
                    },
                    {
                        name: "message",
                        label: "Message",
                        errors: [
                            {
                                error: "Message is required"
                            }
                        ]
                    },
                ],
                btnText: "SEND MESSAGE",
                successText: "Thank you for submiting the form"
            }
        },
        errorPage: {
            title: "404",
            text: "Sorry, the page not found",
            btnText: "Go to Home",
            btnLink: "/"
        },
        registerPage: {
            title: "Register to EDMA GmbH",
            successText: "You are successfully registered",
            accountExists: "Already have an account?",
            login: "Login",
            loginPath: "/login",
            btnText: "Register",
            inputs: [
                {
                    name: "username",
                    label: "Username",
                    errors: [
                        {
                            error: "Username is required"
                        }
                    ]
                },
                {
                    name: "email",
                    label: "Email",
                    errors: [
                        {
                            error: "Email is already taken"
                        },
                        {
                            error: "Email is required"
                        },
                        {
                            error: "Invalid email address"
                        }
                    ]
                },
                {
                    name: "password",
                    label: "Password",
                    errors: [
                        {
                            error: "Password is required"
                        },
                        {
                            error: "Password must be at least 8 characters long"
                        }
                    ]
                },
                {
                    name: "confirmPassword",
                    label: "Confirm Password",
                    errors: [
                        {
                            error: "Please confirm password"
                        },
                        {
                            error: "Passwords do not match"
                        },
                    ]
                },
            ],
        },
        loginPage: {
            title: "Login to EDMA GmbH",
            accountExists: "You do not have an account?",
            signUp: "Register",
            register: "/register",
            btnText: "Login",
            inputs: [
                {
                    name: "email",
                    label: "Email",
                    errors: [
                        {
                            error: "Email does not exists"
                        },
                        {
                            error: "Email is required"
                        },
                        {
                            error: "Invalid email address"
                        }
                    ]
                },
                {
                    name: "password",
                    label: "Password",
                    errors: [
                        {
                            error: "Password is required"
                        },
                        {
                            error: "Incorrect Password"
                        }
                    ]
                },
            ],
        }
    }
}

export {data};