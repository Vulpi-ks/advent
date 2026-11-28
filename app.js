const TG_LINK = "https://t.me/vulpiks_eng";
const YT = q => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
const GG = q => "https://www.google.com/search?q=" + encodeURIComponent(q);

const DAYS = [
/* 1 */ {t:"Your Christmas playlist", c:"США и Великобритания", sk:"#listening #writing", tm:"20 мин",
 why:"Начинаем декабрь с музыки: рождественские хиты - часть культуры США и Британии, их крутят везде с 1 декабря.",
 res:[["Classic Christmas songs", YT("classic christmas songs playlist")], ["UK Christmas hits", YT("best UK christmas songs of all time")]],
 vocab:[["upbeat","бодрый, весёлый"],["nostalgic","ностальгический"],["catchy","прилипчивый"],["cosy","уютный"],["chorus","припев"],["to hum","напевать"]],
 e:{steps:[
   "Послушайте подборку рождественских песен по ссылке.",
   "Выберите 5 песен, которые понравились, и соберите плейлист в своём музыкальном приложении.",
   "К каждой песне напишите одно предложение: <b>This song is happy / calm / funny / beautiful.</b>",
   "Назовите плейлист по-английски, например <b>My Cosy December</b>."],
   out:"Скриншот плейлиста и 5 подписей к песням."},
 h:{steps:[
   "Listen to a mix of American and British Christmas classics.",
   "Build a playlist of 8 songs for a specific mood: a December morning, a cosy evening, a party.",
   "For each song, write one line describing its mood using today's words: <i>upbeat, nostalgic, catchy…</i>",
   "Find out one fact about your favourite song: who wrote it, when, why it became popular.",
   "Give your playlist a creative English title and a two-sentence description, like on Spotify."],
   out:"Your playlist title, description and the fun fact."}},

/* 2 */ {t:"Christmas cards the British way", c:"Великобритания", sk:"#writing", tm:"25 мин",
 why:"Британцы до сих пор отправляют десятки бумажных открыток и ставят полученные на каминную полку. Это отличный повод потренировать тёплые фразы.",
 res:[["Christmas card messages", GG("what to write in a christmas card examples")]],
 vocab:[["Season's greetings","Поздравления с праздниками"],["Warmest wishes","Самые тёплые пожелания"],["Thinking of you","Думаю о тебе"],["to catch up","пообщаться, наверстать"],["festive season","праздничный сезон"],["Love, …","С любовью, …"]],
 e:{steps:[
   "Выберите 3 человек, которых хотите поздравить.",
   "Напишите каждому открытку из 3 строк: <b>Dear …, / Merry Christmas and Happy New Year! / Love, …</b>",
   "Добавьте одно личное пожелание: <b>I hope you…</b>",
   "Отправьте настоящую открытку или сообщение!"],
   out:"Фото или текст одной из открыток."},
 h:{steps:[
   "Look through examples of Christmas card messages: notice how they differ for family, friends and colleagues.",
   "Write three cards: to a family member, a close friend and a colleague. Change the tone each time.",
   "In each card, mention one shared memory from this year and one wish for the next.",
   "Sign off differently each time: <i>Love, Best wishes, Warmest wishes</i>.",
   "Actually send at least one of them."],
   out:"Your three card texts. Which sign-off felt most natural?"}},

/* 3 */ {t:"Read about British Christmas", c:"Великобритания", sk:"#reading #vocabulary", tm:"20 мин",
 why:"Читаем настоящую статью о традициях: crackers, Christmas pudding, обращение короля, Boxing Day.",
 res:[["BBC: Christmas traditions", GG("BBC Christmas traditions in the UK explained")], ["Christmas in the UK", GG("British Christmas traditions explained for learners")]],
 vocab:[["mince pie","пирожок с сухофруктами"],["stocking","рождественский носок"],["cracker","хлопушка с сюрпризом"],["to pull","тянуть"],["Boxing Day","26 декабря"],["tradition","традиция"]],
 e:{steps:[
   "Откройте статью о британских традициях (можно для учащихся, попроще).",
   "Найдите в тексте 6 слов из словаря дня.",
   "Выпишите 3 традиции, которые вам понравились: <b>In the UK, people…</b>",
   "Какая традиция похожа на нашу? Напишите одно предложение."],
   out:"3 традиции и одно сравнение."},
 h:{steps:[
   "Read an article about British Christmas traditions.",
   "Note down 10 new words or phrases with an example sentence for each.",
   "Choose the strangest tradition and explain it in your own words, as if to a friend.",
   "Compare British Christmas with Russian New Year: write 3 similarities and 3 differences."],
   out:"Your explanation of the strangest tradition."}},

/* 4 */ {t:"Christmas Jumper Day", c:"Великобритания", sk:"#vocabulary #speaking", tm:"15 мин",
 why:"В декабре британцы приходят на работу в самых нелепых свитерах и жертвуют деньги на благотворительность. Сегодня ваш день!",
 res:[["Christmas jumper ideas", GG("funny christmas jumpers")], ["Christmas Jumper Day", GG("Save the Children Christmas Jumper Day")]],
 vocab:[["jumper (BrE) / sweater (AmE)","свитер"],["tacky","безвкусный, кричащий"],["knitted","вязаный"],["pattern","узор"],["sleeve","рукав"],["over-the-top","чересчур"]],
 e:{steps:[
   "Наденьте самый тёплый или самый смешной свитер (или любую праздничную вещь).",
   "Сделайте селфи.",
   "Опишите свой образ в 3 предложениях: <b>I am wearing a red jumper. It has… It is…</b>",
   "Запишите это описание голосом."],
   out:"Селфи и голосовое с описанием образа."},
 h:{steps:[
   "Find the tackiest Christmas jumper online and save a picture.",
   "Wear your own festive outfit and take a photo.",
   "Describe both outfits in detail: colours, patterns, materials, how they make you feel.",
   "Record a 1-minute 'fashion review' comparing the two, using <i>tacky, over-the-top, knitted</i>."],
   out:"Your fashion review voice message."}},

/* 5 */ {t:"Winter bucket list", c:"США", sk:"#reading #writing", tm:"15 мин",
 why:"Американцы обожают списки: winter bucket list - это то, что обязательно сделать этой зимой.",
 res:[["Winter bucket list ideas", GG("winter bucket list ideas")]],
 vocab:[["bucket list","список желаний"],["to go ice skating","кататься на коньках"],["to build a snowman","лепить снеговика"],["to have a movie marathon","устроить киномарафон"],["to try","попробовать"],["to tick off","отметить галочкой"]],
 e:{steps:[
   "Посмотрите любой американский winter bucket list по ссылке.",
   "Напишите свой список из 7 пунктов: <b>to go ice skating, to drink hot chocolate…</b>",
   "Отметьте, что уже сделали в этом году.",
   "Повесьте список на холодильник или поставьте на заставку телефона!"],
   out:"Фото вашего списка."},
 h:{steps:[
   "Read two winter bucket lists from American blogs. What do they have in common?",
   "Write your own list of 12 items: 4 cosy, 4 adventurous, 4 'English' (things that will practise your English).",
   "For three items, add a sentence about why: <i>I've always wanted to… because…</i>",
   "Come back on 31 December and tick off what you've done."],
   out:"Your 12-item bucket list."}},

/* 6 */ {t:"Why is winter dark?", c:"Англоязычный YouTube", sk:"#listening", tm:"20 мин",
 why:"Короткое научно-популярное видео: почему зимой так рано темнеет и что такое солнцестояние.",
 res:[["TED-Ed: seasons", YT("TED-Ed why do we have seasons")], ["Winter solstice explained", YT("winter solstice explained for kids")]],
 vocab:[["tilt","наклон"],["axis","ось"],["daylight","дневной свет"],["hemisphere","полушарие"],["solstice","солнцестояние"],["orbit","орбита"]],
 e:{steps:[
   "Посмотрите короткое видео для детей о зиме и солнцестоянии, с английскими субтитрами.",
   "Выпишите 5 слов, которые узнали.",
   "Закончите предложение: <b>In winter the days are short because…</b>",
   "Сколько часов светло сегодня в вашем городе? <b>Today we have … hours of daylight.</b>"],
   out:"Ваши 5 слов и предложение."},
 h:{steps:[
   "Watch a TED-Ed video about the seasons. Watch it twice: once for gist, once for details.",
   "Write down 3 facts that surprised you.",
   "Explain to a child, in 4–5 simple sentences, why it gets dark so early in December.",
   "Record your explanation as if you were a science vlogger."],
   out:"Your science vlog voice message."}},

/* 7 */ {t:"Bake gingerbread", c:"США и Великобритания", sk:"#reading #cooking", tm:"60 мин",
 why:"Готовим по настоящему английскому рецепту: пряничные человечки и домики - символ Рождества в Британии и США.",
 res:[["BBC Good Food: gingerbread", GG("BBC Good Food gingerbread men recipe")], ["How to decorate gingerbread", YT("how to decorate gingerbread men icing")]],
 vocab:[["to preheat","разогреть духовку"],["to roll out","раскатать"],["dough","тесто"],["cookie cutter","формочка для печенья"],["icing","глазурь"],["to sift","просеять"]],
 e:{steps:[
   "Откройте английский рецепт gingerbread men.",
   "Найдите в рецепте слова из словаря дня.",
   "Испеките печенье (или просто купите и украсьте!).",
   "Подпишите фото: <b>I made gingerbread men. They are…</b>"],
   out:"Фото ваших пряников с подписью."},
 h:{steps:[
   "Read the whole recipe before you start, and look up every unknown verb.",
   "Bake the gingerbread, following only the English instructions.",
   "Watch a decorating video and try one technique.",
   "Write the recipe in your own words as a short Instagram caption: ingredients and 5 steps."],
   out:"Your photo and recipe caption."}},

/* 8 */ {t:"Podcast time", c:"Великобритания", sk:"#listening", tm:"25 мин",
 why:"BBC Learning English - британский подкаст для изучающих язык. Выпуски по 6 минут с объяснением лексики.",
 res:[["6 Minute English: winter", GG("BBC Learning English 6 Minute English winter")], ["6 Minute English: Christmas", GG("BBC Learning English 6 Minute English Christmas")]],
 vocab:[["episode","выпуск"],["host","ведущий"],["transcript","расшифровка"],["to take notes","делать заметки"],["gist","общий смысл"],["to pause","поставить на паузу"]],
 e:{steps:[
   "Включите выпуск 6 Minute English на зимнюю или праздничную тему.",
   "Слушайте с расшифровкой (transcript).",
   "Выпишите 5 новых слов из словаря в конце выпуска.",
   "Ответьте одним предложением: <b>The episode is about…</b>"],
   out:"Название выпуска и ваши 5 слов."},
 h:{steps:[
   "Listen to a 6 Minute English episode without the transcript first.",
   "Write a 3-sentence summary of what you understood.",
   "Listen again with the transcript and check your summary.",
   "Pick 3 expressions from the episode and use each in a sentence about your December."],
   out:"Your summary and 3 sentences."}},

/* 9 */ {t:"Your gift guide", c:"США", sk:"#reading #writing", tm:"20 мин",
 why:"В декабре американские журналы выпускают gift guides: подборки подарков для разных людей. Делаем свою.",
 res:[["Holiday gift guides", GG("holiday gift guide 2026")]],
 vocab:[["gift guide","подборка подарков"],["stocking stuffer","мелкий подарок в носок"],["under $50","до 50 долларов"],["for the person who has everything","для того, у кого всё есть"],["thoughtful","продуманный, внимательный"],["budget","бюджет"]],
 e:{steps:[
   "Посмотрите любой американский gift guide.",
   "Составьте список подарков для 4 человек.",
   "Напишите для каждого: <b>For my sister - a book, because she likes reading.</b>",
   "Укажите бюджет каждого подарка по-английски: <b>It costs about 1,000 roubles.</b>"],
   out:"Ваш список подарков."},
 h:{steps:[
   "Read a gift guide and notice the style: short, catchy, persuasive descriptions.",
   "Create your own guide with 4 categories: <i>for the bookworm, for the foodie, for the person who has everything, stocking stuffers</i>.",
   "Write a 2-sentence pitch for each gift, gift-guide style.",
   "Optional: turn it into a carousel for social media."],
   out:"Your gift guide."}},

/* 10 */ {t:"Panto night", c:"Великобритания", sk:"#listening #speaking", tm:"20 мин",
 why:"Пантомима - британский рождественский спектакль, где зал кричит актёрам. Смешно, громко и очень по-британски.",
 res:[["Pantomime: He's behind you", YT("pantomime he's behind you")], ["What is panto?", YT("what is a british pantomime explained")]],
 vocab:[["He's behind you!","Он позади тебя!"],["Oh no, it isn't!","А вот и нет!"],["Oh yes, it is!","А вот и да!"],["villain","злодей"],["the Dame","комическая «мама», которую играет мужчина"],["to boo","освистывать"]],
 e:{steps:[
   "Посмотрите короткое видео с пантомимой.",
   "Повторите вслух три главные фразы вместе с залом.",
   "Покажите видео семье или друзьям и объясните: <b>This is a British show. People shout…</b>",
   "Запишите себя, когда кричите <b>He's behind you!</b>"],
   out:"Ваше самое громкое голосовое!"},
 h:{steps:[
   "Watch a video explaining what panto is, then a real panto clip.",
   "List all the audience reactions you hear: shouting, booing, singing.",
   "Why do you think this tradition is so popular in Britain? Write 4–5 sentences.",
   "Write a mini-panto scene (6–8 lines) based on a Russian fairy tale, with audience shout-outs."],
   out:"Your mini-panto scene."}},

/* 11 */ {t:"Duvet day", c:"Великобритания", sk:"#listening #wellness", tm:"сколько захочется",
 why:"Duvet day - британское выражение для дня отдыха под одеялом. Сегодня отдыхаем, но по-английски.",
 res:[["Christmas episodes of sitcoms", GG("best christmas sitcom episodes")]],
 vocab:[["duvet","одеяло"],["duvet day","день отдыха дома"],["to binge-watch","смотреть запоем"],["comfort show","сериал для души"],["Christmas special","рождественский выпуск"],["to unwind","расслабиться"]],
 e:{steps:[
   "Устройте себе отдых: плед, чай, вкусности.",
   "Посмотрите одну рождественскую серию любимого сериала на английском с субтитрами.",
   "Запишите 3 фразы, которые поняли.",
   "Ничего больше не делайте. Вы заслужили!"],
   out:"Какую серию смотрели и 3 фразы."},
 h:{steps:[
   "Take a proper duvet day: no to-do lists.",
   "Watch a Christmas special of an English-language sitcom you like, with English subtitles.",
   "Catch 3 jokes or phrases you'd like to steal.",
   "Write a two-sentence review: what made you laugh?"],
   out:"Your mini-review."}},

/* 12 */ {t:"Dear Santa", c:"Канада", sk:"#writing", tm:"20 мин",
 why:"У Санты есть настоящий почтовый индекс в Канаде: H0H 0H0. Canada Post каждый год отвечает на письма детей со всего мира.",
 res:[["Canada Post: write to Santa", GG("Canada Post write a letter to Santa H0H 0H0")]],
 vocab:[["postcode","почтовый индекс"],["I've been good","я хорошо себя вёл"],["I'd love…","я бы очень хотел…"],["Could you…?","Не мог бы ты…?"],["wish","желание"],["North Pole","Северный полюс"]],
 e:{steps:[
   "Узнайте про адрес Санты: Santa Claus, North Pole, H0H 0H0, Canada.",
   "Напишите письмо из 4 предложений: кто вы, каким был год, что хотите, спасибо.",
   "Используйте <b>Dear Santa, My name is… This year I… I would like… Thank you!</b>",
   "Можно отправить по-настоящему, проверьте сроки на сайте Canada Post."],
   out:"Ваше письмо Санте."},
 h:{steps:[
   "Read about Canada Post's Santa letter programme.",
   "Write a letter to Santa as an adult: 8–10 sentences, honest and funny.",
   "Include: what you've achieved this year, one non-material wish, and one wish for someone else.",
   "Use <i>I've been…, I'd love…, Could you…?</i>"],
   out:"Your letter."}},

/* 13 */ {t:"The street of lights", c:"США", sk:"#listening #writing", tm:"30 мин",
 why:"Район Dyker Heights в Нью-Йорке украшают так, что туда едут туристы со всего мира. Сегодня ищем огни в своём городе.",
 res:[["Dyker Heights lights tour", YT("Dyker Heights Christmas lights walking tour")]],
 vocab:[["display","инсталляция, украшение"],["neighbourhood","район"],["to light up","освещать"],["sparkling","сверкающий"],["breathtaking","захватывающий дух"],["to show off","хвастаться"]],
 e:{steps:[
   "Посмотрите видео-прогулку по Dyker Heights.",
   "Прогуляйтесь вечером по своему району.",
   "Сделайте 3 фото самых красивых украшений.",
   "Подпишите каждое: <b>There is a big tree. The lights are…</b>"],
   out:"3 фото с подписями."},
 h:{steps:[
   "Watch a walking tour of Dyker Heights and note the adjectives the vlogger uses.",
   "Go for an evening walk and find the best-decorated spot in your area.",
   "Film a 30-second 'walking tour' video and narrate it in English.",
   "Would you decorate like the people in Dyker Heights? Why or why not?"],
   out:"Your mini walking tour."}},

/* 14 */ {t:"Postcard from Bondi Beach", c:"Австралия", sk:"#reading #writing #slang", tm:"20 мин",
 why:"В Австралии Рождество летом: барбекю на пляже, креветки и Санта в шортах. Плюс австралийский сленг.",
 res:[["Christmas in Australia", YT("christmas in australia on the beach")], ["Aussie Christmas slang", GG("Australian Christmas slang Chrissie pressie arvo")]],
 vocab:[["Chrissie","Рождество (австр.)"],["pressie","подарок"],["arvo","после обеда"],["barbie","барбекю"],["prawns","креветки"],["sunnies","солнечные очки"]],
 e:{steps:[
   "Посмотрите видео о Рождестве в Австралии.",
   "Представьте, что вы там. Напишите открытку из 4 предложений: <b>Hi! I'm in Australia. It's hot! I…</b>",
   "Используйте хотя бы одно австралийское слово.",
   "Найдите картинку пляжа для открытки."],
   out:"Ваша открытка с картинкой."},
 h:{steps:[
   "Watch a video about an Aussie Christmas and read about Australian slang.",
   "Write a postcard home from Bondi Beach on Christmas Day, using at least 5 Aussie words.",
   "Then write the same postcard in standard English. Which one sounds more fun?",
   "Bonus: invent an Aussie-style short form for a Russian New Year thing."],
   out:"Both versions of your postcard."}},

/* 15 */ {t:"Twelve Days remix", c:"Англия", sk:"#listening #writing #speaking", tm:"25 мин",
 why:"«The Twelve Days of Christmas» - старинная английская песня-считалка. Делаем свой ремикс.",
 res:[["The Twelve Days of Christmas", YT("twelve days of christmas song with lyrics")]],
 vocab:[["partridge","куропатка"],["pear tree","грушевое дерево"],["gold rings","золотые кольца"],["swans","лебеди"],["true love","любимый человек"],["ordinal numbers","порядковые числительные"]],
 e:{steps:[
   "Послушайте песню с текстом на экране.",
   "Потренируйте порядковые числа: first, second, third… twelfth.",
   "Придумайте свои подарки на 5 дней: <b>On the first day of Christmas my true love gave to me…</b>",
   "Пропойте или прочитайте свою версию вслух."],
   out:"Ваш ремикс на 5 дней."},
 h:{steps:[
   "Listen to the song and notice the old-fashioned grammar: <i>swans a-swimming</i>.",
   "Write a modern 12-day remix about someone you know: their job, hobbies, daily life.",
   "Keep the rhythm: try to sing it!",
   "Record at least the last verse."],
   out:"Your remix recording."}},

/* 16 */ {t:"Design a Christmas menu", c:"Великобритания и США", sk:"#reading #writing", tm:"25 мин",
 why:"Британский и американский праздничный стол похожи, но не одинаковы. Вы - шеф-повар и составляете меню своего ресторана.",
 res:[["British Christmas dinner", GG("traditional British Christmas dinner menu")], ["American Christmas dinner", GG("traditional American Christmas dinner menu")]],
 vocab:[["roast","запечённый"],["glazed","глазированный"],["stuffing","начинка"],["gravy","мясной соус"],["side dish","гарнир"],["starter / main / dessert","закуска / основное / десерт"]],
 e:{steps:[
   "Посмотрите типичное британское и американское рождественское меню.",
   "Составьте своё меню: <b>Starter, Main, Dessert, Drink</b>.",
   "К каждому блюду добавьте одно прилагательное: <b>roast chicken, sweet cake…</b>",
   "Оформите меню красиво (можно от руки)."],
   out:"Фото вашего меню."},
 h:{steps:[
   "Compare British and American Christmas dinners: what's the same, what's different?",
   "Design a fusion menu: British + American + Russian dishes.",
   "Write restaurant-style descriptions, like <i>slow-roasted turkey with a honey glaze</i>.",
   "Add prices and a name for your restaurant."],
   out:"Your restaurant menu."}},

/* 17 */ {t:"Secret Santa game", c:"США и Великобритания", sk:"#speaking", tm:"30 мин",
 why:"Secret Santa и White Elephant - популярные игры с подарками в офисах и семьях. Играем по-английски!",
 res:[["White Elephant rules", GG("white elephant gift exchange rules")], ["Secret Santa ideas", GG("secret santa ideas")]],
 vocab:[["to draw names","тянуть имена"],["to swap","меняться"],["to steal","забрать (в игре)"],["to unwrap","распаковать"],["budget","бюджет"],["It's your turn","Твой ход"]],
 e:{steps:[
   "Прочитайте правила Secret Santa.",
   "Предложите игру семье или друзьям.",
   "Во время игры говорите по-английски хотя бы 3 фразы: <b>It's your turn! Open it! Thank you!</b>",
   "Если не с кем играть - напишите, что бы вы подарили 3 знакомым."],
   out:"Фото игры или ваш список."},
 h:{steps:[
   "Read the rules of White Elephant (Yankee Swap).",
   "Explain the rules in English to your family or friends, then play.",
   "Prepare 5 phrases for the game: <i>Steal or open? I'm keeping this one!</i>",
   "Afterwards, write a short 'match report': who stole what, the funniest gift."],
   out:"Your match report."}},

/* 18 */ {t:"Christmas adverts", c:"Великобритания", sk:"#listening #speaking", tm:"20 мин",
 why:"В Британии выход рождественской рекламы John Lewis - национальное событие. Короткий фильм, после которого все плачут.",
 res:[["John Lewis Christmas adverts", YT("John Lewis Christmas advert")], ["Best UK Christmas adverts", YT("best UK christmas adverts of all time")]],
 vocab:[["advert","реклама"],["tear-jerker","до слёз трогательный"],["heartwarming","трогательный"],["plot","сюжет"],["main character","главный герой"],["to make someone cry","довести до слёз"]],
 e:{steps:[
   "Посмотрите рождественскую рекламу John Lewis этого года.",
   "Кто главный герой? <b>The main character is…</b>",
   "Опишите своё чувство: <b>I feel happy / sad / surprised.</b>",
   "Посмотрите ещё одну рекламу и выберите любимую."],
   out:"Ваша любимая реклама и 3 предложения о ней."},
 h:{steps:[
   "Watch this year's John Lewis advert and two older ones.",
   "Retell the plot of your favourite in present simple, in 6–8 sentences.",
   "Analyse it: what's the message? How does it make you feel and why?",
   "Rate all three: tear-jerker, heartwarming or forgettable?"],
   out:"Your retelling and ratings."}},

/* 19 */ {t:"A Christmas Carol", c:"Англия", sk:"#reading #reflection", tm:"30 мин",
 why:"Повесть Диккенса 1843 года о скряге Скрудже и трёх духах. Она сформировала образ английского Рождества.",
 res:[["A Christmas Carol: summary", YT("A Christmas Carol summary")], ["Full text (public domain)", GG("A Christmas Carol Dickens full text Project Gutenberg")]],
 vocab:[["miser","скряга"],["ghost","призрак"],["Bah! Humbug!","Вздор! Чепуха!"],["to change one's ways","исправиться"],["generous","щедрый"],["regret","сожаление"]],
 e:{steps:[
   "Посмотрите короткий пересказ истории о Скрудже.",
   "Ответьте: <b>Who is Scrooge? He is…</b>",
   "Призраки прошлого, настоящего и будущего. Напишите по одному предложению о своём прошлом, настоящем и будущем.",
   "Скажите вслух фразу Скруджа: <b>Bah! Humbug!</b>"],
   out:"Ваши три предложения."},
 h:{steps:[
   "Watch a summary or read the first pages of Stave One (it's free online).",
   "Find 3 words Dickens uses to describe Scrooge.",
   "Imagine the three ghosts visit you: what would they show you? Write a paragraph for each.",
   "What's one thing you'd like to 'change your ways' about in 2027?"],
   out:"Your three ghost paragraphs."}},

/* 20 */ {t:"Around the English-speaking world", c:"Ирландия, Ямайка, Новая Зеландия", sk:"#research #writing", tm:"30 мин",
 why:"По-английски говорят не только в Британии и США. Исследуем, как празднуют в других странах.",
 res:[["Christmas in Ireland", GG("Irish Christmas traditions candle in the window")], ["Christmas in Jamaica", GG("Jamaican Christmas traditions Grand Market sorrel")], ["Christmas in New Zealand", GG("Kiwi Christmas traditions pohutukawa")]],
 vocab:[["custom","обычай"],["to celebrate","праздновать"],["to originate","происходить"],["unique","уникальный"],["local","местный"],["similar to","похожий на"]],
 e:{steps:[
   "Выберите одну страну: Ирландия, Ямайка или Новая Зеландия.",
   "Прочитайте о её рождественских традициях.",
   "Напишите 3 факта: <b>In Jamaica, people…</b>",
   "Найдите одну картинку для каждого факта."],
   out:"3 факта с картинками."},
 h:{steps:[
   "Choose one country and research 4 Christmas customs.",
   "Create a 5-slide mini-presentation or carousel: one custom per slide plus a title slide.",
   "Write 2–3 sentences per slide in your own words.",
   "Last slide: which custom would you adopt and why?"],
   out:"Your carousel."}},

/* 21 */ {t:"Solstice journal", c:"Англия", sk:"#writing #reflection", tm:"20 мин",
 why:"21 декабря - самая длинная ночь. В Англии люди встречают у Стоунхенджа возвращение света. Сегодня тихий вечер со свечой и дневником.",
 res:[["Stonehenge winter solstice", YT("Stonehenge winter solstice sunrise")]],
 vocab:[["to light a candle","зажечь свечу"],["to let go of","отпустить"],["grateful","благодарный"],["to look forward to","ждать с нетерпением"],["darkness","темнота"],["the return of the light","возвращение света"]],
 e:{steps:[
   "Посмотрите видео о встрече солнцестояния в Стоунхендже.",
   "Зажгите свечу.",
   "Закончите 3 фразы: <b>I am grateful for… I want to let go of… I look forward to…</b>",
   "Посидите 5 минут в тишине."],
   out:"Если захотите - поделитесь одной фразой."},
 h:{steps:[
   "Watch the solstice celebrations at Stonehenge.",
   "Light a candle and journal for 15 minutes in English.",
   "Prompts: <i>What am I leaving in the dark of 2026? What do I want to bring into the light of 2027? What am I grateful for?</i>",
   "Don't worry about mistakes: just write."],
   out:"Share one line if you like."}},

/* 22 */ {t:"Hot cocoa, American style", c:"США", sk:"#reading #cooking #measurements", tm:"20 мин",
 why:"Американские рецепты - в чашках и унциях. Варим горячий шоколад и разбираемся в американских мерах.",
 res:[["Hot cocoa recipe", GG("homemade hot cocoa recipe cups")], ["Cups to grams", GG("cups to grams converter")]],
 vocab:[["cup","чашка (≈240 мл)"],["tablespoon (tbsp)","столовая ложка"],["teaspoon (tsp)","чайная ложка"],["to whisk","взбивать"],["to simmer","томить на слабом огне"],["whipped cream","взбитые сливки"]],
 e:{steps:[
   "Найдите простой рецепт hot cocoa.",
   "Узнайте, сколько миллилитров в одной <b>cup</b>.",
   "Приготовьте какао.",
   "Подпишите фото: <b>I made hot cocoa with milk and…</b>"],
   out:"Фото и подпись."},
 h:{steps:[
   "Find an American hot cocoa recipe and convert all measurements to metric.",
   "Make it, following the English instructions.",
   "Write your own 'secret family recipe' version with one twist (spice, topping…).",
   "Record a 1-minute cooking-show explanation: <i>First…, then…, finally…</i>"],
   out:"Your cooking-show recording."}},

/* 23 */ {t:"Movie night", c:"США и Великобритания", sk:"#listening #writing", tm:"2 часа",
 why:"Рождественское кино на английском - лучшая практика аудирования. Сегодня киновечер с субтитрами.",
 res:[["Best Christmas movies", GG("best christmas movies of all time list")]],
 vocab:[["plot twist","сюжетный поворот"],["to be set in","действие происходит в"],["cast","актёрский состав"],["feel-good movie","фильм для хорошего настроения"],["quote","цитата"],["to recommend","рекомендовать"]],
 e:{steps:[
   "Выберите рождественский фильм (например, Home Alone, Elf, The Holiday).",
   "Смотрите на английском с русскими или английскими субтитрами.",
   "Запишите 5 фраз, которые поняли на слух.",
   "Оцените фильм: <b>I give it 4 stars because it is funny.</b>"],
   out:"Ваши 5 фраз и оценка."},
 h:{steps:[
   "Choose a Christmas classic you haven't seen in English.",
   "Watch it with English subtitles; pause to write down 10 useful phrases.",
   "Write a 6-sentence review: setting, plot (no spoilers!), best scene, best quote, rating.",
   "Who would you recommend it to?"],
   out:"Your film review."}},

/* 24 */ {t:"Christmas Eve", c:"США", sk:"#reading aloud #pronunciation", tm:"20 мин",
 why:"Сочельник: американские дети следят за Сантой на сайте NORAD и читают стихотворение «'Twas the Night Before Christmas» (1823).",
 res:[["NORAD Tracks Santa", "https://www.noradsanta.org"], ["'Twas the Night Before Christmas", YT("Twas the night before christmas read aloud")]],
 vocab:[["'twas","it was (устар.)"],["creature","существо"],["stirring","шевелящийся"],["chimney","дымоход"],["sleigh","сани"],["to track","отслеживать"]],
 e:{steps:[
   "Откройте сайт NORAD и найдите, где сейчас Санта: <b>Now Santa is in…</b>",
   "Послушайте, как читают стихотворение.",
   "Прочитайте вслух первые 2 строчки и запишите себя.",
   "Оставьте Санте молоко и печенье (а себе - тоже!)."],
   out:"Ваше голосовое с первыми строчками."},
 h:{steps:[
   "Track Santa on NORAD and note three places he visited.",
   "Listen to a reading of the poem and notice its bouncing rhythm.",
   "Read the first 8 lines aloud; record and compare with the original.",
   "Send me your recording: this is my Christmas challenge!"],
   out:"Your recording of the first 8 lines."}},

/* 25 */ {t:"The King's Christmas message", c:"Великобритания", sk:"#listening #summarising", tm:"20 мин",
 why:"С 1932 года британский монарх 25 декабря в 15:00 обращается к стране. Это 18:00 по Москве.",
 res:[["The King's Christmas message", YT("The King's Christmas Message")]],
 vocab:[["broadcast","трансляция"],["message","обращение"],["to reflect on","размышлять о"],["community","сообщество"],["kindness","доброта"],["the Commonwealth","Содружество"]],
 e:{steps:[
   "Посмотрите первые 3 минуты обращения короля с английскими субтитрами.",
   "Выпишите слова, которые узнали.",
   "Ответьте: <b>The King talks about…</b>",
   "Обратите внимание на британский акцент: какие слова звучат необычно?"],
   out:"Ваши слова и одно предложение."},
 h:{steps:[
   "Watch the whole King's Christmas message with English subtitles.",
   "Note 5 new words and the main themes.",
   "Summarise the message in 3 sentences.",
   "If you gave a New Year message to your family, what would you say? Write 5 sentences."],
   out:"Your summary and your own message."}},

/* 26 */ {t:"Boxing Day walk", c:"Великобритания", sk:"#speaking #writing", tm:"40 мин",
 why:"26 декабря британцы отдыхают, доедают остатки и выходят на долгую прогулку. Присоединяемся!",
 res:[["What is Boxing Day?", YT("what is Boxing Day explained")]],
 vocab:[["leftovers","остатки еды"],["to go for a walk","пойти на прогулку"],["fresh air","свежий воздух"],["frosty","морозный"],["to stretch one's legs","размять ноги"],["sales","распродажи"]],
 e:{steps:[
   "Посмотрите короткое видео о Boxing Day.",
   "Сходите на прогулку минимум на 30 минут.",
   "Сделайте 5 фото.",
   "Подпишите каждое одним предложением: <b>This is the river. It is frosty.</b>"],
   out:"5 фото с подписями."},
 h:{steps:[
   "Learn why Boxing Day has nothing to do with boxing.",
   "Go for a long walk without headphones and 'narrate' it in your head in English.",
   "Take 5 photos and write an Instagram-style caption for each.",
   "Back home, record a 1-minute voice note about your walk in past simple."],
   out:"Your captions and voice note."}},

/* 27 */ {t:"Thank-you notes", c:"Великобритания", sk:"#writing", tm:"20 мин",
 why:"Британских детей с детства учат писать thank-you notes за подарки сразу после Рождества. Хорошая традиция!",
 res:[["How to write a thank-you note", GG("how to write a thank you note for a christmas gift examples")]],
 vocab:[["Thank you so much for…","Большое спасибо за…"],["It was so thoughtful of you","Это было так внимательно с твоей стороны"],["I can't wait to…","Не могу дождаться…"],["I really appreciate…","Я очень ценю…"],["It made my day","Это сделало мой день"],["gift","подарок"]],
 e:{steps:[
   "Вспомните 3 подарка или добрых дела, которые вы получили.",
   "Напишите 3 коротких благодарности: <b>Thank you for the… I love it!</b>",
   "Добавьте, как будете это использовать: <b>I use it every day.</b>",
   "Отправьте хотя бы одну!"],
   out:"Ваши благодарности."},
 h:{steps:[
   "Read examples of thank-you notes.",
   "Write three notes: for a gift, for help this year and for something small that made your day.",
   "Be specific: say what exactly you liked and how you'll use it.",
   "Send at least one of them, in English or translated."],
   out:"Your three notes."}},

/* 28 */ {t:"Your 2026 Wrapped", c:"Весь англоязычный мир", sk:"#writing #reflection", tm:"25 мин",
 why:"Как Spotify Wrapped, только про вашу жизнь: подводим итоги года по-английски.",
 res:[["Year in review ideas", GG("year in review journal prompts")]],
 vocab:[["highlight","лучший момент"],["achievement","достижение"],["milestone","важный этап"],["to look back on","оглядываться на"],["unforgettable","незабываемый"],["challenge","трудность, вызов"]],
 e:{steps:[
   "Сделайте свой Wrapped из 5 пунктов:",
   "<b>My top song: … / My top place: … / My best day: … / My new skill: … / My word of the year: …</b>",
   "Найдите фото к каждому пункту.",
   "Оформите в виде сторис."],
   out:"Ваш Wrapped."},
 h:{steps:[
   "Create your personal 2026 Wrapped with 8 categories: top song, top place, top person, biggest achievement, biggest challenge, best decision, word of the year, English milestone.",
   "Write 1–2 sentences for each, using present perfect and past simple.",
   "Add a photo for each category.",
   "Share it as stories or a carousel."],
   out:"Your 2026 Wrapped."}},

/* 29 */ {t:"SMART resolutions", c:"США", sk:"#reading #writing", tm:"25 мин",
 why:"Новогодние обещания - американская традиция, и большинство бросают их к февралю. Учимся ставить цели так, чтобы они работали.",
 res:[["SMART goals explained", YT("SMART goals explained")]],
 vocab:[["resolution","новогоднее обещание"],["specific","конкретный"],["measurable","измеримый"],["achievable","достижимый"],["deadline","срок"],["to give up","бросить, сдаться"]],
 e:{steps:[
   "Посмотрите видео про SMART goals.",
   "Напишите 3 цели на 2027 год: <b>I want to…</b>",
   "Сделайте одну цель конкретной: <b>I want to read 5 books in English by June.</b>",
   "Повесьте цели на видное место."],
   out:"Ваши 3 цели."},
 h:{steps:[
   "Learn what SMART stands for.",
   "Write 3 resolutions, then rewrite each one to make it SMART.",
   "For each, add the first tiny step you'll take in January.",
   "Use <i>I'm going to, I'd like to, I'm determined to, I'm going to stop + -ing</i>."],
   out:"Your 3 SMART resolutions."}},

/* 30 */ {t:"Plan a Hogmanay party", c:"Шотландия", sk:"#reading #writing", tm:"25 мин",
 why:"Hogmanay - шотландский Новый год. Первый гость после полуночи приносит удачу и подарки: уголь, шортбред, соль.",
 res:[["What is Hogmanay?", YT("what is Hogmanay first footing explained")]],
 vocab:[["first-footing","первый гость после полуночи"],["threshold","порог"],["shortbread","песочное печенье"],["to bring good luck","приносить удачу"],["invitation","приглашение"],["guest list","список гостей"]],
 e:{steps:[
   "Посмотрите видео о Hogmanay.",
   "Напишите приглашение на свою новогоднюю вечеринку: <b>Come to my party! Date: … Time: … Bring…</b>",
   "Кто будет вашим first-foot? Что он принесёт?",
   "Составьте список гостей и меню по-английски."],
   out:"Ваше приглашение."},
 h:{steps:[
   "Learn about Hogmanay traditions: first-footing, Auld Lang Syne, fire festivals.",
   "Plan a Scottish-style New Year's Eve: guest list, menu, playlist, who will be your first-foot.",
   "Write a fun invitation message in English.",
   "Bonus: learn the first verse of Auld Lang Syne (it's a Burns poem from 1788, free online)."],
   out:"Your party plan and invitation."}},

/* 31 */ {t:"New Year's Eve countdown", c:"США, Шотландия и весь мир", sk:"#speaking #listening", tm:"сколько захочется", big:true,
 why:"Финал! Нью-Йорк встречает Новый год с шаром на Таймс-сквер (с 1907 года), Шотландия поёт Auld Lang Syne. А вы записываете поздравление по-английски.",
 res:[["Times Square ball drop", YT("Times Square ball drop countdown")], ["Auld Lang Syne", YT("Auld Lang Syne Hogmanay Edinburgh")]],
 vocab:[["countdown","обратный отсчёт"],["Cheers!","Ваше здоровье!"],["to make a toast","произнести тост"],["Here's to…","За…!"],["Happy New Year!","С Новым годом!"],["Auld Lang Syne","«Старые добрые времена»"]],
 e:{steps:[
   "Посмотрите видео с отсчётом на Таймс-сквер.",
   "Посчитайте вслух от 10 до 1 по-английски.",
   "Скажите тост: <b>Here's to a happy New Year! Cheers!</b>",
   "Запишите короткое видео-поздравление на английском и пришлите мне. С Новым годом!"],
   out:"Ваше видео-поздравление."},
 h:{steps:[
   "Watch the Times Square countdown and an Edinburgh Hogmanay celebration.",
   "Prepare a New Year toast in English: 4–6 sentences, warm and a bit funny.",
   "Say it at your table tonight, or record it.",
   "Look back at your bucket list from 5 December: what did you tick off? Happy New Year!"],
   out:"Your toast."}}
];

