// body elements 
const input = document.querySelector('.input');
const actionBtn = document.querySelector('.actionBtn');
const downloadBtn = document.querySelector('.downloadBtn');
const copyBtn = document.querySelector('.copyBtn');
const navbar = document.querySelector('.navbar');
const vnavbar = document.querySelectorAll('.vnavbar');
const options = document.querySelector('.options');
const MFoptions = document.querySelector('.MFoptions');
const comboFilter = document.querySelector('.comboFilter');
const passTool = document.querySelector('.passTool');
const mailFilter = document.querySelector('.mailFilter');
const removeList = document.querySelector('.removeList');
const pOption = document.querySelector('.pOptions');
const pNotContain = document.querySelector('.pNotContain');
const insert = document.querySelector('.pInsert');
const pModify = document.querySelector('.pModify');
// body events listners 
downloadBtn.addEventListener('click', downloadtxt);
copyBtn.addEventListener("click", CopyToClipboard);
actionBtn.addEventListener("click", gettext);
comboFilter.addEventListener("click", comboFilterClick);
passTool.addEventListener("click", passToolClick);
mailFilter.addEventListener("click", mailFilterClick);
removeList.addEventListener("click", removeListClick);

// sidebar elements COMBO_FILTER
const barpassTool = document.querySelectorAll('.PT');
const barcomboFilter = document.querySelectorAll('.CF');
const barmailfilter = document.querySelectorAll('.MF');
const barremovelist = document.querySelectorAll('.RL');
const randomize = document.querySelector('.randomize');
const captureRemover = document.querySelector('.captureRemover');
const removeDuplicate = document.querySelector('.removeDuplicate');
const getDuplicate = document.querySelector('.getDuplicate');
const comboOptimiser = document.querySelector('.comboOptimiser');
const removeEmptylines = document.querySelector('.removeEmptylines');
const sortLines = document.querySelector('.sortLines');
const emailToUser = document.querySelector('.emailToUser');
const emailToemail = document.querySelector('.emailToemail');


//event listners COMBO_FILTER
randomize.addEventListener("click", randomizeClick);
captureRemover.addEventListener("click", captureRemoverClick);
removeDuplicate.addEventListener("click", removeDuplicateClick);
getDuplicate.addEventListener("click", getDuplicateClick);
comboOptimiser.addEventListener("click", comboOptimiserClick);
removeEmptylines.addEventListener("click", removeEmptylinesClick);
sortLines.addEventListener("click", sortLinesClick);
emailToUser.addEventListener("click", emailToUserClick);
emailToemail.addEventListener("click", emailToemailClick);

// sidebar elements PASSWORD_TOOLs
const passOptimiser = document.querySelector('.passOptimiser')
const insertText = document.querySelector('.insertText')
const modify = document.querySelector('.modify')
const passNotContain = document.querySelector('.passNotContain')

// event listners PASSWORD_TOOLs
passOptimiser.addEventListener("click", passOptimiserClick)
insertText.addEventListener("click", insertTextClick)
modify.addEventListener("click", modifyClick)
passNotContain.addEventListener("click", passNotContainClick)

// sidebar elements MAILFILTER
let domainbox = document.querySelector('.domainbox');
let domainlist = document.querySelector('.domainlist');
let MFdefault = document.querySelector('.MFdefault');
let MFdomainlist = document.querySelector('.MFdomainlist');
const mailfilterDefault = document.querySelector('.mailfilterDefault')
const multiDomain = document.querySelector('.multiDomain')

// event listners MAILFILTER
mailfilterDefault.addEventListener("click", mailfilterDefaultClick)
multiDomain.addEventListener("click", multiDomainClick)

// sidebar elements REMOVELIST
let removebox = document.querySelector('.removebox');
let RLoptions = document.querySelector('.RLoptions');
const removelistDefault = document.querySelector('.removelistDefault');
let RLlist = document.querySelector('.RLlist');
let RLremovelist = document.querySelector('.RLremovelist');
// event listners REMOVELIST
removelistDefault.addEventListener("click" , removelistDefaultClick )

