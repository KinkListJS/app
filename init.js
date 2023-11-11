/* ~SaVa~ */

function addDualSelectorKink(categoryID,kinkName,firstSelName,secondSelName){ 
  const kinkID = kinkName.replaceAll(" ","");
	const htmlElementTemplate = `<div id="Kink-%KINKID%" class="Kink-DualSelector">
          <div class="KinkTitle"><p>%KINKNAME%</p></div>
          <div class="DualKinkSelector">
            <div class="KinkSelector">
              <label for="Kink-%KINKID%-%FIRSTSELNAME%" class="KinkSelectMenuLabel">%FIRSTSELNAME%:</label>
              <select id="Kink-%KINKID%-%FIRSTSELNAME%" class="KinkSelectMenu">
                <option value="0">Empty</option>
                <option value="1">No</option>
                <option value="2">Maybe</option>
                <option value="3">Okay</option>
                <option value="4">Like</option>
                <option value="5">Favorite</option>
              </select>
            </div>
            <div class="KinkSelector">
              <label for="Kink-%KINKID%-%SECONDSELNAME%" class="KinkSelectMenuLabel">%SECONDSELNAME%:</label>
              <select id="Kink-%KINKID%-%SECONDSELNAME%" class="KinkSelectMenu">
                <option value="0">Empty</option>
                <option value="1">No</option>
                <option value="2">Maybe</option>
                <option value="3">Okay</option>
                <option value="4">Like</option>
                <option value="5">Favorite</option>
              </select>
            </div>
          </div>
        </div>`;
  const kinkDualSelectorHtml = htmlElementTemplate.replaceAll(`%KINKNAME%`,kinkName)
    .replaceAll(`%KINKID%`,kinkID).replaceAll(`%FIRSTSELNAME%`,firstSelName).replaceAll(`%SECONDSELNAME%`,secondSelName);
  document.getElementById(categoryID).getElementsByClassName("KinkContainer")[0].innerHTML += kinkDualSelectorHtml;
}

function addSingleSelectorKink(categoryID,kinkName){ 
  const kinkID = kinkName.replaceAll(" ","");
  const htmlElementTemplate = `<div id="Kink-%KINKID%" class="Kink-SingleSelector">
          <div class="KinkTitle"><p>%KINKNAME%</p></div>
          <div class="SingleKinkSelector">
            <div class="KinkSelector">
              <label for="Kink-%KINKID%-%FIRSTSELNAME%" class="KinkSelectMenuLabel"></label>
              <select id="Kink-%KINKID%-%FIRSTSELNAME%" class="KinkSelectMenu">
                <option value="0">Empty</option>
                <option value="1">No</option>
                <option value="2">Maybe</option>
                <option value="3">Okay</option>
                <option value="4">Like</option>
                <option value="5">Favorite</option>
              </select>
            </div>
          </div>
        </div>`;
  const kinkDualSelectorHtml = htmlElementTemplate.replaceAll(`%KINKNAME%`,kinkName)
    .replaceAll(`%KINKID%`,kinkID);
  document.getElementById(categoryID).getElementsByClassName("KinkContainer")[0].innerHTML += kinkDualSelectorHtml;
}

