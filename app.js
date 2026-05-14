// ─── DATA ────────────────────────────────────────────────────────────────────
const categories=[
  {id:'manners',label:'👋 Basics & manners',tip:'<strong>Pro tip:</strong> In both Italy and Greece, greeting locals in their language — even just a "hello" — earns enormous goodwill. Italians and Greeks are warm and expressive; a smile and a buongiorno goes a long way!'},
  {id:'numbers',label:'🔢 Numbers 1–10',tip:'<strong>Numbers matter!</strong> You\'ll use them for prices, seats, floors, and quantities. In Italy, markets and small shops often prefer cash — bring euros in small bills. Greece also runs mostly on cash outside tourist zones.'},
  {id:'airport',label:'✈️ Airport & planes',tip:'<strong>Airport know-how:</strong> Rome\'s main airport is Fiumicino (FCO) — not Ciampino. Athens airport is Eleftherios Venizelos (ATH). Signage is in English too, but locals appreciate when you try the local language at counters!'},
  {id:'transport',label:'🚆 Trains & getting around',tip:'<strong>Train tip:</strong> In Italy, you MUST validate (stamp) your train ticket in the yellow machines before boarding — even if you bought online. Failure to validate = fine, no exceptions. In Greece, train travel is limited; ferries are the main island transport.'},
  {id:'restaurant',label:'🍽️ Cafes & restaurants',tip:'<strong>Dining culture:</strong> In Italy, cappuccino is a breakfast drink — ordering one after noon marks you as a tourist! A "caffe" means espresso. In Greece, coffee culture is strong — a Greek frappe (iced Nescafé) is iconic. Tipping is appreciated but not required in either country.'},
  {id:'shopping',label:'🛍️ Shopping',tip:'<strong>Shopping note:</strong> In Italy, haggling is NOT done in shops — only at flea markets. In Greece, especially on islands, friendly negotiation is more acceptable. VAT refunds are available for non-EU visitors on larger purchases — ask for a tax refund form!'}
];

