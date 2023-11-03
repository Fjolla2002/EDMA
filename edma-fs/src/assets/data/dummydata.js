import aboutImg from '../images/about.jpg';

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
        }
    }
}

export {data};