//Fuck that I am not dealing with all the html behind these, js can do it.
function generateKinkSelectors(){
  //Pain
  addDualSelectorKink("PainDomDeg","Light Pain","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Heavy Pain","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Nipple Clamps","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Clothes Pins","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Caning","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Flogging","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Spanking","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Cock/Pussy Slapping","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Cock/Pussy Torture","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Hot Wax","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Scratching","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Biting","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Cutting","Giving","Receiving");
  //Domination
  addDualSelectorKink("PainDomDeg","Dominant/Submissive","Dominant","Submissive");
  addDualSelectorKink("PainDomDeg","Domestic Servitude","Dominant","Submissive");
  addDualSelectorKink("PainDomDeg","Slavery","Dominant","Submissive");
  addDualSelectorKink("PainDomDeg","Pet Play","Dominant","Submissive");
  addDualSelectorKink("PainDomDeg","MD/LG, DD/LG, etc.","Dominant","Submissive");
  addDualSelectorKink("PainDomDeg","Discipline","Dominant","Submissive");
  addDualSelectorKink("PainDomDeg","Begging","Dominant","Submissive");
  addDualSelectorKink("PainDomDeg","Forced Orgasm","Dominant","Submissive");
  addDualSelectorKink("PainDomDeg","Orgasm Control","Dominant","Submissive");
  addDualSelectorKink("PainDomDeg","Orgasm Denial","Dominant","Submissive");
  addDualSelectorKink("PainDomDeg","Power Exchange","Dominant","Submissive");
  //Degradation
  addDualSelectorKink("PainDomDeg","Glory Hole","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Name Calling","Giving","Receiving");
  addDualSelectorKink("PainDomDeg","Humiliation","Giving","Receiving");

  //General
  addDualSelectorKink("GeneralMisc","Romance/Affection","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Handjob/Fingering","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Blowjob","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Deepthroat","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Swallowing","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Facials","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Cunnilingus","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Face-Sitting","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Edging","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Teasing","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Overstimulation","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","JOI / SI","Giving","Receiving");
  //Misc
  addDualSelectorKink("GeneralMisc","Fisting","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Gangbang","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Breath Play","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Impregnation","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Pregnancy","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Feminization","Giving","Receiving");
  addDualSelectorKink("GeneralMisc","Cuckold / Cuckquean","Giving","Receiving");

  //Clothing
  addDualSelectorKink("Clothing","Clothed Sex","Self","Partner");
  addDualSelectorKink("Clothing","Lingerie","Self","Partner");
  addDualSelectorKink("Clothing","Stockings","Self","Partner");
  addDualSelectorKink("Clothing","Heels","Self","Partner");
  addDualSelectorKink("Clothing","Leather","Self","Partner");
  addDualSelectorKink("Clothing","Latex","Self","Partner");
  addDualSelectorKink("Clothing","Uniform / Costume","Self","Partner");
  addDualSelectorKink("Clothing","Cross-dressing","Self","Partner");

  //Touch & Stimulation
  addDualSelectorKink("TouchStim","Cock/Pussy Worship","Actor","Subject");
  addDualSelectorKink("TouchStim","Ass Worship","Actor","Subject");
  addDualSelectorKink("TouchStim","Foot Play","Actor","Subject");
  addDualSelectorKink("TouchStim","Tickling","Actor","Subject");
  addDualSelectorKink("TouchStim","Sensation Play","Actor","Subject");
  addDualSelectorKink("TouchStim","Electro Stimulation","Actor","Subject");

  //Restrictive
  addDualSelectorKink("Restrictive","Gag","Self","Partner");
  addDualSelectorKink("Restrictive","Collar","Self","Partner");
  addDualSelectorKink("Restrictive","Leash","Self","Partner");
  addDualSelectorKink("Restrictive","Harness","Self","Partner");
  addDualSelectorKink("Restrictive","Chastity","Self","Partner");
  addDualSelectorKink("Restrictive","Bondage (Light)","Self","Partner");
  addDualSelectorKink("Restrictive","Bondage (Heavy)","Self","Partner");
  addDualSelectorKink("Restrictive","Encasement","Self","Partner");

  //Consentual Non Consent
  addDualSelectorKink("CNC","Non-con/Rape","Agressor","Target");
  addDualSelectorKink("CNC","Blackmail/Coercion","Agressor","Target");
  addDualSelectorKink("CNC","Kidnapping","Agressor","Target");
  addDualSelectorKink("CNC","Drugs/Alcohol","Agressor","Target");
  addDualSelectorKink("CNC","Sleep Play","Agressor","Target");

  //Surrealism
  addDualSelectorKink("Surrealism","Futanari","Self","Partner");
  addDualSelectorKink("Surrealism","Furry","Self","Partner");
  addDualSelectorKink("Surrealism","Vore","Predator","Prey");
  addDualSelectorKink("Surrealism","Transformation","Self","Partner");
  addDualSelectorKink("Surrealism","Tentacles","Actor","Subject");
  addDualSelectorKink("Surrealism","Monster/Alien","Self","Partner");

  //Fluids
  addDualSelectorKink("Fluids","Blood","Self","Partner");
  addDualSelectorKink("Fluids","Watersports","Self","Partner");
  addDualSelectorKink("Fluids","Scat","Self","Partner");
  addDualSelectorKink("Fluids","Lactation","Self","Partner");
  addDualSelectorKink("Fluids","Diapers","Self","Partner");
  addDualSelectorKink("Fluids","Cum Play","Self","Partner");
  addDualSelectorKink("Fluids","Omarashi","Self","Partner");

  //Taboo
  addSingleSelectorKink("Taboo","Incest")
  addDualSelectorKink("Taboo","Ageplay","Self","Partner");
  addSingleSelectorKink("Taboo","Necrophillia");
  addDualSelectorKink("Taboo","Cheating","Self","Partner");
  addSingleSelectorKink("Taboo","Exhibitionism");
  addSingleSelectorKink("Taboo","Voyeurism");

  //Toys
  addDualSelectorKink("Toys","Dildos","Self","Partner");
  addDualSelectorKink("Toys","Plugs","Self","Partner");
  addDualSelectorKink("Toys","Vibrators","Self","Partner");
  addDualSelectorKink("Toys","Sounding","Self","Partner");
}

function loadData(){
  urlParam = getDataURLParam();
  cookie = getSaveDataCookie();
  if(urlParam!==undefined)loadListData(urlParam);
  else if(cookie!==undefined)loadListData(cookie);
}

function initSelectorColouringHelper(){
 Array.from(document.getElementsByClassName("KinkSelectMenu")).forEach(kinkSelector => kinkSelector.onchange = selectColouringHelperUpdate);
}

generateKinkSelectors();
loadData();
initSelectorColouringHelper();