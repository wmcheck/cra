import React from 'react';

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1 itemprop="name">
            <span itemprop="givenName">Алексей</span>{' '}
            <span itemprop="familyName">Илясов</span>
          </h1>
          <p className="lead" itemprop="description">
            Front-end и Back-end разработчик, архитектор решений.
            Изучаю и практикую JavaScript, TypeScript, NodeJs и веб технологии. 
          </p>
          <p>
          Хочу создавать алгоритмы для решения реальных задач, облегчающих работу, делать что-то полезное для людей. Люблю автоматизировать чужую работу. 
          Хочу участия в интересных проектах, в коллективе единомышленников.
          </p>
        </header>
        <section className="sidebar">

          <div>
            <img src="https://avatars.githubusercontent.com/u/2428660?v=4" width="236" height="236" className="avatar avatar-user border color-bg-default" />            
          </div>

          <div className="personal-info">
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
                  itemtype="http://schema.org/Place"
                >
                  <span
                    itemprop="address"
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
          <div className="contacts">
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
          <div className="skills">
            <h2>Навыки</h2>
            <div className="compact">
              <p>
                Языки программирования: {' '}
                <span itemprop="knowsAbout">JavaScript</span>,{' '}
                {/* <span itemprop="knowsAbout">TypeScript</span>,{' '} */}
                <span itemprop="knowsAbout">Delphi</span>,{' '}
                <span itemprop="knowsAbout">PHP</span>,{' '}
                <span itemprop="knowsAbout">SQL</span>
              </p>
              <p>
                Опыт использования: {' '}
                <span itemprop="knowsAbout">Node.js</span>,{' '} 
                <span itemprop="knowsAbout">Zustand</span>,{' '} 
                <span itemprop="knowsAbout">React.js</span>,{' '} 
                <span itemprop="knowsAbout">Vue.js</span>,{' '}
                <span itemprop="knowsAbout">CSS</span>,{' '} 
                <span itemprop="knowsAbout">БЭМ</span>,{' '}                
                <span itemprop="knowsAbout">Babel</span>,{' '}
                <span itemprop="knowsAbout">webpack</span> plugins
                
                <span itemprop="knowsAbout">Jest</span>,{' '}
                <span itemprop="knowsAbout">Redux</span>,{' '} 
                <span itemprop="knowsAbout">Mobx</span>,{' '} 
                <span itemprop="knowsAbout">Rabbit MQ</span>,{' '}                 
                <span itemprop="knowsAbout">HTML, XML, JSON, SQL</span>,{' '}                 

                <span itemprop="knowsAbout">инструменты командной строки *NIX</span>,{' '}
                <span itemprop="knowsAbout">Git</span>,{' '}
                <span itemprop="knowsAbout">Docker</span>,{' '}
                <span itemprop="knowsAbout">конфигурирование Apache, Nginx</span>
              </p>



            </div>
          </div>

          <div className="contacts">
            <h2>О себе</h2>
            <div className="compact">
            <p>Не конфликтный, готовый брать ответственность</p>
            <p>Навыки совместной работы</p>
            </div>
          </div>

          <div className="contacts">
            <h2>Образование</h2>
            <dl>
              <dt>БГПИ </dt>
              <dd>(Балашовский Государственный Педагогический Институт)</dd>
              <dd>1992 - 1997</dd>
              <dd>Физико-математический факультет</dd>
            </dl>
          </div>
        </section>
        <div className="content content_experience">
          <h2>Опыт</h2>
          <section>
            <h3>Министерство Энергетики РФ</h3>
            <p>
              Главный специалист по информационным системам (ООО КБ Реалтех), 2006 - 2023.
            </p>

            <p>
              Разработка, внедрение и сопровождение <b>Ведомственной Информационной Системы</b> (ВИС) для
              ЦА Министерства Энергетики РФ (активных пользователей более 600 человек, более 40 млн. документов, 
              более 30 программных комплексов)
              {/* Состав системы: Кадры, Делопроизводство, Телефонный справочник,
              Обращения граждан, Администрирование системы, Контракты и
              договора, Проекты документов, Контроль поручений,
              Телекоммуникационный обмен, Госуслуги и межведомственные запросы
              СМЭВ  т.д.  */}
            </p>
            {/* <p>
              Постоянно учусь и обучаю коллег использовать передовые технологии, библиотеки и инструменты в повседневной работе. 
              Разрабатываю и внедряю новые компоненты системы, создаю и продумываю структуры, оптимизирую хранение данных. 
            </p> */}

            <p>  
              Разработал базовую архитектуру веб версии к системе ВИС:
              <ul>
                <li>Back-end API на <b>Node.js</b></li>
                <li>Front-end на <b>React.js</b> + <b>Zustand</b></li>
                <li>интегрировал приложениес сервером документов <b>Р7 офис</b> просмотр документов и <b>онлайн редакторы</b>: Документы, Таблицы, Презентации.</li>
                <li>реализовал подписание ЭЦП в браузере и с приложении на платформе Android</li> 
                <li>интеграция в приложение на платформе Android</li>                
              </ul>
            </p>            

            <p>
                Корпоративный <b>ЧАТ</b> с ботом автоматизации на платформе <b>Node.js</b> c использованием JavaScript фреймворка <b>Vue.js</b> и фреймворка <b>F7</b>. 
            </p>

            <p>
              Разработал и внедрил <b>микросервисы</b> на базе фреймворка <b>Moleculer</b> на платформе <b>Node.js</b>:
              <ul>
                <li>файловое хранилище документов</li>
                <li>наложением штампов "Регистрации", "ЭЦП" и создания файлов PDF-превью</li>
                <li>объединение и конвертация документов: doc, docx, pdf, tif, tiff</li>
              </ul>
            </p> 

            <p>
              Другие разработки:
              <ul>
                {/* <li>телекоммуникационный обмен с внешними системами</li> */}
                <li>от ТЗ до интеграции <b>21 гос.услуга</b> в среде СМЭВ-2 и последующий перевод на СМЭВ-3</li>
                <li>взаимодействие с <b>МЭДО</b> (Межведомственный Электронный ДокументоОборот)</li>
                <li>обмен данных с <b>1С</b> по учету платежей по контрактам и договорам</li>
                <li>
                  участствовал в разработке и внедрению модуля для работы с <b>ЭЦП</b>, в
                  кооперации с компанией Лисси Крипто
                </li>
                <li>
                  <b>REST API</b> на <b>PHP</b> сервис для мобильного клиента на
                  iOS
                </li>
                <li>
                  курировал разработку мобильного <b>приложения IOS</b> для руководителей Минэнерго (2 разработчика)
                </li>
                <li>
                  взаимодействие c сайтом Минэнерго для обеспечения приема обращений граждан
                </li>
                <li>подключении к <b>ПОС</b> (Платформа Обратной Связи)</li>
                <li>релизация сервиса отчетов, генерацияотчетности с автоматизацией MS Office</li>
                <li>создал сервис очередей и управления <b>процессами Workflow</b> по проектам документов</li>
              </ul>

            </p>
          </section>
          <section>
            <h3>AstraZeneka</h3>
            <p>Full stack Developer, 2011 - 2013. Индивидуальная разработка.</p>
            <p>
              Разработка и внедрение и сопровождение комплекса "Анализ оптовых,
              розничных и бюджетных цен на лекарственные препараты", импорт данных от организаций поставщиков и аптечных сетей.
            </p>
          </section>
          <section>
            <h3>РОСТЕХНАДЗОР</h3>
            <p>Главный специалист (АНО ИАЦ ПБ), 2002 - 2006.</p>
            <p>
              Участие в разработке и внедрении системы АИСПБ. Основной стек
              разработки Delphi и MS SQL, дополнительно PHP.
            </p>
            <p>
              <ul>
                <li>
                  Разработал программный комплекс{' '}
                  <b>"ГОСУДАРСТВЕННЫЙ РЕЕСТР ОПО"</b> (Реестр Опасных
                  Производственных объектов) более 400 тыс. объектов, 100 тыс.
                  поднадзорных организаций и более 3 млн. технических устройств.
                </li>
                <li>
                  Внедрил <b>закрытый раздел</b> реестра ОПО в
                  ведомствах:{' '}
                  <b>ФСО, ФСБ, СВР, Минобороны, ФСИН, МВД, Спецстрой, ОАО "РЖД"</b>
                  с возможностью ежеквартальной импорта открытых данных в ЦА Ростехнадзора.
                </li>
                <li>
                  Разработал программный комплекс{' '}
                  <b>"Выдача РАЗРЕШЕНИЙ на деятельность в сфере Промышленной Безопасности"</b>
                </li>
                <li>
                  Провел обучения 300 сотрудников, учавствовал в организации коллегий и семинаров.
                </li>
                <li>
                  Дистанционное развертываение системы АИСПБ (
                  <b>86</b> управлений) и настройка информационного обмена с ЦА.
                </li>
              </ul>
            </p>
          </section>

          <section>
            <h3>ИП "Косарев".</h3>
            <p>
              Full stack Web Developer, 2005 - 2020. Индивидуальная разработка.
            </p>
            <p>
              Создал и запустил <b>сайт</b> по прокату лимузинов и ретро автомобилей в
              Москве и МО, автоматизировал онлайн заказы, SEO продвижение и
              реклама в Яндекс Директ. Вывел сайт в поисковой выдаче на первые
              позиции в поисковой выдаче Yandex и Google.
            </p>
          </section>

          <section>
            <h3>ООО "Балашовский Текстиль"</h3>
            <p>Инженер программист, 1997 - 2002</p>
            <p>
              Первая работа, после окончания института, градообразующее
              предприятие с численностью 6 тыс человек. В короткие сроки изучил
              стек разработки принятый в организации <b>FoxPro, DBase и MS SQL</b>,
              первое знакомство с Web технологиями.
            </p>
            <p>
              <ul>
                <li>Разработал комплекс <b>"МАГАЗИН"</b> для автоматизации учета продаж собственной продукции предприятия</li>
                <li>Разработал комплекс аналитики и отчетности <b>"РЕАЛИЗАЦИЯ"</b></li>
                <li>
                  Создание <b>внутреннего сайта</b> организации (HTML, CSS, JScript,
                  Perl, CGI)
                </li>
                <li>
                  Участвовал во внедрение автоматизированного учета, обработки и передачи показателей 
                  потребления электроэнергии системы <b>АСКУЭ</b> (MS SQL)
                </li>
                <li>
                  Принимал участие при настройке и запуске автоматизированной вышивальной машины
                  TAJIMA
                </li>
              </ul>
            </p>
          </section>
        </div>
      </div>

      <div className="container">
        <div className="content content_awards">
          <section>
            <h2>Награды и сертификаты</h2>
            <h4>Web Technology</h4>
            <p>Text</p>
          </section>

          <img src="001.png" width="200px"/> 
          <img src="002.png" width="200px"/> 
        </div>
        <div className="sidebar footer">&nbsp;</div>
      </div>
    </>
  );
}
export default App;
