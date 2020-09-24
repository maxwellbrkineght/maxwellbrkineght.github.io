// decoder.js by Maxwell
// please kalau mau nyolong kasih jangan hilangin credit authornya !!!!

var x = {
  "A":"mJHumsdrTaPSnnE","a":"_vGBmncfCovC-az","B":"LLVHaKi=fILFanU","b":"H-RoHWBWuFefmyX","C":"sKefC=_Ce-DuzdO","c":"yHvmrNIyfBjExv-","D":"AhOpAKREh_CO=hd","d":"xvrCP-OdONNQjCB","E":"QnMTpoyJxYuuanv","e":"sKOd=PU_l-Kf_js","F":"TDUXbYpoitGJIp=","f":"JOfGpyjAvBO-qdb","G":"dbaMcseyMfpyhJU","g":"irOWacsDEqqSGBD","H":"VthYbNaucfoJ-dA","h":"h_iuLOelxbB=PHI","I":"vRf_GxahmEnJPTp", "J":"VyLmeKkoshEa_ty","j":"eaGCEMQWVSOlCLl","K":"bbISGTkOW-Pv-ea","k":"nix_pTypyKwtMhr","L":"Knal=I=usLQgFFr","l":"=dFxvgQDNCHXBKC","M":"GzOJmyDHdKxrTC_","m":"NBxJfEv-rUmlClS","N":"w-vYvRYcGIVVd_r","n":"wmqsZpZiPDhUdEy","O":"r_JUPASWYChiczp","o":"mG-AelZtxTJjQeb","P":"m_P_AgH_VzMBWAt", "p":"NjI_LdVfmSVKKAt","Q":"mpdCBrZhdZwyMQz","q":"WpK-lRvIHdYi_S-","R":"ASWZnaotMibYtPp","r":"ynPgXAFaRn-mzqM","S":"powMPbPhdevDZVD","s":"YW=K=jiVbciPQXZ","T":"pa_WEPvLZ_I=GVl","t":"PTYExOuyOynHZDK","U":"TkVl-uEz__c__I_","u":"SFDNMl_RVv_CDIY","V":"c-pMdddkCZEDGZe","v":"V_qCxQWCkTzXhpO","W":"qNlqE_TkObYt-Ej","w":"MPj_wuBjvydwZOb","X":"w-MSjXdIklLuKEz","x":"AqZUohAoRNRosHs","Y":"SPm-iMRFvkAbTR_","y":"wYbRVI-LQXEysFa","Z":"vMauTIUUCOmsAxk","z":"rxqiIIM_=-fozeX","0":"ZcfXoHjXgnPWHGA","1":"n-R=kzInVeJrVzA","2":"_NGGr=AMxI_bN=a","3":"_ko_fBtbZBJ-SFP","4":"fJTqCzOxG_BuGfB","5":"zmXMC_VkgOZUvzg","6":"Vz=RPFFgVJq__DR","7":"fvKZwTgiyCJDPhe","8":"KszBcMpVRjz_jsj","9":"eaLLKpgPpWQriuu","_":"b_Pyu-vNhmLIZxw","-":"KHignj-FAUEmXGw","=":"rlUWy_uhmYFqMbV","_":"jMtNdvZjrmPISlf",".":"-fbnhJBi-AcoSNT","@":"bzbn_hVFPqFnv-d","/":"5_A62a88d-09sA6",":":"dCbf5AeC2--c8Cf","i":"-s81bc6b24b_2ab"," ":"0Z_53AXddbd65Mb","(":"f5ddd3M8aMdd9a_",")":"Z7M-aZdZ3M3A-Ac"
}

function encode(str) {
  var encoded = ''
  for (var i = 0; i < str.length; i++) {
    encoded += x[str.charAt(i)]
  }
  return encoded;
}

function decode(str) {
  var decoded = ''
  var ct = str.length / 15

  for (var i = 0; i < ct; i++) {
    decoded += Object.keys(x).find(key => x[key] === str.substring((15*(i+1))-15, 15*(i+1)))
  }

  return decoded;
}
