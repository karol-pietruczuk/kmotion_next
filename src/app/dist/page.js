'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
require("./logo-section.css");
require("./service-section.css");
require("./recommendation-section.css");
require("./contact-section.css");
require("./footer.css");
var useWindowDimension_1 = require("./hooks/useWindowDimension");
function Home() {
    var width = useWindowDimension_1["default"]().width;
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: 'logo-section' },
            React.createElement("header", { className: 'logo-section__header' },
                React.createElement("h1", { className: 'logo-section__header--title' }, "KMotion"),
                React.createElement("h2", { className: 'logo-section__header--desc' }, "Automatyka przemys\u0142owa"),
                React.createElement(image_1["default"], { className: 'logo-section__header--logo', src: "/kmotion.svg", alt: "KMotion Logo", width: width !== undefined ? (width > 460 ? (width > 1150 ? 0.1 * width : 0.2 * width) : 0.3 * width) : 100, height: 24, priority: true }))),
        React.createElement("section", { className: 'service-section' },
            React.createElement("header", { className: 'service-section__header' },
                React.createElement("h2", { className: 'service-section__header--title' }, "Czym si\u0119 zajmujemy?")),
            React.createElement("article", { className: 'service-section__article' },
                React.createElement("div", { className: 'service-section__article--service' },
                    React.createElement("div", { className: 'service-section__article--service-hex' },
                        React.createElement("p", { className: 'service-section__article--service-hex--desc' }, "Programowanie sterownik\u00F3w, m.in. Allen Bradley, Eaton, Mitsubishi, Siemens"))),
                React.createElement("div", { className: 'service-section__article--service' },
                    React.createElement("div", { className: 'service-section__article--service-hex' },
                        React.createElement("p", { className: 'service-section__article--service-hex--desc' }, "Tworzenie wizualizacji na panelach HMI, m.in. Galileo, Allen Bradley"))),
                React.createElement("div", { className: 'service-section__article--service' },
                    React.createElement("div", { className: 'service-section__article--service-hex' },
                        React.createElement("p", { className: 'service-section__article--service-hex--desc' }, "Usuwanie usterek maszyn"))),
                React.createElement("div", { className: 'service-section__article--service' },
                    React.createElement("div", { className: 'service-section__article--service-hex' },
                        React.createElement("p", { className: 'service-section__article--service-hex--desc' }, "Naprawa/przer\u00F3bki sterowania"))),
                React.createElement("div", { className: 'service-section__article--service' },
                    React.createElement("div", { className: 'service-section__article--service-hex' },
                        React.createElement("p", { className: 'service-section__article--service-hex--desc' }, "Tworzenie stron internetowych"))),
                React.createElement("div", { className: 'service-section__article--service' },
                    React.createElement("div", { className: 'service-section__article--service-hex' },
                        React.createElement("p", { className: 'service-section__article--service-hex--desc' }, "Prefabrykacja szaf sterowniczych"))),
                React.createElement("div", { className: 'service-section__article--service' },
                    React.createElement("div", { className: 'service-section__article--service-hex' },
                        React.createElement("p", { className: 'service-section__article--service-hex--desc' }, "Programowanie i naprawa uszkodzonych przemiennik\u00F3w cz\u0119stotliwo\u015Bci, np. Delta, Danfoss, Omron, Lenze, Altivar"))),
                React.createElement("div", { className: 'service-section__article--service' },
                    React.createElement("div", { className: 'service-section__article--service-hex' },
                        React.createElement("p", { className: 'service-section__article--service-hex--desc' }, "Implementacja nowych system\u00F3w sterowania"))),
                React.createElement("div", { className: 'service-section__article--service' },
                    React.createElement("div", { className: 'service-section__article--service-hex' },
                        React.createElement("p", { className: 'service-section__article--service-hex--desc' }, "Tworzenie schemat\u00F3w elektrycznych"))))),
        React.createElement("section", { className: 'recommendation-section' },
            React.createElement("header", { className: 'recommendation-section__header' },
                React.createElement("h2", { className: 'recommendation-section__header--title' }, "Dlaczego warto nas wybra\u0107?")),
            React.createElement("article", { className: 'recommendation-section__article' },
                React.createElement("ul", { className: 'recommendation-section__article__list' },
                    React.createElement("li", { className: 'recommendation-section__article__list-item' },
                        React.createElement("div", { className: 'recommendation-section__article__list-item--triangle' },
                            React.createElement("div", { className: 'recommendation-section__article__list-item--triangle-implementation' })),
                        React.createElement("p", { className: 'recommendation-section__article__list-item--desc' }, "Program napisany w spos\u00F3b uporz\u0105dkowany, umo\u017Cliwiaj\u0105cy rozbudow\u0119 systemu")),
                    React.createElement("li", { className: 'recommendation-section__article__list-item' },
                        React.createElement("div", { className: 'recommendation-section__article__list-item--triangle' },
                            React.createElement("div", { className: 'recommendation-section__article__list-item--triangle-implementation' })),
                        React.createElement("p", { className: 'recommendation-section__article__list-item--desc' }, "Design wizualizacji w nowoczesnym stylu")),
                    React.createElement("li", { className: 'recommendation-section__article__list-item' },
                        React.createElement("div", { className: 'recommendation-section__article__list-item--triangle' },
                            React.createElement("div", { className: 'recommendation-section__article__list-item--triangle-implementation' })),
                        React.createElement("p", { className: 'recommendation-section__article__list-item--desc' }, "Schemat elektryczny wykonany z uwzgl\u0119dnieniem najmniejszych szczeg\u00F3\u0142\u00F3w")),
                    React.createElement("li", { className: 'recommendation-section__article__list-item' },
                        React.createElement("div", { className: 'recommendation-section__article__list-item--triangle' },
                            React.createElement("div", { className: 'recommendation-section__article__list-item--triangle-implementation' })),
                        React.createElement("p", { className: 'recommendation-section__article__list-item--desc' }, "Wsparcie powykonawcze")),
                    React.createElement("li", { className: 'recommendation-section__article__list-item' },
                        React.createElement("div", { className: 'recommendation-section__article__list-item--triangle' },
                            React.createElement("div", { className: 'recommendation-section__article__list-item--triangle-implementation' })),
                        React.createElement("p", { className: 'recommendation-section__article__list-item--desc' }, "Pomoc w naprawie usterek i awarii")),
                    React.createElement("li", { className: 'recommendation-section__article__list-item' },
                        React.createElement("div", { className: 'recommendation-section__article__list-item--triangle' },
                            React.createElement("div", { className: 'recommendation-section__article__list-item--triangle-implementation' })),
                        React.createElement("p", { className: 'recommendation-section__article__list-item--desc' }, "Indywidualne podej\u015Bcie do klienta i problemu"))))),
        React.createElement("section", { className: 'contact-section' }),
        React.createElement("footer", { className: 'footer' }, "Made with Heart & Passion by KMotion | Copyrights Kmotion 2023 ")));
}
exports["default"] = Home;