const phrases={
  manners:[
    {en:'Hello',ctx:'General all-purpose greeting',it:'Ciao / Salve',it_p:'CHOW / SAL-veh',gr:'Καλημέρα',gr_t:'Kalimera',gr_p:'kah-lee-MEH-rah'},
    {en:'Good morning',ctx:'Use to greet someone',it:'Buongiorno',it_p:'bwon-JOR-no',gr:'Γεια σας / Γεια σου',gr_t:'Yia sas / Yia sou',gr_p:'YAH-sas (formal) / YAH-soo (casual)'},
    {en:'Good evening',ctx:'Use after around 5pm',it:'Buonasera',it_p:'bwon-ah-SEH-rah',gr:'Καλησπέρα',gr_t:'Kalispéra',gr_p:'kah-lee-SPEH-rah'},
    {en:'Goodbye',ctx:'Leaving a shop, hotel, taxi',it:'Arrivederci',it_p:'ah-ree-veh-DER-chee',gr:'Αντίο',gr_t:'Antío',gr_p:'an-DEE-oh'},
    {en:'Please',ctx:'When ordering or asking for something',it:'Per favore',it_p:'pehr fah-VOH-reh',gr:'Παρακαλώ',gr_t:'Parakaló',gr_p:'pah-rah-kah-LOH'},
    {en:'Thank you',ctx:'After any service or help',it:'Grazie',it_p:'GRAH-tsyeh',gr:'Ευχαριστώ',gr_t:'Efcharistó',gr_p:'ef-kha-ree-STOH'},
    {en:'Thank you very much',ctx:'When extra gratitude is warranted',it:'Grazie mille',it_p:'GRAH-tsyeh MEEL-leh',gr:'Ευχαριστώ πολύ',gr_t:'Efcharistó polý',gr_p:'ef-kha-ree-STOH poh-LEE'},
    {en:"You're welcome",ctx:'Replying to thanks',it:'Prego',it_p:'PREH-goh',gr:'Παρακαλώ',gr_t:'Parakaló',gr_p:'pah-rah-kah-LOH'},
    {en:'Excuse me / Sorry',ctx:'Getting attention or apologizing',it:'Scusi / Mi scusi',it_p:'SKOO-zee / mee SKOO-zee',gr:'Συγγνώμη',gr_t:'Signómi',gr_p:'see-GNOH-mee'},
    {en:'Do you speak English?',ctx:'Ask locals before launching in English',it:'Parla inglese?',it_p:'PAR-lah een-GLEH-zeh',gr:'Μιλάτε αγγλικά;',gr_t:'Miláte angliká?',gr_p:'mee-LAH-teh ang-lee-KAH'},
    {en:"Sorry, I don't understand",ctx:'When lost in translation',it:'Non capisco',it_p:'non kah-PEES-koh',gr:'Συγγνώμη, δεν καταλαβαίνω',gr_t:'Den katalavaíno',gr_p:'den kah-tah-lah-VEH-noh'},
    {en:'Yes / No',ctx:'Universal!',it:'Sì / No',it_p:'see / noh',gr:'Ναι / Όχι',gr_t:'Nai / Óchi',gr_p:'neh / OH-hee'},
  ],
  numbers:[
    {en:'One',ctx:'',it:'Uno',it_p:'OO-noh',gr:'Ένα',gr_t:'Éna',gr_p:'EH-nah'},
    {en:'Two',ctx:'',it:'Due',it_p:'DOO-eh',gr:'Δύο',gr_t:'Dýo',gr_p:'DEE-oh'},
    {en:'Three',ctx:'',it:'Tre',it_p:'treh',gr:'Τρία',gr_t:'Tría',gr_p:'TREE-ah'},
    {en:'Four',ctx:'',it:'Quattro',it_p:'KWAT-troh',gr:'Τέσσερα',gr_t:'Téssera',gr_p:'TES-seh-rah'},
    {en:'Five',ctx:'',it:'Cinque',it_p:'CHEEN-kweh',gr:'Πέντε',gr_t:'Pénte',gr_p:'PEN-teh'},
    {en:'Six',ctx:'',it:'Sei',it_p:'seh-ee',gr:'Έξι',gr_t:'Éxi',gr_p:'EK-see'},
    {en:'Seven',ctx:'',it:'Sette',it_p:'SET-teh',gr:'Επτά',gr_t:'Eptá',gr_p:'ep-TAH'},
    {en:'Eight',ctx:'',it:'Otto',it_p:'OT-toh',gr:'Οκτώ',gr_t:'Októ',gr_p:'ok-TOH'},
    {en:'Nine',ctx:'',it:'Nove',it_p:'NOH-veh',gr:'Εννέα',gr_t:'Ennéa',gr_p:'en-NEH-ah'},
    {en:'Ten',ctx:'',it:'Dieci',it_p:'dee-EH-chee',gr:'Δέκα',gr_t:'Déka',gr_p:'DEH-kah'},
  ],
  airport:[
    {en:'Where is gate number...?',ctx:'At the airport terminal',it:'Dov\'è il gate numero...?',it_p:'doh-VEH eel GAY-teh NOO-meh-roh',gr:'Πού είναι η πύλη αριθμός...;',gr_t:'Poú eínai i pýli arithmós...?',gr_p:'poo EE-neh ee PEE-lee ah-reeth-MOS'},
    {en:'My flight is...',ctx:'When speaking to staff',it:'Il mio volo è...',it_p:'eel MEE-oh VOH-loh eh',gr:'Η πτήση μου είναι...',gr_t:'I ptísi mou eínai...',gr_p:'ee PTEE-see moo EE-neh'},
    {en:'Is the flight delayed?',ctx:'Checking your status',it:'Il volo è in ritardo?',it_p:'eel VOH-loh eh een ree-TAR-doh',gr:'Έχει καθυστέρηση η πτήση;',gr_t:'Échei kathystérisi i ptísi?',gr_p:'EH-hee kah-thees-TEH-ree-see ee PTEE-see'},
    {en:'Where is baggage claim?',ctx:'On arrival',it:'Dov\'è il ritiro bagagli?',it_p:'doh-VEH eel ree-TEE-roh bah-GAH-lyee',gr:'Πού είναι η παραλαβή αποσκευών;',gr_t:'Poú eínai i paralabí aposkevón?',gr_p:'poo EE-neh ee pah-rah-lah-VEE ah-pos-keh-VON'},
    {en:'Where is the taxi / bus?',ctx:'Exiting the airport',it:'Dov\'è il taxi / l\'autobus?',it_p:'doh-VEH eel TAK-see / low-TOH-boos',gr:'Πού είναι το ταξί / λεωφορείο;',gr_t:'Poú eínai to taxí / leoforeío?',gr_p:'poo EE-neh toh tak-SEE / leh-oh-foh-REE-oh'},
    {en:'I have nothing to declare',ctx:'At customs',it:'Non ho niente da dichiarare',it_p:'non oh nee-EN-teh dah dee-kyah-RAH-reh',gr:'Δεν έχω τίποτα να δηλώσω',gr_t:'Den écho típota na dilóso',gr_p:'den EH-hoh TEE-poh-tah nah dee-LOH-soh'},
  ],
  transport:[
    {en:'One ticket to..., please',ctx:'At any ticket counter',it:'Un biglietto per..., per favore',it_p:'oon beel-YET-toh pehr... pehr fah-VOH-reh',gr:'Ένα εισιτήριο για..., παρακαλώ',gr_t:'Éna eisitírio gia..., parakaló',gr_p:'EH-nah ee-see-TEE-ree-oh yah... pah-rah-kah-LOH'},
    {en:'Is this seat free?',ctx:'On train, bus or ferry',it:'È libero questo posto?',it_p:'eh LEE-beh-roh KWES-toh POS-toh',gr:'Είναι ελεύθερη αυτή η θέση;',gr_t:'Eínai eléftheri aftí i thési?',gr_p:'EE-neh eh-LEF-theh-ree af-TEE ee THEH-see'},
    {en:'What time does it arrive?',ctx:'Train, ferry, or bus',it:'A che ora arriva?',it_p:'ah keh OH-rah ah-REE-vah',gr:'Τι ώρα φτάνει;',gr_t:'Ti óra ftánei?',gr_p:'tee OH-rah FTAH-nee'},
    {en:'Is there a delay?',ctx:'Checking status',it:'C\'è un ritardo?',it_p:'cheh oon ree-TAR-doh',gr:'Υπάρχει καθυστέρηση;',gr_t:'Ypárchei kathystérisi?',gr_p:'ee-PAR-hee kah-thees-TEH-ree-see'},
    {en:'Has this train been cancelled?',ctx:'When departure board looks wrong',it:'Questo treno è stato cancellato?',it_p:'KWES-toh TREH-noh eh STAH-toh kan-chel-LAH-toh',gr:'Έχει ακυρωθεί αυτό το τρένο;',gr_t:'Échei akyrothei aftó to tréno?',gr_p:'EH-hee ah-kee-roh-THEE af-TOH toh TREH-noh'},
    {en:'Where is the train station?',ctx:'Asking for directions',it:'Dov\'è la stazione?',it_p:'doh-VEH lah stah-TSYOH-neh',gr:'Πού είναι ο σταθμός;',gr_t:'Poú eínai o stathmós?',gr_p:'poo EE-neh oh stath-MOS'},
    {en:'I need a taxi to the hotel',ctx:'Arriving in a city',it:'Ho bisogno di un taxi per l\'hotel',it_p:'oh bee-ZON-yoh dee oon TAK-see pehr loh-TEL',gr:'Χρειάζομαι ταξί για το ξενοδοχείο',gr_t:'Chreíazomai taxí gia to xenodocheío',gr_p:'khree-AH-zoh-meh tak-SEE yah toh kseh-noh-doh-KHEE-oh'},
    {en:'Which platform?',ctx:'Finding your train',it:'Quale binario?',it_p:'KWAH-leh bee-NAH-ree-oh',gr:'Ποια αποβάθρα;',gr_t:'Poiá apováthra?',gr_p:'pee-AH ah-poh-VATH-rah'},
    {en:'Where is the port / ferry terminal?',ctx:'For Greek island hopping',it:'Dov\'è il porto?',it_p:'doh-VEH eel POR-toh',gr:'Πού είναι το λιμάνι;',gr_t:'Poú eínai to limáni?',gr_p:'poo EE-neh toh lee-MAH-nee'},
  ],
  restaurant:[
    {en:'A table for two, please',ctx:'Entering a restaurant',it:'Un tavolo per due, per favore',it_p:'oon TAH-voh-loh pehr DOO-eh pehr fah-VOH-reh',gr:'Ένα τραπέζι για δύο, παρακαλώ',gr_t:'Éna trapézi gia dýo, parakaló',gr_p:'EH-nah trah-PEH-zee yah DEE-oh pah-rah-kah-LOH'},
    {en:'The menu, please',ctx:'Once seated',it:'Il menu, per favore',it_p:'eel meh-NOO pehr fah-VOH-reh',gr:'Τον κατάλογο, παρακαλώ',gr_t:'Ton katálogo, parakaló',gr_p:'ton kah-TAH-loh-goh pah-rah-kah-LOH'},
    {en:'I would like...',ctx:'Ordering your food',it:'Vorrei...',it_p:'voh-REH-ee',gr:'Θα ήθελα...',gr_t:'Tha íthela...',gr_p:'thah EE-theh-lah'},
    {en:'What do you recommend?',ctx:'When unsure what to order',it:'Cosa mi consiglia?',it_p:'KOH-zah mee kon-SEEL-yah',gr:'Τι συστήνετε;',gr_t:'Ti systínete?',gr_p:'tee sees-TEE-neh-teh'},
    {en:'Delicious!',ctx:'Complimenting the food',it:'Delizioso!',it_p:'deh-lee-TSYOH-zoh',gr:'Νόστιμο!',gr_t:'Nóstimo!',gr_p:'NOH-stee-moh'},
    {en:'The check, please',ctx:'When ready to pay',it:'Il conto, per favore',it_p:'eel KON-toh pehr fah-VOH-reh',gr:'Τον λογαριασμό, παρακαλώ',gr_t:'Ton logariasmó, parakaló',gr_p:'ton loh-gah-ree-az-MOH pah-rah-kah-LOH'},
    {en:'Can I pay by card?',ctx:'Before handing over cash',it:'Posso pagare con carta?',it_p:'POS-soh pah-GAH-reh kon KAR-tah',gr:'Μπορώ να πληρώσω με κάρτα;',gr_t:'Boró na pliróso me kárta?',gr_p:'boh-ROH nah plee-ROH-soh meh KAR-tah'},
    {en:'Water, please',ctx:'Still or sparkling — specify!',it:'Acqua, per favore',it_p:'AHK-kwah pehr fah-VOH-reh',gr:'Νερό, παρακαλώ',gr_t:'Neró, parakaló',gr_p:'neh-ROH pah-rah-kah-LOH'},
    {en:'One coffee, please',ctx:'Espresso in Italy, Greek coffee in Greece!',it:'Un caffè, per favore',it_p:'oon kaf-FEH pehr fah-VOH-reh',gr:'Έναν καφέ, παρακαλώ',gr_t:'Énan kafé, parakaló',gr_p:'EH-nahn kah-FEH pah-rah-kah-LOH'},
  ],
  shopping:[
    {en:'How much does this cost?',ctx:'In any shop',it:'Quanto costa?',it_p:'KWAHN-toh KOS-tah',gr:'Πόσο κάνει αυτό;',gr_t:'Póso kánei aftó?',gr_p:'POH-soh KAH-nee af-TOH'},
    {en:'Do you have this in another size?',ctx:'Clothing & accessories',it:'Ce l\'ha in un\'altra taglia?',it_p:'cheh lah een oon-AHL-trah TAH-lyah',gr:'Το έχετε σε άλλο μέγεθος;',gr_t:'To échete se állo mégethos?',gr_p:'toh EH-heh-teh seh AH-loh MEH-yeh-thos'},
    {en:'I\'m just looking, thanks',ctx:'When shop staff approach',it:'Sto solo guardando, grazie',it_p:'stoh SOH-loh gwahr-DAN-doh GRAH-tsyeh',gr:'Απλώς κοιτάζω, ευχαριστώ',gr_t:'Aplós koitázo, efcharistó',gr_p:'ah-PLOS kee-TAH-zoh ef-kha-ree-STOH'},
    {en:'I\'ll take this one',ctx:'Making a purchase',it:'Prendo questo',it_p:'PREN-doh KWES-toh',gr:'Θα πάρω αυτό',gr_t:'Tha páro aftó',gr_p:'thah PAH-roh af-TOH'},
    {en:'Can you give me a discount?',ctx:'At markets or small shops (Greece mainly)',it:'Può farmi uno sconto?',it_p:'pwoh FAR-mee OO-noh SKON-toh',gr:'Μπορείτε να μου κάνετε έκπτωση;',gr_t:'Boríte na mou kánete ékptosi?',gr_p:'boh-REE-teh nah moo KAH-neh-teh EK-ptoh-see'},
    {en:'Do you accept cards?',ctx:'Before shopping at small stores',it:'Accettate carte?',it_p:'ah-chet-TAH-teh KAR-teh',gr:'Δέχεστε κάρτες;',gr_t:'Décheste kártes?',gr_p:'DEH-kheh-steh KAR-tes'},
  ]
};

