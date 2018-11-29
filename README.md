_This is just a rudimentary description of the possibilities that will be expanded. Later, of course, also in English._

# Digital Maker Space (DMS)
Die Idee eines Maker Space ist, Menschen freien Zugang zu modernen Technologien und Werkzeugen zu ermöglichen. Ein Beispiel ist eine Halle mit 3D-Druckern, zu der jeder Bürger freien Zugang hat und diese nutzen kann. Ein Digital Maker Space überträgt dieses Prinzip ins Digitale. Über ihn werden digitale Werkzeuge, sogenannte Webkomponenten, für jeden Menschen frei zur Verfügung gestellt. Aus einer solchen Webkomponente können über Weboberflächen ohne Programmierkenntnisse Apps erstellt werden, die dann wie ein Legostein in beliebige Webseiten eingebracht werden können. Über eine Webkomponente für Quiz kann beispielsweise ein Quiz erstellt und in beliebige Webseiten per HTML-Einbettungscode (ähnlich wie bei einem YouTube-Video) eingebettet werden.

(Ausführliche Beschreibung unter: [Projektantrag zum Digital Maker Space](https://www.stifterverband.org/file/5203/download?token=lay3iM9c))

## Individualisierte Eingabemasken
Im DMS werden zu einer konkreten Webkomponente oft verschiedene Eingabemasken für die Erstellung einer App angeboten. Es gibt also nicht, wie sonst üblich, nur die eine Eingabemaske, die für alle Nutzer gleichermaßen passen muss.

## Wettbewerbsprinzip
Jeder kann im DMS eine Webkomponente bewerten und auch veröffentlichen. So kann es beispielsweise mehrere verschiedene Quiz-Komponenten geben, die dann gewissermaßen im Wettbewerb stehen, welche am meisten genutzt bzw. am besten bewertet wird.

# Webkomponenten

## Erweiterung des Webs
Jede freie Webkomponente erweitert die Funktionalität des Webs als Ganzes. Gibt es also eine Quiz-Komponente, kann das Web nun Quiz. Man ist also nicht mehr darauf angewiesen, dass eine bestimmte Plattform bzw. Unternehmen eine Quiz-Funktionalität bereitstellt. Das Quiz wurde durch die Webkomponente zu einem neuen Bestandteil des Webs.

## Plattformübergreifende Echtzeitkollaboration
Über Webkomponenten können Menschen plattformübergreifend in Echtzeit miteinander kollaborieren. Angenommen, ein über eine Webkomponente erstellter Chat wird in zwei verschiedene Lernplattformen, in einer einfachen Webseite und in einer mobilen Web-App eingebettet, dann können alle miteinander kommunizieren. Unabhängig vom virtuellen Ort der Nutzer, die den Chat verwenden, können Nachrichten plattformübergreifend ausgetauscht werden.

## Lego-Prinzip
Die Webkomponenten basieren auf der _ccm_-Technologie, die im Vergleich zu bisherigen Komponententechnologien unter anderem einen weitreichenderen Grad an Flexibilität und Anpassbarkeit erlaubt. Webkomponenten können dadurch wie Lego-Steine zu komplexen Webanwendungen zusammengesetzt werden.

## Grundprinzip
Das Prinzip einer Webkomponente ist simpel: Eine Webkomponente bekommt einen Bereich einer Webseite zugewiesen, den Sie anschließend gestaltet. Hierfür bekommt sie initiale Daten, die Konfiguration. Bei einem Quiz beinhalten diese Daten neben vielen anderen Anpassungsmöglichkeiten unter anderem die Angaben, welche Fragen und Antworten konkret dargestellt werden sollen und welche Antworten zu einer Frage korrekt sind. Darüber hinaus enthält die Konfiguration die grundsätzlich austauschbaren Abhängigkeiten zu anderen Ressourcen wie Layout (CSS) und Datenspeichern. Die Webkomponente löst diese Abhängigkeiten zur Laufzeit auf und erzeugt aus der gegebenen Konfiguration die App, die in dem zugewiesenen Webseitenbereich dargestellt wird. Wo die bei der Verwendung einer App ggfs. anfallenden Daten (bei einem Chat zum Beispiel der Chatverlauf) gespeichert werden, ist ebenfalls frei einstellbar. Um dies zu ermöglichen, bietet die _ccm_-Technologie einen besonderen Service für die Datenhaltung.

## Was ist eine Webkomponente konkret?
Eine Webkomponente ist nichts anderes als eine kleine Javascript-Datei, deren Dateiname immer mit `ccm.` beginnt und mit `.js` endet (z.B. `ccm.quiz.js`) und die _ccm_-Technologie verwendet. Ist diese einmal in eine Webseite eingebunden, existiert sofort auch automatisch ein zugehöriger HTML-Tag, dessen Name immer mit `ccm-` beginnt (z.B. `<ccm-quiz>`). Eine Webkomponente ist nicht an einen festen Ort im Web gebunden. Sie kann frei heruntergeladen und an anderen Stellen wieder veröffentlicht werden. Bei freien Webkomponenten muss keinerlei Urheberrecht beachtet werden, da sie unter einer freien Lizenz (in der Regel MIT-Lizenz) gestellt sind.

## Versionierung und Archivierbarkeit
Webkomponenten unterstützen Versionierung. Es können in einer Webseite beispielsweise konfliktfrei mehrere Apps eingebettet werden, die auf verschiedenen Versionen derselben Webkomponente basieren. Damit kann auch die Archivierbarkeit sichergestellt werden, so dass Webkomponenten basierend auf der _ccm_-Technologie unverändert auch viele Jahre später noch ablauffähig sind.
