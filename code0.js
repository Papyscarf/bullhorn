gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDGameTitleObjects1= [];
gdjs.Untitled_32sceneCode.GDGameTitleObjects2= [];
gdjs.Untitled_32sceneCode.GDGameTitleObjects3= [];
gdjs.Untitled_32sceneCode.GDInstructionsTextObjects1= [];
gdjs.Untitled_32sceneCode.GDInstructionsTextObjects2= [];
gdjs.Untitled_32sceneCode.GDInstructionsTextObjects3= [];
gdjs.Untitled_32sceneCode.GDStartButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDStartButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDStartButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDMuteButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDMuteButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDMuteButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDgame_9595screenObjects1= [];
gdjs.Untitled_32sceneCode.GDgame_9595screenObjects2= [];
gdjs.Untitled_32sceneCode.GDgame_9595screenObjects3= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDMuteButtonObjects1, gdjs.Untitled_32sceneCode.GDMuteButtonObjects2);

{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMuteButtonObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMuteButtonObjects2[i].SetLabelTextOp("SOUND: OFF", null);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
/* Reuse gdjs.Untitled_32sceneCode.GDMuteButtonObjects1 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMuteButtonObjects1[i].SetLabelTextOp("SOUND: ON", null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MuteButton"), gdjs.Untitled_32sceneCode.GDMuteButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Untitled_32sceneCode.GDStartButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("game_screen"), gdjs.Untitled_32sceneCode.GDgame_9595screenObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDStartButtonObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDStartButtonObjects2[i].SetLabelTextOp("START", null);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMuteButtonObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMuteButtonObjects2[i].SetLabelTextOp("SOUND: ON", null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDgame_9595screenObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDgame_9595screenObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDgame_9595screenObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDgame_9595screenObjects2[i].setZOrder(-100);
}
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "MenuUI");
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "Forest Frolic Loop.aac", true, 60, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Untitled_32sceneCode.GDStartButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDStartButtonObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDStartButtonObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDStartButtonObjects2[k] = gdjs.Untitled_32sceneCode.GDStartButtonObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDStartButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MuteButton"), gdjs.Untitled_32sceneCode.GDMuteButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDMuteButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDMuteButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDMuteButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDMuteButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDMuteButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0));
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Untitled_32sceneCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDStartButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDStartButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDStartButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDStartButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDStartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDGameTitleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGameTitleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGameTitleObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDInstructionsTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDInstructionsTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDInstructionsTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDStartButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDStartButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDStartButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDMuteButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMuteButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMuteButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDgame_9595screenObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDgame_9595screenObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDgame_9595screenObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
gdjs.Untitled_32sceneCode.GDGameTitleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGameTitleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGameTitleObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDInstructionsTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDInstructionsTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDInstructionsTextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDStartButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDStartButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDStartButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDMuteButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMuteButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMuteButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDgame_9595screenObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDgame_9595screenObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDgame_9595screenObjects3.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