// ─── VOICE ENGINE ─────────────────────────────────────────────────────────────
let selectedVoices={it:null, gr:null};
let voicesReady=false;

const PREF_IT=['Google italiano','Alice','Luca','Federica'];
const PREF_GR=['Google ελληνικά','Melina'];

function scoreName(name, prefs){
  for(let i=0;i<prefs.length;i++) if(name===prefs[i]) return prefs.length-i;
  return 0;
}

function pickBestVoice(lang){
  const voices=window.speechSynthesis.getVoices();
  const code=lang==='it'?'it':'el';
  const prefs=lang==='it'?PREF_IT:PREF_GR;
  const matches=voices.filter(v=>v.lang.toLowerCase().startsWith(code));
  if(!matches.length) return null;
  matches.sort((a,b)=>{
    const sa=scoreName(a.name,prefs), sb=scoreName(b.name,prefs);
    if(sb!==sa) return sb-sa;
    if(a.localService!==b.localService) return a.localService?1:-1;
    return 0;
  });
  return matches[0];
}

function populateVoiceSelect(lang){
  const voices=window.speechSynthesis.getVoices();
  const code=lang==='it'?'it':'el';
  const sel=document.getElementById(lang==='it'?'itVoiceSelect':'grVoiceSelect');
  const matches=voices.filter(v=>v.lang.toLowerCase().startsWith(code));
  sel.innerHTML='';
  if(!matches.length){
    sel.innerHTML='<option>No '+lang.toUpperCase()+' voice found</option>';
    return;
  }
  const best=pickBestVoice(lang);
  matches.forEach(v=>{
    const opt=document.createElement('option');
    opt.value=v.name;
    opt.textContent=v.name+(v.localService?' (local)':' (network)');
    if(best&&v.name===best.name) opt.selected=true;
    sel.appendChild(opt);
  });
  selectedVoices[lang]=best;
}

