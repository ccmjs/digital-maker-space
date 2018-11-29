_This is just a rudimentary description of the possibilities that will be expanded. Later, of course, also in English._

# Digital Maker Space (DMS)
Die Idee eines Maker Space ist es Menschen freien Zugang zu modernen Technologien und Werkzeugen zu ermöglichen. Ein Bespiel wäre eine Halle mit 3D-Druckern, zu der jeder Bürger freien Zugang hat und diese nutzen kann. Ein _Digital Maker Space_ überträgt dieses Prinzip ins Digitale. Über ihn werden digitale Werkzeuge, sogenannte Webkomponenten, für jeden Menschen frei zur Verfügung gestellt. Aus einer solchen Webkomponente können dann über Weboberflächen ohne Programmierkenntnisse Apps erstellt werden, die dann wie ein Legostein in beliebige Webseiten eingebracht werden können. Über eine Webkomponente für Quiz kann also beispielsweise ein Quiz erstellt und in beliebige Webseiten per HTML-Einbettungscode (ähnlich wie bei einem YouTube-Video) einbettet werden.

Siehe auch hier:
[Projektantrag zum Digital Maker Space](https://www.stifterverband.org/file/5203/download?token=lay3iM9c)

## Individualisierte Eingabemasken
Im DMS werden zu einer konkreten Webkomponente oft verschiedene Eingabemasken für die Erstellung einer App angeboten. Es gibt also nicht, wie sonst üblich, nur die eine Eingabemaske, die für alle Anwender gleichermaßen passen muss.

## Wettbewerbsprinzip
Jeder kann im DMS eine Webkomponente bewerten und auch veröffentlichen. So kann es beispielsweise mehrere verschiedene Quiz-Komponenten geben, die dann gewissermaßen im Wettbewerb stehen, welche am meisten genutzt bzw. am besten bewertet wird. 

# Webkomponenten

## Erweiterung des Webs
Jede freie Webkomponente erweitert die Funktionalität des Webs als Ganzes. Gibt es also eine Quiz-Komponente, kann das Web nun Quiz. Man ist also nicht mehr darauf angewiesen das eine bestimmte Plattform bzw. Unternehmen eine Quiz-Funktionalität bereitstellt.

## Plattformübergreifende Echtzeitkollaboration
Über Webkomponenten können Menschen plattformübergreifend in Echtzeit miteinander kollaborieren. Angenommen ein über eine Webkomponente erstellter Chat wird in zwei verschiedene Lernplattformen, eine einfache Webseite und eine mobile Web-App eingebettet, dann können darüber, unabhängig davon von welchem virtuellen Ort aus ein Nutzer den Chat verwendet, plattformübergreifend Nachrichten ausgetauscht werden.

## Lego-Prinzip
Die Webkomponenten basieren auf der sogenannten _ccm_-Technologie, die im Gegensatz zu bisherigen Komponententechnologien unter Anderem einen weitaus weitreichenderen Grad an Flexibilität und Anpassbarkeit erlaubt. Webkomponenten können dadurch wie Lego-Steine zu komplexen Webanwendungen zusammengesetzt werden.

## Grundprinzip
Das Prinzip einer Webkomponente ist simpel: Eine Webkomponente bekommt einen Bereich einer Webseite zugewiesen, den Sie anschließend gestaltet. Hierfür bekommt sie initiale Daten, die Konfiguration. Bei einem Quiz beinhalten diese Daten neben vielen anderen Anpassungsmöglichkeiten unter Anderem die Angaben, welche Fragen und Antworten konkret dargestellt werden sollen und welche Antworten zu einer Frage korrekt sind. Darüber hinaus enthält die Konfiguration die grundsätzlich austauschbaren Abhängigkeiten zu anderen Ressourcen wie Layout (CSS) und Datenspeichern. Die Webkomponente löst diese Abhängigkeiten dann zur Laufzeit auf und erzeugt aus der gegebenen Konfiguration die App, die in dem zugewiesenen Webseitenbereich dargestellt wird. Wo die bei der Verwendung einer App ggf. anfallenden Daten (bei einem Chat zum Beispiel der Chatverlauf) gespeichert werden, ist ebenfalls frei einstellbar. Um dies zu ermöglichen bietet die _ccm_-Technologie einen besonderen Service für die Datenhaltung.

## Was ist eine Webkomponente konkret?
Eine Webkomponente ist nichts anderes als eine kleine Javascript-Datei, deren Dateiname immer mit `ccm.` beginnt (z.B. `ccm.quiz.js`). Ist diese einmal in eine Webseite eingebunden, existiert sofort auch automatisch ein zugehöriger HTML-Tag, dessen Name immer mit `ccm-` beginnt (z.B. `<ccm-quiz>`). Eine Webkomponente ist nicht an einen festen Ort im Web gebunden. Jeder ist frei sie herunterzuladen und woanders wieder zu veröffentlichen. Bei freien Webkomponenten muss keinerlei Urheberrecht beachtet werden, da sie unter einer freien Lizenz (in aller Regel der MIT-Lizenz) gestellt sind.

## Versionierung
Webkomponenten unterstützen Versionierung. Es können in einer Webseite beispielsweise konfliktfrei mehrere Apps eingebettet werden, die auf verschiedenen Versionen der selben Webkomponente basieren.