function removeAllSactive() {
    let sactive = document.getElementsByClassName("sactive");
    sactive[0].classList.remove("sactive");
}
function removeAllActive() {
    let active = document.getElementsByClassName("active");
    active[0].classList.remove("active");
}
function setSactive(e) {
    e.classList.add('sactive');
}
function setActive(e) {
    e.classList.add('active');
}
function removedisplay() {
    for (let i = 0; i < vnavbar.length; i++) {
        vnavbar[i].classList.add("displaynone");
    }
    options.classList.add("displaynone"); //Options box for passtools
    MFoptions.classList.add("displaynone"); //Options box for mailfilter
    domainbox.classList.add("displaynone");
    removebox.classList.add("displaynone");
    RLoptions.classList.add('displaynone');
}
function HideInsertTab() {
    insert.classList.add("displaynone");
    pOption.classList.remove("displaynone");
    pModify.classList.remove("displaynone");
}
function ShowInsertTab() {
    insert.classList.remove("displaynone");
    pOption.classList.add("displaynone");
    pModify.classList.add("displaynone");
    pNotContain.classList.add("displaynone");
}
function HideModifyTab() {
    insert.classList.remove("displaynone");
    pModify.classList.add("displaynone");
    pOption.classList.remove("displaynone");
}
function ShowModifyTab() {
    insert.classList.add("displaynone");
    pModify.classList.remove("displaynone");
    pOption.classList.add("displaynone");
    pNotContain.classList.add("displaynone");

}

// click functions
function comboFilterClick() {
    removeAllActive()
    setActive(this);
    removedisplay();
    for (let i = 0; i < barcomboFilter.length; i++) {
        barcomboFilter[i].classList.remove("displaynone");
    }
    removeAllSactive();
    setSactive(comboOptimiser);
    HideInsertTab();
}
//sidebarclicks
function randomizeClick() {
    removeAllSactive();
    setSactive(this);
}
function captureRemoverClick() {
    removeAllSactive();
    setSactive(this);
}
function removeDuplicateClick() {
    removeAllSactive();
    setSactive(this);
}
function getDuplicateClick() {
    removeAllSactive();
    setSactive(this);
}
function comboOptimiserClick() {
    removeAllSactive();
    setSactive(this);
}
function removeEmptylinesClick() {
    removeAllSactive();
    setSactive(this);
}
function sortLinesClick() {
    removeAllSactive();
    setSactive(this);
}
function emailToUserClick() {
    removeAllSactive();
    setSactive(this);
}
function emailToemailClick() {
    removeAllSactive();
    setSactive(this);
}
function passToolClick() {
    removeAllActive()
    setActive(this);
    removedisplay();
    for (let i = 0; i < barpassTool.length; i++) {
        barpassTool[i].classList.remove("displaynone");
    }
    options.classList.remove("displaynone");//Options box for passtools
    removeAllSactive();
    setSactive(passOptimiser);
    HideInsertTab();
    pModify.classList.add("displaynone");
}
// sidebar clicks
function passOptimiserClick() {
    removeAllSactive();
    setSactive(this);
    HideInsertTab();
    HideModifyTab();
    pNotContain.classList.add("displaynone");
    insert.classList.add("displaynone");
}
function insertTextClick() {
    removeAllSactive();
    setSactive(this);
    HideModifyTab();
    ShowInsertTab();
}
function modifyClick() {
    removeAllSactive();
    setSactive(this);
    HideInsertTab();
    ShowModifyTab();
}
function passNotContainClick() {
    removeAllSactive();
    setSactive(this);
    HideModifyTab();
    ShowInsertTab();
    insert.classList.add("displaynone");
    pNotContain.classList.remove("displaynone");

}
function mailFilterClick() {
    removeAllActive()
    setActive(this);
    removedisplay();
    for (let i = 0; i < barmailfilter.length; i++) {
        barmailfilter[i].classList.remove("displaynone");
    }
    removeAllSactive();
    setSactive(mailfilterDefault);
    MFoptions.classList.remove("displaynone");//Options box for MailFilter
    MFdomainlist.classList.add('displaynone');

}
function mailfilterDefaultClick() {
    removeAllSactive();
    setSactive(this);
    MFdefault.classList.remove('displaynone');
    MFdomainlist.classList.add('displaynone');
    domainbox.classList.add("displaynone");
}
function multiDomainClick() {
    removeAllSactive();
    setSactive(this);
    MFdefault.classList.add('displaynone');
    MFdomainlist.classList.remove('displaynone');
    domainbox.classList.remove("displaynone");

}