function setVoice(lang,name){
  const voices=window.speechSynthesis.getVoices();
  selectedVoices[lang]=voices.find(v=>v.name===name)||null;
}

function initVoices(){
  const voices=window.speechSynthesis.getVoices();
  if(!voices.length) return false;
  populateVoiceSelect('it');
  populateVoiceSelect('gr');
  voicesReady=true;
  const itName=selectedVoices.it?selectedVoices.it.name:'none found';
  const grName=selectedVoices.gr?selectedVoices.gr.name:'none found';
  document.getElementById('voiceStatus').textContent='IT: '+itName+' · GR: '+grName;
  return true;
}

if(window.speechSynthesis){
  if(!initVoices()){
    window.speechSynthesis.addEventListener('voiceschanged',()=>{if(!voicesReady)initVoices();});
    setTimeout(()=>{if(!voicesReady)initVoices();},1500);
  }
} else {
  document.getElementById('voiceStatus').textContent='Speech not supported — use phonetics on the card.';
}

function speakPhrase(lang){
  if(!window.speechSynthesis) return;
  const p=getCatPhrases()[currentIdx];
  const text=lang==='it'?p.it:p.gr;
  const langCode=lang==='it'?'it-IT':'el-GR';
  window.speechSynthesis.cancel();
  const utter=new SpeechSynthesisUtterance(text);
  utter.lang=langCode;
  utter.rate=0.82;
  utter.pitch=1;
  if(selectedVoices[lang]) utter.voice=selectedVoices[lang];
  const btn=document.getElementById(lang==='it'?'itAudioBtn':'grAudioBtn');
  utter.onstart=()=>{if(btn){btn.innerHTML='<i class="ti ti-player-pause"></i> playing...';btn.disabled=true;}};
  utter.onend=()=>{if(btn){btn.innerHTML='<i class="ti ti-volume"></i> hear it';btn.disabled=false;}};
  utter.onerror=()=>{if(btn){btn.innerHTML='<i class="ti ti-volume"></i> hear it';btn.disabled=false;}};
  window.speechSynthesis.speak(utter);
}

