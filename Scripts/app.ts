/// <reference path="objects/label.ts"/>

/**
 * FileName: app.js
 * 
 * @author Tom Tsiliopoulos
 * @date August 3, 2016
 * 
 * StudentID: 300818557
 * 
 * @description This file is the main javascript file for the web site
 * 
 * 
 * 
 * ADDED CHANGES BY Javid Niftaliyev, ID:300742916
 * GITHUB REPO: https://github.com/Web1017/COMP125-S2016-Lesson12-master-Edit
 * AZURE: http://comp125-s2016-lesson12-master-edit.azurewebsites.net/
 * 
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    var canvas:HTMLElement;
    var stage:createjs.Stage;
    var helloLabel:objects.Label;

    // app entry function
    function init():void {

        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame
        main();
    }

    function gameLoop():void {
        helloLabel.rotation -= 5;
        stage.update(); // refresh the stage container
    }


    function main():void {
        helloLabel = new objects.Label("Javid!", "40px Consolas","#000000", 160, 160, true);
        stage.addChild(helloLabel);
    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();