const ORDER = [7,15,2,21,11,18,26,4,23,9,1,28,13,20,6,24,16,30,3,10,22,27,12,5,19,29,14,25,8,17,31];
const STORE = "advent-english-2026-v3";

function mskNow(){ const d = new Date(Date.now() + 3*3600*1000); return {m:d.getUTCMonth(), d:d.getUTCDate()}; }
const preview = location.hash === "#preview";
function isOpen(n){ if (preview) return true; const t = mskNow(); return (t.m === 11 && t.d >= n) || t.m === 0; }
function isToday(n){ const t = mskNow(); return t.m === 11 && t.d === n; }

let state = {opened:[], stars:[], checks:{}};
try { state = Object.assign(state, JSON.parse(localStorage.getItem(STORE) || "{}")); } catch(e) {}
function save(){ try { localStorage.setItem(STORE, JSON.stringify(state)); } catch(e){} }
function addTo(list, n){ if (!state[list].includes(n)) { state[list].push(n); save(); } }
if (preview) document.getElementById("previewNote").hidden = false;

const g = document.getElementById("garland");
for (let i = 0; i < 26; i++) g.appendChild(Object.assign(document.createElement("span"), {className:"bulb"}));

const grid = document.getElementById("grid");
function renderGrid(){
  grid.innerHTML = "";
  ORDER.forEach(n => {
    const d = DAYS[n-1], b = document.createElement("button");
    const open = isOpen(n), opened = open && state.opened.includes(n);
    b.className = "gift" + (d.big ? " big" : "") + (open ? "" : " locked") + (isToday(n) && !opened ? " today" : "") + (opened ? " opened" : "") + (state.stars.includes(n) ? " star" : "");
    b.id = "gift-" + n;
    b.innerHTML = opened
      ? `<span class="tag"><span class="num">${n}</span><span class="lbl">${d.t}<br><span class="ctry">${d.c}</span></span></span>`
      : `<span class="tag"><span class="num">${n}</span>${d.big ? '<span class="bigl">New Year\'s Eve</span>' : ""}</span>`;
    b.setAttribute("aria-label", open ? `День ${n}: ${d.t}` : `День ${n}, откроется ${n} декабря`);
    b.addEventListener("click", () => openCard(n));
    grid.appendChild(b);
  });
  const c = state.opened.length, s = state.stars.length;
  document.getElementById("progText").textContent = `Открыто ${c} из 31 · выполнено ${s}`;
  document.getElementById("progBar").style.width = (s / 31 * 100) + "%";
}

