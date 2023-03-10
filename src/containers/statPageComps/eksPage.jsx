import                      React           from "react";
import                      Block           from "../../components/nonMainPage/txt_block/TxtBlock";
import                                           '../../App.css'
import                      TxtBlock        from "../../components/nonMainPage/txt_block_real/TxtBlock";
import                      kalanch         from "../../imgs/eks/kalanch.png"
import                      art         from "../../imgs/eks/art.png"
import                      anas         from "../../imgs/eks/anas.png"
import                      borch         from "../../imgs/eks/borch.png"
import                      groz         from "../../imgs/eks/groz.png"
import                      kotokaf         from "../../imgs/eks/kotokaf.png"
import                      ostr         from "../../imgs/eks/ostr.png"
import                      pris         from "../../imgs/eks/pris.png"
import                      rem         from "../../imgs/eks/rem.png"
import                      rog         from "../../imgs/eks/rog.png"
import                      rommus         from "../../imgs/eks/rommus.png"
import                      sir         from "../../imgs/eks/sir.png"
import                      sired         from "../../imgs/eks/sired.png"
import                      sirov         from "../../imgs/eks/sirov.png"
import                      sky         from "../../imgs/eks/sky.png"
import                      sneg         from "../../imgs/eks/sneg.png"
import                      uv         from "../../imgs/eks/uv.png"
import                      val         from "../../imgs/eks/val.png"

