import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// TODO: User must update these placeholders with actual legal information:
// - [OWNER NAME] → Full legal name of business owner (already known: Mohamed Zouinkhi)
// - [STREET ADDRESS] → Hudekamp 15
// - [POSTAL CODE] → 23558
// - [VAT ID NUMBER] → DE457498033 (from footer)
// - [HRB NUMBER] → Only if registered in Handelsregister (optional for sole traders)

const Impressum: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Page Header */}
                <h1 className="text-4xl font-bold mb-8 text-gray-900">
                    {language === 'ar' ? 'الإشعار القانوني' : language === 'fr' ? 'Mentions légales' : 'Impressum'}
                </h1>

                <div className="bg-white rounded-2xl shadow-md p-8 space-y-8 text-gray-700">

                    {/* Section 1: Company Information - REQUIRED by §5 DDG */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 pb-2 border-b border-gray-200">
                            Angaben gemäß § 5 DDG
                        </h2>
                        <div className="space-y-1">
                            <p><strong>Firmenname:</strong> IV Export Service / DI-Auto</p>
                            <p><strong>Inhaber:</strong> Mohamed Zouinkhi</p>
                            <p>
                                <strong>Anschrift:</strong> Hudekamp 15<br />
                                <span className="ml-[4.5rem]">23558 Lübeck</span><br />
                                <span className="ml-[4.5rem]">Deutschland</span>
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Contact */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 pb-2 border-b border-gray-200">
                            Kontakt
                        </h2>
                        <div className="space-y-1">
                            <p><strong>Telefon:</strong> +49 176 69495526</p>
                            <p>
                                <strong>E-Mail:</strong>{' '}
                                <a href="mailto:info@ivexportservice.com" className="text-blue-600 hover:underline">
                                    info@ivexportservice.com
                                </a>
                            </p>
                            <p>
                                <strong>Website:</strong>{' '}
                                <a href="https://ivexportservice.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    https://ivexportservice.com
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Section 3: VAT ID */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 pb-2 border-b border-gray-200">
                            Umsatzsteuer-ID
                        </h2>
                        <div className="space-y-1">
                            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
                            {/* TODO: Add your VAT ID here */}
                            <p className="mt-2"><strong>[Bitte USt-IdNr. eintragen]</strong></p>
                        </div>
                    </section>

                    {/* Section 4: Responsible for Content */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 pb-2 border-b border-gray-200">
                            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                        </h2>
                        <div className="space-y-1">
                            <p>Mohamed Zouinkhi</p>
                            <p>Hudekamp 15</p>
                            <p>23558 Lübeck, Deutschland</p>
                        </div>
                    </section>

                    {/* Section 5: EU Dispute Resolution */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 pb-2 border-b border-gray-200">
                            EU-Streitschlichtung
                        </h2>
                        <div className="space-y-3">
                            <p>
                                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            </p>
                            <p>
                                <a
                                    href="https://ec.europa.eu/consumers/odr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    https://ec.europa.eu/consumers/odr
                                </a>
                            </p>
                            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                        </div>
                    </section>

                    {/* Section 6: Consumer Dispute */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 pb-2 border-b border-gray-200">
                            Verbraucherstreitbeilegung / Universalschlichtungsstelle
                        </h2>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>

                    {/* Section 7: Liability for Content */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 pb-2 border-b border-gray-200">
                            Haftung für Inhalte
                        </h2>
                        <div className="space-y-3">
                            <p>
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach
                                den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
                                jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                            </p>
                            <p>
                                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
                                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                            </p>
                        </div>
                    </section>

                    {/* Section 8: Liability for Links */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 pb-2 border-b border-gray-200">
                            Haftung für Links
                        </h2>
                        <div className="space-y-3">
                            <p>
                                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                                haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                                der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                            </p>
                            <p>
                                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                            </p>
                        </div>
                    </section>

                    {/* Section 9: Copyright */}
                    <section>
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 pb-2 border-b border-gray-200">
                            Urheberrecht
                        </h2>
                        <div className="space-y-3">
                            <p>
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                                Autors bzw. Erstellers.
                            </p>
                            <p>
                                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                                gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                                Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
                                umgehend entfernen.
                            </p>
                        </div>
                    </section>

                </div>

                {/* Back to Home */}
                <div className="mt-8 text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors"
                    >
                        ← {language === 'ar' ? 'العودة إلى الصفحة الرئيسية' : language === 'fr' ? 'Retour à l\'accueil' : 'Zurück zur Startseite'}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