function removeListClick() {
    removeAllActive()
    setActive(this);
    removedisplay();
    for (let i = 0; i < barremovelist.length; i++) {
        barremovelist[i].classList.remove("displaynone");
    }
    removeAllSactive();
    setSactive(removelistDefault);
    //MFdomainlist.classList.remove('displaynone');
    //domainbox.classList.remove("displaynone");
    RLoptions.classList.remove('displaynone');
    removebox.classList.remove("displaynone");

}
function removelistDefaultClick(){
    removeAllSactive();
    setSactive(this);
    RLoptions.classList.remove('displaynone');
    removebox.classList.remove("displaynone");

}

function downloadtxt() {
    var text = input.value;
    var c = document.createElement("a");
    c.download = "text.txt";
    var data = new Blob([text], { type: 'text/plain' });
    c.href = window.URL.createObjectURL(data);
    c.click();
}
function CopyToClipboard() {
    navigator.clipboard.writeText(input.value);
    alert("Copied")
}

// sidebar functions 

function randomizeF() {
    const lines = input.value.split(/\r?\n/);
    for (let i = lines.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    input.value = lines.join("\n");
}

function captureRemoverF() {

    // matching email using regex
    let match = input.value.match(/[0-9a-zA-Z_.]+@[0-9a-zA-Z_.]+:[\S]+/g);
    if (match == null) {
        input.value = "";
        console.log("Empty match");
    }
    else {
        // join replace the , in the sting to the given character in the "".
        input.value = match.join("\n");
    }
}
function removeDuplicatesF() {
    let lines = input.value.split(/\r?\n/);
    let newline = [...new Set(lines)];
    input.value = newline.join("\n");
}
function comboOptimiserF() {
    captureRemoverF();
    removeDuplicatesF();
    removeEmptylinesF();
}
function getDuplicatesF() {
    let lines = input.value.split(/\r?\n/);
    const map = {};
    let newline = lines.filter(element => {
        if (map[element]) {
            return true
        } else {
            map[element] = true;
            return false;
        }
    });
    lines = [...new Set(newline)];
    input.value = lines.join("\n");
}

function sortLinesF() {
    let lines = input.value.split(/\r?\n/);
    lines.sort();
    input.value = lines.join("\n");
}
function removeEmptylinesF() {
    let lines = input.value;
    let regex = /^\s*$(?:\r\n?|\n)/gm;
    let result = lines.replace(regex, "");
    input.value = result;
}
function emailToUserF() {
    let lines = input.value;
    let regex = /([0-9a-zA-Z_.]+)@[0-9a-zA-Z_.]+:([\S]+)/gm;
    let result = lines.replace(regex, "$1:$2");
    input.value = result;
}
function emailToemailF() {
    let lines = input.value;
    let regex = /[0-9a-zA-Z_.]+@[0-9a-zA-Z_.]+/gm;
    let match = lines.match(regex);
    if (match == null) {
        input.value = "";
        console.log("Empty match");
    }
    else {
        // join replace the , in the sting to the given character in the "".
        input.value = match.join("\n");
    }
    input.value = result;
}
function passOptimiserF() {
    let plength = document.querySelector('.plength');
    let pmin = document.querySelector('.pmin');
    let pmax = document.querySelector('.pmax');
    let pupper = document.querySelector('.pupper');
    let plower = document.querySelector('.plower');
    let psymbol = document.querySelector('.psymbol');
    let pnum = document.querySelector('.pnum');
    let mininput = document.querySelector('.mininput');
    let maxinput = document.querySelector('.maxinput');
    //checkbox check for length
    if ((pmin.checked == false && pmax.checked == false) && plength.checked == true) {
        plength.checked = false;
        console.log("Min or Max unchecked --> Length unchecked");
    }
    if ((pmin.checked == true || pmax.checked == true) && plength.checked == false) {
        pmin.checked = false;
        pmax.checked = false;
        console.log(" Length unchecked --> Min or Max unchecked");
    }
    if (pmin.checked == false && mininput.value != "") {
        console.log("min unchecked --> input cleaned");
        mininput.value = "";
    }
    if (pmax.checked == false && maxinput.value != "") {
        console.log("max unchecked --> input cleaned");
        maxinput.value = "";
    }
    //length function
    function plengthF(lines) {

        if (pmin.checked == true && mininput.value == "") {
            pmin.checked = false;
            console.log("Min Value is null");
        }
        if (pmax.checked == true && maxinput.value == "") {
            pmax.checked = false;
            console.log("Max Value is null");
        }
        if (((+mininput.value) > (+maxinput.value)) && (pmin.checked == true && pmax.checked == true)) {
            console.log(mininput.value);
            console.log(maxinput.value);
            maxinput.value = "";
            console.log("Min > Max --> max=null");
        }
        let regex;
        //for min and max value
        if (pmin.checked == true) {
            regex = new RegExp(`^.*:[\\S]{${mininput.value},${maxinput.value}}$`, 'gm');
        }
        //for only max value
        else {
            regex = new RegExp(`^.*:[\\S]{0,${maxinput.value}}$`, 'gm');
        }
        let result = lines.match(regex);
        return result;
        // console.log(result);
    }
    function contains(lines) {
        let rupper = "", rlower = "", rnum = "", rsymbol = "";
        if (pupper.checked == true) {
            rupper = "(?=.*[A-Z])"
        }
        if (plower.checked == true) {
            rlower = "(?=.*[a-z])"
        }
        if (pnum.checked == true) {
            rnum = "(?=.*\\d)"
        }
        if (psymbol.checked == true) {
            rsymbol = "(?=.*[*\\.!@#$%^&\"',.?~`_+\\-])"
        }
        let contains_regex = new RegExp(`^.*:${rupper}${rlower}${rnum}${rsymbol}[\\S]*$`, "gm")
        // console.log(contains_regex);
        let result = lines.match(contains_regex);
        return result;
    }
    let result = input.value;

    if (plength.checked == true) {
        result = plengthF(result);
        if (result == null) {
            result = "";
            console.log("Empty match");
        }
        else {
            // join replace the , in the sting to the given character in the "".
            result = result.join("\n");
        }
        if ((((pupper.checked || plower.checked) || pnum.checked) || psymbol.checked) == true) {
            result = contains(result);
            if (result == null) {
                input.value = "";
                console.log("Empty match");
            }
            else {
                // join replace the , in the sting to the given character in the "".
                result = result.join("\n");
            }
        }
        input.value = result;
    }
    else if ((((pupper.checked || plower.checked) || pnum.checked) || psymbol.checked) == true) {
        result = contains(result);
        if (result == null) {
            input.value = "";
            console.log("Empty match");
        }
        else {
            // join replace the , in the sting to the given character in the "".
            result = result.join("\n");
        }
        input.value = result;
    }
    else {
        alert("No Checkbox selected for Password tool")
    }
}
function insertTextF() {
    const pbefore = document.querySelector('.pbefore');
    const pafter = document.querySelector('.pafter');
    const ptext = document.querySelector('.ptext');
    if (pbefore.checked == true) {
        ptextvalue = ptext.value;
        let lines = input.value;
        regex = /:/gm;
        replace_value = ':' + ptextvalue;
        match = lines.replace(regex, replace_value);
        input.value = match;
    }
    else if (pafter.checked == true) {
        ptextvalue = ptext.value;
        let lines = input.value;
        regex = /$/gm;
        match = lines.replace(regex, ptextvalue);
        input.value = match;
    }
    else alert("Checkbox NULL")
}
function modifyF() {
    const pUpperCase = document.querySelector('.pUpperCase');
    const pLowerCase = document.querySelector('.pLowerCase');
    if (pUpperCase.checked == true) {
        let regex = /(?<=:)(\w)/gm;
        let lines = input.value;
        let match = lines.replace(regex, function (a) { return a.toUpperCase(); });
        input.value = match;

    }
    else if (pLowerCase.checked == true) {
        let regex = /(?<=:)(\w)/gm;
        let lines = input.value;
        let match = lines.replace(regex, function (a) { return a.toLowerCase(); });
        input.value = match;
    }
}
function passNotContainF() {
    let pNotupper = document.querySelector('.pNotupper');
    let pNotlower = document.querySelector('.pNotlower');
    let pNotnum = document.querySelector('.pNotnum');
    let pNotsymbol = document.querySelector('.pNotsymbol');
    let rupper = "", rlower = "", rnum = "", rsymbol = "";
    if (pNotupper.checked == true) {
        rupper = "(?![A-Z])"
    }
    if (pNotlower.checked == true) {
        rlower = "(?![a-z])"
    }
    if (pNotnum.checked == true) {
        rnum = "(?![0-9])"
    }
    if (pNotsymbol.checked == true) {
        rsymbol = "(?![*\\.!@#$%^&\"',.?~`_+\\-])"
    }
    let regex = new RegExp(`^.*:(?:${rupper}${rlower}${rnum}${rsymbol}.)*$`, "gm");
    let lines = input.value;
    let result = lines.match(regex);
    if (result == null) {
        result = "";
        console.log("Empty match");
    }
    else {
        // join replace the , in the sting to the given character in the "".
        result = result.join("\n");
    }
    input.value = result;
}
function mailfilterDefaultF() {
    let MFexact1 = document.querySelector('.MFexact1');
    const MFtext = document.querySelector('.MFtext');
    if (MFtext.value != "") {
        let MFinput = MFtext.value;
        MFinput = MFinput.replace('.', '\\.'); //replacing input value
        let regex = new RegExp(`^.*${MFinput}[\\S]*`, "gm");
        // let regex=new RegExp(`^.*${MFtext.value}[\\S]*`,"gm");
        if (MFexact1.checked == true) {
            MFinput = MFinput.replace('@', '');
            MFinput = MFinput.replace(':', '');
            regex = new RegExp(`^.*(?<=@)[\\S]*${MFinput}[\\S]*(?<=:)[\\S]*`, "gm");
        }
        // console.log(regex);
        let lines = input.value;
        let result = lines.match(regex);
        if (result == null) {
            result = "";
            console.log("Empty match");
        }
        else {
            // join replace the , in the sting to the given character in the "".
            result = result.join("\n");
        }
        input.value = result;
    }
}
function multiDomainF() {
    let domainbox = document.querySelector('.domainbox');
    let MFexact = document.querySelector('.MFexact');
    let MFremaining = document.querySelector('.MFremaining');
    let domainname = domainlist.value.split(/\n/);
    // console.log(domainname);
    function createBox(domainname) {
        if (domainname != "") {
            let newbox = document.createElement('div');
            let classname = domainname.replace(/[^a-z]*/gm, "");//creating class name without special character
            // console.log(classname);
            newbox.innerHTML = `<legend class="domaintitle">${domainname}</legend>
        <textarea name="domainbox" class="border domain ${classname}" rows="10" cols="40" placeholder="No result found"></textarea></div>`;
            domainbox.append(newbox);
        }
        else {
            alert("DomainList Error");
        }
    }
    domainname.forEach(element => {
        createBox(element);
        let classname = element.replace(/[^a-z]*/gm, "");
        // console.log(classname);
        let elementbox = document.querySelector(`.${classname}`)
        element = element.replace('.', '\\.');
        let regex = new RegExp(`^.*${element}[\\S]*`, "gm");
        if (MFexact.checked == true) {
            element = element.replace('@', '');
            element = element.replace(':', '');
            regex = new RegExp(`^.*(?<=@)[\\S]*${element}[\\S]*(?<=:)[\\S]*`, "gm");
        }
        let lines = input.value;
        let result = lines.match(regex);
        if (result == null) {
            result = "";
            console.log("Empty match");
        }
        else {
            // join replace the , in the sting to the given character in the "".
            result = result.join("\n");
        }
        elementbox.value = result;
    });
    let result_remaining = input.value;
    if (MFremaining.checked == true) {
        createBox("Remaining Domains");
        let classname = "emainingomains";
        let elementbox = document.querySelector(`.${classname}`)
        let remainingTitle = elementbox.previousElementSibling;
        remainingTitle.classList.add("remainingTitle")
        domainname.forEach(element => {
            let regex = new RegExp(`^(?:(?!${element}).)*$`, "gm");
            result_remaining = result_remaining.match(regex);
            // console.log(result_remaining);
            if (result_remaining == null) {
                result_remaining = "";
                console.log("Empty match");
            }
            else {
                // join replace the , in the sting to the given character in the "".
                result_remaining = result_remaining.join("\n");
            }
        });
        elementbox.value = result_remaining;
    }
}
function removelistDefaultF() {  
    let RLremoved = document.querySelector('.RLremoved');
    let listValue = RLremovelist.value.split(/\n/); 
    let result_remaining = input.value;

    if(RLremoved.checked ==true){
    let newbox = document.createElement('div');
    let classname = "RLremovedBox";//creating class name without special character
    // console.log(classname);
    newbox.innerHTML = `<legend class="removetitle">Removed</legend>
    <textarea name="removebox" class="border domain ${classname}" rows="10" cols="40" placeholder="No result found"></textarea></div>`;
    removebox.append(newbox);
    let RLremovedBox = document.querySelector(".RLremovedBox")
  let lines = input.value.split(/\r?\n/)
  let rl = RLremovelist.value.split(/\r?\n/);
   lines =[ ...lines, ...rl ]
    console.log(lines);
  const map = {};
  let newline = lines.filter(element => {
      if (map[element]) {
          return true
      } else {
          map[element] = true;
          return false;
      }
  });
  lines = [...new Set(newline)];
  RLremovedBox.value = lines.join("\n");
}
  
  listValue.forEach(element => {
    let regex = new RegExp(`^(?:(?!\\b${element}\\b).*)$`, "gm");
    result_remaining = result_remaining.match(regex);
    // console.log(result_remaining);
    if (result_remaining == null) {
        result_remaining = "";
        console.log("Empty match");
    }
    else {
        // join replace the , in the sting to the given character in the "".
        result_remaining = result_remaining.join("\n");
    }})
  input.value = result_remaining;
}
function gettext() {
    // let active = document.getElementsByClassName("active")
    let sactive = document.getElementsByClassName("sactive")
    if (input.value == "") {
        alert("Input area empty.");
    }
    // actionBtn.style.cursor="progress";
    switch (sactive[0]) {
        case captureRemover:
            captureRemoverF();
            break;
        case randomize:
            randomizeF();
            break;
        case removeDuplicate:
            removeDuplicatesF();
            break;
        case getDuplicate:
            getDuplicatesF();
            break;
        case removeEmptylines:
            removeEmptylinesF();
            break;
        case comboOptimiser:
            comboOptimiserF();
            break;
        case sortLines:
            sortLinesF();
            break;
        case emailToUser:
            emailToUserF();
            break;
        case emailToemail:
            emailToemailF();
            break;
        case passOptimiser:
            passOptimiserF();
            break;
        case insertText:
            insertTextF();
            break;
        case modify:
            modifyF();
            break;
        case passNotContain:
            passNotContainF();
            break;
        case mailfilterDefault:
            mailfilterDefaultF();
            break;
        case multiDomain:
            multiDomainF();
            break;
        case removelistDefault:
            removelistDefaultF();
            break;
        default:
            console.log("DEfault");
            break;
    }
}