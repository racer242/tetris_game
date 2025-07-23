export const registerGamepadEvents = (gamepad, gamepadEventHandler) => {
  gamepad
    .on("button0", (event) => {
      gamepadEventHandler("button0", "pressed");
    })
    .before("button0", () => {
      gamepadEventHandler("button0", "down");
    })
    .after("button0", () => {
      gamepadEventHandler("button0", "up");
    });

  gamepad
    .on("button1", () => {
      gamepadEventHandler("button1", "pressed");
    })
    .before("button1", () => {
      gamepadEventHandler("button1", "down");
    })
    .after("button1", () => {
      gamepadEventHandler("button1", "up");
    });

  gamepad
    .on("button2", () => {
      gamepadEventHandler("button2", "pressed");
    })
    .before("button2", () => {
      gamepadEventHandler("button2", "down");
    })
    .after("button2", () => {
      gamepadEventHandler("button2", "up");
    });

  gamepad
    .on("button3", () => {
      gamepadEventHandler("button3", "pressed");
    })
    .before("button3", () => {
      gamepadEventHandler("button3", "down");
    })
    .after("button3", () => {
      gamepadEventHandler("button3", "up");
    });

  gamepad
    .on("button4", () => {
      gamepadEventHandler("button4", "pressed");
    })
    .before("button4", () => {
      gamepadEventHandler("button4", "down");
    })
    .after("button4", () => {
      gamepadEventHandler("button4", "up");
    });

  // gamepad
  //   .on("button5", () => {
  //     gamepadEventHandler("button5", "pressed");
  //   })
  //   .before("button5", () => {
  //     gamepadEventHandler("button5", "down");
  //   })
  //   .after("button5", () => {
  //     gamepadEventHandler("button5", "up");
  //   });

  // gamepad
  //   .on("button6", () => {
  //     gamepadEventHandler("button6", "pressed");
  //   })
  //   .before("button6", () => {
  //     gamepadEventHandler("button6", "down");
  //   })
  //   .after("button6", () => {
  //     gamepadEventHandler("button6", "up");
  //   });

  // gamepad
  //   .on("button7", () => {
  //     gamepadEventHandler("button7", "pressed");
  //   })
  //   .before("button7", () => {
  //     gamepadEventHandler("button7", "down");
  //   })
  //   .after("button7", () => {
  //     gamepadEventHandler("button7", "up");
  //   });

  // gamepad
  //   .on("button8", () => {
  //     gamepadEventHandler("button8", "pressed");
  //   })
  //   .before("button8", () => {
  //     gamepadEventHandler("button8", "down");
  //   })
  //   .after("button8", () => {
  //     gamepadEventHandler("button8", "up");
  //   });

  // gamepad
  //   .on("button9", () => {
  //     gamepadEventHandler("button9", "pressed");
  //   })
  //   .before("button9", () => {
  //     gamepadEventHandler("button9", "down");
  //   })
  //   .after("button9", () => {
  //     gamepadEventHandler("button9", "up");
  //   });

  // gamepad
  //   .on("button10", () => {
  //     gamepadEventHandler("button10", "pressed");
  //   })
  //   .before("button10", () => {
  //     gamepadEventHandler("button10", "down");
  //   })
  //   .after("button10", () => {
  //     gamepadEventHandler("button10", "up");
  //   });

  // gamepad
  //   .on("button11", () => {
  //     gamepadEventHandler("button11", "pressed");
  //   })
  //   .before("button11", () => {
  //     gamepadEventHandler("button11", "down");
  //   })
  //   .after("button11", () => {
  //     gamepadEventHandler("button11", "up");
  //   });

  // gamepad
  //   .on("button12", () => {
  //     gamepadEventHandler("button12", "pressed");
  //   })
  //   .before("button12", () => {
  //     gamepadEventHandler("button12", "down");
  //   })
  //   .after("button12", () => {
  //     gamepadEventHandler("button12", "up");
  //   });

  // gamepad
  //   .on("button13", () => {
  //     gamepadEventHandler("button13", "pressed");
  //   })
  //   .before("button13", () => {
  //     gamepadEventHandler("button13", "down");
  //   })
  //   .after("button13", () => {
  //     gamepadEventHandler("button13", "up");
  //   });

  // gamepad
  //   .on("button14", () => {
  //     gamepadEventHandler("button14", "pressed");
  //   })
  //   .before("button14", () => {
  //     gamepadEventHandler("button14", "down");
  //   })
  //   .after("button14", () => {
  //     gamepadEventHandler("button14", "up");
  //   });

  // gamepad
  //   .on("button15", () => {
  //     gamepadEventHandler("button15", "pressed");
  //   })
  //   .before("button15", () => {
  //     gamepadEventHandler("button15", "down");
  //   })
  //   .after("button15", () => {
  //     gamepadEventHandler("button15", "up");
  //   });

  // gamepad
  //   .on("button16", () => {
  //     gamepadEventHandler("button16", "pressed");
  //   })
  //   .before("button16", () => {
  //     gamepadEventHandler("button16", "down");
  //   })
  //   .after("button16", () => {
  //     gamepadEventHandler("button16", "up");
  //   });

  gamepad
    .on("up0", () => {
      gamepadEventHandler("up0", "pressed");
    })
    .before("up0", () => {
      gamepadEventHandler("up0", "down");
    })
    .after("up0", () => {
      gamepadEventHandler("up0", "up");
    });

  gamepad
    .on("down0", () => {
      gamepadEventHandler("down0", "pressed");
    })
    .before("down0", () => {
      gamepadEventHandler("down0", "down");
    })
    .after("down0", () => {
      gamepadEventHandler("down0", "up");
    });

  gamepad
    .on("right0", () => {
      gamepadEventHandler("right0", "pressed");
    })
    .before("right0", () => {
      gamepadEventHandler("right0", "down");
    })
    .after("right0", () => {
      gamepadEventHandler("right0", "up");
    });

  gamepad
    .on("left0", () => {
      gamepadEventHandler("left0", "pressed");
    })
    .before("left0", () => {
      gamepadEventHandler("left0", "down");
    })
    .after("left0", () => {
      gamepadEventHandler("left0", "up");
    });

  gamepad
    .on("up1", () => {
      gamepadEventHandler("up1", "pressed");
    })
    .before("up1", () => {
      gamepadEventHandler("up1", "down");
    })
    .after("up1", () => {
      gamepadEventHandler("up1", "up");
    });

  gamepad
    .on("down1", () => {
      gamepadEventHandler("down1", "pressed");
    })
    .before("down1", () => {
      gamepadEventHandler("down1", "down");
    })
    .after("down1", () => {
      gamepadEventHandler("down1", "up");
    });

  gamepad
    .on("right1", () => {
      gamepadEventHandler("right1", "pressed");
    })
    .before("right1", () => {
      gamepadEventHandler("right1", "down");
    })
    .after("right1", () => {
      gamepadEventHandler("right1", "up");
    });

  gamepad
    .on("left1", () => {
      gamepadEventHandler("left1", "pressed");
    })
    .before("left1", () => {
      gamepadEventHandler("left1", "down");
    })
    .after("left1", () => {
      gamepadEventHandler("left1", "up");
    });

  // gamepad
  //   .on("start", () => {
  //     gamepadEventHandler("start", "pressed");
  //   })
  //   .before("start", () => {
  //     gamepadEventHandler("start", "down");
  //   })
  //   .after("start", () => {
  //     gamepadEventHandler("start", "up");
  //   });

  // gamepad
  //   .on("select", () => {
  //     gamepadEventHandler("select", "pressed");
  //   })
  //   .before("select", () => {
  //     gamepadEventHandler("select", "down");
  //   })
  //   .after("select", () => {
  //     gamepadEventHandler("select", "up");
  //   });

  // gamepad
  //   .on("power", () => {
  //     gamepadEventHandler("power", "pressed");
  //   })
  //   .before("power", () => {
  //     gamepadEventHandler("power", "down");
  //   })
  //   .after("power", () => {
  //     gamepadEventHandler("power", "up");
  //   });

  gamepad
    .on("l1", () => {
      gamepadEventHandler("l1", "pressed");
    })
    .before("l1", () => {
      gamepadEventHandler("l1", "down");
    })
    .after("l1", () => {
      gamepadEventHandler("l1", "up");
    });

  gamepad
    .on("l2", () => {
      gamepadEventHandler("l2", "pressed");
    })
    .before("l2", () => {
      gamepadEventHandler("l2", "down");
    })
    .after("l2", () => {
      gamepadEventHandler("l2", "up");
    });

  gamepad
    .on("r1", () => {
      gamepadEventHandler("r1", "pressed");
    })
    .before("r1", () => {
      gamepadEventHandler("r1", "down");
    })
    .after("r1", () => {
      gamepadEventHandler("r1", "up");
    });

  gamepad
    .on("r2", () => {
      gamepadEventHandler("r2", "pressed");
    })
    .before("r2", () => {
      gamepadEventHandler("r2", "down");
    })
    .after("r2", () => {
      gamepadEventHandler("r2", "up");
    });

  gamepad
    .on("up", () => {
      gamepadEventHandler("up", "pressed");
    })
    .before("up", () => {
      gamepadEventHandler("up", "down");
    })
    .after("up", () => {
      gamepadEventHandler("up", "up");
    });

  gamepad
    .on("down", () => {
      gamepadEventHandler("down", "pressed");
    })
    .before("down", () => {
      gamepadEventHandler("down", "down");
    })
    .after("down", () => {
      gamepadEventHandler("down", "up");
    });

  gamepad
    .on("right", () => {
      gamepadEventHandler("right", "pressed");
    })
    .before("right", () => {
      gamepadEventHandler("right", "down");
    })
    .after("right", () => {
      gamepadEventHandler("right", "up");
    });

  gamepad
    .on("left", () => {
      gamepadEventHandler("left", "pressed");
    })
    .before("left", () => {
      gamepadEventHandler("left", "down");
    })
    .after("left", () => {
      gamepadEventHandler("left", "up");
    });
};

export const clearGamepadEvents = (gamepad) => {
  gamepad.off("button0");
  gamepad.off("button1");
  gamepad.off("button2");
  gamepad.off("button3");
  gamepad.off("button4");
  // gamepad.off("button5");
  // gamepad.off("button6");
  // gamepad.off("button7");
  // gamepad.off("button8");
  // gamepad.off("button9");
  // gamepad.off("button10");
  // gamepad.off("button11");
  // gamepad.off("button12");
  // gamepad.off("button13");
  // gamepad.off("button14");
  // gamepad.off("button15");
  // gamepad.off("button16");

  gamepad.off("up0");
  gamepad.off("down0");
  gamepad.off("right0");
  gamepad.off("left0");

  gamepad.off("up1");
  gamepad.off("down1");
  gamepad.off("right1");
  gamepad.off("left1");

  // gamepad.off("start");
  // gamepad.off("select");
  // gamepad.off("power");

  gamepad.off("l1");
  gamepad.off("l2");

  gamepad.off("r1");
  gamepad.off("r2");

  gamepad.off("up");
  gamepad.off("down");
  gamepad.off("right");
  gamepad.off("left");
};
