<template>
  <v-flex id="contact" xs12>
    <v-layout row wrap justify-space-around align-content-center py-5>
      <v-flex xs3>
        <h1>Sag HI.</h1>
        <p>
          Du hast ne geile Idee für ein Video? Oder absolut keinen Plan,
          brauchst aber eins? Dann melde dich einfach bei mir und wir besprechen
          alles Weitere!
        </p>
      </v-flex>
      <v-flex xs5 offset-xs1>
        <v-layout row wrap fill-height align-content-center>
          <v-flex xs12>
            <h2>
              <v-icon size="35px" color="#ebe7de">mail</v-icon>
              &nbsp;johannes@blenkesth.com
            </h2>
          </v-flex>
          <v-flex xs12 mt-3>
            <h2>
              <v-icon size="35px" color="#ebe7de">phone</v-icon>
              &nbsp;+49 123456789
            </h2>
          </v-flex>
          <v-flex xs12 mt-3>
            <v-btn
              outline
              color="white"
              href="https://www.instagram.com/jojoblenke/"
              target="_blank"
            >
              <v-icon>camera_alt</v-icon>&nbsp;&nbsp;Instagram
            </v-btn>
            <v-btn
              outline
              color="white"
              href="https://www.youtube.com/channel/UCSQxhLXj6wf-HAjjSaOXA3w"
              target="_blank"
            >
              <v-icon>videocam</v-icon>&nbsp;&nbsp;Youtube
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout id="footer" justify-space-around row wrap py-1>
      <v-flex xs3>
        Entwickelt von <a href="https://skamps.eu" target="_blank">Leo</a> mit
        ganz viel ❤️
      </v-flex>
      <v-flex xs6 text-xs-right>
        <span class="clickable" @click="policy = !policy">
          Datenschutzerklärung
        </span>
        <span class="clickable pl-3" @click="impressum = !impressum">
          Impressum
        </span>
      </v-flex>
    </v-layout>

    <v-dialog v-model="policy" scrollable width="800">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Datenschutzerklärung
        </v-card-title>

        <v-card-text>
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen &Uuml;berblick
            dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn
            Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten,
            mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
            Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
            unserer unter diesem Text aufgef&uuml;hrten
            Datenschutzerkl&auml;rung.
          </p>
          <h3>Datenerfassung auf unserer Website</h3>
          <p>
            <strong
              >Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
              Website?</strong
            >
          </p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Impressum
            dieser Website entnehmen.
          </p>
          <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
            in ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
            Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere
            Website betreten.
          </p>
          <p><strong>Wof&uuml;r nutzen wir Ihre Daten?</strong></p>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
            Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
          <p>
            <strong>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</strong>
          </p>
          <p>
            Sie haben jederzeit das Recht unentgeltlich Auskunft &uuml;ber
            Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
            personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
            Recht, die Berichtigung, Sperrung oder L&ouml;schung dieser Daten zu
            verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
            k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen
            Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht
            bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
          </p>
          <p>
            Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden
            die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen. Details hierzu entnehmen Sie der
            Datenschutzerkl&auml;rung unter &bdquo;Recht auf Einschr&auml;nkung
            der Verarbeitung&ldquo;.
          </p>
          <h3>Analyse-Tools und Tools von Drittanbietern</h3>
          <p>
            Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch
            ausgewertet werden. Das geschieht vor allem mit Cookies und mit
            sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens
            erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen
            zur&uuml;ckverfolgt werden.
          </p>
          <p>
            Sie k&ouml;nnen dieser Analyse widersprechen oder sie durch die
            Nichtbenutzung bestimmter Tools verhindern. Detaillierte
            Informationen zu diesen Tools und &uuml;ber Ihre
            Widerspruchsm&ouml;glichkeiten finden Sie in der folgenden
            Datenschutzerkl&auml;rung.
          </p>
          <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer
            pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerkl&auml;rung.
          </p>
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene
            personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
            mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die
            vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten
            wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch,
            wie und zu welchem Zweck das geschieht.
          </p>
          <p>
            Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
            (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken
            aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem
            Zugriff durch Dritte ist nicht m&ouml;glich.
          </p>
          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p>
            Johannes Paul Niclas Blenke<br />
            Hauschildweg 40a, 40699 Erkrath
          </p>

          <p>
            Telefon: +4915757256903<br />
            E-Mail: blenke.productions@gmail.com
          </p>
          <p>
            Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
            Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke
            und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B.
            Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
          </p>
          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
            ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
            bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine
            formlose Mitteilung per E-Mail an uns. Die Rechtm&auml;&szlig;igkeit
            der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
            unber&uuml;hrt.
          </p>
          <h3>
            Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
            sowie gegen Direktwerbung (Art. 21 DSGVO)
          </h3>
          <p>
            <strong
              >Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e
              oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus
              Gr&uuml;nden, die sich aus Ihrer besonderen Situation ergeben,
              gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
              einzulegen; dies gilt auch f&uuml;r ein auf diese Bestimmungen
              gest&uuml;tztes Profiling. Die jeweilige Rechtsgrundlage, auf
              denen eine Verarbeitung beruht, entnehmen Sie dieser
              Datenschutzerkl&auml;rung. Wenn Sie Widerspruch einlegen, werden
              wir Ihre betroffenen personenbezogenen Daten nicht mehr
              verarbeiten, es sei denn, wir k&ouml;nnen zwingende
              schutzw&uuml;rdige Gr&uuml;nde f&uuml;r die Verarbeitung
              nachweisen, die Ihre Interessen, Rechte und Freiheiten
              &uuml;berwiegen oder die Verarbeitung dient der Geltendmachung,
              Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen
              (Widerspruch nach Art. 21 Abs. 1 DSGVO).</strong
            >
          </p>
          <p>
            <strong
              >Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung
              zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen
              die Verarbeitung Sie betreffender personenbezogener Daten zum
              Zwecke derartiger Werbung einzulegen; dies gilt auch f&uuml;r das
              Profiling, soweit es mit solcher Direktwerbung in Verbindung
              steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten
              anschlie&szlig;end nicht mehr zum Zwecke der Direktwerbung
              verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).</strong
            >
          </p>
          <h3>
            Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
          </h3>
          <p>
            Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
            Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
            insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
            Aufenthalts, ihres Arbeitsplatzes oder des Orts des
            mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht
            unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
            Rechtsbehelfe.
          </p>
          <h3>Recht auf Daten&uuml;bertragbarkeit</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
            oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
            sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren
            Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
            &Uuml;bertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>
          <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
            &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
            Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
            senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
            verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von &bdquo;http://&ldquo; auf
            &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
            Browserzeile.
          </p>
          <p>
            Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
            k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von
            Dritten mitgelesen werden.
          </p>
          <h3>Auskunft, Sperrung, L&ouml;schung und Berichtigung</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und
            Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
            Recht auf Berichtigung, Sperrung oder L&ouml;schung dieser Daten.
            Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
            k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen
            Adresse an uns wenden.
          </p>
          <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>
          <p>
            Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
            jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in
            folgenden F&auml;llen:
          </p>
          <ul>
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
              personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der
              Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
              der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten
              unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt
              der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
              verlangen.
            </li>
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen,
              Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung
              von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht,
              statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung
              Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
              haben, muss eine Abw&auml;gung zwischen Ihren und unseren
              Interessen vorgenommen werden. Solange noch nicht feststeht,
              wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
              Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen.
            </li>
          </ul>
          <p>
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
            eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer
            Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur
            Geltendmachung, Aus&uuml;bung oder Verteidigung von
            Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
            nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
            eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen
            Union oder eines Mitgliedstaats verarbeitet werden.
          </p>
          <h2>3. Datenerfassung auf unserer Website</h2>
          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in so genannten Server-Log-Dateien, die Ihr Browser
            automatisch an uns &uuml;bermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird
            nicht vorgenommen.
          </p>
          <p>
            Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
            der technisch fehlerfreien Darstellung und der Optimierung seiner
            Website &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst
            werden.
          </p>
          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&uuml;r
            den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung der in das Kontaktformular eingegebenen Daten
            erfolgt somit ausschlie&szlig;lich auf Grundlage Ihrer Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO). Sie k&ouml;nnen diese Einwilligung
            jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per
            E-Mail an uns. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf
            erfolgten Datenverarbeitungsvorg&auml;nge bleibt vom Widerruf
            unber&uuml;hrt.
          </p>
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
            uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur
            Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung
            entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer
            Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere
            Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
          </p>
          <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
          <p>
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
            Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen
            Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
            uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
            Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines
            Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
            vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
            &uuml;brigen F&auml;llen beruht die Verarbeitung auf Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren
            berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein
            berechtigtes Interesse an der effektiven Bearbeitung der an uns
            gerichteten Anfragen haben.
          </p>
          <p>
            Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten
            verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre
            Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die
            Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener
            Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen
            &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash;
            bleiben unber&uuml;hrt.
          </p>
          <h2>4. Soziale Medien</h2>
          <h3>Instagram Plugin</h3>
          <p>
            Auf unseren Seiten sind Funktionen des Dienstes Instagram
            eingebunden. Diese Funktionen werden angeboten durch die Instagram
            Inc., 1601 Willow Road, Menlo Park, CA 94025, USA integriert.
          </p>
          <p>
            Wenn Sie in Ihrem Instagram-Account eingeloggt sind, k&ouml;nnen Sie
            durch Anklicken des Instagram-Buttons die Inhalte unserer Seiten mit
            Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch
            unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin,
            dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der
            &uuml;bermittelten Daten sowie deren Nutzung durch Instagram
            erhalten.
          </p>
          <p>
            Die Verwendung des Instagram-Plugins erfolgt auf Grundlage von Art.
            6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse an einer m&ouml;glichst umfangreichen Sichtbarkeit in den
            Sozialen Medien.
          </p>
          <p>
            Weitere Informationen hierzu finden Sie in der
            Datenschutzerkl&auml;rung von Instagram:
            <a
              href="https://instagram.com/about/legal/privacy/"
              target="_blank"
              rel="noopener"
              >https://instagram.com/about/legal/privacy/</a
            >.
          </p>
          <h2>5. Plugins und Tools</h2>
          <h3>YouTube mit erweitertem Datenschutz</h3>
          <p>
            Unsere Website nutzt Plugins der Website YouTube. Betreiber der
            Seiten ist die Google Ireland Limited (&bdquo;Google&ldquo;), Gordon
            House, Barrow Street, Dublin 4, Irland.
          </p>
          <p>
            Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus
            bewirkt laut YouTube, dass YouTube keine Informationen &uuml;ber die
            Besucher auf dieser Website speichert, bevor diese sich das Video
            ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den
            erweiterten Datenschutzmodus hingegen nicht zwingend ausgeschlossen.
            So stellt YouTube &ndash; unabh&auml;ngig davon, ob Sie sich ein
            Video ansehen &ndash; eine Verbindung zum Google
            DoubleClick-Netzwerk her.
          </p>
          <p>
            Sobald Sie ein YouTube-Video auf unserer Website starten, wird eine
            Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem
            YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
            Wenn Sie in Ihrem YouTube-Account eingeloggt sind, erm&ouml;glichen
            Sie YouTube, Ihr Surfverhalten direkt Ihrem pers&ouml;nlichen Profil
            zuzuordnen. Dies k&ouml;nnen Sie verhindern, indem Sie sich aus
            Ihrem YouTube-Account ausloggen.
          </p>
          <p>
            Des Weiteren kann YouTube nach Starten eines Videos verschiedene
            Cookies auf Ihrem Endger&auml;t speichern. Mit Hilfe dieser Cookies
            kann YouTube Informationen &uuml;ber Besucher unserer Website
            erhalten. Diese Informationen werden u. a. verwendet, um
            Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu
            verbessern und Betrugsversuchen vorzubeugen. Die Cookies verbleiben
            auf Ihrem Endger&auml;t, bis Sie sie l&ouml;schen.
          </p>
          <p>
            Gegebenenfalls k&ouml;nnen nach dem Start eines YouTube-Videos
            weitere Datenverarbeitungsvorg&auml;nge ausgel&ouml;st werden, auf
            die wir keinen Einfluss haben.
          </p>
          <p>
            Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
            Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
            Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          </p>
          <p>
            Weitere Informationen &uuml;ber Datenschutz bei YouTube finden Sie
            in deren Datenschutzerkl&auml;rung unter:
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener"
              >https://policies.google.com/privacy?hl=de</a
            >.
          </p>
          <h3>Google Web Fonts</h3>
          <p>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
            genannte Web Fonts, die von Google bereitgestellt werden. Beim
            Aufruf einer Seite l&auml;dt Ihr Browser die ben&ouml;tigten Web
            Fonts in ihren Browsercache, um Texte und Schriftarten korrekt
            anzuzeigen.
          </p>
          <p>
            Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu
            den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis
            dar&uuml;ber, dass &uuml;ber Ihre IP-Adresse unsere Website
            aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im
            Interesse einer einheitlichen und ansprechenden Darstellung unserer
            Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von
            Art. 6 Abs. 1 lit. f DSGVO dar.
          </p>
          <p>
            Wenn Ihr Browser Web Fonts nicht unterst&uuml;tzt, wird eine
            Standardschrift von Ihrem Computer genutzt.
          </p>
          <p>
            Weitere Informationen zu Google Web Fonts finden Sie unter
            <a
              href="https://developers.google.com/fonts/faq"
              target="_blank"
              rel="noopener"
              >https://developers.google.com/fonts/faq</a
            >
            und in der Datenschutzerkl&auml;rung von Google:
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener"
              >https://policies.google.com/privacy?hl=de</a
            >.
          </p>
          <h3>Google reCAPTCHA</h3>
          <p>
            Wir nutzen &bdquo;Google reCAPTCHA&ldquo; (im Folgenden
            &bdquo;reCAPTCHA&ldquo;) auf unseren Websites. Anbieter ist die
            Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow
            Street, Dublin 4, Irland.
          </p>
          <p>
            Mit reCAPTCHA soll &uuml;berpr&uuml;ft werden, ob die Dateneingabe
            auf unseren Websites (z.&nbsp;B. in einem Kontaktformular) durch
            einen Menschen oder durch ein automatisiertes Programm erfolgt.
            Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers
            anhand verschiedener Merkmale. Diese Analyse beginnt automatisch,
            sobald der Websitebesucher die Website betritt. Zur Analyse wertet
            reCAPTCHA verschiedene Informationen aus (z.&nbsp;B. IP-Adresse,
            Verweildauer des Websitebesuchers auf der Website oder vom Nutzer
            get&auml;tigte Mausbewegungen). Die bei der Analyse erfassten Daten
            werden an Google weitergeleitet.
          </p>
          <p>
            Die reCAPTCHA-Analysen laufen vollst&auml;ndig im Hintergrund.
            Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse
            stattfindet.
          </p>
          <p>
            Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
            DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran,
            seine Webangebote vor missbr&auml;uchlicher automatisierter
            Aussp&auml;hung und vor SPAM zu sch&uuml;tzen.
          </p>
          <p>
            Weitere Informationen zu Google reCAPTCHA sowie die
            Datenschutzerkl&auml;rung von Google entnehmen Sie folgenden Links:
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener"
              >https://policies.google.com/privacy?hl=de</a
            >
            und
            <a
              href="https://www.google.com/recaptcha/intro/android.html"
              target="_blank"
              rel="noopener"
              >https://www.google.com/recaptcha/intro/android.html</a
            >.
          </p>
          <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="policy = false">
            Alles klar!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="impressum" scrollable width="800">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Impressum
        </v-card-title>

        <v-card-text>
          <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>
            Johannes Blenke<br />
            Hauschildweg, 40a<br />
            40699 Erkrath
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +4915757256903<br />
            E-Mail: blenke.productions@gmail.com
          </p>

          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <h3>Haftung f&uuml;r Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
            f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
            gespeicherte fremde Informationen zu &uuml;berwachen oder nach
            Umst&auml;nden zu forschen, die auf eine rechtswidrige
            T&auml;tigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
            dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
            m&ouml;glich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <h3>Haftung f&uuml;r Links</h3>
          <p>
            Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
            f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
            &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
            &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
            bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r
            den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="impressum = false">
            Alles klar!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<style lang="scss" scoped>
#contact {
  background-color: #383b4b;
  color: #ebe7de;
}

#footer {
  background-color: #25283a;
  font-size: 10pt;
  font-weight: 400;
  color: #ccc9c3;

  a {
    text-decoration-line: none;
    color: inherit;
    font-weight: 500;
  }

  .clickable {
    font-weight: 600;
    cursor: pointer;
  }
}

h1 {
  margin-bottom: 10px;
  font-size: 23pt;
}

p {
  font-size: 13pt;
}

h2 {
  font-weight: 400;
  font-size: 17pt;
}

i {
  vertical-align: middle;
}
</style>

<script>
export default {
  data() {
    return {
      policy: false,
      impressum: false
    }
  }
}
</script>