const overlay = document.getElementById("overlay"), card = document.getElementById("card");
let lastId = null;

function openCard(n){
  lastId = "gift-" + n;
  if (!isOpen(n)) {
    card.innerHTML = `<button class="close" id="closeBtn" aria-label="Закрыть">×</button>
      <div class="lockmsg"><div class="big">🎁</div><h2 id="cardTitle">Не подглядывать!</h2>
      <p>Эта коробочка откроется ${n} декабря. А пока загляните в уже открытые.</p></div>`;
  } else {
    const d = DAYS[n-1];
    card.innerHTML = `<button class="close" id="closeBtn" aria-label="Закрыть">×</button>
      <div class="day">День ${n} · ${n} декабря · до Нового года ${31 - n === 0 ? "считанные часы!" : (31 - n) + " дн."}</div>
      <h2 id="cardTitle">Day ${n}: ${d.t}</h2>
      <div class="meta"><span class="m country">${d.c}</span><span class="m">⚒️ ${d.sk}</span><span class="m">⏰ ${d.tm}</span></div>
      <p class="why">${d.why}</p>
      <div class="res"><span class="reslbl">Материалы:</span>${d.res.map(r => `<a href="${r[1]}" target="_blank" rel="noopener">${r[0]} ↗</a>`).join("")}</div>
      <div class="tabs" role="tablist">
        <button class="tab" role="tab" aria-selected="true" data-l="e">A0–A2 · Easy</button>
        <button class="tab" role="tab" aria-selected="false" data-l="h">B1–B2 · Challenge</button>
      </div>
      <div id="task"></div>
      <details class="vocab"><summary>Словарь дня (${d.vocab.length} слов)</summary>
        <ul>${d.vocab.map(v => `<li><b>${v[0]}</b><span>${v[1]}</span></li>`).join("")}</ul></details>
      <p class="tg">Пришлите результат на проверку в <a href="${TG_LINK}" target="_blank" rel="noopener">Telegram @vulpiks_eng</a></p>`;
    card.querySelectorAll(".tab").forEach(t => t.addEventListener("click", () => renderLevel(n, t.dataset.l)));
    renderLevel(n, "e");
    addTo("opened", n);
  }
  overlay.classList.add("open");
  card.scrollTop = 0;
  document.getElementById("closeBtn").addEventListener("click", closeCard);
  document.getElementById("closeBtn").focus();
}

