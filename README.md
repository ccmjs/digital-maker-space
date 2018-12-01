_German description below._

# English Description

## Digital Maker Space (DMS)
The idea of a Maker Space is to give people free access to modern technologies and tools. An example is a hall with 3D printers, to which every citizen has free access. A Digital Maker Space transfers this principle into digital. Through him, digital tools, so-called web components, are made freely available to everyone. With a web component apps can be created via web interfaces without programming knowledge, which can then be inserted like a Lego stone in any web pages. For example, a quiz web component can be used to create a quiz and embed it into any web page using an HTML embed code (similar to a YouTube video).

(detailed description under: [Project Application for the Digital Maker Space [german]](https://www.stifterverband.org/file/5203/download?token=lay3iM9c))

### Individualized Input Masks
The DMS offers various input masks for the creation of an app for a specific web component. So there is not, as usual, only the one input mask that has to fit equally for all users.

### Principle of Competition
Everyone can evaluate and publish a web component in the DMS. For example, there may be several different quiz components, which are then in a sense in competition. Which is the most used or best rated?

## Web Components

### Extension of the Web
Each free web component extends the functionality of the web as a whole. So if there is a quiz component, the web itself now supports quiz. The use of a quiz is thus no longer dependent on a specific platform or company. The quiz became a new part of the web through the web component.

### Cross-platform Real-time Collaboration
Web components allow people to collaborate cross-platform in real time. Assuming that a chat created through a web component is embedded in two different learning platforms, a simple web page and a mobile web app, everyone can communicate with each other. Regardless of the virtual location of the users using the chat, messages can be exchanged across platforms.

### Lego Principle
The web components are based on _ccm_ technology, which, among other things, allows for a greater degree of flexibility and adaptability compared to other component technologies. Web components can thus be put together like Lego bricks to form complex web applications.

### Basic Principle
The principle of a web component is simple: A web component is assigned a web page area, which it then designs. For this, the component gets initial data, the configuration. In the case of the quiz component, these data include, among other things, the information as to which questions and answers should be presented concretely and which answers of a question are correct.
In addition, the configuration contains interchangeable dependencies to other resources such as layout (CSS) and datastores. The dependencies are resolved at runtime. The web component and the given configuration will then result in the app being displayed in the assigned web page area.
The use of an app usually creates data. For example, in a chat, the chat history. Over the configuration of a web component is always freely adjustable, where the resulting data is stored and managed. To make this possible, the _ccm_ technology offers a special service for data management.

### What exactly is a Web Component?
A web component is nothing more than a small javascript file whose filename starts always with `ccm.` and ends with `.js` (for example, `ccm.quiz.js`) and uses the _ccm_ technology. Once a web component has been integrated into a web page, an associated HTML tag automatically exists, whose name always begins with `ccm-` (for example, `<ccm-quiz>`). A web component is not tied to a fixed location on the web. It can be freely downloaded and published elsewhere. For free web components, nobody has to worry about copyright because they are under a free license (usually MIT license).

### Versioning and Archivability
Web components support versioning. For example, in a web page, multiple apps can be embedded without conflict, based on different versions of the same web component. This also ensures archivability so that web components based on _ccm_ technology can still run many years later, unchanged.

# German Description

## Digital Maker Space (DMS)
Die Idee eines Maker Space ist, Menschen freien Zugang zu modernen Technologien und Werkzeugen zu ermöglichen. Ein Beispiel ist eine Halle mit 3D-Druckern, zu der jeder Bürger freien Zugang hat und diese nutzen kann. Ein Digital Maker Space überträgt dieses Prinzip ins Digitale. Über ihn werden digitale Werkzeuge, sogenannte Webkomponenten, für jeden Menschen frei zur Verfügung gestellt. Aus einer solchen Webkomponente können über Weboberflächen ohne Programmierkenntnisse Apps erstellt werden, die dann wie ein Legostein in beliebige Webseiten eingebracht werden können. Über eine Webkomponente für Quiz kann beispielsweise ein Quiz erstellt und in beliebige Webseiten per HTML-Einbettungscode (ähnlich wie bei einem YouTube-Video) eingebettet werden.

(Ausführliche Beschreibung unter: [Projektantrag zum Digital Maker Space](https://www.stifterverband.org/file/5203/download?token=lay3iM9c))

### Individualisierte Eingabemasken
Im DMS werden zu einer konkreten Webkomponente oft verschiedene Eingabemasken für die App-Erstellung angeboten. Es gibt also nicht, wie sonst üblich, nur die eine Eingabemaske, die für alle Nutzer gleichermaßen passen muss.

### Wettbewerbsprinzip
Jeder kann im DMS eine Webkomponente bewerten und auch veröffentlichen. So kann es beispielsweise mehrere verschiedene Quiz-Komponenten geben, die dann gewissermaßen im Wettbewerb stehen, welche am meisten genutzt bzw. am besten bewertet wird.

## Webkomponenten

### Erweiterung des Webs
Jede freie Webkomponente erweitert die Funktionalität des Webs als Ganzes. Gibt es also eine Quiz-Komponente, kann das Web nun Quiz. Man ist also nicht mehr darauf angewiesen, dass eine bestimmte Plattform bzw. Unternehmen eine Quiz-Funktionalität bereitstellt. Das Quiz wurde durch die Webkomponente zu einem neuen Bestandteil des Webs.

### Plattformübergreifende Echtzeitkollaboration
Über Webkomponenten können Menschen plattformübergreifend in Echtzeit miteinander kollaborieren. Angenommen, ein über eine Webkomponente erstellter Chat wird in zwei verschiedene Lernplattformen, in einer einfachen Webseite und in einer mobilen Web-App eingebettet, dann können alle miteinander kommunizieren. Unabhängig vom virtuellen Ort der Nutzer, die den Chat verwenden, können Nachrichten plattformübergreifend ausgetauscht werden.

### Lego-Prinzip
Die Webkomponenten basieren auf der _ccm_-Technologie, die im Vergleich zu bisherigen Komponententechnologien unter anderem einen weitreichenderen Grad an Flexibilität und Anpassbarkeit erlaubt. Webkomponenten können dadurch wie Lego-Steine zu komplexen Webanwendungen zusammengesetzt werden.

### Grundprinzip
Das Prinzip einer Webkomponente ist simpel: Eine Webkomponente bekommt einen Bereich einer Webseite zugewiesen, den Sie anschließend gestaltet. Hierfür bekommt sie initiale Daten, die Konfiguration. Bei einem Quiz beinhalten diese Daten neben vielen anderen Anpassungsmöglichkeiten unter anderem die Angaben, welche Fragen und Antworten konkret dargestellt werden sollen und welche Antworten zu einer Frage korrekt sind.

Darüber hinaus enthält die Konfiguration die grundsätzlich austauschbaren Abhängigkeiten zu anderen Ressourcen wie Layout (CSS) und Datenspeichern. Die Abhängigkeiten werden zur Laufzeit aufgelöst. Die Webkomponente und die gegebene Konfiguration ergeben dann die App, die in dem zugewiesenen Webseitenbereich dargestellt wird.

Bei der Nutzung einer App entstehen in der Regel Daten. Bei einem Chat wäre das beispielsweise der Chatverlauf. Über die Konfiguration einer Webkomponente ist immer frei einstellbar, wo die resultierenden Daten gespeichert und verwaltet werden. Um dies zu ermöglichen, bietet die _ccm_-Technologie einen besonderen Service für die Datenhaltung.

### Was ist eine Webkomponente konkret?
Eine Webkomponente ist nichts anderes als eine kleine Javascript-Datei, deren Dateiname immer mit `ccm.` beginnt und mit `.js` endet (z.B. `ccm.quiz.js`) und die _ccm_-Technologie verwendet. Ist diese einmal in eine Webseite eingebunden, existiert sofort auch automatisch ein zugehöriger HTML-Tag, dessen Name immer mit `ccm-` beginnt (z.B. `<ccm-quiz>`).

Eine Webkomponente ist nicht an einen festen Ort im Web gebunden. Sie kann frei heruntergeladen und an anderen Stellen wieder veröffentlicht werden. Bei freien Webkomponenten muss keinerlei Urheberrecht beachtet werden, da sie unter einer freien Lizenz (in der Regel MIT-Lizenz) gestellt sind.

### Versionierung und Archivierbarkeit
Webkomponenten unterstützen Versionierung. Es können in einer Webseite beispielsweise konfliktfrei mehrere Apps eingebettet werden, die auf verschiedenen Versionen derselben Webkomponente basieren. Damit kann auch die Archivierbarkeit sichergestellt werden, so dass Webkomponenten basierend auf der _ccm_-Technologie unverändert auch viele Jahre später noch ablauffähig sind.
