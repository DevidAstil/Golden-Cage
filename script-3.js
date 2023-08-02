const animItems=document.querySelectorAll('.anim_items');
if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('animation');
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll();
}


$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger,.header_top-menu').toggleClass('active-menu');
        $('body').toggleClass('lock');
    })
});

$(document).ready(function(){
    $('.header_lang-ru').click(function(event){
        $('.translate').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.header_lang-en').click(function(event){
        $('.translate').toggleClass('active');
        $('body').toggleClass('lock');
    })
});
$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index,item){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});


var arrLang={
    'en':{
        'Promo':'Promo',
        'More':'More about the project',
        'Packs':'Packs',
        'FAQ':'FAQ',
        'Roadmap':'Roadmap',
        'Staking':'Staking',
        'Guide-link':'Guide',
        'awe':'THE AWESOME',
        'fight':'FIGHTING GAME',
        'release':'THE RELEASE OF THE GAME IS LEFT',
        'day':'days',
        'hour':'hours',
        'minut':'minuts',
        'second':'seconds',
        'awesome_title':'The awesome fighting game on WAX you ve been waiting for!',
        'awesome-text1':'More than 20 unique fighters',
        'awesome-text2':'Songs created especially for the game',
        'awesome-text3':'Weekly tournaments with valuable prizes',
        'awesome-text4':'6 game modes',
        'check':'Check this!',
        'details':'MORE DETAILS',
        'character':'Characters',
        'music':'Music',
        'modes':'Game modes',
        'tournament':'Tournaments',
        'slider-title':'In every fighting game, there are always a lot of characters. We’ll start with just six, though:',
        'slider-text':'We’ll be adding one new character every month. You’ll get to know our “opening six” pretty well during that time. Story Cards will help you to do it.',
        'track-strong':'Every fighter should have a favorite song that will keep him going. Until we reach the number 31 of tracks.',
        'track-text':'We appreciate good tracks, but we also respect artists who have not yet reached the heights they deserve. Every month we will find a new and talented artist to add to our soundtrack and so on until we reach the number 31 track. We hope that in this way we will also help the artists add some new fans to their music.The music will be available from the start of the game. Not much longer to wait ?',
        'modes-text':'A whopping 6 game modes! You have to admit, it’s pretty decent. <br><br>In addition to the usual PVP, PVE modes, 4 modes will be available in the game, about which we will describe in a little more detail: <br><br>⁃ Game against a friend. This mode allows you to fight with a friend and see, whose fighter is cooler! There will be no limit on the number of fights per day. Important point – no project token or reputation points will be earned, but NFT cards may be dropped! <br> ⁃ Playing with a friend. Same PVP and PVE only in doubles. Project tokens, reputation points, and NFT cards are earned as usual. Later, an advanced mode will be added – our analog of “clan mode”.<br>⁃ Fight Club Owner. A mode for those who do not want to spend a lot of time playing, but are only interested in getting project tokens, reputation points, and getting NFT cards. Just a few clicks a day.<br> ⁃ Story mode. We even came up with a storyline! Completing quest after quest will allow you to get unique NFT cards, and the first 500 players to pass will earn our token! This mode removes the limit on the number of battles per day.',
        'modes-strong':'And to keep you entertained, a new storyline awaits you every season!',
        'tour-text':'In our opinion, this could almost become the basis of the game. After all, everyone wants to win, right?Once a week there is a tournament with a prize pool of $70 (in WAX) and exclusive cards that can only be won in the tournament! 2nd and 3rd place will also get prizes in the form of ? project cards.Anyone can participate!Then there is the main tournament, which will be held once a month with a prize pool of $250 (in WAX) and exclusive cards which can only be won in the tournament! 2nd and 3rd place will also get prizes in the form of project cards ?Only those with at least one win in the last 4 weekly tournaments will be able to participate!For the more competitive players, there will be smaller tournaments every 2 or 3 days. 300 participants will compete for the top prize of 2,000 WAX! And of course our exclusive tournament cards! The entry fee for the tournament is only 10 WAX.',
        'our':'OUR CARDS',
        'craft':'CRAFT',
        'starts':'THE GAME STARTS HERE',
        'starts-text':'By getting a pack, you’ll receive all the things necessary to start the game',
        'sale':'NEXT SALE',
        'more':'More',
        'road':'ROADMAP',
        'faq':'FAQ',
        'know-more':'Know more',
        'monthly':'MONTHLY REPORT',
        'report-text':'We are currently planning to launch the second stage of the project that includes several updates below:',
        'report-card1':'Introducing Mobile app (iOS/Android)',
        'report-card2':'Adding notifications for farmers',
        'report-card3':'Adding new game scripts & NFTs',
        'report-card4':'Adding more gaming guides for beginners',
        'report-bottom-title':'We also initiate promotional campaigns to attract more players to our game:',
        'report-bottom-text1':'We are negotiating with AtomicHub and DappRadar about placing our Banner on their website.',
        'report-bottom-text2':'We have made contact with KOLs to upload more game-experiencing videos on Youtube',
        'report-bottom-text3':'We have launched several campaigns on the Facebook platform and will continue to do so on other media platform.',
        'report-bottom-text4':'We encourage our members to invite their acquaintances to experience the game. Minigames will be held to reward enthusiastic members of the community.',
        'command':'OUR COMMAND',
        'partner':'OUR PARTNERS',
        'privacy':'Privacy Policy',
        'awaited-title':'THE LONG-AWAITED UPDATE OF OUR PROJECT!',
        'awaited-text1':'Я хотел бы еще раз сказать, что в нашем проекте не планировалось делать ставки, потому что мы работаем над игрой, однако мы решили сделать это, чтобы сократить время ожидания для тех, кто верит в нас, наш проект, и кто в восторге от запуска игры!',
        'awaited-text2':'Every week, an amount of WAX will be added to the general pool You enter the website, staking section, log in, you’ll see your collection of cards of our project and the amount of WAX/hour - it is your income You get a profit every hour. You can take your income once in 24 hours by clicking on “Claim”',
        'attention':'ATTENTION',
        'attention-text':'I hope you understand that the pool isn’t eternal, so the many participants we have, the less income you get. Once again, we are not creating a staking project, we just want to thank our cardholders this way!',
        'attention-text2':'The list of cards and what they will give is in the tableх is the variable that depends on the number of people and cards participating in staking',
        'howWork':'HOW IT WILL WORK:',
        'holder':'TOP HOLDERS',
        'rank':'RANK',
        'wallet':'WAX WALLET',
        'earning':'EARNING',
        'collection':'COLLECTION',
        'july':'July',
        'september':'September',
        'alphaVersion':'– Alpha version of the game for the white list',
        'selling':'– Selling of buildings',
        'october':'October',
        'betaVersion':'– Beta version of the game for all players',
        'november':'November',
        'launch-tournaments':'– Launching of tournaments',
        'december':'December',
        'seasonal':'– Seasonal update',
        'roadmap-card-title':'Introduction to the project',
        'roadmap-card-title2':'Launching of the 3D game version',
        'roadmap-card-title3':'Launching of the card game',
        'guide-title':'BIG GAME GUIDE',
        'g1':'Start',
        'g2':'Characters',
        'g3':'Fighting styles',
        'g4':'Punches',
        'g5':'Cities',
        'g6':'Game token',
        'g7':'Buildings',
        'g8':'Craft',
        'g9':'Story card',
        'g10':'Food',
        'g11':'Terms and values',
        'g12':'Game modes',
        'g13':'Balance updates',
        'g14':'Calendar of pack release',
        'slideStarts_title':'01.START',
        'slideStarts_text':'One can start the game by buying our pack or all the necessary cards on secondary market.',
        'slideStarts_text-strong':'To start, you’ll need:',
        'slideStarts_text2':'01. Character',
        'slideStarts_text3':'02. Fighting style',
        'slideStarts_text4':'03. City',
        'slideStarts_text5':'04. 6 punches',
        'slideStarts_text6':'05. Food',
    },
    'ru':{
        'Promo':'Промо',
        'More':'О проекте',
        'Packs':'Пакеты',
        'FAQ':'Частые вопросы',
        'Roadmap':'Дорожная карта',
        'Staking':'Ставка',
        'Guide-link':'Гайд',
        'awe':'УДИВИТЕЛЬНАЯ',
        'fight':'БОЕВАЯ ИГРА',
        'release':'ДО ВЫХОДА ИГРЫ ОСТАЛОСЬ',
        'day':'дней',
        'hour':'часов',
        'minut':'минут',
        'second':'секунд',
        'awesome_title':'Потрясающий файтинг на WAX, которого вы так долго ждали!',
        'awesome-text1':'Более 20 уникальных бойцов',
        'awesome-text2':'Песни, созданные специально для игры',
        'awesome-text3':'Еженедельные турниры с ценными призами',
        'awesome-text4':'6 режимов игры',
        'check':'Посмотри это!',
        'details':'БОЛЬШЕ ДЕТАЛЕЙ',
        'character':'Персонажи',
        'music':'Музыка',
        'modes':'Режимы игры',
        'tournament':'Турниры',
        'slider-title':'В каждом файтинге всегда много персонажей. Но начнем всего с шести:',
        'slider-text':'Каждый месяц мы будем добавлять одного нового персонажа. Вы познакомитесь с нашей "шестеркой открытия".Карты историй помогут вам в этом.',
        'track-strong':'У каждого бойца должна быть любимая песня, которая будет поддерживать его. Пока не дойдем до 31 трека.',
        'track-text':'Мы ценим хорошие треки, но мы также уважаем артистов, которые еще не достигли тех высот, которых они заслуживают. Каждый месяц мы будем находить нового и талантливого исполнителя, которого можно будет добавить к нашему саундтреку, и так далее, пока мы не дойдем до 31 трека. Мы надеемся, что таким образом мы поможем артистам добавить новых поклонников к своей музыке. Музыка будет доступна с самого начала игры. Не долго ждать?',
        'modes-text':'6 игровых режимов! Согласитесь, довольно прилично.Помимо обычных режимов PVP, PVE в игре будет доступно 4 режима, о которых мы расскажем чуть подробнее:⁃ Игра против друга. Этот режим позволяет вам сразиться с другом и увидеть, чей боец ​​круче! Ограничений по количеству боев в день не будет. Важный момент - ни токены проекта, ни очки репутации не начисляются, но карты NFT могут быть сброшены!⁃ Играем с другом. Одинаковые PVP и PVE только в парном разряде. Жетоны проектов, очки репутации и карты NFT зарабатываются в обычном режиме. Позже будет добавлен расширенный режим - наш аналог «кланового режима».⁃ Владелец бойцовского клуба. Режим для тех, кто не хочет тратить много времени на игру, а заинтересован только в получении токенов проекта, очков репутации и получения карт NFT. Всего несколько кликов в день.⁃ Режим истории. Мы даже придумали сюжетную линию! Завершение квеста за квестом позволит вам получить уникальные карты NFT, а первые 500 игроков, которые пройдут, получат наш жетон! В этом режиме снимается ограничение на количество боёв в день.',
        'modes-strong':'А чтобы развлечься, каждый сезон вас ждет новая сюжетная линия!',
        'tour-text':'На наш взгляд, это почти могло стать основой игры. В конце концов, все хотят победить, не так ли?Раз в неделю проводится турнир с призовым фондом 70 долларов (в WAX) и эксклюзивными картами, которые можно выиграть только в турнире! 2-е и 3-е места также получат призы в виде? карточки проекта.Участвовать может любой желающий!Затем идет основной турнир, который будет проводиться раз в месяц с призовым фондом 250 долларов (в WAX) и эксклюзивными картами, которые можно выиграть только в турнире! 2-е и 3-е места также получат призы в виде карточек проекта?Участвовать смогут только те, кто одержал хотя бы одну победу в последних 4 еженедельных турнирах!Для более конкурентоспособных игроков каждые 2 или 3 дня будут проводиться турниры меньшего размера. 300 участников будут бороться за главный приз в размере 2 000 WAX! И, конечно же, наши эксклюзивные турнирные карты! Стартовый взнос на турнир составляет всего 10 WAX.',
        'our':'НАШИ КАРТЫ',
        'craft':'МАСТЕРСТВО',
        'starts':'ИГРА НАЧИНАЕТСЯ ЗДЕСЬ',
        'starts-text':'Получив набор, вы получите все необходимое для начала игры.',
        'sale':'СЛЕДУЮЩАЯ РАСПРОДАЖА',
        'more':'Больше',
        'road':'ДОРОЖНАЯ КАРТА',
        'faq':'ЧАСТЫЕ ВОПРОСЫ',
        'know-more':'Узнать больше',
        'monthly':'МЕСЯЧНЫЙ ОТЧЁТ',
        'report-text':'В настоящее время мы планируем запустить второй этап проекта, который включает в себя несколько обновлений ниже:',
        'report-card1':'Представляем мобильное приложение (iOS/Android)',
        'report-card2':'Добавление уведомлений для фермеров',
        'report-card3':'Добавление новых игровых скриптов и NFT',
        'report-card4':'Добавление дополнительных руководств для начинающих',
        'report-bottom-title':'Мы также инициируем рекламные кампании, чтобы привлечь больше игроков:',
        'report-bottom-text1':'Мы ведем переговоры с AtomicHub и DappRadar о размещении нашего баннера на их веб-сайтах.',
        'report-bottom-text2':'Мы связались с KOL, чтобы выложить на Youtube больше видео с игровыми событиями.',
        'report-bottom-text3':'Мы запустили несколько кампаний на платформе Facebook и продолжим делать это на других медиа-платформах.',
        'report-bottom-text4':'Мы призываем наших участников приглашать своих знакомых испытать игру. Мини-игры будут проводиться, чтобы вознаградить энтузиастов сообщества.',
        'command':'НАША КОМАНДА',
        'partner':'НАШИ ПАРТНЁРЫ',
        'privacy':'Политика конфиденциальности',
        'awaited-title':'ДОЛГОЖДАННОЕ ОБНОВЛЕНИЕ НАШЕГО ПРОЕКТА!',
        'awaited-text1':'Я хотел бы еще раз сказать, что в нашем проекте не планировалось делать ставки, потому что мы работаем над игрой, однако мы решили сделать это, чтобы сократить время ожидания для тех, кто верит в нас, наш проект, и кто в восторге от запуска игры!',
        'awaited-text2':'Каждую неделю в общий фонд будет добавляться некоторое количество ВОСК. Вы заходите на сайт, в раздел стейкинга, авторизуетесь, видите свою коллекцию карточек нашего проекта и количество WAX / час - это ваш доход Вы получаете прибыль каждый час. Вы можете забрать свой доход один раз в 24 часа, нажав «Заявить». ',
        'attention':'ВНИМАНИЕ',
        'attention-text':'Надеюсь, вы понимаете, что пул не вечен, поэтому чем больше у нас участников, тем меньше вы получите. Еще раз, мы не создаем стейкинг-проект, мы просто хотим поблагодарить наших держателей карт!',
        'attention-text2':'Список карточек и то, что они дадут, есть в таблице х - это переменная, которая зависит от количества людей и карточек, участвующих в ставках.',
        'howWork':'КАК ЭТО БУДЕТ РАБОТАТЬ',
        'holder':'ТОП-ДЕРЖАТЕЛИ',
        'rank':'РАНГ',
        'wallet':'WAX КОШЕЛЁК',
        'earning':'ЗАРАБОТОК',
        'collection':'КОЛЛЕКЦИЯ',
        'july':'Июль',
        'promo-packs':'– Промо пакеты',
        'starter-packs':'– Стартовые пакеты',
        'story-packs':'– Наборы историй',
        'august':'Август',
        'craft-lang':'– Ремесло',
        'launchingy':'– Запуск токена проекта',
        'new-character':'– Новый персонаж',
        'phase-lang':'Эта фаза начнется только в том случае, если фанаты проявят большой интерес к карточной версии игры!',
        'q1':'Q1 2022',
        'alpha':'– Альфа-версия 3D-игры',
        'q2':'Q2 2022',
        'beta':'– Бета-версия 3D-игры',
        'q3':'Q3 2022',
        'version':'– Полная версия игры',
        'september':'Сентябрь',
        'alphaVersion':'– Альфа-версия игры для белого списка',
        'selling':'– Продажа зданий',
        'october':'Октябрь',
        'betaVersion':'– Бета-версия игры для всех игроков',
        'november':'Ноябрь',
        'launch-tournaments':'– Запуск турниров',
        'december':'Декабрь',
        'seasonal':'– Сезонное обновление',
        'roadmap-card-title':'Введение в проект',
        'roadmap-card-title2':'Запуск версии 3D игры',
        'roadmap-card-title3':'Запуск карточной игры',
        'guide-title':'БОЛЬШОЙ ГАЙД ПО ИГРЕ',
        'g1':'Старт',
        'g2':'Персонажи',
        'g3':'Боевые стили',
        'g4':'Удары',
        'g5':'Города',
        'g6':'Жетон игры',
        'g7':'Здания',
        'g8':'Ремесло',
        'g9':'Карточка истории',
        'g10':'Еда',
        'g11':'Условия и ценности',
        'g12':'Режимы игры',
        'g13':'Обновления баланса',
        'g14':'Календарь выпуска пакета',
        'slideStarts_title':'01.СТАРТ',
        'slideStarts_text':'Начать игру можно, купив нашу колоду или все необходимые карты на вторичном рынке.',
        'slideStarts_text-strong':'Для начала вам понадобятся:',
        'slideStarts_text2':'01. Персонаж',
        'slideStarts_text3':'02. Боевой стиль',
        'slideStarts_text4':'03. Город',
        'slideStarts_text5':'04. 6 ударов',
        'slideStarts_text6':'05. Еда',
    }
}