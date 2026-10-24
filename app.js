var state={v:'tak',c:'vit',s:'fam',f:'g'};
var st={a:30,p:22};
var COL={vit:{w:'#F2F1EC',l:'rgba(0,0,0,0.12)',d:'#2C4A6E'},gra:{w:'#9EA3AA',l:'rgba(0,0,0,0.14)',d:'#2C4A6E'},bla:{w:'#2F4B6E',l:'rgba(255,255,255,0.14)',d:'#B23A2E'}};
var NAMES={vit:'Vit',gra:'Grå',bla:'Djupblå',fam:'Barnfamilj',pen:'Pendlare',sen:'Senior',g:'Entréplan',u:'Övre plan'};
var PLAN={
fam:{g:[[0,0,5.5,3,'Kök/matsal','r'],[5.5,0,2.5,3,'Tvätt/WC','w'],[0,3,2.75,5,'Vardagsrum','r'],[2.75,3,2.5,2.5,'Trappa','c'],[2.75,5.5,2.5,2.5,'Entré','c'],[5.25,3,2.75,5,'Allrum','r']],
u:[[0,0,5.5,3,'Sovrum','r'],[5.5,0,2.5,3,'Badrum','w'],[0,3,2.75,5,'Barnrum','r'],[2.75,3,2.5,5,'Ljusschakt','c'],[5.25,3,2.75,5,'Barnrum','r']]},
pen:{g:[[0,0,5.5,3,'Kök/matsal','r'],[5.5,0,2.5,3,'Tvätt/WC','w'],[0,3,2.75,5,'Vardagsrum','r'],[2.75,3,2.5,2.5,'Trappa','c'],[2.75,5.5,2.5,2.5,'Entré','c'],[5.25,3,2.75,5,'Hemmakontor','r']],
u:[[0,0,5.5,3,'Sovrum','r'],[5.5,0,2.5,3,'Badrum','w'],[0,3,2.75,5,'Garderob','r'],[2.75,3,2.5,5,'Ljusschakt','c'],[5.25,3,2.75,5,'Gästrum','r']]},
sen:{g:[[0,0,5.5,3,'Kök/matsal','r'],[5.5,0,2.5,3,'Badrum','w'],[0,3,2.75,5,'Vardagsrum','r'],[2.75,3,2.5,2.5,'Trappa','c'],[2.75,5.5,2.5,2.5,'Entré','c'],[5.25,3,2.75,5,'Sovrum','r']],
u:[[0,0,5.5,3,'Gästloft','r'],[5.5,0,2.5,3,'WC/förråd','w'],[0,3,2.75,5,'Gästrum','r'],[2.75,3,2.5,5,'Ljusschakt','c'],[5.25,3,2.75,5,'Hobbyrum','r']]}};
var T='#FBFAF6',TS='#C4C1B6',G='#BFD6E6',R='#3C4046';
function win(x,y,w,h){var s='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+T+'" stroke="'+TS+'" stroke-width="0.5"/><rect x="'+(x+3)+'" y="'+(y+3)+'" width="'+(w-6)+'" height="'+(h-6)+'" fill="'+G+'"/>';
s+='<line x1="'+(x+w/2)+'" y1="'+(y+3)+'" x2="'+(x+w/2)+'" y2="'+(y+h-3)+'" stroke="'+T+'" stroke-width="2"/>';
s+='<line x1="'+(x+3)+'" y1="'+(y+h/2)+'" x2="'+(x+w-3)+'" y2="'+(y+h/2)+'" stroke="'+T+'" stroke-width="2.5"/>';return s;}
function facade(){var c=COL[state.c],s='';
s+='<line x1="10" y1="282" x2="370" y2="282" stroke="#7C8A6A" stroke-width="2"/>';
s+='<polygon points="52,124 328,124 190,16" fill="'+R+'"/>';
s+='<polygon points="70,120 310,120 190,34" fill="'+c.w+'" stroke="'+T+'" stroke-width="1.5"/>';
s+='<rect x="70" y="120" width="240" height="150" fill="'+c.w+'"/>';
for(var y=40;y<119;y+=7){var h=(y-34)/0.72;s+='<line x1="'+(190-h)+'" y1="'+y+'" x2="'+(190+h)+'" y2="'+y+'" stroke="'+c.l+'" stroke-width="1"/>';}
for(var y2=124;y2<270;y2+=7){s+='<line x1="70" y1="'+y2+'" x2="310" y2="'+y2+'" stroke="'+c.l+'" stroke-width="1"/>';}
s+='<rect x="70" y="120" width="5" height="150" fill="'+T+'"/><rect x="305" y="120" width="5" height="150" fill="'+T+'"/>';
s+=win(158,72,64,30);
s+=win(92,138,40,50)+win(168,138,44,50)+win(248,138,40,50);
s+='<rect x="56" y="194" width="268" height="9" fill="'+R+'"/><rect x="56" y="203" width="268" height="4" fill="'+T+'" stroke="'+TS+'" stroke-width="0.5"/>';
s+=win(86,214,44,40)+win(250,214,44,40);
s+='<rect x="158" y="209" width="64" height="53" fill="'+T+'" stroke="'+TS+'" stroke-width="0.5"/>';
s+='<rect x="162" y="213" width="8" height="49" fill="'+G+'"/><rect x="210" y="213" width="8" height="49" fill="'+G+'"/>';
s+='<rect x="172" y="213" width="36" height="49" fill="'+c.d+'"/>';
s+='<rect x="177" y="218" width="12" height="16" fill="none" stroke="'+T+'" stroke-width="1"/><rect x="191" y="218" width="12" height="16" fill="none" stroke="'+T+'" stroke-width="1"/><rect x="177" y="238" width="12" height="18" fill="none" stroke="'+T+'" stroke-width="1"/><rect x="191" y="238" width="12" height="18" fill="none" stroke="'+T+'" stroke-width="1"/>';
s+='<circle cx="204" cy="240" r="1.8" fill="#C9A24A"/>';
[72,148,226,300].forEach(function(x){s+='<rect x="'+x+'" y="207" width="8" height="55" fill="'+T+'" stroke="'+TS+'" stroke-width="0.5"/><rect x="'+(x-2)+'" y="258" width="12" height="4" fill="'+T+'" stroke="'+TS+'" stroke-width="0.5"/><rect x="'+(x-1)+'" y="207" width="10" height="3" fill="'+T+'" stroke="'+TS+'" stroke-width="0.5"/>';});
s+='<rect x="56" y="262" width="268" height="8" fill="#D9D5C8" stroke="'+TS+'" stroke-width="0.5"/>';
s+='<rect x="162" y="270" width="56" height="6" fill="#D9D5C8" stroke="'+TS+'" stroke-width="0.5"/><rect x="156" y="276" width="68" height="6" fill="#D9D5C8" stroke="'+TS+'" stroke-width="0.5"/>';
return s;}
function plan(){var X=50,Y=10,k=35,s='',L=PLAN[state.s][state.f];
L.forEach(function(r){var fill=r[5]=='w'?'var(--bg-accent)':(r[5]=='c'?'var(--surface-0)':'var(--surface-2)');
s+='<rect x="'+(X+r[0]*k)+'" y="'+(Y+r[1]*k)+'" width="'+(r[2]*k)+'" height="'+(r[3]*k)+'" fill="'+fill+'" stroke="var(--border-stronger)" stroke-width="0.8"/>';
s+='<text x="'+(X+(r[0]+r[2]/2)*k)+'" y="'+(Y+(r[1]+r[3]/2)*k+4)+'" text-anchor="middle" style="font-size:12px;fill:var(--text-primary);font-family:var(--font-sans)">'+r[4]+'</text>';});
s+='<rect x="'+X+'" y="'+(Y+8*k)+'" width="'+(8*k)+'" height="26" fill="none" stroke="var(--border-strong)" stroke-dasharray="4 3"/>';
if(state.f=='g'){s+='<text x="'+(X+4*k)+'" y="'+(Y+8*k+17)+'" text-anchor="middle" style="font-size:12px;fill:var(--text-secondary);font-family:var(--font-sans)">Veranda</text>';}
else{s+='<text x="'+(X+4*k)+'" y="'+(Y+8*k+17)+'" text-anchor="middle" style="font-size:12px;fill:var(--text-secondary);font-family:var(--font-sans)">Verandatak</text>';}
return s;}