// ─── APP STATE ────────────────────────────────────────────────────────────────
let currentCat='manners', currentIdx=0, mastered={}, flipped={it:false,gr:false};

function initMastered(){categories.forEach(c=>{mastered[c.id]=new Set();});}
function getCatPhrases(){return phrases[currentCat];}

function render(){
  const list=getCatPhrases();
  const p=list[currentIdx];
  document.getElementById('englishPhrase').textContent=p.en;
  document.getElementById('englishContext').textContent=p.ctx||'';
  document.getElementById('itFront').textContent=p.it;
  document.getElementById('grFront').textContent=p.gr_t||p.gr;
  document.getElementById('itPhrase').textContent=p.it;
  document.getElementById('itPhonetic').textContent=p.it_p;
  document.getElementById('grPhrase').textContent=p.gr_t||p.gr;
  document.getElementById('grPhonetic').textContent=p.gr_p;
  flipped.it=false; flipped.gr=false;
  document.getElementById('itCard').classList.remove('flipped');
  document.getElementById('grCard').classList.remove('flipped');
  ['itAudioBtn','grAudioBtn'].forEach(id=>{
    const b=document.getElementById(id);
    if(b){b.innerHTML='<i class="ti ti-volume"></i> hear it';b.disabled=false;}
  });
  window.speechSynthesis&&window.speechSynthesis.cancel();
  document.getElementById('prevBtn').disabled=currentIdx===0;
  document.getElementById('nextBtn').disabled=currentIdx===list.length-1;
  const isMastered=mastered[currentCat].has(currentIdx);
  const btn=document.getElementById('masteredBtn');
  btn.innerHTML=isMastered?'<i class="ti ti-check"></i> mastered! (undo?)':'<i class="ti ti-check"></i> got it! mark as mastered';
  btn.style.background=isMastered?'#C0DD97':'';
  updateCounter(); updateProgress();
}

