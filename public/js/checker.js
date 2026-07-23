(function(){
const S={step:0,symptoms:[],timing:"",foods:[]};
const C=[
  {title:"What symptoms are you experiencing?",subtitle:"Select all that apply",type:"checkbox",field:"symptoms",
   options:[
    {id:"bloating",label:"Bloating",desc:"Abdominal swelling or distension"},
    {id:"gas",label:"Gas / Flatulence",desc:"Excessive wind or burping"},
    {id:"diarrhea",label:"Diarrhea",desc:"Loose or watery stools"},
    {id:"headache",label:"Headache",desc:"Recurring head pain after meals"},
    {id:"fatigue",label:"Fatigue",desc:"Unusual tiredness or brain fog"},
    {id:"skin_rash",label:"Skin Issues",desc:"Rash, eczema, or hives"},
    {id:"nausea",label:"Nausea",desc:"Feeling sick after eating"},
    {id:"joint_pain",label:"Joint Pain",desc:"Aching joints following meals"}
  ]},
  {title:"How long after eating do symptoms appear?",subtitle:"Choose the closest option",type:"radio",field:"timing",
   options:[
    {id:"15min",label:"Within 15 minutes",desc:"Almost immediately"},
    {id:"1hour",label:"30 minutes to 1 hour",desc:"Shortly after finishing"},
    {id:"4hours",label:"1 to 4 hours",desc:"Delayed reaction"},
    {id:"nextday",label:"Next day",desc:"Very delayed onset"}
  ]},
  {title:"Which foods seem to trigger your symptoms?",subtitle:"Select all that apply",type:"checkbox",field:"foods",
   options:[
    {id:"dairy",label:"Dairy",desc:"Milk, cheese, yogurt, cream"},
    {id:"wheat",label:"Wheat / Gluten",desc:"Bread, pasta, cereals"},
    {id:"fruits",label:"Certain Fruits",desc:"Apples, pears, stone fruits"},
    {id:"fermented",label:"Fermented Foods",desc:"Wine, aged cheese, kombucha"},
    {id:"eggs",label:"Eggs",desc:"Whole eggs or egg-containing dishes"},
    {id:"soy",label:"Soy Products",desc:"Tofu, soy sauce, edamame"},
    {id:"nuts",label:"Nuts & Seeds",desc:"Almonds, walnuts, peanuts"},
    {id:"shellfish",label:"Shellfish",desc:"Shrimp, crab, lobster"}
  ]}
];
const R={
  dairy:{title:"Lactose Intolerance",desc:"Your symptoms pattern suggests possible lactose intolerance, where the body cannot properly digest lactose found in dairy products.",likelihood:"Moderate to High",color:"brand",steps:["Try a 2-week dairy elimination diet","Keep a detailed food and symptom diary","Ask your GP about a hydrogen breath test"],link:"/tools/lactose-intolerance-test"},
  wheat:{title:"Gluten Sensitivity",desc:"Your responses suggest potential gluten sensitivity. Note: this is different from coeliac disease, which requires strict gluten avoidance.",likelihood:"Moderate",color:"amber",steps:["Ask your GP for coeliac screening BEFORE eliminating gluten","Try a supervised gluten elimination diet","Monitor symptoms with a food diary"],link:"/tools/gluten-intolerance-test"},
  fermented:{title:"Histamine Intolerance",desc:"Your symptom pattern may indicate histamine intolerance, linked to reduced activity of the DAO enzyme that breaks down histamine.",likelihood:"Low to Moderate",color:"red",steps:["Try a low-histamine diet for 2-4 weeks","Track which specific foods trigger symptoms","Consult a registered dietitian"],link:"/tools/histamine-intolerance-test"},
  fruits:{title:"Fructose Malabsorption",desc:"Your responses suggest possible fructose malabsorption, where the small intestine struggles to absorb fructose from fruits.",likelihood:"Low to Moderate",color:"orange",steps:["Try a low-FODMAP diet under professional guidance","Record which fruits trigger symptoms","Ask your GP about a hydrogen breath test"],link:"/tools/fructose-intolerance-test"},
  general:{title:"General Food Intolerance",desc:"Your symptoms span multiple food groups, which may indicate a broader intolerance pattern or IBS.",likelihood:"Moderate",color:"slate",steps:["Keep a detailed food diary for 2-4 weeks","Consider a structured elimination diet with professional support","Discuss your symptoms with your GP"],link:"/guides/test-guide"}
};
const colorMap={brand:"border-brand-200 bg-brand-50",amber:"border-amber-200 bg-amber-50",red:"border-red-200 bg-red-50",orange:"border-orange-200 bg-orange-50",slate:"border-slate-200 bg-slate-50"};
const textMap={brand:"text-brand-900",amber:"text-amber-900",red:"text-red-900",orange:"text-orange-900",slate:"text-slate-900"};
const badgeMap={brand:"bg-brand-100 text-brand-700",amber:"bg-amber-100 text-amber-700",red:"bg-red-100 text-red-700",orange:"bg-orange-100 text-orange-700",slate:"bg-slate-100 text-slate-700"};

function updateProgress(){
  for(let i=1;i<=3;i++){
    const c=document.querySelector('#label-'+i+' span:first-child');
    const l=document.querySelector('#label-'+i+' span:last-child');
    if(i<=S.step){c.className='w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold bg-brand-600 text-white shadow-sm shadow-brand-200';if(l)l.className='text-xs font-medium text-brand-700 hidden sm:block';}
    else if(i===S.step+1){c.className='w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold bg-brand-100 text-brand-700 ring-2 ring-brand-200';if(l)l.className='text-xs font-medium text-brand-700 hidden sm:block';}
    else{c.className='w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold bg-slate-100 text-slate-400';if(l)l.className='text-xs font-medium text-slate-400 hidden sm:block';}
  }
  document.getElementById('bar-1').style.width=S.step>=1?'100%':'0%';
  document.getElementById('bar-2').style.width=S.step>=2?'100%':'0%';
}

function renderCard(opt,type,field){
  const checked=type==='checkbox'?S[field].includes(opt.id):S.timing===opt.id;
  const inputType=type==='checkbox'?'checkbox':'radio';
  const nameAttr=type==='radio'?'name="timing"':'';
  return '<label class="flex items-start gap-4 p-4 sm:p-5 border-2 border-slate-200 rounded-xl cursor-pointer transition-all duration-200 hover:border-brand-300 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50/50 has-[:checked]:shadow-sm block">'+
    '<input type="'+inputType+'" '+nameAttr+' value="'+opt.id+'" class="mt-0.5 w-5 h-5 '+(type==='checkbox'?'rounded':'rounded-full')+' border-slate-300 text-brand-600 focus:ring-brand-500 shrink-0 check-input" '+(checked?'checked':'')+'>'+
    '<div class="min-w-0"><div class="text-sm font-medium text-slate-800">'+opt.label+'</div><div class="text-xs text-slate-500 mt-0.5">'+opt.desc+'</div></div></label>';
}

function renderStep(idx){
  const cfg=C[idx];
  const items=cfg.options.map(o=>renderCard(o,cfg.type,cfg.field)).join('');
  const hasPrev=idx>0;
  const nextLabel=idx===2?'See My Results':'Continue';
  return '<div class="space-y-5"><div class="space-y-1 mb-6"><h3 class="text-xl font-semibold text-slate-900">'+cfg.title+'</h3><p class="text-sm text-slate-500">'+cfg.subtitle+'</p></div>'+
    '<div class="space-y-2.5">'+items+'</div>'+
    '<div class="flex items-center justify-between pt-4">'+(hasPrev?'<button id="checker-prev" class="px-5 py-2.5 rounded-xl border-2 border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200">Back</button>':'<div></div>')+
    '<button id="checker-next" class="px-6 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm shadow-brand-200">'+nextLabel+'</button></div></div>';
}

function renderResults(){
  const food=S.foods[0]||'general';
  const tMap={dairy:'dairy',wheat:'wheat',fermented:'fermented',fruits:'fruits'};
  const r=R[tMap[food]||'general'];
  return '<div class="space-y-5"><div class="space-y-1 mb-4"><h3 class="text-xl font-semibold text-slate-900">Your Assessment Results</h3><p class="text-sm text-slate-500">Based on your responses</p></div>'+
    '<div class="border-2 '+colorMap[r.color]+' rounded-xl p-5 sm:p-6">'+
    '<div class="flex items-center gap-3 mb-4"><div class="w-12 h-12 rounded-full '+badgeMap[r.color]+' flex items-center justify-center shrink-0"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>'+
    '<div><h3 class="font-semibold '+textMap[r.color]+' text-lg leading-tight">'+r.title+'</h3><span class="text-xs font-medium '+badgeMap[r.color]+' px-2 py-0.5 rounded-full">Likelihood: '+r.likelihood+'</span></div></div>'+
    '<p class="text-sm '+textMap[r.color]+' mb-4 leading-relaxed opacity-85">'+r.desc+'</p>'+
    '<div class="space-y-3 mb-5"><p class="text-sm font-semibold '+textMap[r.color]+'">Recommended next steps:</p><ul class="space-y-2">'+
    r.steps.map((s,i)=>'<li class="flex items-start gap-2.5 text-sm opacity-85 '+textMap[r.color]+'"><span class="flex items-center justify-center w-5 h-5 rounded-full '+badgeMap[r.color]+' text-xs font-semibold shrink-0 mt-0.5">'+(i+1)+'</span>'+s+'</li>').join('')+'</ul></div>'+
    '<a href="'+r.link+'" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-colors no-underline shadow-sm">Take the detailed checker<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>'+
    '<div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 leading-relaxed">This tool does NOT diagnose disease. It is for educational purposes only. Always consult your GP or a registered dietitian for medical advice.</div>'+
    '<button id="checker-restart" class="mt-3 px-5 py-2.5 rounded-xl border-2 border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200">Start Over</button></div>';
}

function animate(html,cb){
  const c=document.getElementById('step-content');
  c.style.opacity='0';c.style.transform='translateY(8px)';c.style.transition='all 0.2s ease-out';
  setTimeout(()=>{c.innerHTML=html;c.style.opacity='1';c.style.transform='translateY(0)';if(cb)setTimeout(cb,50);},200);
}

function bindEvents(idx){
  if(idx===3){const b=document.getElementById('checker-restart');if(b)b.onclick=()=>{Object.assign(S,{step:0,symptoms:[],timing:"",foods:[]});updateProgress();animate(renderStep(0),()=>bindEvents(0));};return;}
  const nb=document.getElementById('checker-next'),pb=document.getElementById('checker-prev');
  if(nb)nb.onclick=()=>{
    const cfg=C[idx];
    if(cfg.type==='radio'){const s=document.querySelector('input[name="timing"]:checked');if(s)S.timing=s.value;if(!S.timing)return;}
    else{S[cfg.field]=Array.from(document.querySelectorAll('.check-input:checked')).map(i=>i.value);if(!S[cfg.field].length)return;}
    S.step++;
    if(S.step===3){updateProgress();animate(renderResults(),()=>bindEvents(3));}
    else{updateProgress();animate(renderStep(S.step),()=>bindEvents(S.step));}
  };
  if(pb)pb.onclick=()=>{S.step--;updateProgress();animate(renderStep(S.step),()=>bindEvents(S.step));};
}

// FAQ
const faqs=[
  {q:"Is this checker a medical diagnosis?",a:"No. This tool is for educational purposes only. Always consult your GP or a registered dietitian."},
  {q:"How accurate is the checker?",a:"This checker uses common symptom patterns. It is not a validated diagnostic tool."},
  {q:"Food intolerance vs food allergy?",a:"Food intolerance affects the digestive system. Food allergy involves the immune system and can be life-threatening. <a href='/guides/intolerance-vs-allergy/' class='text-brand-600 hover:text-brand-700 underline'>Learn more.</a>"},
  {q:"Are commercial tests reliable?",a:"Many IgG tests are not recommended by the NHS and BDA. <a href='/guides/test-guide/' class='text-brand-600 hover:text-brand-700 underline'>Read our testing guide.</a>"},
  {q:"What should I do with my results?",a:"Keep a food diary, try an elimination diet under professional guidance, and discuss with your GP."}
];
document.getElementById('faq-list').innerHTML=faqs.map(f=>'<details class="group bg-white border border-slate-200 rounded-xl"><summary class="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-slate-900 text-sm list-none select-none">'+f.q+'<svg class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></summary><div class="px-5 pb-4 text-sm text-slate-500 leading-relaxed">'+f.a+'</div></details>').join('');

document.getElementById('step-content').innerHTML=renderStep(0);
bindEvents(0);updateProgress();
})();