var E=25*Math.PI/180,SC=26,CX=190,CY=255;
var GL='#BFD6E6',RF='#3C4046',DK='#D9D5C8',W='#F2F1EC',DR='#2C4A6E';
var LT=[-0.5,0.55,0.67];
function sh(h,k){var r=parseInt(h.substr(1,2),16),g=parseInt(h.substr(3,2),16),b=parseInt(h.substr(5,2),16);function f(v){return Math.max(0,Math.min(255,Math.round(v*k)));}return 'rgb('+f(r)+','+f(g)+','+f(b)+')';}
function proj(p,th){var x=p[0]-4,y=p[1]-4,z=p[2],c=Math.cos(th),s=Math.sin(th);var xr=x*c-y*s,yr=x*s+y*c;return [CX+SC*xr,CY-SC*(z*Math.cos(E)-yr*Math.sin(E)),yr];}
function rect(P,u0,v0,u1,v1){return [P(u0,v0),P(u1,v0),P(u1,v1),P(u0,v1)];}
function win3(P,u0,v0,u1,v1){var o=[],i=0.1;o.push({pts:rect(P,u0,v0,u1,v1),fill:T});o.push({pts:rect(P,u0+i,v0+i,u1-i,v1-i),fill:GL});var um=(u0+u1)/2,vm=(v0+v1)/2;o.push({line:[P(um,v0+i),P(um,v1-i)],color:T,w:1.5});o.push({line:[P(u0+i,vm),P(u1-i,vm)],color:T,w:1.5});return o;}
function siding(P){var o=[];for(var z=0.35;z<6;z+=0.35){o.push({line:[P(0,z),P(8,z)],color:W,k:0.86,w:0.6});}return o;}
function build(){
var p=st.p*Math.PI/180,tp=Math.tan(p),zr=6+4*tp,ze=6-0.5*tp,F=[];
var PF=function(u,v){return [u,8,v];},PB=function(u,v){return [u,0,v];},PL=function(u,v){return [0,u,v];},PR=function(u,v){return [8,u,v];};
F.push({pts:[[-2,-2,0],[10,-2,0],[10,12,0],[-2,12,0]],ground:1});
var gab=function(y){return [[0,y,0],[8,y,0],[8,y,6],[4,y,zr],[0,y,6]];};
var fi=[{pts:gab(8),fill:W}].concat(siding(PF));
if(zr>=8.3){fi=fi.concat(win3(PF,3,6.7,5,7.6));}
[[1,3.7,2.4,5.5],[3.3,3.7,4.7,5.5],[5.6,3.7,7,5.5],[1,1,2.5,2.5],[5.5,1,7,2.5]].forEach(function(w){fi=fi.concat(win3(PF,w[0],w[1],w[2],w[3]));});
fi.push({pts:rect(PF,3.2,0.3,4.8,2.4),fill:T});fi.push({pts:rect(PF,3.45,0.3,4.55,2.3),fill:DR});
fi.push({pts:rect(PF,3.3,0.3,3.45,2.3),fill:GL});fi.push({pts:rect(PF,4.55,0.3,4.7,2.3),fill:GL});
F.push({pts:fi[0].pts,n:[0,1,0],items:fi});
var bi=[{pts:gab(0),fill:W}].concat(siding(PB));
if(zr>=8.3){bi=bi.concat(win3(PB,3,6.7,5,7.6));}
[[1.5,3.7,3,5.5],[5,3.7,6.5,5.5],[1.5,1,3,2.5],[5,1,6.5,2.5]].forEach(function(w){bi=bi.concat(win3(PB,w[0],w[1],w[2],w[3]));});
F.push({pts:bi[0].pts,n:[0,-1,0],items:bi});
[[PL,[-1,0,0]],[PR,[1,0,0]]].forEach(function(s){var P=s[0],it=[{pts:rect(P,0,0,8,6),fill:W}].concat(siding(P));
[[1.5,3.7,2.9,5.2],[5.1,3.7,6.5,5.2],[1.5,1,2.9,2.4],[5.1,1,6.5,2.4]].forEach(function(w){it=it.concat(win3(P,w[0],w[1],w[2],w[3]));});
F.push({pts:it[0].pts,n:s[1],items:it});});
var lp=[[-0.5,-0.5,ze],[-0.5,8.5,ze],[4,8.5,zr],[4,-0.5,zr]],rp=[[8.5,-0.5,ze],[8.5,8.5,ze],[4,8.5,zr],[4,-0.5,zr]];
F.push({pts:lp,n:[-Math.sin(p),0,Math.cos(p)],items:[{pts:lp,fill:RF}]});
F.push({pts:rp,n:[Math.sin(p),0,Math.cos(p)],items:[{pts:rp,fill:RF}]});
var deck=[[-0.5,8,0.3],[8.5,8,0.3],[8.5,10,0.3],[-0.5,10,0.3]];
F.push({pts:deck,n:[0,0,1],items:[{pts:deck,fill:DK}]});
var pr=[[-0.5,8,3.9],[8.5,8,3.9],[8.5,10.2,3.4],[-0.5,10.2,3.4]];
F.push({pts:pr,n:[0,0.2,1],items:[{pts:pr,fill:RF}]});
var fa=[[-0.5,10.2,3.05],[8.5,10.2,3.05],[8.5,10.2,3.4],[-0.5,10.2,3.4]];
F.push({pts:fa,n:[0,1,0],items:[{pts:fa,fill:T}]});
[0,2.7,5.3,8].forEach(function(x){F.push({pts:[[x,9.8,0.3],[x,9.8,3.4]],col:1});});
return F;}
var FACES=build();
function draw3(){var th=st.a*Math.PI/180,c=Math.cos(th),s=Math.sin(th),list=[];
FACES.forEach(function(f){var pj=f.pts.map(function(q){return proj(q,th);});var d=0;pj.forEach(function(q){d+=q[2];});d/=pj.length;
if(f.ground){list.push({d:-99,f:f,pj:pj,k:1});return;}
if(f.col){list.push({d:d,f:f,pj:pj,k:1});return;}
var nx=f.n[0]*c-f.n[1]*s,ny=f.n[0]*s+f.n[1]*c,nz=f.n[2];
if(ny*Math.cos(E)+nz*Math.sin(E)<=0.001)return;
var dot=nx*LT[0]+ny*LT[1]+nz*LT[2];var k=Math.min(1.05,0.58+0.5*Math.max(0,dot));
list.push({d:d,f:f,pj:pj,k:k});});
list.sort(function(a,b){return a.d-b.d;});
var out='';
list.forEach(function(o){var f=o.f;
if(f.ground){out+='<polygon points="'+o.pj.map(function(q){return q[0].toFixed(1)+','+q[1].toFixed(1);}).join(' ')+'" fill="#B9C8A5" opacity="0.7"/>';return;}
if(f.col){out+='<line x1="'+o.pj[0][0].toFixed(1)+'" y1="'+o.pj[0][1].toFixed(1)+'" x2="'+o.pj[1][0].toFixed(1)+'" y2="'+o.pj[1][1].toFixed(1)+'" stroke="#C4C1B6" stroke-width="6"/><line x1="'+o.pj[0][0].toFixed(1)+'" y1="'+o.pj[0][1].toFixed(1)+'" x2="'+o.pj[1][0].toFixed(1)+'" y2="'+o.pj[1][1].toFixed(1)+'" stroke="#FBFAF6" stroke-width="4.5"/>';return;}
f.items.forEach(function(it){
if(it.line){var a=proj(it.line[0],th),b=proj(it.line[1],th);out+='<line x1="'+a[0].toFixed(1)+'" y1="'+a[1].toFixed(1)+'" x2="'+b[0].toFixed(1)+'" y2="'+b[1].toFixed(1)+'" stroke="'+sh(it.color,o.k*(it.k||1))+'" stroke-width="'+it.w+'"/>';}
else{var pp=it.pts.map(function(q){var r=proj(q,th);return r[0].toFixed(1)+','+r[1].toFixed(1);}).join(' ');out+='<polygon points="'+pp+'" fill="'+sh(it.fill,o.k)+'" stroke="rgba(0,0,0,0.18)" stroke-width="0.5" stroke-linejoin="round"/>';}});});
document.getElementById('scene').innerHTML=out;
document.getElementById('angout').textContent=Math.round(st.a)+'°';
var p=st.p*Math.PI/180,tp=Math.tan(p),ra=2*(4.5/Math.cos(p))*9,ga=16*tp,r0=2*(4.5/Math.cos(40*Math.PI/180))*9,g0=16*Math.tan(40*Math.PI/180);
function card(l,v,s){return '<div style="background:var(--surface-1);border-radius:8px;padding:10px"><div style="font-size:12px;color:var(--text-secondary)">'+l+'</div><div style="font-size:18px;font-weight:500">'+v+'</div><div style="font-size:12px;color:var(--text-secondary)">'+s+'</div></div>';}
document.getElementById('m').innerHTML=card('Nock över takfot',(4*tp).toFixed(1).replace('.',',')+' m','vid 40°: '+(4*Math.tan(40*Math.PI/180)).toFixed(1).replace('.',',')+' m')+card('Takyta',Math.round(ra)+' m²','vid 40°: '+Math.round(r0)+' m² ('+(ra<r0?'−':'+')+Math.round(Math.abs(1-ra/r0)*100)+' %)')+card('Gavelyta, båda',Math.round(2*ga)+' m²','vid 40°: '+Math.round(2*g0)+' m²')+card('Gavelfönster',(4*tp+6>=8.3)?'Ryms':'Ryms inte','kräver ca 30° eller mer');}

