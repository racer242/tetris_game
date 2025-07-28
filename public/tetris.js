(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.buildings = function() {
	this.initialize(img.buildings);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1920);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,496,108);


(lib.tower = function() {
	this.initialize(img.tower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,1160);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.498)","rgba(255,255,255,0.4)","rgba(255,255,255,0)"],[0,0.502,1],0,421.7,0,-421.6).s().p("EgEmBB5MgEniDxISbAAMgEnCDxg");
	this.shape.setTransform(0.025,-421.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ray, new cjs.Rectangle(-58.9,-843.3,117.9,843.3), null);


(lib.moscow2030 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgIYIgcgcIAcgcIB5AAIAcAcIgcAcgAk6IYIgcgcIAcgcICeAAIAdAcIgdAcgApKIYIgcgcIAcgcIB5AAIAcAcIgcAcgAuAIYIgbgcIAbgcICfAAIAcAcIgcAcgACiHWIAAiDIAcgcIAcAcIAACDIgcAcgAghHWIAAiDIAcgcIAaAcIAACDIgaAcgAiSHWIAAiDIAcgcIAbAcIAACDIgbAcgAnIHWIAAiDIAcgcIAcAcIAACDIgcAcgAqMHWIAAiDIAcgcIAbAcIAACDIgbAcgAvBHWIAAiDIAbgcIAcAcIAACDIgcAcgAkVFJIgbgbIAbgcIB6AAIAcAcIgcAbgAuAFJIgbgbIAbgcIB6AAIAcAcIgcAbgAghEIIAAiEIAcgbIAaAcIAACDIgaAdgAqMEIIAAiEIAcgbIAbAcIAACDIgbAdgACiEHIAAiCIAcgcIAcAcIAACCIgcAdgAiSEHIAAiCIAcgcIAbAcIAACCIgbAdgAnIEHIAAiCIAcgcIAcAcIAACCIgcAdgAr9EHIAAiCIAcgcIAbAcIAACCIgbAdgAAgB7IgcgcIAbgbIB6AAIAcAcIgcAbgAk6B7IgcgcIAbgbICfAAIAdAcIgdAbgApKB7IgcgcIAbgbIB6AAIAcAcIgcAbgAulB7IgcgcIAbgbICfAAIAdAcIgdAbgAGchCIA3g4IB5AAIAcAcIgcAcgAiXhCIgcgcIAcgcIB5AAIAcAcIgcAcgAnNhCIgbgcIAbgcIB5AAIAdAcIgdAcgAOLhhIAAimIAeggIAZAAIAADGIgbAcgAEghhIAAimIAeggIAZAAIAADGIgbAcgAp1hhIAAimIAeggIAZAAIAADGIgbAcgALHhhIAAjGIAYAAIAfAgIAACmIgcAcgABchhIAAjGIAYAAIAfAgIAACmIgcAcgAvBhhIAAjGIAYAAIAfAgIAACmIgcAcgAGRkjIAcAAIAbAcIAACDIg3A4gAJViEIAAiDIAcgcIAcAcIAACDIgcAcgAgViEIAAgcIAbgbIAcAbIAAAcIgcAcgAjZiEIAAifIAcAAIAbAcIAACDIgbAcgAlKiEIAAiDIAcgcIAbAcIAACDIgbAcgAoOiEIAAiDIAbgcIAcAcIAACDIgcAcgAMIkRIgbgbIAbgcIB6AAIAcAcIgcAbgAHTkRIgcgbIAcgcIB5AAIAdAcIgdAbgACdkRIgbgbIAbgcIB6AAIAcAcIgcAbgAOpkzIgeggIAAiCIAcgcIAbAcIAACigALHkzIAAijIAbgbIAcAcIAACCIgfAggABckzIAAjIIAbgbIAcAcIAACnIgfAggApXkzIgeggIAAioIAcgbIAbAbIAADIgAvBkzIAAjIIAbgbIAcAcIAACnIgfAggAGRk1IAAjXIA3A3IAACDIgbAdgAjZk1IAAihIAcgbIAbAcIAACDIgbAdgAoOlSIAAiEIAbgbIAcAcIAACDIgcAdgAJVlTIAAiCIAcgcIAcAcIAACCIgcAdgAlKlTIAAiCIAcgcIAbAcIAACCIgbAdgAChlcIAAgiICViWIAiAAIAAAjIiUCVgAr5mSIBUhUIApgBIAAAnIhXBWIgmABgAstlqIhWhWIAAgnIAoABIBVBUIAAApgAgVm6IAAgbIAbgcIAcAcIAAAbIgcAbgAMInfIgcgcIAcgbIB5AAIAdAcIgdAbgAHTnfIg4g3ICxAAIAcAcIgcAbgAiXnfIgcgcIAbgbIB6AAIAcAcIgcAbgAnNnfIgcgcIAcgbIB5AAIAdAcIgdAbg");
	this.shape.setTransform(0.225,-0.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.moscow2030, new cjs.Rectangle(-98,-61,203,122.6), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(-248,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-248,-54,496,108), null);


(lib.h_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.8)","rgba(255,255,255,0.8)","rgba(255,255,255,0)"],[0,0.29,0.698,1],-452.4,0,452.5,0).s().p("EhGrAAKIAAgTMCNXAAAIAAATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.h_line, new cjs.Rectangle(-452.4,-1,904.9,2), null);


(lib.flare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.8)","rgba(255,255,255,0)"],[0,0.514,1],-49.9,0,50.1,0).s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flare, new cjs.Rectangle(-50,-50,100,100), null);


(lib.curtain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBLIAAiVICVAAIAACVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.curtain, new cjs.Rectangle(-7.5,-7.5,15,15), null);


(lib.windows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// curtain
	this.instance = new lib.curtain();
	this.instance.setTransform(-464.95,622.5,0.8064,1);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 65, 32, 134, 0)];
	this.instance.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},29).wait(171));

	// curtain
	this.instance_1 = new lib.curtain();
	this.instance_1.setTransform(-460.45,437.05,0.8064,1);
	this.instance_1._off = true;
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 71, 2, 145, 0)];
	this.instance_1.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61).to({_off:false},0).to({_off:true},29).wait(110));

	// curtain
	this.instance_2 = new lib.curtain();
	this.instance_2.setTransform(-457.2,584.15,0.8064,1);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 62, 2, 125, 0)];
	this.instance_2.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({_off:true},29).wait(136));

	// curtain
	this.instance_3 = new lib.curtain();
	this.instance_3.setTransform(-388.25,588.05,1.2177,1,0,0,0,0.1,0);
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 91, 2, 153, 0)];
	this.instance_3.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({_off:true},29).wait(159));

	// curtain
	this.instance_4 = new lib.curtain();
	this.instance_4.setTransform(-424.15,584.15,0.8064,1);
	this.instance_4._off = true;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 91, 2, 153, 0)];
	this.instance_4.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(94).to({_off:false},0).to({_off:true},29).wait(77));

	// curtain
	this.instance_5 = new lib.curtain();
	this.instance_5.setTransform(-424.15,533.7,0.8064,1);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 108, 2, 159, 0)];
	this.instance_5.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},29).wait(171));

	// curtain
	this.instance_6 = new lib.curtain();
	this.instance_6.setTransform(-385.25,530.1,0.8064,1);
	this.instance_6._off = true;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 104, 0, 157, 0)];
	this.instance_6.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(62).to({_off:false},0).to({_off:true},63).wait(75));

	// curtain
	this.instance_7 = new lib.curtain();
	this.instance_7.setTransform(-401.25,530.1,0.8064,1);
	this.instance_7._off = true;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 106, 1, 159, 0)];
	this.instance_7.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({_off:true},50).wait(130));

	// curtain
	this.instance_8 = new lib.curtain();
	this.instance_8.setTransform(-401.25,479.5,0.8064,1);
	this.instance_8._off = true;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 118, 1, 164, 0)];
	this.instance_8.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(56).to({_off:false},0).to({_off:true},41).wait(103));

	// curtain
	this.instance_9 = new lib.curtain();
	this.instance_9.setTransform(-362.35,352.15,0.8064,1);
	this.instance_9._off = true;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 89, 27, 163, 0)];
	this.instance_9.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(35).to({_off:false},0).to({_off:true},73).wait(92));

	// curtain
	this.instance_10 = new lib.curtain();
	this.instance_10.setTransform(-361.95,415.05,0.8064,1);
	this.instance_10._off = true;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 85, 33, 164, 0)];
	this.instance_10.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(12).to({_off:false},0).to({_off:true},35).wait(153));

	// curtain
	this.instance_11 = new lib.curtain();
	this.instance_11.setTransform(-355.85,518.7,0.8064,1);
	this.instance_11.filters = [new cjs.ColorFilter(0, 0, 0, 1, 75, 44, 168, 0)];
	this.instance_11.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},29).wait(171));

	// curtain
	this.instance_12 = new lib.curtain();
	this.instance_12.setTransform(388.75,472.4);
	this.instance_12._off = true;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 90, 2, 120, 0)];
	this.instance_12.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(111).to({_off:false},0).to({_off:true},47).wait(42));

	// curtain
	this.instance_13 = new lib.curtain();
	this.instance_13.setTransform(434.1,577.6);
	this.instance_13._off = true;
	this.instance_13.filters = [new cjs.ColorFilter(0, 0, 0, 1, 85, 1, 152, 0)];
	this.instance_13.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(34).to({_off:false},0).to({_off:true},65).wait(101));

	// curtain
	this.instance_14 = new lib.curtain();
	this.instance_14.setTransform(415.25,495.3);
	this.instance_14._off = true;
	this.instance_14.filters = [new cjs.ColorFilter(0, 0, 0, 1, 85, 1, 134, 0)];
	this.instance_14.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(44).to({_off:false},0).to({_off:true},82).wait(74));

	// curtain
	this.instance_15 = new lib.curtain();
	this.instance_15.setTransform(400.25,495.3);
	this.instance_15._off = true;
	this.instance_15.filters = [new cjs.ColorFilter(0, 0, 0, 1, 85, 1, 134, 0)];
	this.instance_15.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(6).to({_off:false},0).to({_off:true},29).wait(165));

	// curtain
	this.instance_16 = new lib.curtain();
	this.instance_16.setTransform(487.9,382.6);
	this.instance_16._off = true;
	this.instance_16.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_16.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30).to({_off:false},0).to({_off:true},45).wait(125));

	// curtain
	this.instance_17 = new lib.curtain();
	this.instance_17.setTransform(517.9,382.6);
	this.instance_17._off = true;
	this.instance_17.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_17.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(88).to({_off:false},0).to({_off:true},55).wait(57));

	// curtain
	this.instance_18 = new lib.curtain();
	this.instance_18.setTransform(479.55,276.3);
	this.instance_18.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_18.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},29).wait(171));

	// curtain
	this.instance_19 = new lib.curtain();
	this.instance_19.setTransform(511.3,183.2);
	this.instance_19._off = true;
	this.instance_19.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_19.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(63).to({_off:false},0).to({_off:true},41).wait(96));

	// curtain
	this.instance_20 = new lib.curtain();
	this.instance_20.setTransform(500.3,178.3);
	this.instance_20._off = true;
	this.instance_20.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_20.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(14).to({_off:false},0).to({_off:true},29).wait(157));

	// curtain
	this.instance_21 = new lib.curtain();
	this.instance_21.setTransform(500.3,92.25);
	this.instance_21._off = true;
	this.instance_21.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_21.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(50).to({_off:false},0).to({_off:true},29).wait(121));

	// curtain
	this.instance_22 = new lib.curtain();
	this.instance_22.setTransform(482.15,59.85);
	this.instance_22._off = true;
	this.instance_22.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_22.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(8).to({_off:false},0).to({_off:true},29).wait(163));

	// curtain
	this.instance_23 = new lib.curtain();
	this.instance_23.setTransform(502.9,70.65);
	this.instance_23._off = true;
	this.instance_23.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_23.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(33).to({_off:false},0).to({_off:true},93).wait(74));

	// curtain
	this.instance_24 = new lib.curtain();
	this.instance_24.setTransform(482.15,16.25);
	this.instance_24._off = true;
	this.instance_24.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_24.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(85).to({_off:false},0).to({_off:true},64).wait(51));

	// curtain
	this.instance_25 = new lib.curtain();
	this.instance_25.setTransform(502.9,24.9);
	this.instance_25._off = true;
	this.instance_25.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_25.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(131).to({_off:false},0).to({_off:true},53).wait(16));

	// curtain
	this.instance_26 = new lib.curtain();
	this.instance_26.setTransform(434.1,241.15);
	this.instance_26._off = true;
	this.instance_26.filters = [new cjs.ColorFilter(0, 0, 0, 1, 82, 36, 165, 0)];
	this.instance_26.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(8).to({_off:false},0).to({_off:true},29).wait(163));

	// curtain
	this.instance_27 = new lib.curtain();
	this.instance_27.setTransform(453,236.5);
	this.instance_27._off = true;
	this.instance_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 82, 36, 165, 0)];
	this.instance_27.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(57).to({_off:false},0).to({_off:true},97).wait(46));

	// curtain
	this.instance_28 = new lib.curtain();
	this.instance_28.setTransform(420.6,172.1);
	this.instance_28._off = true;
	this.instance_28.filters = [new cjs.ColorFilter(0, 0, 0, 1, 87, 26, 170, 0)];
	this.instance_28.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(4).to({_off:false},0).to({_off:true},29).wait(167));

	// curtain
	this.instance_29 = new lib.curtain();
	this.instance_29.setTransform(450.4,160.65);
	this.instance_29._off = true;
	this.instance_29.filters = [new cjs.ColorFilter(0, 0, 0, 1, 87, 26, 170, 0)];
	this.instance_29.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(53).to({_off:false},0).to({_off:true},69).wait(78));

	// curtain
	this.instance_30 = new lib.curtain();
	this.instance_30.setTransform(454.5,-30.8);
	this.instance_30._off = true;
	this.instance_30.filters = [new cjs.ColorFilter(0, 0, 0, 1, 99, 17, 159, 0)];
	this.instance_30.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(40).to({_off:false},0).to({_off:true},29).wait(131));

	// curtain
	this.instance_31 = new lib.curtain();
	this.instance_31.setTransform(453,-15.8);
	this.instance_31._off = true;
	this.instance_31.filters = [new cjs.ColorFilter(0, 0, 0, 1, 99, 17, 159, 0)];
	this.instance_31.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(101).to({_off:false},0).to({_off:true},63).wait(36));

	// curtain
	this.instance_32 = new lib.curtain();
	this.instance_32.setTransform(439.5,111.2);
	this.instance_32.filters = [new cjs.ColorFilter(0, 0, 0, 1, 88, 27, 161, 0)];
	this.instance_32.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({_off:true},29).wait(171));

	// curtain
	this.instance_33 = new lib.curtain();
	this.instance_33.setTransform(450.4,103.25);
	this.instance_33._off = true;
	this.instance_33.filters = [new cjs.ColorFilter(0, 0, 0, 1, 86, 27, 161, 0)];
	this.instance_33.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(21).to({_off:false},0).to({_off:true},96).wait(83));

	// curtain
	this.instance_34 = new lib.curtain();
	this.instance_34.setTransform(453,39.9);
	this.instance_34._off = true;
	this.instance_34.filters = [new cjs.ColorFilter(0, 0, 0, 1, 93, 20, 159, 0)];
	this.instance_34.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(75).to({_off:false},0).to({_off:true},29).wait(96));

	// curtain
	this.instance_35 = new lib.curtain();
	this.instance_35.setTransform(455.6,6.2);
	this.instance_35._off = true;
	this.instance_35.filters = [new cjs.ColorFilter(0, 0, 0, 1, 99, 17, 159, 0)];
	this.instance_35.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(62).to({_off:false},0).to({_off:true},80).wait(58));

	// curtain
	this.instance_36 = new lib.curtain();
	this.instance_36.setTransform(424.5,16.25);
	this.instance_36._off = true;
	this.instance_36.filters = [new cjs.ColorFilter(0, 0, 0, 1, 99, 17, 159, 0)];
	this.instance_36.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(15).to({_off:false},0).to({_off:true},91).wait(94));

	// curtain
	this.instance_37 = new lib.curtain();
	this.instance_37.setTransform(290.85,-50.5);
	this.instance_37._off = true;
	this.instance_37.filters = [new cjs.ColorFilter(0, 0, 0, 1, 77, 1, 148, 0)];
	this.instance_37.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(52).to({_off:false},0).to({_off:true},102).wait(46));

	// curtain
	this.instance_38 = new lib.curtain();
	this.instance_38.setTransform(332.7,-38.6);
	this.instance_38._off = true;
	this.instance_38.filters = [new cjs.ColorFilter(0, 0, 0, 1, 77, 1, 148, 0)];
	this.instance_38.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(8).to({_off:false},0).to({_off:true},29).wait(163));

	// curtain
	this.instance_39 = new lib.curtain();
	this.instance_39.setTransform(256.2,-7.05);
	this.instance_39._off = true;
	this.instance_39.filters = [new cjs.ColorFilter(0, 0, 0, 1, 77, 1, 148, 0)];
	this.instance_39.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(73).to({_off:false},0).to({_off:true},59).wait(68));

	// curtain
	this.instance_40 = new lib.curtain();
	this.instance_40.setTransform(341.4,13.05);
	this.instance_40._off = true;
	this.instance_40.filters = [new cjs.ColorFilter(0, 0, 0, 1, 77, 1, 148, 0)];
	this.instance_40.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(26).to({_off:false},0).to({_off:true},29).wait(145));

	// curtain
	this.instance_41 = new lib.curtain();
	this.instance_41.setTransform(330.8,9.9);
	this.instance_41._off = true;
	this.instance_41.filters = [new cjs.ColorFilter(0, 0, 0, 1, 77, 1, 148, 0)];
	this.instance_41.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(18).to({_off:false},0).to({_off:true},72).wait(110));

	// curtain
	this.instance_42 = new lib.curtain();
	this.instance_42.setTransform(328.1,70.65);
	this.instance_42._off = true;
	this.instance_42.filters = [new cjs.ColorFilter(0, 0, 0, 1, 70, 1, 138, 0)];
	this.instance_42.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(96).to({_off:false},0).to({_off:true},80).wait(24));

	// curtain
	this.instance_43 = new lib.curtain();
	this.instance_43.setTransform(287.9,63.8);
	this.instance_43._off = true;
	this.instance_43.filters = [new cjs.ColorFilter(0, 0, 0, 1, 70, 1, 138, 0)];
	this.instance_43.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(3).to({_off:false},0).to({_off:true},29).wait(168));

	// curtain
	this.instance_44 = new lib.curtain();
	this.instance_44.setTransform(271.2,88.25);
	this.instance_44._off = true;
	this.instance_44.filters = [new cjs.ColorFilter(0, 0, 0, 1, 70, 1, 138, 0)];
	this.instance_44.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(58).to({_off:false},0).to({_off:true},66).wait(76));

	// curtain
	this.instance_45 = new lib.curtain();
	this.instance_45.setTransform(336.4,96.2);
	this.instance_45._off = true;
	this.instance_45.filters = [new cjs.ColorFilter(0, 0, 0, 1, 70, 1, 138, 0)];
	this.instance_45.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(22).to({_off:false},0).to({_off:true},29).wait(149));

	// curtain
	this.instance_46 = new lib.curtain();
	this.instance_46.setTransform(283,112.5,1.0967,1);
	this.instance_46._off = true;
	this.instance_46.filters = [new cjs.ColorFilter(0, 0, 0, 1, 70, 1, 138, 0)];
	this.instance_46.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(46).to({_off:false},0).to({_off:true},95).wait(59));

	// curtain
	this.instance_47 = new lib.curtain();
	this.instance_47.setTransform(307.55,119.5);
	this.instance_47._off = true;
	this.instance_47.filters = [new cjs.ColorFilter(0, 0, 0, 1, 70, 1, 138, 0)];
	this.instance_47.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(11).to({_off:false},0).to({_off:true},29).wait(160));

	// curtain
	this.instance_48 = new lib.curtain();
	this.instance_48.setTransform(332.7,149.7);
	this.instance_48._off = true;
	this.instance_48.filters = [new cjs.ColorFilter(0, 0, 0, 1, 70, 1, 138, 0)];
	this.instance_48.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(59).to({_off:false},0).to({_off:true},29).wait(112));

	// curtain
	this.instance_49 = new lib.curtain();
	this.instance_49.setTransform(332.6,218.85);
	this.instance_49._off = true;
	this.instance_49.filters = [new cjs.ColorFilter(0, 0, 0, 1, 66, 0, 127, 0)];
	this.instance_49.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(94).to({_off:false},0).to({_off:true},66).wait(40));

	// curtain
	this.instance_50 = new lib.curtain();
	this.instance_50.setTransform(347.7,221.5);
	this.instance_50.filters = [new cjs.ColorFilter(0, 0, 0, 1, 66, 0, 127, 0)];
	this.instance_50.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).to({_off:true},29).wait(171));

	// curtain
	this.instance_51 = new lib.curtain();
	this.instance_51.setTransform(350.35,278.25);
	this.instance_51._off = true;
	this.instance_51.filters = [new cjs.ColorFilter(0, 0, 0, 1, 66, 0, 127, 0)];
	this.instance_51.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(53).to({_off:false},0).to({_off:true},71).wait(76));

	// curtain
	this.instance_52 = new lib.curtain();
	this.instance_52.setTransform(335.35,282.05);
	this.instance_52._off = true;
	this.instance_52.filters = [new cjs.ColorFilter(0, 0, 0, 1, 66, 0, 127, 0)];
	this.instance_52.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(13).to({_off:false},0).to({_off:true},92).wait(95));

	// curtain
	this.instance_53 = new lib.curtain();
	this.instance_53.setTransform(263.5,479.5);
	this.instance_53._off = true;
	this.instance_53.filters = [new cjs.ColorFilter(0, 0, 0, 1, 57, 0, 114, 0)];
	this.instance_53.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(48).to({_off:false},0).to({_off:true},81).wait(71));

	// curtain
	this.instance_54 = new lib.curtain();
	this.instance_54.setTransform(283.75,479.5);
	this.instance_54._off = true;
	this.instance_54.filters = [new cjs.ColorFilter(0, 0, 0, 1, 57, 0, 114, 0)];
	this.instance_54.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(7).to({_off:false},0).to({_off:true},29).wait(164));

	// curtain
	this.instance_55 = new lib.curtain();
	this.instance_55.setTransform(211.2,490.25);
	this.instance_55._off = true;
	this.instance_55.filters = [new cjs.ColorFilter(0, 0, 0, 1, 57, 0, 114, 0)];
	this.instance_55.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(67).to({_off:false},0).to({_off:true},29).wait(104));

	// curtain
	this.instance_56 = new lib.curtain();
	this.instance_56.setTransform(297.3,538.3);
	this.instance_56._off = true;
	this.instance_56.filters = [new cjs.ColorFilter(0, 0, 0, 1, 55, 1, 110, 0)];
	this.instance_56.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(26).to({_off:false},0).to({_off:true},119).wait(55));

	// curtain
	this.instance_57 = new lib.curtain();
	this.instance_57.setTransform(330.8,487.4);
	this.instance_57._off = true;
	this.instance_57.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_57.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(10).to({_off:false},0).to({_off:true},29).wait(161));

	// curtain
	this.instance_58 = new lib.curtain();
	this.instance_58.setTransform(358.1,487.4);
	this.instance_58._off = true;
	this.instance_58.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_58.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(82).to({_off:false},0).to({_off:true},104).wait(14));

	// curtain
	this.instance_59 = new lib.curtain();
	this.instance_59.setTransform(343.1,418.35);
	this.instance_59._off = true;
	this.instance_59.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_59.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(1).to({_off:false},0).to({_off:true},29).wait(170));

	// curtain
	this.instance_60 = new lib.curtain();
	this.instance_60.setTransform(294.75,415.05);
	this.instance_60._off = true;
	this.instance_60.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_60.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(23).to({_off:false},0).to({_off:true},102).wait(75));

	// curtain
	this.instance_61 = new lib.curtain();
	this.instance_61.setTransform(317.6,360.9);
	this.instance_61._off = true;
	this.instance_61.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_61.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(39).to({_off:false},0).to({_off:true},29).wait(132));

	// curtain
	this.instance_62 = new lib.curtain();
	this.instance_62.setTransform(239.85,313.55);
	this.instance_62._off = true;
	this.instance_62.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_62.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(88).to({_off:false},0).to({_off:true},29).wait(83));

	// curtain
	this.instance_63 = new lib.curtain();
	this.instance_63.setTransform(230.55,8.2,0.7333,0.7333);
	this.instance_63._off = true;
	this.instance_63.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_63.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(17).to({_off:false},0).to({_off:true},29).wait(154));

	// curtain
	this.instance_64 = new lib.curtain();
	this.instance_64.setTransform(219.55,36.15,0.7333,0.7333);
	this.instance_64._off = true;
	this.instance_64.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_64.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(9).to({_off:false},0).to({_off:true},29).wait(162));

	// curtain
	this.instance_65 = new lib.curtain();
	this.instance_65.setTransform(200.25,60.55,0.7333,0.7333);
	this.instance_65._off = true;
	this.instance_65.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_65.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(55).to({_off:false},0).to({_off:true},139).wait(6));

	// curtain
	this.instance_66 = new lib.curtain();
	this.instance_66.setTransform(198.2,99.5,0.7333,0.7333);
	this.instance_66._off = true;
	this.instance_66.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_66.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(110).to({_off:false},0).to({_off:true},29).wait(61));

	// curtain
	this.instance_67 = new lib.curtain();
	this.instance_67.setTransform(214.5,256.15);
	this.instance_67._off = true;
	this.instance_67.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_67.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(20).to({_off:false},0).to({_off:true},65).wait(115));

	// curtain
	this.instance_68 = new lib.curtain();
	this.instance_68.setTransform(229.5,251.5);
	this.instance_68._off = true;
	this.instance_68.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_68.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(6).to({_off:false},0).to({_off:true},29).wait(165));

	// curtain
	this.instance_69 = new lib.curtain();
	this.instance_69.setTransform(203.25,204.95);
	this.instance_69._off = true;
	this.instance_69.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_69.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(64).to({_off:false},0).to({_off:true},65).wait(71));

	// curtain
	this.instance_70 = new lib.curtain();
	this.instance_70.setTransform(268.75,179.8);
	this.instance_70._off = true;
	this.instance_70.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_70.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(37).to({_off:false},0).to({_off:true},29).wait(134));

	// curtain
	this.instance_71 = new lib.curtain();
	this.instance_71.setTransform(246.55,187.1);
	this.instance_71._off = true;
	this.instance_71.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_71.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(22).to({_off:false},0).to({_off:true},116).wait(62));

	// curtain
	this.instance_72 = new lib.curtain();
	this.instance_72.setTransform(-283.2,584.15,0.8064,1);
	this.instance_72._off = true;
	this.instance_72.filters = [new cjs.ColorFilter(0, 0, 0, 1, 67, 62, 168, 0)];
	this.instance_72.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(79).to({_off:false},0).to({_off:true},29).wait(92));

	// curtain
	this.instance_73 = new lib.curtain();
	this.instance_73.setTransform(-272.85,510.3,0.8064,1);
	this.instance_73._off = true;
	this.instance_73.filters = [new cjs.ColorFilter(0, 0, 0, 1, 68, 58, 170, 0)];
	this.instance_73.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(2).to({_off:false},0).to({_off:true},29).wait(169));

	// curtain
	this.instance_74 = new lib.curtain();
	this.instance_74.setTransform(-252.1,163.3,0.9078,1);
	this.instance_74._off = true;
	this.instance_74.filters = [new cjs.ColorFilter(0, 0, 0, 1, 93, 22, 160, 0)];
	this.instance_74.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(30).to({_off:false},0).to({_off:true},29).wait(141));

	// curtain
	this.instance_75 = new lib.curtain();
	this.instance_75.setTransform(-238.5,153.65,0.9078,1);
	this.instance_75._off = true;
	this.instance_75.filters = [new cjs.ColorFilter(0, 0, 0, 1, 93, 20, 159, 0)];
	this.instance_75.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(78).to({_off:false},0).to({_off:true},100).wait(22));

	// curtain
	this.instance_76 = new lib.curtain();
	this.instance_76.setTransform(-229,302.8,0.6333,1);
	this.instance_76._off = true;
	this.instance_76.filters = [new cjs.ColorFilter(0, 0, 0, 1, 76, 36, 162, 0)];
	this.instance_76.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(10).to({_off:false},0).to({_off:true},29).wait(161));

	// curtain
	this.instance_77 = new lib.curtain();
	this.instance_77.setTransform(-255.15,306.1,0.6333,1);
	this.instance_77._off = true;
	this.instance_77.filters = [new cjs.ColorFilter(0, 0, 0, 1, 82, 35, 164, 0)];
	this.instance_77.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(56).to({_off:false},0).to({_off:true},73).wait(71));

	// curtain
	this.instance_78 = new lib.curtain();
	this.instance_78.setTransform(-234.6,437.05,1.8472,1,0,0,0,0.2,0);
	this.instance_78._off = true;
	this.instance_78.filters = [new cjs.ColorFilter(0, 0, 0, 1, 74, 49, 169, 0)];
	this.instance_78.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(49).to({_off:false},0).to({_off:true},29).wait(122));

	// curtain
	this.instance_79 = new lib.curtain();
	this.instance_79.setTransform(-274.15,437.05,0.6333,1);
	this.instance_79._off = true;
	this.instance_79.filters = [new cjs.ColorFilter(0, 0, 0, 1, 73, 48, 168, 0)];
	this.instance_79.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(95).to({_off:false},0).to({_off:true},90).wait(15));

	// curtain
	this.instance_80 = new lib.curtain();
	this.instance_80.setTransform(-304.65,373.5,0.6333,1);
	this.instance_80.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 70, 244, 0)];
	this.instance_80.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_80).to({_off:true},29).wait(171));

	// curtain
	this.instance_81 = new lib.curtain();
	this.instance_81.setTransform(-316.65,437.05,0.6333,1);
	this.instance_81._off = true;
	this.instance_81.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 70, 244, 0)];
	this.instance_81.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(22).to({_off:false},0).to({_off:true},29).wait(149));

	// curtain
	this.instance_82 = new lib.curtain();
	this.instance_82.setTransform(-212.6,430.05,0.6333,1);
	this.instance_82._off = true;
	this.instance_82.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 70, 244, 0)];
	this.instance_82.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(62).to({_off:false},0).to({_off:true},133).wait(5));

	// curtain
	this.instance_83 = new lib.curtain();
	this.instance_83.setTransform(-208.5,348,0.6067,1,0,0,0,0.1,0);
	this.instance_83._off = true;
	this.instance_83.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 70, 244, 0)];
	this.instance_83.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(80).to({_off:false},0).to({_off:true},29).wait(91));

	// curtain
	this.instance_84 = new lib.curtain();
	this.instance_84.setTransform(-208.55,236.5);
	this.instance_84._off = true;
	this.instance_84.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 70, 244, 0)];
	this.instance_84.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(39).to({_off:false},0).to({_off:true},50).wait(111));

	// curtain
	this.instance_85 = new lib.curtain();
	this.instance_85.setTransform(-357.4,120.55,1.2,1,0,0,0,0.1,0);
	this.instance_85._off = true;
	this.instance_85.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_85.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(5).to({_off:false},0).to({_off:true},29).wait(166));

	// curtain
	this.instance_86 = new lib.curtain();
	this.instance_86.setTransform(-378.8,124.2,1.44,1);
	this.instance_86._off = true;
	this.instance_86.filters = [new cjs.ColorFilter(0, 0, 0, 1, 40, 73, 249, 0)];
	this.instance_86.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(26).to({_off:false},0).to({_off:true},29).wait(145));

	// curtain
	this.instance_87 = new lib.curtain();
	this.instance_87.setTransform(-201.4,24.9);
	this.instance_87._off = true;
	this.instance_87.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 70, 244, 0)];
	this.instance_87.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_87).wait(73).to({_off:false},0).to({_off:true},76).wait(51));

	// curtain
	this.instance_88 = new lib.curtain();
	this.instance_88.setTransform(-231.75,24.9);
	this.instance_88._off = true;
	this.instance_88.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 70, 244, 0)];
	this.instance_88.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(128).to({_off:false},0).to({_off:true},70).wait(2));

	// curtain
	this.instance_89 = new lib.curtain();
	this.instance_89.setTransform(-205.7,120.55);
	this.instance_89._off = true;
	this.instance_89.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 70, 244, 0)];
	this.instance_89.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_89).wait(6).to({_off:false},0).to({_off:true},29).wait(165));

	// curtain
	this.instance_90 = new lib.curtain();
	this.instance_90.setTransform(-205.7,175.65);
	this.instance_90._off = true;
	this.instance_90.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 70, 244, 0)];
	this.instance_90.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(46).to({_off:false},0).to({_off:true},68).wait(86));

	// curtain
	this.instance_91 = new lib.curtain();
	this.instance_91.setTransform(-391.2,223.5);
	this.instance_91._off = true;
	this.instance_91.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 70, 244, 0)];
	this.instance_91.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_91).wait(70).to({_off:false},0).to({_off:true},71).wait(59));

	// curtain
	this.instance_92 = new lib.curtain();
	this.instance_92.setTransform(-377.85,221.5);
	this.instance_92.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 70, 244, 0)];
	this.instance_92.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_92).to({_off:true},116).wait(84));

	// curtain
	this.instance_93 = new lib.curtain();
	this.instance_93.setTransform(-383.8,178.3);
	this.instance_93._off = true;
	this.instance_93.filters = [new cjs.ColorFilter(0, 0, 0, 1, 45, 70, 244, 0)];
	this.instance_93.cache(-9,-9,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_93).wait(35).to({_off:false},0).to({_off:true},69).wait(96));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-471,-58,996.4,688);