function renderLevel(n, l){
  card.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t.dataset.l === l));
  const L = DAYS[n-1][l], box = document.getElementById("task");
  const key = n + l;
  const checks = state.checks[key] || [];
  box.innerHTML = `<h3 class="follow">${l === "e" ? "Шаги" : "Follow the steps"}</h3>
    <ol class="steps">${L.steps.map((s, i) => `<li><label><input type="checkbox" id="ck-${key}-${i}" ${checks[i] ? "checked" : ""}><span>${s}</span></label></li>`).join("")}</ol>
    <div class="out"><b>${l === "e" ? "Итог дня" : "Your result"}:</b> ${L.out}</div>
    <p class="score" id="score" hidden></p>`;
  const boxes = [...box.querySelectorAll("input[type=checkbox]")];
  const update = (celebrate) => {
    const all = boxes.every(b => b.checked);
    const sc = document.getElementById("score");
    sc.hidden = !all;
    if (all) { sc.className = "score win"; sc.textContent = "День выполнен! Великолепно 🎉"; if (celebrate && !state.stars.includes(n)) { addTo("stars", n); confetti(); } }
  };
  boxes.forEach((b, i) => b.addEventListener("change", () => {
    state.checks[key] = boxes.map(x => x.checked); save(); update(true);
  }));
  update(false);
}