const EksPage = (props) =>{
    return(
        <div className='Liv_Main'>
           <TxtBlock bigTxt={"Экскурсия"}
            mainTxt={"Дорогие читатели! Мы представляем вам уникальную возможность познакомиться с Костромой всего за 2 дня! Проведите свой уикенд в Костроме , насладитесь ее достопримечательностями и популярными гастрономическими центрами. Счастливых выходных в Костроме ! "}/>
            <h1 className="dop">Содержание:</h1>
            <TxtBlock bigTxt={"Как добраться?"}
            mainTxt={"Мы предлагаем вам добраться до Костромы на машине. Вы не пожалеете этому выбору , ведь несмотря на удаленность города , он окружен живописными природными памятниками , реками и гремучими, непроходимыми лесами. По пути в город вы сможете захватить некоторые другие населенные пункты , входящие в Золотое кольцо России. От Москвы до Костромы 348 км (301 км по прямой), которые возможно преодолеть за 3,5–5 часов. Поехать можно двумя путями с заездом либо во Владимир, либо в Ярославль.  Самый быстрый вариант - поезд. "}/>
             <TxtBlock bigTxt={"Где остановиться?"}
            mainTxt={"Гостевой дом «Скворечник» и гостевой дом «Яблоневый сад» подарят домашний уют. За свежим ароматом дерева и живописными окрестностями — в мини-отель «Навигатор» и эко-отель «Александров Залив». Отель «Екатерина» и арт-отель «Александровский» идеально подойдут любителям петербургской эстетики и богемных интерьеров.  За потрясающим видом на Волгу нужно ехать в бутик-отель «Островский Причал», а за яркими красками в номерах — в арт-отель «Центральный». Вы можете не переживать за расположение вашей гостиницы , ведь как говорят костромичи , Кострома- “компактная” и в ней все рядом. "}/>
                    <h1 className="dop">Что посмотреть?</h1>
                    <h1 className="dop">Сусанинская площадь - Великолепный исторический памятник культуры. Именно в этом месте вы сможете ощутить колоритность города , посмотреть на знаменитые памятники, ставшие одной из причин вхождения Костромы в Золотое кольцо России. Площадь включает в себя:</h1>
                <Block bigTxt={"Пожарная каланча"}
                    mainTxt={"Великолепный памятник архитектуры в центре Костромы – на главной площади Сусанинской. Был возведен в 1825 году. Выполнен в античном стиле. Включает в себя караульные и жилые помещения, конюшни, сараи, смотровую 35-метровую вышку. Сегодня здесь открыт музей. Помимо каланчи Сусанинскую площадь, прозванную в народе «сковородкой», украшают и другие исторические здания – дом Борщова, знаменитые Торговые ряды, Здание Присутственных мест."}
                            imgBlock={kalanch}/>
                            <Block bigTxt={"Дом Борщева"}
                    mainTxt={"Пожалуй, самое представительное здание, выходящее на Сусанинскую площадь, - это большой классический особняк, который своими размерами больше напоминает дворец. Его называют домом Борщева. Точной даты строительства особняка не сохранилось. Особняк будет интересен любителям архитектуры и искусства , ведь выглядит он величественно и достойно. Не забудьте сделать фотографии на память! Здание действительно привлекает внимание туристов. "}
                            imgBlock={borch}/>
                            <Block bigTxt={"Романовский музей"}
                    mainTxt={"Романовский музей находится в центральной, исторической части Костромы. Это яркий образец модерна в псевдорусском стиле, работы архитектора Н. И. Горлицина. Любители изобразительного искусства былых времен , не упустите возможность посетить этот музей с великой историей и неотразимыми картинами и экспанатами"}
                            imgBlock={rommus}/>
                            <Block bigTxt={"Костромской государственный драм театр имени Островского"}
                    mainTxt={"Представляем вашему вниманию источник театрального искусства Костромы!   Костромской государственный драматический театр им. А. Н. Островского основан в 1808 году.  В 1812 году в Кострому из Москвы был эвакуирован Московский императорский театр, который оказал огромное влияние на культуру города и заложил основу театральных традиций.  Сейчас в театре проходят главные премьеры спектаклей , и множество других интересных мероприятий , которые будут интересны для любой возрастной категории.  "}
                            imgBlock={ostr}/>
                            <Block bigTxt={"Богоявленский -Анастасиин женский монастырь"}
                    mainTxt={"Место , которое действительно стоит вашего внимания- Богоявленский -Анастасиин женский монастырь. Монастырь основан происходившим из Подмосковья учеником и родственником преподобного Сергия Радонежского — преподобным Никитой, бывшим настоятелем Высоцкого монастыря в Серпухове, а затем Высоко-Покровского монастыря в Боровске.  Достопримечательность с очень красивой архитектурой и великой историей. Любителям духовно обогатиться нужно непременно посетить это место.  "}
                            imgBlock={anas}/>
                            <h1 className="dop">Что касается развлечений , их мы не обойдем стороной! Отлично отдохнуть в ваш уикенд вы можете в следующих местах:</h1>
                            <Block bigTxt={"Резиденция Снегурочки"}
                    mainTxt={"В самом центре города расположена Резиденция Снегурочки и Академия Снежных Чудес. А это: Интерактивная Комната Чудес; Авторские познавательные, развлекательные программы; Почтовое отделение, где можно отправить письмо, запустив его по волшебному конвейеру в сказочный почтовый ящик, заказать письмо; Лаборатория волшебства, где каждый может сотворить чудо своими руками; Лавка подарков."}
                            imgBlock={sneg}/>
                            <Block bigTxt={"Котокафе Мао"}
                    mainTxt={"Мы хотим сделать этот мир немного лучше, поэтому в самом сердце Костромы появилось Котокафе «Мао». Мы создали дом для котов, мечтающих обрести семью. У нас есть для Вас: настольные игры и игровая приставка Play station 4 для развлечения, разнообразные книги и wi-fi для обучения, чай/кофе и печеньки для желудка и самое главное – тёплые и мурчащие коты для души."}
                            imgBlock={kotokaf}/>
                            <Block bigTxt={"Sky Park"}
                    mainTxt={"Крупный развлекательный центр в городе Кострома , который не заставит вас скучать! В нем собраны самые новые развлекательные комнаты, квест-комнаты , аттракционы для детей и их родителей! Здесь вы можете отдохнуть сполна. "}
                            imgBlock={sky}/>
                            <Block bigTxt={"Арт-площадка «СТАНЦИЯ»"}
                    mainTxt={"«СТАНЦИЯ» создана на территории бывших Льняных мануфактур в исторической части города с целью развития современного актуального искусства на российском и международном уровне и организации резиденций для артистов.  Акцент сделан на современном танце и театре. Также здесь регулярно проходят показы авторского кино и анимации, фотовыставки и музыкальные концерты. «СТАНЦИЯ» дружит со многими значимыми культурными объектами (с «Гоголь-центром» и «Театром Наций», например) и всегда предлагает что-то интересное жителям и гостям Костромы.  Здесь ежедневно проводятся культурно-развлекательные программы как для туристов, так и для местных жителей.   "}
                            imgBlock={art}/>
                            <Block bigTxt={"Музей сыра "}
                    mainTxt={"Костромской сыр славиться на всю Россию. Если вы хотите ознакомиться с его историей и конечно же продегустировать его , мы предлагаем вам посетить знаменитый “Музей сыра”.Узнать о сырных байках и традициях разных народов, сырных рекордах и самых необычных сортах, повеселиться на интерактивной экскурсии и, самое главное, попробовать настоящие костромские сыры - всё это можно осуществить в новом необычном и уникальном в своем роде Музее сыра в Костроме!"}
                            imgBlock={sir}/>
                           <h1 className="dop">Где перекусить?</h1>
                           <h1 className="dop">Для любителей гастрономического туризма мы предлагаем лучшие места в Костроме:</h1>
                           <Block bigTxt={"Стильный ресторан «Гроза»  "}
                    mainTxt={"В 2020 году получил одну из самых престижных наград в сфере horeca, а именно серебряную «Пальмовую ветвь ресторанного бизнеса». Ресторан с красивейшим интерьером и едой высокого качества. Авторская подача блюд и незабываемый вкус заставит вас вернуться!"}
                            imgBlock={groz}/>
                            <Block bigTxt={"Ресторан “Сыровар” "}
                    mainTxt={"Первый сырный ресторан в Костроме - сырной столице России! Ресторанное меню побалует вас блюдом с использованием костромского сыра разных сортов в сочетании с оливковым маслом, соусом песто, воздушной чиабаттой, а также сладкими томатами и авокадо. "}
                            imgBlock={sirov}/>
                            <Block bigTxt={"Кафе “Рога и копыта”"}
                    mainTxt={"Это потрясающее заведение славится не только десертами, которые приготовлены лично кондитерами кофейни из натуральных ингредиентов (без искусственных пищевых добавок и красителей). Что вы скажете про интерьер? Будто попадаешь в эпоху Великого Комбинатора всех времен и народов Остапа Бендера. Мы благодарны И.Ильфу и Е.Петрову за чудесное произведение «12 стульев», ставшее любимым миллионам почитателей талантов этих замечательных выдумщиков."}
                            imgBlock={rog}/>
                            <Block bigTxt={"Ресторан “Старая пристань”"}
                    mainTxt={"Именно здесь снимали «Жестокий романс» по «Бесприданнице» с Ларисой Гузеевой в главной роли. Заведение с интересной историей , где вы можете отведать вкуснейшие блюда и насладиться обстановкой и незабываемым видом ! Не забудьте сделать фото на память!"}
                            imgBlock={pris}/>
                            <h1 className="dop">Что привезти?</h1>
                           <h1 className="dop">По традиции из каждого уикенда мы привозим сувениры родным и близким . Что же привезти из Костромы?</h1>
                           <Block bigTxt={"Сыр"}
                    mainTxt={"Кострома — сырная столица всея Руси и не прихватить с собой парочку локальных сортов сыра просто непозволительно. Среди туристов , посетивших Кострому особо хвалится моцарелла от костромских сыроваров. "}
                            imgBlock={sired}/>
                            <Block bigTxt={"Сувениры от ремесленников"}
                    mainTxt={"Плетёные лапти из бересты, деревянные и глиняные игрушки, куклы-обереги, корзины, шкатулки и всевозможные вариации ручного труда ремесленников достойны уехать с костромских прилавков, чтобы потом украшать твой дом или стать подарком близким. Ах да, и сувениры от Снегурочки не забудьте! Кострома славиться своим древним ремеслом и изготовлением изделий из льна и бресты."}
                            imgBlock={rem}/>
                             <Block bigTxt={"Валенки"}
                    mainTxt={"Если закупаться валенками, то делать это либо в суровой Сибири, либо в Костроме, потому что валенки из Кинешмы (Костромская область) славятся не только качеством, но и искусным исполнением."}
                            imgBlock={val}/>
                            <Block bigTxt={"Ювелирные изделия"}
                    mainTxt={"Помимо «сырной», Кострома объявлена ещё и ювелирной столицей: два раза в год город становится столицей международного ювелирного фестиваля «Золотое кольцо России», в котором принимают участие ювелирные бренды с мировыми именами. Можно попробовать удержаться и не купить что-нибудь изящное из знаменитой «красносельской скани» — старинная техника, которую чуть более века назад возродили мастера из посёлка Красное-на-Волге Костромской области."}
                            imgBlock={uv}/>
                            <h1 className="dop">Ваш уикенд подошел к концу? Не стоит огорчаться! Кострома очень гостеприимна и ждет вас в гости в любое время года! До новых встреч!</h1>
        </div>
        
    )
}
export default EksPage;