(lib.v_line_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.h_line();
	this.instance.setTransform(0.15,513.3,0.1657,2.5,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.0033,scaleY:0.5,x:0.2,y:-1.2},99,cjs.Ease.quartOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-2.7,5,591);


(lib.tower_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EACmBIRIlBAAQgDj2gGj0IAAAAIgKAAIAAAAIhQAAIAAAAIgKAAIAAAAIhQAAIAAAAIgJABIAAAAQhfAYAEhLIAAAAQCZAIB8ggIAAAAQADgBAAgPIAAAAIAAgeIAAAAIgKABIAAAAQhgAQAahrIAAAAIAKAAIAAAAIAUAAIAAAAQAUAAAHgJIAAAAQAqg7hZgCIAAAAIgFAAIAAAAQgFgoAAgoIAAAAIAKAAIAAAAQAAgFABAAIAAAAQAmgIAQgIIAAAAIALgMIAAAAQADgRhFgUIAAAAIgFAAIAAAAQgFgoAAgoIAAAAIAKAAIAAAAIgKAAIAAAAIAAgKIAAAAIBGAAIAAAAIAKAAIAAAAIAAgKIAAAAIAAycIAAAAIgKABIAAAAQhdASAXhjIAAAAIAKAAIAAAAIgKAAIAAAAIAAgKIAAAAIBGAAIAAAAIAKAAIAAAAIAAgKIAAAAQgGg1hAADIAAAAIgFAAIAAAAQgFgoAAgoIAAAAIAKAAIAAAAIA8AAIAAAAIAKAAIAAAAIAAgKIAAAAIAAnWIAAAAQAKCGAACNIAAAAQAAiNgKiGIAAAAQgchmgOh1IAAAAQgNhugZhlIAAAAQA1gHAVgpIAAAAQABgCAFAAIAAAAIAAgKIAAAAIAAwkIAAAAQAKEyAAE7IAAAAQAAk7gKkyIAAAAIAAgFQhzAAhBgtIAAAAQBagjB4gFIAAAAIAKAAIAAAAIAAkNIAAAAIAAgKIAAAAQglgmgjgnIAAAAQgDgDgFAAIAAAAQgRgvAMhIIAAAAQAVh/hMgYIAAAAQBLAFAABYIAAAAQAAhYhLgFIAAAAIAAgKIAAAAIAAgUIAAAAIAAgKIAAAAIAAhQIAAAAQAKATAAAcIAAAAQAAgcgKgTIAAAAIAAgKIAAAAIAAhGIAAAAIAoAAIAAAAIAKAAIAAAAIAAgKIAAAAIAAkOIAAAAIAKAAIAAAAIAAgKIAAAAIBQAAIAAAAIAKAAIAAAAIAFAAQgIgvgvgNIAAAAIAAgKIAAAAQAjhfgIiRIAAAAQgHiCAAiCIAAAAQASCtAIDFIAAAAIAAAQIAAAAIAAgQIAAAAQgIjFgSitIAAAAQAAgFgBAAIAAAAQgcgKgVgPIAAAAQgFAAgBgCIAAAAQgEgIAAgKIAAAAQB5AaAchCIAAAAQABgFAAgFIAAAAQAJACAAAIIAAAAQAAgIgJgCIAAAAIgKABIAAAAQgqAGAMgvIAAAAIAAgKIAAAAQApALgBgfIAAAAIAAgKIAAAAQAFAAABACIAAAAQALApgiABIAAAAQAigBgLgpIAAAAQgBgCgFAAIAAAAIgKABIAAAAQgqAGAMgvIAAAAIAAgKIAAAAQApALgBgfIAAAAIAAgKIAAAAQAFAAABACIAAAAQgBgCgFAAIAAAAIgKABIAAAAQgqAGAMgvIAAAAIAAgKIAAAAQApALgBgfIAAAAIAAgKIAAAAQAFAAABACIAAAAQgBgCgFAAIAAAAIgKABIAAAAQgqAGAMgvIAAAAIAAgKIAAAAQApALgBgfIAAAAIAAgKIAAAAQAFAAABACIAAAAQgBgCgFAAIAAAAIgKABIAAAAQgqAGAMgvIAAAAIAAgKIAAAAQApALgBgfIAAAAIAAgKIAAAAQAFAAABACIAAAAQgBgCgFAAIAAAAIgKABIAAAAQgqAGAMgvIAAAAQAAgFABAAIAAAAQBJgRhKgcIAAAAQA0AKAAANIAAAAQAAgNg0gKIAAAAIAAgKIAAAAIAAgUIAAAAQAAgFABAAIAAAAQBJgRhKgcIAAAAQA0AKAAANIAAAAQAAgNg0gKIAAAAIAAgKIAAAAIAAgeIAAAAIAeAAIAAAAIAKAAIAAAAIAAgKIAAAAIAAiCIAAAAQAKAiAAAqIAAAAQAAgqgKgiIAAAAIgKAAIAAAAIgeAAIAAAAQgFAAAAgBIAAAAQgFgOAAgPIAAAAQBPgGgMhzIAAAAQgRifAEigIAAAAQAEingSiPIAAAAIAKABIAAAAQAKCaAACbIAAAAQAACqARCpIAAAAIABAZIAAAAIgBgZIAAAAQgRipAAiqIAAAAQAAibgKiaIAAAAIgKgBIAAAAIgKABIAAAAQgnAIAJgnIAAAAIAKAAIAAAAIAKAAIAAAAIAAgKIAAAAQAygZgIhgIAAAAQgTjdARjGIAAAAQAADcARDbIAAAAIAAAUIAAAAIAAgUIAAAAQgRjbAAjcIAAAAQASgcgHg0IAAAAIgBgKIAAAAIAAgKIAAAAIAAhaIAAAAIAKAAIAAAAIABAKIAAAAQACARAAAOIAAAAQAAgOgCgRIAAAAIgBgKIAAAAIAAgKIAAAAQAChggCg2IAAAAIAAgKIAAAAIAAiMIAAAAQAKAlAAAtIAAAAQAAgtgKglIAAAAIAAgKIAAAAIAAg8IAAAAQASgqgHhEIAAAAIgBgKIAAAAIAAgKIAAAAIAAhkIAAAAIAKAAIAAAAIABAKIAAAAQACASAAAQIAAAAQAAgQgCgSIAAAAIgBgKIAAAAIAJAAIAAAAIAKAAIAAAAIAABuIAAAAIAAAKIAAAAQASAXgHAvIAAAAIgBAKIAAAAQASBBgRBCIAAAAIgBAJIAAAAIAACqIAAAAIAAAKIAAAAIAAgKIAAAAIAAiqIAAAAQASBJgHBhIAAAAIgBAKIAAAAIgKAAIAAAAIAKAAIAAAAIAACWIAAAAIAAAKIAAAAIAAAeIAAAAIAAAKIAAAAQASAXgHAvIAAAAIgBAKIAAAAQASD9gIEVIAAAAIAAAKIAAAAQBsAYhrAVIAAAAQgBAAAAAFIAAAAIgKAAIAAAAIAKAAIAAAAIAALaIAAAAIAAAKIAAAAQBRAWhHAIIAAAAIgKAAIAAAAIgKAAIAAAAIAKAAIAAAAIAACCIAAAAIAAAKIAAAAQBiAThYAeIAAAAQgFABgFAAIAAAAQAAgFABAAIAAAAQAkgIAAgLIAAAAQAAALgkAIIAAAAQgBAAAAAFIAAAAIAAAUIAAAAIAAAKIAAAAQBiAThYAeIAAAAQgFABgFAAIAAAAQAAgFABAAIAAAAQAkgIAAgLIAAAAQAAALgkAIIAAAAQgBAAAAAFIAAAAIAAAUIAAAAIAAAKIAAAAQBiAThYAeIAAAAQgFABgFAAIAAAAQAAgFABAAIAAAAQAkgIAAgLIAAAAQAAALgkAIIAAAAQgBAAAAAFIAAAAIAAAUIAAAAIAAAKIAAAAQBBgOgTA/IAAAAQgBABgFAAIAAAAIgKAAIAAAAIgeAAIAAAAIAAAUIAAAAIAAAKIAAAAQBiAThYAeIAAAAQgFABgFAAIAAAAQASArATAjIAAAAQAFAJgggCIAAAAQgRgCAHAbIAAAAQBBgOgTA/IAAAAQgBABgFAAIAAAAIgKAAIAAAAIgeAAIAAAAIAAAUIAAAAIAAAKIAAAAQBBgOgTA/IAAAAQgBABgFAAIAAAAIgKAAIAAAAIgeAAIAAAAIAAAoIAAAAIAAAKIAAAAQBdgHA5AWIAAAAIgKAFIAAgFIAAAFQgFAAgCADIAAAAQgPAUgcAHIAAAAIAAAUIAAAAIAAAKIAAAAIAABaIAAAAIAAAKIAAAAIAABaIAAAAIAAAKIAAAAIAABaIAAAAIAAAKIAAAAIAABaIAAAAQAAAeAOAVIAAAAQAsBFhYgKIAAAAIAAAeIAAAAIAAAKIAAAAIABABIAAAAIgBgBIAAAAQAyAAAyAFIAAAAIAAAFIAAAAIAAAoIAAAAIAAAKIAAAAIgKAAIAAAAIAKAAIAAAAIAABaIAAAAIAAAKIAAAAIgBAKIAAAAQgXBpBAAPIAAAAQARASAFApIAAAAQAOB1hCAYIAAAAIgFAAQgFCHAACHIAAAAQgFAAgDADIAAAAQgvAqgjA3IAAAAIAAAKIAAAAIAAAKIAAAAIAACpIAAAAIAAAKIAAAAIAAgKIAAAAIAAipIAAAAQASBOgNBlIAAAAIgFAAIAAAAQAhBSB1AAIAAAAQArAAAbASIAAAAQgrAlhNADIAAAAIgKAAIAAAAIgKAAIAAAAIgoAAIAAAAIAoAAIAAAAIAKAAIAAAAQAAAFgBABIAAAAQgTAEgUAAIAAAAIAAQkIAAAAIAAAKIAAAAQAzAnAJAVIAAAAIgFAFQgFAFAAAKIAAAAIAABGIAAAAIAAAKIAAAAIAAAKIAAAAQgPCWgjCCIAAAAIAAAKIAAAAIAAAKIAAAAIgKAAIAAAAIAAHgIAAAAIAAAKIAAAAIAAgKIAAAAIAAngIAAAAIAKAAIAAAAIAAHgIAAAAIAAAKIAAAAIgKAAIAAAAIABABIAAAAIgBgBIAAAAIAKAAIAAAAQAjAAAjAFIAAAAIAAAFIAAAAIAAA8IAAAAIAAAKIAAAAIgKAAIAAAAIhGAAIAAAAIAAAyIAAAAIAAAKIAAAAIAAgKIAAAAIAAgyIAAAAIBGAAIAAAAIAKAAIAAAAIAAAFIAAAAQgjAFgjAAIAAAAIAAAoIAAAAIAAAKIAAAAIgKAAIAAAAIAKAAIAAAAQAjAAAjAFIAAAAIAAAFIAAAAIAAA8IAAAAIAAAKIAAAAIgKAAIAAAAIhGAAIAAAAIAAAKIAAAAIAAScIAAAAIAAAKIAAAAIAAgKIAAAAIAAycIAAAAIAKAAIAAAAIAAScIAAAAIAAAKIAAAAIgKAAIAAAAIAKAAIAAAAQAjAAAjAFIAAAAIAAAFIAAAAIAABGIAAAAIAAAKIAAAAIgKAAIAAAAIhGAAIAAAAIBGAAIAAAAIAKAAIAAAAIAAAFIAAAAQgjAFgjAAIAAAAIAAAyIAAAAIAAAKIAAAAQBegSgcBhIAAAAQgBABgFAAIAAAAIgKAAIAAAAIg8AAIAAAAIA8AAIAAAAIAKAAIAAAAQAAAFgBAAIAAAAQgdAFgeAAIAAAAIAAAyIAAAAIAAAKIAAAAQBagUgTBaIAAAAIgBAKIAAAAIgKAAIAAAAIhGAAIAAAAIAAAKIAAAAIAAgKIAAAAIBGAAIAAAAIAKAAIAAAAIAAAFIAAAAQgoAFgoAAIAAAAQADBsCUghIAAAAQBZgTAoAiIAAAAQgZAyhggLIAAAAQhKgJhLAAIAAAAIgKAAIAAAAIAKAAIAAAAIAAHqIAAAAgEgC5A+sIAAAAIAAAAIAAAAgEgC5A+sIAVgCIAAAAIgVACgEgDrA9bIABgFIAAAAIgBAFgEgDpA55IAVAAIAAAAIgVAAgEgDTA55IAAAAIAAAAIAAAAgEADSA4sIAAAAIAAAAIAAAAgEADSA4sQALAAANgCIAAAAQgNACgLAAgEACnA4gIAAAAIAAAAIAAAAgEgCaAwsQAAldgKlWIAAAAQAKFWAAFdgEgC7Al2IgBAAIAAAAIABAAgEgC7Al2QAKAAANgCIAAAAQgNACgKAAgEgDrAktIABgEIAAAAIgBAEgEADSAksIAAAAIAAAAIAAAAgEADSAksQALAAANgCIAAAAQgNACgLAAgEACnAkgIAAAAIAAAAIAAAAgEgDnAjiIABAAIAAAAIgBAAgEgDlAjiIABAAIAAAAIgBAAgEgDkAjiQARgEANAAIAAAAQgNAAgRAEgEgDGAjeIAAAAIAAAAIAAAAgEADSAigIAAAAIAAAAIAAAAgEADSAigQALAAANgCIAAAAQgNACgLAAgAjMwAQACAsAAAqIAAAAQAAgqgCgsIAAAAIAAAAgACuwHIAAAAIAAAAIAAAAgACuwHQAPAAAQgCIAAAAQgQACgPAAgAiL5wIgBAAIAAAAIABAAgAiL5wQA+AAAZglIAAAAQgZAlg+AAgACv5wIAAAAIAAAAIAAAAgACv5wIANgBIAAAAIgNABgAi751IgBAAIAAAAIABAAgAi851IgCAAIAAAAIACAAgAjB51IgBgBIAAAAIABABgAhH7WIAAAAIAAAAIAAAAgAhH8mIAAAAIAAAAIAAAAgAhH8mQAggBgIglIAAAAQAIAlggABgAhc8pIgCgBIAAAAIACABgAgv9NIgBgCIAAAAIABACgAhH92IAAAAIAAAAIAAAAgAhH92QAggBgIglIAAAAQAIAlggABgAhc95IgCgBIAAAAIACABgAgv+dIgBgCIAAAAIABACgAA4+nQgBAAAAAFIAAAAQAAgFABAAIAAAAQAkgIAAgLIAAAAQAAALgkAIgAhH/GIAAAAIAAAAIAAAAgAhH/GQAggBgIglIAAAAQAIAlggABgAhc/JIgCgBIAAAAIACABgAgv/tIgBgCIAAAAIABACgEgBHggWIAAAAIAAAAIAAAAgEgBHggWQAggBgIglIAAAAQAIAlggABgEgBcggZIgCgBIAAAAIACABgEgAvgg9IgBgCIAAAAIABACgEgCkBIRIAAnqIAAAAQAGD0ADD2IAAAAgEgFYBAnIBQAAIAAAAIAKAAIAAAAQAAAFgBAAIAAAAQgXAFgUAAIAAAAQgbAAgTgKgEAClAl5IAAgKIAAAAIBGAAIAAAAIAKAAIAAAAIAAAFIAAAAQgjAFgjAAIAAAAIgKAAgADhVpIAAhGIAAAAQASAcgMAzIAAAAQgBABgFAAIAAAAIAAgKgACR0OIAAhaIAAAAQASAmgNA9IAAAAQAAABgFAAIAAAAIAAgKgACR3WIAAhaIAAAAQASAmgNA9IAAAAQAAABgFAAIAAAAIAAgKg");
	mask.setTransform(-0.5101,-117.5247);

	// Layer_2
	this.instance = new lib.flare();
	this.instance.setTransform(5.4,627.5,5.6513,1.8211,-90);
	this.instance.alpha = 0.3008;
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-872.5},99).wait(1));

	// Layer_1
	this.instance_1 = new lib.tower();
	this.instance_1.setTransform(-61,-580);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-580,122,1160);


