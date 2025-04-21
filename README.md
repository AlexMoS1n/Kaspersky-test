# Kaspersky test  

## Выполнение тестового задания Мосиным Александром Сергеевичем для Kaspersky  
[Ссылка на репозиторий](https://github.com/AlexMoS1n/Kaspersky-test)  

## Установка и просмотр работы
После клонирования репозитория зайдите в папку проекта и выполните команду в терминале:  
```
npm i  
```
Компонент SnippetNews можно просмотреть в режиме разработки (компонент добавлен в App.tsx), набрав и запустив в терминале команду:
```
npm run dev  
```
Также компонент SnippetNews можно просмотреть в storybook:
```
npm run storybook  
```

## Описание выполненной работы
1. Работы выполнялась в соответствии с представленным макетом
2. Данные пропса компонента подставлены в соответствующие области
3. Область сантимента новости заполняется зеленым цветом, в случае если пропс snippetNewsProps.SENT приходит в значении 'positive', в противном случае в красный (как в моковых данных в значении 'negative')
4. Если текста больше двух абзацев, то текст сокращается и появляется клавиша 'Show more' для развертывания всего текста, чтобы свернуть нужно нажать на 'Show less'
5. Если тегов больше 6, то вывод сокращается до 6 тегов и появляется надпись 'Show all' с показателем количества оставшихся нераскрытых тегов. Нажав на 'Show all', станет доступен вывод всех тегов
6. Кнопка 'By Relevance' сортирует дублирующие новости по дате, а 'By Relevance' раскрывает скрытые дублирующие новости (изначально лишь одна дублирующа новость открыта, остальные скрыты)

## Нюансы, возникшие при выполнении тестового задания
1. Непонятно чем отличается пропс 'AB' (содержание новости) от 'HIGHLIGHTS' (блоки содержимого новости с ключевыми словами). Так как в шаблоне выведен контент с выделенными тегами, то использовался 'HIGHLIGHTS'
2. Какие-то теги в шаблоне проставлены с иконками, какие-то нет. Иконки не соответствуют содержимому тега, поэтому было принято решение сделать теги без иконок 
3. В шаблоне имеется блок с дублирующими новостями (схожими), однако интерфейс представленный в задании и соответствующие моковые данные не представляют возможным создание такого блока, поэтому был дополнительно введен пропс 'DUPLICATES'

## Требования и описание задания Web-разработчик (стажёр) в Kaspersky

### Основные навыки:
•	Javascript, HTML, CSS, 
•	React, Ant design 

### Дополнительно (приветствуется):
•	Typescript, SCSS,
•	Redux | MobX | Effector,
•	Highcharts

### Задачи:
•	создание компонент на основании предоставляемого от дизайнера макетов,

### Задачи (дополнительные):
•	создание функционала работы с данными,
•	оптимизация существующих решений

### Тестовое задание:
На основе предоставленного скриншота (см. ниже) реализовать компонент отображения блока новости. Постараться сделать дизайн наиболее близко к исходному изображению. 
Компоненту должны передаваться следующие поля:
```
// интерфейс для данных о новостях
export interface IData_SnippetNews {
    ID              : number                    // идентификатор новости
    TI              : string                    // заголовок новости
    AB              : string                    // содержимое новости
    URL             : string                    // ссылка на новость
    DOM             : string                    // домен
    DP              : string                    // дата и время публикации новости в формате "%Y-%m-%dT%H:%M:%S")
    LANG            : string                    // язык новости
    REACH           : number                    // охват новости
    KW              : IData_TagItem[]           // ключевые слова
    AU              : string[]                  // автор новости
    CNTR            : string                    // страна
    CNTR_CODE       : string                    // код страны
    SENT            : string                    // сантимент новости
    TRAFFIC         : IData_TrafficItem[]       // траффик из стран
    FAV             : string                    // ссылка на иконку
    HIGHLIGHTS      : string[]                  // блоки содержимого новости с ключевыми словами
}

// тэг для сниппета
export interface IData_TagItem {
    value       : string                        // название тега
    count       : number                        // кол-во тегов с указанным названием
}

// траффик для сниппета
export interface IData_TrafficItem {
    value       : string                        // название страны-источник траффика
    count       : number                        // объём траффика для указанной страны
}
```
 
Пример данных:
```
{
    "ID": 260855433,
    "TI": "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones",
    "AB": "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones\nAugust 2020 by Kaspersky\nNew research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by Kaspersky, nearly half (47%) of smartphone owners who use a banking app don’t protect their mobile device with antivirus or security sof...",
    "URL": "https://www.globalsecuritymag.com/Mobile-bankers-left-vulnerable-47,20200819,101944.html",
    "DP": "2025-03-06T21:00:00",
    "DOM": "globalsecuritymag.com",
    "SENT": "negative",
    "LANG": "en",
    "AU": [],
    "FAV": "/favicons/e65d69dc71ab539384fcc63062efdd3d.png",
    "KW": [
        {
            "value": "antivirus",
            "count": 10
        },
        {
            "value": "kaspersky",
            "count": 5
        },
        {
            "value": "new",
            "count": 1
        }
    ],
    "HIGHLIGHTS": [
        "…20 by <kw>Kaspersky</kw> <kw>New</kw> research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by <kw>Kaspersky</kw>…",
        "…with <kw>antivirus</kw> or security software. More than half (52%) of UK smartphone owners who access bank accounts with their mobile device are worried about their banking app being hacked if their phone was lost or stolen. Despite that fear, 47%[2] are banking on devices without <kw>antivirus</kw>…",
        "…hone with <kw>antivirus</kw> protection. Surprisingly, one fifth (21%) of adults overall, and one third (33%) of Generation Z, believe their phone can’t be hacked, despite the level of mobile malware attacks rising over the past 12 months. Around two-in-five of those without <kw>antivirus</kw> and s…"
    ],
    "REACH": 2392,
    "CNTR": "France",
    "CNTR_CODE": "fr",
    "TRAFFIC": [
        {
            "value": "India",
            "count": 0.779
        },
        {
            "value": "United States of America",
            "count": 0.101
        },
        {
            "value": "Mexico",
            "count": 0.036
        }
    ]
}
```
Использовать инструментарий: Javascript/Typescript, CSS/SCSS, React, Ant Design.
Приветствуется компактный, но при этом читабельный код.  
 
![Макет задания](https://github.com/AlexMoS1n/Kaspersky-test/blob/main/src/assets/test.png)