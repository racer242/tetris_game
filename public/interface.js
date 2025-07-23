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

// Просто переменная - используется внутри этого файла для удобства,
// передается ниже в конфигурацию, сама на приложение не влияет
window.userAuthorized = false; //true; false;

// Также функция для использования внутри этого файла, заглушка
// Имитирует закрытие попапа с игрой
window.closeGamePopup = function () {
  console.log("closeGamePopup");
};

// Также функция для использования внутри этого файла, заглушка
// Имитирует переход к регистрации чека
window.registerBill = function () {
  console.log("registerBill");
};

// Также функция для использования внутри этого файла, заглушка
// Имитирует переход к регистрации пользователя
window.signUp = function () {
  console.log("signUp");
};

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
      // id - для передачи кода игры
      // request1 - запрос до старта
      // request2 - запрос после старта
      1: {
        id: "TETRIS",

        restartTimeout: 15000,

        startDelay: 100,
        stepDelay: 10,

        nextScreenKey: "Space",
        nextScreenButton: "button0",

        testScreenKey: "KeyT",
        testScreenButton: "button1",

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

        // buttons: {
        //   button0: "",
        //   button1: "",
        //   button2: "",
        //   button3: "",
        //   button4: "",
        //   button5: "",
        //   button6: "",
        //   button7: "",
        //   button8: "",
        //   button9: "",
        //   button10: "",
        //   button11: "",
        //   button12: "",
        //   button13: "",
        //   button14: "",
        //   button15: "",
        //   button16: "",
        //   up0: "",
        //   down0: "",
        //   right0: "",
        //   left0: "",
        //   up1: "",
        //   down1: "",
        //   right1: "",
        //   left1: "",
        //   start: "",
        //   select: "",
        //   power: "",
        //   l1: "",
        //   l2: "",
        //   r1: "",
        //   r2: "",
        //   up: "",
        //   down: "",
        //   right: "",
        //   left: "",
        // },
      },
      // Это индекс игр для быстрой идентификации внутри приложения
      index: { TETRIS: 1 },
    },
    switchToMobileWidth: 1080,
  };

  // Передается номер текущей игры (внутри приложения игры идентифицируются по номерам)
  data.gameIndex = data.games.index[window.gameId];
  // Передаются данные текущей игры
  data.gameData = data.games[data.gameIndex];

  app.setData(data);
}