(lib.ray_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ray();
	this.instance.setTransform(0,0,1,1,-11.4574);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:7.2479},99,cjs.Ease.quadInOut).to({rotation:-11.4574},100,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.3,-845.3,390.3,857);


(lib.moscow2030_blinking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.moscow2030();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},109).wait(1).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).wait(66));

	// Layer_6
	this.instance_1 = new lib.moscow2030();
	this.instance_1.alpha = 0.5;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({_off:true},1).wait(18).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(66));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(2.575,-0.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(-8.45,-0.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(3.325,-0.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("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");
	this.shape_3.setTransform(-7.45,-0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},112).to({state:[]},3).to({state:[{t:this.shape_1}]},1).to({state:[]},2).to({state:[{t:this.shape_2}]},1).to({state:[]},3).to({state:[{t:this.shape_3}]},1).to({state:[]},3).wait(74));

	// Layer_7
	this.instance_2 = new lib.moscow2030();
	this.instance_2.setTransform(-3.1,-1.3);
	this.instance_2.alpha = 0.8008;
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 255, 255, 0)];
	this.instance_2.cache(-100,-63,207,127);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(102).to({_off:false},0).to({_off:true},7).wait(1).to({_off:false,x:-1.1},0).wait(13).to({x:0.9},0).wait(3).to({x:-3.1},0).wait(7).to({x:-1.5},0).to({_off:true},9).wait(58));

	// Layer_7_copy_copy
	this.instance_3 = new lib.moscow2030();
	this.instance_3.setTransform(3.9,-1.3);
	this.instance_3.alpha = 0.8008;
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 0, 255, 0)];
	this.instance_3.cache(-100,-63,207,127);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(103).to({_off:false},0).to({_off:true},5).wait(3).to({_off:false,x:1.9},0).to({_off:true},8).wait(1).to({_off:false,x:0.7},0).wait(4).to({x:3.5},0).to({_off:true},4).wait(1).to({_off:false,x:3.9},0).wait(2).to({x:2.7},0).to({_off:true},10).wait(59));

	// Layer_7_copy
	this.instance_4 = new lib.moscow2030();
	this.instance_4.setTransform(0.9,1.2);
	this.instance_4.alpha = 0.8008;
	this.instance_4._off = true;
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 0, 0)];
	this.instance_4.cache(-100,-63,207,127);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(113).to({_off:false},0).to({_off:true},4).wait(9).to({_off:false,x:1.3,y:1.6},0).to({_off:true},2).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-55.6,262.1,110);


