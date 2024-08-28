import React from 'react';
import './Privacy.css'; // Assuming you have a CSS module for styling
import Footer3 from '../components/Footer3';

const Privacy = () => {
  return (
    <>
      <div className="privacy_privacyInfo">
        <h1>ZÁVAZEK K SOUKROMÍ</h1>
        <p>Na OnlineCloathsCas.com klademe velký důraz na vaše soukromí a bezpečnost vašich informací. Tento dokument vysvětluje náš závazek chránit vaše data a vysvětluje praktiky, které přijímáte používáním našich služeb a webových stránek.</p>

        <h2>1. SBĚR INFORMACÍ</h2>
        <p><strong>Osobní údaje:</strong> Během transakcí shromažďujeme nezbytné údaje, jako je vaše jméno, e-mailová adresa, poštovní adresa a platební informace.</p>
        <p><strong>Údaje o interakci:</strong> Sledujeme vaši aktivitu na našich webových stránkách pomocí technologií, jako jsou soubory cookie, a zaznamenáváme vaši IP adresu a typ prohlížeče.</p>

        <h2>2. POUŽÍVÁNÍ INFORMACÍ</h2>
        <p><strong>Zpracování transakcí:</strong> Vaše osobní údaje používáme k řízení a plnění objednávek a k udržování komunikace během procesu transakce.</p>
        <p><strong>Komunikace:</strong> Vaše kontaktní údaje využíváme k zasílání potvrzení objednávek a aktualizací.</p>
        <p><strong>Přizpůsobení:</strong> S vaším souhlasem přizpůsobujeme váš zážitek na webových stránkách na základě vašich předchozích interakcí a preferencí.</p>
        <p><strong>Zlepšení služeb:</strong> Analyzujeme shromážděná data, abychom neustále zlepšovali naše webové stránky a služby.</p>

        <h2>3. ZVEŘEJŇOVÁNÍ INFORMACÍ</h2>
        <p><strong>Obchodní operace:</strong> Vaše údaje mohou být sdíleny s poskytovateli služeb třetích stran na základě přísných smluv o ochraně soukromí, aby pomohli s operacemi, jako je logistika a zpracování plateb.</p>
        <p><strong>Právní povinnosti:</strong> Vaše informace můžeme zveřejnit, pokud to vyžaduje zákon k ochraně našich práv, zajištění bezpečnosti našich služeb nebo ochraně veřejné bezpečnosti.</p>

        <h2>4. BEZPEČNOSTNÍ OPATŘENÍ</h2>
        <p>Naše bezpečnostní protokoly jsou navrženy tak, aby chránily vaše osobní údaje před neoprávněným přístupem a zneužitím. Upozorňujeme však, že přenos informací online je spojen s určitými riziky.</p>

        <h2>5. VAŠE VOLBY TÝKAJÍCÍ SE SOUKROMÍ</h2>
        <p><strong>Odhlášení z marketingu:</strong> Můžete se kdykoli odhlásit z přijímání marketingových zpráv pomocí odkazů v našich komunikacích nebo kontaktováním nás přímo.</p>
        <p><strong>Soubory cookie:</strong> Spravujte své preference týkající se souborů cookie prostřednictvím nastavení vašeho webového prohlížeče.</p>

        <h2>6. BEZPEČNOST DĚTÍ</h2>
        <p>Neúmyslně neshromažďujeme údaje od osob mladších 16 let. Jakékoli neúmyslně shromážděné informace budou okamžitě odstraněny z našich systémů.</p>

        <h2>7. AKTUALIZACE ZÁSAD</h2>
        <p>Pravidelně aktualizujeme naše Zásady ochrany soukromí, abychom odráželi nové postupy. Doporučujeme pravidelnou kontrolu zásad, protože další používání našich služeb po aktualizaci znamená souhlas se změnami.</p>

        <p>Pro dotazy nebo více informací o našich postupech ochrany soukromí nás prosím kontaktujte na <a href="mailto:info@onlinecloathscas.com">info@onlinecloathscas.com</a> lub według numeru +48 22 827 73 82. Jsme odhodláni rychle reagovat na vaše obavy a chránit vaše práva na soukromí.</p>
      </div>
      <Footer3 />
    </>
  );
};

export default Privacy;
