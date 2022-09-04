var m=function(t,n){let o=Math.min(t.length,n.length),e=t.slice(0,o),i=n.slice(0,o),c=0,r=0;for(;r<o&&c==0;)c=Math.sign(e[r]-i[r]),r++;return c},l=function(){this.pool=[],this.point=function(t,n=!1){if(this.pool.length>0){let o=this.pool.length,e=1<<Math.floor(Math.log2(o)),i=e,c=64;for(;e>=1&&c>=0;){if(c<=0)throw new Error("TTL reached.");if(i==o)i-=e;else{let u=m(t,this.pool[i]);switch(u){case 0:{c=0;break}case 1:{i+e<=o&&(i+=e);break}case-1:{i!=0&&(i-=e);break}default:console.warn(`Unexpected result ${u}.`)}}e=e>>1,c--}let r=!0;if(i>=this.pool.length)r=!1;else{let u=this;this.pool[i].forEach(function(f,S,D){r&&f!=t[S]&&(r=!1)}),!r&&m(t,this.pool[i])>0&&i++}return r||n?i:-1}else return n?0:-1},this.add=function(t,n){return t.data=n,this.pool.splice(this.point(t,!0),0,t),this},this.default=function(t){console.warn(`No match for "${t}". Default action not defined.`)},this.get=function(t){let n=this.point(t);if(n>-1)return this.pool[n].data;this.default(t)},this.run=function(t,...n){let o=this.point(t);o>-1?this.pool[o].data(t.slice(this.pool[o].length),...n):this.default(t,...n)}};var G=class{#o={};addEventListener(t,n){this.#o[t]||(this.#o[t]=[]),this.#o[t].unshift(n)}removeEventListener(t,n){if(this.#o[t]){let o=this.#o[t].indexOf(n);o>-1&&this.#o[t].splice(o,1),this.#o[t].length<1&&delete this.#o[t]}}dispatchEvent(t,n){let o=new Event(t),e=this;o.data=n,this.#o[t]?.length>0&&this.#o[t].forEach(function(i){i?.call(e,o)}),this[`on${t}`]&&this[`on${t}`](o)}};var s=["off","hall","room","stage","plate","delay LCR","delay LR","echo","cross delay","early reflections","gate reverb","reverse gate"];s[16]="white room";s[17]="tunnel";s[19]="basement";s[20]="karaoke";s[64]="pass through";s[65]="chorus";s[66]="celeste";s[67]="flanger";s[68]="symphonic";s[69]="rotary speaker";s[70]="tremelo";s[71]="auto pan";s[72]="phaser";s[73]="distortion";s[74]="overdrive";s[75]="amplifier";s[76]="3-band EQ";s[77]="2-band EQ";s[78]="auto wah";var g=["melodic","drum","drum set 1","drum set 2"],k=[17.1,18.6,20.2,21.8,23.3,24.9,26.5,28,29.6,31.2,32.8,34.3,35.9,37.5,39,40.6,42.2,43.7,45.3,46.9,48.4,50],h=[20,22,25,28,32,36,40,45,50,56,63,70,80,90,100,110,125,140,160,180,200,225,250,280,315,355,400,450,500,560,630,700,800,900,1e3,1100,1200,1400,1600,1800,2e3,2200,2500,2800,3200,3600,4e3,4500,5e3,5600,6300,7e3,8e3,9e3,1e4,11e3,12e3,14e3,16e3,18e3,2e4],X=[0,.04,.08,.13,.17,.21,.25,.29,.34,.38,.42,.46,.51,.55,.59,.63,.67,.72,.76,.8,.84,.88,.93,.97,1.01,1.05,1.09,1.14,1.18,1.22,1.26,1.3,1.35,1.39,1.43,1.47,1.51,1.56,1.6,1.64,1.68,1.72,1.77,1.81,1.85,1.89,1.94,1.98,2.02,2.06,2.1,2.15,2.19,2.23,2.27,2.31,2.36,2.4,2.44,2.48,2.52,2.57,2.61,2.65,2.69,2.78,2.86,2.94,3.03,3.11,3.2,3.28,3.37,3.45,3.53,3.62,3.7,3.87,4.04,4.21,4,37,4.54,4.71,4.88,5.05,5.22,5.38,5.55,5.72,6.06,6.39,6.73,7.07,7.4,7.74,8.08,8.41,8.75,9.08,9.42,9.76,10.1,10.8,11.4,12.1,12.8,13.5,14.1,14.8,15.5,16.2,16.8,17.5,18.2,19.5,20.9,22.2,23.6,24.9,26.2,27.6,28.9,30.3,31.6,33,34.3,37,39.7],v=function(t){let n=.1,o=-.3;return t>66?(n=5,o=315):t>56?(n=1,o=47):t>46&&(n=.5,o=18.5),n*t-o},w=function(t){return t>105?k[t-106]:t>100?t*1.1-100:t/10};var b=["room 1","room 2","room 3","hall 1","hall 2","plate","delay","panning delay"],E=["chorus 1","chorus 2","chorus 3","chorus 4","feedback","flanger","short delay","short delay feedback"];var d=function(t=64){return Math.round(2e3*Math.log10(t/64))/100};var p=["?","gm","gs","xg","g2","mt32","ns5r","ag10","x5d","05rw"],$={};p.forEach(function(t,n){$[t]=n});var y=[[0,0,0,0,0,0,0,56,82,81],[0,0,3,0,0,127,0,0,0,0]],M=[120,127,120,127,120,127,61,62,62,62],P=[0,3,81,84,88],a=function(t,n,o){o[n]=0},C=function(t){let n=[[]];return t?.forEach(function(o){o==247||(o==240?n.push([]):n[n.length-1].push(o))}),n},x=function(t,n="",o="",e=2){return t?`${n}${t.toString().padStart(e,"0")}${o}`:""},z=class extends G{#o=0;#X=new Array(256);#v=0;#p=new Array(64);#n=new Uint8ClampedArray(8192);#G=new Uint8ClampedArray(64);#f=new Uint8ClampedArray(8192);#c=new Uint16Array(256);#k=new Int16Array(64);#w=new Array(64);#l=new Uint8Array(64);#b=0;#E=0;#g=100;#h=0;#m="";#y=0;#s=!1;#i=[];#d=new Uint8Array(32);#S=new Uint8Array(128);chRedir(t,n){if(this.#o==$.gs){let o=0;return this.#d[t]==0?this.#d[t]=n:this.#d[t]!=n&&(o=16,this.#d[t+o]==0?this.#d[t+o]=n:this.#d[t+o]!=n&&(o=0)),t+o}else return t}#r=[];#M;#P={8:function(t){let o=this.chRedir(t.part,t.track)*128+t.data[0],e=this.#c.indexOf(o);e>-1&&(this.#c[e]=0,this.#f[o]=0)},9:function(t){let n=this.chRedir(t.part,t.track);this.#p[n]=1;let o=n*128+t.data[0];if(t.data[1]>0){let e=0;for(;this.#c[e]>0;)e++;e<256?(this.#c[e]=o,this.#f[o]=t.data[1],this.#l[n]<t.data[1]&&(this.#l[n]=t.data[1])):console.error("Polyphony exceeded.")}else{let e=this.#c.indexOf(o);e>-1&&(this.#c[e]=0,this.#f[o]=0)}},10:function(t){let o=this.chRedir(t.part,t.track)*128+t.data[0];this.#c.indexOf(o)>-1&&(this.#f[o]=data[1])},11:function(t){let n=this.chRedir(t.part,t.track);this.#p[n]=1,t.data[0]==0&&this.#o==$.gs&&this.#n[128*n]==120&&t.data[1]==0&&(t.data[1]=120),this.#n[n*128+t.data[0]]=t.data[1]},12:function(t){let n=this.chRedir(t.part,t.track);this.#p[n]=1,this.#G[n]=t.data,this.#w[n]=0},13:function(t){let n=this;this.#c.forEach(function(o){let e=o>>7;part==e&&(n.#f[o]=t.data)})},14:function(t){let n=this.chRedir(t.part,t.track);this.#k[n]=t.data[1]*128+t.data[0]-8192},15:function(t){let n=this;C(t.data).forEach(function(o){n.#u.run(o,t.track)})},255:function(t){if((this.#r[t.meta]||function(o,e,i){}).call(this,t.data,t.track,t.meta),t.meta!=32&&(this.#h=0),P.indexOf(t.meta)>-1)return t.reply="meta",t;self.debugMode&&console.debug(t)}};#u;#t;#e;#x;#$;#a;getActive(){let t=this.#p.slice();return this.#o==$.mt32&&(t[0]=0),t}getCc(t){let n=t*128,o=this.#n.slice(n,n+128);return o[0]=o[0]||this.#b,o[32]=o[32]||this.#E,o}getCcAll(){let t=this.#n.slice();for(let n=0;n<64;n++){let o=n*128;t[o]=t[o]||this.#b,t[o+32]=t[o+32]||this.#E}return t}getPitch(){return this.#k.slice()}getProgram(){return this.#G.slice()}getTexts(){return this.#i.slice()}getVel(t){let n=new Map,o=this;return this.#c.forEach(function(e){let i=Math.floor(e/128),c=e%128;t==i&&o.#f[e]>0&&n.set(c,o.#f[e])}),n}getBitmap(){return{bitmap:this.#X.slice(),expire:this.#v}}getCustomNames(){return this.#w.slice()}getLetter(){return{text:this.#m,expire:this.#y}}getMode(){return p[this.#o]}getMaster(){return{volume:this.#g}}getRawStrength(){let t=this;return this.#c.forEach(function(n){let o=Math.floor(n/128);t.#f[n]>t.#l[o]&&(t.#l[o]=t.#f[n])}),this.#l.slice()}getStrength(){let t=[],n=this;return this.getRawStrength().forEach(function(o,e){t[e]=Math.floor(o*n.#n[e*128+7]*n.#n[e*128+11]*n.#g/803288)}),t}init(){this.dispatchEvent("mode","?"),this.#o=0,this.#b=0,this.#E=0,this.#h=0,this.#p.forEach(a),this.#n.forEach(a),this.#G.forEach(a),this.#f.forEach(a),this.#c.forEach(a),this.#l.forEach(a),this.#g=100,this.#i=[],this.#y=0,this.#m="",this.#v=0,this.#X.forEach(a),this.#w.forEach(a),this.#s=!1,this.#d.forEach(a),this.#S.forEach(a),this.#n[1152]=127,this.#n[3200]=127;for(let t=0;t<64;t++)this.#n[t*128+7]=127,this.#n[t*128+11]=127,this.#n[t*128+74]=127,this.#n[t*128+10]=64}switchMode(t,n=!1){let o=p.indexOf(t);if(o>-1){if(this.#o==0||n){this.#o=o,this.#b=y[0][o],this.#E=y[1][o];for(let e=0;e<64;e++)M.indexOf(this.#n[e*128])>-1&&(this.#n[e*128]=M[o]);this.dispatchEvent("mode",t)}}else throw new Error(`Unknown mode ${t}`)}runJson(t){return this.#l.forEach(a),this.#P[t.type].call(this,t)}runRaw(t){}constructor(){super();let t=this;this.#M=new l,this.#u=new l,this.#t=new l,this.#e=new l,this.#x=new l,this.#$=new l,this.#a=new l,this.#M.default=function(n,o){console.debug("Unparsed meta 127 sequence on track ${track}: ",n)},this.#u.default=function(n){console.debug("Unparsed SysEx: ",n)},this.#t.default=function(n,o){console.debug(`Unparsed GS Part on channel ${o}: `,n)},this.#x.default=function(n,o){console.debug(`Unparsed XG Part on channel ${o}: `,n)},this.#$.default=function(n,o){console.debug(`Unparsed XG Drum Part on channel ${o}: `,n)},this.#r[1]=function(n){switch(n.slice(0,2)){case"@K":{this.#s=!0,this.#i.unshift("Karaoke mode active."),console.debug(`Karaoke mode active: ${n.slice(2)}`);break}case"@L":{this.#s=!0,this.#i.unshift(`Language: ${n.slice(2)}`);break}case"@T":{this.#s=!0,this.#i.unshift(`Ka.Title: ${n.slice(3)}`);break}default:this.#s?n[0]=="\\"?this.#i.unshift(`@@ ${n.slice(1)}`):n[0]=="/"?this.#i.unshift(n.slice(1)):this.#i[0]+=n:this.#i.unshift(n)}},this.#r[2]=function(n){this.#i.unshift(`Copyrite: ${n}`)},this.#r[3]=function(n,o){o<1&&this.#h<1&&this.#i.unshift(`TrkTitle: ${n}`)},this.#r[4]=function(n,o){o<1&&this.#h<1&&this.#i.unshift(`${x(this.#h,""," ")}Instrmnt: ${n}`)},this.#r[5]=function(n){this.#i.unshift(`C.Lyrics: ${n}`)},this.#r[6]=function(n){this.#i.unshift(`${x(this.#h,""," ")}C.Marker: ${n}`)},this.#r[7]=function(n){this.#i.unshift(`CuePoint: ${n}`)},this.#r[32]=function(n){this.#h=n[0]+1},this.#r[33]=function(n,o){t.#S[o]=n+1},this.#r[127]=function(n,o){t.#M.run(n,o)},this.#u.add([126,127,9,1],function(){t.switchMode("gm",!0),t.#s=!1,console.info("MIDI reset: GM")}).add([126,127,9,3],function(){t.switchMode("g2",!0),t.#s=!1,console.info("MIDI reset: GM2")}).add([65,16,22,18,127,1],function(){t.switchMode("mt32",!0),t.#s=!1,console.info("MIDI reset: MT-32")}).add([65,16,66,18,64,0,127,0,65],function(){t.switchMode("gs",!0),t.#n[1152]=120,t.#n[3200]=120,t.#s=!1,t.#d.forEach(a),console.info("MIDI reset: GS")}).add([66,48,66,52,0],function(n){t.switchMode("ns5r",!0),t.#s=!1,console.info("KORG reset:",n)}).add([67,16,76,0,0,126,0],function(n){t.switchMode("xg",!0),t.#s=!1,console.info("MIDI reset: XG")}),this.#M.add([67,0,1],function(n,o){t.#S[o]=n[0]+1}),this.#u.add([127,127,4,1],function(n){t.switchMode("gm"),t.#g=(n[1]<<7+n[0])/163.83}),this.#u.add([67,16,76,6,0],function(n){let o=n[0];t.#m=" ".repeat(o),t.#y=Date.now()+3200,n.slice(1).forEach(function(e){t.#m+=String.fromCharCode(e)})}).add([67,16,76,7,0,0],function(n){for(t.#v=Date.now()+3200;n.length<48;)n.unshift(0);n.forEach(function(o,e){let i=Math.floor(e/16),c=e%16,r=(c*3+i)*7,u=7,f=0;for(r-=c*5,i==2&&(u=2);f<u;)t.#X[r+f]=o>>6-f&1,f++})}).add([67,16,76,2,1,0],function(n){console.info(`XG reverb type: ${s[n[0]]}${n[1]>0?" "+(n[1]+1):""}`)}).add([67,16,76,2,1,2],function(n){console.info(`XG reverb time: ${v(n)}s`)}).add([67,16,76,2,1,3],function(n){console.info(`XG reverb diffusion: ${n}`)}).add([67,16,76,2,1,4],function(n){console.info(`XG reverb initial delay: ${n}`)}).add([67,16,76,2,1,5],function(n){console.info(`XG reverb high pass cutoff: ${h[n[0]]}Hz`)}).add([67,16,76,2,1,6],function(n){console.info(`XG reverb low pass cutoff: ${h[n[0]]}Hz`)}).add([67,16,76,2,1,7],function(n){console.info(`XG reverb width: ${n}`)}).add([67,16,76,2,1,8],function(n){console.info(`XG reverb height: ${n}`)}).add([67,16,76,2,1,9],function(n){console.info(`XG reverb depth: ${n}`)}).add([67,16,76,2,1,10],function(n){console.info(`XG reverb wall type: ${n}`)}).add([67,16,76,2,1,11],function(n){console.info(`XG reverb dry/wet: ${n[0]}`)}).add([67,16,76,2,1,12],function(n){console.info(`XG reverb return: ${n}`)}).add([67,16,76,2,1,13],function(n){console.info(`XG reverb pan: ${n[0]-64}`)}).add([67,16,76,2,1,16],function(n){console.info(`XG reverb delay: ${n}`)}).add([67,16,76,2,1,17],function(n){console.info(`XG density: ${n}`)}).add([67,16,76,2,1,18],function(n){console.info(`XG reverb balance: ${n}`)}).add([67,16,76,2,1,20],function(n){console.info(`XG reverb feedback: ${n}`)}).add([67,16,76,2,1,32],function(n){console.info(`XG chorus type: ${s[n[0]]}${n[1]>0?" "+(n[1]+1):""}`)}).add([67,16,76,2,1,34],function(n){console.info(`XG chorus LFO: ${X[n[0]]}Hz`)}).add([67,16,76,2,1,35],function(n){}).add([67,16,76,2,1,36],function(n){console.info(`XG chorus feedback: ${n}`)}).add([67,16,76,2,1,37],function(n){console.info(`XG chorus delay offset: ${w(n[0])}ms`)}).add([67,16,76,2,1,39],function(n){console.info(`XG chorus low: ${h[n[0]]}Hz`)}).add([67,16,76,2,1,40],function(n){console.info(`XG chorus low: ${n[0]-64}dB`)}).add([67,16,76,2,1,41],function(n){console.info(`XG chorus high: ${h[n[0]]}Hz`)}).add([67,16,76,2,1,42],function(n){console.info(`XG chorus high: ${n[0]-64}dB`)}).add([67,16,76,2,1,43],function(n){console.info(`XG chorus dry/wet: ${n}`)}).add([67,16,76,2,1,44],function(n){console.info(`XG chorus return: ${n}`)}).add([67,16,76,2,1,45],function(n){console.info(`XG chorus pan: ${n[0]-64}`)}).add([67,16,76,2,1,46],function(n){console.info(`XG chorus to reverb: ${n}`)}).add([67,16,76,2,1,64],function(n){console.info(`XG variation type: ${s[n[0]]}${n[1]>0?" "+(n[1]+1):""}`)}).add([67,16,76,2,1,66],function(n){console.info(`XG variation 1: ${n}`)}).add([67,16,76,2,1,68],function(n){console.info(`XG variation 2: ${n}`)}).add([67,16,76,2,1,70],function(n){console.info(`XG variation 3: ${n}`)}).add([67,16,76,2,1,72],function(n){console.info(`XG variation 4: ${n}`)}).add([67,16,76,2,1,74],function(n){console.info(`XG variation 5: ${n}`)}).add([67,16,76,2,1,76],function(n){console.info(`XG variation 6: ${n}`)}).add([67,16,76,2,1,78],function(n){console.info(`XG variation 7: ${n}`)}).add([67,16,76,2,1,80],function(n){console.info(`XG variation 8: ${n}`)}).add([67,16,76,2,1,82],function(n){console.info(`XG variation 9: ${n}`)}).add([67,16,76,2,1,84],function(n){console.info(`XG variation 10: ${n}`)}).add([67,16,76,2,1,86],function(n){console.info(`XG variation return: ${d(n[0])}dB`)}).add([67,16,76,2,1,87],function(n){console.info(`XG variation pan: ${n[0]-64}`)}).add([67,16,76,2,1,88],function(n){console.info(`XG variation to reverb: ${d(n[0])}dB`)}).add([67,16,76,2,1,89],function(n){console.info(`XG variation to chorus: ${d(n[0])}dB`)}).add([67,16,76,2,1,90],function(n){console.info(`XG variation connection: ${n[0]?"system":"insertion"}`)}).add([67,16,76,2,1,91],function(n){console.info(`XG variation part: ${n}`)}).add([67,16,76,2,1,92],function(n){console.info(`XG variation mod wheel: ${n[0]-64}`)}).add([67,16,76,2,1,93],function(n){console.info(`XG variation bend wheel: ${n[0]-64}`)}).add([67,16,76,2,1,94],function(n){console.info(`XG variation channel after touch: ${n[0]-64}`)}).add([67,16,76,2,1,95],function(n){console.info(`XG variation AC1: ${n[0]-64}`)}).add([67,16,76,2,1,96],function(n){console.info(`XG variation AC2: ${n[0]-64}`)}).add([67,16,76,8],function(n,o){t.#x.run(n.slice(1),t.chRedir(n[0],o))}).add([67,16,76,48],function(n){t.#$.run(n.slice(1),0,n[0])}).add([67,16,76,49],function(n){t.#$.run(n.slice(1),1,n[0])}).add([67,16,76,50],function(n){t.#$.run(n.slice(1),2,n[0])}).add([67,16,76,51],function(n){t.#$.run(n.slice(1),3,n[0])}),this.#u.add([65,1],function(n){t.switchMode("mt32"),t.#a.run(n,1)}).add([65,2],function(n){t.switchMode("mt32"),t.#a.run(n,2)}).add([65,3],function(n){t.switchMode("mt32"),t.#a.run(n,3)}).add([65,4],function(n){t.switchMode("mt32"),t.#a.run(n,4)}).add([65,5],function(n){t.switchMode("mt32"),t.#a.run(n,5)}).add([65,6],function(n){t.switchMode("mt32"),t.#a.run(n,6)}).add([65,7],function(n){t.switchMode("mt32"),t.#a.run(n,7)}).add([65,8],function(n){t.switchMode("mt32"),t.#a.run(n,8)}).add([65,9],function(n){t.switchMode("mt32"),t.#p[9]=1,t.#a.run(n,9)}),this.#a.add([22,18,2,0,0],function(n,o){let e="";n.slice(0,10).forEach(function(i){i>31&&(e+=String.fromCharCode(i))}),t.#w[o]=e,console.debug(`MT-32 tone properties on channel ${o+1} (${e}): ${n.slice(10)}`)}),this.#u.add([65,16,66,18,0,0,127],function(n){t.switchMode("gs",!0),t.#n[1152]=120,t.#n[3200]=120,t.#d.forEach(a),t.#s=!1,console.info(`GS system set to ${n[0]?"dual":"single"} mode.`)}).add([65,16,66,18,64,0,0],function(n){}).add([65,16,66,18,64,0,4],function(n){t.#g=n[0]*129/163.83}).add([65,16,66,18,64,0,5],function(n){console.info(`GS master key shift: ${n[0]-64} semitones.`)}).add([65,16,66,18,64,0,6],function(n){console.info(`GS master pan:${n[0]-64}.`)}).add([65,16,66,18,64,1,48],function(n){console.info(`GS reverb type: ${b[n[0]]}`)}).add([65,16,66,18,64,1,49],function(n){}).add([65,16,66,18,64,1,50],function(n){console.info(`GS reverb pre-LPF: ${n[0]}`)}).add([65,16,66,18,64,1,51],function(n){console.info(`GS reverb level: ${n[0]}`)}).add([65,16,66,18,64,1,52],function(n){console.info(`GS reverb time: ${n[0]}`)}).add([65,16,66,18,64,1,53],function(n){console.info(`GS reverb delay feedback: ${n[0]}`)}).add([65,16,66,18,64,1,55],function(n){console.info(`GS reverb pre-delay time: ${n[0]}`)}).add([65,16,66,18,64,1,56],function(n){console.info(`GS chorus type: ${E[n[0]]}`)}).add([65,16,66,18,64,1,57],function(n){console.info(`GS chorus pre-LPF: ${n[0]}`)}).add([65,16,66,18,64,2,0],function(n){console.info(`GS EQ low: ${n[0]?400:200}Hz`)}).add([65,16,66,18,64,2,1],function(n){console.info(`GS EQ low: ${n[0]-64}dB`)}).add([65,16,66,18,64,2,2],function(n){console.info(`GS EQ high: ${n[0]?6e3:3e3}Hz`)}).add([65,16,66,18,64,2,3],function(n){console.info(`GS EQ high: ${n[0]-64}dB`)}).add([65,16,66,18,64,3],function(n){}).add([65,16,69,18,16,0],function(n){let o=n[0];t.#m=" ".repeat(o),t.#y=Date.now()+3200,n.pop(),n.slice(1).forEach(function(e){t.#m+=String.fromCharCode(e)})}).add([65,16,69,18,16,1,0],function(n){t.#v=Date.now()+3200,n.forEach(function(o,e){if(e<64){let i=Math.floor(e/16),c=e%16,r=(c*4+i)*5,u=5,f=0;for(r-=c*4,i==3&&(u=1);f<u;)t.#X[r+f]=o>>4-f&1,f++}})}).add([65,16,66,18,64,16],function(n){t.#t.run(n,9)}).add([65,16,66,18,64,17],function(n){t.#t.run(n,0)}).add([65,16,66,18,64,18],function(n){t.#t.run(n,1)}).add([65,16,66,18,64,19],function(n){t.#t.run(n,2)}).add([65,16,66,18,64,20],function(n){t.#t.run(n,3)}).add([65,16,66,18,64,21],function(n){t.#t.run(n,4)}).add([65,16,66,18,64,22],function(n){t.#t.run(n,5)}).add([65,16,66,18,64,23],function(n){t.#t.run(n,6)}).add([65,16,66,18,64,24],function(n){t.#t.run(n,7)}).add([65,16,66,18,64,25],function(n){t.#t.run(n,8)}).add([65,16,66,18,64,26],function(n){t.#t.run(n,10)}).add([65,16,66,18,64,27],function(n){t.#t.run(n,11)}).add([65,16,66,18,64,28],function(n){t.#t.run(n,12)}).add([65,16,66,18,64,29],function(n){t.#t.run(n,13)}).add([65,16,66,18,64,30],function(n){t.#t.run(n,14)}).add([65,16,66,18,64,31],function(n){t.#t.run(n,15)}).add([65,16,66,18,64,64],function(n){t.#e.run(n,9)}).add([65,16,66,18,64,65],function(n){t.#e.run(n,0)}).add([65,16,66,18,64,66],function(n){t.#e.run(n,1)}).add([65,16,66,18,64,67],function(n){t.#e.run(n,2)}).add([65,16,66,18,64,68],function(n){t.#e.run(n,3)}).add([65,16,66,18,64,69],function(n){t.#e.run(n,4)}).add([65,16,66,18,64,70],function(n){t.#e.run(n,5)}).add([65,16,66,18,64,71],function(n){t.#e.run(n,6)}).add([65,16,66,18,64,72],function(n){t.#e.run(n,7)}).add([65,16,66,18,64,73],function(n){t.#e.run(n,8)}).add([65,16,66,18,64,74],function(n){t.#e.run(n,10)}).add([65,16,66,18,64,75],function(n){t.#e.run(n,11)}).add([65,16,66,18,64,76],function(n){t.#e.run(n,12)}).add([65,16,66,18,64,77],function(n){t.#e.run(n,13)}).add([65,16,66,18,64,78],function(n){t.#e.run(n,14)}).add([65,16,66,18,64,79],function(n){t.#e.run(n,15)}),t.#$.add([0],function(n,o,e){console.info(`XG Drum ${o} note ${e} coarse pitch bend ${n[0]-64}.`)}).add([1],function(n,o,e){console.info(`XG Drum ${o} note ${e} fine pitch bend ${n[0]-64}.`)}).add([2],function(n,o,e){console.info(`XG Drum ${o} note ${e} level ${n[0]}.`)}).add([3],function(n,o,e){console.info(`XG Drum ${o} note ${e} alt group ${n[0]}.`)}).add([4],function(n,o,e){console.info(`XG Drum ${o} note ${e} pan ${n[0]-64}.`)}).add([5],function(n,o,e){console.info(`XG Drum ${o} note ${e} reverb send ${d(n[0])}dB.`)}).add([6],function(n,o,e){console.info(`XG Drum ${o} note ${e} chorus send ${d(n[0])}dB.`)}).add([7],function(n,o,e){console.info(`XG Drum ${o} note ${e} variation send ${d(n[0])}dB.`)}).add([8],function(n,o,e){console.info(`XG Drum ${o} note ${e} key assign as ${n[0]>0?"multi":"single"}.`)}).add([9],function(n,o,e){}).add([10],function(n,o,e){}).add([11],function(n,o,e){}).add([12],function(n,o,e){}).add([13],function(n,o,e){}).add([14],function(n,o,e){}).add([15],function(n,o,e){}),t.#x.add([0],function(n,o){console.info(`XG Part reserve ${n[0]} elements for channel ${o}.`)}).add([1],function(n,o){t.#n[o*128]=n[0]}).add([2],function(n,o){t.#n[o*128+32]=n[0]}).add([3],function(n,o){t.#G[o]=n[0]}).add([4],function(n,o){console.info(`XG Part send CH${o} to CH${n[0]}. Channel redirect feature required!`)}).add([5],function(n,o){console.info(`XG Part mono/poly set to ${n[0]?"mono":"poly"} for channel ${o}.`)}).add([6],function(n,o){console.info(`XG Part repeat pressing set to ${["single","multi","inst"][n[0]]} mode for channel ${o}.`)}).add([7],function(n,o){let e=n[0];t.#n[128*o]=e>1?127:0,console.info(`XG Part use mode "${g[e]}" for channel ${o}.`)}).add([14],function(n,o){t.#n[128*o+10]=n[0]}).add([17],function(n,o){console.info(`XG Part dry level ${n[0]} for channel ${o}.`)}).add([18],function(n,o){console.info(`XG Part chorus send ${d(n[0])}dB for channel ${o}.`)}).add([19],function(n,o){console.info(`XG Part reverb send ${d(n[0])}dB for channel ${o}.`)}).add([20],function(n,o){console.info(`XG Part variation send ${d(n[0])}dB for channel ${o}.`)}).add([21],function(n,o){console.info(`XG Part LFO speed ${n[0]} for channel ${o}.`)}).add([29],function(n,o){console.info(`XG Part MW bend ${n[0]-64} semitones for channel ${o}.`)}).add([32],function(n,o){console.info(`XG Part MW LFO pitch depth ${n[0]} for channel ${o}.`)}).add([33],function(n,o){console.info(`XG Part MW LFO filter depth ${n[0]} for channel ${o}.`)}).add([35],function(n,o){console.info(`XG Part bend pitch ${n[0]-64} semitones for channel ${o}.`)}).add([83],function(n,o){}).add([103],function(n,o){t.#n[o*128+65]=n[0]}).add([104],function(n,o){t.#n[o*128+5]=n[0]}).add([105],function(n,o){console.info(`XG Part EG initial ${n[0]-64} for channel ${o}.`)}).add([106],function(n,o){console.info(`XG Part EG attack time ${n[0]-64} for channel ${o}.`)}),t.#t.add([0],function(n,o){t.#n[o*128]==120&&(n[0]=120),t.#n[o*128]=n[0]||0,t.#G[o]=n[1]||0}).add([2],function(n,o){}).add([19],function(n,o){}).add([20],function(n,o){}).add([21],function(n,o){console.info(`GS Part ${o+1} type: ${["melodic","drum 1","drum 2"][n[0]]}.`),n[0]>0&&(t.#n[o*128]=120)}).add([25],function(n,o){t.#n[o*128+7]=n[0]}).add([28],function(n,o){t.#n[o*128+10]=n[0]}).add([33],function(n,o){t.#n[o*128+93]=n[0]}).add([34],function(n,o){t.#n[o*128+91]=n[0]}),t.#e.add([0],function(n,o){t.#n[o*128+32]=n[0]}).add([1],function(n,o){t.#n[o*128+32]=n[0]}).add([32],function(n,o){console.info(`GS Part ${o+1} turned EQ ${n[0]?"on":"off"}.`)}).add([33],function(n,o){}).add([34],function(n,o){console.info(`GS Part ${o+1} turned EFX ${n[0]?"on":"off"}.`)})}};export{z as OctaviaDevice};