(lib.logo_layer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo_1();
	this.instance.alpha = 0.8516;
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,20);
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_layer, new cjs.Rectangle(-322,-128,648,260), null);


(lib.logo_blinking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.logo_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Layer_1
	this.instance_1 = new lib.logo_layer();
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},19,cjs.Ease.none).to({alpha:0},20,cjs.Ease.none).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322,-128,648,260);


(lib.h_line_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.h_line();
	this.instance.setTransform(-1367,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1375.5},99,cjs.Ease.quadInOut).to({x:-1367},100,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1819.4,-1,3647.4,2);


(lib.building2_flare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAEFAuDQAxt8gDy3QgC3WhcwhQhcwhh+AAQgWAAgZArQhwDNhIPtQhIP2ACU/QACNYAfK8IgegeQgjqkgCtSQgC41BjxiQBhxiCNAAQCNgCBkRkQBnRgACY1QACSwg4Oog");
	mask.setTransform(0.0284,0.0248);

	// Layer_2
	this.instance = new lib.flare();
	this.instance.setTransform(-2.7,427.75,2.486,0.9745,-90,0,0,-0.1,0);
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-449.75},99).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-298.4,68.1,596.9);


(lib.building1_flare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAMBA4nQgvi0hRjqQh/mAi5maQiglhjYmDQiwkpgig0IjclXQjUlmiRmZQhUj7gnioQgLgpglivIgljcIgqm/QgMjrAIjVQAKjsAbjUQAejxAxjCQgXBogSBxIgbDcQgXC/gGD/QgED4AODHQAEBMAPCRIAdDcQAGAoAhCwIAwDVQAuC9BNDgQCRGUDUFeIDXFXQAvBGA9BnIBoCzQDuGxCHE9QC5GqB2F4QBFDYA0DMQBAEGAbCpQghixhFj4gEAPTAsDQg2llgwj4QgzkThLlEQiYqFjBn6IhskRQhBicgsh3Qh0kihckNQjXpfiFokQhLk3gzkjQgyk8gXktQgVlVAKkbIAZleIAAgKQAAgKAGgJQAHgOAOgIQANgFAXAAIAfAFQAjAKBRAkQCUBKEYC1QDtCcC0CDIAFAGIACAHQBAF3A8IKQA2HpAXGeQANDNAGD6QAGDKgED9QgCDhgPDmQgMC7gTCjQANiaAOjHQALjhAAjjQAAj9gHjKQgIjfgPjmQghnagymqQhAoIg/lqQjLiPjQiJQkki4iHhAQhJgjglgHQgLgHgQAAIgVACIgCADIAAAJIgXFZQgLElAZFEQAoJGCaJyQCFIpDTJXQBVDzB5E6QCTFsBFC6QDBIHCSKDQBGEnA0ExQAsD2A0FqQBCHkAiHBQgsnFhFncg");
	mask.setTransform(0.0359,0);

	// Layer_2
	this.instance = new lib.flare();
	this.instance.setTransform(-2.35,529.4,2.486,2.3482,-90,0,0,-0.1,0);
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-543.1},99).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.2,-404.8,218.5,809.7);