function closeCard(){ overlay.classList.remove("open"); renderGrid(); const el = lastId && document.getElementById(lastId); if (el) el.focus(); }
overlay.addEventListener("click", e => { if (e.target === overlay) closeCard(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && overlay.classList.contains("open")) closeCard(); });
window.addEventListener("hashchange", () => location.reload());

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const sc = document.getElementById("snow"), sx = sc.getContext("2d");
const cc = document.getElementById("confetti"), cx = cc.getContext("2d");
let flakes = [], bits = [];
function size(){ [sc, cc].forEach(c => { c.width = innerWidth; c.height = innerHeight; }); }
size(); addEventListener("resize", size);
for (let i = 0; i < 90; i++) flakes.push({x:Math.random()*innerWidth, y:Math.random()*innerHeight, r:Math.random()*2.4+.6, s:Math.random()*.7+.25, w:Math.random()*Math.PI*2});
function confetti(){
  if (reduce) return;
  const cols = ["#d23447","#f2c14e","#7fd1ae","#8fb7ff","#fff7ea"];
  for (let i = 0; i < 140; i++) bits.push({x:innerWidth/2, y:innerHeight*0.45, vx:(Math.random()-.5)*14, vy:Math.random()*-13-3, c:cols[i%5], r:Math.random()*Math.PI, life:110});
}
function frame(){
  sx.clearRect(0, 0, sc.width, sc.height); sx.fillStyle = "rgba(255,255,255,.75)";
  flakes.forEach(f => { f.y += f.s; f.w += .01; f.x += Math.sin(f.w)*.4; if (f.y > sc.height) { f.y = -5; f.x = Math.random()*sc.width; } sx.beginPath(); sx.arc(f.x, f.y, f.r, 0, 7); sx.fill(); });
  cx.clearRect(0, 0, cc.width, cc.height);
  bits = bits.filter(b => b.life-- > 0);
  bits.forEach(b => { b.vy += .35; b.x += b.vx; b.y += b.vy; b.r += .2; cx.save(); cx.translate(b.x, b.y); cx.rotate(b.r); cx.fillStyle = b.c; cx.fillRect(-4, -2, 8, 4); cx.restore(); });
  requestAnimationFrame(frame);
}
if (!reduce) frame(); else { sx.fillStyle = "rgba(255,255,255,.6)"; flakes.forEach(f => { sx.beginPath(); sx.arc(f.x, f.y, f.r, 0, 7); sx.fill(); }); }
renderGrid();
