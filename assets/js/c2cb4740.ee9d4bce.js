"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[33207],{14165:(t,e,i)=>{i.r(e),i.d(e,{default:()=>h});var s=i(67294);const h=()=>{const t=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=t.current,i=e.getContext("2d"),s=window.innerHeight,h=window.innerWidth;let n=0,o=!1;function a(t){this.minSize=.1*Math.random(),this.maxSize=3*Math.random(),this.size=1*Math.random(),this.speed=.02*Math.random(),this.x=t.x,this.y=t.y}function r(){this.reset()}e.width=h,e.height=s,a.prototype.reset=function(){this.size=2*Math.random(),this.speed=.02*Math.random(),this.x=h,this.y=Math.random()*s},a.prototype.update=function(){this.x-=this.speed,this.x<0?this.reset():(this.glow(),i.fillRect(this.x,this.y,this.size,this.size))},a.prototype.glow=function(){const t=6*Math.random();this.size=t>=this.maxSize?this.maxSize/2:t<=this.minSize?this.minSize:t},r.prototype.reset=function(){n++,n<=93&&(this.x=Math.random()*h*2,this.y=0,this.len=80*Math.random()+10,this.speed=10*Math.random()+6,this.size=1*Math.random()+.1,this.waitTime=(new Date).getTime()+3e3*Math.random()+500),this.active=!1},r.prototype.update=function(){this.active?(this.x-=this.speed,this.y+=this.speed,this.x<0||this.y>=s?this.reset():(i.lineWidth=this.size,i.beginPath(),i.moveTo(this.x,this.y),i.lineTo(this.x+this.len,this.y-this.len),i.stroke())):this.waitTime<(new Date).getTime()&&(this.active=!0)};const f=[],d=[];for(let t=0;t<s;t++){const t=Math.random(),e=Math.random();d.push(new a({x:t*h,y:e*s}))}for(let t=0;t<31;t++)f.push(new r);const l=()=>{if(!o){i.fillStyle="#000000",i.fillRect(0,0,h,s),i.fillStyle="#ffffff",i.strokeStyle="#ffffff";let t=d.length;for(;t--;)d[t].update();requestAnimationFrame(l)}},m=()=>{if(!o){let t=f.length;for(;t--;)f[t].update();requestAnimationFrame(m)}};return l(),m(),()=>{o=!0}}),[]),s.createElement("canvas",{ref:t,id:"starCanvas"})}}}]);