// stage content:
(lib.tetris = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// windows
	this.instance = new lib.windows();
	this.instance.setTransform(540,960);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(201));

	// building2_flare
	this.instance_1 = new lib.building2_flare("synched",49);
	this.instance_1.setTransform(385.2,1179.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(201));

	// building1_flare
	this.instance_2 = new lib.building1_flare("synched",24);
	this.instance_2.setTransform(830.5,1232.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(201));

	// v_lines_2
	this.instance_3 = new lib.v_line_motion("synched",74);
	this.instance_3.setTransform(683.3,1693.75,0.9999,0.9999,-78.7427,0,0,0.2,0.2);

	this.instance_4 = new lib.v_line_motion("synched",69);
	this.instance_4.setTransform(619.3,1693.7,0.9999,0.9999,-65.0564,0,0,0.2,0.2);

	this.instance_5 = new lib.v_line_motion("synched",19);
	this.instance_5.setTransform(562.2,1693.7,0.9999,0.9999,-38.3649,0,0,0.2,0.1);

	this.instance_6 = new lib.v_line_motion("synched",49);
	this.instance_6.setTransform(330.1,1693.7,0.9999,0.9999,78.5292,0,0,0.1,-0.1);

	this.instance_7 = new lib.v_line_motion("synched",74);
	this.instance_7.setTransform(395.2,1693.65,1,1,65.1094,0,0,0.1,-0.1);

	this.instance_8 = new lib.v_line_motion("synched",69);
	this.instance_8.setTransform(451.15,1693.65,1,1,38.1524,0,0,0.1,0);

	this.instance_9 = new lib.v_line_motion("synched",49);
	this.instance_9.setTransform(505.2,1692.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(201));

	// v_lines
	this.instance_10 = new lib.v_line_motion("synched",9);
	this.instance_10.setTransform(683.3,1693.75,0.9999,0.9999,-78.7427,0,0,0.2,0.2);

	this.instance_11 = new lib.v_line_motion("synched",0);
	this.instance_11.setTransform(619.3,1693.7,0.9999,0.9999,-65.0564,0,0,0.2,0.2);

	this.instance_12 = new lib.v_line_motion("synched",49);
	this.instance_12.setTransform(562.2,1693.7,0.9999,0.9999,-38.3649,0,0,0.2,0.1);

	this.instance_13 = new lib.v_line_motion("synched",0);
	this.instance_13.setTransform(330.1,1693.7,0.9999,0.9999,78.5292,0,0,0.1,-0.1);

	this.instance_14 = new lib.v_line_motion("synched",24);
	this.instance_14.setTransform(395.2,1693.65,1,1,65.1094,0,0,0.1,-0.1);

	this.instance_15 = new lib.v_line_motion("synched",19);
	this.instance_15.setTransform(451.15,1693.65,1,1,38.1524,0,0,0.1,0);

	this.instance_16 = new lib.v_line_motion("synched",0);
	this.instance_16.setTransform(505.2,1692.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(201));

	// h_lines
	this.instance_17 = new lib.h_line_motion("synched",74);
	this.instance_17.setTransform(540.05,1718.35,0.6,0.6,0,0,180,0.1,0.2);

	this.instance_18 = new lib.h_line_motion("synched",149);
	this.instance_18.setTransform(539.95,1735.9,0.7,0.7,0,0,0,0.1,0.2);

	this.instance_19 = new lib.h_line_motion("synched",0);
	this.instance_19.setTransform(539.1,1773.85,0.8,0.8,0,0,180,-1.2,-0.2);

	this.instance_20 = new lib.h_line_motion("synched",69);
	this.instance_20.setTransform(540,1847.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]}).wait(201));

	// logo
	this.instance_21 = new lib.logo_blinking();
	this.instance_21.setTransform(317,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(201));

	// m_2030_png
	this.instance_22 = new lib.moscow2030_blinking();
	this.instance_22.setTransform(859.5,121);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(201));

	// buildings_png
	this.instance_23 = new lib.buildings();

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(201));

	// tower
	this.instance_24 = new lib.tower_1("synched",49);
	this.instance_24.setTransform(92,815);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(201));

	// rays
	this.instance_25 = new lib.ray_motion("synched",99);
	this.instance_25.setTransform(977.25,991.7,0.8296,0.8296);

	this.instance_26 = new lib.ray_motion("synched",0);
	this.instance_26.setTransform(963,992.45,0.6725,0.6725,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25}]}).wait(201));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#070739").s().p("EhUXCWAMAAAkr/MCovAAAMAAAEr/g");
	this.shape.setTransform(540.025,960);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(201));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-739.4,960,3107.4,1320.6999999999998);
// library properties:
lib.properties = {
	id: '525A79C96AEB704BAC76449C6A0D0980',
	width: 1080,
	height: 1920,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/buildings.png?1753519399833", id:"buildings"},
		{src:"images/logo.png?1753519399833", id:"logo"},
		{src:"images/tower.png?1753519399833", id:"tower"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['525A79C96AEB704BAC76449C6A0D0980'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;