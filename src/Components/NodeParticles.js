import React from "react";

export default function NodeParticles() {
  //   function nodeAnimation() {
  //     (function () {
  //       let lastTime = 0;
  //       let vendors = ["ms", "moz", "webkit", "o"];
  //       for (
  //         var x = 0;
  //         x < vendors.length && !window.requestAnimationFrame;
  //         ++x
  //       ) {
  //         window.requestAnimationFrame =
  //           window[vendors[x] + "RequestAnimationFrame"];
  //         window.cancelAnimationFrame =
  //           window[vendors[x] + "CancelAnimationFrame"] ||
  //           window[vendors[x] + "CancelRequestAnimationFrame"];
  //       }

  //       if (!window.requestAnimationFrame)
  //         window.requestAnimationFrame = function (callback, element) {
  //           var currTime = new Date().getTime();
  //           var timeToCall = Math.max(0, 16 - (currTime - lastTime));
  //           var id = window.setTimeout(function () {
  //             callback(currTime + timeToCall);
  //           }, timeToCall);
  //           lastTime = currTime + timeToCall;
  //           return id;
  //         };

  //       if (!window.cancelAnimationFrame)
  //         window.cancelAnimationFrame = function (id) {
  //           clearTimeout(id);
  //         };
  //     })();

  //     var Nodes = {
  //       // Settings
  //       density: 16,
  //       drawDistance: 24,
  //       baseRadius: 4,
  //       maxLineThickness: 4,
  //       reactionSensitivity: 20,
  //       lineThickness: 1,

  //       points: [],
  //       mouse: { x: -1000, y: -1000, down: false },

  //       animation: null,

  //       canvas: null,
  //       context: null,

  //       imageInput: null,
  //       bgImage: null,
  //       bgCanvas: null,
  //       bgContext: null,
  //       bgContextPixelData: null,

  //       init: function () {
  //         // Set up the visual canvas
  //         this.canvas = document.getElementById("canvas");
  //         this.context = canvas.getContext("2d");
  //         this.context.globalCompositeOperation = "lighter";
  //         this.canvas.width = window.innerWidth;
  //         this.canvas.height = window.innerHeight;
  //         this.canvas.style.display = "block";

  //         this.imageInput = document.createElement("input");
  //         this.imageInput.setAttribute("type", "file");
  //         this.imageInput.style.visibility = "hidden";
  //         this.imageInput.addEventListener("change", this.upload, false);
  //         document.body.appendChild(this.imageInput);

  //         this.canvas.addEventListener("mousemove", this.mouseMove, false);
  //         this.canvas.addEventListener("mousedown", this.mouseDown, false);
  //         this.canvas.addEventListener("mouseup", this.mouseUp, false);
  //         this.canvas.addEventListener("mouseout", this.mouseOut, false);

  //         window.onresize = function (event) {
  //           Nodes.canvas.width = window.innerWidth;
  //           Nodes.canvas.height = window.innerHeight;
  //           Nodes.onWindowResize();
  //         };

  //         // Load initial input image (the chrome logo!)
  //         this.loadData(
  //           "data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%01%2C%00%00%01%2C%08%04%00%00%00%D3tF%FE%00%00%00%02bKGD%00%FF%87%8F%CC%BF%00%00%00%09pHYs%00%00n%DF%00%00n%DF%01%96m%B0%1C%00%00%00%09vpAg%00%00%01%2C%00%00%01%2C%00%FB8ri%00%00%1A%13IDATx%DA%ED%9DytU%D5%BD%C7%3F7%C9%CDp3%11%03%86%40%98Ad%10%28%0A%21%80%A8h%5B%1C%8BZ%B5%7D%AB%C5%D6%F6U%DB%A2R%7D%AE%0Ej%ED%20mi%FB%2CV%8A%AD%96%A7%16%87%E2P%1C%EA%2C8PD%90%19%24%08%09S%20%81%84%21%03%19o%EE%DD%EF%0F%02%0A%24%90%7B%EE%1E%CE%3Dw%7F%F6%82%25%CBu%CE%F9%9D%BD%BFw%9Fs%F6%FE%0D%60%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16K%5C%E03m%80%ABH%20%85T%FC%24%93A6%D9d%90%8C%1F%3F%C9%F8%F1%11%A4%85%20AZh%A0%86%1Aji%21H3%8D%84M%1B%EE%3E%E2%5DX%3ER%C9%A0%2B%3D%E9A%3E%3D%C8%27%8F%1C%B2H%C1%8F%9F%24%12H%C0G%02%09%40%18A%980aBm%02%AB%A5%86J%CA%A9%A0%9Cr%F6P%C9a%2B%B3%23%C4%A7%B0%7C%A4%91K%7F%062%80%01%0C%24%9F%00i%24Gq%C6%20M4RI%29%25m%7F%AA%A8%8Fg%89%C5%97%B0%12%C8%20%9F%E1%8C%60%04%C3%E8F%3A~%05W%09Q%CFA6%B3%9E%F5l%6075%84L%DF%B8~%E2EX%29%9C%C9H%8A%28%E4lr%08h%BAj3%D5%94%B2%82e%AC%A2%82%06%D3%9D%A0%13%EF%0B%2B%9D%01L%A0%881%14%90n%E8~%1B%D9%CBj%96%F1%1F6S%8B0%DD%25%3A%F0%B2%B0%02%F4%E7%02.a%2Cg%92d%DA%18%20%C4%21%D6%B0%88%C5%7CJ%9D%D7%E5%E5Ma%25%D1%8B%8B%99B%21%DD%5D%21%A9%CF%13%E6%00%ABy%937%29%A1%C5%B41%EA%F0%9E%B0%B29%8F%AB%F82%FD%A2%FA%CASM%2B%7BX%CC%8B%7C%C8%01o%CE%5D%5E%12V%02%BD%B8%9C%A9%8C%21%3BF%EE%EB0%EBy%99%97%28%A1%D5%B4%29%B2%89%8D%018%3D~%06s-_e%B0%92%05%04%95%84%D8%C1%CB%3C%CBZ%9AL%9Bb9%9E%14%26%F0%10%3B%08%21b%B4%85%D9%CB%7C.%25%C3tWZ%8E%92L%11%8F%B2%CF%B84d%B4j%9Ec%8A%B656K%87%F8%19%C3%5C%CA%8D%0BBf%3B%C83%5CL%9A%E9%AE%8D_%7C%0C%E1%01v%136.%05%F9m%3F%8FS%E8%BAe%92%B8%A0%3Bw%B0%D9%93%A2%3A%DA%CA%98%C9%00%CF%7CZ%C5%04%E9%5C%C7%074%1B%1Fz%D5-%C4%3An%21%D7tw%C7%07%3EF1%9F%3A%E3%83%AE%AB5%F2%1A%17%D9%87%A2jr%B8%95-%C6%07%5Bw%AB%E0W%F44%DD%F5%DE%25%81%F1%BCH%A3%F1a6%D1ZY%C2%15%A4%98%1E%02%2F%92%CD%1D%EC2%3E%C0%26%DB%01f%D1%C3%F40x%8Ds%F8g%9C%CEU%C7%CF%5B%8B%98D%82%E9%C1%E8%2C%89%A6%0D8%0Di%5C%CF%83%F6%05%16H%A0%1F%97%20%28%A6%D9%B4%29%B1O%1E%7F%A4%C6%F8%5C%E1%A6%D6%C8%93%9CezXb%9D%91%BCB%AB%F1%A1t_%5B%C6d%F7%2F%9D%BA%F5Q%98%C4%95%3C%C4%F9%B1%F3N%A1%91%02%26SO1A%D3%86%9C%0Aw%0A%2B%83%E9%CC%A2%9Fi3%5CK6%17%91%CD%9A%F8%8A%FB%89%9E%AE%CC%A6%DE%F8%03%C7%ED-%C8%02%FA%9B%1E%AAX%A2%2FO%134%3El%B1%D0%C2%2C%E2%0B%A6%87%2BV%18%C9%DB%9E%F6Z%90%DD%D6p%B1%3B_%E4%DD%F5%8E5%81%87%99%E8%CE%8Er%29%DD9%9F26%9B6%E3d%DC%24%AC%C9%FC%85Q%A6%8D%889r8%9F%0A6%E1%B2%202%B7%08%CB%C7%A5%CCa%88i3b%92L%26%B2%9F%8D%EE%CAm%E3%0Ea%F9%B8%8A%3F3%D0%B4%191K%06%13%A8e%9D%9B%A4%E5%0Ea%7D%85%3F%D3%D7%B4%111M%80%F1%D4%B0%C6%3D%D2r%83%B0%A6XYI%20%8DqT%B2%DE-%EFZ%E6%85u%11s%18d%DA%08O%10%60%1C%E5%7C%E2%0Ei%99%16%D6x%E62%D4t%27x%86%0C%C6%B1%C3%1D%8B%0Ff%85u%0E%0F%DB%B5c%A9d2%96%8Dl3m%86Ya%F5%E6%21%26%99%EE%00%CF%D1%85%91%AC%A0%C2%B4%19%E6V%B9s%F9%13%DFp%DF%2A%BB%8F%14%D2%C8%20%9B%00%01%D2%DA%FEN%A2%85%E6%B6v%98%2Aj%DB%FE%DB%A5%D9%87%16%F3%5D%B6%9B5%C1%D4%C0%06%F8%253%DC%E3p%9CL%0E%BD%E8M%01%BD%28%A0%17%3DH%27%F1XK%C2%D7%96%DE%3DL%98V%9A%A9%A5%8A%2A%2A%D9I%09%25%94S%E7%AE%F4%EE%82g%B9%8DJ%93%26%98%11V%02%B72%93t%937~%84dr%18%C8hF3%8A%02%02%A4F%ECY%D8%C4a%2A%29%A5%98%95%AC%A5%82zw%7C%94%85x%90%7Bh4g%80%19a%5D%C6%DF%C97w%D3%00%C9%F4%E5B%C63%8A%DEdIy%D5l%A4%92%0D%7C%CCG%AC%E1%80%F9%F9%EB0w%F1%8893L%08k8%F3Mn6%27%D1%9D%09%5C%CA%24%0A%14%A4%FF%13%D4Q%CC%DB%BC%C5%06j%CC%CE%5Ee%DC%C4%3B%A6.%AE_Xg%F27%A6%9A%BA%DD%00%E3%B8%92%8B%19%A88%05%95%E0%10k%F97%AF%B0%DDdY%8A%15L%E3Ss%97%D7I2%BF3%15y%93%29.%13%0B%C4%01%A1%8F%A0%28%163%C5%28%91l%CE%11%F0%19rL%0F%B9%1E%AE%E7%A0%89%0E%CE%16S%C5BQ%ADQTG%09%8B%5D%E2a1V%24%99%11V3w%C5C%A4%D3P%D6%E9%EF%DCTq%85xU%D4%19%10%D5g%94%89%99b%80%F0%99%90%D6n%26%9B%1Ev%D5d1_w%B7%FA%C4%601G%1C4%2A%AA%23%84%C4z%F1%03%91kBZ%EF%D1%CB%F4%D0%AB%C4%C7m%BAS%7Bd%89%FF%16%1BD%D8%B4%A6%8E%D1%24%5E%11%85%FA%E7%AD%10%FF%EB%E5%24Hc%D8%A6w%AE%2A%14%CF%8B%06%D3Z%3A%89Rq%8B%C8%D0-%ADC%5Cmz%F8U%91%C5%02%9D%5D%99%2A%A6%89%12%D3%1A%EA%80z%F1%98%18%A8%5BZ%1F%D2%5B%EF%80%EB%F2n%98%C6%ED%FA%8A%91%E4%F2%13%EE3%BD%B4%DF%21~F1%9Abv%EB%BChO%9A%F8%C0%FCv%80l%86%F1%89%BE_%E7%10%F1%9Ch1%3D-%9D%96M%E2J%91%A0s%CE%DA%CB%C5%3A%87%5C%C7%8C%95%CA%2F%98%A2%E7v%7C%5C%C2%5C.1%EE%18%7Bz%BAq%215l%D4%B7.%9FA%1Eo%E8K%23%A2c%04%A6p%2F%A9%3An%C6%C7%E5%CCa%98%8EKI%20%93%89T%EB%0C%AC%E9%C3%1EV%E8%BA%98zaue%96%9E%B1%3E%12%9C%18K%09X4%07%D6%24%D2%9B%C5%1C%D0u1%D5%7C%8B%5Bt%CC%8B%3E%AEa6%7D%D4_H%2A%9A%03k%BA%D1%CC%BBz%A6H%D5C%3E%88%DF%EBH%23%9D%C0u%CC%8E%C9%05%E6%0C%0A%29f%AB%9E%8B%F9%E8%C72v%E9%B8%94Za%25%F2%23%AE%D5%E1%9As%19%0FQ%A0%FE2J%C8b%18Ku%F9%11g%12%E0u%1DI%26%D5%0Ak%04%F7%EBp%DB8%9791%9D%F8%A1%3B%F9%2C%D6%F5%C1%D6%8BU%3A%26H%95%C2J%E4%0E.W%7F%0B%7Dx%88q%EA%2F%A3%94%B3%10%2C%D1%B3%F4%90J%1A%AF%D1%A2%FA2%2A%855%8A_%D1E%F5%0D%E40%8B%A9%CA%9E%B6%21%82%B4%D0D%13AZ%09%E3S%E4%DC%94%C006%E9%0Aa%EE%C9%1A%B6%A8%BE%88%BA%00%AC%24%A6%A9%FFHK%E1N%BE.YV%ADTSA%19%BB%28c%3F%0D4%D2%40%10%3F%29%A4%92C%1Ey%140%88ndJ%DD%A3%CA%E1N%3Ef%8F%EA%0E%03%C8%E2%3B%BCG%9D%DA%8B%A8%7B%B1%1E%CDB%F5%1B%9F%D7%F1%88%C4I%F10%25%ACd%25%AB%D8E%03%8D%1D%3C%9A%12I%23%8B%3E%0C%A7%90B%FAJ%2B%3D%1F%E2W%CC%D4%F38%AC%E3%1B%BC%AC%E3B%F2I%E0%B7%EA%F7%BF%06%89U%92v%EE%82b%9BxT%5C%29%F2%84%3F%82%EB%FBE%0Fq%B9%98%2B%B6J%DA%9B%DC%25%8At%ED%1C.%88%D5%82%E6%83%28V%DD9%A9b%8E%14%27%BEV%B1N%DC%25%CEv%1C%F2%E0%17%83%C4%EDb%A5%14q%FDC%A4%EA%11VU%ACf%CD%F8%1F%F5%B187%88%9A%A8%072%2C6%8B%BBE%BF%A8%BD%3A%7D%A2%40%CC%90%E0%ADZ%25.%D45g%3D%AC%CF%8DI%1E%F9%2CW%DD1g%89%D5Q%CB%AAN%3C%2A%86Hs%5E%F1%89%B3%C4%1Cq%28J%9B%1E%17%29z%84%B53%163T%DFH%93%DAn%F1%8B%D9Q%CBj%93%F8%96H%97lW%AA%B8V%AC%8F%CA%AAJ1I%8F%B0%04%BFt_%AE%9FS%93%CEB%D5%9D2ATD5%7Ca%F1%BA%18%A5%C8%B6Q%E2U%11%8A%C2%B6%87%23%FA%80%88%A2%AD%8A%B5b%C0ET%AA%ED%92T%F1XT%B2j%11%F3E%2F%85%F6%E5%8By%22%E8%D8%BA%AD%BA%3C%E2%1B%F9%9A%3A%11%C8_H%F6q%05%DD%14%CA%168%9F%AB%A28%BA%99%B9%CC%A0L%A1%7D%15%FC%98y%8Ewz%FB%E8%8A0Mej%2C-%3A%F4d%8D%DA_Z%86x.%8A%D9%AAU%CC%15%D9%1A%E6%833%C4%5C%D1%EA%D0%C6%97%A4%BF%FBu%D0%CA%19mZ.%9D%E7%EB%AA%C3R%BF%22j%1D%CB%2A%2C%9E%12g%EA%194%91%27%5Eqh%E5%3E1V%93%8D%DC%ADJ%06%B2%1F%85%C9%7CY%AD%7F%7B%3A7%92%E9%F8%E8w%F8%A9%B6%0C%8A%FB%B8%CF%E1%B6r7%26h%B2%91%2F%AArk%92-%AC%5ELT%DB%13%A3%A3X2%DE%C6%CF%F5%B8O%B6%B1%9A%DFp%D8%C1q%3E%C6%EA%89%3E%81%11%8CPsb%D9%C2%9A%A0%D6%3F8%91%AB%C9uxl%03%7F%60%B9J%E3%DA%E1E%DEvt%DC%17T%7F%FF%1C%25G%D5%97%82%5Ca%A5%F0E%92U%F6C_.s%7C%EC%02%E6%A3%3Buc%1D%8FR%ED%E0%B8%1E%0C%D7e%E2d%CEPqZ%B9%C2%EA%CDx%B5%BD0%85%01%0E%8F%2C%E1A%EA%D5%1A%D7.%EF%F3%BA%83%A329W%97%81%C3%19%A9%E2%B4r%85UHO%95%7D%90%C35%0E%3D%13C%CCc%BDJ%D3%3A%A4%81%F9%D4%3A8n%B0%AE%CCC%5D%D4%F89%C8%14V%22Ej%7B%E3%3C%C7%BF%E3%15%06%1E%83GY%CEZ%07G%F5%D7%97%06%7F%5C%14%9F%D9%1D%22SX%B9%AAc%1A%26%91%ED%E8%B8f%FE%AE%C7%E9%B7%5D%0E%F2%AA%03Q%178%BCW%07%8CP%E1B.SXC%D5%C6%B7%E7p%BE%C3%23%D79z%CF%91%C7%9B%94G%7CL%96%BE%A8%EEn%8C%95%7FR%99%C1%14Ejcr%06%3BL%01%11%E69%C3%C5%B0%B6%F07%CE%8B%C8%9B%DDG%8B%BE%3C4~%8A%F8%87%ECzS%F2%84%95%AEB%F7%9Fg%A2%C3%15%AC%12%E3q%03%8D%CC%C2%1F%D1%E3%D0%87P%1F%FA%F7%19c%C8e%9F%DCS%CA%13V%AE%DA%A5%97t%CEw%E8%97%F66%A5%2A%0D%EB%14-%3Ae%129%BD%E8%2F%5BX%F2%DE%B1%06s%A6%CA%7B%EF%E3p%23%BE%9E%B7L%16%1D%89%0D%B2%E5o%EC%C8%13%D6%08%B2T%DE%FBH%BA%3A%3An%8B%BE%5Cc%B1K%22%23d%C7%C4%CB%12V%B2%AA%CD%CC%A3%0Cu%B8-%BBX%F6%1C%EFM%A4O%0B%B2%84%D5%85sT%DEw%C0a%A9%FBz%96%18%5B%18%8D%29%06%C8%F6%7F%97%25%AC%1Ej7s%B2%19%E2%E8%B8JC%1B91G6%83%E5%9EP%96%B0%06HKa%D0.%7D%C9st%DCF%AAT%9A%E5%1D%02%8Ew%F7%3B%40%96%B0%06%12Py%DFC%1D%BE%02%ACv%E4h%17%97%0C%94%FB%FA.GXI%B2%F5~%22C%1D-%B8%D5%3B%DA%FE%8DS%06%CA%7D%E6%C8%11V%86%DAL%8D%01%FA%3A%3A%AEN%7D~1%EF%D0W%EE%AE%B7%1Cae%AA%DD1MuX%17g%AF%7D%C3%EA%3C%5D%E4f%07%96%23%AC3%D5.%8E%06%1C%BE%BAo3%E23%1A%A3%A4%B9QX%3D%D4%06%95tu%E8%89V%AA%AFtL%EC%93%26w%25K%96%B0%94%86j%E7%3B%D2%AD%D0%1A%EA%E5%01%A4%D6%E1%93%23%AC%7C%B5%F9%E2%BB%3B%12V3%FBU%1A%E5%3D%F2e%3A%96%CB%10V%92%EAt8%F9%8E%92%CFYaE%88%D4%17%1A%19%C2JQ%EB0%83C%07%BF%16%5D%85%AE%BCB%9E%CC%19K%86%A3%9F_%ADKr%A2%C3E%FD%26%0EJ%B7%A5%2B%3D4%A5%C1%13%EC%D1%FD%C3%C8%8A%3Ba9%9B%A1%0F%D3%24%DD%96%AB%B9%1F%9F%06%7F%09%1F%21~%CA%E3%CA%AFs%1C%292%C3%C0d%08%2BY%ED%2AV%82Ca5%29%28%CC%17%A0%9B%A6%19%2B%A4%3F%27%9A_%E6%DA%BB%8Cw%ACt%B5%ABXNg%ACf%05%C2%D2%E9%DB%A5%DD%8F%CCu%C2%CAV%9B1%3C%D1%E1o%B7E_%B5eo%E0%3Aa%A5%2B%2C%F5%84%F3Ga%B3%0D%A2%88%8CD%99Q%FD2%84%E5WTk%ED%D8%FD%3A%13V%D0%3A%25GF%82%CC%27%8F%1Ca%29~%9Fu%26%90%A4X%CB%8Fo%1A%9F%DB%84%95%A4v%C6%0A9%5C6HU%5EI%DDc%C4%DB%8C%E5TX%29j%F5%EEE%24%BE%2B%C7%C0%3BV%88FG%C7%A5ZaE%8A%CBf%2C%C5%84%ED%A30%06%91%21%AC%A0%DA%05%23%A7%8F%C2L%7D9%F1%BC%82%D3%2A-%ED%20GXJ%BF%EB%9D%BF%BC%2Bv%BA%F0%1E%12sd%C5%C0%8C%15v%18%1B%98%E2%D0S%3En%09%C7%D9%8C%85%C3%22%25v%C6%8A%10%E1%3Ea%29%DE%94%AB%A0%D9%C1Q%89tWk%96%D7p%DD%8C%D5%20%3B%7F%E5%89T8%7C%CB%1A%A0%B6L%86%D7%08%C9%8C%96%93%21%AC%1A%99Jo%8F%0A%87%2BY%83U%240%F7.Aj%E4%9DL%86%B0T%B8j%1E%C7%21G%F5h%A0%97%AERG%DE%C0u%C2%92jP%7B49L%A7%9D%A56%A5%84%D7%88%3Fa5%3A%AC%2B%91%A1%AF%86%96%17h%A6N%DE%C9%E4%08%ABZ%F5%1Douxd%A1%E4%D5wO%3B%E2%D4%3A%FA%F8%EE%00%19%FB%D9%CD%EA%F3%C7n%A2%D1%91%83%F2%28%F2%29%91h%C7A6%3B%16W%22%05%EE.%1A%BF%CFm%C2jU_Qd%13%D5%8E%06%A5%3B%E7J%15%D6%0B%0E%2B%A6B%98%3C%9E%E7%2C%05%7D%23%8Dr%87%1F%DF%ED%22%C7%03%A7%82%90ZW%82%BD%ECp%94%B3%22%95%F1%3C%27q%FD%B6%21%8A%FC5%5D%D5F%C9EO%B9%CC%F2%19r%DCf%A4j%BD%3Dj%F9%C4%E1%91%17%A9N%2C%D1iz%BB%DB%DBB%C8%7D%EE%C8%12%96%E2%95%ACV69%3Cr%10%13%D5%9A%D6i%FA%A8%CD%FF%1B-N%D7t%3A%40%8E%B0%F69%AAN%1B%11%1B%1C%AEi%A4r%99%AE%22%B8%A7%A1%B7%BB%1D%0F%1B%29%93y%3A9%C2%AAc%87%EA%FB%FE%C4%F1%25.p%C52i%BA%C3j%8B%DA8%C4n%99%A7%93%23%AC%C3R%3F%BD%DA%A5%92%A5%0E%8F%EC%C55.X%7F%2A%E0%0B%A6M85%3B%E4%3Eu%E4%08%2B%A4%BE%24%60%88%F7%1D~%21%F8%B8%9E~%AA%CD%3B-c%DC%EEvX%22%B7%D6%82%AC%60%0A%0Dyd%3Fv%3CW%0F%E1j%D5%C6%9D%86%24%26%BA%E4M%AFCJ%E5f%24%90%25%2C%C9zo%8Fr%96%3B%3C2%91%FF%D2W%BA%BB%5D%0A%5C%F3m%DA%01%0D%B2_fd%09%AB%DC%E1%3Eq%044%F3%BEc%C7%AF%91%DCh4%D2%EDj%D9%C5%B5dS%C3%A7rO%28%AB%B7kt%D4o%5B%E28%C1v%227q%AEz%03%3B%A07%DFP%9B%90%27zJeo%CB%C9%12V%8B%0Ea%95%F2%96%E3c%FBp%9B%B1%95%EFkU%97%9F%8D%9Eu%B2%5D%9F%E4%3D%1F%A4%9Bv2%AD%2C%8C%C2Cg%2A%D7%AA6%B0%5D%86q%93%DB%E7%ABV%D6%CB%0E%88%91%27%AC-%0E%A3%B4%22b%85%E3%17x%C8%E0g%8CVo%E2%09t%E1n%F7%BB%1B%2Ax%91%91%27%AC%03l%D0%D1%03%FF%8A%22rc0%F7i%F6%82O%E4fC%F3dD%94%B1M%F6%29%E5%09%AB%81%15%3A%FA%E0-%C7%DE%A4%00%971Cm%26%DE%13%F8%12%B7%C7B%08%DA%0A%F9%29%F1e~%83%7F%C4%21%F5%7D%B0%8B%85Q%04%5E%27q%2B%B7h%7B%E3%29d%96%DC%CAGjha%99%FC%C8P%99%C2%DA%24%7FB%3D%990OEU75%93%7B%F8%A6%965%AD%E1%CC%E6%1C%0D%D7%89%9A%2A%3E%96%7FR%99%3D%7C%90%8Ft%F4%C3f%9E%8C%EA%13%26%97%99%5C%AF%DC%85e0%B3%19%A7%A3%3B%A2g%BD%8A%FA%7B2%85%15b%99Lw%FC%8E%10%3C%C3%C6%A8%CE%90%CF%83%7CG%E9%BB%CF%18%1E%E1b%F5%5D%21%87e2%C3%BE%8E%22%F7%99%B0%5C%FD%C6%0E%40%29OD%F9Rp%26%B3%B8Cn%D9%F6c%F8%98%C2%FF1IGG%C8%A0%9A%25%2AN%2BWXe%8E%9D%A6%22%E4Y%D6Dy%86.%DC%CB%1F%E8%2B%DD%B2Ln%E1%11%F7%AF%5C%7D%C6%065%7B%26r%85%D5%CC%DB%3A%1E%86%B0%9B%BFD%9D%1A%25%C0%CD%3C%CD%97%A4~%23%0Ee%0E%7F%A4%97%8E.%90%C5b%05%D5%F7%90%9F%DCv%A9%5C%CF%E9%8Ey%81%17%A2%3E%87%8F%22%9E%E0%5E%FAJ%F10%CD%E1%5B%FC%93i%EE%0E%998%91%83%2C6mB%E7H%E61%84%9E6B%14%0B%19%B4%8A%D5%E2f%D15%2A%5B2%C4T%F1%86h%90b%CFQ%ABn%D1%D1%8B%EF%91%A3F%08%B2%BF%BAC%A4r%85%9E%15%C8%7D%84%B8D%C2%A5%12%C8%E7%12%C6%91%CC~%0EG%BC%F8%EA%23%8F%CB%B9%87%3B%19%26%B5%08%9A%E05VJ%ED%AFv%2F%F2%A8%E3%D0%EE%D3%20_%02K%D8%A4k%AF%F7i.%E4%06%29gJe2%13%D9%C2%CB%BC%CAfj%3A%E5%A5%9B%40%26%03%B8%94%AB8%C7%DD9%19%3A%A6%82%D7U%9DZ%BE%B0%CAyM%97%B0j%F9%3D%239%5B%D2%D9%92%19%CE0nf3%CB%F8%90%8D%1C%A4%BE%DD8%DC%14%D2%C9a%18%E3%18%C70r%DD%1D-xj%DE%A7X%D5%A9U%3C%B4%5E%E5%7B%BA%12%16%AF%E6%E7%CC%A5%AB%B4%F3%F9%C8e%02%13h%E0%10%7B%D8%C6v%AA8L%3D%87%11%04H%27%9Dn%F4%A7%1F%BD8%83%80%0B%82%CA%A2%A2%91%17%D5E%B0%AB%10%D6z%FE%C35%0A%3B%E48%16%D2%8F_J%F7X%08%10%A0%27c%01A%88VB%08%92H%F4V%A9%BAO%D4%2C%8D%1EA%C5nl%03%0B%F5%ACf%01%B4%F20O%28%CC%07%EE%23%89T%D2%C9%20UJ%99%B3%90%FA8%B9%CE%F2o%95%E9%A7%D4l%F3%BF%13%F5%C2x%04%D4q%BF%AAO%1B%05%ACd%9E%EA%EC%E5%9Dc%27%0BU%9E%5E%8D%B0%F6%F2%AC%CE%82%CC%BB%F9%89%FAOs%29%EC%E3%17%BC%243%9D%BAs%FE%ED8%81O%A7P%E5%98%F4rTNS%11%B3%96%E9%AC%D6yAG4%F3%27%DEd%BB%FA%A8%93%D3S%C5%02%B5%13%A7%2AamW%3B%D1%9E%CCr%A6%B3V%EF%25%23%E6y%FE%86%E0%10%3BM%1B%02%8BTO%F1%AA%84%15%E69%DD%FD%B7%8C%E9%3A%82%1B%1D%F31%BF%A6%1A%A8%93%1Dt%1C9%B5%3C%A5%3A%07%A3%3A%1F%DD%8D%12v%89%23d%29%D3Y%A7%FB%A2%9Dd%2B%3Fn%13TkT%E1%20RX%C4%FB%AA%2F%A1NX%AD%CCW%9F%8E%EDD%96%F0%5D%16%AB%AEr%E7%80%5D%DC%C1%BB%C7%FE%B5%D5%EC%92C%0D%F3T%F8%8C%1E%8F%CA%A8%82%0D%3C%AB%DA%FC%93Y%C9M%3C%A1o%19%ADSTp%17%AF~%EE%DF%5B%D5%8F%EB%A9x%8B%F7%D4_D%A5%B0B%3C%A9%3E%21%DB%C9%EC%E4G%FCVu%B1%8C%08%D8%CF%CFx%FE%B8Yt%9F%1E%0F%EE%F69%C4%3C%1D%EB%1Dj%E3%A0%3E%E1i%D5E2%DB%A3%9A%DF1CG%2CZ%27%A8%E2%9E%93%A2%8A%EA%F4%AE%C5%1C%CFk%7C%A0%E32j%85%15%E6%093%1Fj%CD%FC%83%AF%F1%82%EA%2C%E1%A7e%0B%DFog%A5%BD%C9%DC%EB%FB%1E%E6%AA%FE%1E%3C%82%EA%C8%CDR%FEj%E6%85G%F01%DF%E1.%F5YwO%C1R%BE%CD%0B%ED%AECn5%D5%29O%EAI%84%A0%5EX%F0%DC%E7%3E%874S%C3_%B8%81%05F%BE%C1Zy%9Eo%F3a%07%FFw%8B%FA%CC%9A%ED%B1Q%DFF%A5za%1D%E4%21%1D9%1D%DAG%B0%9A%EF%F1%03%FE%A3y%86%28g%26%3F8%C5%03%AF%8C%2A%FD%9D%D1%C2_%CD%2F%A1%C9%24%85%87u%05Xt%D4%F2%C4%CDb%B9h%96%18%EC%D01%8D%E2E1Q%24%9D%26%F8%E2%15%FD%C1%14%AF%93kZ%0A%B2%19%CA%06%D3%D2%F2%89%1E%E26%B1J%B1%B8%C2%A2X%7C_t%E9%84%3D%0F%E8%16V%05%93u%0E%B9%1E%87%ED%2AZ%F8%A2%D4%20%16%07%D4%B1%82%D7%28%06r%95%B8%15%07%F9%94G%B9%977%3A%F5-%DA%9F%29%A7y%0FyCf%12%980%7FV%EA%0Fy%12%BA%3Cm3y%84%AF%E9%BB%ADS%91%CE9%5C%CEe%9C-1%B4%B4%915%2C%E0%15vu%DA%0D%EDl%AE9eZ%92%B0%DC%F0%AF%A5%7C%5DW%28%F1%11%F4%B9p%9F%C7%02%FA%EB%BC%B5S%91%40%1E%E39%9F1%0C%22%27%0A%C7%7FA%03e%7C%CCk%2Cb%BF%0B%F7%28%DB8%C4%B7yI%EF%25%F5%09%CB%C7%0F%F9%BD%BB%02%F0%12%C9%A6%3Fc%18%CB%B9%E4%13%20%B5%D3%1F%C9a%9A%A8c3%1F%B2%8C%B5T%BAlo%F2%24c%1F%E0n%99%D5S%3B%83%CE%A0%93L%E60M%EF%EDu%8Ed%CE%A0%27%7D%E9%D3%D6%BA%91%D4%16%93%93H%22%10%3A%D6%82T%B2%93%1D%ECd%27%A5%EC%A4%D6%C4%8EU%A4%BC%CB4%B9%25%E3%3A%83%DEh%A6%21%3C%CD%28%DD%B7%18%09%09%A4%11%20%83t%02%04%08%90N%1A%D0x%AC%D5QC%03%8D%B1%20%A7%A3%EC%E6%9B%3A%BC%19L%F3U%0E%9A%5Ex%88%AB%D6%C4%9Df%8A%08%E9%8E%0F%2F%21%83%F1F%EB%25%C5%17%CFr%BF%9EM%E7%13%D1-%AC%10%EB%19%C4%10%13%B7%1A%87%7C%C4%ED%94%9B%B9%B4%FE%8C%16%0Dl%A4%28%16%D2%9F%C7%3C%BB%B8%8DU%A6.n%22UJ%15%BB%98L%A6%A9%5B%8E%13%EA%B8W%7F8%CBg%98%C9%C1%B3%8Df.%88%85Z%201K%889%CC6%19%CBoFX%82%0D%04%28%8C%E5%D4R%AEF%B0%80%7B%E4V%A5%8F%14SC%DB%CAj%F2%19%E9%A5%AC%40.%E2%1Df%98zi%3F%8A%B99%A3%91U%0C%E6%2C%B3%B7%EFIV3%DD%7C%B0%B5%C9%87Q-k9%97%02%D3%5D%E01J%B9UOM%A3Sc%F6-%A7%8A%8D%8C%A1%BB%E9N%F0%10e%CC%E0%0D%D3F%80ia%C1%1E61Ns%D9S%EFR%C1%9D%FC%CB%B4%11G0-%2C%D8%C9%16%8A8%C3%B4%19%1E%A0%8A%1F%F3%8C%5B%9C%C2%CC%0B%0B%B6%B1%9D%09t1mF%8Cs%90%7Bx%DC%3Dn%17n%10%16l%A5%94%B1v%D6%8A%82%2A%EE%E61w%247u%1B_%A2%D8%B8%93I%AC%B6%0An%D4V%E8%3A%06%B9%90u%C6%87%28%16%5B%197XG%A4SS%C4r%E3%C3%14k%AD%84%A9n%DC%BFp%C7%3B%D6Qv%B3%9C~%0CpcG%B9%94UL%E7M%5C%F2%25%F8y%DC%25%2C%A8%E4%03%BA1%D4uv%B9%11%C1%3B%FC%90%E5%A6%CDh%1F%F7%0D%60-%EF%E3g%A4u%AA9%0DA%FE%C9%0C%93%19%DCN%8D%FB%84%05%8D%7CH5%A3%14%15%99%F7%06%B5%3C%C4%BD%2Ak%E1x%95D.g%8D%F1%17c%B7%B6%ED%DC%24%BD%E0Y%1Cq%0E%2F%124%3E%88nka%96r%81%FB%3Fo%DC%F8%28%3CJ%25%8B%F11%DC%FE6%3FG%23%CF0Cgm5%AF%92%CA%0D%AC7%3EK%B8%A5%ED%E46%B2L%0F%89w%18%C6S4%18%1FT%D3-%C8%5BL%B4%2B%ECr%C9b%06%3B%8C%0F%AD%C9%B6%9F%DFX%87H%15%24P%C8%0Bq%3Ao%05y%97K%ED%BA%9E%3A%B2%B9%85b%C2%C6%07Zo%DB%CD%BD6n%5C5%3E%863%8F%1A%E3%83%AD%AB5%F0%12%13%ADC%8C%1E%02%7C%85E4%19%1Ft%D5%AD%95%95%DCd%FDj%F5%D2%8D%E9l%24d%7C%F0U%B50%3B%B8%8F%3E%A6%BB9%1E%F11%88%DF%B1%D3%93o%5C%95%3C%C2%B9%AE%5E%BA%F68I%8C%E2O%94yJ%5C%FBy%82Iv%AF%C1%3C~%CEc%0E%7B%3C%21%AE%03%3C%CDdw%E5%95%8Eo%92%19%CB%03%94%D2j%5C%1AN%5B%98%3D%CC%E3b%89%15%0D%8C%E3%FA%5D%F2N%92%C4%20%AE%E1%3A%86%C4%DCBb%88m%BC%C8%B3lpw%B2%F8H%F1%8A%B0%8E%DCK%01%97r5%85t%89%91%FB%AAc%1D%2F%F12%DB%BC%17%11%18%1B%03%10%09Y%8C%E6J%A60%D0%D5sW%2Be%2C%E2%25%96q%10%17%86BD%8F%F7%84%05%90DO%263%85%22%BA%9B%AE9v%12%21%F6%B3%8A7y%8Bm%BA%CB%90%E8%C4%9B%C2%3AB%1A%FD%98%C4%25%14%92%E7%0Ay%858%C0j%16%F1.%9F%9A%A9%DC%AB%13%2F%0B%EB%08%01%FA3%9E%22%C6%D2%9BtC%F7%DB%40%05%ABX%C6R6s%D8%9B%8F%BE%13%F1%BE%B0%8E%90L7FPD%21C8CI%1D%CC%F6h%A4%9A%12V%B0%8C%D5%EC5S%21%C2%14%F1%22%AC%A3w%9BA%1EC%19%C1%08%86%93G%86%92%17%FC%20%F5%EC%A7%98%F5%ACg%23%E5%D4u%BA%3A%A6%87%88%2Fa%7DF%1A9%F4a%60%5B%2B%20%40%1A%C9Q%F4F%0BM4%B0%97%92%B6%B6%9D%034%C4%C7C%AF%7D%E2UX%9F%91B%06%B9%F4%24%9F%7C%BA%93O%1E9t%21%80%1F%3FI%24%E0k%FB%03%820a%04aB%04%09%D2H%0D%D5TR%D1%D6%F6%B0%9F%3A%9A%E2YN%9Fa%85%F5y%7C%24%93%8A%1F%3F%E9d%D3%85t%92%F1%93%84%1F%3F%D0J%90V%82%04%A9%A7%86j%EAi%21H3%CD%EE%C9%A3g%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C%16%8B%C5b%B1X%2C1%C9%FF%03%FC%D6%C8%19R%FCk%90%00%00%00%25tEXtdate%3Acreate%002014-03-28T11%3A47%3A11-07%3A00%11n%C5h%00%00%00%25tEXtdate%3Amodify%002014-03-28T11%3A47%3A11-07%3A00%603%7D%D4%00%00%00%19tEXtSoftware%00www.inkscape.org%9B%EE%3C%1A%00%00%003tEXtTitle%00White%20Letter%20%27F%27%20centered%20inside%20black%20circle~%DBtp%00%00%00%00IEND%AEB%60%82"
  //         );
  //       },

  //       preparePoints: function () {
  //         // Clear the current points
  //         this.points = [];

  //         var width, height, i, j;

  //         var colors = this.bgContextPixelData.data;

  //         for (i = 0; i < this.canvas.height; i += this.density) {
  //           for (j = 0; j < this.canvas.width; j += this.density) {
  //             var pixelPosition = (j + i * this.bgContextPixelData.width) * 4;

  //             // Dont use whiteish pixels
  //             if (
  //               (colors[pixelPosition] > 200 &&
  //                 colors[pixelPosition + 1] > 200 &&
  //                 colors[pixelPosition + 2] > 200) ||
  //               colors[pixelPosition + 3] === 0
  //             ) {
  //               continue;
  //             }

  //             var color =
  //               "rgba(" +
  //               colors[pixelPosition] +
  //               "," +
  //               colors[pixelPosition + 1] +
  //               "," +
  //               colors[pixelPosition + 2] +
  //               "," +
  //               "1)";
  //             this.points.push({
  //               x: j,
  //               y: i,
  //               originalX: j,
  //               originalY: i,
  //               color: color,
  //             });
  //           }
  //         }
  //       },

  //       updatePoints: function () {
  //         var i, currentPoint, theta, distance;

  //         for (i = 0; i < this.points.length; i++) {
  //           currentPoint = this.points[i];

  //           theta = Math.atan2(
  //             currentPoint.y - this.mouse.y,
  //             currentPoint.x - this.mouse.x
  //           );

  //           if (this.mouse.down) {
  //             distance =
  //               (this.reactionSensitivity * 200) /
  //               Math.sqrt(
  //                 (this.mouse.x - currentPoint.x) *
  //                   (this.mouse.x - currentPoint.x) +
  //                   (this.mouse.y - currentPoint.y) *
  //                     (this.mouse.y - currentPoint.y)
  //               );
  //           } else {
  //             distance =
  //               (this.reactionSensitivity * 100) /
  //               Math.sqrt(
  //                 (this.mouse.x - currentPoint.x) *
  //                   (this.mouse.x - currentPoint.x) +
  //                   (this.mouse.y - currentPoint.y) *
  //                     (this.mouse.y - currentPoint.y)
  //               );
  //           }

  //           currentPoint.x +=
  //             Math.cos(theta) * distance +
  //             (currentPoint.originalX - currentPoint.x) * 0.05;
  //           currentPoint.y +=
  //             Math.sin(theta) * distance +
  //             (currentPoint.originalY - currentPoint.y) * 0.05;
  //         }
  //       },

  //       drawLines: function () {
  //         var i, j, currentPoint, otherPoint, distance, lineThickness;

  //         for (i = 0; i < this.points.length; i++) {
  //           currentPoint = this.points[i];

  //           // Draw the dot.
  //           this.context.fillStyle = currentPoint.color;
  //           this.context.strokeStyle = currentPoint.color;

  //           for (j = 0; j < this.points.length; j++) {
  //             // Distaqnce between two points.
  //             otherPoint = this.points[j];

  //             if (otherPoint == currentPoint) {
  //               continue;
  //             }

  //             distance = Math.sqrt(
  //               (otherPoint.x - currentPoint.x) *
  //                 (otherPoint.x - currentPoint.x) +
  //                 (otherPoint.y - currentPoint.y) *
  //                   (otherPoint.y - currentPoint.y)
  //             );

  //             if (distance <= this.drawDistance) {
  //               this.context.lineWidth =
  //                 (1 - distance / this.drawDistance) *
  //                 this.maxLineThickness *
  //                 this.lineThickness;
  //               this.context.beginPath();
  //               this.context.moveTo(currentPoint.x, currentPoint.y);
  //               this.context.lineTo(otherPoint.x, otherPoint.y);
  //               this.context.stroke();
  //             }
  //           }
  //         }
  //       },

  //       drawPoints: function () {
  //         var i, currentPoint;

  //         for (i = 0; i < this.points.length; i++) {
  //           currentPoint = this.points[i];

  //           // Draw the dot.
  //           this.context.fillStyle = currentPoint.color;
  //           this.context.strokeStyle = currentPoint.color;

  //           this.context.beginPath();
  //           this.context.arc(
  //             currentPoint.x,
  //             currentPoint.y,
  //             this.baseRadius,
  //             0,
  //             Math.PI * 2,
  //             true
  //           );
  //           this.context.closePath();
  //           this.context.fill();
  //         }
  //       },

  //       draw: function () {
  //         this.animation = requestAnimationFrame(function () {
  //           Nodes.draw();
  //         });

  //         this.clear();
  //         this.updatePoints();
  //         this.drawLines();
  //         this.drawPoints();
  //       },

  //       clear: function () {
  //         this.canvas.width = this.canvas.width;
  //       },

  //       // The filereader has loaded the image... add it to image object to be drawn
  //       loadData: function (data) {
  //         this.bgImage = new Image();
  //         this.bgImage.src = data;

  //         this.bgImage.onload = function () {
  //           //this
  //           Nodes.drawImageToBackground();
  //         };
  //       },

  //       // Image is loaded... draw to bg canvas
  //       drawImageToBackground: function () {
  //         this.bgCanvas = document.createElement("canvas");
  //         this.bgCanvas.width = this.canvas.width;
  //         this.bgCanvas.height = this.canvas.height;

  //         var newWidth, newHeight;

  //         // If the image is too big for the screen... scale it down.
  //         if (
  //           this.bgImage.width > this.bgCanvas.width - 100 ||
  //           this.bgImage.height > this.bgCanvas.height - 100
  //         ) {
  //           var maxRatio = Math.max(
  //             this.bgImage.width / (this.bgCanvas.width - 100),
  //             this.bgImage.height / (this.bgCanvas.height - 100)
  //           );
  //           newWidth = this.bgImage.width / maxRatio;
  //           newHeight = this.bgImage.height / maxRatio;
  //         } else {
  //           newWidth = this.bgImage.width;
  //           newHeight = this.bgImage.height;
  //         }

  //         // Draw to background canvas
  //         this.bgContext = this.bgCanvas.getContext("2d");
  //         this.bgContext.drawImage(
  //           this.bgImage,
  //           (this.canvas.width - newWidth) / 2,
  //           (this.canvas.height - newHeight) / 2,
  //           newWidth,
  //           newHeight
  //         );
  //         this.bgContextPixelData = this.bgContext.getImageData(
  //           0,
  //           0,
  //           this.bgCanvas.width,
  //           this.bgCanvas.height
  //         );

  //         this.preparePoints();
  //         this.draw();
  //       },

  //       mouseDown: function (event) {
  //         Nodes.mouse.down = true;
  //       },

  //       mouseUp: function (event) {
  //         Nodes.mouse.down = false;
  //       },

  //       mouseMove: function (event) {
  //         Nodes.mouse.x = event.offsetX || event.layerX - Nodes.canvas.offsetLeft;
  //         Nodes.mouse.y = event.offsetY || event.layerY - Nodes.canvas.offsetTop;
  //       },

  //       mouseOut: function (event) {
  //         Nodes.mouse.x = -1000;
  //         Nodes.mouse.y = -1000;
  //         Nodes.mouse.down = false;
  //       },

  //       // Resize and redraw the canvas.
  //       onWindowResize: function () {
  //         cancelAnimationFrame(this.animation);
  //         this.drawImageToBackground();
  //       },
  //     };

  //     setTimeout(function () {
  //       Nodes.init();
  //     }, 10);
  //   }

  return (
    <div>
      <div className="canvas"></div>
    </div>
  );
}
