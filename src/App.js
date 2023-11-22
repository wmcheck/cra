import React from 'react';

function App() {
  return (
    <>
      <div class="container">
        <header>
          <h1 itemprop="name">
            <span itemprop="givenName">Алексей</span>{' '}
            <span itemprop="familyName">Илясов</span>
          </h1>
          <p class="lead" itemprop="description">
            Front-end и Back-end разработчик, архитектор решений.
          </p>
        </header>
        <section class="sidebar">
          <div class="personal-info">
            <h2>Личная информация</h2>
            <dl>
              <dt>Дата рождения</dt>
              <dd>
                <time itemprop="birthDate" datetime="1975-08-16">
                  16 Августа 1975
                </time>
              </dd>
              <dt>Место жительства</dt>
              <dd>
                <span
                  itemprop="homeLocation"
                  itemscope
                  itemtype="http://schema.org/Place"
                >
                  <span
                    itemprop="address"
                    itemscope
                    itemtype="http://schema.org/PostalAddress"
                  >
                    <span itemprop="addressLocality">
                      Балашиха мкр.Железнодорожный
                    </span>
                  </span>
                </span>
              </dd>
            </dl>
          </div>
          <div class="contacts">
            <h2>Контакты</h2>
            <dl>
              <dt>Email</dt>
              <dd>
                <a href="mailto:ilasov.alexey@gmail.com">
                  <span itemprop="email">ilasov.alexey@gmail.com</span>
                </a>
              </dd>
              <dt>Github</dt>
              <dd>
                <a itemprop="sameAs" href="https://github.com/wmcheck/">
                  wmcheck
                </a>
              </dd>
              <dt>Телеграмм</dt>
              <dd>
                <a itemprop="sameAs" href="https://t.me/wmcheck">
                  @wmcheck
                </a>
              </dd>
            </dl>
          </div>
          <div class="skills">
            <h2>Навыки</h2>
            <div class="compact">
              <p>
                Языки программирования:{' '}
                <span itemprop="knowsAbout">JavaScript</span>,
                <span itemprop="knowsAbout">TypeScript</span>,{' '}
                <span itemprop="knowsAbout">Delphi</span>,
                <span itemprop="knowsAbout">PHP</span>
              </p>
              <p>
                Proficient in the creation of custom{' '}
                <span itemprop="knowsAbout">Babel</span>,
                <span itemprop="knowsAbout">PostCSS</span>, and{' '}
                <span itemprop="knowsAbout">webpack</span> plugins
              </p>
              <p>
                Experienced in{' '}
                <span itemprop="knowsAbout">*NIX command line tools</span>,
                <span itemprop="knowsAbout">Docker</span>,{' '}
                <span itemprop="knowsAbout">AWS</span>
              </p>
              <p>Analytical mind</p>
              <p>Problem-solving skills</p>
              <p>Good communication and collaborative work skills</p>
              <p>Well organized</p>
              <p>Hard-working</p>
              <p>Flexible, willing to take on more responsibilities</p>
            </div>
          </div>

          <div class="contacts">
            <h2>Образование</h2>
            <dl>
              <dt>БГПИ Балашовский Государственный Педагогический Институт</dt>
              <dd>1992 - 1997</dd>
              <dd>Физико-математический факультет</dd>
            </dl>
          </div>
        </section>
        <div class="content content_experience">
          {/* <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown} /> */}
          <h2>Опыт</h2>
          <section>
            <h3>Министерство Энергетики РФ</h3>
            <p>
              Главный специалист по информационным системам (КБ Реалтех), май
              2006 - 2023
            </p>

            <p>
              Я научил своих коллег использовать передовые технологии,
              библиотеки и инструменты в нашей повседневной работе. Мы внедрили
              и продолжаем использовать лучшие практики в отрасли, такие как
              коллегиальная проверка кода, стиль и листинг кода, а также
              автоматизированные процессы сборки и развертывания. Все эти шаги
              помогают командам сосредоточиться на задачах и создавать
              высококачественный код. Разработка, доработка, внедрение и
              сопровождени <b>Ведомственной Информационной Системы</b> (ВИС) для
              ЦА Министерства Энергетики РФ (пользователей более 600 человек).
              Состав системы: Кадры, Делопроизводство, Телефонный справочник,
              Обращения граждан, Администрирование системы, Контракты и
              договора, Проекты документов, Контроль поручений,
              Телекоммуникационный обмен, Госуслуги и межведомственные запросы
              СМЭВ ...
            </p>
            <p>
              Разработал и внедрил:
              <ul>
                <li>Телекоммуникационный обмен системы</li>
                <li>21 услуга для портала gosuslugi.ru в среде СМЭВ-2</li>
                <li> 19 услуг для портала gosuslugi.ru в среде СМЭВ-3</li>
                <li>модуль для работы с порталом Госуслуг</li>
                <li>модуль МЭДО (форматы от 2.0 до 2.7.1)</li>
                <li>модуль интеграции с 1С</li>
                <li>
                  принимал участие в разработке модуля для работы с <b>ЭЦП</b> в
                  кооперации с компанией Лисси Крипто
                </li>
                <li>
                  разработал REST API сервис для работы мобильного клиента на
                  iOS
                </li>
                <li>
                  курировал и организовывал разработку и внедрении приложения на
                  **iPad** для руководителей Минэнерго (2 разработчика IOS)
                </li>
                <li>
                  курировал интеграцию c сайтом Минэнерго для приема обращений
                  граждан
                </li>
                <li>внутрикорпоративный **Чат и Бот</li>
                <li>подключении к ПОС (Платформа Обратной Связи)</li>
                <li>сервер отчетов с автоматизацией MS Office</li>
                <li>сервис файлового хранилища документов</li>
                <li>
                  модуль **объединения документов** форматов doc, docx, pdf, tif
                </li>
                <li>модуль очередей и управления проектами документов</li>
                <li>
                  модуль наложением штампов Регистрации и штампиков ЭЦП для
                  создания файла PDF превью
                </li>
                <li>
                  веб приложения** ВИС с поддержкой подписания ЭЦП (фронтэнд,
                  бэеэнд)
                </li>
                <li>
                  интеграция веб приложения с сервером документов **"Р7 офис"**
                </li>
                <li>интеграция веб приложения с приложением на Android</li>
              </ul>
            </p>
          </section>
          <section>
            <h3>AstraZeneka</h3>
            <p>Full stack Developer, 2011 - 2013 Индивидуальная разработка.</p>
            <p>
              Разработка и внедрение и сопровождение комплекса "Анализ оптовых,
              розничных и бюджетных цен на лекарственные препараты" для отдела
              аналитики.
            </p>
          </section>
          <section>
            <h3>РОСТЕХНАДЗОР</h3>
            <p>Главный специалист (АНО ИАЦ ПБ), 2002 - 2009</p>
            <p>
              Участие в разработке и внедрении системы АИСПБ. Основной стек
              разработки Delphi и MS SQL, дополнительно PHP.
            </p>
            <p>
              <ul>
                <li>
                  Разработал программный комплекс{' '}
                  <b>"ГОСУДАРСТВЕННЫЙ РЕЕСТР ОПО"</b> (Реестр Опасных
                  Производственных объектов) более 400 тыс. объектов,100 тыс.
                  поднадзорных организаций и более 3 млн. технических устройств.
                </li>
                <li>
                  Разработал и внедрил <b>закрытый раздел</b> реестра ОПО в
                  ведомства:
                  <b>ФСО, ФСБ, СВР, Минобороны, ФСИН, МВД, ЦА ОАО "РЖД"</b>
                </li>
                <li>
                  Разработал программный комплекс{' '}
                  <b>"Выдача РАЗРЕШЕНИЙ на деятельность в сфере ПБ"</b>
                </li>
                <li>
                  Проводил обучения 300 сотрудников, с дальнейшим
                  консультированием по телефону.
                </li>
                <li>
                  Дистанционное развертываение комплексов с системой АИСПБ (
                  <b>86</b> управлений).
                </li>
              </ul>
            </p>
          </section>

          <section>
            <h3>ИП "Косарев".</h3>
            <p>
              Full stack Web Developer, 2005 - 2020 Индивидуальная разработка.
            </p>
            <p>
              Создал и запустил сайт по прокату лимузинов и ретро автомобилей в
              Москве и МО, автоматизировал онлайн заказы, SEO продвижение и
              реклама в Яндекс Директ. Вывел сайт в поисковой выдаче на первые
              позиции в поисковой выдаче Yandex и Google.
            </p>
          </section>

          <section>
            <h3>ООО "Нефтяная компания"</h3>
            <p>
              Full stack Web Developer, 2009 - 2010 Индивидуальная разработка.
            </p>
            <p>Автоматизировал учет нефтепродуктов нефтебазы в г.Луховицы.</p>
          </section>

          <section>
            <h3>ООО "Балашовский Текстиль"</h3>
            <p>Инженер программист, 1997 - 2002</p>
            <p>
              Первая работа, после окончания института, градообразующее
              предприятие с численностью 6 тыс человек. В короткие сроки изучил
              стек разработки принятый в организации FoxPro, БД DBase и MS SQL,
              первое знакомство с Web технологиями.
            </p>
            <p>
              <ul>
                <li>Разработал комплекс "МАГАЗИН"</li>
                <li>Разработал комплекс аналитики "РЕАЛИЗАЦИЯ"</li>
                <li>
                  Создание внутреннего сайта организации (HTML, CSS, JScript,
                  Perl, CGI)
                </li>
                <li>
                  Внедрение автоматизированного учета, обработки и хранение
                  потребления электроэнергии системы АСКУЭ (MS SQL)
                </li>
                <li>
                  Учавствовал в запуске автоматизированной вышивальной машины
                  TAJIMA
                </li>
              </ul>
            </p>
          </section>
        </div>
      </div>

      <div class="container">
        <div class="content content_awards">
          <section>
            <h2>Награды и сертификаты</h2>
            <h4>Web Technology</h4>
            <p>Text</p>
          </section>
        </div>
        <div class="sidebar footer">&nbsp;</div>
      </div>
    </>
  );
}
export default App;
