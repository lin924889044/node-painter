var http = require('http')
var express = require("express");
var api = express.Router();
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(400, 400)
const ctx = canvas.getContext('2d')
var _ = require("lodash");
api.get("/draw/:num", function(req, res) {
  // 1988079
  http.get('http://test07.fromfactory.club/gw/cf-market/group_lottery/detail?missionId=' + req.params.num, (r) => {
    r.setEncoding('utf8');
    let rawData = '';
    r.on('data', (chunk) => { rawData += chunk; });
    r.on('end', () => {
      const parsedData = JSON.parse(rawData);
      const cover = _.get(parsedData, 'body.missionRecord.product.productTemplate.coverImgLow')
      loadImage(cover).then((image) => {
        ctx.drawImage(image, 0, 0, 400, 400)
        ctx.font = 'Luxi Serif'
        ctx.fillStyle = "Red";
        ctx.fillText('Group Lottery', 50, 100)
        var text = ctx.measureText('Awesome!')
        ctx.strokeStyle = 'rgba(0,0,0,0.5)'
        ctx.beginPath()
        ctx.lineTo(50, 102)
        ctx.lineTo(50 + text.width, 102)
        ctx.stroke()
        let test = '<img src="' + canvas.toDataURL() + '" />'
        res.send(test);
      })
    });
  })
});
module.exports = api;