function btn(label,key,val){var b=document.createElement('button');b.textContent=label;b.dataset.k=key;b.dataset.val=val;b.onclick=function(){state[key]=val;render();};return b;}
function render(){var o=document.getElementById('opts');o.innerHTML='';var sc=document.getElementById('scene');
document.getElementById('s3').style.display=state.v=='tak'?'block':'none';
if(state.v=='tak'){sc.setAttribute('viewBox','0 0 380 340');draw3();}
else{document.getElementById('m').innerHTML='';
if(state.v=='fasad'){['vit','gra','bla'].forEach(function(x){o.appendChild(btn(NAMES[x],'c',x));});sc.setAttribute('viewBox','0 0 380 300');sc.innerHTML=facade();}
else{['fam','pen','sen'].forEach(function(x){o.appendChild(btn(NAMES[x],'s',x));});['g','u'].forEach(function(x){o.appendChild(btn(NAMES[x],'f',x));});sc.setAttribute('viewBox','0 0 380 330');sc.innerHTML=plan();}}
document.querySelectorAll('#opts button').forEach(function(b){var on=state[b.dataset.k]==b.dataset.val;b.style.borderColor=on?'var(--border-accent)':'';b.style.background=on?'var(--bg-accent)':'';});
document.querySelectorAll('#views button').forEach(function(b){var on=state.v==b.dataset.v;b.style.borderColor=on?'var(--border-accent)':'';b.style.background=on?'var(--bg-accent)':'';});}
document.querySelectorAll('#views button').forEach(function(b){b.onclick=function(){state.v=b.dataset.v;state.f='g';render();};});
document.getElementById('pt').oninput=function(){st.p=+this.value;document.getElementById('ptout').textContent=st.p+'°';FACES=build();draw3();};
document.getElementById('ang').oninput=function(){st.a=+this.value;draw3();};
render();
