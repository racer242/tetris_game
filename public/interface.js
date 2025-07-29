// Этот файл содержит всё для взаимодействия с окружением

// В index.html - пример размещения приложения в контейнере на странице
// Приложение загружается в тег с id="root"
// класс game нужен для изолирования базовых стилей
// <div id="container" style="position: absolute;left:100px;top:100px;right: 100px; bottom: 100px;">
//   <div id="root" class="game" oninit="onAppReadyHandler"></div>
// </div>

// Просто переменная - используется внутри этого файла для удобства,
// передается ниже в конфигурацию, сама на приложение не влияет
window.gameId = "TETRIS";

// Функция инициализации приложения. Вызывается из обработчика в Index.html,
// см. <div id="root" class="game" oninit="onAppReadyHandler">
function onAppReadyHandler(app) {
  // Функция обработки ресайза страницы.
  // Берется элемент-контейнер и передается его размер в приложение.
  // Это как пример, реализация может быть любой, главное, передать размеры для приложения
  function updateLayout() {
    var container = document.getElementById("container");
    app.resize(container.clientWidth, container.clientHeight);
  }
  updateLayout();

  // Инициализация веб-страницы
  // Обновление размеров приложения при готовности страницы
  function initHandler() {
    updateLayout();
  }

  // Ресайз веб-страницы
  // Обновление размеров приложения при ресайзе страницы
  function resizeHandler() {
    updateLayout();
  }

  // Подписываемся на события изменения, чтобы вызывать updateLayout
  // Обновление размеров приложения можно делать и иначе -
  // здесь просто пример использования
  window.addEventListener("load", initHandler);
  window.addEventListener("resize", resizeHandler);

  // Настройки приложения
  var data = {
    // Это список настроек для обмена данными игр
    games: {
      1: {
        id: "TETRIS",

        // Показывать вместо заставки видео-ролик
        videoIntro: {
          show: true,
          src: "./video/intro.mp4",
        },

        // Показывать видео-заставку - с настройкой параметров или null
        videoCover: {
          show: false,
          blur: 10,
          opacity: 0.6,
        },

        // Настройка звуковых эффектов
        sound: {
          clear: { volume: 0.6 },
          countdown: {},
          down: { volume: 0.4 },
          gameover: {},
          move: { volume: 0.4 },
          music: { volume: 0.3 },
          pause: {},
          place: { volume: 0.4 },
          rotate: { volume: 0.2 },
          title: { volume: 0.3 },
        },

        // Общая настройка звука
        soundParameters: {
          volume: 0.5,
        },

        // Использовать фоновую анимацию в принципе
        animation: true,
        // Показывать анимацию на главном скрине
        animationonMainScreen: false,
        // Показывать анимацию на игровом скрине
        animationOnGameScreen: true,

        // Задержка до авто-рестарта игры на экране финальных очков
        restartTimeout: 15000,

        // Настройки задержек джойстика принцип работы:
        // down:GO -> press*startDelay:(press*stepDelay:GO) -> up:RESET
        startDelay: 10,
        stepDelay: 0,

        // Настроки скорости игры по формуле:
        // speed = base + level / getLevel()
        speed: {
          base: 80, //80,
          level: 1000, //700,
        },

        // Настройки начисления очков за призовые ситуации
        score: {
          // Заполнены линии. За одну линию. Формула:
          // score = getScore() + fullLine * getLevel() * lines
          fullLine: 100, //1000,
          // Принудительно опущена фигура. За одну линию. Формула:
          // score = getScore() + moveDown + getLevel()
          moveDown: 1, //5,
        },

        // Настройки увеличения уровня игры. Рассчитываются по формуле:
        // getPuzzles() >= minPuzzles + this.tetris.stats.getLevel() * levelFactor
        level: {
          puzzles: 20, //10,
          factor: 2, //2,
        },

        // Клавиша или кнопка для старта игры
        nextScreenKey: "Space",
        nextScreenButton: "button0",

        // Клавиша или кнопка для перехода на тестовый экран
        testScreenKey: "KeyT",
        testScreenButton: "button1",

        // Клавиши или кнопки управления игрой
        leftKey: "ArrowLeft",
        leftButton: "button0",
        rightKey: "ArrowRight",
        rightButton: "button1",
        rotateKey: "ArrowUp",
        rotateButton: "button2",
        downKey: "ArrowDown",
        downButton: "button3",
        dropKey: "Space",
        dropButton: null,
        resetKey: "KeyR",
        resetButton: "l1",
        pauseKey: "KeyP",
        pauseButton: "r1",

        //Возможные кнопки джойстика:
        // button0, button1, button2, button3, button4,
        // button5, button6, button7, button8, button9,
        // button10, button11, button12, button13, button14,
        // button15, button16, up0, down0, right0, left0,
        // up1, down1, right1, left1, start, select, power,
        // l1, l2, r1, r2, up, down, right, left,
      },

      // Это индекс игр для быстрой идентификации внутри приложения
      index: { TETRIS: 1 },
    },

    //Переключение на мобильную верстку при ширине:
    switchToMobileWidth: 1080,
  };

  // Передается номер текущей игры (внутри приложения игры идентифицируются по номерам)
  data.gameIndex = data.games.index[window.gameId];
  // Передаются данные текущей игры
  data.gameData = data.games[data.gameIndex];

  app.setData(data);
}