function updateCounter(){
  document.getElementById('phraseCounter').textContent='phrase '+(currentIdx+1)+' of '+getCatPhrases().length;
}

function updateProgress(){
  let total=0,done=0;
  categories.forEach(c=>{total+=phrases[c.id].length;done+=mastered[c.id].size;});
  document.getElementById('progressFill').style.width=Math.round(done/total*100)+'%';
  document.getElementById('masteredCount').textContent=done>0?done+' of '+total+' phrases mastered':'';
}

function renderCategories(){
  const el=document.getElementById('catTabs');
  el.innerHTML='';
  categories.forEach(c=>{
    const btn=document.createElement('button');
    btn.className='cat-btn'+(c.id===currentCat?' active':'');
    btn.textContent=c.label;
    btn.addEventListener('click',()=>{currentCat=c.id;currentIdx=0;renderCategories();renderTip();render();});
    el.appendChild(btn);
  });
}

function renderTip(){
  const cat=categories.find(c=>c.id===currentCat);
  document.getElementById('tipBanner').innerHTML=cat?cat.tip:'';
}

function flipCard(lang){
  const card=document.getElementById(lang==='it'?'itCard':'grCard');
  flipped[lang]=!flipped[lang];
  flipped[lang]?card.classList.add('flipped'):card.classList.remove('flipped');
}

function flipBoth(){
  const anyFlipped=flipped.it||flipped.gr;
  ['it','gr'].forEach(l=>{
    const card=document.getElementById(l==='it'?'itCard':'grCard');
    if(!anyFlipped){flipped[l]=true;card.classList.add('flipped');}
    else{flipped[l]=false;card.classList.remove('flipped');}
  });
}

function navigate(dir){
  const list=getCatPhrases();
  currentIdx=Math.max(0,Math.min(list.length-1,currentIdx+dir));
  render();
}

function markMastered(){
  if(mastered[currentCat].has(currentIdx)) mastered[currentCat].delete(currentIdx);
  else mastered[currentCat].add(currentIdx);
  render();
  if(mastered[currentCat].has(currentIdx)&&currentIdx<getCatPhrases().length-1){
    setTimeout(()=>navigate(1),600);
  }
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  // Wire up event listeners (replaces inline onclick attributes)
  document.getElementById('itCard').addEventListener('click', ()=>flipCard('it'));
  document.getElementById('grCard').addEventListener('click', ()=>flipCard('gr'));
  document.getElementById('itAudioBtn').addEventListener('click', function(e){e.stopPropagation();speakPhrase('it');});
  document.getElementById('grAudioBtn').addEventListener('click', function(e){e.stopPropagation();speakPhrase('gr');});
  document.getElementById('itVoiceSelect').addEventListener('change', function(){setVoice('it',this.value);});
  document.getElementById('grVoiceSelect').addEventListener('change', function(){setVoice('gr',this.value);});
  document.querySelector('.flip-all-btn').addEventListener('click', flipBoth);
  document.getElementById('masteredBtn').addEventListener('click', markMastered);
  document.getElementById('prevBtn').addEventListener('click', ()=>navigate(-1));
  document.getElementById('nextBtn').addEventListener('click', ()=>navigate(1));

  initMastered();
  renderCategories();
  renderTip();
  render();
});
