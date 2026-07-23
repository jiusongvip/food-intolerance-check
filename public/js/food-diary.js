(function(){
var d=[],m="breakfast";
function r(){
var h="";
if(d.length===0){h='<div class="text-center text-slate-400 text-sm py-6">No entries yet. Add your first meal above.</div>';}
else{
h='<div class="space-y-3">';
d.slice().reverse().forEach(function(e){
h+='<div class="border border-slate-200 rounded-xl p-4"><div class="flex items-center justify-between mb-2"><span class="text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">'+e.type+'</span><span class="text-xs text-slate-400">'+e.date+'</span></div><div class="text-sm text-slate-800 mb-1">'+e.food+'</div>'+(e.symptoms?'<div class="text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-1.5 mt-2">Symptoms: '+e.symptoms+'</div>':'')+'</div>';
});
h+='</div>';
}
document.getElementById('diary-entries').innerHTML=h;
localStorage.setItem('foodcheck-diary',JSON.stringify(d));
}
document.querySelectorAll('.meal-type-btn').forEach(function(b){
b.onclick=function(){
document.querySelectorAll('.meal-type-btn').forEach(function(x){x.className='px-4 py-2 rounded-lg border border-slate-200 text-sm hover:border-purple-300 hover:bg-purple-50 transition-colors meal-type-btn';});
b.className='px-4 py-2 rounded-lg border-2 border-purple-500 bg-purple-50 text-purple-700 text-sm font-medium transition-colors meal-type-btn';
m=b.dataset.type;
};
});
document.getElementById('diary-add').onclick=function(){
var fd=document.getElementById('diary-food'),sy=document.getElementById('diary-symptoms');
if(!fd.value.trim())return;
d.push({type:m,food:fd.value.trim(),symptoms:sy.value.trim(),date:new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'})});
fd.value='';sy.value='';r();
};
try{var saved=JSON.parse(localStorage.getItem('foodcheck-diary')||'[]');if(saved.length)d=saved;}catch(e){}
r();
})();
